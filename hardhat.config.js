/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;

let networks = {};
networks = {
  Goerli: {
    url: `https://eth-goerli.g.alchemy.com/v2/`+ALCHEMY_API_KEY,
    accounts: [`0x${WALLET_PRIVATE_KEY}`]
  }
}

module.exports = {
  solidity: "0.8.9",
  networks: networks
};
