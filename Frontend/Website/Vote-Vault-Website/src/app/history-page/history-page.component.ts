import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  votes : any[];
  year : any[];
  names: any[];
  type : any;
  data : any;
  options : any;
  currentYear : any;

  constructor() {
    this.names = [{name1: "party1", name2: "party2", name3: "party3"},{name1: "party1", name2: "party2", name3: "party3"},{name1: "party1", name2: "party2", name3: "party3"}];
    this.votes = [{party1: 20, party2: 98, party3: 93},{party1: 56, party2: 10, party3: 45},{party1: 89, party2: 23, party3: 12}]
    this.year = [{year: 2021, partyname: this.names[0], results: this.votes[0]},{year: 2020, partyname: this.names[1], results: this.votes[1]},{year: 2019, partyname: this.names[2], results: this.votes[2]}];
    this.currentYear = 0;
  }

  ngOnInit(): void {

  }

  div0:boolean=true;
  div1:boolean=false;

  get21(){
    this.div0=false;
    this.div1=true;
    this.type = 'bar';
    this.currentYear = this.year[0].year;
    this.data = {
      labels: [this.year[0].partyname.name1,this.year[0].partyname.name2,this.year[0].partyname.name3],
      datasets: [
        {
          backgroundColor: ['blue','red','green'],
          data: [this.year[0].results.party1, this.year[0].results.party2, this.year[0].results.party3]
        }
      ]
    };
    this.options = {
      legend:{
        display: false
      },
      title:{
        display: true,
        text: this.currentYear
      },
      scales : {
        yAxes: [{
           ticks: {
              steps : 10,
              stepValue : 10,
              max : 100,
              min: 0
            }
        }]
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }

  get20(){
    this.div0=false;
    this.div1=true;
    this.type = 'bar';
    this.currentYear = this.year[1].year;
    this.data = {
      labels: [this.year[1].partyname.name1,this.year[1].partyname.name2,this.year[1].partyname.name3],
      datasets: [
        {
          backgroundColor: ['blue','red','green'],
          data: [this.year[1].results.party1, this.year[1].results.party2, this.year[1].results.party3]
        }
      ]
    };
    this.options = {
      legend:{
        display: false
      },
      title:{
        display: true,
        text:this.currentYear
      },
      scales : {
        yAxes: [{
           ticks: {
              steps : 10,
              stepValue : 10,
              max : 100,
              min: 0
            }
        }]
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }

  get19(){
    this.div0=false;
    this.div1=true;
    this.type = 'bar';
    this.currentYear = this.year[2].year;
    this.data = {
      labels: [this.year[2].partyname.name1,this.year[2].partyname.name2,this.year[2].partyname.name3],
      datasets: [
        {
          backgroundColor: ['blue','red','green'],
          data: [this.year[2].results.party1, this.year[2].results.party2, this.year[2].results.party3]
        }
      ]
    };
    this.options = {
      legend:{
        display: false
      },
      title:{
        display: true,
        text:this.currentYear
      },
      scales : {
        yAxes: [{
           ticks: {
              steps : 10,
              stepValue : 10,
              max : 100,
              min: 0
            }
        }]
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }
}
