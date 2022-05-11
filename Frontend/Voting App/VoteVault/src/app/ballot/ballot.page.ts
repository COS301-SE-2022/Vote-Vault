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
  ballot1 : any
  ballot2 : any
  ballot3 : any
  slideIndex : number

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.options = this.dataService.electionOptions
    this.ballot1 = this.dataService.getBallot(0)
    console.log(this.ballot1)
    this.ballot2 = this.dataService.getBallot(1)
    this.ballot3 = this.dataService.getBallot(2)

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

  ionSlidesDidLoad(slides) {
    slides.getActiveIndex().then((index : number) => {
      this.slideIndex = index
      console.log(this.slideIndex)
    });
  }

}
