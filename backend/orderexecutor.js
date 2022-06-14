
const common = require("./common");
const db = require("./db")
const {tokenList,wbnb} = require("./config/tokens")
const {ethers,BigNumber} = require("ethers");
const axios = require("axios");

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
    try{
        const provider = new ethers.providers.JsonRpcProvider(common.web3url[chainId]);
        let walletWithProvider = new ethers.Wallet(common.privateKey, provider);
        const myContract = new ethers.Contract(common.contract_limit_order[chainId],common.LIMIT_ABI[chainId],walletWithProvider);
        if(ordersList[chainId]){
            const ordersNum = await myContract.ordersNum();
            if(Number(ordersList[chainId].ordersNum)<Number(ordersNum)){
                for(let orderId = Number(ordersList[chainId].ordersNum);orderId<Number(ordersNum);orderId++){
                    const orderbook = await myContract.orderBook(orderId);
                    if(orderbook.orderStat=='0'){
                        ordersList[chainId].orders.push(orderId);
                    }
                }
            }
        }else{
            const ordersNum = await myContract.ordersNum();
            const orderLength = await myContract.getOrdersLength();
            ordersList[chainId] = {ordersNum:ordersNum,orders:[]}
            for(let i=0;i<orderLength;i++){
                const orderId = await myContract.orders(i);
                ordersList[chainId].orders.push(orderId);
            }
        }
        for(let i=ordersList[chainId].orders.length-1;i>=0;i--){
            
            let orderBook = await myContract.orderBook(ordersList[chainId].orders[i]);
            await updateDb(chainId,orderBook);
            const orderState = Number(orderBook.orderState);
            if(orderState>0){
                ordersList[chainId].orders.splice(i,1);
                continue;
            }

            const assetIn = orderBook.assetIn;
            const assetOut = orderBook.assetOut;
            const amountIn = orderBook.assetInOffered;
            const amountOut = orderBook.assetOutExpected;

            const buyToken =assetOut==wbnb.address?"BNB":assetOut;
            const sellToken =assetIn==wbnb.address?"BNB":assetIn;
            const url ="https://bsc.api.0x.org/swap/v1/quote?buyToken="+buyToken+"&sellToken="+sellToken+"&sellAmount="+amountIn.toString()+"&slippagePercentage=0.03";
            const _response  = await axios.get(url);
            const response = await _response.data;

            const BuyAmount = BigNumber.from(response.buyAmount);
            const BuyAmountExpected = BigNumber.from(amountOut);
            if(BuyAmountExpected.gt(BuyAmount)) continue;
            console.log('executing')
            const ordertype = assetIn==wbnb.address?0:assetOut==wbnb.address?1:2;
            let value = BigNumber.from(response.value);
            let options = {
                gasLimit : 0,
                value:wbnb.address==assetIn?(value.mul(1000+STAKEFEE*1000).div(1000)):0
            };

            const gasLimit = await myContract.estimateGas.marketSwap(
                ordertype,
                assetIn,
                assetOut,
                response.allowanceTarget,
                response.to,
                response.data,
                response.sellAmount,
                options)
            options.gasLimit = gasLimit;
            const tx = await myContract.marketSwap(
                ordertype,
                assetIn,
                assetOut,
                response.allowanceTarget,
                response.to,
                response.data,
                response.buyAmount,
                options);

        }
    }catch(e){
        console.log('executeChain',e)
    }
    
}



const update = async()=>{
    await executeChain(56);
    setTimeout(update,30000);
}

module.exports = {
  update
}

