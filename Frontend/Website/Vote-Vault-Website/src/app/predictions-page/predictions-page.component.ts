import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-predictions-page',
  templateUrl: './predictions-page.component.html',
  styleUrls: ['./predictions-page.component.css']
})
export class PredictionsPageComponent implements OnInit {

  type3 : any;
  data3 : any;
  options3 : any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.showPredictionsInfo();
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
          data: [this.dataService.predictionsArray[0]*100, this.dataService.predictionsArray[1]*100, this.dataService.predictionsArray[2]*100, this.dataService.predictionsArray[3]*100]
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
}