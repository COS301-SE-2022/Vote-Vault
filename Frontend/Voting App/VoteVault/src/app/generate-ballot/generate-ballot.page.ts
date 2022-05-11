import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-generate-ballot',
  templateUrl: './generate-ballot.page.html',
  styleUrls: ['./generate-ballot.page.scss'],
})


export class GenerateBallotPage implements OnInit {

  @ViewChild('slides' , {  static: true })  slides: IonSlides
  slideIndex : number = 0
  options : any[]
  optionInput : string
  name : string
  surname : string
  idNum : string
  ballot1Options : any[]
  ballot2Options : any[]
  ballot3Options : any[]
  ballotName : string = ""

  constructor(private router : Router, private dataService : DataService) { }

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
    console.log(this.ballot1Options)
    console.log(this.ballot2Options)
    this.name = ""
    this.surname = ""
    this.idNum = ""
  }

  generate() : void {
    this.router.navigate(['/ballot'])
  }

  ionSlidesDidLoad(slides) {
    slides.getActiveIndex().then((index : number) => {
      this.slideIndex = index
      console.log(this.slideIndex)
      this.options = this.dataService.getOptions(this.slideIndex)
    });
  }

  saveBallotName() : void {
    this.dataService.saveBallotName(this.ballotName, this.slideIndex)
  }

}
