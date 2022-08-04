import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, MenuController, ViewWillEnter } from '@ionic/angular';
import { signOut } from 'firebase/auth';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit, ViewWillEnter {

  elections : any[]
  index : number
  constructor(private alertController: AlertController, private dataService : DataService, private actionSheetController : ActionSheetController, private router : Router, private menu : MenuController) {
    this.dataService.fetchElections()
    this.elections = this.dataService.elections
  }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    // this.elections = []
    this.dataService.clear()
    // this.elections = this.dataService.elections
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  navigate(s) {
    this.router.navigate([s])
  }

  registerUser(e) {
    this.electionClicked(e)
    this.navigate("voter-registration")
  }

  deleteElection() {
    this.elections.splice(this.index,1)
    this.dataService.deleteElection(this.dataService.electionID)
    console.log('Delete clicked');
  }

  setIndex(i) {
    this.index = i
  }

  electionClicked(e : any) {
    this.dataService.editElection(e)
    // this.presentActionSheet(e)
  }

  createElection() {
    // this.dataService.clear()
    this.dataService.setAdminState('generate')
    this.router.navigate(['generate-ballot'])
  }

  signOut() {
    this.dataService.userEmail = ''
    this.router.navigate(['admin-login'])
  }

  async presentDeleteAlert() {
    const alert = await this.alertController.create({
      header: 'Close election?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {this.deleteElection()}
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
}
