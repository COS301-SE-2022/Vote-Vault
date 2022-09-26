import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-voter-dashboard',
  templateUrl: './voter-dashboard.page.html',
  styleUrls: ['./voter-dashboard.page.scss'],
})
export class VoterDashboardPage implements OnInit {
  loaded : boolean = false
  elections: any[];

  constructor(private loadingController : LoadingController, private dataService: DataService, private router: Router, private actionSheetController: ActionSheetController) {
    // this.elections = [{id : 1, name : 'Provincial Election', ballots : [{name : 'Cool', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]},{name : '', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]},{name : '', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]}]},
    //                   {id : 86, name : 'National Election', ballots : [{name : '', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]},{name : '', options : []},{name : '', options : []}]},
    //                   {id : 129, name : 'District Election', ballots : [{name : '', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]},{name : '', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]},{name : '', options : []}]}];
    this.elections = []
  }

  async ngOnInit() {
    // this.presentLoading()
    await this.dataService.fetchAllElections().then((res) =>  {
      this.elections = res
      this.loaded = true
    })
    // this.loadingController.dismiss()
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

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
