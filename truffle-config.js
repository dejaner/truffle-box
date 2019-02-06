require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = process.env.MNEMONIC
const INFURA_KEY = process.env.INFURA_KEY

module.exports = {
  networks: {
    ropsten: {
      network_id: 3,
      provider: () =>
        new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/" + INFURA_KEY, 0, 10),
      gas: 6000000,
      gasPrice: 5000000000
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 6000000,
      gasPrice: 5000000000
    }
  },

  compilers: {
    solc: {
      version: "0.5.3",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};