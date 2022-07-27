import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email : string
  password : string

  constructor(private loadingController : LoadingController, private alertController : AlertController, private router : Router, private auth : Auth) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['voter-dashboard'])
  }

  adminLogin() {
    this.router.navigate(['admin-login'])
  }

}

