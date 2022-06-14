const ChainId= {
  BSC : 56,
}

const web3url = {
	[ChainId.BSC]:"https://bsc.getblock.io/mainnet/?api_key=2beae857-cbee-479d-852e-9a4d000e65a0",
}

const contract_limit_order = {
	[ChainId.BSC]:"0x3b6d2e096aa4770cdbc6e9ab1b31431a2ba0871c",
}

const {abi}  = require('./orderabi');

const LIMIT_ABI = {
	[ChainId.BSC]:abi,
}

//const address_executor = "0x5D62a1F0E2427c8CD6FaD3f5286aeC66468b542c"
const privateKey = process.env.PRIVATE;
//"da2f7d7b659ceecd49bf8450bbee4a797d9ac5cff6505e82be80533fd2b95464";

module.exports = {
  ChainId,
  web3url,
  contract_limit_order,
  LIMIT_ABI,
  privateKey,  
}