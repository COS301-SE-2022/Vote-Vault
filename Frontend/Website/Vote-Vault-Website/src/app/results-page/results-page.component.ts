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
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        backgroundColor: ['green','blue','red','yellow','purple','grey','black'],
        data: [69, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  options = {
    legend:{
      display: false
    },
    title:"Election Results",
    responsive: true,
    maintainAspectRatio: false
  };
}
