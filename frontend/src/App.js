// import logo from './logo.svg';
// import './App.css';
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import useSharedState from "./hook/useSharedState";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import useWindowSize from "./component/useWindowsSize";
import React, { useState, useEffect } from "react";
import HeaderDesktop from "./layouts/header/header_desktop";
import HeaderMobile from "./layouts/header/header_mobile";
import TokenList from "./layouts/tokenlist"
import Chart from "./layouts/Chart"
import OrderBook from "./layouts/orderbook"
import Trades from "./layouts/trades"
import MobileMiddle from "./layouts/mobile_middle"
import OrderHistory from "./layouts/orderhistory"
import TradePanel from "./layouts/trade/tradepanel"
function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  const fixedLength=(y)=> {
    let num = y;
    let prec = 6;
    while(num > 10) {
        num /= 10;
        prec--;
    }
    return y.toFixed(prec);
  }

  const size = useWindowSize();
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (size.width <= 1000) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [size]);

  const {selectedToken,setSelectedToken,long,setLong,ask,setAsk,tokensList}=useSharedState();//useState(undefined);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <HeaderDesktop />
      <HeaderMobile />
      <div className="container-fluid">
        <div className="row container-row">
          <div className="col-12 btc-usdt-desktop">
            <div className="row bsdt-usdt-row">
              <div className="col-lg-2 right-border px-0 d-flex align-items-center justify-content-center">
                <div className="dropdown dropdown-hover">
                  <button
                    className="btn dropdown-toggle btn-block btn-btc-usdt btn-btc-usdt-desktop px-0"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {selectedToken?(selectedToken.info.base+" / "+selectedToken.info.quote):""} 
                  </button>
                    <TokenList/>
                </div>
              </div>
              <div className="col-lg-10 nav btc-usdt-nav py-2 px-3 d-flex align-items-center">
                <div className="px-3">
                  <div>Last Price</div>
                  <div>{fixedLength(ask)}</div>
                </div>
                <div className="px-3">
                  <div className="text-gray">24h Change</div>

                  <div className={(selectedToken?.priceBNBChange>0?" text-blue":" text-red")} >{selectedToken?.priceBNBChange>0?"+":""}{selectedToken?.priceBNBChange.toFixed(2)}%</div>
                </div>
                <div className="px-3">
                  <div className="text-gray">24h Volume</div>
                  <div>{selectedToken?selectedToken.volumeUSD.toFixed(0):0} USD</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-xl section-btc">
            <div className="row">
              <div className="col-xl col-lg-12">
                <div className="btc-usdt-desktop">
                  <div className="row">
                    <div className="col-12 px-lg-2 px-0 top-border">
                      <div className="chart-container" >
                        <Chart/>
                      </div>
                    </div>
                    <OrderHistory/>
                  </div>
                </div>
                <div className="btc-usdt-mobile">
                  <div className="row bsdt-usdt-row">
                    <div className="col-5  pt-4">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle btn-block btn-btc-usdt btn-btc-usdt-mobile"
                          type="button"
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          {selectedToken?(selectedToken.info.base+" / "+selectedToken.info.quote):""} 
                        </a>
                        <div className="modal fade" id="myModal" role="dialog">
                          <div className="modal-dialog btc-usdt-modal">
                            {/* Modal content*/}
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title">Market</h4>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                >
                                  ×
                                </button>
                              </div>
                              <div className="modal-body">
                                  <TokenList/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col ticketItem">
                      <div className="nowPrice py-3">
                        <div className="showPrice">{fixedLength(ask)}</div>
                        <div className="flex-cloumn">
                          <div
                            className={"differencePrice " +(selectedToken?.priceBNBChange>0?" text-blue":" text-red")} 
                            style={{
                              direction: "ltr",
                            }}
                          >
                            {selectedToken?.priceBNBChange.toFixed(2)}%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col ticketItem">
                      <div className="tickerItemLabel">24h Volume</div>
                      <div className="tickerPriceText">{selectedToken?selectedToken.volumeUSD.toFixed(0):0} USD</div>
                    </div>
                  </div>

                  <div className="row">
                    <MobileMiddle/>
                    <OrderHistory/>
                  </div>
                </div>
              </div>
              <div className="col-xl col-lg-12 d-none d-lg-block order-book-container">
                <div className="row">
                  <div className="col-12 section-order top-border">
                    <div className="row">
                      <div className="col-12">
                        <h5>Order Book</h5>
                      </div>
                      <div className="col-12">
                        <OrderBook/>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-12 pt-2">
                        <h5>Trades</h5>
                      </div>
                      <div className="col-12" style={{height:"300px",overflowY:"scroll"}}>
                        <Trades/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TradePanel/>
        </div>

        <div className="mobile-only">
          <div className="row py-3 mobile-footer">
            <div className="col-6">
              <button
                type="button"
                className="btn btn-primary btn-block btn-footer-buy mr-0"
                data-toggle="modal"
                data-target="#myModal1"
              >
                Buy
              </button>
            </div>
            <div className="col-6 pl-0">
              <button
                type="button"
                className="btn btn-danger btn-block btn-footer-sell"
              >
                Sell
              </button>
            </div>
          </div>
        </div>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
