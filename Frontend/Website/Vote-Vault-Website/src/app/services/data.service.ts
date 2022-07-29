import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';


interface Election {
  electionName : string
  id? : number
  ballots : any[]
  // adminEmail : string
  users : any[]
  address : string
}

@Injectable({
    providedIn: 'root'
  })
  

export class DataService  {
    private election;
    private maleCount = 0;
    private femaleCount = 0;
    private genderCounts = [];
    public elections = []
    constructor(private firestore : Firestore) { }

    

    async fetchAllElections() {
        const colRef = collection(this.firestore, 'elections')
        const electionsSnap = await getDocs(colRef)

        electionsSnap.forEach(doc =>  {
        // console.log(doc.data().election)
        this.elections.push(doc.data())
        })
        // return elections

    }
    
    setElection(e) {
        this.election = e;
    }

    getGenderData() {
        this.election.users.forEach(voter => {
            if (voter.gender == 'M') this.maleCount++;
            else this.femaleCount++;
            return this.genderCounts[this.maleCount, this.femaleCount];
        });
        

        
    }
}
