
# 参考
https://github.com/OpenZeppelin/openzeppelin-upgrades/blob/master/packages/plugin-hardhat/README.md
README.md 涉及到 转移代理权限(gnosisSafe),有报错。不中途迁移权限，直接更新。参考如下，对照.openzeppelin文件。


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

# Deploy the new implementation


`npx hardhat run --network Goerli scripts/upgrade_box.js`

```

