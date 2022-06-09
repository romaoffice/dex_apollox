import { Modal } from "react-bootstrap";
import React ,{useState,useEffect,useCallback,useMemo} from "react";
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import {supportChain} from "./const"
import {ethers} from "ethers"  

const workChainId = 56
const updateNetwork = async(chainId)=>{
  if (window.ethereum.networkVersion !== chainId) {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: ethers.utils.hexlify(chainId) }]
      });
    } catch (err) {
        // This error code indicates that the chain has not been added to MetaMask
      if (err.code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            getBlockchainData(chainId)
            
          ]
        });
      }
    }
  }
}
const getChainIdFromName = (chianName)=>{
  let name = undefined
  supportChain.map((chainInfo)=>{
    if(chainInfo.chain==chianName) name = chainInfo.chainId
  })  
  return name;
}
const getBlockchainData = (chainId)=>{
  const nt = {}
  supportChain.map((chainInfo)=>{
    if(chainInfo.chainId==chainId){
      nt =  {
              chainName: chainInfo.chain,
              chainId: ethers.utils.hexlify(chainId) ,
              nativeCurrency: { name: chainInfo.native, decimals: chainInfo.decimals, symbol: chainInfo.native },
              rpcUrls: [chainInfo.rpcUrl]
            }
    }
  })
  return nt;
}

function Top() {
  const onConnect = ()=>{
    console.log('close')
  }
  const { chainId, account, deactivate,activate, active,library } = useWeb3React()
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);

  const handleShow = () => {
    if(active==false){
      setShow(true);
    }
  }

  const connectMetamask = async()=>{
    await updateNetwork(workChainId);
    const injectedConnector = new InjectedConnector({supportedChainIds: [1,3,4,42,56,137],})
    activate(injectedConnector)
    handleClose();

  }
  
  const RPC = {
    56: 'https://bsc.getblock.io/mainnet/?api_key=7b87bee9-86e3-49d9-bd31-aa4bd5efed68'
  }
  const connectWalletConnect = async()=>{
    handleClose();
    const WalletConnect = new WalletConnectConnector({
     rpc: RPC,
     qrcode: true,
    });
    await activate(WalletConnect);
    setTimeout(()=>{activate(WalletConnect)},500)

  }
  useEffect(()=>{
    console.log({chainId})
    if(chainId!=workChainId && active){
      console.log("Change chain id");
      updateNetwork(workChainId)
    }

  },[chainId])
  const connectString = useMemo(()=>{
    console.log({chainId,account,active})
    if(active){
      if(chainId!=workChainId){
        return "Wrong Network";
      }else{
        return account.substring(0,5)+"..."+account.substring(account.length-6,account.length)
      }
    }else{
      return "Connect Wallet";
    }
  },[chainId,account,active])
  return (
      <>
      <div className="topbar" >
      <p className="urlbar" ><strong>URL Verification: </strong>https://beta.tide.exchange</p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark subheader header-bg">
        <div className="container-fluid">
          <a className="navbar-brand text-warning logo-container" href="#">
            <img src="./assets/images/thumb_bluetidelogoa.png"  width={84} height={21}/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item m-1 tradebutton">
                <a className="nav-link toplink text-white" href="#">&nbsp;&nbsp;&nbsp;&nbsp;Trade&nbsp;&nbsp;&nbsp;&nbsp;</a>
              </li>
              <li className="nav-item m-1 create-wallet">
                <a className="nav-link toplink"  href="https://tide.exchange/">&nbsp;&nbsp;&nbsp;&nbsp;Swap&nbsp;&nbsp;&nbsp;&nbsp;</a>
              </li>
              
              {account && 
                <li className="nav-item m-1 dropdown connect-wallet">
                <a className="nav-link toplink dropdown-toggle" role="button" id="wallet" data-bs-toggle="dropdown" aria-expanded="false">&nbsp;&nbsp;&nbsp;&nbsp;{connectString}</a>
                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="wallet">
                  <li><a className="dropdown-item " role="button" onClick={deactivate}>Disconnect Wallet</a></li>
                </ul>
                </li>
              }
              {!account && 
                <li className="nav-item m-1 account-item">
                  <a className="nav-link toplink" role="button" onClick={handleShow}>&nbsp;&nbsp;&nbsp;{connectString}</a>
                </li>
              }
              <li className="nav-item m-1 dropdown dropdown-item-type">
                <a className="nav-link dropdown-toggle" href="#" 
                  id="network" role="button" data-bs-toggle="dropdown" aria-expanded="false">&nbsp;&nbsp;&nbsp;&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" style={{
                    "transition":"color 0.3s ease 0s",
                    "fill":"rgb(240, 185, 11)",
                    "width":"17px"
                  }}><path d="M20.245 0L9.634 6.125l3.901 2.262 6.71-3.862 6.71 3.862 3.902-2.262L20.245 0zM26.956 11.586l3.9 2.263v4.526l-6.71 3.862v7.724l-3.9 2.263-3.902-2.263v-7.724l-6.71-3.862v-4.526l3.901-2.263 6.71 3.863 6.71-3.863z"></path><path d="M30.857 21.573V26.1l-3.901 2.262v-4.525l3.9-2.263z"></path><path d="M26.916 31.56l6.71-3.862v-7.724l3.902-2.263v12.25l-10.611 6.125V31.56zM33.627 12.25l-3.902-2.263 3.902-2.263 3.9 2.263v4.525l-3.9 2.263V12.25zM16.344 37.724V33.2l3.901 2.263 3.902-2.263v4.525l-3.902 2.263-3.9-2.263zM13.535 28.361L9.634 26.1v-4.526l3.901 2.263v4.525zM20.245 12.25l-3.9-2.263 3.9-2.263 3.902 2.263-3.902 2.263zM10.765 9.987l-3.9 2.263v4.525l-3.902-2.263V9.987l3.901-2.263 3.901 2.263z"></path><path d="M2.963 17.711l3.901 2.263v7.724l6.71 3.862v4.526L2.963 29.96V17.71z"></path></svg>
                  <span>BNB Chain</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="network">
                  <li><a className="dropdown-item" href="#">BNB Chain</a></li>
                  <li><a className="dropdown-item text-muted" href="#">Polygon</a></li>
                  <li><a className="dropdown-item text-muted" href="#">Ethereum</a></li>
                  <li><a className="dropdown-item text-muted" href="#">Fantom</a></li>
                  <li><a className="dropdown-item text-muted" href="#">Terra</a></li>
                  <li><a className="dropdown-item text-muted" href="#">Arbitrum</a></li>
                </ul>
              </li>
              

            </ul>
          </div>
        </div>
        {/* Create Wallet Modal */}
        <div className="modal fade" id="createWalletModal" tabIndex={-1} aria-labelledby="createWalletModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header">
                <h6 className="modal-title text-center flex-grow-1" id="createWalletModalLabel">Create Wallet</h6>
                <i className="bi bi-x-square-fill text-light" aria-label="Close" data-bs-dismiss="modal" />
              </div>
              <div className="modal-body">
                <div className="d-flex align-items-center justify-content-between m-3 p-3 bg-secondary">
                  <div>
                    <div>Create a Metamask Wallet</div>
                    <div className="fs-6 text-muted">Create your Crypto Wallet with Metamask which equips you with a key vault, secure login, token wallet, and token exchange.</div>
                  </div>
                  <i className="bi bi-boxes text-warning fs-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Unlock Wallet Modal */}
        <Modal show={show} onHide={handleClose} 
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton 
          style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          }}>
            <Modal.Title>
            <h6 className="text-center flex-grow-1 text-white" >Connect Wallet</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex align-items-center justify-content-between m-3 p-3 bg-secondary" data-bs-dismiss="modal"  >
              <div role="button" onClick={connectMetamask}>
                <div>Metamask</div>
                <div className="fs-6 text-muted">
                  Available as a browser extension and as a mobile app, MetaMask equips you with a key vault, secure login, token wallet, and token exchange.
                </div>
              </div>
              <i className="bi bi-boxes text-warning fs-3" />
            </div>
            <div role="button" onClick={connectWalletConnect} className="d-flex align-items-center justify-content-between m-3 p-3 bg-secondary">
                <div>WalletConnect</div>
                <i className="bi bi-water text-primary fs-3"></i>
            </div>

            <div className="text-warning fs-6 p-3 text-end">
              Don't have a wallet? Click here.
            </div>
          </Modal.Body>
        </Modal>
      </nav>
    </>  
  );
}

export default Top;
