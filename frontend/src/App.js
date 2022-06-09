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
function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {

  const size = useWindowSize();
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (size.width <= 1000) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [size]);
  const { selectedToken, setSelectedToken } = useSharedState(); //useState(undefined);
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
                  <div
                    className="dropdown-menu dropdown-menu-btc-usdt"
                    aria-labelledby="dropdownMenuButton"
                    style={{"overflow-y":"scroll"}}
                  >
                    <TokenList/>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 nav btc-usdt-nav py-2 px-3 d-flex align-items-center">
                <div className="px-3">
                  <div>29,730.59</div>
                  <div>$29,730.59</div>
                </div>
                <div className="px-3">
                  <div className="text-gray">24h Change</div>
                  <div className="text-red">-1,961.10 -6.19%</div>
                </div>
                <div className="px-3">
                  <div className="text-gray">24h High</div>
                  <div>31,691.69</div>
                </div>
                <div className="px-3">
                  <div className="text-gray">24h Low</div>
                  <div>29,709.00</div>
                </div>
                <div className="px-3">
                  <div className="text-gray">24h Volume(BTC)</div>
                  <div>0.50</div>
                </div>
                <div className="px-3">
                  <div className="text-gray">24h Volume(USDT)</div>
                  <div>15,042.45</div>
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
                    <div className="col-12 px-lg-2 px-0 top-border">
                      <ul className="nav nav-orders">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Open Orders(0)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Order History
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Trade History
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">
                            Funds
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="btc-usdt-mobile">
                  <div className="row bsdt-usdt-row">
                    <div className="col-5">
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
                                <div className="dropdown-menu-btc-usdt btc-usdt-modal-content"
                                style={{"overflow-y":"scroll"}}>
                                  <TokenList/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col ticketItem">
                      <div className="tickerItemLabel">24h High</div>
                      <div className="tickerPriceText">31,691.69</div>
                    </div>
                    <div className="col ticketItem">
                      <div className="tickerItemLabel">24h Volume(BTC)</div>
                      <div className="tickerPriceText">1.29</div>
                    </div>
                  </div>
                  <div className="row bsdt-usdt-row">
                    <div className="col-5">
                      <div className="nowPrice py-3">
                        <div className="showPrice">29342.46</div>
                        <div className="flex-cloumn">
                          <div
                            className="changePrice"
                            style={{ color: "rgb(255, 90, 181)" }}
                          >
                            -366.54
                          </div>
                          <div
                            className="differencePrice"
                            style={{
                              color: "rgb(255, 90, 181)",
                              direction: "ltr",
                            }}
                          >
                            -1.23%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col ticketItem">
                      <div className="tickerItemLabel">24h Low</div>
                      <div className="tickerPriceText">29,342.46</div>
                    </div>
                    <div className="col ticketItem">
                      <div className="tickerItemLabel">24h Volume(USDT)</div>
                      <div className="tickerPriceText">38,114.70</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <ul className="nav nav-orders">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Chart
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Order Book
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Trades
                          </a>
                        </li>
                      </ul>
                      <div className="chart-container" ><Chart/></div>
                    </div>
                    <div className="col-12">
                      <ul className="nav nav-orders">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Open Orders(0)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Order History
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Trade History
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">
                            Funds
                          </a>
                        </li>
                      </ul>
                      <div className="chart-container" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl col-lg-12 d-none d-lg-block order-book-container">
                <div className="row">
                  <div className="col-12 section-order top-border">
                    <div className="row">
                      <div className="col-12">
                        <div className="title-order-book">Order Book</div>
                        <div className="order-book-header">
                          <ul className="nav nav-order-book">
                            <li className="nav-item">
                              <a className="" href="#">
                                <img
                                  className="img-svg"
                                  src="./assets/images/order-book1.svg"
                                />
                              </a>
                            </li>
                            <li className="nav-item disabled">
                              <a className="" href="#">
                                <img
                                  className="img-svg"
                                  src="./assets/images/order-book2.svg"
                                />
                              </a>
                            </li>
                            <li className="nav-item disabled">
                              <a className="" href="#">
                                <img
                                  className="img-svg"
                                  src="./assets/images/order-book3.svg"
                                />
                              </a>
                            </li>
                          </ul>
                          <select className="select-order">
                            <option>0.01</option>
                            <option>0.1</option>
                            <option>1</option>
                            <option>10</option>
                            <option>50</option>
                            <option>100</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <table className="table table-sm table-dark table-order-book">
                          <thead>
                            <tr>
                              <th scope="col">Price(USDT)</th>
                              <th scope="col">Amount(BTC)</th>
                              <th scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">30205.57</th>
                              <td className="ping-back">0.5975</td>
                              <td className="ping-back">22,103.90490</td>
                            </tr>
                            <tr>
                              <th scope="row">30205.57</th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                            <tr className="ping-back">
                              <th scope="row">30205.57</th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                            <tr>
                              <th scope="row" className="text-big">
                                29,691.23
                              </th>
                              <td className="text-big-span">$29,691.23</td>
                            </tr>
                            <tr>
                              <th scope="row" className="th-green">
                                30205.57
                              </th>
                              <td>0.5975</td>
                              <td className="green-back">22,103.90490</td>
                            </tr>
                            <tr>
                              <th scope="row" className="th-green">
                                30205.57
                              </th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                            <tr className="green-back">
                              <th scope="row" className="th-green">
                                30205.57
                              </th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                            <tr>
                              <th scope="row" className="th-green">
                                30205.57
                              </th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                            <tr>
                              <th scope="row" className="th-green">
                                30205.57
                              </th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                            <tr>
                              <th scope="row" className="th-green">
                                30205.57
                              </th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                            <tr>
                              <th scope="row" className="th-green">
                                30205.57
                              </th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-12">
                        <h5>Trades</h5>
                        <table className="table table-sm table-dark table-order-book table-order-book-1">
                          <thead>
                            <tr>
                              <th scope="col">Price(USDT)</th>
                              <th scope="col">Amount(BTC)</th>
                              <th scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">30205.57</th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                            <tr>
                              <th scope="row">30205.57</th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                            <tr>
                              <th scope="row">30205.57</th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                            <tr>
                              <th scope="row">29,691.23</th>
                              <td>$29,691.23</td>
                            </tr>
                            <tr>
                              <th scope="row">30205.57</th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                            <tr>
                              <th scope="row">30205.57</th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                            <tr>
                              <th scope="row">30205.57</th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                            <tr>
                              <th scope="row">30205.57</th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                            <tr>
                              <th scope="row">30205.57</th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                            <tr>
                              <th scope="row">30205.57</th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                            <tr>
                              <th scope="row">30205.57</th>
                              <td>0.5975</td>
                              <td>22,103.90490</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl d-lg-block d-none place-order-container">
            <div className="row h-100">
              <div className="col-12 section-place-order">
                <div className="row row-place-order">
                  <div className="col-12">
                    <div style={{ fontSize: 17, fontWeight: 500 }}>
                      Place Order
                    </div>
                    <div className="btn-group btn-group-lg btn-block py-3">
                      <button type="button" className="btn btn-buy">
                        BUY
                      </button>
                      <button type="button" className="btn btn-sell">
                        SELL
                      </button>
                    </div>
                    <div className="place-order-nav">
                      <ul className="nav">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#"
                            id="btn-limit"
                          >
                            Limit
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#" id="btn-market">
                            Market
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#" id="btn-stop-limit">
                            Stop-limit
                          </a>
                        </li>
                      </ul>
                      <a className="icon-place-order-info">
                        <i className="fa fa-info-circle" aria-hidden="true" />
                      </a>
                    </div>
                    <p className="text-avbl py-3">
                      Avbl <span className="span-avbl-usdt">-USDT</span>
                    </p>
                    <div className="inputs-order" id="inputs-limit">
                      <div className="input-group mb-3 input-group-price input-order-price-1">
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
                          id="input-order-price-1"
                          defaultValue="29730.59"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">USDT</span>
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
                          placeholder=""
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          defaultValue=""
                        />
                        <div className="input-group-append">
                          <span
                            className="input-group-text"
                            id="append-order-amount"
                          >
                            BTC
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="inputs-order" id="inputs-market">
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
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">USDT</span>
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
                          placeholder=""
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          defaultValue=""
                        />
                        <div className="input-group-append">
                          <span
                            className="input-group-text"
                            id="append-order-amount"
                          >
                            USDT
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="inputs-order" id="inputs-stop-limit">
                      <div className="input-group mb-3 input-group-price">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            Stop
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="input-order-market-price"
                          defaultValue=""
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">USDT</span>
                        </div>
                      </div>
                      <div className="input-group mb-3 input-group-price input-group-market-total">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            Limit
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="input-order-amount"
                          placeholder=""
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          defaultValue="29342.46"
                        />
                        <div className="input-group-append">
                          <span
                            className="input-group-text"
                            id="append-order-amount"
                          >
                            USDT
                          </span>
                        </div>
                      </div>
                      <div className="input-group mb-3 input-group-price input-group-market-total">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            Amount
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="input-order-amount"
                          placeholder=""
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          defaultValue=""
                        />
                        <div className="input-group-append">
                          <span
                            className="input-group-text"
                            id="append-order-amount"
                          >
                            BTC
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="order-stepper">
                      <div className="step-item step-item-active" />
                      <div className="step-line" />
                      <div className="step-item" />
                      <div className="step-item" />
                      <div className="step-item" />
                      <div className="step-item" />
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-block btn-connect-wallet my-4"
                    >
                      Connect Wallet
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="modal fade" id="myModal1" role="dialog">
              <div className="modal-dialog btc-usdt-modal footer-modal modal-lg">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Place Order</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      ×
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="dropdown-menu-btc-usdt btc-usdt-modal-content">
                      <div className="btn-group btn-group-lg btn-block py-3">
                        <button type="button" className="btn btn-buy">
                          BUY
                        </button>
                        <button type="button" className="btn btn-sell">
                          SELL
                        </button>
                      </div>
                      <div className="place-order-nav">
                        <ul className="nav">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#"
                              id="btn-limit-mobile"
                            >
                              Limit
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#"
                              id="btn-market-mobile"
                            >
                              Market
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#"
                              id="btn-stop-limit-mobile"
                            >
                              Stop-limit
                            </a>
                          </li>
                        </ul>
                        <a className="icon-place-order-info">
                          <i className="fa fa-info-circle" aria-hidden="true" />
                        </a>
                      </div>
                      <p className="text-avbl py-3">
                        Avbl <span className="span-avbl-usdt">-USDT</span>
                      </p>
                      <div
                        className="inputs-order-mobile"
                        id="inputs-limit-mobile"
                      >
                        <div className="input-group mb-3 input-group-price input-order-price-1">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              Price
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="input-order-price-1"
                            defaultValue="29730.59"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">USDT</span>
                          </div>
                        </div>
                        <div className="input-group mb-3 input-group-price">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              Amount
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="input-order-amount"
                            placeholder=""
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            defaultValue=""
                          />
                          <div className="input-group-append">
                            <span
                              className="input-group-text"
                              id="append-order-amount"
                            >
                              BTC
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="inputs-order-mobile"
                        id="inputs-market-mobile"
                      >
                        <div className="input-group mb-3 input-group-price input-order-market-price">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
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
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">USDT</span>
                          </div>
                        </div>
                        <div className="input-group mb-3 input-group-price input-group-market-total">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              Total
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="input-order-amount"
                            placeholder=""
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            defaultValue=""
                          />
                          <div className="input-group-append">
                            <span
                              className="input-group-text"
                              id="append-order-amount"
                            >
                              USDT
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="inputs-order-mobile"
                        id="inputs-stop-limit-mobile"
                      >
                        <div className="input-group mb-3 input-group-price">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              Stop
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="input-order-market-price"
                            defaultValue=""
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">USDT</span>
                          </div>
                        </div>
                        <div className="input-group mb-3 input-group-price input-group-market-total">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              Limit
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="input-order-amount"
                            placeholder=""
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            defaultValue="29342.46"
                          />
                          <div className="input-group-append">
                            <span
                              className="input-group-text"
                              id="append-order-amount"
                            >
                              USDT
                            </span>
                          </div>
                        </div>
                        <div className="input-group mb-3 input-group-price input-group-market-total">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              Amount
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="input-order-amount"
                            placeholder=""
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            defaultValue=""
                          />
                          <div className="input-group-append">
                            <span
                              className="input-group-text"
                              id="append-order-amount"
                            >
                              BTC
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0">
                        <div className="col-3 px-0">
                          <div className="card card-footer-percent ml-0">
                            25%
                          </div>
                        </div>
                        <div className="col-3 px-0">
                          <div className="card card-footer-percent">50%</div>
                        </div>
                        <div className="col-3 px-0">
                          <div className="card card-footer-percent">75%</div>
                        </div>
                        <div className="col-3 px-0 mr-0">
                          <div className="card card-footer-percent mr-0">
                            100%
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary btn-block btn-connect-wallet my-4"
                      >
                        Connect Wallet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
