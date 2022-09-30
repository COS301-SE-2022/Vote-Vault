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
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})

export class HistoryPageComponent implements OnInit {
  shouldLoad : boolean = false;
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
  ballotName1 : any;
  ballotName2 : any;
  ballotName3 : any;
  electionName : any;
  winner1 : any;
  winner2 : any;
  winner3 : any;
  previousElections: Election[];

  constructor(private dataService : DataService) {
    this.selectedElection = null;
    this.names1 = [];
    this.names2 = [];
    this.names3 = [];
    this.ballot1 = [];
    this.ballot2 = [];
    this.ballot3 = [];
    this.results = [{nameslistballot1: this.names1, nameslistballot2: this.names2, nameslistballot3: this.names3, bal1: this.ballot1, bal2: this.ballot2, bal3: this.ballot3}];
    this.shouldLoad = false;
  }

  async ngOnInit(): Promise<void> {
    this.previousElections = await this.dataService.fetchPastElections();
    console.log(this.previousElections);
  }

  div0:boolean=true;
  div1:boolean=false;

  async selectElection(e : any) : Promise<void> {
    this.shouldLoad = true;
    let numbers = [];
    this.selectedElection = e

    // Gets the selected election results from the blockchain
    this.electionName = this.selectedElection.electionName;
   await this.dataService.getElectionResults(this.selectedElection.address).then((value)  =>  {
      this.shouldLoad = false;
      numbers = value
    });

    // Populates the results array with all the needed data to display in the results page
    for (let i = 0; i < numbers[0].length; i++) {
      this.ballot1[i] = parseInt(numbers[0][i]);
    }

    for (let i = 0; i < numbers[1].length; i++) {
      this.ballot2[i] = parseInt(numbers[1][i]);
    }

    for (let i = 0; i < numbers[2].length; i++) {
      this.ballot3[i] = parseInt(numbers[2][i]);
    }

    for (let i = 0; i < this.selectedElection.ballots[0].options.length; i++) {
      this.names1[i] = this.selectedElection.ballots[0].options[i].name;
    }
    this.ballotName1 = this.selectedElection.ballots[0].name;
    console.log(this.ballotName1);


    for (let i = 0; i < this.selectedElection.ballots[1].options.length; i++) {
      this.names2[i] = this.selectedElection.ballots[1].options[i].name;
    }
    this.ballotName2 = this.selectedElection.ballots[1].name;

    for (let i = 0; i < this.selectedElection.ballots[2].options.length; i++) {
      this.names3[i] = this.selectedElection.ballots[2].options[i].name;
    }
    this.ballotName3 = this.selectedElection.ballots[2].name;

    this.results = [{nameslistballot1: this.names1, nameslistballot2: this.names2, nameslistballot3: this.names3, bal1: this.ballot1, bal2: this.ballot2, bal3: this.ballot3}];

    document.getElementById("info1").hidden = false;
    document.getElementById("info3").hidden = false;
    document.getElementById("info5").hidden = false;

    let B1 = parseInt(numbers[0][0]);
    let B2 = parseInt(numbers[1][0]);
    let B3 = parseInt(numbers[2][0]);

    let B1Max = 0;
    let B2Max = 0;
    let B3Max = 0;

    let B1Winner = this.selectedElection.ballots[0].options[0].name;
    let B2Winner = this.selectedElection.ballots[1].options[0].name;
    let B3Winner = this.selectedElection.ballots[2].options[0].name;

    for (let i = 0; i < numbers[0].length; i++) {
      B1Max += parseInt(numbers[0][i]);

      if (parseInt(numbers[0][i]) > B1) {
        B1 = parseInt(numbers[0][i]);
        B1Winner = this.selectedElection.ballots[0].options[i].name;
      }
    }

    for (let i = 0; i < numbers[1].length; i++) {
      B2Max += parseInt(numbers[1][i]);

      if (parseInt(numbers[1][i]) > B2) {
        B2 = parseInt(numbers[1][i]);
        B2Winner = this.selectedElection.ballots[1].options[i].name;
      }
    }

    for (let i = 0; i < numbers[2].length; i++) {
      B3Max += parseInt(numbers[2][i]);

      if (parseInt(numbers[2][i]) > B3) {
        B3 = parseInt(numbers[2][i]);
        B3Winner = this.selectedElection.ballots[2].options[i].name.then(() =>  {
          this.shouldLoad = false;
        });
      }
    }

    this.winner1 = B1Winner;
    this.winner2 = B2Winner;
    this.winner3 = B3Winner;

    // Graph metadata with the current results
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
              max : B1Max,
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
              max : B2Max,
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
              max : B3Max,
              min: 0
            }
        }]
      },
      responsive: true,
      maintainAspectRatio: false
    }

  }

  // get21(){
  //   this.div0=false;
  //   this.div1=true;
  //   this.type = 'bar';
  //   this.currentYear = this.year[0].year;
  //   this.data = {
  //     labels: [this.year[0].partyname.name1,this.year[0].partyname.name2,this.year[0].partyname.name3],
  //     datasets: [
  //       {
  //         backgroundColor: ['#b56576','#e56b6f','#eaac8b'],
  //         data: [this.year[0].results.party1, this.year[0].results.party2, this.year[0].results.party3]
  //       }
  //     ]
  //   };
  //   this.options = {
  //     legend:{
  //       display: false
  //     },
  //     title:{
  //       display: true,
  //       text: this.currentYear
  //     },
  //     scales : {
  //       yAxes: [{
  //          ticks: {
  //             steps : 10,
  //             stepValue : 10,
  //             max : 100,
  //             min: 0
  //           }
  //       }]
  //     },
  //     responsive: true,
  //     maintainAspectRatio: false
  //   }
  // }

  // get20(){
  //   this.div0=false;
  //   this.div1=true;
  //   this.type = 'bar';
  //   this.currentYear = this.year[1].year;
  //   this.data = {
  //     labels: [this.year[1].partyname.name1,this.year[1].partyname.name2,this.year[1].partyname.name3],
  //     datasets: [
  //       {
  //         backgroundColor: ['#d62828','#f77f00','#fcbf49'],
  //         data: [this.year[1].results.party1, this.year[1].results.party2, this.year[1].results.party3]
  //       }
  //     ]
  //   };
  //   this.options = {
  //     legend:{
  //       display: false
  //     },
  //     title:{
  //       display: true,
  //       text:this.currentYear
  //     },
  //     scales : {
  //       yAxes: [{
  //          ticks: {
  //             steps : 10,
  //             stepValue : 10,
  //             max : 100,
  //             min: 0
  //           }
  //       }]
  //     },
  //     responsive: true,
  //     maintainAspectRatio: false
  //   }
  // }

  // get19(){
  //   this.div0=false;
  //   this.div1=true;
  //   this.type = 'bar';
  //   this.currentYear = this.year[2].year;
  //   this.data = {
  //     labels: [this.year[2].partyname.name1,this.year[2].partyname.name2,this.year[2].partyname.name3],
  //     datasets: [
  //       {
  //         backgroundColor: ['#35353','#d9d9d9','#284b63'],
  //         data: [this.year[2].results.party1, this.year[2].results.party2, this.year[2].results.party3]
  //       }
  //     ]
  //   };
  //   this.options = {
  //     legend:{
  //       display: false
  //     },
  //     title:{
  //       display: true,
  //       text:this.currentYear
  //     },
  //     scales : {
  //       yAxes: [{
  //          ticks: {
  //             steps : 10,
  //             stepValue : 10,
  //             max : 100,
  //             min: 0
  //           }
  //       }]
  //     },
  //     responsive: true,
  //     maintainAspectRatio: false
  //   }
  // }
}
