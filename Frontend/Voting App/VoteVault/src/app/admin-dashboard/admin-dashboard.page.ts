import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, MenuController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  elections : any[]

  constructor(private dataService : DataService, private actionSheetController : ActionSheetController, private router : Router, private menu : MenuController) {
    this.elections = [{"electionId" : 1, "electionName" : "Provincial Election"},
                      {"electionId" : 86, "electionName" : "National Election"},
                      {"electionId" : 129, "electionName" : "District Election"}]
   }

  ngOnInit() {
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
      buttons: [ {
        text: 'Ballots',
        icon: 'copy-outline',
        data: 10,
        handler: () => {
          this.navigate("generate-ballot")
        }
      }, {
        text: 'Register User',
        icon: 'person-add-outline',
        data: 'Data value',
        handler: () => {
          this.navigate("register")
        }
      }, {
        text: 'Vote',
        icon: 'checkmark-done-circle-outline',
        handler: () => {
          this.navigate("ballot")
        }
      }, {
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
          console.log('Delete clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  electionClicked(e : any) {
    this.dataService.election = e
    this.presentActionSheet(e)
  }

  createElection() {
    this.router.navigate(['generate-ballot'])
  }
}
