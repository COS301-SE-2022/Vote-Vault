function send() {
// Library Imports
const Web3 = require('web3');
const EthereumTx = require('ethereumjs-tx').Transaction;

// Connection Initialization
const rpcURL = "http://127.0.0.1:7545";
const web3 = new Web3(rpcURL);

// Data set up
let abi = '[{"constant":true,"inputs":[],"name":"startDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x0b97bc86"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"voteCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xba329414"},{"constant":true,"inputs":[],"name":"endDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc24a0f8b"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"voters","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xda58c7d9"},{"constant":true,"inputs":[],"name":"electionID","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf8e78e9a"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"}],"name":"addVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xfcca991b"}]'
let bytecode = '0x608060405234801561001057600080fd5b506102c0806100206000396000f3fe608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630b97bc861461007d578063ba329414146100a8578063c24a0f8b14610101578063da58c7d91461012c578063f8e78e9a1461017b578063fcca991b146101a6575b600080fd5b34801561008957600080fd5b506100926101eb565b6040518082815260200191505060405180910390f35b3480156100b457600080fd5b506100eb600480360360408110156100cb57600080fd5b8101908080359060200190929190803590602001909291905050506101f1565b6040518082815260200191505060405180910390f35b34801561010d57600080fd5b50610116610227565b6040518082815260200191505060405180910390f35b34801561013857600080fd5b506101656004803603602081101561014f57600080fd5b810190808035906020019092919050505061022d565b6040518082815260200191505060405180910390f35b34801561018757600080fd5b50610190610250565b6040518082815260200191505060405180910390f35b3480156101b257600080fd5b506101e9600480360360408110156101c957600080fd5b810190808035906020019092919080359060200190929190505050610256565b005b60025481565b60008281548110151561020057fe5b90600052602060002090600302018160038110151561021b57fe5b01600091509150505481565b60035481565b60048181548110151561023c57fe5b906000526020600020016000915090505481565b60015481565b600160008381548110151561026757fe5b90600052602060002090600302018260038110151561028257fe5b0160008282540192505081905550505056fea165627a7a7230582035601f1a47684fd1fe0ea95361e35dffd208a094a3bbe97b772e35299ffda4910029';

//Contract object and account info
let deploy_contract = new web3.eth.Contract(JSON.parse(abi));
let account = '0x3bAe5160f49A31f7123246346E445aa65bE0e41F';


// Function Parameter
let payload = {
    data: bytecode
}

let parameter = {
    from: account,
    gas: web3.utils.toHex(800000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei'))
}

// Function Call
deploy_contract.deploy(payload).send(parameter, (err, transactionHash) => {
    console.log('Transaction Hash :', transactionHash);
}).on('confirmation', () => {}).then((newContractInstance) => {
    console.log('Deployed Contract Address : ', newContractInstance.options.address);
})
}