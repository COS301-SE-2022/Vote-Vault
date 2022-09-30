import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { DataService, Voter } from '../data.service';
import { ContractService } from '../services/contract.service';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
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

  constructor(private loadingController : LoadingController, private toastController : ToastController, private contractService : ContractService, private router: Router, private barcodeScanner: BarcodeScanner, private dataservice: DataService) { }

  ngOnInit() {
    this.voterIDs = [];
    this.voterNames = [];
    this.voterSurnames = [];
    // console.log(this.dataservice.contractAddress)
  }

  routeTest() {
    //alert("BEFORE NAV");
    this.router.navigate(['ballot']);
    alert("AFTER NAV");
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
    this.presentLoading()
    if (await this.dataservice.checkVoters(this.idNum) == false) {
      alert('Not registered!');
      try {
        await this.dataservice.addvoter(this.voter)
        .then(async () =>  {
          await this.contractService.addVoter(this.dataservice.contractAddress, this.voter)
          .then(()  =>  {
            // alert('Successfully registered!');
            this.presentToast('Successfully registered ' + this.voter.birthName + ", " + this.voter.IDnum)
            this.loadingController.dismiss()
            this.router.navigate(['voter-dashboard'])
          })
        }).catch((error)  =>  {
          this.presentToast('Error registering')
          this.loadingController.dismiss()
          console.error(error)
        })
      } catch (err) {
        alert(err);
      }
    } else {
      alert('Already registered voter!');
      if (await this.dataservice.checkVoted(this.voter) == true) {
        alert('Already voted!');
        this.router.navigate(['voter-dashboard']);
      } else {
        alert('Not yet voted!');
        try {
          await this.dataservice.vote(this.voter);
        } finally {
          this.router.navigate(['ballot']);
        }
      }
    }

    this.name = '';
    this.surname = '';
    this.idNum = '';
    this.gender = '';

    document.getElementById("regnowbutton").style.display = "none";
  }

  openCustom() {
    alert('here');
    this.router.navigate(['voter-dashboard']);
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
      this.scannedData = barcodeData;
      this.inputData = this.scannedData["text"];

      var splitted = this.inputData.split("|");
      this.surname = splitted[0];
      this.name = splitted[1];
      this.gender = splitted[2];
      this.idNum = splitted[4]

      this.voter = this.dataservice.createVoter(this.name, this.surname, this.idNum, this.gender);

      // alert(this.voter.birthName)

      document.getElementById("regnowbutton").style.display = "block";
    }).catch(err => {
      console.log('Error', err);
    });
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      duration: 800,
      message: message,
      color: 'light',
      mode: 'ios'
    });

    await toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 8000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
