import { Modal } from "react-bootstrap";
import React ,{useState,useEffect,useCallback,useMemo} from "react";
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import {supportChain} from "../const"
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


function ConnectWallet() {
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
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle dropdown-toggle-bnb mr-3"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                className="img-bsc mr-1"
                src="./assets/images/bsc-logo.svg"
              />
            </a>
            <div
              className="dropdown-menu dropdown-menu-bnb-chain"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="#">
                <img
                  className="img-bsc mr-1"
                  src="./assets/images/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.webp"
                />
                Ethereum
              </a>
              <a className="dropdown-item" href="#">
                {" "}
                <img
                  className="img-bsc mr-1"
                  src="./assets/images/bsc-logo.svg"
                />
                BNB Chain
              </a>
            </div>
          </div>

      	{!account && (

          <a className="nav-link btn btn-light btn-connect-wallet" onClick={connectMetamask}>
            Connect Wallet
          </a>

	  		)}
      	{account && (
	        <a className="nav-link btn btn-light btn-connect-wallet" onClick={deactivate}>&nbsp;&nbsp;&nbsp;&nbsp;{connectString}</a>
  		)}
          </>

	);
}

export default ConnectWallet;
