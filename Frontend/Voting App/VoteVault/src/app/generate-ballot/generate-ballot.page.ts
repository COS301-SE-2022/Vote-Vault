import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, MenuController } from '@ionic/angular';
import { DataService } from '../data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-generate-ballot',
  templateUrl: './generate-ballot.page.html',
  styleUrls: ['./generate-ballot.page.scss'],
})


export class GenerateBallotPage implements OnInit {

  @ViewChild('slides' , {  static: true })  slides: IonSlides
  slideIndex : number = 0
  options : any[]
  optionInput : string = ""
  name : string = ""
  surname : string = ""
  idNum : string = ""
  ballot1Options : any[]
  ballot2Options : any[]
  ballot3Options : any[]
  ballotName : string = ""
  ballotName1 : string = ""
  ballotName2 : string = ""
  electionTitle : string = ""

  constructor(private menu : MenuController, private toastController: ToastController, private router : Router, private dataService : DataService) { }

  ngOnInit() {
    this.options = []
    this.ballot1Options = []
    this.ballot2Options = []
    this.ballot3Options = []
  }

  addOption() : void {
    const newCandidate = {"name" : this.name, "surname" : this.surname, "id" : this.idNum, "isChecked" : false}

    //Add option to correct ballot
    this.dataService.addOption(newCandidate, this.slideIndex)
    switch(this.slideIndex) {
      case 0: {
        this.ballot1Options = this.dataService.getOptions(this.slideIndex)
        break
      }
      case 1: {
        this.ballot2Options = this.dataService.getOptions(this.slideIndex)
        console.log("HERE")
        break
      }
      case 2: {
        this.ballot3Options = this.dataService.getOptions(this.slideIndex)
        break
      }
    }
    // console.log(this.ballot1Options)
    // console.log(this.ballot2Options)
    this.name = ""
    this.surname = ""
    this.idNum = ""
    this.toast_addUser();
  }

  generate() : void {
    this.dataService.saveElectionName(this.electionTitle)
    this.router.navigate(['/ballot'])
  }

  ionSlidesDidLoad(slides) {
    slides.getActiveIndex().then((index : number) => {
      this.slideIndex = index
      // console.log(this.slideIndex)
      this.options = this.dataService.getOptions(this.slideIndex)
    });
  }

  saveBallotName() : void {
    switch(this.slideIndex) {
      case 0:{
        this.dataService.saveBallotName(this.ballotName, this.slideIndex)
        break;
      }
      case 1:{
        this.dataService.saveBallotName(this.ballotName1, this.slideIndex)
        break;
      }
      case 2:{
        this.dataService.saveBallotName(this.ballotName2, this.slideIndex)
        break;
      }
    }
    this.toast_saveButton();
  }

  async toast_saveButton() {
    const toast = await this.toastController.create({
      duration: 800,
      message: 'Ballot saved succesfully',
      color: 'light',
      mode: 'ios'
    });

    await toast.present();
  }

  async toast_addUser() {
    const toast = await this.toastController.create({
      duration: 800,
      message: 'User added successfully',
      color: 'light',
      mode: 'ios'
    });

    await toast.present();
  }
  
  openCustom() {
    this.router.navigate(['admin-dashboard'])
  }

  navigate(s) {
    this.router.navigate([s])
  }

}
