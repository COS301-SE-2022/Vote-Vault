import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-voter-dashboard',
  templateUrl: './voter-dashboard.page.html',
  styleUrls: ['./voter-dashboard.page.scss'],
})
export class VoterDashboardPage implements OnInit {

  elections: any[];

  constructor(private dataService: DataService, private router: Router, private actionSheetController: ActionSheetController) {
    // this.elections = [{id : 1, name : 'Provincial Election', ballots : [{name : 'Cool', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]},{name : '', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]},{name : '', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]}]},
    //                   {id : 86, name : 'National Election', ballots : [{name : '', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]},{name : '', options : []},{name : '', options : []}]},
    //                   {id : 129, name : 'District Election', ballots : [{name : '', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]},{name : '', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]},{name : '', options : []}]}];
    this.elections = []
  }

  async ngOnInit() {
    this.elections = await this.dataService.fetchAllElections()
    console.log(this.elections)
  }

  electionClicked(e: any) {
    this.dataService.editElection(e);
    // this.presentActionSheet(e);
  }

  navigate(s: string) {
    this.router.navigate([s]);
  }

  vote(e) {
    this.electionClicked(e)
    this.navigate('register')
  }

  // async presentActionSheet(e: any) {
  //   const actionSheet = await this.actionSheetController.create({
  //     header: e.electionName,
  //     cssClass: 'my-custom-class',
  //     buttons: [ {
  //       text: 'Vote',
  //       icon: 'checkmark-done-circle-outline',
  //       handler: () => {
  //         this.navigate('ballot');
  //       }
  //     }, {
  //       text: 'Cancel',
  //       icon: 'close',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log('Cancel clicked');
  //       }
  //     }]
  //   });
  //   await actionSheet.present();

  //   const { role, data } = await actionSheet.onDidDismiss();
  //   console.log('onDidDismiss resolved with role and data', role, data);
  // }
}
