import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import {ContractFactory, ethers, providers} from 'ethers';
import { environment } from 'src/environments/environment';

declare let window : any;

interface Ballot {
  name: string;
  options: any[];
}

interface Election {
  adminEmail? : string
  electionName : string
  id? : string
  ballots : any[]
  // adminEmail : string
  users : any[]
  voted : any[]
  address : string
  active? : boolean
}

export class Voter {
  birthName: String;
  surname: String;
  IDnum: String;
  Gender: String;
  Age : Number
  Voted : boolean
  Voter(n, sn, id, g) {
    this.birthName = n;
    this.surname = sn;
    this.IDnum = id;
    this.Gender = g;
    this.Voted = false;
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
  registeredUsers: any[];
  adminState : string;
  electionID : string
  voter: Voter;
  voters: any[];
  contractAddress : string
  voterId : string
  maleCount: number;
  femaleCount: number;
  agesArray: any[];
  yearBornFromID: number;

  //Contract variables
  contractABI = ''
  contractBytecode = ''
  privateKey = ''
  alcProvider = null
  signer = null

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
    this.voter = null;
    this.contractAddress = '';
    this.voterId = '';
    this.maleCount = 0;
    this.femaleCount = 0;
    this.agesArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];


    //Contract 
    this.contractABI = environment.contractABI
    this.contractBytecode = environment.contractBytecode
    this.privateKey = environment.privateKey

    this.alcProvider = new ethers.providers.AlchemyProvider("goerli", "OvCjMEF-_qv95PPGX2i14JE1A-3nSIl8")

    this.signer = new ethers.Wallet(this.privateKey, this.alcProvider)
  }

  setAdminState(s) {
    this.adminState = s
  }

  async fetchAllElections() {
    this.maleCount = 0;
    this.femaleCount = 0;
    for (let index = 0; index < this.agesArray.length; index++) {
      this.agesArray[index] = 0;
    }
    const colRef = collection(this.firestore, 'elections')
    const electionsSnap = await getDocs(colRef)

    let elections = []
    electionsSnap.forEach(doc =>  {
      const e = {} as Election
      // console.log(doc.data())
      e.ballots = doc.data()['ballots']
      e.users   = doc.data()['users']
      e.electionName = doc.data()['electionName']
      e.id = doc.id
      e.voted = doc.data()['voted']
      e.address = doc.data()['address']
      // console.log(doc.data().election)

      e.users.forEach(element => {
        if (element.gender === "M") this.maleCount++;
        if (element.gender === "F") this.femaleCount++;

        // Getting the age from the doc.id, by NOT calculating the current date correctly
        // TODO: calculate the current date correctly
        this.yearBornFromID = 2000 + parseInt(element.id.substring(0,2)); // I know this is sloppy

        // sloppy switch statement inbound :(
        const aproxAge = 2022 - this.yearBornFromID;

        console.log(aproxAge);


        switch (true) {
          case (aproxAge > 99 && aproxAge < 105): {
            this.agesArray[8]++;
            break;
          }
          case (aproxAge > 89): {
            this.agesArray[7]++;
            break;
          }
          case (aproxAge > 79): {
            this.agesArray[6]++;
            break;
          }
          case (aproxAge > 69): {
            this.agesArray[5]++;
            break;
          }
          case (aproxAge > 59): {
            this.agesArray[4]++;
            break;
          }
          case (aproxAge > 49): {
            this.agesArray[3]++;
            break;
          }
          case (aproxAge > 39): {
            this.agesArray[2]++;
            break;
          }
          case (aproxAge > 29): {
            this.agesArray[1]++;
            break;
          }
          case (aproxAge > 18): {
            this.agesArray[0]++;
            break;
          }
        }
      });

      elections.push(e)
    })

    console.log(this.maleCount);
    console.log(this.agesArray);


    return this.maleCount;
  }

  async fetchElections() {
    this.elections = []
    //TODO: Fetch elections for signed in user
    const adminRef = doc(this.firestore, 'admins', 'ssdpressed@gmail.com')
    const adminSnap = await getDoc(adminRef)

    if (adminSnap.exists()) {
      console.log("Document data:", adminSnap.data());
      const election_id_array = adminSnap.data()['elections']

      election_id_array.forEach(async (id)  =>  {
        try{
        //Retrieve Election
        const electionSnap = await getDoc(doc(this.firestore, 'elections', id))
        const e = {} as Election
        // console.log(doc.data())
        e.ballots = electionSnap.data()['ballots']
        e.users   = electionSnap.data()['users']
        e.electionName = electionSnap.data()['electionName']
        e.id = electionSnap.id
        e.voted = electionSnap.data()['voted']
        e.address = electionSnap.data()['address']
        // console.log(doc.data().election)
        this.elections.push(e)
        } catch(e) {
          console.error(e)
        }
      }).catch(e => {
        console.error(e)
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
    this.contractAddress = e.address
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

  async saveElection(contractAddress) {
    let electionId = ""
   const electionRef = await addDoc(collection(this.firestore, 'elections'), {
      adminEmail : this.userEmail,
      ballots    : [this.ballot1, this.ballot2, this.ballot3],
      electionName : this.electionName,
      active : true,
      users  : this.registeredUsers,
      address : contractAddress,
      voted : []
    }).then((ref)  =>  {
      this.mapAdminToElection(ref);
      electionId = ref.id
      const e = {} as Election
      e.adminEmail =  this.userEmail
      e.ballots = [this.ballot1, this.ballot2, this.ballot3]
      e.electionName = this.electionName
      e.active = true
      e.users = this.registeredUsers
      e.address = contractAddress
      e.voted = []
      e.id = ref.id
      this.elections.push(e)
    }).then(async ()  =>  {
      // await this.fetchElections()
    })

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

  async addvoter(nvoter: Voter) {
    await this.saveVoter(nvoter);
  }

  createVoter(name, surname, id, gender) {
    this.voter = new Voter();
    this.voter.Voter(name, surname, id, gender);
    return this.voter;
  }

  async saveVoter(v: Voter) {
    const voter = {
                    name: v.birthName,
                    surname: v.surname,
                    gender: v.Gender,
                    id: v.IDnum,
                    voted: v.Voted
                  };
    const electionRef = await addDoc(collection(this.firestore, 'voters'), {
      voter
    });


    //Save to elections collection
    const elRef = doc(this.firestore, 'elections' , this.electionID)
    const elSnap = await getDoc(elRef)
    if(elSnap.exists()) {
      await updateDoc(elRef, {
        users: arrayUnion(voter)
      })
    }
  }

  async deleteElection(id) {
    await deleteDoc(doc(this.firestore, "elections", id));
  }

  async setVote(v: Voter) {
    let found: Boolean;
    found = false;
    let i: number;
    i = -1;
    const registeredIDs = doc(this.firestore, 'elections' , this.electionID);
    const getrefID = await getDoc(registeredIDs);
    const idfound = {};
    try {
      for (let index = 0; index < getrefID.data()['users'].length; index++) {
        if (v.IDnum === getrefID.data()['users'][index].id) {
          found = true;
          v.Voted = true;
          getrefID.data()['users'][index].voted = true;
          i = index;
          throw idfound;
        }
        if (found == true) {
          alert('shouldnt reach this');
          throw idfound;
        }

      }
    } catch (error) {

    }


  }

  async checkVoted(v: Voter) {
    let found: Boolean;
    found = false;
    const registeredIDs = doc(this.firestore, 'elections' , this.electionID);
    const getrefID = await getDoc(registeredIDs);
    const idfound = {};
    try {
      for (let index = 0; index < getrefID.data()['users'].length; index++) {
        if (v.IDnum === getrefID.data()['voted'][index].id) {
          found = true;
          throw idfound;
        }
        if (found == true) {
          alert('shouldnt reach this');
          throw idfound;
        }
      }
    } catch (error) {
      return true;
    }

    return false;
  }

  async getMaleCount() {
    let found: Boolean;
    found = false;
    const registeredIDs = doc(this.firestore, 'elections' , this.electionID);
    const getrefID = await getDoc(registeredIDs);
    const idfound = {};
    console.log(getrefID.data());

    try {
      for (let index = 0; index < getrefID.data()['users'].length; index++) {
        console.log("jj");

        if ("0101235094081" === getrefID.data()['voted'][index].id) {
          found = true;
          throw idfound;
        }
        if (found == true) {
          alert('shouldnt reach this');
          throw idfound;
        }
      }
    } catch (error) {
      return true;
    }

    return false;
  }

  async vote(v: Voter) {
    const voter = {
      name: v.birthName,
      surname: v.surname,
      gender: v.Gender,
      id: v.IDnum,
      voted: true
    };

//Save to elections collection under voted
    const elRef = doc(this.firestore, 'elections' , this.electionID)
    const elSnap = await getDoc(elRef)
    if(elSnap.exists()) {
      await updateDoc(elRef, {
      voted: arrayUnion(voter)
    })
    }
  }
}
