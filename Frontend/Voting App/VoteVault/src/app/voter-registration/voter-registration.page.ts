import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-voter-registration',
  templateUrl: './voter-registration.page.html',
  styleUrls: ['./voter-registration.page.scss'],
})
export class VoterRegistrationPage implements OnInit {
  name: string;
  surname: string;
  idNum: string;
  voterNames: any[];
  voterSurnames: any[];
  voterIDs: any[];
  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;

  constructor(private router: Router, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    this.voterIDs = [];
    this.voterNames = [];
    this.voterSurnames = [];
  }

  registerVoter(): void {
    const nVoter = {name : this.name, surname : this.surname, id : this.idNum, isRegistered : false};

    if (nVoter.name === undefined || nVoter.surname === undefined || nVoter.id === undefined) {
      alert('Please make sure all fields are filled in.');
      return;
    }

    if (nVoter.id.length !== 13) {
      alert('Please enter an ID number with a length of 13.');
      return;
    }

    if (!/^[0-9]+$/.test(nVoter.id)) {
      alert('Please make sure the ID only exists of digits.');
      return;
    }

    const first = this.voterIDs.find((obj) => obj === nVoter.id);
    if (first != null) {
      alert('The entered ID is already registered with a voter.');
      return;
    }
    this.voterNames.push(nVoter.name);
    this.voterSurnames.push(nVoter.surname);
    this.voterIDs.push(nVoter.id);
    this.name = '';
    this.surname = '';
    this.idNum = '';
  }

  openCustom() {
    this.router.navigate(['admin-dashboard']);
  }




  scanBarcode() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'PDF_417',
      orientation: 'landscape',
    };

    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scannedData = barcodeData;

    }).catch(err => {
      console.log('Error', err);
    });
  }
}
