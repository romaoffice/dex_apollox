import useSharedState from '../hook/useSharedState'
import React ,{useState,useRef,useEffect,useCallback,useMemo} from "react";
import io from 'socket.io-client';

function Trades() {

  const {showtr,setShowTr,selectedToken,setSelectedToken}=useSharedState();//useState(undefined);
  const [transactions,setTransactions]=React.useState([]);//useState(undefined);
  const stateRef = useRef();
  stateRef.current = selectedToken;
  useEffect(() => {
      let socket=undefined;
      const init=async()=>{

        const prefix = window.location.protocol+"//"+window.location.hostname;
        const url = prefix+"/api/getdata?op=transactions&symbol="+selectedToken.symbol;
        const response = await fetch(url);
        const rdata = await response.json();
        setTransactions(rdata);
        socket = io(prefix);
        socket.emit("join",selectedToken.info.symbol);
        socket.on("transactions", function(data) {
            if(stateRef.current.info.symbol != selectedToken.info.symbol){
              socket.disconnect();
            } else{
              setTransactions(data);

            }
        });

      }
      if(selectedToken) init();
      return () => {
        if (socket) {
          socket.disconnect();
        }
      }
  }, [selectedToken]) 

  return (
    <table className="table table-sm table-dark table-order-book table-order-book-1">
      <thead>
        <tr>
          <th scope="col">Price</th>
          <th scope="col">Amount</th>
          <th scope="col">Time</th>
        </tr>
      </thead>
      <tbody>
        {!transactions || transactions.length==0 &&
          <tr>
            <td colSpan="3">Loading...</td>
          </tr>
        }

        {transactions?.map((transaction,idx)=>(
          <tr key={idx}>
            <td >
              <span className={transaction.isbuy?"text-blue":"text-red"}>{transaction.price}</span></td>
            <td className="text-end">{transaction.amount}</td>
            <td className="text-end">{(new Date(transaction.time)).toLocaleTimeString()}</td>
          </tr>
         ))}

      </tbody>
    </table>
  );
}

export default Trades;
