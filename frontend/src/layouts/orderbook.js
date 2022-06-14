import useSharedState from "../hook/useSharedState";
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import io from "socket.io-client";

const orderbookcount = 20;

function OrderBook() {
  const {
    selectedToken,
    setSelectedToken,
    bnbPrice,
    long,
    setLong,
    ask,
    setAsk,
    setBid,
    setDaydata
  } = useSharedState(); //useState(undefined);
  const [orderbook, setOrderbook] = useState({}); //useState(undefined);
  const [orderbookType, setOrderbookType] = useState(1); //useState(undefined);
  const stateRef = useRef();
  stateRef.current = selectedToken;

  const fixedLength = (y) => {
    let num = y;
    let prec = 6;
    while (num > 10) {
      num /= 10;
      prec--;
    }
    return y.toFixed(prec);
  };
  const getPercent = (lst, value, start, end) => {
    let max = Number(lst[0][1]);
    let min = Number(lst[0][1]);
    for (let i = start; i <= end; i++) {
      const order = lst[i];
      if (max < Number(order[1])) max = Number(order[1]);
      if (min > Number(order[1])) min = Number(order[1]);
    }
    let percent = max == min ? 0 : (Number(value) - min) / (max - min);
    if (max == min) percent = 0;
    if (Number(value) <= (max + min) / 20) percent = 0;
    if (Number(value) > (max + min) / 20) percent = 25;
    if (Number(value) > (max + min) / 10) percent = 50;
    if (Number(value) > (max + min) / 5) percent = 100;

    // if(window.innerWidth > 992) {
    //   percent=percent/6;
    // }else{
    //   percent=percent/2;
    // }
    //if(window.innerWidth <= 760) percent=percent/2;

    return percent;
  };
  const getUsdValue = (ask) => {
    let value = 0;
    if (selectedToken.info.quote == "BNB") {
      value = Number(ask) * bnbPrice;
    } else {
      value = bnbPrice;
    }
    return value;
  };
  useEffect(() => {
    let socket = undefined;
    const init = async () => {
      setOrderbook({});
      const prefix = window.location.protocol + "//" + window.location.hostname;
      const url =
        prefix + "/api/getdata?op=orderbook&symbol=" + selectedToken.symbol;
      const response = await fetch(url);
      const rdata = await response.json();
      setOrderbook(rdata);
      setAsk(Number(rdata.asks[0][0]));
      setBid(Number(rdata.bids[0][0]));

      if (!socket) {
        socket = io(prefix);
      } else {
        socket.leaveAll();
      }
      socket.emit("join", selectedToken.info.symbol);
      socket.on("orderbook", function (data) {
        if (stateRef.current.info.symbol != selectedToken.info.symbol) {
          socket.disconnect();
        } else {
          setAsk((ask) => {
            setLong(ask <= Number(data.asks[0][0]));
            return Number(data.asks[0][0]);
          });
          setBid((bid) => Number(data.bids[0][0]));
          setOrderbook(data);
        }
      });
      socket.on("daydata", function (data) {
        if (stateRef.current.info.symbol != selectedToken.info.symbol) {
          socket.disconnect();
        } else {
          setDaydata(data);
        }
      });
    };
    if (selectedToken) init();
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [selectedToken]);

  return (
    <div className="row">
      <div className="col-12">
        <div className="order-book-header">
          <ul className="nav nav-order-book">
            <li
              className={"nav-item " + (orderbookType == 1 ? "" : "disabled")}
            >
              <a className="" onClick={() => setOrderbookType(1)} role="button">
                <img
                  className="img-svg"
                  src="./assets/images/order-book1.svg"
                />
              </a>
            </li>
            <li
              className={"nav-item " + (orderbookType == 2 ? "" : "disabled")}
            >
              <a className="" onClick={() => setOrderbookType(2)} role="button">
                <img
                  className="img-svg"
                  src="./assets/images/order-book2.svg"
                />
              </a>
            </li>
            <li
              className={"nav-item " + (orderbookType == 3 ? "" : "disabled")}
            >
              <a className="" onClick={() => setOrderbookType(3)} role="button">
                <img
                  className="img-svg"
                  src="./assets/images/order-book3.svg"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {orderbookType == 1 && (
        <div className="col-12 orderbooksub">
          <div style={{ height: "100%", overflowY: "hidden" ,width:"100%"}}>
            <table className="table table-sm table-dark table-order-book">
              <thead>
                <tr>
                  <th scope="col">Price</th>
                  <th scope="col">Amount</th>
                  <th scope="col " className="d-none d-lg-block">Total</th>
                </tr>
              </thead>
              <tbody style={{ position: "relative" }}>
                {(function (rows, i, len) {
                  if (orderbook.asks) {
                    while (i < len) {
                      rows.push(
                        <tr key={i} className="relativetr">
                          <td>
                            <span className="mytext-danger">
                            {fixedLength(
                              Number(orderbook.asks[len - i - 1][0])
                            )}
                            </span>
                          </td>
                          <td className="text-end">
                            {fixedLength(
                              Number(orderbook.asks[len - i - 1][1])
                            )}
                          </td>
                          <td className=" d-none d-lg-block text-end">
                            {fixedLength(
                              Number(orderbook.asks[len - i - 1][1]) *
                                Number(orderbook.asks[len - i - 1][0])
                            )}
                          </td>
                          {getPercent(
                            orderbook.asks,
                            orderbook.asks[len - i - 1][1],
                            0,
                            orderbookcount - 1
                          ) > 0 && (
                            <td
                              className="tr-shadow"
                              style={{
                                background: "rgba(234, 0, 112, 0.15)",
                                width:
                                  getPercent(
                                    orderbook.asks,
                                    orderbook.asks[len - i - 1][1],
                                    0,
                                    orderbookcount - 1
                                  ) + "%",
                              }}
                            ></td>
                          )}
                        </tr>
                      );
                      i++;
                    }
                  }
                  return rows;
                })([], 0, orderbookcount)}
              </tbody>
            </table>
          </div>
          <div className="p-2 d-none d-lg-block">
            <span className="text-big pr-2">{orderbook.asks ? fixedLength(Number(orderbook.asks[0][0])):""}</span>
            <span className="text-big-span">${orderbook.bids ? fixedLength(getUsdValue(orderbook.bids[0][0])):0}</span>
          </div>
          <div style={{ height: "100%", overflowY: "hidden" ,width:"100%"}}>
            <table className="table table-sm table-dark table-order-book">
              <thead>
                <tr>
                  <th scope="col">Price</th>
                  <th scope="col">Amount</th>
                  <th scope="col " className="d-none d-lg-block">Total</th>
                </tr>
              </thead>
              <tbody style={{ position: "relative" }}>
                {(function (rows, i, len) {
                  if (orderbook.bids) {
                    while (i < len) {
                      rows.push(
                        <tr key={i} className="relativetr">
                          <td >
                            <span className="mytext-success">
                              {fixedLength(Number(orderbook.bids[i][0]))}
                            </span>
                          </td>
                          <td className=" text-end">
                            {fixedLength(Number(orderbook.bids[i][1]))}
                          </td>
                          <td className=" d-none d-lg-block text-end">
                            {fixedLength(
                              Number(orderbook.bids[i][1]) *
                                Number(orderbook.bids[i][0])
                            )}
                          </td>
                          {getPercent(
                                  orderbook.bids,
                                  orderbook.bids[i][1],
                                  0,
                                  orderbookcount - 1
                                )>0 && (
                          <td
                            className="tr-shadow"
                            style={{
                              background: "rgba(0, 192, 135, 0.15)",
                              width:
                                getPercent(
                                  orderbook.bids,
                                  orderbook.bids[i][1],
                                  0,
                                  orderbookcount - 1
                                ) + "%",
                            }}
                          ></td>
                                )}
                        </tr>
                      );
                      i++;
                    }
                  }
                  return rows;
                })([], 0, orderbookcount)}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {orderbookType == 2 && (
          <div style={{ height: "450px", overflowY: "hidden" ,width:"100%"}} className="p-2">
            <table className="table table-sm table-dark table-order-book">
              <thead>
                <tr>
                  <th scope="col">Price</th>
                  <th scope="col">Amount</th>
                  <th scope="col" className="d-none d-lg-block">Total</th>
                </tr>
              </thead>
              <tbody style={{ position: "relative" }}>
                {(function (rows, i, len) {
                  if (orderbook.bids) {
                    while (i < len) {
                      rows.push(
                        <tr key={i} className="relativetr">
                          <td >
                            <span className="mytext-success">
                              {fixedLength(Number(orderbook.bids[i][0]))}
                            </span>
                          </td>
                          <td className=" text-end">
                            {fixedLength(Number(orderbook.bids[i][1]))}
                          </td>
                          <td className=" d-none d-lg-block text-end">
                            {fixedLength(
                              Number(orderbook.bids[i][1]) *
                                Number(orderbook.bids[i][0])
                            )}
                          </td>
                          {getPercent(
                                  orderbook.bids,
                                  orderbook.bids[i][1],
                                  0,
                                  orderbookcount - 1
                                ) >0 &&
                                (
                                  <td
                                    className="tr-shadow"
                                    style={{
                                      background: "rgba(0, 192, 135, 0.15)",
                                      width:
                                        getPercent(
                                          orderbook.bids,
                                          orderbook.bids[i][1],
                                          0,
                                          orderbookcount - 1
                                        ) + "%",
                                    }}
                                  ></td>
                                )
                          }
                        </tr>
                      );
                      i++;
                    }
                  }
                  return rows;
                })([], 0, orderbookcount)}
              </tbody>
            </table>
          </div>

      )}
      {orderbookType == 3 && (
          <div style={{ height: "450px", overflowY: "hidden" ,width:"100%"}} className="p-2">
            <table className="table table-sm table-dark table-order-book">
              <thead>
                <tr>
                  <th scope="col">Price</th>
                  <th scope="col">Amount</th>
                  <th scope="col" className="d-none d-lg-block">Total</th>
                </tr>
              </thead>
              <tbody style={{ position: "relative" }}>
                {(function (rows, i, len) {
                  if (orderbook.asks) {
                    while (i < len) {
                      rows.push(
                        <tr key={i} className="relativetr">
                          <td>
                            <span className="mytext-danger">
                            {fixedLength(
                              Number(orderbook.asks[len - i - 1][0])
                            )}
                            </span>
                          </td>
                          <td className="text-end">
                            {fixedLength(
                              Number(orderbook.asks[len - i - 1][1])
                            )}
                          </td>
                          <td className=" d-none d-lg-block text-end">
                            {fixedLength(
                              Number(orderbook.asks[len - i - 1][1]) *
                                Number(orderbook.asks[len - i - 1][0])
                            )}
                          </td>
                          {getPercent(
                            orderbook.asks,
                            orderbook.asks[len - i - 1][1],
                            0,
                            orderbookcount - 1
                          ) > 0 && (
                            <td
                              className="tr-shadow"
                              style={{
                                background: "rgba(234, 0, 112, 0.15)",
                                width:
                                  getPercent(
                                    orderbook.asks,
                                    orderbook.asks[len - i - 1][1],
                                    0,
                                    orderbookcount - 1
                                  ) + "%",
                              }}
                            ></td>
                          )}
                        </tr>
                      );
                      i++;
                    }
                  }
                  return rows;
                })([], 0, orderbookcount)}
              </tbody>
            </table>
          </div>

        )}
    </div>
  );
}

export default OrderBook;
