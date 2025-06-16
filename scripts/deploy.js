const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();

  await counter.waitForDeployment();

   const contractAddress = counter.target;
   console.log(`Counter deployed to: ${contractAddress}`);

  const exportData = {
    contractAddress: contractAddress
  };

  const exportPath = path.join(process.cwd(), "deploy-export.json");
  fs.writeFileSync(exportPath, JSON.stringify(exportData, null, 2));

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
