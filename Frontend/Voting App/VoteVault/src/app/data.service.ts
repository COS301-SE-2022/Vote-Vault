import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { AdminLoginPageRoutingModule } from './admin-login/admin-login-routing.module';
import {ContractFactory, ethers} from 'ethers';

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
    const provider  = new ethers.providers.JsonRpcProvider('http:/\/127.0.0.1:7545')
    const signer = provider.getSigner('0x3bAe5160f49A31f7123246346E445aa65bE0e41F')
    const contractAddress = '0x76180da9F62ccDe81C5092CACa5818835FaD6900'
    const contractABI = '[{"constant":true,"inputs":[],"name":"startDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x0b97bc86"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"voteCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xba329414"},{"constant":true,"inputs":[],"name":"endDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc24a0f8b"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"voters","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xda58c7d9"},{"constant":true,"inputs":[],"name":"electionID","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf8e78e9a"},{"constant":false,"inputs":[{"name":"ballot","type":"uint256"},{"name":"candidate","type":"uint256"}],"name":"addVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xfcca991b"}]'
    const contractBytecode = '0x608060405234801561001057600080fd5b506102c0806100206000396000f3fe608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630b97bc861461007d578063ba329414146100a8578063c24a0f8b14610101578063da58c7d91461012c578063f8e78e9a1461017b578063fcca991b146101a6575b600080fd5b34801561008957600080fd5b506100926101eb565b6040518082815260200191505060405180910390f35b3480156100b457600080fd5b506100eb600480360360408110156100cb57600080fd5b8101908080359060200190929190803590602001909291905050506101f1565b6040518082815260200191505060405180910390f35b34801561010d57600080fd5b50610116610227565b6040518082815260200191505060405180910390f35b34801561013857600080fd5b506101656004803603602081101561014f57600080fd5b810190808035906020019092919050505061022d565b6040518082815260200191505060405180910390f35b34801561018757600080fd5b50610190610250565b6040518082815260200191505060405180910390f35b3480156101b257600080fd5b506101e9600480360360408110156101c957600080fd5b810190808035906020019092919080359060200190929190505050610256565b005b60025481565b60008281548110151561020057fe5b90600052602060002090600302018160038110151561021b57fe5b01600091509150505481565b60035481565b60048181548110151561023c57fe5b906000526020600020016000915090505481565b60015481565b600160008381548110151561026757fe5b90600052602060002090600302018260038110151561028257fe5b0160008282540192505081905550505056fea165627a7a7230582035601f1a47684fd1fe0ea95361e35dffd208a094a3bbe97b772e35299ffda4910029'
    const contract = new ethers.Contract(contractAddress, contractABI, provider)
  
    const contractFactory = new ContractFactory(contractABI, contractBytecode, signer)

    const deployTx = contractFactory.getDeployTransaction()

    console.log(await contractFactory.deploy())
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

  async deploy() {
    // const bytecode = compileContractWithParams()
    const itx = new ethers.providers.InfuraProvider(
      'ropsten',
      '0d3da94ec48e4067b87f4a8734912931'
    )

    const signer = new ethers.Wallet('1bfdd10e791617c7e8e9c7d0a451b45f1fcf07c831504d8f2fa0727a2b166cd2', itx)

    const tx = {
      to: ethers.constants.AddressZero,

      data: '0x', // + bytecode,

      gas: '1000000',

      schedule: 'fast,'
    }

    const relayTransactionHashToSign = ethers.utils.keccak256(
      ethers.utils.defaultAbiCoder.encode(
        ["address", "bytes", "uint", "uint", "string"],
        [tx.to, tx.data, tx.gas, 3, tx.schedule]
      )
    );

    const signature = await signer.signMessage(
      ethers.utils.arrayify(relayTransactionHashToSign)
    );

    const sentAtBlock = await itx.getBlockNumber();

    const { relayTransactionHash } = await itx.send("relay_sendTransaction", [
      tx,
      signature,
    ]);
    console.log(`ITX relay transaction hash: ${relayTransactionHash}`);

    console.log("Waiting to be mined...");
  while (true) {
    // fetches an object
    // { receivedTime: string, broadcasts?: [{broadcastTime: string, ethTxHash: string, gasPrice: string}]}
    const { broadcasts } = await itx.send("relay_getTransactionStatus", [
      relayTransactionHash,
    ]);

    // check each of these hashes to see if their receipt exists and
    // has confirmations
    if (broadcasts) {
      for (const broadcast of broadcasts) {
        const { ethTxHash, gasPrice } = broadcast;
        const receipt = await itx.getTransactionReceipt(ethTxHash);
        // printBump(ethTxHash, gasPrice); // Print bump

        if (receipt && receipt.confirmations && receipt.confirmations > 1) {
          // The transaction is now on chain!
          console.log(`Ethereum transaction hash: ${receipt.transactionHash}`);
          console.log(`Sent at block ${sentAtBlock}`);
          console.log(`Mined in block ${receipt.blockNumber}`);
          console.log(`Total blocks ${receipt.blockNumber - sentAtBlock}`);
          return;
        }
      }
    }
    await this.delay(1000);
  }
}


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
