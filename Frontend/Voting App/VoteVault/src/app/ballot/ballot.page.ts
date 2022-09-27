import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Location } from "@angular/common";
import { ContractService } from '../services/contract.service';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.page.html',
  styleUrls: ['./ballot.page.scss'],
})
export class BallotPage implements OnInit {
  selected : any[]
  options : any[]
  ballot1 : any
  ballot2 : any
  ballot3 : any
  slideIndex : number = 0
  votes : any[]
  constructor(private loadingController : LoadingController, private contractService : ContractService, private location : Location, private menu : MenuController, private router : Router, private dataService : DataService, private toastController: ToastController) {
    this.votes = []
  }

  ngOnInit() {
    this.options = this.dataService.electionOptions
    this.ballot1 = this.dataService.getBallot(0)
    console.log(this.ballot1)
    this.ballot2 = this.dataService.getBallot(1)
    this.ballot3 = this.dataService.getBallot(2)
    this.selected = [-1,-1,-1]

    console.log(this.dataService.contractAddress)
  }

  selectCandidate(o) : void {
    console.log(this.ballot1)
    if(this.selected[this.slideIndex] != -1) {
      this.selected[this.slideIndex].isChecked = false
      this.selected[this.slideIndex] = o
      this.selected[this.slideIndex].isChecked = true
    }
    else {
      this.selected[this.slideIndex] = o
      this.selected[this.slideIndex].isChecked = true
    }


  }

  async vote() {
    this.presentLoading()
    this.dataService.votes.push(this.selected)
    console.log(this.votes)
    //Deploy vote to blockchain
    await this.contractService.addVote(this.dataService.contractAddress, this.votes)
    .then(async ()  =>  {
      this.loadingController.dismiss()
      this.toast_vote('You voted!')
      this.location.back();
    })
    .catch((error)  =>  {
      this.toast_vote('Error recording vote')
      this.loadingController.dismiss()
      console.error(error)
    })
  }

  ionSlidesDidLoad(slides) {
    slides.getActiveIndex().then((index : number) => {
      this.slideIndex = index
    });
  }

  async toast_vote(message) {
    const toast = await this.toastController.create({
      duration: 800,
      message: message,
      color: 'light',
      mode: 'ios'
    });

    await toast.present();
  }

  openCustom() {
    this.location.back();
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

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 30000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
