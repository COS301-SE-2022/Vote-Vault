import { Component, OnInit } from '@angular/core';

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
  constructor() {
    this.names = [{name1 : "party1", name2: "party2", name3: "party3", name4: "party4", name5: "party5", name6: "party6", name7: "party7"}];
    this.ballot1 = [{res1: 12, res2: 34, res3: 3, res4: 90, res5: 50, res6: 78, res7: 64}];
    this.ballot2 = [{res1: 54, res2: 4, res3: 24, res4: 28, res5: 51, res6: 32, res7: 84}];
    this.ballot3 = [{res1: 23, res2: 47, res3: 31, res4: 10, res5: 20, res6: 98, res7: 44}];
    this.results = [{nameslist: this.names, bal1: this.ballot1, bal2: this.ballot2, bal3: this.ballot3}];
  }

  ngOnInit(): void {
    this.type = 'bar';
    this.data = {
      labels: [this.results[0].nameslist[0].name1 , this.results[0].nameslist[0].name2, this.results[0].nameslist[0].name3, this.results[0].nameslist[0].name4, this.results[0].nameslist[0].name5, this.results[0].nameslist[0].name6, this.results[0].nameslist[0].name7],
      datasets: [
        {
          backgroundColor: ['#a69cac ','#474973 ','#161b33 ','#0d0c1d','#f1dac4 ','#033f63 ','#323031'],
          data: [this.results[0].bal1[0].res1, this.results[0].bal1[0].res2, this.results[0].bal1[0].res3, this.results[0].bal1[0].res4, this.results[0].bal1[0].res5, this.results[0].bal1[0].res6, this.results[0].bal1[0].res7]
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
      labels: [this.results[0].nameslist[0].name1 , this.results[0].nameslist[0].name2, this.results[0].nameslist[0].name3, this.results[0].nameslist[0].name4, this.results[0].nameslist[0].name5, this.results[0].nameslist[0].name6, this.results[0].nameslist[0].name7],
      datasets: [
        {
          backgroundColor: ['#353535','#3c6e71 ','#b5fff8','#d9d9d9 ','#284b63','#4f6d7a ','#c0d6df '],
          data: [this.results[0].bal2[0].res1, this.results[0].bal2[0].res2, this.results[0].bal2[0].res3, this.results[0].bal2[0].res4, this.results[0].bal2[0].res5, this.results[0].bal2[0].res6, this.results[0].bal2[0].res7]
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
      labels: [this.results[0].nameslist[0].name1 , this.results[0].nameslist[0].name2, this.results[0].nameslist[0].name3, this.results[0].nameslist[0].name4, this.results[0].nameslist[0].name5, this.results[0].nameslist[0].name6, this.results[0].nameslist[0].name7],
      datasets: [
        {
          backgroundColor: ['green','blue','red','yellow','purple','grey','black'],
          data: [this.results[0].bal3[0].res1, this.results[0].bal3[0].res2, this.results[0].bal3[0].res3, this.results[0].bal3[0].res4, this.results[0].bal3[0].res5, this.results[0].bal3[0].res6, this.results[0].bal3[0].res7]
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
}
