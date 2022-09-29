"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_voter-registration_voter-registration_module_ts"],{

/***/ 16115:
/*!*************************************************************************!*\
  !*** ./src/app/voter-registration/voter-registration-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoterRegistrationPageRoutingModule": () => (/* binding */ VoterRegistrationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _voter_registration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voter-registration.page */ 42517);




const routes = [
    {
        path: '',
        component: _voter_registration_page__WEBPACK_IMPORTED_MODULE_0__.VoterRegistrationPage
    }
];
let VoterRegistrationPageRoutingModule = class VoterRegistrationPageRoutingModule {
};
VoterRegistrationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VoterRegistrationPageRoutingModule);



/***/ }),

/***/ 55729:
/*!*****************************************************************!*\
  !*** ./src/app/voter-registration/voter-registration.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoterRegistrationPageModule": () => (/* binding */ VoterRegistrationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _voter_registration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voter-registration-routing.module */ 16115);
/* harmony import */ var _voter_registration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voter-registration.page */ 42517);
/* harmony import */ var _components_circle_top_circle_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/circle-top/circle-top.component */ 47691);








let VoterRegistrationPageModule = class VoterRegistrationPageModule {
};
VoterRegistrationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _voter_registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.VoterRegistrationPageRoutingModule
        ],
        declarations: [_voter_registration_page__WEBPACK_IMPORTED_MODULE_1__.VoterRegistrationPage, _components_circle_top_circle_top_component__WEBPACK_IMPORTED_MODULE_2__.CircleTopComponent]
    })
], VoterRegistrationPageModule);



/***/ }),

/***/ 42517:
/*!***************************************************************!*\
  !*** ./src/app/voter-registration/voter-registration.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoterRegistrationPage": () => (/* binding */ VoterRegistrationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _voter_registration_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voter-registration.page.html?ngResource */ 47466);
/* harmony import */ var _voter_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voter-registration.page.scss?ngResource */ 1914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 5684);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ 81502);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contract.service */ 36569);









let VoterRegistrationPage = class VoterRegistrationPage {
    constructor(loadingController, toastController, contractService, router, barcodeScanner, dataservice) {
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.contractService = contractService;
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.dataservice = dataservice;
        this.name = '';
        this.surname = '';
        this.idNum = '';
        this.encodedData = '';
    }
    ngOnInit() {
        this.voterIDs = [];
        this.voterNames = [];
        this.voterSurnames = [];
        // console.log(this.dataservice.electionName)
    }
    registerVoter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // const first = this.voterIDs.find((obj) => obj === nVoter.id);
            // if (first != null) {
            //   alert('The entered ID is already registered with a voter.');
            //   return;
            // }
            // this.voterNames.push(nVoter.name);
            // this.voterSurnames.push(nVoter.surname);
            // this.voterIDs.push(nVoter.id);
            // alert(this.voter)
            //testing webhook
            this.presentLoading();
            if ((yield this.dataservice.checkVoters(this.idNum)) == false) {
                alert('Not registered!');
                try {
                    yield this.dataservice.addvoter(this.voter)
                        .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        yield this.contractService.addVoter(this.dataservice.contractAddress, this.voter)
                            .then(() => {
                            // alert('Successfully registered!');
                            this.presentToast('Successfully registered ' + this.voter.birthName + ", " + this.voter.IDnum);
                            this.loadingController.dismiss();
                            this.router.navigate(['admin-dashboard']);
                        });
                    })).catch((error) => {
                        this.presentToast('Error registering');
                        this.loadingController.dismiss();
                        console.error(error);
                    });
                }
                catch (err) {
                    alert(err);
                }
            }
            else {
                //alert('Already registered voter!');
                alert('Redirecting');
                this.router.navigate(['ballot']);
            }
            this.name = '';
            this.surname = '';
            this.idNum = '';
            this.gender = '';
            document.getElementById("regnowbutton").style.display = "none";
        });
    }
    openCustom() {
        this.router.navigate(['admin-dashboard']);
    }
    scanBarcode() {
        const options = {
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
            this.idNum = splitted[4];
            this.voter = this.dataservice.createVoter(this.name, this.surname, this.idNum, this.gender);
            // alert(this.voter.birthName)
            document.getElementById("regnowbutton").style.display = "block";
        }).catch(err => {
            console.log('Error', err);
        });
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                duration: 800,
                message: message,
                color: 'light',
                mode: 'ios'
            });
            yield toast.present();
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 30000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
};
VoterRegistrationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _services_contract_service__WEBPACK_IMPORTED_MODULE_4__.ContractService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__.DataService }
];
VoterRegistrationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-voter-registration',
        template: _voter_registration_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_voter_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VoterRegistrationPage);



/***/ }),

/***/ 1914:
/*!****************************************************************************!*\
  !*** ./src/app/voter-registration/voter-registration.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  margin-top: 40%;\n}\n\n.voter-Details {\n  width: 50%;\n  left: 25%;\n}\n\nbody > ion-card > ion-card-header > ion-card-title {\n  color: black;\n  font-size: 1.5em;\n}\n\n@media (max-width: 992px) {\n  .voter-Details {\n    width: auto;\n    left: auto;\n  }\n}\n\n#menuButton {\n  left: 0;\n  top: -10px;\n  position: absolute;\n}\n\n#header {\n  height: 10%;\n  width: 80%;\n  margin-left: 10%;\n  text-align: center;\n  font-size: 2em;\n  padding-top: 5%;\n  color: white;\n  font-weight: bold;\n}\n\nion-button {\n  --border-radius: 25px;\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdGVyLXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXFZvdGluZyUyMEFwcFxcVm90ZVZhdWx0XFxzcmNcXGFwcFxcdm90ZXItcmVnaXN0cmF0aW9uXFx2b3Rlci1yZWdpc3RyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsVUFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFFSSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0FDREoiLCJmaWxlIjoidm90ZXItcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDQwJTtcclxufVxyXG5cclxuLnZvdGVyLURldGFpbHMge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGxlZnQ6IDI1JTtcclxufVxyXG5cclxuYm9keSA+IGlvbi1jYXJkID4gaW9uLWNhcmQtaGVhZGVyID4gaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC52b3Rlci1EZXRhaWxzIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4jbWVudUJ1dHRvbiB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQgOiB0cmFuc3BhcmVudDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxufSIsImlvbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogNDAlO1xufVxuXG4udm90ZXItRGV0YWlscyB7XG4gIHdpZHRoOiA1MCU7XG4gIGxlZnQ6IDI1JTtcbn1cblxuYm9keSA+IGlvbi1jYXJkID4gaW9uLWNhcmQtaGVhZGVyID4gaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAudm90ZXItRGV0YWlscyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbGVmdDogYXV0bztcbiAgfVxufVxuI21lbnVCdXR0b24ge1xuICBsZWZ0OiAwO1xuICB0b3A6IC0xMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiNoZWFkZXIge1xuICBoZWlnaHQ6IDEwJTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJlbTtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICB3aWR0aDogODAlO1xufSJdfQ== */";

/***/ }),

/***/ 47466:
/*!****************************************************************************!*\
  !*** ./src/app/voter-registration/voter-registration.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <app-circle-top></app-circle-top>\r\n  <h1 id=\"header\">Register User</h1>\r\n\r\n  <ion-card class=\"voter-Details ion-text-center ion-padding\">\r\n    <ion-card-header>\r\n      <ion-card-title>\r\n        Scan ID Card\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-button color=\"primary\" (click)=\"scanBarcode()\">Scan ID</ion-button>\r\n    <div *ngIf=\"name\">\r\n      <p>\r\n        Name(s): <b>{{ name }}</b>\r\n      </p>\r\n    </div>\r\n    <div *ngIf=\"surname\">\r\n      <p>\r\n        Surname: <b>{{ surname }}</b>\r\n      </p>\r\n    </div>\r\n    <div *ngIf=\"gender\">\r\n      <p>\r\n        Gender: <b>{{ gender }}</b>\r\n      </p>\r\n    </div>\r\n    <div *ngIf=\"idNum\">\r\n      <p>\r\n        ID Number: <b>{{ idNum }}</b>\r\n      </p>\r\n    </div>\r\n    <ion-button id=\"regnowbutton\" class=\"ion-margin-top\" (click)=\"registerVoter()\" style=\"display: none;\">\r\n        Register Now\r\n    </ion-button>\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_voter-registration_voter-registration_module_ts.js.map