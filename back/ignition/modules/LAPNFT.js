const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LAPNFTModule", (m) => {
  const contractNFT = m.contract("LAPNFT");
  return { contractNFT };
});