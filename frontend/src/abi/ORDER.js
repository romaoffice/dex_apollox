export const ORDER_ABI=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "weth",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address payable",
				"name": "traderAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "assetIn",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "assetOut",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "refundETH",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "refundToken",
				"type": "uint256"
			}
		],
		"name": "logOrderCancelled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum TideDexLimitOrder.OrderState",
				"name": "orderState",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "enum TideDexLimitOrder.OrderType",
				"name": "orderType",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "address payable",
				"name": "traderAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "assetIn",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "assetOut",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "assetInOffered",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "assetOutExpected",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "executorFee",
				"type": "uint256"
			}
		],
		"name": "logOrderCreated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "EXECUTOR_FEE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "NATIVE",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "STAKE_FEE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "WETH",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "orderId",
				"type": "uint256"
			}
		],
		"name": "cancelOrder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum TideDexLimitOrder.OrderType",
				"name": "orderType",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "assetIn",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "assetOut",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "assetInOffered",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "assetOutExpected",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "uint256",
				"name": "executorFee",
				"type": "uint256"
			}
		],
		"name": "createOrder",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "depositETH",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "orderId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "sellToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "buyToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "swapTarget",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "swapCallData",
				"type": "bytes"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "executeOrder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "executor",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getOrderIdForAddress",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getOrdersForAddressLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getOrdersLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum TideDexLimitOrder.OrderType",
				"name": "orderType",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "sellToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "buyToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "swapTarget",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "swapCallData",
				"type": "bytes"
			},
			{
				"internalType": "uint256",
				"name": "assetInOffered",
				"type": "uint256"
			}
		],
		"name": "marketSwap",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "orderBook",
		"outputs": [
			{
				"internalType": "enum TideDexLimitOrder.OrderState",
				"name": "orderState",
				"type": "uint8"
			},
			{
				"internalType": "enum TideDexLimitOrder.OrderType",
				"name": "orderType",
				"type": "uint8"
			},
			{
				"internalType": "address payable",
				"name": "traderAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "assetIn",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "assetOut",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "assetInOffered",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "assetOutExpected",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "executorFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stake",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ordersI",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "orders",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ordersNum",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newExecutor",
				"type": "address"
			}
		],
		"name": "setNewExecutor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_EXECUTOR_FEE",
				"type": "uint256"
			}
		],
		"name": "setNewExecutorFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_stakeAddress",
				"type": "address"
			}
		],
		"name": "setNewStakeAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_STAKE_FEE",
				"type": "uint256"
			}
		],
		"name": "setNewStakeFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "weth",
				"type": "address"
			}
		],
		"name": "setNewWETH",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakeAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenContract",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdrawToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]