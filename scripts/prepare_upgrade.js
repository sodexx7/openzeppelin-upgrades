// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = '0x4901E0011468a25Daa117E96d5118619A6fE95b4';
    const BoxV2 = await ethers.getContractFactory("Box_20220726_V2");
    console.log("Preparing upgrade...");
    const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
    console.log("BoxV2 at:", boxV2Address);
  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });