import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['ballot'])
  }

  adminLogin() {
    this.router.navigate(['admin-login'])
  }
}

