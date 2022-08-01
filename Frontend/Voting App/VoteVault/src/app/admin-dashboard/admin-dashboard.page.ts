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
    // this.dataService.clear()
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

  async presentActionSheet(e : any) {
    const actionSheet = await this.actionSheetController.create({
      header: e.electionName,
      cssClass: 'my-custom-class',
      buttons: [ 
      //   {
      //   text: 'Ballots',
      //   icon: 'copy-outline',
      //   data: 10,
      //   handler: () => {
      //     this.dataService.setAdminState('edit')
      //     this.navigate("generate-ballot")
      //   }
      // }, 
      {
        text: 'Register User',
        icon: 'person-add-outline',
        data: 'Data value',
        handler: () => {
          console.log('clicked')
          this.navigate("voter-registration")
        }
      },
      // {
      //   text: 'Vote',
      //   icon: 'checkmark-done-circle-outline',
      //   handler: () => {
      //     this.navigate("ballot")
      //   }
      // },
       {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Close Election',
        role: 'destructive',
        icon: 'close',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          this.elections.splice(this.index,1)
          this.dataService.deleteElection(this.dataService.electionID)
          console.log('Delete clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
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
