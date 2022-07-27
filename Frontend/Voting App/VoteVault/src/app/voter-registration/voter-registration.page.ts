import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { doc } from 'firebase/firestore';
import { DataService, Voter } from '../data.service';
import { ContractService } from '../services/contract.service';

@Component({
  selector: 'app-voter-registration',
  templateUrl: './voter-registration.page.html',
  styleUrls: ['./voter-registration.page.scss'],
})
export class VoterRegistrationPage implements OnInit {
  name: string;
  surname: string;
  gender: any;
  idNum: string;
  voterNames: any[];
  voterSurnames: any[];
  voterIDs: any[];
  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;
  voter: Voter;

  constructor(private contractService : ContractService, private router: Router, private barcodeScanner: BarcodeScanner, private dataservice: DataService) { }

  ngOnInit() {
    this.voterIDs = [];
    this.voterNames = [];
    this.voterSurnames = [];
  }

  async registerVoter() {

    // const first = this.voterIDs.find((obj) => obj === nVoter.id);
    // if (first != null) {
    //   alert('The entered ID is already registered with a voter.');
    //   return;
    // }
    // this.voterNames.push(nVoter.name);
    // this.voterSurnames.push(nVoter.surname);
    // this.voterIDs.push(nVoter.id);
    // alert(this.voter)
    
    this.voter = new Voter()
    this.voter.birthName = "MEH"
    this.voter.surname = "MAW"
    this.voter.IDnum = '01010101010101'
    this.voter.Age = 29
    this.voter.Gender = 'M'
    console.log("ADDRESS " + this.dataservice.contractAddress)
    try {
      await this.dataservice.addvoter(this.voter)
      .then(() =>  {
        this.contractService.addVoter(this.dataservice.contractAddress, this.voter)
      }).catch((error)  =>  {
        console.error(error)
      })
    } catch (err) {
      alert(err);
    }
    this.name = '';
    this.surname = '';
    this.idNum = '';
    this.gender = '';
    alert('Successfully registered!');
  }

  openCustom() {
    this.router.navigate(['admin-dashboard']);
  }

  scanBarcode() {
    this.registerVoter()
    // const options: BarcodeScannerOptions = {
    //   preferFrontCamera: false,
    //   showFlipCameraButton: true,
    //   showTorchButton: true,
    //   torchOn: false,
    //   prompt: 'Place a barcode inside the scan area',
    //   resultDisplayDuration: 500,
    //   formats: 'PDF_417',
    //   orientation: 'landscape',
    // };

    // this.barcodeScanner.scan(options).then(barcodeData => {
    //   this.scannedData = barcodeData;
    //   this.inputData = this.scannedData["text"];

    //   var splitted = this.inputData.split("|");
    //   this.surname = splitted[0];
    //   this.name = splitted[1];
    //   this.gender = splitted[2];
    //   this.idNum = splitted[4]

    //   this.voter = this.dataservice.createVoter(this.name, this.surname, this.idNum, this.gender);

    //   // alert(this.voter.birthName)

    //   document.getElementById("regnowbutton").style.display = "block";

    //   // this.voterNames.push(this.name);
    //   // this.voterSurnames.push(this.surname);
    //   // this.voterIDs.push(this.idNum);

    // }).catch(err => {
    //   console.log('Error', err);
    // });
  }
}
