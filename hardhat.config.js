require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      // Utilise le réseau Hardhat local pour les tests
    },
    // Vous pouvez ajouter d'autres réseaux ici, par exemple Sepolia:
    // sepolia: {
    //   url: process.env.SEPOLIA_RPC_URL || "",
    //   accounts:
    //     process.env.SEPOLIA_PRIVATE_KEY !== undefined ? [process.env.SEPOLIA_PRIVATE_KEY] : [],
    // },
  },
  // solidity: {
  //   version: "0.8.20",
  //   settings: {
  //     optimizer: {
  //       enabled: true,
  //       runs: 200,
  //     },
  //   },
  // },
};
