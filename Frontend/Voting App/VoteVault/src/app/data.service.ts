import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { AdminLoginPageRoutingModule } from './admin-login/admin-login-routing.module';
import {ContractFactory, ethers, providers} from 'ethers';
import { hrtime } from 'process';

declare let window : any;

interface Ballot {
  name: string;
  options: any[];
}

interface Election {
  electionName : string
  id? : string
  ballots : any[]
  // adminEmail : string
  users : any[]
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  electionOptions: any[];
  electionName: string;
  ballot1: Ballot;
  ballot2: Ballot;
  ballot3: Ballot;
  votes: any[];
  userEmail: string;
  election: any;
  elections: any[];
  registeredUsers: any[];
  adminState : string;
  electionID : string
  
  private contractAddress = '0x76180da9F62ccDe81C5092CACa5818835FaD6900'
  private contractABI = '[{"constant":true,"inputs":[],"name":"startDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"voteCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"endDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"voters","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"electionID","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"id","type":"string"},{"name":"sd","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"}],"name":"addVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getId","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]'
  private contractBytecode = '0x608060405234801561001057600080fd5b506040516106663803806106668339810180604052604081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8281019050602081018481111561006157600080fd5b815185600182028301116401000000008211171561007e57600080fd5b50509291906020018051906020019092919050505081600190805190602001906100a99291906100b8565b5080600281905550505061015d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100f957805160ff1916838001178555610127565b82800160010185558215610127579182015b8281111561012657825182559160200191906001019061010b565b5b5090506101349190610138565b5090565b61015a91905b8082111561015657600081600090555060010161013e565b5090565b90565b6104fa8061016c6000396000f3fe608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630b97bc86146100885780635d1ca631146100b3578063ba32941414610143578063c24a0f8b1461019c578063da58c7d9146101c7578063f8e78e9a14610216578063fcca991b146102a6575b600080fd5b34801561009457600080fd5b5061009d6102eb565b6040518082815260200191505060405180910390f35b3480156100bf57600080fd5b506100c86102f1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101085780820151818401526020810190506100ed565b50505050905090810190601f1680156101355780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014f57600080fd5b506101866004803603604081101561016657600080fd5b810190808035906020019092919080359060200190929190505050610393565b6040518082815260200191505060405180910390f35b3480156101a857600080fd5b506101b16103c9565b6040518082815260200191505060405180910390f35b3480156101d357600080fd5b50610200600480360360208110156101ea57600080fd5b81019080803590602001909291905050506103cf565b6040518082815260200191505060405180910390f35b34801561022257600080fd5b5061022b6103f2565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561026b578082015181840152602081019050610250565b50505050905090810190601f1680156102985780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102b257600080fd5b506102e9600480360360408110156102c957600080fd5b810190808035906020019092919080359060200190929190505050610490565b005b60025481565b606060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103895780601f1061035e57610100808354040283529160200191610389565b820191906000526020600020905b81548152906001019060200180831161036c57829003601f168201915b5050505050905090565b6000828154811015156103a257fe5b9060005260206000209060030201816003811015156103bd57fe5b01600091509150505481565b60035481565b6004818154811015156103de57fe5b906000526020600020016000915090505481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104885780601f1061045d57610100808354040283529160200191610488565b820191906000526020600020905b81548152906001019060200180831161046b57829003601f168201915b505050505081565b60016000838154811015156104a157fe5b9060005260206000209060030201826003811015156104bc57fe5b0160008282540192505081905550505056fea165627a7a72305820246c261950325e0fb7230a1c1caf78482bbb8b666d0953f83e1f5d9781f3c9060029'
  private privateKey = '0x1bfdd10e791617c7e8e9c7d0a451b45f1fcf07c831504d8f2fa0727a2b166cd2'
  
  constructor(private firestore: Firestore) {
    this.electionOptions = [];
    this.ballot1 = {} as Ballot;
    this.ballot2 = {} as Ballot;
    this.ballot3 = {} as Ballot;
    this.ballot1.options = [];
    this.ballot1.name = '';
    this.ballot2.options = [];
    this.ballot2.name = '';
    this.ballot3.options = [];
    this.ballot3.name = '';
    this.votes = [];
    this.userEmail = '';
    this.elections = [];
    this.registeredUsers = [];
    this.electionName = '';
    this.adminState = '';
    this.electionID = '';
    this.connect()
  }

  async connect() {
    // const infuraProvider = new ethers.providers.InfuraProvider('https://ropsten.infura.io/v3/0d3da94ec48e4067b87f4a8734912931', 3)

    // const localhostProvider  = new ethers.providers.JsonRpcProvider('http:/\/127.0.0.1:7545')
    const alcProvider = new ethers.providers.AlchemyProvider("goerli", "OvCjMEF-_qv95PPGX2i14JE1A-3nSIl8")

    const signer = new ethers.Wallet(this.privateKey, alcProvider)

    // const signer = localhostProvider.getSigner('0x3bAe5160f49A31f7123246346E445aa65bE0e41F')
    
    // const contract = new ethers.Contract(this.contractAddress, this.contractABI, provider)
  
    // Set gas limit and gas price, using the default Ropsten provider
  // const price = ethers.utils.formatUnits(await alcProvider.getGasPrice(), 'gwei')
  // const options = {gasLimit: 100000, gasPrice: ethers.utils.parseUnits(price, 'gwei')}

    const contractFactory = new ContractFactory(this.contractABI, this.contractBytecode, signer)

    // const deployTx = contractFactory.getDeployTransaction()
 
    const contract = await contractFactory.deploy("id", 99)

    await contract.deployed()
    
    // const deployedContract = new ethers.Contract(contract.address, this.contractABI, signer)
    // console.log(contract.address)
    const electionID = await contract.electionID()
    console.log("ID : " + electionID)
    const startDate = await contract.startDate()
    console.log("StartDate : " + startDate)
    // await deployedContract.functions.startDate().then((res) =>  {
    //   console.log(res)
    // })



    // const gas = await localhostProvider.getGasPrice()
    // const estimatedGas = await contract.estimateGas.getId()
    // console.log(gas)
    // console.log(await contract.functions.getId())
    // const transaction = await contract.addVote(0,0, {gasPrice : 0.5, gasLimit : 20000})
    // const getTransactionReceipt = await transaction.wait()
    // console.log(getTransactionReceipt)
    // console.log(contract.address)
    // console.log(await contract.addVote(0,0, {gasLimit : 1000000}))

      // const estimatedGas = await contract.estimateGas.approve('http:/\/127.0.0.1:7545', '1000000')
    // const approveTxUnsigned = await contract.populateTransaction.approve('http:/\/127.0.0.1:7545', "1000000");
    // approveTxUnsigned.chainId = 3
    // approveTxUnsigned.gasLimit = estimatedGas
    // approveTxUnsigned.gasPrice = await localhostProvider.getGasPrice();
    // approveTxUnsigned.nonce = await localhostProvider.getTransactionCount('0x3bAe5160f49A31f7123246346E445aa65bE0e41F');

    // const approveTxSigned = await signer.signTransaction(approveTxUnsigned)
    // const submittedTx = await localhostProvider.sendTransaction(approveTxSigned);
    // console.log(await submittedTx.wait())
  }

  setAdminState(s) {
    this.adminState = s
  } 

  async fetchElections() {
    this.elections = []
    //TODO: Fetch elections for signed in user
    const adminRef = doc(this.firestore, 'admins', this.userEmail)
    const adminSnap = await getDoc(adminRef)

    if (adminSnap.exists()) {
      console.log("Document data:", adminSnap.data());
      const election_id_array = adminSnap.data().elections

      election_id_array.forEach(async (id)  =>  {
        //Retrieve Election
        const electionSnap = await getDoc(doc(this.firestore, 'elections', id))
        const e = {} as Election
        // console.log(doc.data())
        e.ballots = electionSnap.data().ballots 
        e.users   = electionSnap.data().users
        e.electionName = electionSnap.data().electionName
        e.id = electionSnap.id
        // console.log(doc.data().election)
        this.elections.push(e)
      })
      
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

  }

  editElection(e) {
    console.log(e);
    this.ballot1.options = e.ballots[0].options;
    this.ballot2.options = e.ballots[1].options;
    this.ballot3.options = e.ballots[2].options;
    this.ballot1.name    = e.ballots[0].name;
    this.ballot2.name    = e.ballots[1].name;
    this.ballot3.name    = e.ballots[2].name;
    this.electionName    = e.electionName;
    this.electionID = e.id
  }

  async saveEdit() {
    const electionRef = doc(this.firestore, 'elections', this.electionID)

    await updateDoc(electionRef, {
      adminEmail : this.userEmail,
      ballots    : [this.ballot1, this.ballot2, this.ballot3],
      electionName : this.electionName,
      active : true,
      users  : this.registeredUsers
    }).then(async ()  =>  {
      await this.fetchElections()
    })
  }

  async saveElection() {
   const electionRef = await addDoc(collection(this.firestore, 'elections'), {
      adminEmail : this.userEmail,
      ballots    : [this.ballot1, this.ballot2, this.ballot3],
      electionName : this.electionName,
      active : true,
      users  : this.registeredUsers
    }).then((ref)  =>  {
      this.mapAdminToElection(ref);
    }).then(async ()  =>  {
      await this.fetchElections()
    })
  }

  async mapAdminToElection(ref) {
    console.log(ref.id)
    const id = ref.id
    const adminRef = doc(this.firestore, 'admins' , this.userEmail)
    const adminSnap = await getDoc(adminRef)
    if(adminSnap.exists()) {
      await updateDoc(adminRef, {
        elections: arrayUnion(id)
      })
    }
    else {
      await setDoc(doc(this.firestore, "admins", this.userEmail), {
        elections : [id]
      });
    }
  }

  clear() {
    this.ballot1 = {} as Ballot;
    this.ballot2 = {} as Ballot;
    this.ballot3 = {} as Ballot;
    this.ballot1.options = [];
    this.ballot1.name = '';
    this.ballot2.options = [];
    this.ballot2.name = '';
    this.ballot3.options = [];
    this.ballot3.name = '';
    // this.votes = []
    // this.elections = []
    this.electionName = '';
  }

  setUserEmail(s) {
    this.userEmail = s;
  }

  saveElectionName(s) {
    this.electionName = s;
  }

  addOption(o, i) {
    switch(i) {
      case 0:{
        this.ballot1.options.push(o);
        break;
      }
      case 1: {
        this.ballot2.options.push(o);
        break;
      }
      case 2: {
        this.ballot3.options.push(o);
        break;
      }
    }
    console.log(this.ballot1);
  }

  removeOption(index, i) {
    switch(i) {
      case 0:{
        if(index != -1)
          {this.ballot1.options.splice(index,1);};
        break;
      }
      case 1: {
        if(index != -1)
          {this.ballot2.options.splice(index,1);};
        break;
      }
      case 2: {
        if(index != -1)
          {this.ballot3.options.splice(index,1);};
        break;
      }
    }
  }

  getOptions(i) {
    switch(i) {
      case 0:{
        return this.ballot1.options;
        break;
      }
      case 1: {
        return this.ballot2.options;
        break;
      }
      case 2: {
        return this.ballot3.options;
        break;
      }
    }
  }

  getBallot(i) {
    switch(i) {
      case 0:{
        return this.ballot1;
        break;
      }
      case 1: {
        return this.ballot2;
        break;
      }
      case 2: {
        return this.ballot3;
        break;
      }
    }
  }

  saveBallotName(name, index) {
    switch(index) {
      case 0:{
        this.ballot1.name = name;
        break;
      }
      case 1: {
        this.ballot2.name = name;
        break;
      }
      case 2: {
        this.ballot3.name = name;
        break;
      }
    }
  }

//   async deploy() {
//     // const bytecode = compileContractWithParams()
//     const itx = new ethers.providers.InfuraProvider(
//       'ropsten',
//       '0d3da94ec48e4067b87f4a8734912931'
//     )

//     const signer = new ethers.Wallet('1bfdd10e791617c7e8e9c7d0a451b45f1fcf07c831504d8f2fa0727a2b166cd2', itx)

//     const tx = {
//       to: ethers.constants.AddressZero,

//       data: '0x', // + bytecode,

//       gas: '1000000',

//       schedule: 'fast,'
//     }

//     const relayTransactionHashToSign = ethers.utils.keccak256(
//       ethers.utils.defaultAbiCoder.encode(
//         ["address", "bytes", "uint", "uint", "string"],
//         [tx.to, tx.data, tx.gas, 3, tx.schedule]
//       )
//     );

//     const signature = await signer.signMessage(
//       ethers.utils.arrayify(relayTransactionHashToSign)
//     );

//     const sentAtBlock = await itx.getBlockNumber();

//     const { relayTransactionHash } = await itx.send("relay_sendTransaction", [
//       tx,
//       signature,
//     ]);
//     console.log(`ITX relay transaction hash: ${relayTransactionHash}`);

//     console.log("Waiting to be mined...");
//   while (true) {
//     // fetches an object
//     // { receivedTime: string, broadcasts?: [{broadcastTime: string, ethTxHash: string, gasPrice: string}]}
//     const { broadcasts } = await itx.send("relay_getTransactionStatus", [
//       relayTransactionHash,
//     ]);

//     // check each of these hashes to see if their receipt exists and
//     // has confirmations
//     if (broadcasts) {
//       for (const broadcast of broadcasts) {
//         const { ethTxHash, gasPrice } = broadcast;
//         const receipt = await itx.getTransactionReceipt(ethTxHash);
//         // printBump(ethTxHash, gasPrice); // Print bump

//         if (receipt && receipt.confirmations && receipt.confirmations > 1) {
//           // The transaction is now on chain!
//           console.log(`Ethereum transaction hash: ${receipt.transactionHash}`);
//           console.log(`Sent at block ${sentAtBlock}`);
//           console.log(`Mined in block ${receipt.blockNumber}`);
//           console.log(`Total blocks ${receipt.blockNumber - sentAtBlock}`);
//           return;
//         }
//       }
//     }
//     await this.delay(1000);
//   }
// }


delay(ms) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
}
  //   var deployTransaction = ethers.Contract.getDeployTransaction(bytecode, abi, "Hello World");
  //   console.log(deployTransaction);
  //   // {
  //   //    data: "0x6060604052341561000c57fe5b60405161012d38038061012d83398101604052" +
  //   //            "8080518201919050505b806000908051906020019061003f929190610047565b" +
  //   //            "505b506100ec565b828054600181600116156101000203166002900490600052" +
  //   //            "602060002090601f016020900481019282601f1061008857805160ff19168380" +
  //   //            "011785556100b6565b828001600101855582156100b6579182015b8281111561" +
  //   //            "00b557825182559160200191906001019061009a565b5b5090506100c3919061" +
  //   //            "00c7565b5090565b6100e991905b808211156100e55760008160009055506001" +
  //   //            "016100cd565b5090565b90565b6033806100fa6000396000f30060606040525b" +
  //   //            "fe00a165627a7a72305820041f440021b887310055b6f4e647c2844f4e1c8cf1" +
  //   //            "d8e037c72cd7d0aa671e2f002900000000000000000000000000000000000000" +
  //   //            "0000000000000000000000002000000000000000000000000000000000000000" +
  //   //            "0000000000000000000000000b48656c6c6f20576f726c640000000000000000" +
  //   //            "00000000000000000000000000"
  //   // }

  //   // Connect to the network
  //   var provider = ethers.providers.getDefaultProvider();

  //   // Create a wallet to deploy the contract with
  //   var privateKey = '0x0123456789012345678901234567890123456789012345678901234567890123';
  //   var wallet = new ethers.Wallet(privateKey, provider);

  //   // Send the transaction
  //   var sendPromise = wallet.sendTransaction(deployTransaction);

  //   // Get the transaction
  //   sendPromise.then(function(transaction) {
  //       console.log(transaction);
  //   });
  // }
