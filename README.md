# 🔗 Immutable Audit Trail for Smart Contracts via CI/CD

## Introduction
The `demo-edgar-for-web3` repository is a demonstration project designed to showcase the integration of **Edgar**, an **immutable audit trail solution**, within a CI/CD pipeline for developing Solidity-based smart contracts. It highlights how to ensure the **provenance and integrity** of your digital artifacts—from source to deployment—using GitHub Actions.

## Project Overview
In the Web3 ecosystem, **transparency** and **verifiability** of smart contracts are critical. This project addresses the challenge of traceability by implementing a **tamper-proof chain of trust** for all key artifacts generated during the development lifecycle.

### Stack Used:

  - **Hardhat**: A development environment for Ethereum used to compile, test, and deploy Solidity contracts. The example contract `Counter.sol` is used for illustration.

  - **Edgar CLI**: A command-line tool that integrates into your CI/CD pipeline to **mark** and **publish** artifacts into an **immutable ledger**.

  - **Edgar SaaS Backend**: A backend service that receives data from Edgar CLI, **cryptographically signs** it, and **anchors** it publicly (potentially via **IPFS** and a **blockchain**).

  - **GitHub Actions**: The CI/CD workflows that automate the entire process.

### How it works?
1 - Automated CI/CD Workflows:

  - **Main Branch**: On every push or merge to the `main` branch, the workflow compiles the contract, runs tests, simulates deployment, and **marks all key artifacts** (SourceCode, Bytecode, TestResults, Deployment, SBOM) in the Edgar main pipeline. It then publishes this audit trail to the Edgar backend for **public notarization**.

  - **Pull Requests (PR)**: For each PR targeting the `main` branch, a **unique child ledger** is created. This ledger is linked to the latest block of the main pipeline, ensuring that all PR activities (code changes, compilation, testing) are **independently traceable** yet **anchored** to the parent history.

2 - Immutable Audit Trail with Edgar:

  - Every significant CI/CD step is recorded as a **block** in an **Edgar ledger**.

  - These blocks contain **cryptographic hashes** of the corresponding artifact (e.g., compiled Solidity code, test reports).

  - Each block is **cryptographically signed** by the CLI.

  - The Edgar backend consolidates and publishes the ledgers to **decentralized storage systems** like IPFS, optionally anchoring them on-chain, ensuring **irrefutable proof of existence and integrity**.

### Benefits
  - **Full Auditability**: Every version of your contract, test result, and deployment is **provably linked** to its development history.

  - **Compliance-Ready**: Helps meet regulatory and audit requirements for critical systems.

  - **Security & Trust**: Increases confidence in deployed software by providing **verifiable proof** of its origin and evolution.

  - **Transparency**: Makes the development and deployment process **fully transparent** for stakeholders.


## Repository Structure
  - `contracts/`: Contains Solidity contracts (e.g., `Counter.sol`).

  - `scripts/`: Hardhat scripts for deployment and other operations.

  - `test/`: Unit tests for the contracts.

  - `.github/workflows/`: GitHub Actions workflow definitions (`main-branch-edgar.yml` and `feature-pr-edgar.yml`).

This project provides a **robust blueprint** for integrating advanced **cryptographic traceability** into your **Web3 development pipelines**, essential for building **trustworthy and auditable decentralized applications**.

## Demonstration Scenario
This repository demonstrates a typical 3-step development scenario, with **end-to-end traceability** ensured by Edgar:

1) **InitiaProject Initialization & First Commit** :

  - A basic Web3 project is initialized.

  - The very first commit is made, marking the initial artifacts in Edgar’s `main-pipeline`.

  - Related Pinata publication: [demo-edgar-for-web3-main-pipeline (First Commit)](https://copper-official-frog-380.mypinata.cloud/ipfs/QmdXM8eGxtMbgt9uKtfere2fHtCEm87emxXUHaoLuW8G32)

2) **Development via Pull Request (PR)** :

  - A PR is opened (simulating a code change, e.g., adding a `greetings` function).

  - A dedicated `child-ledger` is created for this PR, anchored to the `last-block-hash` of the main pipeline. All actions within the PR (compilation, tests) are recorded in this child ledger.

  - Related Pinata publication: [demo-edgar-for-web3-remove-greetings- (Pull Request)](https://copper-official-frog-380.mypinata.cloud/ipfs/QmRoEFz1UcPs5sTbHogYJnLM6dvMuzSx3GUuTUC98DriHn)

3) **Merging the Pull Request** :

  - Once validated, the PR is merged into the `main` branch.

  - The final state of the `main-pipeline` is updated and published, including the changes introduced by the PR.

  - Related Pinata publication: [demo-edgar-for-web3-main-pipeline (Merge PR)](https://copper-official-frog-380.mypinata.cloud/ipfs/QmTP9gZXk5suPdTbGpUoLMzh17FfR97pZ1mZNcZQMNiuPP)

**🔍 Explore the Deserialized Ledger**
You can browse the full deserialized ledger for this project here:
[👉 View Full Ledger](https://edgar-worker-backend-rust.cebulski-mi.workers.dev/api/v1/list-projects/demo-edgar-for-web3)
