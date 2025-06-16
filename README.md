# 🔗 demo-edgar-for-web3 : Traçabilité Immuable pour Contrats Intelligents via CI/CD

## Introduction
Ce dépôt demo-edgar-for-web3 est un projet de démonstration conçu pour illustrer l'intégration d'Edgar, une solution de traçabilité immuable, au sein d'un pipeline de CI/CD pour le développement de contrats intelligents basés sur Solidity. Il met en lumière comment garantir la provenance et l'intégrité de vos artefacts numériques, de la source au déploiement, en utilisant les GitHub Actions.

## Présentation du Projet
Dans l'écosystème Web3, la transparence et la vérifiabilité des contrats intelligents sont primordiales. Ce projet aborde le défi de la traçabilité en implémentant une chaîne de confiance inaltérable pour tous les artefacts clés générés au cours du cycle de vie du développement.

### Nous utilisons :

  - **Hardhat** : Un environnement de développement Ethereum pour la compilation, le test et le déploiement de contrats Solidity. Le contrat Counter.sol sert d'exemple simple.

  - **Edgar CLI** : L'outil en ligne de commande qui s'intègre à votre pipeline CI/CD pour marquer et publier des artefacts dans un "ledger" immuable.

  - **Edgar SaaS Backend** : Le service de backend qui reçoit les informations d'Edgar CLI, les signe cryptographiquement, et les ancre publiquement (potentiellement via IPFS et une blockchain).

  - **GitHub Actions** : Nos workflows de CI/CD qui orchestrent l'ensemble du processus de manière automatisée.

### Comment ça Marche ?
1 - Workflows CI/CD Automatisés :

  - **Branche main** : À chaque push ou fusion sur la branche principale, le workflow compile le contrat, exécute les tests, simule un déploiement et marque tous les artefacts clés (CodeSource, Bytecode, TestResult, Deployment, SBOM) dans le main-pipeline Edgar. Il publie ensuite cet historique sur le backend Edgar pour une notarisation publique.

  - **Pull Requests (PR)** : Pour chaque PR ciblant la branche main, un "child ledger" (pipeline enfant) unique est créé. Ce child ledger est lié au dernier bloc du main-pipeline, garantissant que toutes les activités de la PR (modifications de code, compilation, tests) sont tracées dans un historique distinct mais ancré au parent.

2 - Traçabilité Immuable avec Edgar :

  - Chaque étape significative de votre CI/CD est enregistrée comme un "bloc" dans un ledger Edgar.

  - Ces blocs contiennent l'empreinte numérique (hash) de l'artefact concerné (ex: votre code Solidity compilé, le rapport de test).

  - La CLI signe cryptographiquement chaque bloc.

  - Le backend Edgar consolide ces ledgers et les publie sur des systèmes de fichiers décentralisés comme IPFS, potentiellement avec un ancrage blockchain, assurant une preuve d'existence et d'intégrité inaltérable.

### Avantages
  - **Auditabilité Complète** : Chaque version de votre contrat, chaque résultat de test, chaque déploiement est prouvablement lié à son historique de développement.

  - **Conformité** : Aide à répondre aux exigences réglementaires et d'audit pour les systèmes critiques.

  - **Sécurité et Confiance** : Offre une confiance accrue dans le logiciel déployé en fournissant une preuve vérifiable de sa provenance et des étapes qu'il a traversées.

  - **Transparence** : Rend le processus de développement et de déploiement plus transparent pour les parties prenantes.


## Structure du Dépôt
  - `contracts/` : Contient les contrats Solidity (ex: Counter.sol).

  - `scripts/` : Scripts Hardhat pour le déploiement ou d'autres opérations.

  - `test/` : Tests unitaires pour les contrats.

  - `.github/workflows/` : Les définitions des workflows GitHub Actions (main-branch-edgar.yml et feature-pr-edgar.yml).

Ce projet fournit un modèle robuste pour intégrer une traçabilité cryptographique avancée dans vos pipelines de développement Web3, essentielle pour construire des applications décentralisées fiables et auditable.

## Scénario de Démonstration
Ce dépôt illustre un scénario de développement typique en trois étapes, avec une traçabilité complète assurée par Edgar :

1) **Initialisation du Projet & Premier Commit** :

  - Un projet web3 basique est initialisé.

  - Le tout premier commit est effectué, marquant les artefacts initiaux dans le `main-pipeline` d'Edgar.

  - Publication Pinata correspondante : [demo-edgar-for-web3-main-pipeline (First Commit)](https://copper-official-frog-380.mypinata.cloud/ipfs/QmdXM8eGxtMbgt9uKtfere2fHtCEm87emxXUHaoLuW8G32)

2) **Développement via Pull Request (PR)** :

  - Une Pull Request est ouverte (simulant une modification du contrat, par exemple l'ajout d'une fonction `greetings`).

  - Un `child-ledger` dédié est créé pour cette PR, s'ancrant au `last-block-hash` du `main-pipeline` au moment de la création de la PR. Toutes les actions (compilation, tests) effectuées dans le cadre de cette PR sont tracées dans ce child ledger.

  - Publication Pinata correspondante : [demo-edgar-for-web3-remove-greetings- (Pull Request)](https://copper-official-frog-380.mypinata.cloud/ipfs/QmRoEFz1UcPs5sTbHogYJnLM6dvMuzSx3GUuTUC98DriHn)

3) **Fusion de la Pull Request** :

  - Après validation, la Pull Request est fusionnée dans la branche `main`.

  - Les artefacts finaux du `main-pipeline` sont mis à jour et publiés, incluant les modifications apportées par la PR.

  - Publication Pinata correspondante : [demo-edgar-for-web3-main-pipeline (Merge PR)](https://copper-official-frog-380.mypinata.cloud/ipfs/QmTP9gZXk5suPdTbGpUoLMzh17FfR97pZ1mZNcZQMNiuPP)

**Consultez le Ledger Désérialisé** :

Vous pouvez explorer l'intégralité du ledger désérialisé de ce projet en cliquant ici :
[Voir le Ledger Complet](https://edgar-worker-backend-rust.cebulski-mi.workers.dev/api/v1/list-projects/demo-edgar-for-web3)