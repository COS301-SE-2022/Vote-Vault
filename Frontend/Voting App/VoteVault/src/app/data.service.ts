import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { AdminLoginPageRoutingModule } from './admin-login/admin-login-routing.module';
import {ethers} from 'ethers';
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
    // this.deploy()
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
