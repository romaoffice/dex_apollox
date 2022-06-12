import useSharedState from "../hook/useSharedState";
import React, { useState, useEffect, useCallback, useMemo ,useRef} from "react";
import io from "socket.io-client";

function TokenList() {
  const {
    showtr,
    tokenCategory,
    setTokenCategory,
    selectedToken,
    setSelectedToken,
    bnbPrice,
    setBnbPrice,
    ask,
    setAsk,
    long,
    setLong,
    setBid,
    tokensList,
    setTokensList,
  } = useSharedState(); //useState(undefined);
  const dropDownMenu = useRef(null);
  const favpos = "favbsc";
  const [fav, setFav] = useState(
    localStorage.getItem(favpos) ? JSON.parse(localStorage.getItem(favpos)) : {}
  );
  const [sortMode, setSortMode] = useState("CHANGE");
  const options = ["CHANGE", "VOLUME"];
  const [order, setOrder] = useState(0);
  const [searchToken, setSearchToken] = useState("");
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const init = async () => {
      const prefix = window.location.protocol + "//" + window.location.hostname;
      const url = prefix + "/api/getdata?op=pairs24h";
      const response = await fetch(url);
      const pairs = await response.json();
      setTokensList(pairs);
      let search = window.location.search;
      let params = new URLSearchParams(search);
      let symbolparam = params.get("symbol");
      symbolparam = (symbolparam ? symbolparam : "BNBUSDT").toUpperCase();
      console.log({ symbolparam });
      for (let i = 0; i < pairs.length; i++) {
        if (pairs[i].symbol == "USDT") {
          setBnbPrice(Number(pairs[i].priceUSD));
        }
        if (pairs[i].info.base + pairs[i].info.quote == symbolparam) {
          if (!selectedToken) {
            console.log('set token again',pairs[i],selectedToken);
            setSelectedToken(pairs[i]);
          }
        }
      }

      const socket = io(prefix);
      socket.emit("join", "pairs24h");
      // listen for new messages
      socket.on("data", function (data) {
        setTokensList(data);
        if (selectedToken) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].symbol == selectedToken.symbol) {
              setAsk((ask) => {
                setLong(ask <= Number(data[i].priceBNB));
                return Number(data[i].priceBNB);
              });
              setBid(Number(data[i].priceBNB));
            }
          }
        }
      });

      const socketbnb = io(prefix);
      socketbnb.emit("join", "USDT");
      // listen for new messages
      socketbnb.on("orderbook", function (data) {
        setBnbPrice(Number(data.asks[0][0]));
      });
    };
    init();
  }, []);

  useEffect(() => {
    const setSortData = () => {
      if (tokensList?.length > 0) {
        let newData = tokensList.filter((token) => {
          if (
            searchToken == "" ||
            token.info.base.search(searchToken.toUpperCase()) >= 0 ||
            token.info.quote.search(searchToken.toUpperCase()) >= 0
          ) {
            if (tokenCategory == "BNB") return true;
            if (tokenCategory == "FAV") {
              return fav[token.address];
            }
          }
        });
        newData.sort((a, b) => {
          if (fav[a.address]) return -1;
          if (fav[b.address]) return 1;
          if (fav[a.address] && fav[b.address]) return 0;

          if (sortMode == "CHANGE")
            return Math.sign(
              (b.priceBNBChange - a.priceBNBChange) * (1 - 2 * order)
            );
          return Math.sign(
            (b.volumeUSDChange - a.volumeUSDChange) * (1 - 2 * order)
          );
        });
        setSortedData([...newData]);
      }
    };
    setSortData();
  }, [tokensList, sortMode, fav, tokenCategory, searchToken]);

  const setToken = (token) => {
    setSelectedToken(token);
    setLong(true);
    setAsk(Number(token.priceBNB));
    dropDownMenu.current.classList.add("hidehover");
    dropDownMenu.current.classList.remove("dropdown-menu");
    setTimeout(()=>{
      dropDownMenu.current.classList.add("dropdown-menu");
    },1000)
    console.log(token);
  };

  const changeFav = (token) => {
    if (fav[token.address]) {
      removeFav(token);
    } else {
      addFav(token);
    }
  };

  const addFav = (token) => {
    let newFav = fav;
    newFav[token.address] = true;
    setFav({ ...newFav });
    localStorage.setItem(favpos, JSON.stringify(newFav));
  };
  const removeFav = (token) => {
    let newFav = fav;
    delete newFav[token.address];
    setFav({ ...newFav });
    localStorage.setItem(favpos, JSON.stringify(newFav));
  };

  return (
    <div ref={dropDownMenu} className="dropdown-menu dropdown-menu-btc-usdt"
    style={{"overflowY":"scroll"}}>

      <div className="input-group mb-3">
        <div className="col-6 ">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text btc-usdt-search-icon" id="basic-addon1"><i className="fa fa-search"></i></span>
              </div>
              <input type="text" className="form-control btc-usdt-search-input" value={searchToken}
              onChange={(e) => setSearchToken(e.currentTarget.value)} placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        </div>
        <div className="col-3 form-check form-check-inline m-0 pe-2">
          <input
            className="form-check-input"
            value="CHANGE"
            checked={sortMode === "CHANGE"}
            onChange={(e) => {
              setSortMode(e.currentTarget.value);
            }}
            type="radio"
          />
          <label
            className="form-check-label text-muted"
            htmlFor={"inlineRadio1"}
          >
            Change
          </label>
        </div>
        <div className="col-3 form-check form-check-inline m-0">
          <input
            className="form-check-input"
            value="VOLUME"
            checked={sortMode === "VOLUME"}
            onChange={(e) => {
              setSortMode(e.currentTarget.value);
            }}
            type="radio"
            style={{ background: "rgb(136, 136, 136)" }}
          />
          <label
            className="form-check-label text-muted"
            htmlFor={"inlineRadio2"}
          >
            Volume
          </label>
        </div>
      </div>
      <div>
        <i className="fa fa-star icon-star" aria-hidden="true" />
          <span className="select-usdt">
          USDT
          </span>
          {
        // <select className="select-usdt">
        //   <option selected="">USDT</option>
        // </select>

          }
      </div>
      <table className="table table-sm table-dark table-btc-usdt">
        <thead>
          <tr>
            <th scope="col">Pair</th>
            <th scope="col">Last Price</th>
            <th scope="col">Change</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.length == 0 && (
            <tr>
              <td colSpan="3">No Tokens...</td>
            </tr>
          )}
          {sortedData.map((token, idx) => (
            <tr
              role="button"
              key={idx}
              onClick={(e) => {
                setToken(token);
              }}
              data-dismiss="modal"

            >
              <td className="text-nowrap">
                <i
                  className={
                    "fa fa-star icon-star" +
                    (fav[token.address] ? " filledstart" : " unfilledstar")
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    changeFav(token);
                  }}
                />
                {token.info.base}/{token.info.quote}
              </td>
              <td>{token.priceBNB}</td>
              {sortMode == "CHANGE" && (
                <td className="text-end pe-2" >
                  <span className={(token.priceBNBChange > 0
                      ? " td-green-btc-usdt"
                      : " td-red-btc-usdt")
                  }>
                  {token.priceBNBChange > 0 ? "+" : ""}
                  {token.priceBNBChange.toFixed(2)}%
                  </span>
                </td>
              )}
              {sortMode == "VOLUME" && (
                <td
                  className="text-end pe-2 "
                >
                  <span className={(token.volumeUSDChange > 0
                      ? " td-green-btc-usdt"
                      : " td-red-btc-usdt")
                    }>
                  {token.volumeUSDChange > 0 ? "+" : ""}
                  {token.volumeUSDChange.toFixed(2)}%
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TokenList;
