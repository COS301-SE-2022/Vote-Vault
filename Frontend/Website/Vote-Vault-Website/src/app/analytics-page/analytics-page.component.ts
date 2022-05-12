import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-page',
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.css']
})
export class AnalyticsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  type = 'bar';
  data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        backgroundColor: ['blue','red'],
        data: [59, 59]
      }
    ]
  };
  options = {
    legend:{
      display: false
    },
    title:{
      display: true,
      text:"Gender Distribution"
    },
    responsive: true,
    maintainAspectRatio: false
  };

  type1 = 'bar';
  data1 = {
    labels: ["Gauteng","Freestate","Kwazulu-Natal","Mpumalanga","Limpopo","Eastern Cape","North West","Northern Cape","Western Cape"],
    datasets: [
      {
        backgroundColor: ['blue','red','green','yellow','purple','grey','brown','teal','cyan'],
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
    responsive: true,
    maintainAspectRatio: false
  };

  type2 = 'bar';
  data2 = {
    labels: ["18-28","29-38","39-48","49-58","59-68","69-78","79-88","89-98","99+"],
    datasets: [
      {
        backgroundColor: ['blue','red','green','yellow','purple','grey','brown','teal','cyan'],
        data: [60, 61, 59, 42, 55, 48, 43, 52, 5]
      }
    ]
  };
  options2 = {
    legend:{
      display: false
    },
    title:{
      display: true,
      text:"Age Distribution"
    },
    responsive: true,
    maintainAspectRatio: false
  };
}
