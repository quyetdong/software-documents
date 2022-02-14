## Steps to create a new token
* Create a contract wallet on Metamask (Or Ganache - for local deployment)

* Get some test crypto currency for the Wallet (from faucet testnet)

* Put Mnemonic secret phrase into a file of the project to connect to the Wallet (to pay for the fee when deploy new contract or make transaction related)

* Get project API key (Infura/ Polygon/ Alchemy - or in local: Ganache) to connect to the Ethereum network

* Run: "truffle migrate --network network_name" (or just "truffle migrate" if the network_name is development)
 to deploy new contract (create token) to the testnet

* Check the address on the {testnet}.etherscan.io

* Copy json generated files of the contracts (in folder build/contracts) into the source code of client side (example: client/src/assets/contracts)
