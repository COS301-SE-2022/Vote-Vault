import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.page.html',
  styleUrls: ['./ballot.page.scss'],
})
export class BallotPage implements OnInit {

  options : any[]

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.options = this.dataService.electionOptions
  }


}
