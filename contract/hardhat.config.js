require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/wOPXjUkG_5u4VOU-JN85HD3KvvvtEEvo',
      accounts: ['1b2a212ac1448652ec151f3dc7ea8820b43bc73346bad2a6088196e67bc7d1e9'],
    },
  },
};