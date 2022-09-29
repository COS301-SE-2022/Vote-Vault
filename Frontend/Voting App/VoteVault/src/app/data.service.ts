import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { AdminLoginPageRoutingModule } from './admin-login/admin-login-routing.module';
import {ContractFactory, ethers, providers} from 'ethers';
import { hrtime } from 'process';

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
    // this.deployContract()
  }

  setAdminState(s) {
    this.adminState = s
  }

  async fetchAllElections() : Promise<any[]> {
    const colRef = collection(this.firestore, 'elections')
    const electionsSnap = await getDocs(colRef)

    let elections = []
    electionsSnap.forEach(doc =>  {
      const e = {} as Election
      // console.log(doc.data())
      e.ballots = doc.data().ballots
      e.users   = doc.data().users
      e.electionName = doc.data().electionName
      e.id = doc.id
      e.voted = doc.data().voted
      e.address = doc.data().address
      // console.log(doc.data().election)
      elections.push(e)
    })
    return elections
  }

  async fetchElections() {
    this.elections = []
    //TODO: Fetch elections for signed in user
    const adminRef = doc(this.firestore, 'admins', 'ssdpressed@gmail.com')
    const adminSnap = await getDoc(adminRef)

    if (adminSnap.exists()) {
      console.log("Document data:", adminSnap.data());
      const election_id_array = adminSnap.data().elections

      election_id_array.forEach(async (id)  =>  {
        try{
        //Retrieve Election
        const electionSnap = await getDoc(doc(this.firestore, 'elections', id))
        const e = {} as Election
        // console.log(doc.data())
        e.ballots = electionSnap.data().ballots
        e.users   = electionSnap.data().users
        e.electionName = electionSnap.data().electionName
        e.id = electionSnap.id
        e.voted = electionSnap.data().voted
        e.address = electionSnap.data().address
        // console.log(doc.data().election)
        this.elections.push(e)
        } catch(e) {
          //console.error(e)
        }
      })

    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

  }

  async checkVoters(idnum: String): Promise<Boolean> {
    let found: Boolean;
    found = false;
    const registeredIDs = doc(this.firestore, 'elections' , this.electionID);
    const getrefID = await getDoc(registeredIDs);
    const idfound = {};
    try {
      for (let index = 0; index < getrefID.data().users.length; index++) {
        if (idnum === getrefID.data().users[index].id) {
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

    if (found == false) {
      return false;
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
    const elRef = doc(this.firestore, "elections", id)
    const elSnap = await getDoc(elRef)
    if(elSnap.exists()) {
      await addDoc(collection(this.firestore, "closed_elections"), {
        active: false,
        address : elSnap.data().address,
        adminEmail : elSnap.data().adminEmail,
        ballots : elSnap.data().ballots,
        electionName: elSnap.data().electionName,
        users : elSnap.data().users
      }).then(async ()  =>  {
        await deleteDoc(doc(this.firestore, "elections", id));
      })
    }
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
      for (let index = 0; index < getrefID.data().users.length; index++) {
        if (v.IDnum === getrefID.data().users[index].id) {
          found = true;
          v.Voted = true;
          getrefID.data().users[index].voted = true;
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
      for (let index = 0; index < getrefID.data().users.length; index++) {
        if (v.IDnum === getrefID.data().voted[index].id) {
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
