import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  page = {
    title: 'Home'
  };

  constructor(private dataService : DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.getElectionResults('0xf14d272fb7b95afD1076Eb34f682c9EaF2C556F6')
  }

}
