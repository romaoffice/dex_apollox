import useSharedState from '../hook/useSharedState'
import TradingViewWidget from './lighttv';
import React ,{useState,useEffect,useRef,useCallback,useMemo} from "react";

function Chart() {
  const fixedLength=(y)=> {
    let num = y;
    let prec = 6;
    while(num > 10) {
        num /= 10;
        prec--;
    }
    return y.toFixed(prec);
  }

  const {selectedToken,setSelectedToken,long,setLong,ask,setAsk,tokensList}=useSharedState();//useState(undefined);
  
  return (
      <div className="tradingview-widget-container chartparent" style={{"height":"100%"}} >
        <TradingViewWidget 
            symbol={selectedToken?(selectedToken.info.listed?(selectedToken.info.base+selectedToken.info.quote):"BNBUSDT"):"BNBUSDT"} 

        />   
      </div>
  );
}

export default Chart;
