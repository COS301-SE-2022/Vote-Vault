import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-voter-dashboard',
  templateUrl: './voter-dashboard.page.html',
  styleUrls: ['./voter-dashboard.page.scss'],
})
export class VoterDashboardPage implements OnInit {
  loaded : boolean = false
  elections: any[];

  constructor(private location : Location, private loadingController : LoadingController, private dataService: DataService, private router: Router, private actionSheetController: ActionSheetController) {
    this.elections = []
  }

  async ngOnInit() {
    await this.dataService.fetchAllElections().then((res) =>  {
      this.elections = res
      this.loaded = true
    })
    console.log(this.elections)
  }

  electionClicked(e: any) {
    this.dataService.editElection(e);
  }

  navigate(s: string) {
    this.router.navigate([s]);
  }

  vote(e) {
    this.electionClicked(e)
    this.navigate('register')
  }

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

  back() : void {
    this.navigate("login")
  }
}