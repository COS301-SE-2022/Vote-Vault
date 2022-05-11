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
    if(this.selected != null)
      this.selected.isChecked = false
    this.selected = o
    this.selected.isChecked = true

  }

  vote() : void {
    this.dataService.votes.push(this.selected)
  }
}
