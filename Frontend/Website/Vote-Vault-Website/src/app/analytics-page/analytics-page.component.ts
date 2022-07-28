import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-page',
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.css']
})
export class AnalyticsPageComponent implements OnInit {

  votes : any[]

  constructor() {
    this.votes = [{"electionID" : 2, "candidateID" : ["3", "5", "5"], "gender" : "male", "age" : 25, "location" : "Cape Town"}]
  }

  ngOnInit(): void {

  }

  type = 'bar';
  data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        backgroundColor: ['#b56576','#e56b6f'],
        // TODO: read gender data from firebase
        
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

  type2 = 'bar';
  data2 = {
    labels: ["18-28","29-38","39-48","49-58","59-68","69-78","79-88","89-98","99+"],
    datasets: [
      {
        backgroundColor: ['#353535','#3c6e71','#b5fff8','#d9d9d9','#284b63','#4f6d7a','#c0d6df','#365535','#3d6e71'],
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

  showGenderInfo(){
      this.div0=false;
      this.div1=true;
      this.div2=false;
      this.div3=false
  }

  showAgeInfo(){
      this.div0=false;
      this.div2=true;
      this.div1=false;
      this.div3=false
  }

  showProvinceInfo(){
      this.div0=false;
      this.div3=true;
      this.div2=false;
      this.div1=false
  }

}
