require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: process.env.ALCHEMNY_URL,
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};