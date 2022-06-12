import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

function TradeMain() {
  const [page,setPage] = useState(1);
  const [direction,setDirection] = useState("buy");
  return (
    <>
      <div className="btn-group btn-group-lg btn-block py-3">
        <button type="button" className={"btn btn-buy "+(direction=="buy"?"active":"")} onClick={()=>setDirection("buy")}>
          BUY
        </button>
        <button type="button" className={"btn btn-sell "+(direction=="sell"?"active":"")} onClick={()=>setDirection("sell")}>
          SELL
        </button>
      </div>
      <div className="place-order-nav">
        <ul className="nav">
          <li className="nav-item">
            <a className={"nav-link "+(page==1?"active":"")} onClick= {()=>setPage(1)} role="button">
              Limit
            </a>
          </li>
          <li className="nav-item">
            <a className={"nav-link "+(page==2?"active":"")} onClick= {()=>setPage(2)}  role="button">
              Market
            </a>
          </li>
        </ul>
      </div>
      <p className="text-avbl py-3">
        Avbl <span className="span-avbl-usdt">-USDT</span>
      </p>
      {page==1 && (
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
            <span className="input-group-text" id="append-order-amount">
              BTC
            </span>
          </div>
        </div>
      </div>
        )}
      {page==2 && (
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
            <span className="input-group-text" id="append-order-amount">
              USDT
            </span>
          </div>
        </div>
      </div>
        )}
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
    </>
  );
}

export default TradeMain;
