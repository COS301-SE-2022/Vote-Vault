import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-generate-ballot',
  templateUrl: './generate-ballot.page.html',
  styleUrls: ['./generate-ballot.page.scss'],
})
export class GenerateBallotPage implements OnInit {

  options : any[]
  optionInput : string
  constructor(private router : Router, private dataService : DataService) { }

  ngOnInit() {
    this.options = []
  }

  addOption() : void {
    this.dataService.addOption(this.optionInput)
    this.options = this.dataService.electionOptions
  }

  generate() : void {
    this.router.navigate(['/ballot'])
  }
}
