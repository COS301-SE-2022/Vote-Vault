import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  electionOptions : any[]
  votes           : any[]
  constructor() { 
    this.electionOptions = []
    this.votes = []
  }

  addOption(o) {
    this.electionOptions.push(o)
  }

}
