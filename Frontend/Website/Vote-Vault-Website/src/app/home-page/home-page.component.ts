import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  page = {
    title: 'Home'
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
