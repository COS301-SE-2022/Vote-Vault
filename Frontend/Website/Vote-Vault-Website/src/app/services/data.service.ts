import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})

interface Election {
  electionName : string
  id? : number
  ballots : any[]
  // adminEmail : string
  users : any[]
  address : string
}

export class DataService  {

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
}
