import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import {ContractFactory, ethers, providers} from 'ethers';
import { environment } from 'src/environments/environment';
import { HighlightSpanKind } from 'typescript';

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
  pastElections : Election[] = []
  predictionsArray : any[4]

  // declaration of arrays for each major political party - predictions for national elections
  ageBasedANC : any[9];
  ageBasedDA : any[9];
  ageBasedEFF : any[9];
  ageBasedVFP : any[9];

  genderBasedANC : any[2];
  genderBasedDA : any[2];
  genderBasedEFF : any[2];
  genderBasedVFP : any[2];

  stillToVoteAges : any[9];

  // ageReults is a matrix first containing the parties and then containing the age groups, in the order:
  // ANC, DA, EFF, VFP
  // 18, 25, 30, etc
  // ageResults : any[][] = [];
  ageResults = new Array(4).fill(0).map(() => new Array(9).fill(0));


  // genderResults is a matrix that first contains the values of the parties and then each gender, in the order:
  // ANC, DA, EFF, VFP
  // F, M
  genderResults : any[4][2];
  totalUserCount: any;

  constructor(private firestore: Firestore) {
   
    this.voterId = '';
    this.maleCount = 0;
    this.femaleCount = 0;
    this.agesArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.elections = [];

    this.totalUserCount = 0;

    //Contract 
    this.contractABI = environment.contractABI
    this.contractBytecode = environment.contractBytecode
    this.privateKey = environment.privateKey

    this.alcProvider = new ethers.providers.AlchemyProvider("goerli", "OvCjMEF-_qv95PPGX2i14JE1A-3nSIl8")

    this.signer = new ethers.Wallet(this.privateKey, this.alcProvider)

    // TODO: populate probability arrays with mock values --> DONE
    this.ageBasedANC = [0.1, 0.5, 0.2, 0.4, 0.6, 0.8, 0.9, 0.7, 0.5];
    this.ageBasedDA = [0.1, 0.5, 0.2, 0.4, 0.6, 0.8, 0.9, 0.7, 0.5];
    this.ageBasedEFF = [0.1, 0.5, 0.2, 0.4, 0.6, 0.8, 0.9, 0.7, 0.5];
    this.ageBasedVFP = [0.1, 0.5, 0.2, 0.4, 0.6, 0.8, 0.9, 0.7, 0.5];

    // this.ageResults[0][0] = 0;
    // for (let i = 0; i < 4; i++) {
    //   for (let j = 0; j < 9; j++) {
    //     this.ageResults[i][j] = 0;
    //   }
    // }
    
  }

  calculateProbabilities() {
    // TODO: get values that states how many voters registered for each age group and how many of them have voted already --> DONE
    // currently using mock data
    // 18 29 39 49 59 69 79 89 99
    // let votersRemaining18 = 9000;
    // let votersRemaining29 = 9000;
    // let votersRemaining39 = 9000;
    // let votersRemaining49 = 9000;
    // let votersRemaining59 = 9000;
    // let votersRemaining69 = 9000;
    // let votersRemaining79 = 9000;
    // let votersRemaining89 = 9000;
    // let votersRemaining99 = 9000;

    let votedANC = 0;
    let votedDA = 0;
    let votedEFF = 0;
    let votedVFP = 0;

    // Formula for ANC, since ANC is the first row according to how the matrix was set up
    this.ageResults[0][0] = this.ageBasedANC[0] * this.stillToVoteAges[0];
    this.ageResults[0][1] = this.ageBasedANC[1] * this.stillToVoteAges[1];
    this.ageResults[0][2] = this.ageBasedANC[2] * this.stillToVoteAges[2];
    this.ageResults[0][3] = this.ageBasedANC[3] * this.stillToVoteAges[3];
    this.ageResults[0][4] = this.ageBasedANC[4] * this.stillToVoteAges[4];
    this.ageResults[0][5] = this.ageBasedANC[5] * this.stillToVoteAges[5];
    this.ageResults[0][6] = this.ageBasedANC[6] * this.stillToVoteAges[6];
    this.ageResults[0][7] = this.ageBasedANC[7] * this.stillToVoteAges[7];
    this.ageResults[0][8] = this.ageBasedANC[8] * this.stillToVoteAges[8];

    let calcPredictionANC = 0;
    for (let i = 0; i < 9; i++) {
      calcPredictionANC += this.ageResults[0][i];
    }

    let finalPredictionANC = (votedANC + calcPredictionANC) / this.totalUserCount;

    
    // Formula for DA, since DA is the second row according to how the matrix was set up
    this.ageResults[1][0] = this.ageBasedDA[0] * this.stillToVoteAges[0];
    this.ageResults[1][1] = this.ageBasedDA[1] * this.stillToVoteAges[1];
    this.ageResults[1][2] = this.ageBasedDA[2] * this.stillToVoteAges[2];
    this.ageResults[1][3] = this.ageBasedDA[3] * this.stillToVoteAges[3];
    this.ageResults[1][4] = this.ageBasedDA[4] * this.stillToVoteAges[4];
    this.ageResults[1][5] = this.ageBasedDA[5] * this.stillToVoteAges[5];
    this.ageResults[1][6] = this.ageBasedDA[6] * this.stillToVoteAges[6];
    this.ageResults[1][7] = this.ageBasedDA[7] * this.stillToVoteAges[7];
    this.ageResults[1][8] = this.ageBasedDA[8] * this.stillToVoteAges[8];

    let calcPredictionDA = 0;
    for (let i = 0; i < 9; i++) {
      calcPredictionDA += this.ageResults[1][i];
    }

    let finalPredictionDA = (votedDA + calcPredictionDA) / this.totalUserCount;

    // Formula for EFF, since EFF is the third row according to how the matrix was set up
    this.ageResults[2][0] = this.ageBasedEFF[0] * this.stillToVoteAges[0];
    this.ageResults[2][1] = this.ageBasedEFF[1] * this.stillToVoteAges[1];
    this.ageResults[2][2] = this.ageBasedEFF[2] * this.stillToVoteAges[2];
    this.ageResults[2][3] = this.ageBasedEFF[3] * this.stillToVoteAges[3];
    this.ageResults[2][4] = this.ageBasedEFF[4] * this.stillToVoteAges[4];
    this.ageResults[2][5] = this.ageBasedEFF[5] * this.stillToVoteAges[5];
    this.ageResults[2][6] = this.ageBasedEFF[6] * this.stillToVoteAges[6];
    this.ageResults[2][7] = this.ageBasedEFF[7] * this.stillToVoteAges[7];
    this.ageResults[2][8] = this.ageBasedEFF[8] * this.stillToVoteAges[8];

    let calcPredictionEFF = 0;
    for (let i = 0; i < 9; i++) {
      calcPredictionEFF += this.ageResults[2][i];
    }

    let finalPredictionEFF = (votedEFF + calcPredictionEFF) / this.totalUserCount;
          
    // Formula for VFP, since VFP is the second row according to how the matrix was set up
    this.ageResults[3][0] = this.ageBasedVFP[0] * this.stillToVoteAges[0];
    this.ageResults[3][1] = this.ageBasedVFP[1] * this.stillToVoteAges[1];
    this.ageResults[3][2] = this.ageBasedVFP[2] * this.stillToVoteAges[2];
    this.ageResults[3][3] = this.ageBasedVFP[3] * this.stillToVoteAges[3];
    this.ageResults[3][4] = this.ageBasedVFP[4] * this.stillToVoteAges[4];
    this.ageResults[3][5] = this.ageBasedVFP[5] * this.stillToVoteAges[5];
    this.ageResults[3][6] = this.ageBasedVFP[6] * this.stillToVoteAges[6];
    this.ageResults[3][7] = this.ageBasedVFP[7] * this.stillToVoteAges[7];
    this.ageResults[3][8] = this.ageBasedVFP[8] * this.stillToVoteAges[8];

    let calcPredictionVFP = 0;
    for (let i = 0; i < 9; i++) {
      calcPredictionVFP += this.ageResults[3][i];
    }

    let finalPredictionVFP = (votedVFP + calcPredictionVFP) / this.totalUserCount;

    // TODO: do something with all the finalPredictionsPARTYNAMEHERE results, like return it as an array of predictions --> DONE
    // This is temporary i guess
    this.predictionsArray[0] = finalPredictionANC
    this.predictionsArray[1] = finalPredictionDA
    this.predictionsArray[2] = finalPredictionEFF
    this.predictionsArray[3] = finalPredictionVFP

    console.log(this.predictionsArray);
    console.log('hey')
  }


  async getElectionResults(contractAddress:  string) : Promise<number[]>{
    let votes = []
    const contract = new ethers.Contract(contractAddress, this.contractABI, this.alcProvider)

    console.log("GETTING VOTES...")
    var result = await contract.getVotes1()
    votes.push(result)
    console.log(result[0].toNumber())
    console.log(result[1].toNumber())
    console.log(result[2].toNumber())

    var result1 = await contract.getVotes2()
    votes.push(result1)
    console.log(result1[0].toNumber())
    console.log(result1[1].toNumber())
    console.log(result1[2].toNumber())

    var result2 = await contract.getVotes3()
    votes.push(result2)
    console.log(result2[0].toNumber())
    console.log(result2[1].toNumber())
    console.log(result2[2].toNumber())

    return votes
  }

  findWinnerIndex(voterArray : number[]) : number {
    let max = 0
    for(let i = 0; i < voterArray.length; i++) {
      if(voterArray[i] > max)
        max = i
    }
    return max
  }

  async fetchPastElections() : Promise<Election[]> {
    const colRef = collection(this.firestore, 'closed_elections')
    const electionsSnap = await getDocs(colRef)

    let pastElections = []
    electionsSnap.forEach((doc)  =>  {
      const e = {} as Election
      e.ballots = doc.data().ballots
      e.address = doc.data().address
      e.electionName = doc.data().electionName
      e.users = doc.data().users

      pastElections.push(e)
    })
    this.pastElections = pastElections
    return pastElections
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
        this.totalUserCount++;

        // Getting the age from the doc.id, by NOT calculating the current date correctly
        // TODO: calculate the current date correctly
        this.yearBornFromID = 2000 + parseInt(element.id.substring(0,2)); // I know this is sloppy

        // sloppy switch statement inbound :(
        const aproxAge = 2022 - this.yearBornFromID;

        console.log(aproxAge);
        

        switch (true) {
          case (aproxAge > 99 && aproxAge < 105): {
            this.agesArray[8]++;
            if (element.voted) this.stillToVoteAges[8]++;
            break;
          }
          case (aproxAge > 89): {
            this.agesArray[7]++;
            if (element.voted) this.stillToVoteAges[7]++;
            break;
          }
          case (aproxAge > 79): {
            this.agesArray[6]++;
            if (element.voted) this.stillToVoteAges[6]++;
            break;
          }
          case (aproxAge > 69): {
            this.agesArray[5]++;
            if (element.voted) this.stillToVoteAges[5]++;
            break;
          }
          case (aproxAge > 59): {
            this.agesArray[4]++;
            if (element.voted) this.stillToVoteAges[4]++;
            break;
          }
          case (aproxAge > 49): {
            this.agesArray[3]++;
            if (element.voted) this.stillToVoteAges[3]++;
            break;
          }
          case (aproxAge > 39): {
            this.agesArray[2]++;
            if (element.voted) this.stillToVoteAges[2]++;
            break;
          }
          case (aproxAge > 29): {
            this.agesArray[1]++;
            if (element.voted) this.stillToVoteAges[1]++;
            break;
          }
          case (aproxAge > 18): {
            this.agesArray[0]++;
            if (element.voted) this.stillToVoteAges[0]++;
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
        console.log(doc.data())
        elections.push(e)
      })
      this.elections = elections
      return elections

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
