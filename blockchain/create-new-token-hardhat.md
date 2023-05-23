## Steps to create a new token with Hardhat

1. Prepare
* NodeJS, Git

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
- initialize a new npm project
`$ npm init`
- install hardhat
`$ npm install --save-dev hardhat`
- create a hardhat project
`$ npx hardhat`
- choose `> Create a basic sample project` and press enter
- install @openzeppelin/contracts package used to create new token
`$ npm install @openzeppelin/contracts`
- Go into the myTokenProj/contracts directory, delete Greeter.sol and create a new file called myToken.sol
Copy below code used to create our new token
`pragma solidity >=0.7.0 <0.9.0;

import '@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol';

contract MyTokenHardhat is ERC20PresetMinterPauser {
    constructor() ERC20PresetMinterPauser("myToken", "MYT") {
    }
}`
- Go into the scripts directory, rename sample-script.js file to deploy-script.js, update code to deploy our contract *myToken*
`const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const MyTokenHardhat = await hre.ethers.getContractFactory("MyTokenHardhat");
  const myToken = await MyTokenHardhat.deploy();

  await myToken.deployed();

  console.log("My token hardhat deployed to:", myToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });`
- Edit the myTokenProj/hardhat.config.js
Create below variables
(for mnemonic secret phrase, create a new file .secret to save it)

`const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const infuraKey = {Infura_API_Key};`

Update module.exports to use Ropsten network

`module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
      // accounts: [privateKey1, privateKey2]
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${infuraKey}`,
      accounts: { mnemonic },
      chainId: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
};`

- Run below command to deploy the contract
`npx hardhat compile
npx hardhat run scripts/deploy-script.js`
- We should see the contract deployed to the Ropsten testnet, check this by copy and paste the contract address into Ropsten's Etherscan Explorer. (https://ropsten.etherscan.io)

3. Minting tokens using Truffle console
While we are in the truffle console, we can interact with the deployed contract.
`npx hardhat console`
- First create an instance of it
`const MyContract = await ethers.getContractFactory("MyTokenHardhat");
const instance = await MyContract.attach(
  "0x..." // The deployed contract address
);`
- Try minting tokens to an address: copy and paste the public key address from Metamask into the following command
`await instance.mint('0x...','1000_000_000_000_000_000_000');`
- The value is the lowest denomination and by default the contract is set to 18 decimals so this will mint 1000 whole tokens. We can import the newly created contract address into Metamask and check the balance of the token in your account.
- Also can transfer and check balances from within Truffle
`instance.transfer('0x...','500000000000000000000');
instance.balanceOf('0x...');`
