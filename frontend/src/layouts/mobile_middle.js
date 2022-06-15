import useSharedState from '../hook/useSharedState'
import React ,{useState,useRef,useEffect,useCallback,useMemo} from "react";
import Chart1 from "./Chart1"
import OrderBook from "./orderbook"
import Trades from "./trades"
 
function MobileMiddle() {
  	const [itemType,setItemType]=useState(1);//useState(undefined);

	return (

        <div className="col-12">
          <ul className="nav nav-orders">
            <li className="nav-item">
              <a 
              	className={"nav-link "+(itemType==1?"active":"")} 
              	onClick={()=>setItemType(1)}
              	role="button" >
                Chart
              </a>
            </li>
            <li className="nav-item">
              <a 
              	className={"nav-link "+(itemType==2?"active":"")} 
              	onClick={()=>setItemType(2)}
              	role="button" >
                Order Book
              </a>
            </li>
            <li className="nav-item">
              <a 
              	className={"nav-link "+(itemType==3?"active":"")} 
              	onClick={()=>setItemType(3)}
              	role="button" >
                Trades
              </a>
            </li>
          </ul>
          {itemType==1 && (
            <div className="chart-container" ><Chart1/></div>
            )}
          {itemType==2 && (
            <div  ><OrderBook/></div>
            )}
          {itemType==3 && (
            <div  style={{height:"450px",overflowY:"hidden"}}><Trades/></div>
            )}
        </div>

		)
}

export default MobileMiddle;
