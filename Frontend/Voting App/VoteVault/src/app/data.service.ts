import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
<<<<<<< HEAD
import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { AdminLoginPageRoutingModule } from './admin-login/admin-login-routing.module';
import {ContractFactory, ethers, providers} from 'ethers';
import { hrtime } from 'process';

declare let window : any;
=======
import { addDoc, arrayUnion, collection, doc, setDoc, updateDoc } from 'firebase/firestore';
import { VoterDashboardPage } from './voter-dashboard/voter-dashboard.page';
>>>>>>> 530021f893c78cf934db52cbd485d3853ee6ee19

interface Ballot {
  name: string;
  options: any[];
}

<<<<<<< HEAD
interface Election {
  electionName : string
  id? : string
  ballots : any[]
  // adminEmail : string
  users : any[]
=======
export class Voter {
  birthName: String;
  surname: String;
  IDnum: Number;
  Gender: String;

  Voter(n, sn, id, g) {
    this.birthName = n;
    this.surname = sn;
    this.IDnum = id;
    this.Gender = g;
  }
>>>>>>> 530021f893c78cf934db52cbd485d3853ee6ee19
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
<<<<<<< HEAD
  registeredUsers: any[];
  adminState : string;
  electionID : string
  
  private contractAddress = '0x76180da9F62ccDe81C5092CACa5818835FaD6900'
  private contractABI = '[{"constant":true,"inputs":[],"name":"startDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"voteCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"endDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"voters","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"electionID","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"id","type":"string"},{"name":"sd","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"}],"name":"addVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getId","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"string"}],"name":"updateId","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
  private contractBytecode = '0x608060405234801561001057600080fd5b506040516107f83803806107f88339810180604052604081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8281019050602081018481111561006157600080fd5b815185600182028301116401000000008211171561007e57600080fd5b50509291906020018051906020019092919050505081600190805190602001906100a99291906100b8565b5080600281905550505061015d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100f957805160ff1916838001178555610127565b82800160010185558215610127579182015b8281111561012657825182559160200191906001019061010b565b5b5090506101349190610138565b5090565b61015a91905b8082111561015657600081600090555060010161013e565b5090565b90565b61068c8061016c6000396000f3fe60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630b97bc86146100935780635d1ca631146100be5780635ede13731461014e578063ba32941414610216578063c24a0f8b1461026f578063da58c7d91461029a578063f8e78e9a146102e9578063fcca991b14610379575b600080fd5b34801561009f57600080fd5b506100a86103be565b6040518082815260200191505060405180910390f35b3480156100ca57600080fd5b506100d36103c4565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101135780820151818401526020810190506100f8565b50505050905090810190601f1680156101405780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015a57600080fd5b506102146004803603602081101561017157600080fd5b810190808035906020019064010000000081111561018e57600080fd5b8201836020820111156101a057600080fd5b803590602001918460018302840111640100000000831117156101c257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610466565b005b34801561022257600080fd5b506102596004803603604081101561023957600080fd5b810190808035906020019092919080359060200190929190505050610480565b6040518082815260200191505060405180910390f35b34801561027b57600080fd5b506102846104b6565b6040518082815260200191505060405180910390f35b3480156102a657600080fd5b506102d3600480360360208110156102bd57600080fd5b81019080803590602001909291905050506104bc565b6040518082815260200191505060405180910390f35b3480156102f557600080fd5b506102fe6104df565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561033e578082015181840152602081019050610323565b50505050905090810190601f16801561036b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561038557600080fd5b506103bc6004803603604081101561039c57600080fd5b81019080803590602001909291908035906020019092919050505061057d565b005b60025481565b606060018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561045c5780601f106104315761010080835404028352916020019161045c565b820191906000526020600020905b81548152906001019060200180831161043f57829003601f168201915b5050505050905090565b806001908051906020019061047c9291906105bb565b5050565b60008281548110151561048f57fe5b9060005260206000209060030201816003811015156104aa57fe5b01600091509150505481565b60035481565b6004818154811015156104cb57fe5b906000526020600020016000915090505481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105755780601f1061054a57610100808354040283529160200191610575565b820191906000526020600020905b81548152906001019060200180831161055857829003601f168201915b505050505081565b600160008381548110151561058e57fe5b9060005260206000209060030201826003811015156105a957fe5b01600082825401925050819055505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106105fc57805160ff191683800117855561062a565b8280016001018555821561062a579182015b8281111561062957825182559160200191906001019061060e565b5b509050610637919061063b565b5090565b61065d91905b80821115610659576000816000905550600101610641565b5090565b9056fea165627a7a723058200ae8a6e87b6af6738a487cbe9b52c6d0d289865029c647c5af3ce4c858d98d4c0029'
  private privateKey = '0x1bfdd10e791617c7e8e9c7d0a451b45f1fcf07c831504d8f2fa0727a2b166cd2'
  
=======
  registeredUsers: Voter[];
  voter: Voter;

>>>>>>> 530021f893c78cf934db52cbd485d3853ee6ee19
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
    this.registeredUsers = {} as Voter[];
    this.electionName = '';
    this.adminState = '';
    this.electionID = '';
    // this.deployContract()
  }

  async contractAddVote() {
    
  }

  async deployContract() {
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
 
    const contract = await contractFactory.deploy("id", 99)

    await contract.deployed()
  
    const electionID = await contract.electionID()
    console.log("ID : " + electionID)
    const startDate = await contract.startDate()
    console.log("StartDate : " + startDate)
    

    const deployedContract = new ethers.Contract(contract.address, this.contractABI, signer)

    const tx = await deployedContract.updateId("NEW ID", {gasLimit : 250000})
    await tx.wait()

    console.log(await deployedContract.electionID())

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

<<<<<<< HEAD
  async saveElection(contractAddress) {
    let electionId = ""
   const electionRef = await addDoc(collection(this.firestore, 'elections'), {
      adminEmail : this.userEmail,
      ballots    : [this.ballot1, this.ballot2, this.ballot3],
      electionName : this.electionName,
      active : true,
      users  : this.registeredUsers,
      address : contractAddress
    }).then((ref)  =>  {
      this.mapAdminToElection(ref);
      electionId = ref.id
    }).then(async ()  =>  {
      await this.fetchElections()
    })
=======
  async saveVoter(v: Voter) {
    const voter = {
                    name: v.birthName,
                    surname: v.surname,
                    gender: v.Gender,
                    id: v.IDnum
                  };
    const electionRef = await addDoc(collection(this.firestore, 'voters'), {
      voter
    });
  }

  async mapAdminToElection(ref) {
    // const id = ref.id
>>>>>>> 530021f893c78cf934db52cbd485d3853ee6ee19

    return electionId
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

<<<<<<< HEAD
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
=======
  addvoter(nvoter: Voter) {
    this.saveVoter(nvoter);
  }

  createVoter(name, surname, id, gender) {
    this.voter = new Voter();
    this.voter.Voter(name, surname, id, gender);
    return this.voter;
  }

  findvoter(v: Voter) {
    for (let index = 0; index < this.registeredUsers.length; index++) {
      const element = this.registeredUsers[index];
      if (element == v) {
        return true;
      }
      if (index == this.registeredUsers.length-1 && element != v) {
        return false;
      }
    }
  }
>>>>>>> 530021f893c78cf934db52cbd485d3853ee6ee19
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
