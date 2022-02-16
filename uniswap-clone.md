# Instructions for custom Uniswap clone of swapping, reflect to uniswap-clone-youtube by CleverProgrammer

## Create the environment
- We have to use: *nodejs* (of course, *npm*) and *yarn*. 
- If the installation of them is complete, check the existence before.

## Clone the repository
Clone the repository from the following link: [https://github.com/CleverProgrammers/uniswap-clone-youtube]

## Testing
### Run the interface
- Open the terminal, move to *client*
- Run 
```
yarn
```
, then 
```
yarn dev
```
, and open [http://localhost:3000] with your web browser.


### Test the contract
Move to *smart_contract/hardhat.config.js*, we will see url and accounts.

- First, we have to create an app on Alchemy (choose the environment is *Development*; the chain is *Ethereum*; the network is *Rinkeby*). After that, we will get the url in View Key/HTTP, and paste to url in hardhat.config.js.
- Second, we have to connect the wallet in MetaMask, choose *Account details* and *Export private key*. Then, paste the key to accounts in *hardhat.config.js*.

In the terminal, move to smart_contract and run the following command: 
```
npx hardhat run scripts/deploy.js --network rinkeby
```
If none of errors, we will receive the notification: 
```
Transactions deployed to: 0x...
```

Check the latest transaction details of your account on Etherscan.io, we will see the contract with address *0x...* is created.

