import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predictions-page',
  templateUrl: './predictions-page.component.html',
  styleUrls: ['./predictions-page.component.css']
})
export class PredictionsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

div0:boolean=true;
div1:boolean=false;
div2:boolean=false;
div3:boolean=false;
div4:boolean=false;

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
    data: [this.dataService.maleCount / (this.dataService.maleCount + this.dataService.femaleCount), this.dataService.femaleCount / (this.dataService.maleCount + this.dataService.femaleCount)]
  }
]
};
this.options = {
legend:{
  display: false
},
title:{
  display: true,
  text:"Gender Distribution Percentage"
},
scales : {
  yAxes: [{
     ticks: {
        steps : 10,
        stepValue : Math.max(10, this.dataService.maleCount, this.dataService.femaleCount),
        max : Math.max(this.dataService.maleCount, this.dataService.femaleCount),
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

  // await this.dataService.fetchElections().then(()  =>  {
  //   this.dataService.calculateProbabilities();
  //  })

  console.log(this.dataService.agesArray);


  this.type2 = 'bar';
  this.data2 = {
    labels: ["18-28","29-38","39-48","49-58","59-68","69-78","79-88","89-98","99+"],
    datasets: [
      {
        backgroundColor: ['#353535','#3c6e71','#b5fff8','#d9d9d9','#284b63','#4f6d7a','#c0d6df','#365535','#3d6e71'],
        data: [this.dataService.agesArray[0] / (this.dataService.maleCount + this.dataService.femaleCount), this.dataService.agesArray[1] / (this.dataService.maleCount + this.dataService.femaleCount), this.dataService.agesArray[2] / (this.dataService.maleCount + this.dataService.femaleCount), this.dataService.agesArray[3] / (this.dataService.maleCount + this.dataService.femaleCount), this.dataService.agesArray[4] / (this.dataService.maleCount + this.dataService.femaleCount), this.dataService.agesArray[5] / (this.dataService.maleCount + this.dataService.femaleCount), this.dataService.agesArray[6] / (this.dataService.maleCount + this.dataService.femaleCount), this.dataService.agesArray[7] / (this.dataService.maleCount + this.dataService.femaleCount), this.dataService.agesArray[8] / (this.dataService.maleCount + this.dataService.femaleCount)]
      }
    ]
  };
  this.options2 = {
    legend:{
      display: false
    },
    title:{
      display: true,
      text:"Age Distribution Percentage"
    },
    scales : {
      yAxes: [{
         ticks: {
            steps : 10,
            stepValue : Math.max(10, this.dataService.agesArray[0], this.dataService.agesArray[1], this.dataService.agesArray[2], this.dataService.agesArray[3], this.dataService.agesArray[4], this.dataService.agesArray[5], this.dataService.agesArray[6], this.dataService.agesArray[7], this.dataService.agesArray[8]),
            max : Math.max(this.dataService.agesArray[0], this.dataService.agesArray[1], this.dataService.agesArray[2], this.dataService.agesArray[3], this.dataService.agesArray[4], this.dataService.agesArray[5], this.dataService.agesArray[6], this.dataService.agesArray[7], this.dataService.agesArray[8]),
            min: 0
          }
      }]
    },
    responsive: true,
    maintainAspectRatio: false
  };
}

async showPredictionsInfo() {
  await this.dataService.fetchAllElections();
  await this.dataService.calculateProbabilities();


  this.type3 = 'bar';
  this.data3 = {
    labels: ["ANC","DA","EFF","VFP"],
    datasets: [
      {
        backgroundColor: ['#353535','#3c6e71','#b5fff8','#d9d9d9'],
        data: [this.dataService.predictionsArray[0], this.dataService.predictionsArray[1], this.dataService.predictionsArray[2], this.dataService.predictionsArray[3]]
      }
    ]
  };
  this.options3= {
    legend:{
      display: false
    },
    title:{
      display: true,
      text:"Election Prediction"
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