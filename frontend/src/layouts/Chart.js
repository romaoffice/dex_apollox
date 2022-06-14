import useSharedState from '../hook/useSharedState'
import TradingViewWidget, { Themes } from './tv';
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
            theme={Themes.DARK}
            interval = "60"
            locale="us"
            autosize
            allow_symbol_change={false}
            hide_legend={true}

        />   
      </div>
  );
}

export default Chart;
