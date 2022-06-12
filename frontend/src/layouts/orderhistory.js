import useSharedState from "../hook/useSharedState";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { useWeb3React } from "@web3-react/core";
import { fixedLength, adjustDate } from "./common";
import { ERC20_ABI } from "../abi/ERC20";
import { WETH, limitOrder } from "./const";
import { getContract } from "./contract";
import { LIMIT_ABI } from "../abi/LIMIT";

function OrderHistory() {
  const { selectedToken, setSelectedToken, bnbPrice, tokensList } =
    useSharedState(); //useState(undefined);
  const [historyType, setHistoryType] = useState(1); //useState(undefined);

  const { chainId, account, activate, active, library } = useWeb3React();
  const [openOrders, setOpenOrders] = useState([]);
  const [tradeHistories, setTradeHistories] = useState([]);
  const [balances, setBalances] = useState([]);
  const [totalBnbBalance, setTotalBnbBalance] = useState(0);
  const [timespanOrder, setTimespanOrder] = useState(3600 * 24 * 30);
  const [timespanTrade, setTimespanTrade] = useState(3600 * 24 * 30);
  const [busellFilter, setBuysellFilter] = useState(0);
  const [hideOthersOpen, setHideOthersOpen] = useState(false);
  const [hideOthersOrder, setHideOthersOrder] = useState(false);
  const [hideOthersTrade, setHideOthersTrade] = useState(false);

  const [longShort, setLongShort] = useState(0);
  const selectedTokenRef = useRef();
  const accountRef = useRef();
  const intervalRef = useRef();

  const prefix = window.location.protocol + "//" + window.location.hostname;
  const limitTx = (tx) => {
    return tx
      ? tx.substring(0, 5) + "..." + tx.substring(tx.length - 6, tx.length)
      : "";
  };
  const updateOpenOrder = async () => {
    const url =
      prefix + "/api/getorder?chainid=56&owner=" + account + "&openclose=open";
    const response = await fetch(url);
    const rt = await response.json();
    console.log(rt);
    setOpenOrders(rt);
  };
  const updateTradeHistories = async () => {
    const url =
      prefix +
      "/api/getorder?chainid=56&owner=" +
      account +
      "&openclose=trade&timestamp=" +
      (Date.now() - timespanTrade * 1000);
    const response = await fetch(url);
    const rt = await response.json();
    setTradeHistories(rt);
    console.log(rt);
  };
  const getInAmount = (symbol) => {
    let am = 0;
    openOrders.map((order) => {
      if (order.inAsset == symbol) am = am + order.inAmount;
    });
    return am;
  };
  const updateBalances = async () => {
    let bl = [];
    let subBnb = 0;
    if (!active || chainId != 56) return;
    //    console.log({account,active})
    let ethBalance = Number(await library.getBalance(account));
    ethBalance = Number(ethBalance / Math.pow(10, WETH.decimals));
    let inAmount = getInAmount("BNB");
    let total = inAmount + ethBalance;
    subBnb = subBnb + total;
    bl.push({
      asset: "BNB",
      amount: ethBalance,
      inamount: inAmount,
      total: total,
      bnbvalue: total,
    });
    await Promise.all(
      tokensList.map(async (token) => {
        const contract = getContract(
          token.address,
          ERC20_ABI,
          library,
          account
        );
        let tokenBalance = Number(await contract.balanceOf(account));
        tokenBalance = tokenBalance / Math.pow(10, selectedToken.info.decimals);
        inAmount = getInAmount(token.symbol);
        total = tokenBalance + inAmount;
        const bnbvalue =
          token.info.quote == "BNB"
            ? Number(token.priceBNB) * total
            : total / Number(token.priceBNB);
        bl.push({
          asset: token.symbol,
          amount: tokenBalance,
          inamount: inAmount,
          total: total,
          bnbvalue: bnbvalue,
        });
        subBnb = subBnb + bnbvalue;
      })
    );
    setTotalBnbBalance(subBnb);
    setBalances(JSON.parse(JSON.stringify(bl)));
  };
  const updateAll = async () => {
    if (account) {
      updateOpenOrder();
      updateTradeHistories();
      updateBalances();
    }
  };
  const orderCancel = async (orderId) => {
    const limitContract = getContract(limitOrder, LIMIT_ABI, library, account);
    await limitContract.cancelOrder(orderId);
  };
  useEffect(() => {
    if (selectedToken && account) {
      selectedTokenRef.current = selectedToken;
      accountRef.current = account;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      updateAll();
      intervalRef.current = setInterval(() => updateAll(), 10000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [selectedToken, account, active, longShort]);
  return (
    <div className="col-12 p-1">
      <ul className="nav nav-orders">
        <li className="nav-item">
          <a role="button" className={"nav-link "+(historyType==1?"active":"")} onClick={()=>setHistoryType(1)}>
            Open Orders
          </a>
        </li>
        <li className="nav-item">
          <a role="button"  className={"nav-link "+(historyType==2?"active":"")} onClick={()=>setHistoryType(2)}>
            Trade History
          </a>
        </li>
        <li className="nav-item">
          <a role="button"  className={"nav-link "+(historyType==3?"active":"")} onClick={()=>setHistoryType(3)}>
            Funds
          </a>
        </li>
      </ul>
      {historyType==1 && (
        <div className="order_panel">
            <table className="table text-gray table-sm table-borderless">
              <thead>
                <tr>
                  <th scope="col">TxHash</th>
                  <th scope="col">Date</th>
                  <th scope="col">Pair</th>
                  <th scope="col">Side</th>
                  <th scope="col">Price</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {openOrders.map((order, idx) => {
                  if (
                    !hideOthersOpen ||
                    order.pairs.indexOf(selectedToken?.symbol) >= 0
                  ) {
                    return (
                      <tr key={idx}>
                        <td>{limitTx(order.transactionid)}</td>
                        <td>{adjustDate(order.timestamp)}</td>
                        <td>{order.pairs}</td>
                        <td>{order.side}</td>
                        <td>{order.price}</td>
                        <td>{order.amount}</td>
                        <td
                          role="button"
                          className="mytext-danger"
                          onClick={() => orderCancel(order.orderid)}
                        >
                          Cancel
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
        </div>
      )}
      {historyType==2 && (
        <div className="order_panel">
            <table className="table text-gray table-sm table-borderless">
              <thead>
                <tr>
                  <th scope="col">Tx</th>
                  <th scope="col">Date</th>
                  <th scope="col">Pair</th>
                  <th scope="col">Side</th>
                  <th scope="col">Price</th>
                  <th scope="col">Filled</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {tradeHistories.map((order, idx) => {
                  if (
                    !hideOthersTrade ||
                    order.pairs.indexOf(selectedToken?.symbol) >= 0
                  ) {
                    if (
                      longShort == 0 ||
                      (longShort == 1 && order.side == "buy") ||
                      (longShort == 2 && order.side == "sell")
                    ) {
                      return (
                        <tr key={idx}>
                          <td>{limitTx(order.transactionid)}</td>
                          <td>{adjustDate(order.timestamp)}</td>
                          <td>{order.pairs}</td>
                          <td>{order.side}</td>
                          <td>{order.price}</td>
                          <td>{order.amount}</td>
                          <td>{fixedLength(order.price * order.amount)}</td>
                        </tr>
                      );
                    }
                  }
                })}
              </tbody>
            </table>
        </div>

        )
      }
      {historyType==3 && (
        <div className="order_panel">  
          <div className="orders-widget__subtoolbar p-1 d-flex justify-content-end align-items-center">
            <div className="text-gray btext">
          Estimated Value: {fixedLength(totalBnbBalance)}BNB / ${fixedLength(totalBnbBalance*bnbPrice)}</div>
          </div>
            <table className="table text-gray table-sm table-borderless">
              <thead>
                <tr>
                  <th scope="col">Asset</th>
                  <th scope="col">Total Balance</th>
                  <th scope="col">Available Balance</th>
                  <th scope="col">In Order</th>
                  <th scope="col">BNB Value</th>
                </tr>
              </thead>
              <tbody>
                {balances.map((balance, idx) => {
                  if (Number(balance.bnbvalue) > 0) {
                    return (
                      <tr key={idx}>
                        <td>{balance.asset}</td>
                        <td>{fixedLength(balance.total)}</td>
                        <td>{fixedLength(balance.amount)}</td>
                        <td>{fixedLength(balance.inamount)}</td>
                        <td>{fixedLength(balance.bnbvalue)}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>            
        </div>
      )}
      
    </div>
  );
}

export default OrderHistory;
