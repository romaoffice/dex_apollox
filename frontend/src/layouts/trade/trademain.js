import useSharedState from '../../hook/useSharedState'
 
import React ,{useState,useEffect,useCallback,useMemo} from "react";
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { BigNumber } from '@ethersproject/bignumber'
import { WETH,marketOrder,limitOrder,STAKEFEE,EXECUTOR_FEE,SLIPPAGE } from "../const";
import {ERC20_ABI} from "../../abi/ERC20";
import {ORDER_ABI} from "../../abi/ORDER";

import {getContract} from "../contract";
import {fixedLength} from "../common"


const percentList =[0,"25%","50%","75%","100%"]
function TradeMain() {
  const [direction,setDirection] = useState("Buy");
  const { chainId, account, activate, active,library } = useWeb3React()
  const [slippagePractice,setSlippagePractice] = useState(SLIPPAGE);
  const [percentMarket,setPercentMarket] = useState(0);
  const changePercentMarket = (pvalue)=>{
      setPercentMarket(pvalue);
      setAmountBuy(percentList[pvalue])
  }
  const connectMetamask = async()=>{
    const injectedConnector = new InjectedConnector({supportedChainIds: [1,3,4,42,56,137],})
    activate(injectedConnector)
  }
  
  const RPC = {
    56: 'https://bsc.getblock.io/mainnet/?api_key=7b87bee9-86e3-49d9-bd31-aa4bd5efed68'
  }
  const toFixed = (_x)=> {
    let x=Math.floor(_x)
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split('e-')[1]);
      if (e) {
          x *= Math.pow(10,e-1);
          x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
      }
    } else {
      var e = parseInt(x.toString().split('+')[1]);
      if (e > 20) {
          e -= 20;
          x /= Math.pow(10,e);
          x += (new Array(e+1)).join('0');
      }
    }
    return x.toString();
  }

  const [orderType,setOrderType]=useState('market');
  const {selectedToken,setSelectedToken,bnbPrice,long,setLong,ask,bid}=useSharedState();//useState(undefined);
  const [priceBuy,setPriceBuy] = useState(0);
  const [priceSell,setPriceSell] = useState(0);
  const [amountBuy,setAmountBuy] = useState(0);
  const [amountSell,setAmountSell] = useState(0);
  const [totalSell,setTotalSell] = useState(0);
  const [totalBuy,setTotalBuy] = useState(0);
  const [timestamp,setTimestamp] = useState(0);
  const [balances,setBalances] = useState({base:0,quote:0})
  const [loading,setLoading] = useState(false)

  const [disabled,setDisabled] = useState(false);
  const limitContract = getContract(marketOrder, ORDER_ABI,library,account);
  const reset = ()=>{
    setAmountBuy(0);
    setPercentMarket(0);
    setPriceBuy(ask);
  }
  const resetAll = ()=>{
      setAmountBuy(0);
      setAmountSell(0);
      setTotalBuy(0);
      setTotalSell(0);
  }
  const getBigNumber=(value)=>{
    return(BigNumber.from(toFixed(value)));
  }
  const convertAmount = (value,decimals)=>{
    return value/Math.pow(10,decimals);
  }

  const updateBalance = async()=>{

      const contract = getContract(selectedToken.address, ERC20_ABI,library,account);
      let ethBalance = Number(await library.getBalance(account));
      let tokenBalance = Number(await contract.balanceOf(account));
      ethBalance = Number(fixedLength(ethBalance / Math.pow(10,WETH.decimals)));
      tokenBalance=Number(fixedLength(tokenBalance / Math.pow(10,selectedToken.info.decimals)));
      let data = {... balances};
      data.base = selectedToken.info.base =="BNB"?ethBalance:tokenBalance;
      data.quote = selectedToken.info.quote =="BNB"?ethBalance:tokenBalance;
      setBalances(data);
  }
  useEffect(()=>{
    const update = async()=>{
      if(active && chainId==56){
        updateBalance();
      }
      reset();

    }
    if(selectedToken && account) update();
  },[selectedToken,account,active]);

  useEffect(() => {
    library?.on('block', () => {
      if(chainId==56){
        updateBalance();
      }
    })
    return () => {
      library?.removeAllListeners('block')
    }
  }, [library,chainId])
const sendMarketOrder=async(assetIn,assetOut,amountIn,amountOut)=>{
    try{
      let tokenprice=0;
      const buyToken =assetOut==WETH.address?"BNB":assetOut;
      const sellToken =assetIn==WETH.address?"BNB":assetIn;
      const url ="https://bsc.api.0x.org/swap/v1/quote?buyToken="+buyToken+"&sellToken="+sellToken+"&sellAmount="+amountIn.toString()+"&slippagePercentage="+slippagePractice/100;
      console.log({url})
      const _response = await fetch(url);
      const response = await _response.json();
      console.log({response})
      const ordertype = assetIn==WETH.address?0:assetOut==WETH.address?1:2;
      let value = BigNumber.from(response.value);
      let options = {
            gasLimit : 0,
            value:WETH.address==assetIn?(value.mul(1000+STAKEFEE*1000).div(1000)):0
      };

      if(WETH.address!=assetIn){
        const allowai = BigNumber.from("0xffffffffffffffffffffffffffffffffffffffff")
        const contract = getContract(assetIn, ERC20_ABI,library,account);
        const result = (await contract.functions.allowance(account,limitOrder))[0];
        if(result.lt(allowai)){
          console.log({allowai,result})
          const rt = await contract.approve(marketOrder, getBigNumber(Math.pow(2,255)));
          await rt.wait();
        }
      }
      const marketContract = getContract(marketOrder, ORDER_ABI,library,account);
      console.log( 
        marketOrder,
        {ordertype,
        assetIn,
        assetOut,
        spender:response.allowanceTarget,
        swapTarget:response.to,
        swapCallData:response.data,
        assetOffered:response.sellAmount,
        options})
      const gasLimit = await marketContract.estimateGas.marketSwap(
        ordertype,
        assetIn,
        assetOut,
        response.allowanceTarget,
        response.to,
        response.data,
        response.sellAmount,
        options)
      console.log({gasLimit});
      options.gasLimit = gasLimit;
      const tx = await marketContract.marketSwap(
        ordertype,
        assetIn,
        assetOut,
        response.allowanceTarget,
        response.to,
        response.data,
        response.sellAmount,
        options);
      reset()
      return(tx);
    }catch(e){
      console.log(e)
    }
    return(undefined);
}
const sendLimitOrder=async(assetIn,assetOut,amountIn,amountOut)=>{

    console.log({assetIn,assetOut,amountIn,amountOut})

    try{
      const ordertype = assetIn==WETH.address?0:assetOut==WETH.address?1:2;
      const path = [assetIn,assetOut];
      let options = {
            gasLimit : 0,
            value:getBigNumber(
              (WETH.address==assetIn?(amountIn*(1+STAKEFEE)+EXECUTOR_FEE):EXECUTOR_FEE)
              *Math.pow(10,WETH.decimals)
              )
      };        
      const ai = getBigNumber((assetIn==WETH.address?Math.pow(10,WETH.decimals):Math.pow(10,selectedToken.info.decimals))*amountIn)
      const ao = getBigNumber((amountOut==WETH.address?Math.pow(10,WETH.decimals):Math.pow(10,selectedToken.info.decimals))*amountOut)
      const efee = getBigNumber(EXECUTOR_FEE*Math.pow(10,WETH.decimals));
      if(WETH.address!=assetIn){
        const allowai = BigNumber.from("0xffffffffffffffffffffffffffffffffffffffff")
        const contract = getContract(assetIn, ERC20_ABI,library,account);
        const result = (await contract.functions.allowance(account,limitOrder))[0];
        if(result.lt(allowai)){
          console.log({allowai,result})
          const rt = await contract.approve(limitOrder, getBigNumber(Math.pow(2,255)));
          await rt.tx.wait();
        }
      }
      console.log({ordertype,
        assetIn,
        assetOut,
        ai,
        ao,
        path,
        efee,
        options})
      const gasLimit = await limitContract.estimateGas.createOrder(ordertype,assetIn,assetOut,ai,ao,path,efee,options)
      options.gasLimit = gasLimit;
      const tx = await limitContract.createOrder(
        ordertype,
        assetIn,
        assetOut,
        ai,
        ao,
        path,
        efee,
        options);
      reset()
      return(tx);
    }catch(e){
      console.log(e)
    }
    return(undefined);

  }

  const doTrade = async()=>{
    if(loading) return;
    setLoading(true);
    let assetIn,assetOut,decimalsIn,decimalsOut;
    try{
    if(direction=="Buy"){
        assetIn = selectedToken.info.quote=="BNB"?WETH.address:selectedToken.address;
        assetOut = selectedToken.info.base=="BNB"?WETH.address:selectedToken.address;
        decimalsIn = selectedToken.info.quote=="BNB"?WETH.decimals:selectedToken.info.decimals;
        decimalsOut = selectedToken.info.base=="BNB"?WETH.decimals:selectedToken.info.decimals;    
      }else{
        assetIn = selectedToken.info.base=="BNB"?WETH.address:selectedToken.address;;
        assetOut = selectedToken.info.quote=="BNB"?WETH.address:selectedToken.address;;
        decimalsIn = selectedToken.info.base=="BNB"?WETH.decimals:selectedToken.info.decimals;
        decimalsOut = selectedToken.info.quote=="BNB"?WETH.decimals:selectedToken.info.decimals;
      }

      let amountIn=0,amountOut=0;
      if(amountBuy.toString().search("%")>=0){
        const value =Number(amountBuy.replace("%",""));
        if(direction=="Buy"){
          const total =balances.quote*value/(1+STAKEFEE+Number(slippagePractice)/100)/100; 
          amountIn = Number(fixedLength(selectedToken.info.quote!="BNB"?total:total-EXECUTOR_FEE));
        }else{
          const total =balances.base*value/(1+STAKEFEE+Number(slippagePractice)/100)/100; 
          amountIn = Number(fixedLength(selectedToken.info.base!="BNB"?total:total-EXECUTOR_FEE));
        }
      }else{
        amountIn = amountBuy;
      }
      if(amountIn==0) return;
      let decimalAmountIn = amountIn;
      if(Number(priceBuy)<=0) return;
      if(direction=="Buy"){
        amountOut = amountIn/priceBuy;
      }else{
        amountOut = amountIn*priceBuy;
      }

      let response;
      if(orderType=="market"){//call market order
        amountIn = getBigNumber((assetIn==WETH.address?Math.pow(10,WETH.decimals):Math.pow(10,selectedToken.info.decimals))*amountIn);
        amountOut = getBigNumber((assetOut==WETH.address?Math.pow(10,WETH.decimals):Math.pow(10,selectedToken.info.decimals))*amountOut);
        const response = await sendMarketOrder(assetIn,assetOut,amountIn,amountOut);
        if(response){

          if(direction=="Buy"){
            const regist = await fetch(getapiquery(response,"buy",'market',decimalAmountIn,selectedToken.info.quote,ask));
          }else{
            const regist = await fetch(getapiquery(response,"sell",'market',decimalAmountIn,selectedToken.info.base,ask));
          }
        }
      }else{//call limit order
        console.log("processing limit")
        response = await sendLimitOrder(assetIn,assetOut,amountIn,amountOut)
        if(response){
          if(direction=="Buy"){
            const regist = await fetch(getapiquery(response,"buy",'limit',decimalAmountIn,selectedToken.info.quote));
          }else{
            const regist = await fetch(getapiquery(response,"sell",'limit',decimalAmountIn,selectedToken.info.base));
          }
        }
      }
      reset();
    }catch(e){
      console.log(e);
    }
    setLoading(false);


  }

  const getapiquery=(response,side,ordertype,inAmount,inAsset,tokenprice=undefined)=>{
      let apiquery="";
      if(selectedToken){
          const trid =response.hash;
          const prefix = window.location.protocol+"//"+window.location.hostname;

          apiquery = prefix+"/api/createorder?chainid=56&owner="+account+
               "&pairs="+selectedToken.info.base+selectedToken.info.quote+"&side="+side+"&transactionid="+trid+"&trstatus=pending&ordertype="+ordertype;
          
          apiquery = apiquery+"&orderstatus=executed";
          apiquery = apiquery+"&orderid=0&inAmount="+inAmount+"&inAsset="+inAsset;
          if(ordertype.indexOf("market")>=0){
              apiquery = apiquery+"&price="+tokenprice;
          }else{
              apiquery = apiquery+"&price="+priceBuy;
          }
          apiquery = apiquery+"&amount="+inAmount
          console.log(apiquery);         
      }
  
      return  apiquery;   
  } 
  return (
    <>
      <div className="btn-group btn-group-lg btn-block py-3">
        <button type="button" className={"btn btn-buy "+(direction=="Buy"?"active":"")} onClick={()=>{setDirection("Buy");reset()}}>
          BUY
        </button>
        <button type="button" className={"btn btn-sell "+(direction=="Sell"?"active":"")} onClick={()=>{setDirection("Sell");reset()}}>
          SELL
        </button>
      </div>
      <div className="place-order-nav">
        <ul className="nav">
          <li className="nav-item">
            <a className={"nav-link "+(orderType=="limit"?"active":"")} onClick= {()=>{setOrderType("limit");reset();}} role="button">
              Limit
            </a>
          </li>
          <li className="nav-item">
            <a className={"nav-link "+(orderType=="market"?"active":"")} onClick= {()=>{setOrderType("market");reset();}}  role="button">
              Market
            </a>
          </li>
        </ul>
      </div>
      <p className="text-avbl py-3">
        Avbl <span className="span-avbl-usdt">{direction=="Buy"?balances.quote:balances.base}{selectedToken?(direction=="Buy"?selectedToken.info.quote:selectedToken.info.base):""}</span>
      </p>
      {orderType=="limit" && (
      <div className="inputs-order" >
        <div className="input-group mb-3 input-group-price input-order-price-1">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Price
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            id="input-order-price-1"
            value={priceBuy}
            onChange={(e)=>setPriceBuy(e.target.value)}
          />
          <div className="input-group-append">
            <span className="input-group-text">{selectedToken?selectedToken.info.quote:""}</span>
          </div>
        </div>
        <div className="input-group mb-3 input-group-price">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Amount
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            id="input-order-amount"
            value={amountBuy}
            onChange={(e)=>{setAmountBuy(e.target.value);setPercentMarket(0)}}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="append-order-amount">
              {direction=="Buy"?(selectedToken?.info.quote):(selectedToken?.info.base)}
            </span>
          </div>
        </div>
      </div>
        )}
      {orderType=="market" && (
      <div className="inputs-order" >
        <div className="input-group mb-3 input-group-price input-order-market-price">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Price
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="input-order-market-price"
            defaultValue="Market"
            readOnly = {true} 
          />
          <div className="input-group-append">
            <span className="input-group-text">{selectedToken?selectedToken.info.quote:""}</span>
          </div>
        </div>
        <div className="input-group mb-3 input-group-price input-group-market-total">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Total
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            id="input-order-amount"
            value={amountBuy}
            onChange={(e)=>{setAmountBuy(e.target.value);setPercentMarket(0)}}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="append-order-amount">
              {direction=="Buy"?(selectedToken?.info.quote):(selectedToken?.info.base)}
            </span>
          </div>
        </div>
      </div>
        )}
      <div className="order-stepper">
        <div className={"step-item "+(percentMarket==0?"step-item-active":"")} onClick={()=>changePercentMarket(0)}/>
        <div className="step-line"/>
        <div className={"step-item "+(percentMarket==1?"step-item-active":"")} onClick={()=>changePercentMarket(1)}/>
        <div className={"step-item "+(percentMarket==2?"step-item-active":"")} onClick={()=>changePercentMarket(2)}/>
        <div className={"step-item "+(percentMarket==3?"step-item-active":"")} onClick={()=>changePercentMarket(3)}/>
        <div className={"step-item "+(percentMarket==4?"step-item-active":"")} onClick={()=>changePercentMarket(4)}/>

      </div>
      <button
        type="button"
        className="btn btn-primary btn-block btn-connect-wallet my-4"
      >
          {active==false &&
            <span onClick={connectMetamask}>Connect Wallet</span>
          }
          {active &&
            (
              <span onClick={doTrade}>
              {loading?"Executing":(direction+" "+(selectedToken?selectedToken.info.base:""))}
              </span>
            )
          }

        
      </button>
    </>
  );
}

export default TradeMain;
