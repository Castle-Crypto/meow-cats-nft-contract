import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'MeowCatsNFT',
  tokenName: 'MeowCatsNFT',
  tokenSymbol: 'MeowCatsNFT',
  hiddenMetadataUri: 'ipfs://QmYkc1Jp8BZRnsa5kio6rpDLD19QPyMg5iSjPRrgA668ce/hidden.json',
  maxSupply: 5555,
  whitelistSale: {
    price: 0.10,
    maxMintAmountPerTx: 30,
  },
  preSale: {
    price: 0.1,
    maxMintAmountPerTx: 50,
  },
  publicSale: {
    price: 0.1,
    maxMintAmountPerTx: 1000,
  },
  contractAddress: "0x2dCa84b546002FB6Bd6851BE396fe3f61b88b98A",
  openSeaSlug: 'MeowCatsNFT',
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
