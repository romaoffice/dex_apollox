// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const WETH = {
  [3]:"0xc778417e063141139fce010982780140aa0cd5ab",
  [137]:"0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
  [56]:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",


}
// ropsten : 0xBAeb2fc14977767D8C05CCc0256B604eC6331c3e
async function main() {
  const chainId=hre.network.config.chainId

  const Greeter = await hre.ethers.getContractFactory("TideDexLimitOrder");
  const greeter = await Greeter.deploy(WETH[chainId] );

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
