
const axios = require("axios");
const {getChainIdFromName,nullAddress} = require("./utils");
const {CBRIDGETOKENS,CBRDIGEADDRESS,chainRPC} = require("./datas/cbridge.js")
const { v4: uuidv4 } = require('uuid');
const db = require("../db")

const { ethers } = require('ethers');
const { ERC20_ABI } = require('./datas/abi/ERC20');
const { CBRIDGE_ABI } = require('./datas/abi/CBRIDGE');


const sampleData1 = {
	amount:"100000000000000000",
	from:{"blockchain":"BSC","symbol":"BNB","address":null,decimals:18},
	to:{"blockchain":"BSC","symbol":"BUSD","address":"0xe9e7cea3dedca5984780bafc599bd69add087d56",decimals:18},
	usrwallet:"0x7C69f00EdF3b24d02386aa0459a7d723A32ef0c3"
}
const sampleData2 = {
	amount:"100000000000000000000",
	from:{"blockchain":"BSC","symbol":"BUSD","address":"0xe9e7cea3dedca5984780bafc599bd69add087d56",decimals:18},
	to:{"blockchain":"POLYGON","symbol":"MATIC","address":null,decimals:18},
	usrwallet:"0x7C69f00EdF3b24d02386aa0459a7d723A32ef0c3"
}
const sampleData3 = {
	amount:"100000000000000000000",
	from:{"blockchain":"BSC","symbol":"BUSD","address":"0xe9e7cea3dedca5984780bafc599bd69add087d56",decimals:18},
	to:{"blockchain":"POLYGON","symbol":"WETH","address":"0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",decimals:18},
	usrwallet:"0x7C69f00EdF3b24d02386aa0459a7d723A32ef0c3"
}
const sampleData4 = {
	amount:"100000000000000000000",
	from:{"blockchain":"BSC","symbol":"1INCH","address":"0x111111111117dc0aa78b770fa6a738034120c302",decimals:18},
	to:{"blockchain":"POLYGON","symbol":"CRV","address":"0x172370d5cd63279efa6d502dab29171933a610af",decimals:18},
	usrwallet:"0x7C69f00EdF3b24d02386aa0459a7d723A32ef0c3"
}

const sampleData5 = {
	"amount":"100000000000000000000",
	"from":{"blockchain":"BSC","symbol":"USDT","address":"0x55d398326f99059ff775485246999027b3197955","decimals":18},
	"to":{"blockchain":"POLYGON","symbol":"USDC","address":"0x2791bca1f2de4661ed88a30c99a7a9449aa84174","decimals":6}

}


exports.getRoute = async (req, res) => {

	try{
		let swapInfo = req.body;
		const route = await getRouteSub(swapInfo)
		res.send(route);
	}catch(e){
		console.log(e)
		res.send({});
	}
	
}


exports.getTransaction = async (req, res) => {

	try{
		let swapInfo = req.body;
		const transaction = await getTransactionSub(swapInfo)
		res.send(transaction);
	}catch(e){
		console.log(e)
		res.send({});
	}
	
}

exports.checkStatus = async (req, res) => {

	try{
		
		let params = req.body;
		
		const isApproveTx = params.isApproveTx;
		const uuid = params.uuid;
		const trstep = params.trstep;
		const hash = params.hash;
		const transfer_id = params.transfer_id;
		const status = await checkStatusSub(isApproveTx,uuid,trstep,hash,transfer_id);
		if(status){
			res.send(status);
		}else{
			res.send({});
		}
	}catch(e){
		console.log(e)
		res.send({});
	}
	
}

const checkStatusSub = async(isApproveTx,uuid,trstep,hash,transfer_id) =>{
	let status ={status:'waiting',error:''}//status:'completed','waiting','error'
	const routes = db.get_records("SELECT * FROM routes where uuid='"+uuid+"'");
	if(routes.length>0){
		
		let settings = JSON.parse(routes[0].settings);
		let swap  = settings.swaps[trstep];
		const srcChainId = swap.fromToken.chainId;
		const dstChainId = swap.toToken.chainId;
		const provider = new ethers.providers.JsonRpcProvider(chainRPC[srcChainId]);
		const transaction = await provider.getTransaction(hash);
		if(transaction && transaction.blockHash){
			
			if(isApproveTx) {
				status.status = 'completed'
				return status;				
			}
          	let transactionDetail = await provider.getTransactionReceipt(hash);
            let decodedParameters;

			if(swap.type =="Cbridge"){
				let apiurl = "https://cbridge-prod2.celer.network/v2/getTransferStatus";
			  	const rt = await axios.post(apiurl,{transfer_id})
			  	if(rt.status!=200){
		  			return undefined
	  			}else{
	  				if(rt.data.status==5){//completed
	  					status.status = 'completed';
	  					let dst_block_tx_link = rt.data.dst_block_tx_link;
	  					const lastpos = dst_block_tx_link.lastIndexOf("/");
	  					const hash = dst_block_tx_link.substr(lastpos+1,dst_block_tx_link.length-1);
	  					const dstProvider = new ethers.providers.JsonRpcProvider(chainRPC[dstChainId]);
	  					let transactionDetail = await dstProvider.getTransactionReceipt(hash);
		
						const log = transactionDetail.logs[1];
						let abi = [ "event Relay (bytes32 transferId, address sender, address receiver, address token, uint256 amount, uint64 srcChainId, bytes32 srcTransferId)" ];
		          		let iface = new ethers.utils.Interface(abi);
		                decodedParameters = iface.parseLog(log);
		                let returnAmount =decodedParameters.args[4].toString(); 
		                if(trstep<settings.swaps.length-1){
		                	settings.swaps[trstep+1].fromTokenAmount=returnAmount
		                }
		                db.update_record("routes",routes[0].id,{settings:JSON.stringify(settings)})
		                status.status = "completed"

	  				}else if(rt.data.status==10){//refunded
	  					status.status = 'error';
	  				}
	  			}
			}else if(swap.type =="1INCH"){
				const log = transactionDetail.logs[6];
				let abi = [ "event Swapped(address sender, address srcToken, address dstToken, address dstReceiver, uint256 spentAmount, uint256 returnAmount)" ];
          		let iface = new ethers.utils.Interface(abi);
                decodedParameters = iface.parseLog(log);
                let returnAmount =decodedParameters.args[5].toString(); 
                if(trstep<settings.swaps.length-1){
                	settings.swaps[trstep+1].fromTokenAmount=returnAmount
                }
                db.update_record("routes",routes[0].id,{settings:JSON.stringify(settings)})
                status.status = "completed"
			}
		}
		return status;

	}else{
		return (undefined);
	}
}
const getTransactionSub = async(swapInfo)=>{
	const uuid = swapInfo.uuid;
	const trstep = Number(swapInfo.trstep);
	const swaps = db.get_records("SELECT * FROM routes where uuid='"+uuid+"'");
	if(swaps.length>0){
		let settings = JSON.parse(swaps[0].settings);
		let usrwallet = swapInfo.usrwallet?swapInfo.usrwallet:settings.usrwallet;
		let slippage = swapInfo.slippage?swapInfo.slippage:1;
		const transaction = await createTransaction(settings.swaps[trstep],usrwallet,slippage);
		if(settings.swaps[trstep].type=="Cbridge" && 
			transaction.isApproveTx==false
			){
			settings.swaps[trstep].transfer_id = transaction.transaction.transfer_id;
			db.update_record("routes",swaps[0].id,{settings:JSON.stringify(settings)})
		}
		console.log(transaction)
		return(transaction)
	}else{
		return (undefined);
	}
}

const getRouteSub = async(swapInfo)=>{

	try{
		
		let route = {};
		let  amount=0;
		let swap;
		const uuid = uuidv4();
		
		route.fromAmount = swapInfo.amount;
		route.from = swapInfo.from;
		route.to = swapInfo.to;
		route.usrwallet = swapInfo.usrwallet;
		route.uuid = uuid;

		route.swaps = [];
		if(swapInfo.from.blockchain==swapInfo.to.blockchain){
			swap = await addSwapOneInch(swapInfo.from,swapInfo.to,swapInfo.amount);
			if(swap){
				amount = swap.toTokenAmount;
				route.swaps.push(swap);
			}
		}else{
			const middleToken = getMiddleToken(swapInfo)
			amount = swapInfo.amount;
			if(middleToken.fromMiddle.token.symbol != swapInfo.from.symbol){

				swap = await addSwapOneInch(swapInfo.from,
					{
						"blockchain":swapInfo.from.blockchain,
						"symbol":middleToken.fromMiddle.token.symbol,
						"address":middleToken.fromMiddle.token.address,
						"decimals":middleToken.fromMiddle.token.decimal
					},
					amount
				);
				if(swap){
					route.swaps.push(swap);
					amount = swap.toTokenAmount;
				}else{
					return undefined
				}
			}
			swap = await addSwapCBridge(middleToken,amount);
			if(swap){
				route.swaps.push(swap);
				amount = swap.toTokenAmount;
			}else{
				return undefined
			}
			if(middleToken.toMiddle.token.symbol !=swapInfo.to.symbol){
				let swap = await addSwapOneInch(
					{
						"blockchain":swapInfo.to.blockchain,
						"symbol":middleToken.toMiddle.token.symbol,
						"address":middleToken.toMiddle.token.address,
						"decimals":middleToken.toMiddle.token.decimal
					},
					swapInfo.to,
					amount
				);
				if(swap){
					route.swaps.push(swap);
					amount = swap.toTokenAmount;
				}else{
					return undefined
				}
			}
		}
		route.toAmount = amount;
		const settings = JSON.stringify(route);
		const ret = db.insert_record("routes",{uuid,settings});
		console.log(route)
		return route;
	}catch(e){
		console.log("error",e)
		return (undefined)
	}
}
const addressFilter = (address)=>{
	if(address===null) return nullAddress;
	return address
}
const addSwapOneInch = async(fromInfo,toInfo,fromAmount)=>{
	console.log({fromInfo,toInfo,fromAmount})
	const chainId = getChainIdFromName(fromInfo.blockchain);
	const endpoint = "https://api.1inch.io/v4.0/"+chainId;
	const apiUrl = endpoint+"/quote?fromTokenAddress="+addressFilter(fromInfo.address)+"&toTokenAddress="+addressFilter(toInfo.address)+"&amount="+fromAmount;
  	try{
	  	const rt = await axios.get(apiUrl)
	  	if(rt.status!=200){
		  	return undefined
	  	}else{
	  		let swap = rt.data
			swap.type = "1INCH";
			swap.logo = "https://beta.tide.exchange/meta/img/swapper/1inch.svg";
			swap.time =30
			swap.fromToken.blockchain = fromInfo.blockchain;
			swap.toToken.blockchain = fromInfo.blockchain;
			swap.fromToken.chainId = chainId;
			swap.toToken.chainId = chainId;
		  	return swap
	  	}
  	}catch(e){
  		console.log("error")
	  	return undefined
	}
}

const addSwapCBridge = async(middleToken,amount)=>{
	let endpoint = "https://cbridge-prod2.celer.network/v2/estimateAmt";
	endpoint = endpoint + "?src_chain_id="+middleToken.fromMiddle.chainId;
	endpoint = endpoint + "&dst_chain_id="+middleToken.toMiddle.chainId;
	endpoint = endpoint + "&token_symbol="+middleToken.fromMiddle.token.symbol;
	endpoint = endpoint + "&usr_addr="+"0x12323";
	endpoint = endpoint + "&slippage_tolerance="+"3000";
	endpoint = endpoint + "&amt="+amount;
  	try{
	  	const rt = await axios.get(endpoint)
	  	if(rt.status!=200){

		  	return undefined
	  	}else{
	  	  const swap = 		
		  {
		  	type:"Cbridge",
		  	logo:"https://beta.tide.exchange/meta/img/swapper/cbridge.png",
		    fromToken: {
		      symbol: middleToken.fromMiddle.token.symbol,
		      name: middleToken.fromMiddle.name,
		      decimals: middleToken.fromMiddle.token.decimal,
		      address: middleToken.fromMiddle.token.address,
		      logoURI: middleToken.fromMiddle.icon,
		      blockchain:middleToken.fromMiddle.blockchain,
		      chainId:middleToken.fromMiddle.chainId,
		    },
		    toToken: {
		      symbol: middleToken.toMiddle.token.symbol,
		      name: middleToken.toMiddle.name,
		      decimals: middleToken.toMiddle.token.decimal,
		      address: middleToken.toMiddle.token.address,
		      logoURI: middleToken.toMiddle.icon,
		      blockchain:middleToken.toMiddle.blockchain,
		      chainId:middleToken.toMiddle.chainId,
		    },
		    toTokenAmount: rt.data.estimated_receive_amt,
		    fromTokenAmount: amount,
		    fee:{
		      symbol: middleToken.fromMiddle.token.symbol,
		      address: middleToken.fromMiddle.token.address,
		      amount:Number(rt.data.perc_fee)+Number(rt.data.base_fee)
		    },
		    time:480
		  }
	  	  return swap
	  	}
  	}catch(e){
  		console.log('error')
	  	return undefined
	}

}

const getCBridgeToken = (chainId,mSymbol)=>{
	let token = undefined;
	for(let i = 0 ;i<CBRIDGETOKENS.chain_token[chainId].token.length;i++){
		if(CBRIDGETOKENS.chain_token[chainId].token[i].token.symbol==mSymbol){
			token = CBRIDGETOKENS.chain_token[chainId].token[i];
			break;
		}
	}
	token.chainId = chainId;
	return token;
}
const getMiddleToken = (swapInfo)=>{
	
	const fromChainId= getChainIdFromName(swapInfo.from.blockchain);
	const toChainId= getChainIdFromName(swapInfo.to.blockchain);
	
	let middleSymbol = "WETH";
	if(swapInfo.to.symbol=="USDT")  middleSymbol = "USDT";
	if(swapInfo.to.symbol=="USDC")  middleSymbol = "USDC";
	
	let fromMiddle = getCBridgeToken(fromChainId,middleSymbol)
	let toMiddle = getCBridgeToken(toChainId,middleSymbol)
	fromMiddle.blockchain  = swapInfo.from.blockchain;
	fromMiddle.chainId = fromChainId;
	toMiddle.blockchain  = swapInfo.to.blockchain;
	toMiddle.chainId  = toChainId;

	return {fromMiddle,toMiddle};
}

const createTransaction = async (swapRecord,usrwallet,slippage)=>{
	let trData = undefined;
	if(swapRecord.type=="Cbridge"){
		trData = await createTransactionCBridge(swapRecord,usrwallet,slippage)
	}else if(swapRecord.type=="1INCH"){
		trData = await  createTransactionOneInch(swapRecord,usrwallet,slippage)
	}
	return trData;
}

const createTransactionCBridge = async (swapInfo,usrwallet,slippage) => {
	
	//let apiUrl = "https://api.1inch.io/v4.0/"+swapInfo.fromToken.chainId+"/approve/allowance?tokenAddress="+swapInfo.fromToken.address+"&walletAddress="+usrwallet;
	let trResponse = {isApproveTx:false,ok:false,transaction:{},error:''}
	
	try{
		
		const srcChainId = swapInfo.fromToken.chainId;
		const provider = new ethers.providers.JsonRpcProvider(chainRPC[srcChainId]);
		const erc20Contract = new ethers.Contract(swapInfo.fromToken.address,ERC20_ABI,provider);
		const allowance = await erc20Contract.allowance(usrwallet,CBRDIGEADDRESS[srcChainId])
		if(Number(allowance)==0 || Number(allowance)<Number(swapInfo.fromTokenAmount)){
			console.log(CBRDIGEADDRESS[srcChainId],swapInfo.fromTokenAmount)
			let tx = await erc20Contract.populateTransaction.approve(CBRDIGEADDRESS[srcChainId],swapInfo.fromTokenAmount);
			tx.gas = 30000;
			tx.from = usrwallet;
			trResponse.ok=true;
			trResponse.isApproveTx=true;
			trResponse.transaction.tx = tx;
			return(trResponse);
		}
		const brdigeContract = new ethers.Contract(CBRDIGEADDRESS[srcChainId],CBRIDGE_ABI,provider);
		const nonce = Date.now();
		var rawTx = {
            nonce: nonce
        };		
		let gas = await brdigeContract.estimateGas.send(
				usrwallet,
				swapInfo.fromToken.address,
				swapInfo.fromTokenAmount,
				swapInfo.toToken.chainId,
				nonce,
				3000,
				rawTx);
		rawTx.gasLimit  = gas;
		let tx = await brdigeContract.populateTransaction.send(
				usrwallet,
				swapInfo.fromToken.address,
				swapInfo.fromTokenAmount,
				swapInfo.toToken.chainId,
				nonce,
				3000,
				rawTx
			);
		tx.from = usrwallet;
		const transfer_id = ethers.utils.solidityKeccak256(
		     [
		      "address",
		      "address",
		      "address", 
		      "uint256", 
		      "uint64", 
		      "uint64", 
		      "uint64"
		     ], 
		     [
		      usrwallet, /// User's wallet address, 
		      usrwallet, /// User's wallet address, 
		      swapInfo.fromToken.address,
			  swapInfo.fromTokenAmount,
			  swapInfo.toToken.chainId,
			  nonce,
			  swapInfo.fromToken.chainId
		     ],
		)
		trResponse.ok=true;
		trResponse.isApproveTx=false;
		trResponse.transaction.tx = tx;
		trResponse.transaction.transfer_id = transfer_id;
		return(trResponse);
	}catch(e){
		trResponse.error = 'Not enough balance or gas fee or amount too small'
		console.log('error',trResponse,e);
		return trResponse;
	}

}
const createTransactionOneInch = async (swapInfo,usrwallet,slippage) => {
	let trResponse = {isApproveTx:false,ok:false,transaction:{},error:''}
	try{
		let apiUrl = "https://api.1inch.io/v4.0/"+swapInfo.fromToken.chainId+"/approve/allowance?tokenAddress="+swapInfo.fromToken.address+"&walletAddress="+usrwallet;
		let rt = await axios.get(apiUrl)
		if(rt.status!=200) {
			trResponse.error = "Fail to call endpoint."
			return trResponse;
		}

		const allowance = Number(rt.data.allowance);
		if(allowance==0 || allowance<Number(swapInfo.fromTokenAmount)) {//call approve transaction;
			if(!usrwallet || usrwallet==""){
				trResponse.error = "Need select wallet address.";
				return trResponse;
			}
			apiUrl = "https://api.1inch.io/v4.0/"+swapInfo.fromToken.chainId+"/approve/transaction?tokenAddress="+swapInfo.fromToken.address+"&amount="+swapInfo.fromTokenAmount;	
			let rt = await axios.get(apiUrl)
			if(rt.status!=200) {
				trResponse.error = "Fail to call endpoint."
				return trResponse;
			}
			trResponse.transaction.tx = rt.data;
			trResponse.isApproveTx = true;
			trResponse.blockchain = swapInfo.fromToken.blockchain;
			trResponse.chainId = swapInfo.fromToken.chainId;
			trResponse.ok = true;
			return(trResponse)
		}
		apiUrl = "https://api.1inch.io/v4.0/"+swapInfo.fromToken.chainId+"/swap?fromTokenAddress="+addressFilter(swapInfo.fromToken.address)+"&toTokenAddress="+addressFilter(swapInfo.toToken.address)+"&amount="+swapInfo.fromTokenAmount;
		apiUrl = apiUrl +"&fromAddress="+usrwallet;
		apiUrl = apiUrl +"&slippage="+slippage;

		rt = await axios.get(apiUrl)
		if(rt.status!=200) {
			trResponse.error = rt.data.description
			return trResponse;
		}
		trResponse.transaction = rt.data;
		trResponse.isApproveTx = false;
		trResponse.blockchain = swapInfo.fromToken.blockchain;
		trResponse.chainId = swapInfo.fromToken.chainId;
		trResponse.ok = true;
		return(trResponse);
	}catch(e){
		if(e?.response?.data?.description){
			trResponse.error = e.response.data.description
		}else{
			trResponse.error = 'Network error'
		}
		console.log('error',trResponse);
		return trResponse;
	}
	
}

//getRouteSub(sampleData5);
//getTransactionSub({uuid:"97cbadeb-8eca-4802-b883-a9a8c713c0d3",trstep:0,usrwallet:"0x7C69f00EdF3b24d02386aa0459a7d723A32ef0c3","slippage":2})
//getTransactionSub({uuid:"5da12237-22e2-485a-82f7-fbd301313a3f",trstep:0,usrwallet:"0x7C69f00EdF3b24d02386aa0459a7d723A32ef0c3","slippage":2})
//checkStatusSub(false,"5da12237-22e2-485a-82f7-fbd301313a3f",1,"0xac9502425414bf14a9e144fc943d501a3f4ab3ccf1bbc01f493c621a2d08a814","F25C66651FA91CD2F66AA84B7218E127FA5BCA94901993A545446A4922B62D2A")