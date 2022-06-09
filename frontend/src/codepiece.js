<div>
      <ul className="nav nav-pills mb-1" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link bg-transparent active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Open Orders</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link bg-transparent" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Trade History</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link bg-transparent" id="pills-balances-tab" data-bs-toggle="pill" data-bs-target="#pills-balances" type="button" role="tab" aria-controls="pills-balances" aria-selected="false">Balances</button>
        </li>
      </ul>
    </div>
    <div className="tab-content " id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <div className="orders-widget__subtoolbar p-1 d-flex justify-content-between align-items-center">
          <div className="form-check">
            <input className="form-check-input custom-checkbox" type="checkbox" defaultValue id="flexCheckDefault"
            checked={hideOthersOpen} onClick={()=>setHideOthersOpen(!hideOthersOpen)}/>
            <label className="form-check-label" htmlFor={"flexCheckDefault"}>
              Hide Other Pairs
            </label>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table text-white table-sm table-borderless">
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
            {openOrders.map((order,idx)=>{
              if (!hideOthersOpen || order.pairs.indexOf(selectedToken?.symbol)>=0){
                return( 
                  <tr key={idx}>
                    <td>{limitTx(order.transactionid)}</td>
                    <td>{adjustDate(order.timestamp)}</td>
                    <td>{order.pairs}</td>
                    <td>{order.side}</td>
                    <td>{order.price}</td>
                    <td>{order.amount}</td>
                    <td role="button" className="mytext-danger" onClick={()=>orderCancel(order.orderid)}>Cancel</td>
                  </tr>
                 )
              }
            })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
        <div className="orders-widget__subtoolbar p-1 row">
          <div className="col-4">
            <div className="form-check">
              <input className="form-check-input custom-checkbox" type="checkbox" defaultValue id="flexCheckDefault" 
              checked={hideOthersTrade} onClick={()=>setHideOthersTrade(!hideOthersTrade)}/>
              <label className="form-check-label" htmlFor={"flexCheckDefault"}>
                Hide Other Pairs
              </label>
            </div>
          </div>
          <div className="col-20 d-flex align-items-center justify-content-end">
            <div className="me-1">
            {/*
              <label >Pair: </label>
              <input type="text" className="bg-secondary text-white border-0" style={{width: '50px'}} placeholder="Coin" />
              <label >/</label>
              <div className="btn-group me-2">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  BNB
                </button>
                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">BNB</a></li>
                  <li><a className="dropdown-item" href="#">BUSD</a></li>
                  <li><a className="dropdown-item" href="#">BTCB</a></li>
                  <li><a className="dropdown-item" href="#">ETH</a></li>
                  <li><a className="dropdown-item" href="#">IDRTB</a></li>
                  <li><a className="dropdown-item" href="#">TAUDB</a></li>
                  <li><a className="dropdown-item" href="#">THKDB</a></li>
                  <li><a className="dropdown-item" href="#">TUSDB</a></li>
                  <li><a className="dropdown-item" href="#">USDSB</a></li>
                  <li><a className="dropdown-item" href="#">USDT</a></li>
                  <li><a className="dropdown-item" href="#">DAI</a></li>
                </ul>
              </div>*/
            }
            </div>
            <div className="me-2">
              <label >Type: </label>
              <div className="btn-group">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {(longShort==0 || longShort==1 )&& 
                    <span className="mytext-success">Buy </span> 
                  }
                  {(longShort==0 || longShort==2 )&& 
                    <span className="mytext-danger">Sell</span>
                  }

                </button>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" role="button" onClick={()=>setLongShort(0)}>
                      <span className="mytext-success">Buy </span>
                      <span className="mytext-danger">Sell</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" role="button" onClick={()=>setLongShort(1)}>
                      <span className="mytext-success">Buy </span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" role="button" onClick={()=>setLongShort(2)}>
                      <span className="mytext-danger">Sell</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary me-1" onClick={()=>timespanTrade(24*3600)}>1 Day</button>
              <button type="button" className="btn btn-secondary me-1" onClick={()=>timespanTrade(24*3600*7)}>1 Week</button>
              <button type="button" className="btn btn-secondary me-1"  onClick={()=>timespanTrade(24*3600*30)}>1 Month</button>
              <button type="button" className="btn btn-secondary me-1"  onClick={()=>timespanTrade(24*3600*93)}>3 Months</button>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table text-white table-sm table-borderless">
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
              {tradeHistories.map((order,idx)=>{
                  if (!hideOthersTrade || order.pairs.indexOf(selectedToken?.symbol)>=0){
                    if(longShort==0 ||
                      (longShort==1 && order.side=='buy') ||
                      (longShort==2 && order.side=='sell')
                      ){
                    return (
                      <tr key={idx}>
                        <td>{limitTx(order.transactionid)}</td>
                        <td>{adjustDate(order.timestamp)}</td>
                        <td>{order.pairs}</td>
                        <td>{order.side}</td>
                        <td>{order.price}</td>
                        <td>{order.amount}</td>
                        <td >{fixedLength(order.price*order.amount)}</td>
                      </tr>
                     )
                    }
                  }
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-balances" role="tabpanel" aria-labelledby="pills-balances-tab">
        <div className="orders-widget__subtoolbar p-1 d-flex justify-content-end align-items-center">
          <div className="text-1">
        Estimated Value: {fixedLength(totalBnbBalance)}BNB / ${fixedLength(totalBnbBalance*bnbPrice)}</div>
        </div>
        <div className="table-responsive">
          <table className="table text-white table-sm table-borderless">
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
              {balances.map((balance,idx)=>
                {
                  if(Number(balance.bnbvalue)>0){
                    return(
                      <tr key={idx}>
                        <td>{balance.asset}</td>
                        <td>{balance.total}</td>
                        <td>{balance.amount}</td>
                        <td>{balance.inamount}</td>
                        <td>{balance.bnbvalue}</td>
                      </tr>
                    )
                  }
                }
              )}

            </tbody>
          </table>
        </div>
      </div>
    </div>