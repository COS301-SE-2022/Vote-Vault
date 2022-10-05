"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 23963:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 98135);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 18723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 23963);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 98135);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 98135:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 84754);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 36219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 81502);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/contract.service */ 36569);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 5684);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);









let RegisterPage = class RegisterPage {
    constructor(loadingController, toastController, contractService, router, barcodeScanner, dataservice) {
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.contractService = contractService;
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.dataservice = dataservice;
    }
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
                            this.router.navigate(['voter-dashboard']);
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
                alert('Already registered voter!');
                if ((yield this.dataservice.checkVoted(this.voter)) == true) {
                    alert('Already voted!');
                    this.router.navigate(['voter-dashboard']);
                }
                else {
                    alert('Not yet voted!');
                    this.dataservice.voterId = this.idNum;
                    yield this.dataservice.vote(this.voter);
                    this.router.navigate(['ballot']);
                }
            }
            this.name = '';
            this.surname = '';
            this.idNum = '';
            this.gender = '';
            document.getElementById("regnowbutton").style.display = "none";
        });
    }
    openCustom() {
        alert('here');
        this.router.navigate(['voter-dashboard']);
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
                duration: 8000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _services_contract_service__WEBPACK_IMPORTED_MODULE_3__.ContractService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 36219:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-card-title {\n  text-decoration: underline;\n}\n\nion-card {\n  margin-top: 30%;\n}\n\n.voter-Details {\n  width: 50%;\n  left: 25%;\n}\n\nbody > ion-card > ion-card-header > ion-card-title {\n  color: white;\n  font-size: 150%;\n}\n\n@media (max-width: 992px) {\n  .voter-Details {\n    width: auto;\n    left: auto;\n  }\n}\n\n#menuButton {\n  left: 0;\n  top: -10px;\n  position: absolute;\n}\n\n#header {\n  width: 80%;\n  margin-left: 10%;\n  text-align: center;\n  padding-top: 10%;\n  font-size: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcVm90aW5nJTIwQXBwXFxWb3RlVmF1bHRcXHNyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsVUFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFFSSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0RKIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLXRpdGxlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbn1cclxuXHJcbi52b3Rlci1EZXRhaWxzIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbn1cclxuXHJcbmJvZHkgPiBpb24tY2FyZCA+IGlvbi1jYXJkLWhlYWRlciA+IGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC52b3Rlci1EZXRhaWxzIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4jbWVudUJ1dHRvbiB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQgOiB0cmFuc3BhcmVudDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG59IiwiaW9uLWNhcmQtdGl0bGUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiAzMCU7XG59XG5cbi52b3Rlci1EZXRhaWxzIHtcbiAgd2lkdGg6IDUwJTtcbiAgbGVmdDogMjUlO1xufVxuXG5ib2R5ID4gaW9uLWNhcmQgPiBpb24tY2FyZC1oZWFkZXIgPiBpb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNTAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnZvdGVyLURldGFpbHMge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbn1cbiNtZW51QnV0dG9uIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAtMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jaGVhZGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBmb250LXNpemU6IDNlbTtcbn0iXX0= */";

/***/ }),

/***/ 84754:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <!-- <ion-header class=\"ion-margin-bottom\">\r\n    <ion-toolbar class=\"ion-text-center\">\r\n      <ion-title id=\"page-heading\"><ion-button color=\"dark\" id=\"menuButton\" (click)=\"openCustom()\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button>Voter Registration</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header> -->\r\n  <h1 id=\"header\">Register Voter</h1>\r\n\r\n  <ion-card class=\"voter-Details ion-text-center ion-padding\">\r\n    <ion-card-header>\r\n      <ion-card-title>\r\n        Scan ID Card\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-button expand=\"full\" color=\"dark\" (click)=\"scanBarcode()\">Scan ID</ion-button>\r\n\r\n    <div *ngIf=\"name\">\r\n      <p>\r\n        Name(s): <b>{{ name }}</b>\r\n      </p>\r\n    </div>\r\n    <div *ngIf=\"surname\">\r\n      <p>\r\n        Surname: <b>{{ surname }}</b>\r\n      </p>\r\n    </div>\r\n    <div *ngIf=\"gender\">\r\n      <p>\r\n        Gender: <b>{{ gender }}</b>\r\n      </p>\r\n    </div>\r\n    <div *ngIf=\"idNum\">\r\n      <p>\r\n        ID Number: <b>{{ idNum }}</b>\r\n      </p>\r\n    </div>\r\n    <ion-button id=\"regnowbutton\" class=\"ion-margin-top\" (click)=\"registerVoter()\" style=\"display: none;\">\r\n        Register Now\r\n    </ion-button>\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map