import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Register Voter', url: '/register', icon: 'person-add' },
    { title: 'Generate Ballots', url: '/generate-ballot', icon: 'create' },
    { title: 'Ballots', url: '/ballot', icon: 'book' },
    { title: 'Login', url: '/login', icon: 'log-in' },
  ];
  constructor() {}
}
