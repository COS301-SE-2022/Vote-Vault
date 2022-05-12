import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Register Voter', url: '/register', icon: 'mail' },
    { title: 'Generate Ballots', url: '/generate-ballot', icon: 'paper-plane' },
    { title: 'Ballots', url: '/ballot', icon: 'heart' },
    { title: 'Login', url: '/login', icon: 'heart' },
  ];
  constructor() {}
}
