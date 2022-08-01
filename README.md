参考如下，代理合约机制的实现
https://forum.openzeppelin.com/t/openzeppelin-upgrades-step-by-step-tutorial-for-hardhat/3580

#  pre steps:
`npm init -y`
`npm install --save-dev hardhat`

Install the Hardhat Upgrades and ethers plugin.
npm install --save-dev @openzeppelin/hardhat-upgrades
npm install --save-dev @nomiclabs/hardhat-ethers 

# keep track of our proxy address, we will need it later.
`npx hardhat run --network Goerli scripts/deploy.js`

# Test the contract locally
`npm install --save-dev chai1

```
$ npx hardhat console --network Goerli
> const Box = await ethers.getContractFactory("Box_20220726")
undefined
> const box = await Box.attach("0x4901E0011468a25Daa117E96d5118619A6fE95b4")
undefined
> (await box.retrieve()).toString()
'42'
```

#  Transfer control of upgrades to a Gnosis Safe

使用个人地址用Gnosis Safe创建一个签名钱包。并将该钱包地址作为新的代理地址。
0x68975f4CE69f14Ce6c2bE88FD1B082f8149536ca

`npx hardhat run --network Goerli scripts/transfer_ownership.js`
```
// scripts/transfer_ownership.js
async function main() {
  const gnosisSafe = '0x68975f4CE69f14Ce6c2bE88FD1B082f8149536ca';
 
  console.log("Transferring ownership of ProxyAdmin...");
  // The owner of the ProxyAdmin can upgrade our contracts
  await upgrades.admin.transferProxyAdminOwnership(gnosisSafe);
  console.log("Transferred ownership of ProxyAdmin to:", gnosisSafe);
}
 
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
```

```
(node:6122) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Transferring ownership of ProxyAdmin...
(node:6124) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
✔ 0x68c57f2e095aEF97686CD6dCc8EA973184AFb939 (transparent) proxy ownership transfered through admin proxy
✔ 0x2Fa0ee7f2A5D8325EfaaC2b097F505e48A78f78d (transparent) proxy ownership transfered through admin proxy
✔ 0xe6b3a87BC4B09739770e62571ee0bc492Dd91419 (transparent) proxy ownership transfered through admin proxy
✔ 0x6B7E475941b7E09b60175123cD9e559b14b9031a (transparent) proxy ownership transfered through admin proxy
✔ 0x4901E0011468a25Daa117E96d5118619A6fE95b4 (transparent) proxy ownership transfered through admin proxy
Transferred ownership of ProxyAdmin to: 0x68975f4CE69f14Ce6c2bE88FD1B082f8149536ca
```
注意:如果已经转移过一次权限，并且为非Gnosis Safe钱包。在转移会出错。todo 原因


# Create a new version of our implementation

# Deploy the new implementation


`npx hardhat run --network Goerli scripts/prepare_upgrade.js`

```
// scripts/prepare_upgrade.js
async function main() {
  const proxyAddress = '0x4901E0011468a25Daa117E96d5118619A6fE95b4';
 
  const BoxV2 = await ethers.getContractFactory("BoxV2");
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
```

```
Preparing upgrade...
BoxV2 at: 0xf58c622406D94B361a76C3052C4af3936b135b1f
```

注意，这里的0x4901E0011468a25Daa117E96d5118619A6fE95b4。为第一此部署成功之后的proxy地址。


# Upgrade the contract

# 问题
1.Rinkeby 上创建.gnosis-safe.io多签钱包不成功。
2.OpenZeppelin 只在Ethereum，Rinkeby 有部署，Goerli上无部署
3.ipfs上部署OpenZeppelin(upgrades-safe-app)
https://github.com/OpenZeppelin/upgrades-safe-app
  方式1：ipfs
  方式2:其他gateway
    https://cloudflare-ipfs.com/ipfs/QmQovvfYYMUXjZfNbysQDUEXR8nr55iJRwcYgJQGJR7KEA
    https://gateway.pinata.cloud/ipfs

涉及到的其他报错信息
https://stackoverflow.com/questions/58384179/syntaxerror-cannot-use-import-statement-outside-a-module



还是应该一次为参考
https://github.com/OpenZeppelin/openzeppelin-upgrades


control address
0xA410899510ADf6EF5A6B3848eA0bc6e0b7E900a9