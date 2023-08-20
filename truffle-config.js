module.exports = {
  contracts_build_directory: './public/contracts',
  networks: {
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: '*', // Any network (default: none)
    },
  },
  mocha: {},
  compilers: {
    solc: {
      /* version : 0.8.20 producing error '"Migrations" hit an invalid opcode while deploying. Try:
       * Verifying that your constructor params satisfy all assert conditions.
       * Verifying your constructor code doesn't access an array out of bounds.
       * Adding reason strings to your assert statements.*/
      version: '0.8.0', // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
