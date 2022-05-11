import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  electionOptions : any[]

  constructor() { 
    this.electionOptions = []
  }

  addOption(s : String) {
    this.electionOptions.push(s)
  }

}
