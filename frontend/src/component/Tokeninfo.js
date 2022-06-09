import useSharedState from '../hook/useSharedState'
import React ,{useState,useEffect,useRef,useCallback,useMemo} from "react";

function TokenInfo() {
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
    <>
      <div className="d-flex d-lg-none justify-content-between align-items-center p-1 text-2">
        <div className="d-flex flex-row ">
          <div className="btn-group">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="pairs" data-bs-toggle="dropdown" aria-expanded="false">
              {selectedToken?(selectedToken.info.base+" / "+selectedToken.info.quote):""} 
            </button>
            <ul className="dropdown-menu xltokens dropdown-menu-dark" aria-labelledby="pairs">
            {tokensList.map((token,idx)=>(
              <li key={idx}>
                <a className="dropdown-item" role="button" onClick={()=>setSelectedToken(token)}>
                  <span className="text-white">{token.info.base+" / "+token.info.quote}</span>
                </a>
              </li>
            ))}
            </ul>
          </div>
          <div className="d-flex flex-row p-2">
            <span className={(long?"mytext-success":"mytext-danger")} >{fixedLength(ask)}
            <i className={"bi bi-arrow-"+(long?"up":"down")} /></span>
            <span className={(selectedToken?.priceBNBChange>0?" mytext-success":"mytext-danger")}>{selectedToken?.priceBNBChange>0?"+":""}{selectedToken?.priceBNBChange.toFixed(2)}%&nbsp;
              <span className="text-white ms-2">Vol&nbsp;
                {selectedToken?selectedToken.volumeUSD.toFixed(0):0} USD
              </span>
            </span>
          </div>
        </div>
        { false && 
        <div className="d-flex flex-column">
          <span className="text-muted">High <span className="text-white ms-2">42210.0</span></span>
          <span className="text-muted">Low&nbsp; <span className="text-white ms-2">32210.0</span></span>
        </div>
        }
      </div>
      <div className="d-none d-lg-flex widget-header  align-items-center p-1 text-2">
        <div className="d-flex flex-column me-3">
          <span className="fs-5">{selectedToken?(selectedToken.info.base+" / "+selectedToken.info.quote):""} </span>
        </div>
        <div className="d-flex flex-column me-3">
          <span className="text-muted">Last Price</span>
          <span className={long?"mytext-success":"mytext-danger"}>
                    {fixedLength(ask)}
                    <i className={"bi bi-arrow-"+(long?"up":"down")} />
          </span>
        </div>
        <div className="d-flex flex-column me-3">
          <span className="text-muted">24h change</span>
          <span className={(selectedToken?.priceBNBChange>0?" mytext-success":"mytext-danger")}>
            {selectedToken?.priceBNBChange>0?"+":""}{selectedToken?.priceBNBChange.toFixed(2)}%
          </span>
        </div>
        {false &&
          <>
        <div className="d-flex flex-column me-3">
          <span className="text-muted">24h High</span>
          <span className="text-white">
            43128.2
          </span>
        </div>
        <div className="d-flex flex-column me-3">
          <span className="text-muted">24h Low</span>
          <span className="text-white">
            42210.0
          </span>
        </div>
        </>
        }
        <div className="d-flex flex-column">
          <span className="text-muted">24h Volume</span>
          <span className="text-white">
            {selectedToken?selectedToken.volumeUSD.toFixed(0):0} USD
          </span>
        </div>
      </div>
    </>
  );
}

export default TokenInfo;
