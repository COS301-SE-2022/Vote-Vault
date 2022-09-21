import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

interface Election {
  adminEmail? : string
  electionName : string
  id? : string
  ballots : any[]
  // adminEmail : string
  users : any[]
  voted : any[]
  address : string
  active? : boolean
}

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  names1 : any[];
  names2 : any[];
  names3 : any[];
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
  elections : Election[];
  selectedElection : Election;

  constructor(private dataService : DataService) {
    this.names1 = [];
    this.names2 = [];
    this.names3 = [];
    this.ballot1 = [];
    this.ballot2 = [];
    this.ballot3 = [];
    this.results = [{nameslistballot1: this.names1, nameslistballot2: this.names2, nameslistballot3: this.names3, bal1: this.ballot1, bal2: this.ballot2, bal3: this.ballot3}];
  }

  async ngOnInit() {

    this.elections = await this.dataService.fetchElections();
    this.type = 'bar';
    this.data = {
      labels: this.results[0].nameslistballot1,
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
      labels: this.results[0].nameslistballot2,
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
      labels: this.results[0].nameslistballot3,
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

  async selectElection(e : any) : Promise<void> {
    let numbers = [];
    this.selectedElection = e
    numbers = await this.dataService.getElectionResults(this.selectedElection.address);
    console.log(parseInt(numbers[0][0]._hex));

    for (let i = 0; i < numbers[0].length; i++) {
      this.ballot1[i] = parseInt(numbers[0][i]);
    }

    for (let i = 0; i < numbers[0].length; i++) {
      this.ballot2[i] = parseInt(numbers[1][i]);
    }

    for (let i = 0; i < numbers[0].length; i++) {
      this.ballot3[i] = parseInt(numbers[2][i]);
    }

    for (let i = 0; i < this.selectedElection.ballots[0].options.length; i++) {
      this.names1[i] = this.selectedElection.ballots[0].options[i].name;
    }

    for (let i = 0; i < this.selectedElection.ballots[1].options.length; i++) {
      this.names2[i] = this.selectedElection.ballots[1].options[i].name;
    }

    for (let i = 0; i < this.selectedElection.ballots[2].options.length; i++) {
      this.names3[i] = this.selectedElection.ballots[2].options[i].name;
    }

    this.results = [{nameslistballot1: this.names1, nameslistballot2: this.names2, nameslistballot3: this.names3, bal1: this.ballot1, bal2: this.ballot2, bal3: this.ballot3}];

    console.log(this.ballot1);

    this.type = 'bar';
    this.data = {
      labels: this.results[0].nameslistballot1,
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
      labels: this.results[0].nameslistballot2,
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
      labels: this.results[0].nameslistballot3,
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

  }
}
