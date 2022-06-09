import useSharedState from '../hook/useSharedState'
import React ,{useState,useEffect,useCallback,useMemo} from "react";
import io from 'socket.io-client';

function Tokens() {

  const {showtr,tokenCategory,setTokenCategory,selectedToken,setSelectedToken,bnbPrice,setBnbPrice,ask,setAsk,long,setLong,setBid,tokensList,setTokensList}=useSharedState();//useState(undefined);
  const favpos = "favbsc";
  const [fav,setFav]=useState(localStorage.getItem(favpos)?JSON.parse(localStorage.getItem(favpos)):{})
  const [sortMode, setSortMode] = useState('CHANGE');
  const options = ['CHANGE', 'VOLUME'];
  const [order,setOrder]=useState(0)
  const [searchToken,setSearchToken]=useState("");
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
      const init=async()=>{
        const prefix = window.location.protocol+"//"+window.location.hostname;
        const url = prefix+"/api/getdata?op=pairs24h";
        const response = await fetch(url);
        const pairs = await response.json();
        setTokensList(pairs);
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let symbolparam = params.get('symbol');
        symbolparam = (symbolparam?symbolparam:"BNBUSDT").toUpperCase();
        console.log({symbolparam})
        for(let i=0;i<pairs.length;i++){
          if(pairs[i].symbol=="USDT"){
            setBnbPrice(Number(pairs[i].priceUSD));
          }
          if(pairs[i].info.base+pairs[i].info.quote==symbolparam){
            if(!selectedToken){
                setSelectedToken(pairs[i]);
            }          
          }
       }

        const socket = io(prefix);
        socket.emit("join","pairs24h");
          // listen for new messages
        socket.on("data", function(data) {
            setTokensList(data);
            if(selectedToken){
              for(let i=0;i<data.length;i++){
                if(data[i].symbol==selectedToken.symbol){
                  setAsk((ask)=>{
                    setLong(ask<=Number(data[i].priceBNB));
                    return Number(data[i].priceBNB)
                  });
                  setBid(Number(data[i].priceBNB));

                }
              }
            }
          });

        const socketbnb = io(prefix);
        socketbnb.emit("join","USDT");
          // listen for new messages
        socketbnb.on("orderbook", function(data) {
            setBnbPrice(Number(data.asks[0][0]));
          });
      }
      init();
  }, []) 

  useEffect(() => {
      const setSortData =()=>{
          if(tokensList?.length>0){
              let newData = tokensList.filter((token)=>{
                if(searchToken=="" || 
                    token.info.base.search(searchToken.toUpperCase())>=0 || 
                    token.info.quote.search(searchToken.toUpperCase())>=0){
                  if(tokenCategory=="BNB") return true;
                  if(tokenCategory=="FAV") {
                    return fav[token.address];
                  }
                }
  
              });
              newData.sort((a, b) => {
                  if(fav[a.address]) return -1;
                  if(fav[b.address]) return 1;
                  if(fav[a.address] && fav[b.address]) return 0;
                  
                  if(sortMode =='CHANGE') return Math.sign((b.priceBNBChange-a.priceBNBChange)*(1-2*order))
                  return Math.sign((b.volumeUSDChange-a.volumeUSDChange)*(1-2*order))
              });
              setSortedData([...newData]);
          }
      }
      setSortData();
    }, [tokensList,sortMode,fav,tokenCategory,searchToken])


    const setToken = (token)=>{
        setSelectedToken(token);
        setLong(true);
        setAsk(Number(token.priceBNB));
    }

    const changeFav = (token)=>{
        if(fav[token.address]){
            removeFav(token);
        }else{
            addFav(token);
        }
    }
    
    const addFav=(token)=>{
        let newFav=fav; 
        newFav[token.address]=true;
        setFav({...newFav})
        localStorage.setItem(favpos,JSON.stringify(newFav));
    }
    const removeFav=(token)=>{
        let newFav=fav;
        delete newFav[token.address];
        setFav({...newFav})
        localStorage.setItem(favpos,JSON.stringify(newFav));
    }
  return (
          <div className="tokenpanel">
              <div className=" pl-1 styled__TradePairHD-sc-11sk94d-1 bMiyLW">
                <div className="faFoLw">
                  <div className="kgOqcU">
                    <i role="button" className={"bi text-warning "+ (tokenCategory=="FAV"?"bi-star-fill":"bi-star")} onClick={()=>setTokenCategory("FAV")}></i>
                  </div>
                  <div role="button" className={tokenCategory=="BNB"?"bbIuIB":"kgOqcU"} onClick={()=>setTokenCategory("BNB")}>BNB
                  </div>
                  <div className="kgOqcU">BTC</div>
                  <div className="kgOqcU">ETH</div>
                  <div className="kgOqcU">ZK</div>
                  <div className="kgOqcU">ALTS</div>
                  <div className="kgOqcU">FIATⓈ</div>
                </div>
              </div>

              <div className="row m-0 ">
                <div className="col-24 p-0 m-0">
                    <div className="row m-0 p-1">
                      <div className="col-10 FlexBox-sc-14wq17r-0 gPrSrc" >
                            <div width="100px" className="SearchInput__SearchBox-sc-1od94z4-0 fcCCDl">
                                <i className="bi bi-search" size="14" color="#48515D"></i>
                                <input type="search" placeholder="Search …" value={searchToken} onChange={(e)=>setSearchToken(e.currentTarget.value)}/>
                            </div>
                      </div>
                      <div className="col-7 form-check form-check-inline m-0 pe-2">
                        <input className="form-check-input" value="CHANGE" checked={sortMode === "CHANGE"} onChange={(e)=>{setSortMode(e.currentTarget.value)}} type="radio" name="inlineRadioOptions" id="inlineRadio1" 
                        style={{background:"rgb(136, 136, 136)"}}/>
                        <label className="form-check-label text-muted" htmlFor={"inlineRadio1"}>Change</label>
                      </div>
                      <div className="col-7 form-check form-check-inline m-0">
                        <input className="form-check-input" value="VOLUME" checked={sortMode === "VOLUME"} onChange={(e)=>{setSortMode(e.currentTarget.value)}} type="radio" name="inlineRadioOptions" id="inlineRadio2" 
                        style={{background:"rgb(136, 136, 136)"}}/>
                        <label className="form-check-label text-muted" htmlFor={"inlineRadio2"}>Volume</label>
                      </div>
                    </div>
                </div> 
              </div>
              <div className="tab-pane fade show active" id="pills-bnb" role="tabpanel" aria-labelledby="pills-bnb-tab">
                <div className="table-responsive tokenlist p-1" style={{"overflowY":"scroll"}}>
                  <table className="table text-white table-sm table-borderless">
                    <thead className="text-muted" >
                      <tr>
                        <th scope="col">Pair</th>
                        <th scope="col">Price</th>
                        <th scope="col" className= "text-end">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                    {sortedData.length==0 &&
                      <tr>
                        <td colSpan="3">No Tokens...</td>
                      </tr>
                    }
                    {sortedData.map((token,idx)=>(
                        <tr role="button" key={idx} onClick={(e)=>{setToken(token)}} >
                          <td className="text-nowrap">
                            <i className={"bi  me-1 text-warning "+(fav[token.address]?"bi-star-fill":"bi-star")} onClick={(e)=>{e.stopPropagation();changeFav(token)}}/> 
                            {token.info.base}/{token.info.quote}
                           </td>
                          <td>{token.priceBNB}</td>
                          {sortMode =='CHANGE' && 
                            <td className={"text-end pe-2 "+(token.priceBNBChange>0?" mytext-success":"mytext-danger")}>{token.priceBNBChange>0?"+":""}{token.priceBNBChange.toFixed(2)}%</td>
                          }
                          {sortMode =='VOLUME' && 
                            <td className={"text-end pe-2 "+(token.volumeUSDChange>0?" mytext-success":"mytext-danger")}>{token.volumeUSDChange>0?"+":""}{token.volumeUSDChange.toFixed(2)}%</td>
                          }
                        </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
  );
}

export default Tokens;
