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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _voter_registration_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voter-registration.page.html?ngResource */ 7466);
/* harmony import */ var _voter_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voter-registration.page.scss?ngResource */ 1914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 5684);






let VoterRegistrationPage = class VoterRegistrationPage {
    constructor(router, barcodeScanner) {
        this.router = router;
        this.barcodeScanner = barcodeScanner;
    }
    ngOnInit() {
        this.voterIDs = [];
        this.voterNames = [];
        this.voterSurnames = [];
    }
    registerVoter() {
        const nVoter = { name: this.name, surname: this.surname, id: this.idNum, isRegistered: false };
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
        const options = {
            preferFrontCamera: false,
            showFlipCameraButton: true,
            showTorchButton: true,
            torchOn: false,
            prompt: 'Place a barcode inside the scan area',
            resultDisplayDuration: 500,
            formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
            orientation: 'portrait',
        };
        this.barcodeScanner.scan(options).then(barcodeData => {
            console.log('Barcode data', barcodeData);
            this.scannedData = barcodeData;
        }).catch(err => {
            console.log('Error', err);
        });
    }
};
VoterRegistrationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner }
];
VoterRegistrationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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

module.exports = "ion-card-title {\n  text-decoration: underline;\n}\n\nion-card {\n  background-color: var(--ion-color-tertiary-shade);\n}\n\n.voter-Details {\n  width: 50%;\n  left: 25%;\n}\n\nbody > ion-card > ion-card-header > ion-card-title {\n  color: white;\n  font-size: 150%;\n}\n\n@media (max-width: 992px) {\n  .voter-Details {\n    width: auto;\n    left: auto;\n  }\n}\n\n#menuButton {\n  --background: transparent;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdGVyLXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXFZvdGluZyUyMEFwcFxcVm90ZVZhdWx0XFxzcmNcXGFwcFxcdm90ZXItcmVnaXN0cmF0aW9uXFx2b3Rlci1yZWdpc3RyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFVBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDQUoiLCJmaWxlIjoidm90ZXItcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLXRpdGxlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUpO1xyXG59XHJcblxyXG4udm90ZXItRGV0YWlscyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbGVmdDogMjUlO1xyXG59XHJcblxyXG5ib2R5ID4gaW9uLWNhcmQgPiBpb24tY2FyZC1oZWFkZXIgPiBpb24tY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAudm90ZXItRGV0YWlscyB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbGVmdDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuI21lbnVCdXR0b24geyBcclxuICAgIC0tYmFja2dyb3VuZCA6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn0iLCJpb24tY2FyZC10aXRsZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSk7XG59XG5cbi52b3Rlci1EZXRhaWxzIHtcbiAgd2lkdGg6IDUwJTtcbiAgbGVmdDogMjUlO1xufVxuXG5ib2R5ID4gaW9uLWNhcmQgPiBpb24tY2FyZC1oZWFkZXIgPiBpb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNTAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnZvdGVyLURldGFpbHMge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbn1cbiNtZW51QnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IGF1dG87XG59Il19 */";

/***/ }),

/***/ 7466:
/*!****************************************************************************!*\
  !*** ./src/app/voter-registration/voter-registration.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<body>\r\n  <ion-button id = \"menuButton\" (click) = \"openCustom()\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button>\r\n  <ion-header class=\"ion-margin-bottom\">\r\n    <ion-toolbar class=\"ion-text-center\">\r\n      <ion-title id=\"page-heading\">Voter Registration</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-card class=\"voter-Details ion-text-center ion-padding\">\r\n    <ion-card-header>\r\n      <ion-card-title>\r\n        Enter Details\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-item color=\"light\">\r\n      <ion-label position=\"floating\">First Name:</ion-label>\r\n      <ion-input [(ngModel)] = \"name\" placeholder=\"Enter first name here\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item color=\"light\">\r\n      <ion-label position=\"floating\">Last Name:</ion-label>\r\n      <ion-input [(ngModel)] = \"surname\" placeholder=\"Enter last name here\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item color=\"light\">\r\n      <ion-label position=\"floating\">ID Number:</ion-label>\r\n      <ion-input [(ngModel)] = \"idNum\" placeholder=\"Enter ID number here\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item  class=\"ion-align-items-center\" color=\"light\">\r\n      <ion-label position=\"floating\">Scan ID:</ion-label>\r\n      <ion-button size=\"medium\" (click) = \"scanBarcode()\">\r\n        <ion-icon name=\"camera-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n    <ion-button class=\"ion-margin-top\" (click) = \"registerVoter()\">\r\n        Register Now\r\n    </ion-button>\r\n  </ion-card>\r\n</body>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_voter-registration_voter-registration_module_ts.js.map