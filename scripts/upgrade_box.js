const { ethers, upgrades } = require("hardhat");

async function main() {
  const BoxV2 = await ethers.getContractFactory("Box_20220726_V2");
  const box = await upgrades.upgradeProxy("0x6CB88BC1B30FcEad717A69312e4672984c493dC3", BoxV2);
  console.log("Box upgraded");
}

main();