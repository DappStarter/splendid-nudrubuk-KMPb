require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remember solid good neck flat twenty'; 
let testAccounts = [
"0x590317936bce4e344efbdcb53e233b31e998a1e93242108136e6214404029941",
"0xfe39f7862d8121b7e94bb656164cb76f45b2f91bad1190c84d0cf65863c80185",
"0xd27072cb0aadafb2ce70df3a392c14d859eda2b03c14cada80400584864cd99e",
"0x8beb0ae692421191aa044b266d79f173cbef33e6b7a8a7bbe58b4b7310c1310d",
"0x175cea2701063b283c4ef98bef3c052a347fa18acb0420957ddfc4482df80b45",
"0x2d9acff33ede2132e3588a2a6bb9ba604ec1ff8bdb8dc04521985d31f352777d",
"0xb839cc84510f74828dcaa39c9b51e0266a8e203dee7cff3d0ffa489b65449e5f",
"0x9b70ea5522633981eb1f5897e7ad2e7d9f44c0f4c4465dcdc968dd3a47d517f2",
"0x2267c0c582e63fe98516e2484ef9078673f7a9c88e7d78aee2954c7b64b7a75f",
"0xf70a69c9c8d26eac61acc299b727db3f63340330522159c58f87cda4ee9b345c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

