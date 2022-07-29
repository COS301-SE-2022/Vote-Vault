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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ballot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-routing.module */ 61856);
/* harmony import */ var _ballot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot.page */ 61105);







let BallotPageModule = class BallotPageModule {
};
BallotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ballot_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotPageRoutingModule
        ],
        declarations: [_ballot_page__WEBPACK_IMPORTED_MODULE_1__.BallotPage]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ballot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot.page.html?ngResource */ 31269);
/* harmony import */ var _ballot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot.page.scss?ngResource */ 89870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 81502);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);








let BallotPage = class BallotPage {
    constructor(location, menu, router, dataService, toastController) {
        this.location = location;
        this.menu = menu;
        this.router = router;
        this.dataService = dataService;
        this.toastController = toastController;
        this.slideIndex = 0;
    }
    ngOnInit() {
        this.options = this.dataService.electionOptions;
        this.ballot1 = this.dataService.getBallot(0);
        console.log(this.ballot1);
        this.ballot2 = this.dataService.getBallot(1);
        this.ballot3 = this.dataService.getBallot(2);
        this.selected = {};
    }
    selectCandidate(o) {
        if (this.selected != null)
            this.selected.isChecked = false;
        this.selected = o;
        this.selected.isChecked = true;
    }
    vote() {
        this.dataService.votes.push(this.selected);
        this.toast_vote();
        this.location.back();
    }
    ionSlidesDidLoad(slides) {
        slides.getActiveIndex().then((index) => {
            this.slideIndex = index;
            console.log(this.slideIndex);
        });
    }
    toast_vote() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                duration: 800,
                message: 'Vote recorded',
                color: 'light',
                mode: 'ios'
            });
            yield toast.present();
        });
    }
    openCustom() {
        this.router.navigate(['voter-dashboard']);
    }
    navigate(s) {
        this.router.navigate([s]);
    }
};
BallotPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
BallotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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

module.exports = "ion-item {\n  --background: transparent !important;\n  --background-color: transparent;\n  width: 90%;\n}\n\nion-label {\n  --color: transparent;\n  width: 100%;\n}\n\nion-card {\n  padding-top: 10vh;\n  padding-bottom: 10vh;\n  margin-bottom: 10vh;\n  width: 90%;\n}\n\nion-slides {\n  height: 90%;\n}\n\n#vote {\n  width: 80%;\n  position: fixed;\n  bottom: 4vh;\n}\n\n#menuButton {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXFZvdGluZyUyMEFwcFxcVm90ZVZhdWx0XFxzcmNcXGFwcFxcYmFsbG90XFxiYWxsb3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKIiwiZmlsZSI6ImJhbGxvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHsgXHJcbiAgICBwYWRkaW5nLXRvcDogMTB2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbiN2b3RlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDR2aDtcclxufVxyXG5cclxuI21lbnVCdXR0b24geyBcclxuICAgIC0tYmFja2dyb3VuZCA6IHRyYW5zcGFyZW50O1xyXG59XHJcbiIsImlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogOTAlO1xufVxuXG5pb24tbGFiZWwge1xuICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jYXJkIHtcbiAgcGFkZGluZy10b3A6IDEwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHZoO1xuICBtYXJnaW4tYm90dG9tOiAxMHZoO1xuICB3aWR0aDogOTAlO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbiN2b3RlIHtcbiAgd2lkdGg6IDgwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDR2aDtcbn1cblxuI21lbnVCdXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSJdfQ== */";

/***/ }),

/***/ 31269:
/*!****************************************************!*\
  !*** ./src/app/ballot/ballot.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-menu side=\"start\" menuId=\"custom\" contentId=\"main\" class=\"my-custom-menu\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-title>Menu</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item lines=\"none\" detail=\"false\" (click)=\"navigate('admin-dashboard')\">\r\n        <ion-icon name=\"home-outline\"></ion-icon><ion-label>Dashboard</ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" detail=\"false\" (click)=\"navigate('generate-ballot')\">\r\n        <ion-icon name=\"copy-outline\"></ion-icon><ion-label>Generate Ballots</ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" detail=\"false\" (click)=\"navigate('register')\">\r\n        <ion-icon name=\"people-outline\"></ion-icon><ion-label>Register Voters</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu> -->\r\n\r\n<ion-content id = \"main\">\r\n  <ion-button id = \"menuButton\" (click) = \"openCustom()\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button>\r\n  <ion-slides #slides pager=\"true\" mode=\"ios\" (ionSlideDidChange)=\"ionSlidesDidLoad(slides)\">\r\n    <ion-slide>\r\n      <ion-card>\r\n        {{ballot1.name}}\r\n          <ion-item *ngFor=\"let o of ballot1.options\" (click)=\"selectCandidate(o)\">\r\n            <ion-label>{{o.surname}}, {{o.name}}</ion-label>\r\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"o.isChecked\"></ion-checkbox>\r\n          </ion-item>\r\n    \r\n      </ion-card>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <ion-card>\r\n        {{ballot2.name}}\r\n          <ion-item *ngFor=\"let o of ballot2.options\" (click)=\"selectCandidate(o)\">\r\n            <ion-label>{{o.surname}}, {{o.name}}</ion-label>\r\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"o.isChecked\"></ion-checkbox>\r\n          </ion-item>\r\n    \r\n      </ion-card>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <ion-card>\r\n        {{ballot3.name}}\r\n          <ion-item *ngFor=\"let o of ballot3.options\" (click)=\"selectCandidate(o)\">\r\n            <ion-label>{{o.surname}}, {{o.name}}</ion-label>\r\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"o.isChecked\"></ion-checkbox>\r\n          </ion-item>\r\n    \r\n      </ion-card>\r\n    </ion-slide>\r\n    \r\n    <ion-slide>\r\n        You are about to submit your votes.\r\n      <ion-button id=\"vote\" (click)=\"vote()\">\r\n        Submit Votes\r\n      </ion-button>\r\n    </ion-slide>\r\n   \r\n  </ion-slides>\r\n\r\n  \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ballot_ballot_module_ts.js.map