import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword, signOut } from '@firebase/auth';
import { AlertController, LoadingController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

  email : string
  password : string

  constructor(private dataService : DataService, private router : Router, private loadingController : LoadingController, private alertController : AlertController,private auth : Auth) { }

  ngOnInit() {
  }

  async navigate() {
    this.presentLoading()
    try {
      const user = await signInWithEmailAndPassword(this.auth, this.email, this.password)
      this.dataService.setUserEmail(user.user.email)
      this.loadingController.dismiss()
      this.router.navigate(['admin-dashboard'])
    } catch(e) {
      this.loadingController.dismiss()
      this.presentAlert("Invalid credentials")
    }
  }

  async presentAlert(s) {
    const toast = await this.alertController.create({
      message: s,
      header: 'Invalid credentials',
      buttons: ['OK']
    });
    toast.present();
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

  userLogin() {
    this.router.navigate(['login'])
  }
}
