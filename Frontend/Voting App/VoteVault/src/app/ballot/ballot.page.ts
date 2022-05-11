import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.page.html',
  styleUrls: ['./ballot.page.scss'],
})
export class BallotPage implements OnInit {
  selected : any
  options : any[]

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.options = this.dataService.electionOptions
  }

  selectCandidate(o) : void {
    this.selected = o
  }

  vote() : void {
    this.dataService.votes.push(this.selected)
  }
}
