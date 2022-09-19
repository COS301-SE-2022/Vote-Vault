import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  names : any[];
  ballot1 : any[];
  ballot2 : any[];
  ballot3 : any[];
  results : any[];
  type : any;
  type1 : any;
  type2 : any;
  data : any;
  data1 : any;
  data2 : any;
  options : any;
  options1 : any;
  options2 : any;
  elections : any[];
  selectedElection : any;

  constructor(private dataService : DataService) {
    this.names = ["party1","party2","party3","party4","party5","party6", "party7"];
    this.ballot1 = [12, 34, 3, 90, 50, 78, 64];
    this.ballot2 = [54, 4, 24, 28, 51, 32, 84];
    this.ballot3 = [23, 47, 31, 10, 20, 98, 44];
    this.results = [{nameslist: this.names, bal1: this.ballot1, bal2: this.ballot2, bal3: this.ballot3}];
  }

  async ngOnInit() {

    this.elections = await this.dataService.fetchElections();
    this.type = 'bar';
    this.data = {
      labels: this.results[0].nameslist,
      datasets: [
        {
          backgroundColor: ['#a69cac ','#474973 ','#161b33 ','#0d0c1d','#f1dac4 ','#033f63 ','#323031'],
          data: this.results[0].bal1
        }
      ]
    };
    this.options = {
      legend:{
        display: false
      },
      title:{
        display: true,
        text:"Election Results"
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
    };

    this.type1 = 'bar';
    this.data1 = {
      labels: this.names,
      datasets: [
        {
          backgroundColor: ['#353535','#3c6e71 ','#b5fff8','#d9d9d9 ','#284b63','#4f6d7a ','#c0d6df '],
          data: this.results[0].bal2
        }
      ]
    };
    this.options1 = {
      legend:{
        display: false
      },
      title:{
        display: true,
        text:"Election Results"
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
    };

    this.type2 = 'bar';
    this.data2 = {
      datasets: [
        {
          backgroundColor: ['#fdc500 ','#fedc97','#ffc857  ','#fcbf49 ','#00509d ','#00296b ','#003f88 '],
          data: this.results[0].bal3
        }
      ]
    };
    this.options2 = {
      legend:{
        display: false
      },
      title:{
        display: true,
        text:"Election Results"
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
  };

  selectElection(e : any) : void {
    this.selectedElection = e
  }
}
