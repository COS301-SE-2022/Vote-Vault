"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_voter-registration_voter-registration_module_ts"],{

/***/ 6115:
/*!*************************************************************************!*\
  !*** ./src/app/voter-registration/voter-registration-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoterRegistrationPageRoutingModule": () => (/* binding */ VoterRegistrationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _voter_registration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voter-registration.page */ 2517);




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

/***/ 5729:
/*!*****************************************************************!*\
  !*** ./src/app/voter-registration/voter-registration.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoterRegistrationPageModule": () => (/* binding */ VoterRegistrationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _voter_registration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voter-registration-routing.module */ 6115);
/* harmony import */ var _voter_registration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voter-registration.page */ 2517);







let VoterRegistrationPageModule = class VoterRegistrationPageModule {
};
VoterRegistrationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _voter_registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.VoterRegistrationPageRoutingModule
        ],
        declarations: [_voter_registration_page__WEBPACK_IMPORTED_MODULE_1__.VoterRegistrationPage]
    })
], VoterRegistrationPageModule);



/***/ }),

/***/ 2517:
/*!***************************************************************!*\
  !*** ./src/app/voter-registration/voter-registration.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoterRegistrationPage": () => (/* binding */ VoterRegistrationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _voter_registration_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voter-registration.page.html?ngResource */ 7466);
/* harmony import */ var _voter_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voter-registration.page.scss?ngResource */ 1914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 5684);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ 1502);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contract.service */ 6569);








let VoterRegistrationPage = class VoterRegistrationPage {
    constructor(contractService, router, barcodeScanner, dataservice) {
        this.contractService = contractService;
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.dataservice = dataservice;
    }
    ngOnInit() {
        this.voterIDs = [];
        this.voterNames = [];
        this.voterSurnames = [];
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
            try {
                yield this.dataservice.addvoter(this.voter)
                    .then(() => {
                    this.contractService.addVoter(this.dataservice.contractAddress, this.voter);
                }).catch((error) => {
                    console.error(error);
                });
            }
            catch (err) {
                alert(err);
            }
            this.name = '';
            this.surname = '';
            this.idNum = '';
            this.gender = '';
            alert('Successfully registered!');
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
            // this.voterNames.push(this.name);
            // this.voterSurnames.push(this.surname);
            // this.voterIDs.push(this.idNum);
        }).catch(err => {
            console.log('Error', err);
        });
    }
};
VoterRegistrationPage.ctorParameters = () => [
    { type: _services_contract_service__WEBPACK_IMPORTED_MODULE_4__.ContractService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__.DataService }
];
VoterRegistrationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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

module.exports = "ion-card-title {\n  text-decoration: underline;\n}\n\nion-card {\n  background-color: var(--ion-color-tertiary-shade);\n}\n\n.voter-Details {\n  width: 50%;\n  left: 25%;\n}\n\nbody > ion-card > ion-card-header > ion-card-title {\n  color: white;\n  font-size: 150%;\n}\n\n@media (max-width: 992px) {\n  .voter-Details {\n    width: auto;\n    left: auto;\n  }\n}\n\n#menuButton {\n  --background: transparent;\n  width: auto;\n}\n\n.button {\n  text-align: center;\n  position: absolute;\n  left: 10%;\n  right: 10%;\n  top: 50%;\n  font-size: 22px;\n  transform: translateY(-50%);\n}\n\n.button strong {\n  font-size: 24px;\n  line-height: 26px;\n}\n\n.button p {\n  font-size: 25px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n.button a {\n  text-decoration: none;\n}\n\n#scanner {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n#result {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 28%;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdGVyLXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXFZvdGluZyUyMEFwcFxcVm90ZVZhdWx0XFxzcmNcXGFwcFxcdm90ZXItcmVnaXN0cmF0aW9uXFx2b3Rlci1yZWdpc3RyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFVBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDQUo7O0FER0U7RUFDRSxxQkFBQTtBQ0FKOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0FKIiwiZmlsZSI6InZvdGVyLXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC10aXRsZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlKTtcclxufVxyXG5cclxuLnZvdGVyLURldGFpbHMge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGxlZnQ6IDI1JTtcclxufVxyXG5cclxuYm9keSA+IGlvbi1jYXJkID4gaW9uLWNhcmQtaGVhZGVyID4gaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnZvdGVyLURldGFpbHMge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbiNtZW51QnV0dG9uIHsgXHJcbiAgICAtLWJhY2tncm91bmQgOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHJpZ2h0OiAxMCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbiBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24gcCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAjc2Nhbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNyZXN1bHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAyOCU7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfSIsImlvbi1jYXJkLXRpdGxlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlKTtcbn1cblxuLnZvdGVyLURldGFpbHMge1xuICB3aWR0aDogNTAlO1xuICBsZWZ0OiAyNSU7XG59XG5cbmJvZHkgPiBpb24tY2FyZCA+IGlvbi1jYXJkLWhlYWRlciA+IGlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1MCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAudm90ZXItRGV0YWlscyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbGVmdDogYXV0bztcbiAgfVxufVxuI21lbnVCdXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogYXV0bztcbn1cblxuLmJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMCU7XG4gIHJpZ2h0OiAxMCU7XG4gIHRvcDogNTAlO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmJ1dHRvbiBzdHJvbmcge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4uYnV0dG9uIHAge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnV0dG9uIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNzY2FubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG5cbiNyZXN1bHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMjglO1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */";

/***/ }),

/***/ 7466:
/*!****************************************************************************!*\
  !*** ./src/app/voter-registration/voter-registration.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<<<<<<< HEAD\n<body>\r\n  <ion-button id = \"menuButton\" (click) = \"openCustom()\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button> \r\n  <ion-header class=\"ion-margin-bottom\">\r\n    <ion-toolbar class=\"ion-text-center\">\r\n      <ion-title id=\"page-heading\">Voter Registration</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-card class=\"voter-Details ion-text-center ion-padding\">\r\n    <ion-card-header>\r\n      <ion-card-title>\r\n        Enter Details\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-item color=\"light\">\r\n      <ion-label position=\"floating\">First Name:</ion-label>\r\n      <ion-input [(ngModel)] = \"name\" placeholder=\"Enter first name here\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item color=\"light\">\r\n      <ion-label position=\"floating\">Last Name:</ion-label>\r\n      <ion-input [(ngModel)] = \"surname\" placeholder=\"Enter last name here\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item color=\"light\">\r\n      <ion-label position=\"floating\">ID Number:</ion-label>\r\n      <ion-input [(ngModel)] = \"idNum\" placeholder=\"Enter ID number here\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item  class=\"ion-align-items-center\" color=\"light\">\r\n      <ion-label position=\"stacked\">Scan ID:</ion-label>\r\n      <ion-input size=\"medium\" type=\"file\">\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <div id=\"result\"></div>\r\n    <div id=\"scanner\"></div>\r\n    <ion-button *ngIf=\"showSingleButton\" class=\"button\" mode=\"ios\" (click)=\"startScanning()\">Start Scanning</ion-button>\r\n    <ion-button *ngIf=\"showSingleDoneButton\" class=\"button\" mode=\"ios\" (click)=\"doneSingle()\">Done</ion-button>\r\n\r\n    <ion-button class=\"ion-margin-top\" (click) = \"registerVoter()\">\r\n        Register Now\r\n    </ion-button>\r\n  </ion-card>\r\n</body>\n=======\n<body>\n  <ion-button id = \"menuButton\" (click) = \"openCustom()\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button>\n  <ion-header class=\"ion-margin-bottom\">\n    <ion-toolbar class=\"ion-text-center\">\n      <ion-title id=\"page-heading\">Voter Registration</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-card class=\"voter-Details ion-text-center ion-padding\">\n    <ion-card-header>\n      <ion-card-title>\n        Scan ID Card\n      </ion-card-title>\n    </ion-card-header>\n    <ion-button expand=\"full\" color=\"dark\" (click)=\"scanBarcode()\">Scan ID</ion-button>\n    <div *ngIf=\"name\">\n      <p>\n        Name(s): <b>{{ name }}</b>\n      </p>\n    </div>\n    <div *ngIf=\"surname\">\n      <p>\n        Surname: <b>{{ surname }}</b>\n      </p>\n    </div>\n    <div *ngIf=\"gender\">\n      <p>\n        Gender: <b>{{ gender }}</b>\n      </p>\n    </div>\n    <div *ngIf=\"idNum\">\n      <p>\n        ID Number: <b>{{ idNum }}</b>\n      </p>\n    </div>\n    <ion-button id=\"regnowbutton\" class=\"ion-margin-top\" (click)=\"registerVoter()\" style=\"display: none;\">\n        Register Now\n    </ion-button>\n  </ion-card>\n</body>\n>>>>>>> 51dcac3e631dc114fca065eb7a8bfa1a22e7df10\n";

/***/ })

}]);
//# sourceMappingURL=src_app_voter-registration_voter-registration_module_ts.js.map