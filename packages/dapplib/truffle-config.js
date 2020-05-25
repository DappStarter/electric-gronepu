require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remain unusual hunt industry foster twist'; 
let testAccounts = [
"0xcfa52dedad3f6e33548a7c681ffc8dd24fefd943c3a1d6efd1c10e70eadc2fd6",
"0xe646d7bcc1c689199408bed3f2055a81ceedf680067f0eb283af244dc9803b2e",
"0xb4ddbe8efed2ac56eb429aabbb166e30d43f0c6d63fe73b248f6eac12afa37a8",
"0x8ed912c73aef67c32a9e7d5da15980b3c9a08aab95f75ed1d39d60aeac8d67b0",
"0x9460d4f59acd819698bb06edc384743137077c43a954b3d444a011631786ad95",
"0x9bad49e3daa11daccda51a93a33fb4b26937f5791561e99edb0d36da491dd1ad",
"0x6127fd6774cd8399dbfe57fe5dec5c5d1f7cd0ee89c8474d4b580ed46a1acd52",
"0xfaeed35e2084aaaa61f9cde1e8b37832c38a142765f04a66d5c5f2fed8b09ffe",
"0x356a9d0933e6342baa3048dc045369b1e6a194e5ed2ee0e0675a83441e74885d",
"0x64fba470f480f637ecb60d72faef533641a64ef36293843e15da46dd7bfca7fc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
