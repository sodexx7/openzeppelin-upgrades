// scripts/transfer_ownership.js
async function main() {
    const my_gnosis_safe = '0x482677C825Fa485D48227498600490257bd4403F';
   
    console.log("Transferring ownership of ProxyAdmin...");
    console.log(upgrades);
    // The owner of the ProxyAdmin can upgrade our contracts
    await upgrades.admin.transferProxyAdminOwnership(my_gnosis_safe);
    console.log("Transferred ownership of ProxyAdmin to:", my_gnosis_safe);
  }
   
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });