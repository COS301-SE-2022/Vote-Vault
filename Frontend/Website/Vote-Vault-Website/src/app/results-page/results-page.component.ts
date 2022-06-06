import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

  type = 'bar';
  data = {
    labels: ["Party1", "Party2", "Party3", "Party4", "Party5", "Party6", "Party7"],
    datasets: [
      {
        backgroundColor: ['green','blue','red','yellow','purple','grey','black'],
        data: [69, 59, 80, 81, 56, 55, 50]
      }
    ]
  };
  options = {
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
}
