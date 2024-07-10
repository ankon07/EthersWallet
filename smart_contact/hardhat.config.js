
require('dotenv').config();
require('@nomiclabs/hardhat-waffle');
const {API_URL,PRIVATE_KEY} =process.env;
module.exports = {
  solidity: '0.8.24',
  defaultNetwork:"sepolia",
  networks: {
    hardhat:{},
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/RqzNsM3Vpf-a3KgwTCE0osmH0z-2ug9G',
      accounts: ["a2f688a7e095a180297475e832e290e0b56fb716a8e9085686d78129c662391e"],
    },
  },
};