import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, LoadingController, MenuController } from '@ionic/angular';
import { DataService } from '../data.service';
import { ToastController } from '@ionic/angular';
import { Location } from "@angular/common";
import { ContractService } from '../services/contract.service';

@Component({
  selector: 'app-generate-ballot',
  templateUrl: './generate-ballot.page.html',
  styleUrls: ['./generate-ballot.page.scss'],
})


export class GenerateBallotPage implements OnInit, OnDestroy{

  @ViewChild('slides' , {  static: true })  slides: IonSlides;
  slideIndex = 0;
  options: any[];
  optionInput = '';
  name = '';
  surname = '';
  idNum = '';
  ballot1Options: any[];
  ballot2Options: any[];
  ballot3Options: any[];
  ballotName = '';
  ballotName1 = '';
  ballotName2 = '';
  electionTitle = '';

  constructor(private contractService: ContractService, private location: Location, private loadingController: LoadingController, private menu: MenuController, private toastController: ToastController, private router: Router, private dataService: DataService) {
    this.ballot1Options = [];
    this.ballot2Options = [];
    this.ballot3Options = [];
   }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.populateBallots()
  }

  ngOnDestroy() {
    this.dataService.clear();
  }


  populateBallots() {
    this.options = [];
    this.electionTitle = this.dataService.electionName;
    this.ballot1Options = this.dataService.ballot1.options;
    this.ballotName = this.dataService.ballot1.name;
    this.ballot2Options = this.dataService.ballot2.options;
    this.ballotName1 = this.dataService.ballot2.name;
    this.ballot3Options = this.dataService.ballot3.options;
    this.ballotName2 = this.dataService.ballot3.name;
  }

  addOption(): void {
    const newCandidate = {name : this.name, surname : this.surname, id : this.idNum, isChecked : false};

    //Add option to correct ballot
    this.dataService.addOption(newCandidate, this.slideIndex);
    switch(this.slideIndex) {
      case 0: {
        this.ballot1Options = this.dataService.getOptions(this.slideIndex);
        break;
      }
      case 1: {
        this.ballot2Options = this.dataService.getOptions(this.slideIndex);
        break;
      }
      case 2: {
        this.ballot3Options = this.dataService.getOptions(this.slideIndex);
        break;
      }
    }
    // console.log(this.ballot1Options)
    // console.log(this.ballot2Options)
    this.name = '';
    this.surname = '';
    this.idNum = '';
    this.toast_addUser();
  }

  async generate() {
    this.dataService.saveElectionName(this.electionTitle);
    this.presentLoading();

    if(this.dataService.adminState === 'edit') {
      await this.dataService.saveEdit()
      .then(async (res) => {
        console.log(res);
        this.dataService.clear()
        // await this.dataService.fetchElections().then(() =>  {
          this.loadingController.dismiss();
          this.router.navigate(['admin-dashboard']);
        // })
      })
      .catch((e) => {
        console.error(e);
        this.loadingController.dismiss();
        this.router.navigate(['admin-dashboard']);
      });
    }
    else if(this.dataService.adminState === 'generate') {
      const sizes = [this.ballot1Options.length, this.ballot2Options.length, this.ballot3Options.length]
      //Deploy contract to blockchain with number of candidates and voters as parameters
      await this.contractService.deploy(this.dataService.electionName, 10, 20, sizes)
      .then(async (res) => {
        const contractAddress = res
        
        //Add election to database and save address of contract
        await this.dataService.saveElection(contractAddress)
        .then(async (res) => {
          // this.dataService.clear()
          // await this.dataService.fetchElections().then(() =>  {
            this.loadingController.dismiss();
            this.router.navigate(['admin-dashboard']);
          // })
          
        })
        .catch((e) => {
          console.error(e);
          this.loadingController.dismiss();
          this.router.navigate(['admin-dashboard']);
        });
      })
      
    }

    
  
  }

  ionSlidesDidLoad(slides) {
    slides.getActiveIndex().then((index: number) => {
      this.slideIndex = index;
      // console.log(this.slideIndex)
      this.options = this.dataService.getOptions(this.slideIndex);
    });
  }

  saveBallotName(): void {
    switch(this.slideIndex) {
      case 0:{
        this.dataService.saveBallotName(this.ballotName, this.slideIndex);
        break;
      }
      case 1:{
        this.dataService.saveBallotName(this.ballotName1, this.slideIndex);
        break;
      }
      case 2:{
        this.dataService.saveBallotName(this.ballotName2, this.slideIndex);
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

  openCustom() {
    this.dataService.clear();
    // this.dataService.fetchElections()
    this.location.back();
  
    // this.router.navigate(['admin-dashboard']);
  }

  navigate(s) {
    this.router.navigate([s]);
  }

  removeCandidate(c) {
    switch(this.slideIndex) {
      case 0: {
        const i = this.ballot1Options.indexOf(c);
        if(i != -1){
          this.dataService.removeOption(i, this.slideIndex);
        }
        break;
      }
      case 1: {
        const i = this.ballot2Options.indexOf(c);
        if(i != -1){
          this.dataService.removeOption(i, this.slideIndex);
        }
        break;
      }
      case 2: {
        const i = this.ballot3Options.indexOf(c);
        if(i != -1){
          this.dataService.removeOption(i, this.slideIndex);
        }
        break;
      }
    }
  }
}
