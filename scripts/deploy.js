// scripts/deploy.js
async function main() {
    const Box = await ethers.getContractFactory("Box_20220726");
    console.log("Deploying Box_20220726...");
    const box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
    //console.log(upgrades);
    console.log("Box_20220726 deployed to:", box.address);
  }
  
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});