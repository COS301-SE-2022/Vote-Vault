import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, arrayUnion, collection, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';

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
  }

  setAdminState(s) {
    this.adminState = s
  } 

  async fetchElections() {
    this.elections = []
    const querySnapshot = await getDocs(collection(this.firestore, 'elections'))
    querySnapshot.forEach((doc) =>  {
      const e = {} as Election
      // console.log(doc.data())
      e.ballots = doc.data().ballots 
      e.users   = doc.data().users
      e.electionName = doc.data().electionName
      e.id = doc.id
      // console.log(doc.data().election)
      this.elections.push(e)
    })
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
    })
  }

  async saveElection() {
    //Create election object and save to firestore
    // const election = {
      
    //                 };

    //Attributes : this.userEmail, electiontitle, ballotOptions, ballotNames
    const electionRef = await addDoc(collection(this.firestore, 'elections'), {
      adminEmail : this.userEmail,
      ballots    : [this.ballot1, this.ballot2, this.ballot3],
      electionName : this.electionName,
      active : true,
      users  : this.registeredUsers
    }).then((ref)  =>  {
      this.fetchElections()
      
      //Add to admin elections
      this.mapAdminToElection(ref);
    })
  }

  async mapAdminToElection(ref) {
    console.log(ref.id)
    const id = ref.id

    const adminRef = doc(this.firestore, 'admins' , this.userEmail)

    await updateDoc(adminRef, {
      elections: arrayUnion(id)
    })
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
}
