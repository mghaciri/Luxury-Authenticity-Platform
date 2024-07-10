const hre = require("hardhat");

async function main() {
/*
  const AlyraNFT = await hre.ethers.deployContract("AlyraNFT");
  await AlyraNFT.deploy("ipfs:CID/");
  await AlyraNFT.deployed();

  console.log(
    `AlyraNFT deployed to ${AlyraNFT.target}`
  );
*/
  const LAPNFT = await hre.ethers.deployContract("LAPNFT");
  await LAPNFT.deploy();
  await LAPNFT.deployed();

  console.log(
    `LAPNFT is deployed to ${LAPNFT.target}`
  );

}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});