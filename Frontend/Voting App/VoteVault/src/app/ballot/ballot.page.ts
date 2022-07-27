import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Location } from "@angular/common";
import { ContractService } from '../services/contract.service';

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
  slideIndex : number = 0
  votes : any[]
  constructor(private contractService : ContractService, private location : Location, private menu : MenuController, private router : Router, private dataService : DataService, private toastController: ToastController) {
    this.votes = []
  }

  ngOnInit() {
    this.options = this.dataService.electionOptions
    this.ballot1 = this.dataService.getBallot(0)
    console.log(this.ballot1)
    this.ballot2 = this.dataService.getBallot(1)
    this.ballot3 = this.dataService.getBallot(2)
    this.selected = {}
  }

  selectCandidate(o) : void {
    if(this.selected != null)
      this.selected.isChecked = false
    this.selected = o
    this.selected.isChecked = true

  }

  async vote() {
    this.dataService.votes.push(this.selected)

    //Deploy vote to blockchain
    await this.contractService.addVote(this.dataService.contractAddress, this.votes)
    .then(()  =>  {
      this.toast_vote()
      this.location.back();
    })
    .catch((error)  =>  {
      console.error(error)
    })

    this.toast_vote()
    this.location.back();
  }

  ionSlidesDidLoad(slides) {
    slides.getActiveIndex().then((index : number) => {
      this.slideIndex = index
      console.log(this.slideIndex)
    });
  }

  async toast_vote() {
    const toast = await this.toastController.create({
      duration: 800,
      message: 'Vote recorded',
      color: 'light',
      mode: 'ios'
    });

    await toast.present();
  }

  openCustom() {
    this.router.navigate(['voter-dashboard'])
  }

  navigate(s) {
    this.router.navigate([s])
  }

  ballot1Index(i) {
    this.votes[0] = i
  }

  ballot2Index(i) {
    this.votes[1] = i
  }

  ballot3Index(i) {
    this.votes[2] = i
  }

}
