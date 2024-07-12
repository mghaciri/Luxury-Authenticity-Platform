const hre = require("hardhat");

async function main() {

  const LapNFT = await hre.ethers.deployContract("LAPNFT");
  await LapNFT.waitForDeployment();
  console.log(
    `LAPNFT deployed to ${LapNFT.target}`
  );

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});