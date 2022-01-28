# 1. Hardhat
## _General_
- Hardhat is a development environment to compile, deploy, test and debug Ethereum software
- Manage and automate recurring tasks inherent to the process of building smart contracts and DApps
- Hardhat comes built-in with Hardhat Network, a local Ethereum network designed for development
- It's functionality focuses around Solidity debugging, featuring stack traces, log, and explicit error messages when transactions fail
## _Hardhat Runner_
- A CLI command to interact with Hardhat, is an extensible task runner
- Everytime you're running Hardhat from the CLI you're running a task
- Tasks can call other tasks
- Users and plugins can override existing tasks
## _Configuration_
- When Hardhat is run, it searches for the closest `hardhat.config.js` file starting from the Current Working Directory. This file normally lives in the root of your project. An empty `hardhat.config.js` is enough for Hardhat to work
- 