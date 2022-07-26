// scripts/transfer_ownership.js
async function main() {
    const my_gnosis_safe = '0x68975f4CE69f14Ce6c2bE88FD1B082f8149536ca';
   
    console.log("Transferring ownership of ProxyAdmin...");
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