export const WETH = {address:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",decimals:18}
export const marketOrder ="0xad01a48076fb3d1a4a3a09a204e28ba061df716d";//"0xb21bba8f1e87745b131a50a0e71e717255fb87b8";//"0x2143831316a0d190A604E4765247fd53b1e90f57"
export const limitOrder ="0xf68f73d2d3ca114053fd9859a5c2d367f878e190"
export const STAKEFEE = 0.002
export const EXECUTOR_FEE = 0.0015
export const SLIPPAGE = 0.3

export const supportChain = 
[
	{chainId:1,chain:"ETH",code:"",type:"EVM",native:"ETH",rpcUrl:"",decimals:18,explorer:""},
	{chainId:56,chain:"BSC",code:"",type:"EVM",native:"BNB",rpcUrl:"https://bsc-dataseed.binance.org/",decimals:8,explorer:"https://bscscan.com"},
	{chainId:137,chain:"POLYGON",code:"",type:"EVM",native:"MATIC",rpcUrl:"https://polygon-rpc.com",decimals:18,explorer:"https://polygonscan.com/"},
	{chainId:42161,chain:"ARBITRUM",code:"",type:"EVM",native:"AETH",rpcUrl:"https://arb1.arbitrum.io/rpc",decimals:18,explorer:"https://arbiscan.io"},
	{chainId:43114,chain:"AVAX_CCHAIN",code:"",type:"EVM",native:"AVAX",rpcUrl:"https://api.avax.network/ext/bc/C/rpc",decimals:18,explorer:"https://snowtrace.io/"},

];



