const Web3 = require("web3");

async function main() {
  // Configuring the connection to an Ethereum node
  const network = process.env.ETHEREUM_NETWORK;
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
        `https://${network}.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
    )
  );
  // Creating a signing account from a private key
  const signer = web3.eth.accounts.privateKeyToAccount(
    process.env.SIGNER_PRIVATE_KEY
  );
  web3.eth.accounts.wallet.add(signer);

  // Estimatic the gas limit
  var limit = web3.eth.estimateGas({
    from: signer.address, 
    to: "0xAED01C776d98303eE080D25A21f0a42D94a86D9c",
    value: web3.utils.toWei("0.001")
    }).then(console.log);
    
  // Creating the transaction object
  const tx = {
    from: signer.address,
    to: "0xAED01C776d98303eE080D25A21f0a42D94a86D9c",
    value: web3.utils.numberToHex(web3.utils.toWei('0.01', 'ether')),
    gas: web3.utils.toHex(limit),
    nonce: web3.eth.getTransactionCount(signer.address),
    maxPriorityFeePerGas: web3.utils.toHex(web3.utils.toWei('2', 'gwei')),
    chainId: 3,                  
    type: 0x2
  };

  signedTx = await web3.eth.accounts.signTransaction(tx, signer.privateKey)
  console.log("Raw transaction data: " + signedTx.rawTransaction)

  // Sending the transaction to the network
  const receipt = await web3.eth
    .sendSignedTransaction(signedTx.rawTransaction)
    .once("transactionHash", (txhash) => {
      console.log(`Mining transaction ...`);
      console.log(`https://${network}.etherscan.io/tx/${txhash}`);
    });
  // The transaction is now on chain!
  console.log(`Mined in block ${receipt.blockNumber}`);

}

require("dotenv").config();
main();