"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_voter-dashboard_voter-dashboard_module_ts"],{

/***/ 60553:
/*!*******************************************************************!*\
  !*** ./src/app/voter-dashboard/voter-dashboard-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoterDashboardPageRoutingModule": () => (/* binding */ VoterDashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _voter_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voter-dashboard.page */ 46607);




const routes = [
    {
        path: '',
        component: _voter_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.VoterDashboardPage
    }
];
let VoterDashboardPageRoutingModule = class VoterDashboardPageRoutingModule {
};
VoterDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VoterDashboardPageRoutingModule);



/***/ }),

/***/ 93582:
/*!***********************************************************!*\
  !*** ./src/app/voter-dashboard/voter-dashboard.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoterDashboardPageModule": () => (/* binding */ VoterDashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _voter_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voter-dashboard-routing.module */ 60553);
/* harmony import */ var _voter_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voter-dashboard.page */ 46607);
/* harmony import */ var _components_elections_header_elections_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/elections-header/elections-header.component */ 10796);
/* harmony import */ var _components_circle_top_circle_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/circle-top/circle-top.component */ 47691);









let VoterDashboardPageModule = class VoterDashboardPageModule {
};
VoterDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _voter_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.VoterDashboardPageRoutingModule
        ],
        declarations: [_voter_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.VoterDashboardPage, _components_elections_header_elections_header_component__WEBPACK_IMPORTED_MODULE_2__.ElectionsHeaderComponent, _components_circle_top_circle_top_component__WEBPACK_IMPORTED_MODULE_3__.CircleTopComponent]
    })
], VoterDashboardPageModule);



/***/ }),

/***/ 46607:
/*!*********************************************************!*\
  !*** ./src/app/voter-dashboard/voter-dashboard.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoterDashboardPage": () => (/* binding */ VoterDashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _voter_dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voter-dashboard.page.html?ngResource */ 8623);
/* harmony import */ var _voter_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voter-dashboard.page.scss?ngResource */ 66787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 81502);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);








let VoterDashboardPage = class VoterDashboardPage {
    constructor(location, loadingController, dataService, router, actionSheetController) {
        this.location = location;
        this.loadingController = loadingController;
        this.dataService = dataService;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.loaded = false;
        this.elections = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.dataService.fetchAllElections().then((res) => {
                this.elections = res;
                this.loaded = true;
            });
            console.log(this.elections);
        });
    }
    electionClicked(e) {
        this.dataService.editElection(e);
    }
    navigate(s) {
        this.router.navigate([s]);
    }
    vote(e) {
        this.electionClicked(e);
        this.navigate('register');
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    back() {
        this.location.back();
    }
};
VoterDashboardPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController }
];
VoterDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-voter-dashboard',
        template: _voter_dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_voter_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VoterDashboardPage);



/***/ }),

/***/ 66787:
/*!**********************************************************************!*\
  !*** ./src/app/voter-dashboard/voter-dashboard.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-card-title {\n  color: gray;\n}\n\n#header {\n  width: 80%;\n  margin-left: 10%;\n  text-align: center;\n  padding-top: 10%;\n  font-size: 3em;\n  padding-bottom: 10%;\n}\n\nion-card {\n  padding: 5vw;\n  margin-bottom: 3vh;\n  animation: move-up 0.5s;\n}\n\nion-card-title {\n  color: black;\n  font-size: 1.5em;\n  margin-left: 5px;\n  padding-bottom: 5vw;\n}\n\nion-chip {\n  --background: var(--ion-color-primary);\n  color: white;\n  margin-right: 5px;\n}\n\nion-icon {\n  padding-right: 1vw;\n}\n\n@keyframes move-up {\n  /* You could think of as \"step 1\" */\n  0% {\n    margin-top: 200px;\n    opacity: 0;\n  }\n  /* You could think of as \"step 2\" */\n  100% {\n    margin-top: 0px;\n    opacity: 1;\n  }\n}\n\nion-list {\n  height: 100vh;\n  background-color: white;\n}\n\nion-skeleton-text {\n  --background-rgb: 190,190,190;\n  --border-radius: 9999px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdGVyLWRhc2hib2FyZC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXFZvdGluZyUyMEFwcFxcVm90ZVZhdWx0XFxzcmNcXGFwcFxcdm90ZXItZGFzaGJvYXJkXFx2b3Rlci1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUNBQUE7RUFDQTtJQUNFLGlCQUFBO0lBQ0EsVUFBQTtFQ0NKO0VEQ0UsbUNBQUE7RUFDQTtJQUNFLGVBQUE7SUFDQSxVQUFBO0VDQ0o7QUFDRjs7QURHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRE9BO0VBQ0ksNkJBQUE7RUFDQSx1QkFBQTtBQ0xKIiwiZmlsZSI6InZvdGVyLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDV2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcclxuICAgIGFuaW1hdGlvbjogbW92ZS11cCAwLjVzO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1dnc7XHJcbn1cclxuXHJcbmlvbi1jaGlwe1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgICBwYWRkaW5nLXJpZ2h0IDogMXZ3O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmUtdXAge1xyXG4gICAgLyogWW91IGNvdWxkIHRoaW5rIG9mIGFzIFwic3RlcCAxXCIgKi9cclxuICAgIDAlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAvKiBZb3UgY291bGQgdGhpbmsgb2YgYXMgXCJzdGVwIDJcIiAqL1xyXG4gICAgMTAwJSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmlvbi1saXN0IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXkgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLXNrZWxldG9uLXRleHQge1xyXG4gICAgLS1iYWNrZ3JvdW5kLXJnYjogMTkwLDE5MCwxOTA7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuXHJcbn0iLCJpb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4jaGVhZGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBmb250LXNpemU6IDNlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuaW9uLWNhcmQge1xuICBwYWRkaW5nOiA1dnc7XG4gIG1hcmdpbi1ib3R0b206IDN2aDtcbiAgYW5pbWF0aW9uOiBtb3ZlLXVwIDAuNXM7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXZ3O1xufVxuXG5pb24tY2hpcCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5pb24taWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDF2dztcbn1cblxuQGtleWZyYW1lcyBtb3ZlLXVwIHtcbiAgLyogWW91IGNvdWxkIHRoaW5rIG9mIGFzIFwic3RlcCAxXCIgKi9cbiAgMCUge1xuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLyogWW91IGNvdWxkIHRoaW5rIG9mIGFzIFwic3RlcCAyXCIgKi9cbiAgMTAwJSB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbmlvbi1saXN0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5pb24tc2tlbGV0b24tdGV4dCB7XG4gIC0tYmFja2dyb3VuZC1yZ2I6IDE5MCwxOTAsMTkwO1xuICAtLWJvcmRlci1yYWRpdXM6IDk5OTlweDtcbn0iXX0= */";

/***/ }),

/***/ 8623:
/*!**********************************************************************!*\
  !*** ./src/app/voter-dashboard/voter-dashboard.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-content id=\"main\" *ngIf=\"loaded\">\r\n  <app-circle-top></app-circle-top>\r\n<app-elections-header></app-elections-header>\r\n    <!-- <ion-card (click)=\"electionClicked(e)\" *ngFor=\"let e of elections\" id=\"election\">\r\n      <ion-card-header>\r\n        <ion-card-title>{{e.electionName}}</ion-card-title>\r\n        <br>\r\n      </ion-card-header>\r\n    </ion-card> -->\r\n\r\n    <ion-card (click)=\"electionClicked(e)\" *ngFor=\"let e of elections; let i = index\" id=\"election\">\r\n      <ion-card-header>\r\n        <ion-card-title text-capitalize><ion-icon name=\"newspaper-outline\"></ion-icon>{{e.electionName}}</ion-card-title>\r\n        <!-- <ion-card-subtitle>#{{e.id}}</ion-card-subtitle> -->\r\n        <!-- <ion-chip (click)=\"registerUser(e)\">\r\n          <ion-label><ion-icon name=\"person-add-outline\"></ion-icon>Register User</ion-label>\r\n        </ion-chip> -->\r\n        <ion-chip (click)=\"vote(e)\">\r\n          <ion-label><ion-icon name=\"checkbox-outline\"></ion-icon>Vote</ion-label>\r\n        </ion-chip>\r\n      </ion-card-header>\r\n    </ion-card>\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n        <ion-fab-button color=\"primary\" (click)=\"back()\"><ion-icon name=\"log-out-outline\"></ion-icon></ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n\r\n\r\n<ion-list *ngIf=\"!loaded\">\r\n  <app-circle-top></app-circle-top>\r\n<app-elections-header></app-elections-header>\r\n  <ion-card>\r\n    <div>\r\n    <ion-thumbnail slot=\"start\">\r\n      <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h3>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text>\r\n      </h3>\r\n      <p>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text>\r\n      </p>\r\n      <p>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text>\r\n      </p>\r\n    </ion-label>\r\n  </div>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <div>\r\n    <ion-thumbnail slot=\"start\">\r\n      <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h3>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text>\r\n      </h3>\r\n      <p>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text>\r\n      </p>\r\n      <p>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text>\r\n      </p>\r\n    </ion-label>\r\n  </div>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <div>\r\n    <ion-thumbnail slot=\"start\">\r\n      <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h3>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text>\r\n      </h3>\r\n      <p>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text>\r\n      </p>\r\n      <p>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text>\r\n      </p>\r\n    </ion-label>\r\n  </div>\r\n  </ion-card>\r\n</ion-list>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_voter-dashboard_voter-dashboard_module_ts.js.map