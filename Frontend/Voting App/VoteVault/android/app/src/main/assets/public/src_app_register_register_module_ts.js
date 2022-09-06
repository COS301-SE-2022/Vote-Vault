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
/* harmony import */ var _angular_router_testing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router/testing */ 69504);








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _angular_router_testing__WEBPACK_IMPORTED_MODULE_7__.RouterTestingModule.withRoutes([])
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
                alert('Already registered voter!');
                if ((yield this.dataservice.checkVoted(this.voter)) == false) {
                    alert('Already voted!');
                    this.router.navigate(['voter-dashboard']);
                }
                else {
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
                duration: 30000
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

module.exports = "<ion-content>\r\n  <!-- <ion-header class=\"ion-margin-bottom\">\r\n    <ion-toolbar class=\"ion-text-center\">\r\n      <ion-title id=\"page-heading\"><ion-button color=\"dark\" id=\"menuButton\" (click)=\"openCustom()\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button>Voter Registration</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header> -->\r\n  <h1 id=\"header\">Register Voter</h1>\r\n\r\n  <ion-card class=\"voter-Details ion-text-center ion-padding\">\r\n    <ion-card-header>\r\n      <ion-card-title>\r\n        Scan ID Card\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-button expand=\"full\" color=\"dark\" (click)=\"scanBarcode()\">Scan ID</ion-button>\r\n    <div *ngIf=\"name\">\r\n      <p>\r\n        Name(s): <b>{{ name }}</b>\r\n      </p>\r\n    </div>\r\n    <div *ngIf=\"surname\">\r\n      <p>\r\n        Surname: <b>{{ surname }}</b>\r\n      </p>\r\n    </div>\r\n    <div *ngIf=\"gender\">\r\n      <p>\r\n        Gender: <b>{{ gender }}</b>\r\n      </p>\r\n    </div>\r\n    <div *ngIf=\"idNum\">\r\n      <p>\r\n        ID Number: <b>{{ idNum }}</b>\r\n      </p>\r\n    </div>\r\n    <ion-button id=\"regnowbutton\" class=\"ion-margin-top\" (click)=\"registerVoter()\" style=\"display: none;\">\r\n        Register Now\r\n    </ion-button>\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ }),

/***/ 70446:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/common/fesm2015/testing.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MOCK_PLATFORM_LOCATION_CONFIG": () => (/* binding */ MOCK_PLATFORM_LOCATION_CONFIG),
/* harmony export */   "MockLocationStrategy": () => (/* binding */ MockLocationStrategy),
/* harmony export */   "MockPlatformLocation": () => (/* binding */ MockPlatformLocation),
/* harmony export */   "SpyLocation": () => (/* binding */ SpyLocation)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/**
 * @license Angular v13.2.7
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Joins two parts of a URL with a slash if needed.
 *
 * @param start  URL string
 * @param end    URL string
 *
 *
 * @returns The joined URL string.
 */

function joinWithSlash(start, end) {
  if (start.length == 0) {
    return end;
  }

  if (end.length == 0) {
    return start;
  }

  let slashes = 0;

  if (start.endsWith('/')) {
    slashes++;
  }

  if (end.startsWith('/')) {
    slashes++;
  }

  if (slashes == 2) {
    return start + end.substring(1);
  }

  if (slashes == 1) {
    return start + end;
  }

  return start + '/' + end;
}
/**
 * Removes a trailing slash from a URL string if needed.
 * Looks for the first occurrence of either `#`, `?`, or the end of the
 * line as `/` characters and removes the trailing slash if one exists.
 *
 * @param url URL string.
 *
 * @returns The URL string, modified if needed.
 */


function stripTrailingSlash(url) {
  const match = url.match(/#|\?|$/);
  const pathEndIdx = match && match.index || url.length;
  const droppedSlashIdx = pathEndIdx - (url[pathEndIdx - 1] === '/' ? 1 : 0);
  return url.slice(0, droppedSlashIdx) + url.slice(pathEndIdx);
}
/**
 * Normalizes URL parameters by prepending with `?` if needed.
 *
 * @param  params String of URL parameters.
 *
 * @returns The normalized URL parameters string.
 */


function normalizeQueryParams(params) {
  return params && params[0] !== '?' ? '?' + params : params;
}
/**
 * A spy for {@link Location} that allows tests to fire simulated location events.
 *
 * @publicApi
 */


class SpyLocation {
  constructor() {
    this.urlChanges = [];
    this._history = [new LocationState('', '', null)];
    this._historyIndex = 0;
    /** @internal */

    this._subject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** @internal */

    this._baseHref = '';
    /** @internal */

    this._platformStrategy = null;
    /** @internal */

    this._platformLocation = null;
    /** @internal */

    this._urlChangeListeners = [];
  }

  setInitialPath(url) {
    this._history[this._historyIndex].path = url;
  }

  setBaseHref(url) {
    this._baseHref = url;
  }

  path() {
    return this._history[this._historyIndex].path;
  }

  getState() {
    return this._history[this._historyIndex].state;
  }

  isCurrentPathEqualTo(path, query = '') {
    const givenPath = path.endsWith('/') ? path.substring(0, path.length - 1) : path;
    const currPath = this.path().endsWith('/') ? this.path().substring(0, this.path().length - 1) : this.path();
    return currPath == givenPath + (query.length > 0 ? '?' + query : '');
  }

  simulateUrlPop(pathname) {
    this._subject.emit({
      'url': pathname,
      'pop': true,
      'type': 'popstate'
    });
  }

  simulateHashChange(pathname) {
    const path = this.prepareExternalUrl(pathname);
    this.pushHistory(path, '', null);
    this.urlChanges.push('hash: ' + pathname); // the browser will automatically fire popstate event before each `hashchange` event, so we need
    // to simulate it.

    this._subject.emit({
      'url': pathname,
      'pop': true,
      'type': 'popstate'
    });

    this._subject.emit({
      'url': pathname,
      'pop': true,
      'type': 'hashchange'
    });
  }

  prepareExternalUrl(url) {
    if (url.length > 0 && !url.startsWith('/')) {
      url = '/' + url;
    }

    return this._baseHref + url;
  }

  go(path, query = '', state = null) {
    path = this.prepareExternalUrl(path);
    this.pushHistory(path, query, state);
    const locationState = this._history[this._historyIndex - 1];

    if (locationState.path == path && locationState.query == query) {
      return;
    }

    const url = path + (query.length > 0 ? '?' + query : '');
    this.urlChanges.push(url);

    this._notifyUrlChangeListeners(path + normalizeQueryParams(query), state);
  }

  replaceState(path, query = '', state = null) {
    path = this.prepareExternalUrl(path);
    const history = this._history[this._historyIndex];

    if (history.path == path && history.query == query) {
      return;
    }

    history.path = path;
    history.query = query;
    history.state = state;
    const url = path + (query.length > 0 ? '?' + query : '');
    this.urlChanges.push('replace: ' + url);

    this._notifyUrlChangeListeners(path + normalizeQueryParams(query), state);
  }

  forward() {
    if (this._historyIndex < this._history.length - 1) {
      this._historyIndex++;

      this._subject.emit({
        'url': this.path(),
        'state': this.getState(),
        'pop': true,
        'type': 'popstate'
      });
    }
  }

  back() {
    if (this._historyIndex > 0) {
      this._historyIndex--;

      this._subject.emit({
        'url': this.path(),
        'state': this.getState(),
        'pop': true,
        'type': 'popstate'
      });
    }
  }

  historyGo(relativePosition = 0) {
    const nextPageIndex = this._historyIndex + relativePosition;

    if (nextPageIndex >= 0 && nextPageIndex < this._history.length) {
      this._historyIndex = nextPageIndex;

      this._subject.emit({
        'url': this.path(),
        'state': this.getState(),
        'pop': true,
        'type': 'popstate'
      });
    }
  }

  onUrlChange(fn) {
    this._urlChangeListeners.push(fn);

    if (!this._urlChangeSubscription) {
      this._urlChangeSubscription = this.subscribe(v => {
        this._notifyUrlChangeListeners(v.url, v.state);
      });
    }
  }
  /** @internal */


  _notifyUrlChangeListeners(url = '', state) {
    this._urlChangeListeners.forEach(fn => fn(url, state));
  }

  subscribe(onNext, onThrow, onReturn) {
    return this._subject.subscribe({
      next: onNext,
      error: onThrow,
      complete: onReturn
    });
  }

  normalize(url) {
    return null;
  }

  pushHistory(path, query, state) {
    if (this._historyIndex > 0) {
      this._history.splice(this._historyIndex + 1);
    }

    this._history.push(new LocationState(path, query, state));

    this._historyIndex = this._history.length - 1;
  }

}

SpyLocation.ɵfac = function SpyLocation_Factory(t) {
  return new (t || SpyLocation)();
};

SpyLocation.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: SpyLocation,
  factory: SpyLocation.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpyLocation, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

class LocationState {
  constructor(path, query, state) {
    this.path = path;
    this.query = query;
    this.state = state;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A mock implementation of {@link LocationStrategy} that allows tests to fire simulated
 * location events.
 *
 * @publicApi
 */


class MockLocationStrategy extends _angular_common__WEBPACK_IMPORTED_MODULE_1__.LocationStrategy {
  constructor() {
    super();
    this.internalBaseHref = '/';
    this.internalPath = '/';
    this.internalTitle = '';
    this.urlChanges = [];
    /** @internal */

    this._subject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.stateChanges = [];
  }

  simulatePopState(url) {
    this.internalPath = url;

    this._subject.emit(new _MockPopStateEvent(this.path()));
  }

  path(includeHash = false) {
    return this.internalPath;
  }

  prepareExternalUrl(internal) {
    if (internal.startsWith('/') && this.internalBaseHref.endsWith('/')) {
      return this.internalBaseHref + internal.substring(1);
    }

    return this.internalBaseHref + internal;
  }

  pushState(ctx, title, path, query) {
    // Add state change to changes array
    this.stateChanges.push(ctx);
    this.internalTitle = title;
    const url = path + (query.length > 0 ? '?' + query : '');
    this.internalPath = url;
    const externalUrl = this.prepareExternalUrl(url);
    this.urlChanges.push(externalUrl);
  }

  replaceState(ctx, title, path, query) {
    // Reset the last index of stateChanges to the ctx (state) object
    this.stateChanges[(this.stateChanges.length || 1) - 1] = ctx;
    this.internalTitle = title;
    const url = path + (query.length > 0 ? '?' + query : '');
    this.internalPath = url;
    const externalUrl = this.prepareExternalUrl(url);
    this.urlChanges.push('replace: ' + externalUrl);
  }

  onPopState(fn) {
    this._subject.subscribe({
      next: fn
    });
  }

  getBaseHref() {
    return this.internalBaseHref;
  }

  back() {
    if (this.urlChanges.length > 0) {
      this.urlChanges.pop();
      this.stateChanges.pop();
      const nextUrl = this.urlChanges.length > 0 ? this.urlChanges[this.urlChanges.length - 1] : '';
      this.simulatePopState(nextUrl);
    }
  }

  forward() {
    throw 'not implemented';
  }

  getState() {
    return this.stateChanges[(this.stateChanges.length || 1) - 1];
  }

}

MockLocationStrategy.ɵfac = function MockLocationStrategy_Factory(t) {
  return new (t || MockLocationStrategy)();
};

MockLocationStrategy.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MockLocationStrategy,
  factory: MockLocationStrategy.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MockLocationStrategy, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [];
  }, null);
})();

class _MockPopStateEvent {
  constructor(newUrl) {
    this.newUrl = newUrl;
    this.pop = true;
    this.type = 'popstate';
  }

}
/**
 * Parser from https://tools.ietf.org/html/rfc3986#appendix-B
 * ^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?
 *  12            3  4          5       6  7        8 9
 *
 * Example: http://www.ics.uci.edu/pub/ietf/uri/#Related
 *
 * Results in:
 *
 * $1 = http:
 * $2 = http
 * $3 = //www.ics.uci.edu
 * $4 = www.ics.uci.edu
 * $5 = /pub/ietf/uri/
 * $6 = <undefined>
 * $7 = <undefined>
 * $8 = #Related
 * $9 = Related
 */


const urlParse = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;

function parseUrl(urlStr, baseHref) {
  const verifyProtocol = /^((http[s]?|ftp):\/\/)/;
  let serverBase; // URL class requires full URL. If the URL string doesn't start with protocol, we need to add
  // an arbitrary base URL which can be removed afterward.

  if (!verifyProtocol.test(urlStr)) {
    serverBase = 'http://empty.com/';
  }

  let parsedUrl;

  try {
    parsedUrl = new URL(urlStr, serverBase);
  } catch (e) {
    const result = urlParse.exec(serverBase || '' + urlStr);

    if (!result) {
      throw new Error(`Invalid URL: ${urlStr} with base: ${baseHref}`);
    }

    const hostSplit = result[4].split(':');
    parsedUrl = {
      protocol: result[1],
      hostname: hostSplit[0],
      port: hostSplit[1] || '',
      pathname: result[5],
      search: result[6],
      hash: result[8]
    };
  }

  if (parsedUrl.pathname && parsedUrl.pathname.indexOf(baseHref) === 0) {
    parsedUrl.pathname = parsedUrl.pathname.substring(baseHref.length);
  }

  return {
    hostname: !serverBase && parsedUrl.hostname || '',
    protocol: !serverBase && parsedUrl.protocol || '',
    port: !serverBase && parsedUrl.port || '',
    pathname: parsedUrl.pathname || '/',
    search: parsedUrl.search || '',
    hash: parsedUrl.hash || ''
  };
}
/**
 * Provider for mock platform location config
 *
 * @publicApi
 */


const MOCK_PLATFORM_LOCATION_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MOCK_PLATFORM_LOCATION_CONFIG');
/**
 * Mock implementation of URL state.
 *
 * @publicApi
 */

class MockPlatformLocation {
  constructor(config) {
    this.baseHref = '';
    this.hashUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.urlChangeIndex = 0;
    this.urlChanges = [{
      hostname: '',
      protocol: '',
      port: '',
      pathname: '/',
      search: '',
      hash: '',
      state: null
    }];

    if (config) {
      this.baseHref = config.appBaseHref || '';
      const parsedChanges = this.parseChanges(null, config.startUrl || 'http://_empty_/', this.baseHref);
      this.urlChanges[0] = Object.assign({}, parsedChanges);
    }
  }

  get hostname() {
    return this.urlChanges[this.urlChangeIndex].hostname;
  }

  get protocol() {
    return this.urlChanges[this.urlChangeIndex].protocol;
  }

  get port() {
    return this.urlChanges[this.urlChangeIndex].port;
  }

  get pathname() {
    return this.urlChanges[this.urlChangeIndex].pathname;
  }

  get search() {
    return this.urlChanges[this.urlChangeIndex].search;
  }

  get hash() {
    return this.urlChanges[this.urlChangeIndex].hash;
  }

  get state() {
    return this.urlChanges[this.urlChangeIndex].state;
  }

  getBaseHrefFromDOM() {
    return this.baseHref;
  }

  onPopState(fn) {
    // No-op: a state stack is not implemented, so
    // no events will ever come.
    return () => {};
  }

  onHashChange(fn) {
    const subscription = this.hashUpdate.subscribe(fn);
    return () => subscription.unsubscribe();
  }

  get href() {
    let url = `${this.protocol}//${this.hostname}${this.port ? ':' + this.port : ''}`;
    url += `${this.pathname === '/' ? '' : this.pathname}${this.search}${this.hash}`;
    return url;
  }

  get url() {
    return `${this.pathname}${this.search}${this.hash}`;
  }

  parseChanges(state, url, baseHref = '') {
    // When the `history.state` value is stored, it is always copied.
    state = JSON.parse(JSON.stringify(state));
    return Object.assign(Object.assign({}, parseUrl(url, baseHref)), {
      state
    });
  }

  replaceState(state, title, newUrl) {
    const {
      pathname,
      search,
      state: parsedState,
      hash
    } = this.parseChanges(state, newUrl);
    this.urlChanges[this.urlChangeIndex] = Object.assign(Object.assign({}, this.urlChanges[this.urlChangeIndex]), {
      pathname,
      search,
      hash,
      state: parsedState
    });
  }

  pushState(state, title, newUrl) {
    const {
      pathname,
      search,
      state: parsedState,
      hash
    } = this.parseChanges(state, newUrl);

    if (this.urlChangeIndex > 0) {
      this.urlChanges.splice(this.urlChangeIndex + 1);
    }

    this.urlChanges.push(Object.assign(Object.assign({}, this.urlChanges[this.urlChangeIndex]), {
      pathname,
      search,
      hash,
      state: parsedState
    }));
    this.urlChangeIndex = this.urlChanges.length - 1;
  }

  forward() {
    const oldUrl = this.url;
    const oldHash = this.hash;

    if (this.urlChangeIndex < this.urlChanges.length) {
      this.urlChangeIndex++;
    }

    this.scheduleHashUpdate(oldHash, oldUrl);
  }

  back() {
    const oldUrl = this.url;
    const oldHash = this.hash;

    if (this.urlChangeIndex > 0) {
      this.urlChangeIndex--;
    }

    this.scheduleHashUpdate(oldHash, oldUrl);
  }

  historyGo(relativePosition = 0) {
    const oldUrl = this.url;
    const oldHash = this.hash;
    const nextPageIndex = this.urlChangeIndex + relativePosition;

    if (nextPageIndex >= 0 && nextPageIndex < this.urlChanges.length) {
      this.urlChangeIndex = nextPageIndex;
    }

    this.scheduleHashUpdate(oldHash, oldUrl);
  }

  getState() {
    return this.state;
  }

  scheduleHashUpdate(oldHash, oldUrl) {
    if (oldHash !== this.hash) {
      scheduleMicroTask(() => this.hashUpdate.next({
        type: 'hashchange',
        state: null,
        oldUrl,
        newUrl: this.url
      }));
    }
  }

}

MockPlatformLocation.ɵfac = function MockPlatformLocation_Factory(t) {
  return new (t || MockPlatformLocation)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MOCK_PLATFORM_LOCATION_CONFIG, 8));
};

MockPlatformLocation.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MockPlatformLocation,
  factory: MockPlatformLocation.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MockPlatformLocation, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MOCK_PLATFORM_LOCATION_CONFIG]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, null);
})();

function scheduleMicroTask(cb) {
  Promise.resolve(null).then(cb);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 69504:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/router/fesm2015/testing.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterTestingModule": () => (/* binding */ RouterTestingModule),
/* harmony export */   "setupTestingRouter": () => (/* binding */ setupTestingRouter)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_testing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/testing */ 70446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 52816);
/**
 * @license Angular v13.2.7
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file exists to easily patch the SpyNgModuleFactoryLoader into g3

const EXTRA_ROUTER_TESTING_PROVIDERS = [];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

function isUrlHandlingStrategy(opts) {
  // This property check is needed because UrlHandlingStrategy is an interface and doesn't exist at
  // runtime.
  return 'shouldProcessUrl' in opts;
}
/**
 * Router setup factory function used for testing.
 *
 * @publicApi
 */


function setupTestingRouter(urlSerializer, contexts, location, compiler, injector, routes, opts, urlHandlingStrategy, routeReuseStrategy) {
  const router = new _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router(null, urlSerializer, contexts, location, injector, compiler, (0,_angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵflatten"])(routes));

  if (opts) {
    // Handle deprecated argument ordering.
    if (isUrlHandlingStrategy(opts)) {
      router.urlHandlingStrategy = opts;
    } else {
      // Handle ExtraOptions
      (0,_angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵassignExtraOptionsToRouter"])(opts, router);
    }
  }

  if (urlHandlingStrategy) {
    router.urlHandlingStrategy = urlHandlingStrategy;
  }

  if (routeReuseStrategy) {
    router.routeReuseStrategy = routeReuseStrategy;
  }

  return router;
}
/**
 * @description
 *
 * Sets up the router to be used for testing.
 *
 * The modules sets up the router to be used for testing.
 * It provides spy implementations of `Location` and `LocationStrategy`.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * beforeEach(() => {
 *   TestBed.configureTestingModule({
 *     imports: [
 *       RouterTestingModule.withRoutes(
 *         [{path: '', component: BlankCmp}, {path: 'simple', component: SimpleCmp}]
 *       )
 *     ]
 *   });
 * });
 * ```
 *
 * @publicApi
 */


class RouterTestingModule {
  static withRoutes(routes, config) {
    return {
      ngModule: RouterTestingModule,
      providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_0__.provideRoutes)(routes), {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_0__.ROUTER_CONFIGURATION,
        useValue: config ? config : {}
      }]
    };
  }

}

RouterTestingModule.ɵfac = function RouterTestingModule_Factory(t) {
  return new (t || RouterTestingModule)();
};

RouterTestingModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: RouterTestingModule,
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
RouterTestingModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵROUTER_PROVIDERS"], EXTRA_ROUTER_TESTING_PROVIDERS, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location,
    useClass: _angular_common_testing__WEBPACK_IMPORTED_MODULE_3__.SpyLocation
  }, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__.LocationStrategy,
    useClass: _angular_common_testing__WEBPACK_IMPORTED_MODULE_3__.MockLocationStrategy
  }, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router,
    useFactory: setupTestingRouter,
    deps: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.UrlSerializer, _angular_router__WEBPACK_IMPORTED_MODULE_0__.ChildrenOutletContexts, _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Compiler, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector, _angular_router__WEBPACK_IMPORTED_MODULE_0__.ROUTES, _angular_router__WEBPACK_IMPORTED_MODULE_0__.ROUTER_CONFIGURATION, [_angular_router__WEBPACK_IMPORTED_MODULE_0__.UrlHandlingStrategy, new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional()], [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouteReuseStrategy, new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional()]]
  }, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_0__.PreloadingStrategy,
    useExisting: _angular_router__WEBPACK_IMPORTED_MODULE_0__.NoPreloading
  }, (0,_angular_router__WEBPACK_IMPORTED_MODULE_0__.provideRoutes)([])],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RouterTestingModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
      providers: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵROUTER_PROVIDERS"], EXTRA_ROUTER_TESTING_PROVIDERS, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location,
        useClass: _angular_common_testing__WEBPACK_IMPORTED_MODULE_3__.SpyLocation
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__.LocationStrategy,
        useClass: _angular_common_testing__WEBPACK_IMPORTED_MODULE_3__.MockLocationStrategy
      }, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router,
        useFactory: setupTestingRouter,
        deps: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.UrlSerializer, _angular_router__WEBPACK_IMPORTED_MODULE_0__.ChildrenOutletContexts, _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Compiler, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector, _angular_router__WEBPACK_IMPORTED_MODULE_0__.ROUTES, _angular_router__WEBPACK_IMPORTED_MODULE_0__.ROUTER_CONFIGURATION, [_angular_router__WEBPACK_IMPORTED_MODULE_0__.UrlHandlingStrategy, new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional()], [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouteReuseStrategy, new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional()]]
      }, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_0__.PreloadingStrategy,
        useExisting: _angular_router__WEBPACK_IMPORTED_MODULE_0__.NoPreloading
      }, (0,_angular_router__WEBPACK_IMPORTED_MODULE_0__.provideRoutes)([])]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file exists for easily patching SpyNgModuleFactoryLoader in g3


var spy_ng_module_factory_loader = {};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map
