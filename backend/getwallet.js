const ethers = require('ethers')

generate = async() => {
	console.log("Receive generate")
	const wallet = ethers.Wallet.createRandom();
	console.log(wallet,wallet.privateKey)
}

generate();

