const supportChain= 
[
	{chainId:1,name:"Ethereum",chain:"ETH",code:"",type:"EVM",native:"ETH",rpcUrl:"",decimals:18,explorer:"",img:"/img/ethereum.svg"},
	{chainId:56,name:"BSC",chain:"BSC",code:"",type:"EVM",native:"BNB",rpcUrl:"https://bsc-dataseed.binance.org/",decimals:8,explorer:"https://bscscan.com",img:"/img/binance.svg"},
	{chainId:137,name:"Polygon",chain:"POLYGON",code:"",type:"EVM",native:"MATIC",rpcUrl:"https://polygon-rpc.com",decimals:18,explorer:"https://polygonscan.com/",img:"/img/polygon.svg"},
	{chainId:42161,name:"Arbitrum",chain:"ARBITRUM",code:"",type:"EVM",native:"AETH",rpcUrl:"https://arb1.arbitrum.io/rpc",decimals:18,explorer:"https://arbiscan.io",img:"/img/arbitrum.svg"},
	{chainId:43114,name:"Avax",chain:"AVAX_CCHAIN",code:"",type:"EVM",native:"AVAX",rpcUrl:"https://api.avax.network/ext/bc/C/rpc",decimals:18,explorer:"https://snowtrace.io/",img:"/img/avalanche.svg"},
];
const nullAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
const getChainIdFromName = (chianName)=>{
  let name = undefined
  supportChain.map((chainInfo)=>{
    if(chainInfo.chain==chianName) name = chainInfo.chainId
  })  
  return name;
}

module.exports = {
  supportChain:supportChain,
  getChainIdFromName:getChainIdFromName,
  nullAddress:nullAddress
}
