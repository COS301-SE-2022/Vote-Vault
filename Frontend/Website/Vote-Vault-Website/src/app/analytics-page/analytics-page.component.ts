import { Component, OnInit } from '@angular/core';
// import { resolveCname } from 'dns';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-analytics-page',
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.css']
})

export class AnalyticsPageComponent implements OnInit {

  votes : any[]
  private maleCount: number;
  private femaleCount;
  elections: any[];
  data;
  type;
  options;
  data2;
  type2;
  options2;
  selectedElection : any

  constructor(private dataService : DataService) {

    let genderCountArray = [];
    this.maleCount = 0;
    this.femaleCount = genderCountArray[1]
    this.votes = [{"electionID" : 2, "candidateID" : ["3", "5", "5"], "gender" : "male", "age" : 25, "location" : "Cape Town"}]
  }

  async ngOnInit() {

    // elec.forEach(voter => {
    //   voter.users.forEach(element => {
    //     if (element.gender == 'M') {
    //       this.maleCount++
    //       console.log(this.maleCount);
    //     };
    //     if (element.gender == 'F') this.femaleCount++;
    //   });
    // });
    // this.dataService.getMaleCount();
   await this.dataService.fetchElections().then((res)  =>  {
    this.elections = res
    console.log(this.elections)
   })
  }



  type1 = 'bar';
  data1 = {
    labels: ["Gauteng","Freestate","Kwazulu-Natal","Mpumalanga","Limpopo","Eastern Cape","North West","Northern Cape","Western Cape"],
    datasets: [
      {
        backgroundColor: ['#a69cac','#474973 ','#161b33 ','#0d0c1d','#f1dac4 ','#033f63 ','#323031', '#a69cac','#474973'],
        data: [60, 61, 59, 42, 45, 48, 51, 52, 42]
      }
    ]
  };
  options1 = {
    legend:{
      display: false
    },
    title:{
      display: true,
      text:"Location Distribution"
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





  div0:boolean=true;
  div1:boolean=false;
  div2:boolean=false;
  div3:boolean=false;


  async showGenderInfo(){
      this.div0=false;
      this.div1=true;
      this.div2=false;
      this.div3=false;

      await this.dataService.fetchAllElections();
      console.log("Shw gender: "+this.dataService.maleCount);
      console.log("Shw gender: "+this.dataService.femaleCount);

      this.type = 'bar';
  this.data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        backgroundColor: ['#b56576','#e56b6f'],
        // TODO: read gender data from firebase
        data: [this.dataService.maleCount, this.dataService.femaleCount]
      }
    ]
  };
  this.options = {
    legend:{
      display: false
    },
    title:{
      display: true,
      text:"Gender Distribution"
    },
    scales : {
      yAxes: [{
         ticks: {
            steps : 10,
            stepValue : 10,
            max : 20,
            min: 0
          }
      }]
    },
    responsive: true,
    maintainAspectRatio: false
  };

  }

  async showAgeInfo(){
      this.div0=false;
      this.div3=true;
      this.div2=false;
      this.div1=false

      await this.dataService.fetchAllElections();
      await this.dataService.calculateProbabilities();

      console.log(this.dataService.agesArray);


      this.type2 = 'bar';
      this.data2 = {
        labels: ["18-28","29-38","39-48","49-58","59-68","69-78","79-88","89-98","99+"],
        datasets: [
          {
            backgroundColor: ['#353535','#3c6e71','#b5fff8','#d9d9d9','#284b63','#4f6d7a','#c0d6df','#365535','#3d6e71'],
            data: [this.dataService.agesArray[0], this.dataService.agesArray[1], this.dataService.agesArray[2], this.dataService.agesArray[3], this.dataService.agesArray[4], this.dataService.agesArray[5], this.dataService.agesArray[6], this.dataService.agesArray[7], this.dataService.agesArray[8]]
          }
        ]
      };
      this.options2 = {
        legend:{
          display: false
        },
        title:{
          display: true,
          text:"Age Distribution"
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
  }

  showProvinceInfo(){
    this.div0=false;
      this.div2=true;
      this.div1=false;
      this.div3=false
  }

  selectElection(e : any) {
    this.selectedElection = e
  }

}
