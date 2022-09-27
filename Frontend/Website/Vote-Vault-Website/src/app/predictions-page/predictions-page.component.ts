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