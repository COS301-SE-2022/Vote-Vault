import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ScannerServiceProvider } from 'src/providers/scanner-service';


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
  showSingleButton = true;
  showSingleDoneButton = false;
  private barcodes: Barcode[] = [];
  private continuousMode = false;
  constructor(private router: Router, public scanner: ScannerServiceProvider) { }

  public startScanning() {
    this.showScanner();
    this.showSingleButton = false;
    this.showSingleDoneButton = false;
    this.scanner.delegate = this;
    this.scanner.start();
  }

  public startContinuousScanning() {
    this.continuousMode = true;
    document.getElementById('scanner').style.bottom = '10%';
    this.startScanning();
  }

  public resumeScanning() {
    this.scanner.resume();
    this.showScanner();
    this.showSingleButton = false;
    this.showSingleDoneButton = false;
  }

  public doneSingle() {
    this.hideScanner();
    this.scanner.pause();
    this.barcodes = [];
    document.getElementById('result').innerHTML = '';
    this.showSingleButton = true;
    this.showSingleDoneButton = false;
  }

  public done() {
    this.barcodes = [];
    document.getElementById('result').style.display = 'none';
    document.getElementById('result').innerHTML = '';
    this.showSingleButton = true;
    this.showSingleDoneButton = false;
    this.continuousMode = false;
  }

  public didScan(barcodeCapture: BarcodeCapture, session: BarcodeCaptureSession) {
    this.barcodes = session.newlyRecognizedBarcodes;
    this.hideScanner();
    document.getElementById('result').style.display = 'block';
    this.scanner.pause();
    this.showSingleDoneButton = true;
    const scannedBarcode = 'Scanned Code:<br><br>' + this.barcodes[0].symbology.toUpperCase() + ': ' + this.barcodes[0].data;
    document.getElementById('result').innerHTML = scannedBarcode;
  }

  public ionViewDidEnter(): void {
  }

  public showScanner() {
    document.getElementById('scanner').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('result').innerHTML = '';
  }

  public hideScanner() {
    document.getElementById('scanner').style.display = 'none';
  }

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

    if (nVoter.id.length != 13) {
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
}
