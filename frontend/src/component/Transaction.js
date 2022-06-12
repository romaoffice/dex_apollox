import useSharedState from '../hook/useSharedState'
import React ,{useState,useEffect,useCallback,useMemo} from "react";
import io from 'socket.io-client';


function Tradehistory() {

  const {showtr,setShowTr,selectedToken,setSelectedToken}=useSharedState();//useState(undefined);
  const [transactions,setTransactions]=React.useState([]);//useState(undefined);
  
  useEffect(() => {
      let socket=undefined;
      const init=async()=>{
        const prefix = window.location.protocol+"//"+window.location.hostname;
        const url = prefix+"/api/getdata?op=transactions&symbol="+selectedToken.symbol;
        const response = await fetch(url);
        const rdata = await response.json();
        setTransactions(rdata);
        if(!socket){
          socket = io(prefix);
        }else{
          socket.leaveAll();
        }
        socket.emit("join",selectedToken.info.symbol);
        socket.on("transactions", function(data) {
            setTransactions(data);
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
      <div className={showtr ? "tranpanel":"tranpanelh"}>
                <div className="d-none d-lg-block">
                <div className="d-flex justify-content-between  p-1 align-items-center mt-2 mb-2 " role="button" 
                  onClick={changeShow}>
                  <span className="text-warning text-1">Trading History</span>
                  <i className="bi bi-chevron-bar-down" />
                </div>
                </div>
                { showtr &&
                  <div className="table-responsive troverflow  p-1" style={{"overflowY":"scroll"}} >
                    <table className="table text-white table-sm table-borderless"  >
                      <thead className="text-muted">
                        <tr>
                          <th scope="col">Price</th>
                          <th scope="col" className= "text-end">Amount</th>
                          <th scope="col" className= "text-end">Time</th>
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
                            <td className={transaction.isbuy?"mytext-success":"mytext-danger"}>{transaction.price}</td>
                            <td className="font-weight-bold text-end">{transaction.amount}</td>
                            <td className="text-muted text-end">{(new Date(transaction.time)).toLocaleTimeString()}</td>
                          </tr>
                         ))}
                      </tbody>
                    </table>
                  </div>                }

      </div>
  );
}

export default Tradehistory;
