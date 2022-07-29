require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { INFURA_API_URL, MNEMONIC } = process.env;

module.exports = {
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 8545,
    //   network_id: "*"
    // },
    // ropsten: {
    //   provider: () => new HDWalletProvider(MNEMONIC, INFURA_API_URL),
    //   network_id: 3,
    //   gas: 5500000,
    // },
    test: {
      provider: () => new HDWalletProvider(MNEMONIC, 'https://eth-goerli.g.alchemy.com/v2/OvCjMEF-_qv95PPGX2i14JE1A-3nSIl8'),
      network_id: 5,
      gas: 5500000,
    }
  }
};