import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, arrayUnion, collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { VoterDashboardPage } from './voter-dashboard/voter-dashboard.page';

interface Ballot {
  name: string;
  options: any[];
}

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
  registeredUsers: Voter[];
  voter: Voter;
  adminState: string;
  electionID: string;
  privateKey: any;
  contractABI: any;
  contractBytecode: any;

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

    return electionId;
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
