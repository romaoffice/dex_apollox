
const common = require("./common");
const db = require("./db")
const Web3 = require("web3");
const {tokenList,wbnb} = require("./config/tokens")
const ethers = require("ethers");

let ordersList = {};

const updateDb = async(chainId,orderbook)=>{
    const record = db.get_records("select * from positions where orderid="+orderbook.id);
    const status = ["open","canceled","executed"];
    if(record.length>0){
        const order = record[0];
        if(Number(orderbook.orderState)>0){
            const orderstatus = status[Number(orderbook.orderState)];
            db.update_record("positions",order.id,{orderstatus});
            console.log("updated",order.id,{orderstatus})            
        }

    }else{
        const timestamp = (new Date()).toISOString().replace('T',' ').replace('Z','').slice(0,19);
        const assetIn = orderbook.assetIn.toLowerCase()==wbnb.address.toLowerCase() ? wbnb:tokenList[orderbook.assetIn.toLowerCase()];
        const assetOut = orderbook.assetOut.toLowerCase()==wbnb.address.toLowerCase() ? wbnb:tokenList[orderbook.assetOut.toLowerCase()];
        const inAsset=assetIn.symbol
        const inAmount = ethers.utils.formatUnits(
              orderbook.assetInOffered,
              assetIn.decimals
            );
        const outAmount = ethers.utils.formatUnits(
              orderbook.assetOutExpected,
              assetOut.decimals
            );
        const token = orderbook.assetIn.toLowerCase()==wbnb.address.toLowerCase()?assetOut:assetIn;
        const pairs= token.base+token.quote;
        const side = assetIn.symbol == token.quote?"buy":"sell";
        const price = assetIn.symbol == token.quote?(inAmount/outAmount):(outAmount/inAmount);
        const amount =assetIn.symbol == token.quote? outAmount:inAmount;
        let position = {
            chainid:chainId,
            owner:orderbook.traderAddress,
            transactionid:"",
            orderstatus:"open",
            orderid:orderbook.id,
            ordertype:"limit",
            pairs:pairs,
            side:side,
            price:price,
            timestamp,
            trstatus:"confirm",
            inAmount:inAmount,
            amount,
            inAsset:inAsset
        }
        db.insert_record("positions",position);
        console.log("inserted",position)

    }
}
const executeChain = async(chainId)=>{
    const web3 = new Web3(new Web3.providers.HttpProvider(common.web3url[chainId]));
    const myContract = new web3.eth.Contract(common.LIMIT_ABI[chainId],common.contract_limit_order[chainId]);
    if(ordersList[chainId]){
        const ordersNum = await myContract.methods.ordersNum().call();
        if(Number(ordersList[chainId].ordersNum)<Number(ordersNum)){
            for(let orderId = Number(ordersList[chainId].ordersNum);orderId<Number(ordersNum);orderId++){
                const orderbook = await myContract.methods.orderBook(orderId).call();
                if(orderbook.orderStat=='0'){
                    ordersList[chainId].orders.push(orderId);
                }
            }
        }
    }else{
        const ordersNum = await myContract.methods.ordersNum().call();
        const orderLength = await myContract.methods.getOrdersLength().call();
        ordersList[chainId] = {ordersNum:ordersNum,orders:[]}
        for(let i=0;i<orderLength;i++){
            const orderId = await myContract.methods.orders(i).call();
            ordersList[chainId].orders.push(orderId);
        }
    }
    
    for(let i=ordersList[chainId].orders.length-1;i>=0;i--){
        
        let orderBook = await myContract.methods.orderBook(ordersList[chainId].orders[i]).call();
        await updateDb(chainId,orderBook);
        const orderState = Number(orderBook.orderState);
        if(orderState>0){
            ordersList[chainId].orders.splice(i,1);
            continue;
        }

        const orderId = orderBook.id;
        let tx = {
            from: common.address_executor, 
            to: common.contract_limit_order[chainId], 
            data: myContract.methods.executeOrder(orderId).encodeABI() 
        };
        try{
            const data = await myContract.methods.executeOrder(orderId).estimateGas();
            tx.gas = data;
            const signedTx = await web3.eth.accounts.signTransaction(tx, common.privateKey);
            console.log('ready to execute order for ',orderId,signedTx);
            const sentTx =await  web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);          
        }catch(e){
            //console.log(e.message,orderId)
        }

    }
}

const executeAll=async ()=>{
    try{
        const orders = db.get_records("SELECT * FROM positions where trstatus='confirm' and orderstatus='open'");
        orders.map(async(order)=>{
            const web3 = new Web3(new Web3.providers.HttpProvider(common.web3url[order.chainid]));
            const myContractBsc = new web3.eth.Contract(common.LIMIT_ABI[common.ChainId.BSC],common.contract_limit_order[common.ChainId.BSC]);

            const limitContract = {
                [common.ChainId.BSC]:myContractBsc,

            }
            const myContract = limitContract[order.chainid];
            const orderID = order.orderid;

            try{
                const orderBook = await myContract.methods.orderBook(orderID).call();
                //console.log(orderBook);
                if(orderBook.orderState!=0){
                    if(orderBook.orderState===1){//canceled
                        db.update_record("positions",order.id,{"orderstatus":"canceled"});

                    }else{
                        db.update_record("positions",order.id,{"orderstatus":"executed"});
                    }
                    return;
                }
                let tx = {
                    from: common.address_executor, 
                    to: common.contract_limit_order[order.chainid], 
                    data: myContract.methods.executeOrder(orderID).encodeABI() 
                  };
                  const data = await myContract.methods.executeOrder(orderID).estimateGas();
                tx.gas = data;
                const signedTx = await web3.eth.accounts.signTransaction(tx, common.privateKey);
                console.log('ready to execute order for ',orderID,signedTx);
                const sentTx =await  web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);  

                db.update_record("positions",order.id,{"orderstatus":"executed"});
                console.log('executed order for:',orderBook,sentTx);
            }catch(e){
                //console.log(e.message);
                //console.log(new Date(),'not ready to execute order for ',orderID,e.message);
            }
        })
    }catch(e){
        console.log('db error');
    }

    setTimeout(executeAll,20000);
}


const update = async()=>{
    await executeChain(56);
    setTimeout(update,30000);
}

module.exports = {
  update
}

