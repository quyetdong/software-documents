## Build Marketplace like Opensea
  * Support two types of contract: ERC721 (and ERC1155)

  1. Write api to upload metadata/file/image to IPFS
  2. NFT smart contract: Write smart contract to deploy to Ethereum contains metadata format for image/product, allow to mint NFT from this contract
  3. Mint NFT for the image/product by the NFT smart contract through its address
  4. Use web3 libraries to connect to metamask/other wallet

  5. Marketplace smart contract: 
    Write smart contract contains functions:
      * Create market item (item is ready for sale)
      * Execute logics to sell item
      * Get list market items for sale
  6. Off-chain database to save additional data for the project


---------------------
## Connect to wallet
  * web3

## Listings products
  * Use opensea sdk

## Sell and buy product
  * Opensea sdk

----------------------
## Opensea clone from Moralis

  * Crypto wallet; account on Moralis.io
  * Deploy a NFT smart contract and mint some NFT from it (follow NFT metadata standard by Opensea)
    https://docs.opensea.io/docs/creating-an-nft-contract
  * Deploy a Marketplace smart contract to execute NFT actions on market
    (Refer to this source code: git@github.com:quyetdong/ethereum-nft-marketplace-boilerplate.git)

  1. Clone from this project: git@github.com:quyetdong/ethereum-nft-marketplace-boilerplate.git
  2. Follow this instruction to create a nft marketplace: 
  https://moralis.io/create-an-opensea-clone-build-an-nft-marketplace-like-opensea/
