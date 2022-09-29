"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ballot_ballot_module_ts"],{

/***/ 61856:
/*!*************************************************!*\
  !*** ./src/app/ballot/ballot-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotPageRoutingModule": () => (/* binding */ BallotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ballot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot.page */ 61105);




const routes = [
    {
        path: '',
        component: _ballot_page__WEBPACK_IMPORTED_MODULE_0__.BallotPage
    }
];
let BallotPageRoutingModule = class BallotPageRoutingModule {
};
BallotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BallotPageRoutingModule);



/***/ }),

/***/ 28068:
/*!*****************************************!*\
  !*** ./src/app/ballot/ballot.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotPageModule": () => (/* binding */ BallotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ballot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-routing.module */ 61856);
/* harmony import */ var _ballot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot.page */ 61105);
/* harmony import */ var _components_circle_top_circle_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/circle-top/circle-top.component */ 47691);








let BallotPageModule = class BallotPageModule {
};
BallotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ballot_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotPageRoutingModule
        ],
        declarations: [_ballot_page__WEBPACK_IMPORTED_MODULE_1__.BallotPage, _components_circle_top_circle_top_component__WEBPACK_IMPORTED_MODULE_2__.CircleTopComponent]
    })
], BallotPageModule);



/***/ }),

/***/ 61105:
/*!***************************************!*\
  !*** ./src/app/ballot/ballot.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotPage": () => (/* binding */ BallotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ballot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot.page.html?ngResource */ 31269);
/* harmony import */ var _ballot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot.page.scss?ngResource */ 89870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 81502);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/contract.service */ 36569);









let BallotPage = class BallotPage {
    constructor(loadingController, contractService, location, menu, router, dataService, toastController) {
        this.loadingController = loadingController;
        this.contractService = contractService;
        this.location = location;
        this.menu = menu;
        this.router = router;
        this.dataService = dataService;
        this.toastController = toastController;
        this.slideIndex = 0;
        this.votes = [];
    }
    ngOnInit() {
        this.options = this.dataService.electionOptions;
        this.ballot1 = this.dataService.getBallot(0);
        console.log(this.ballot1);
        this.ballot2 = this.dataService.getBallot(1);
        this.ballot3 = this.dataService.getBallot(2);
        this.selected = [-1, -1, -1];
        console.log(this.dataService.contractAddress);
    }
    selectCandidate(o) {
        console.log(this.ballot1);
        if (this.selected[this.slideIndex] != -1) {
            this.selected[this.slideIndex].isChecked = false;
            this.selected[this.slideIndex] = o;
            this.selected[this.slideIndex].isChecked = true;
        }
        else {
            this.selected[this.slideIndex] = o;
            this.selected[this.slideIndex].isChecked = true;
        }
    }
    vote() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            this.dataService.votes.push(this.selected);
            console.log(this.votes);
            //Deploy vote to blockchain
            yield this.contractService.addVote(this.dataService.contractAddress, this.votes)
                .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.loadingController.dismiss();
                this.toast_vote('You voted!');
                this.location.back();
            }))
                .catch((error) => {
                this.toast_vote('Error recording vote');
                this.loadingController.dismiss();
                console.error(error);
            });
        });
    }
    ionSlidesDidLoad(slides) {
        slides.getActiveIndex().then((index) => {
            this.slideIndex = index;
        });
    }
    toast_vote(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                duration: 800,
                message: message,
                color: 'light',
                mode: 'ios'
            });
            yield toast.present();
        });
    }
    openCustom() {
        this.location.back();
    }
    navigate(s) {
        this.router.navigate([s]);
    }
    ballot1Index(i) {
        this.votes[0] = i;
    }
    ballot2Index(i) {
        this.votes[1] = i;
    }
    ballot3Index(i) {
        this.votes[2] = i;
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
BallotPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _services_contract_service__WEBPACK_IMPORTED_MODULE_3__.ContractService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
BallotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-ballot',
        template: _ballot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ballot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BallotPage);



/***/ }),

/***/ 89870:
/*!****************************************************!*\
  !*** ./src/app/ballot/ballot.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  --background: transparent !important;\n  --background-color: transparent;\n  width: 90%;\n  font-size: 1em;\n}\n\nion-label {\n  --color: transparent;\n  width: 100%;\n}\n\nion-card {\n  padding-top: 5vh;\n  padding-bottom: 10vh;\n  margin-bottom: 35vh;\n  width: 90%;\n}\n\nion-card-title {\n  color: var(--ion-color-primary);\n  font-size: 1.2em;\n}\n\nion-slides {\n  height: 60%;\n  width: 100%;\n  left: 0;\n  position: absolute;\n  bottom: 0;\n}\n\n#vote {\n  width: 80%;\n  position: fixed;\n  bottom: 30vh;\n}\n\np {\n  width: 80%;\n  text-align: center;\n  position: fixed;\n  bottom: 40vh;\n}\n\n#header {\n  height: 10%;\n  width: 80%;\n  margin-left: 10%;\n  text-align: center;\n  font-size: 2em;\n  padding-top: 5%;\n  color: white;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXFZvdGluZyUyMEFwcFxcVm90ZVZhdWx0XFxzcmNcXGFwcFxcYmFsbG90XFxiYWxsb3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJiYWxsb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHBhZGRpbmctdG9wOiA1dmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1dmg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZXtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbiN2b3RlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDMwdmg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNDB2aDtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iLCJpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbmlvbi1sYWJlbCB7XG4gIC0tY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNhcmQge1xuICBwYWRkaW5nLXRvcDogNXZoO1xuICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcbiAgbWFyZ2luLWJvdHRvbTogMzV2aDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA2MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cblxuI3ZvdGUge1xuICB3aWR0aDogODAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzB2aDtcbn1cblxucCB7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDQwdmg7XG59XG5cbiNoZWFkZXIge1xuICBoZWlnaHQ6IDEwJTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJlbTtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */";

/***/ }),

/***/ 31269:
/*!****************************************************!*\
  !*** ./src/app/ballot/ballot.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-content id = \"main\">\r\n  <h1 id=\"header\">Vote</h1>\r\n  <app-circle-top></app-circle-top>\r\n  <!-- <ion-button id = \"menuButton\" (click) = \"openCustom()\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button> -->\r\n  <ion-slides #slides pager=\"true\" mode=\"ios\" (ionSlideDidChange)=\"ionSlidesDidLoad(slides)\">\r\n    <ion-slide>\r\n      <ion-card>\r\n        <ion-card-title>{{ballot1.name}}</ion-card-title>\r\n          <ion-item *ngFor=\"let o of ballot1.options; let b1 = index\" (click)=\"selectCandidate(o)\" (click)=\"ballot1Index(b1)\">\r\n            <ion-label>{{o.surname}}, {{o.name}}</ion-label>\r\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"o.isChecked\"></ion-checkbox>\r\n          </ion-item>\r\n\r\n      </ion-card>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <ion-card>\r\n        <ion-card-title>{{ballot2.name}}</ion-card-title>\r\n          <ion-item *ngFor=\"let o of ballot2.options; let b2 = index\" (click)=\"ballot2Index(b2)\" (click)=\"selectCandidate(o)\">\r\n            <ion-label>{{o.surname}}, {{o.name}}</ion-label>\r\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"o.isChecked\"></ion-checkbox>\r\n          </ion-item>\r\n\r\n      </ion-card>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <ion-card>\r\n        <ion-card-title>{{ballot3.name}}</ion-card-title>\r\n          <ion-item *ngFor=\"let o of ballot3.options; let b3 = index\" (click)=\"ballot3Index(b3)\" (click)=\"selectCandidate(o)\">\r\n            <ion-label>{{o.surname}}, {{o.name}}</ion-label>\r\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"o.isChecked\"></ion-checkbox>\r\n          </ion-item>\r\n\r\n      </ion-card>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <p>You are about to submit your votes.</p>\r\n      <ion-button id=\"vote\" (click)=\"vote()\">\r\n        Submit Votes\r\n      </ion-button>\r\n    </ion-slide>\r\n\r\n  </ion-slides>\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ballot_ballot_module_ts.js.map