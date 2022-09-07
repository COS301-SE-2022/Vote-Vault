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

  electionID : string
  voterId : string
  maleCount: number;
  femaleCount: number;
  agesArray: any[];
  yearBornFromID: number;
  elections : Election[];
  //Contract variables
  contractABI = ''
  contractBytecode = ''
  privateKey = ''
  alcProvider = null
  signer = null

  constructor(private firestore: Firestore) {
   
    this.voterId = '';
    this.maleCount = 0;
    this.femaleCount = 0;
    this.agesArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.elections = [];

    //Contract 
    this.contractABI = environment.contractABI
    this.contractBytecode = environment.contractBytecode
    this.privateKey = environment.privateKey

    this.alcProvider = new ethers.providers.AlchemyProvider("goerli", "OvCjMEF-_qv95PPGX2i14JE1A-3nSIl8")

    this.signer = new ethers.Wallet(this.privateKey, this.alcProvider)


  }


  async getElectionResults(contractAddress:  string) {
    const contract = new ethers.Contract(contractAddress, this.contractABI, this.alcProvider)

    console.log("GETTING VOTES...")
    var result = await contract.getVotes1()
    console.log(result[0].toNumber())
    console.log(result[1].toNumber())
    console.log(result[2].toNumber())

    var result1 = await contract.getVotes2()
    console.log(result1[0].toNumber())
    console.log(result1[1].toNumber())
    console.log(result1[2].toNumber())

    var result2 = await contract.getVotes3()
    console.log(result2[0].toNumber())
    console.log(result2[1].toNumber())
    console.log(result2[2].toNumber())
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

}
