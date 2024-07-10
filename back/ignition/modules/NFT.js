const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ALyraNFTModule", (m) => {
  const contractNFT = m.contract("AlyraNFT", ["ipfs:/CID/"]);
  return { contractNFT };
});