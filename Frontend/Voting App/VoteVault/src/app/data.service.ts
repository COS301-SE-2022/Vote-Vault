import { Injectable } from '@angular/core';

interface Ballot {
  name: string,
  options: any[]
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  electionOptions : any[]
  ballot1         : Ballot
  ballot2         : Ballot
  ballot3         : Ballot
  votes           : any[]

  constructor() { 
    this.electionOptions = []
    this.ballot1 = {} as Ballot
    this.ballot2 = {} as Ballot
    this.ballot3 = {} as Ballot
    this.ballot1.options = []
    this.ballot1.name = ""
    this.ballot2.options = []
    this.ballot2.name = ""
    this.ballot3.options = []
    this.ballot3.name = ""
    this.votes = []
  }

  addOption(o, i) {
    switch(i) {
      case 0:{
        this.ballot1.options.push(o)
        break
      }
      case 1: {
        this.ballot2.options.push(o)
        break
      }
      case 2: {
        this.ballot3.options.push(o)
        break
      }
    }
    console.log(this.ballot1)
  }

  getOptions(i) {
    switch(i) {
      case 0:{
        return this.ballot1.options
        break
      }
      case 1: {
        return this.ballot2.options
        break
      }
      case 2: {
        return this.ballot3.options
        break
      }
    }
  }

  getBallot(i) {
    switch(i) {
      case 0:{
        return this.ballot1
        break
      }
      case 1: {
        return this.ballot2
        break
      }
      case 2: {
        return this.ballot3
        break
      }
    }
  }

  saveBallotName(name, index) {
    switch(index) {
      case 0:{
        this.ballot1.name = name
        break
      }
      case 1: {
        this.ballot2.name = name
        break
      }
      case 2: {
        this.ballot3.name = name
        break
      }
    }
  }
}
