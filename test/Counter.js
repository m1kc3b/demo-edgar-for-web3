const { expect } = require("chai");
const { ethers } = require("hardhat");
const fs = require("fs");
const path = require("path");

describe("Counter", function () {
  let Counter;
  let counter;
  const testResults = [];

  beforeEach(async function () {
    Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.waitForDeployment();
  });

  async function runTest(testName, testFn) {
    const testResult = {
      testName,
      timestamp: new Date().toISOString()
    };

    try {
      await testFn();
      testResult.status = "passed";
    } catch (error) {
      testResult.status = "failed";
      testResult.error = error.message;
    }

    testResults.push(testResult);
  }

  it("Should return the initial count of 0", async function () {
    await runTest("Should return the initial count of 0", async () => {
      expect(await counter.getCount()).to.equal(0);
    });
  });

  it("Should increment the count", async function () {
    await runTest("Should increment the count", async () => {
      await counter.increment();
      expect(await counter.getCount()).to.equal(1);
    });
  });

  it("Should decrement the count", async function () {
    await runTest("Should decrement the count", async () => {
      await counter.increment();
      await counter.decrement();
      expect(await counter.getCount()).to.equal(0);
    });
  });

  after(function() {
    const report = {
      contractName: "Counter",
      network: hre.network.name,
      totalTests: testResults.length,
      passedTests: testResults.filter(r => r.status === "passed").length,
      failedTests: testResults.filter(r => r.status === "failed").length,
      testDetails: testResults,
      timestamp: new Date().toISOString()
    };

    const reportPath = path.join(__dirname, "..", "test-report.json");
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Test report saved to: ${reportPath}`);
  });
});
