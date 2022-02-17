## Steps to create a new token with Truffle
[Reference: https://jamesbachini.com/new-token/]

1. Prepare
* NodeJS, Git, Truffle

* Create a contract wallet on Metamask (Or Ganache - for local deployment)
  Get Mnemonic secret phrase

* Get some test crypto currency for the Wallet (from faucet testnet)
  (to pay for the transaction cost when deploy new contract or make transactions related)

* Create an account for test on (Infura/ Polygon/ Alchemy - or in local: Ganache)
  to let the project be able to connect to the Ethereum test network

* Get project API key (Infura/ Polygon/ Alchemy - or in local: Ganache) to connect to the Ethereum network

2. Create new token (simple token)

** We will use the OpenZeppelin smart contract (ERC20) templates to create our test token **

- Open terminal and create a new directory for the project (myTokenProj)
- cd to the newly created project
- initialize a new truffle boilerplate
`$ truffle init`
- install @openzeppelin/contracts package used to create new token
`$ npm install @openzeppelin/contracts`
- install a wallet management tool used in the Truffle config
`$ npm install @truffle/hdwallet-provider`
- Go into the myTokenProj/contracts directory, delete migrations.sol and create a new file called myToken.sol

Copy below code used to create our new token

`pragma solidity >=0.7.0 <0.9.0;

import '@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol';

contract myToken is ERC20PresetMinterPauser {
    constructor() ERC20PresetMinterPauser("myToken", "MYT") {
    }
}`

- Go into the migrations directory, delete 1_initial_migration.js and create a new file called 1_deploy.js

`const myToken = artifacts.require('myToken');
module.exports = function(deployer) {
    deployer.deploy(myToken);
};`

- Edit the myTokenProj/truffle-config.js
uncomment the following lines and enter the infura API key and the mnemonic
(for mnemonic secret phrase, create a new file .secret to save it)

`const HDWalletProvider = require('@truffle/hdwallet-provider');
//
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const infuraKey = '85fb91c950724c9585adb10ba2145b4c';`

inside the property *networks*, uncomment the part including the network that you are going to deploy the contract to (ex: ropsten)

`ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `wss://ropsten.infura.io/ws/v3/${infuraKey}`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },`

- Set compiler version to the latest version

- Run below command to deploy the contract

`truffle compile
truffle console --network ropsten
migrate`

- We should see the contract deployed to the Ropsten testnet, check this by copy and paste the contract address into Ropsten's Etherscan Explorer. (https://ropsten.etherscan.io)

3. Minting tokens using Truffle console
While we are in the truffle console, we can interact with the deployed contract.
- First create an instance of it
`const instance = await myToken.deployed();`
- Try minting tokens to an address: copy and paste the public key address from Metamask into the following command
`instance.mint('0x...','1000_000_000_000_000_000_000');`
- The value is the lowest denomination and by default the contract is set to 18 decimals so this will mint 1000 whole tokens. We can import the newly created contract address into Metamask and check the balance of the token in your account.
- Also can transfer and check balances from within Truffle

`instance.transfer('0x...','500000000000000000000');
instance.balanceOf('0x...');`
