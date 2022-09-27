"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin-dashboard_admin-dashboard_module_ts"],{

/***/ 30249:
/*!*******************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminDashboardPageRoutingModule": () => (/* binding */ AdminDashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _admin_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-dashboard.page */ 10437);




const routes = [
    {
        path: '',
        component: _admin_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.AdminDashboardPage
    }
];
let AdminDashboardPageRoutingModule = class AdminDashboardPageRoutingModule {
};
AdminDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminDashboardPageRoutingModule);



/***/ }),

/***/ 73870:
/*!***********************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminDashboardPageModule": () => (/* binding */ AdminDashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _admin_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-dashboard-routing.module */ 30249);
/* harmony import */ var _admin_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-dashboard.page */ 10437);
/* harmony import */ var _components_circle_top_circle_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/circle-top/circle-top.component */ 47691);
/* harmony import */ var _components_elections_header_elections_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/elections-header/elections-header.component */ 10796);









let AdminDashboardPageModule = class AdminDashboardPageModule {
};
AdminDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _admin_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminDashboardPageRoutingModule
        ],
        declarations: [_admin_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.AdminDashboardPage, _components_circle_top_circle_top_component__WEBPACK_IMPORTED_MODULE_2__.CircleTopComponent, _components_elections_header_elections_header_component__WEBPACK_IMPORTED_MODULE_3__.ElectionsHeaderComponent]
    })
], AdminDashboardPageModule);



/***/ }),

/***/ 10437:
/*!*********************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminDashboardPage": () => (/* binding */ AdminDashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-dashboard.page.html?ngResource */ 22962);
/* harmony import */ var _admin_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-dashboard.page.scss?ngResource */ 35972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 81502);







let AdminDashboardPage = class AdminDashboardPage {
    constructor(loadingController, alertController, dataService, actionSheetController, router, menu) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.dataService = dataService;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.menu = menu;
        this.loaded = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            yield this.dataService.fetchElections().then(() => {
                this.elections = this.dataService.elections;
                this.loadingController.dismiss();
                this.loaded = true;
            });
        });
    }
    ionViewWillEnter() {
        // this.elections = []
        this.dataService.clear();
        // this.elections = this.dataService.elections
    }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    openEnd() {
        this.menu.open('end');
    }
    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
    navigate(s) {
        this.router.navigate([s]);
    }
    registerUser(e) {
        this.electionClicked(e);
        this.navigate("voter-registration");
    }
    deleteElection() {
        this.elections.splice(this.index, 1);
        this.dataService.deleteElection(this.dataService.electionID);
        console.log('Delete clicked');
    }
    setIndex(i) {
        this.index = i;
    }
    electionClicked(e) {
        this.dataService.editElection(e);
        // this.presentActionSheet(e)
    }
    createElection() {
        // this.dataService.clear()
        this.dataService.setAdminState('generate');
        this.router.navigate(['generate-ballot']);
    }
    signOut() {
        this.dataService.userEmail = '';
        this.router.navigate(['admin-login']);
    }
    presentDeleteAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Close election?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => { }
                    },
                    {
                        text: 'OK',
                        role: 'confirm',
                        handler: () => { this.deleteElection(); }
                    }
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
AdminDashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ActionSheetController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController }
];
AdminDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-admin-dashboard',
        template: _admin_dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminDashboardPage);



/***/ }),

/***/ 35972:
/*!**********************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  padding: 5vw;\n  margin-bottom: 3vh;\n  animation: move-up 0.5s;\n}\nion-card ion-icon {\n  padding-right: 1vw;\n}\nion-list {\n  height: 100vh;\n  background-color: white;\n}\nion-skeleton-text {\n  --background-rgb: 190,190,190;\n  --border-radius: 9999px;\n}\n#menuButton {\n  --background: transparent;\n}\nion-card-title {\n  color: black;\n  font-size: 1.5em;\n  margin-left: 5vw;\n  padding-bottom: 1vw;\n}\nion-card-subtitle {\n  margin-left: 5vw;\n  padding-bottom: 5vw;\n}\nion-chip {\n  --background: var(--ion-color-primary);\n  color: white;\n  margin-right: 5px;\n  margin-left: 2vw;\n}\n@keyframes move-up {\n  /* You could think of as \"step 1\" */\n  0% {\n    margin-top: 200px;\n    opacity: 0;\n  }\n  /* You could think of as \"step 2\" */\n  100% {\n    margin-top: 0px;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWRhc2hib2FyZC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXFZvdGluZyUyMEFwcFxcVm90ZVZhdWx0XFxzcmNcXGFwcFxcYWRtaW4tZGFzaGJvYXJkXFxhZG1pbi1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNGSjtBREhJO0VBQ0ksa0JBQUE7QUNLUjtBREVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDQ0o7QURLQTtFQUNJLDZCQUFBO0VBQ0EsdUJBQUE7QUNISjtBRE1BO0VBQ0kseUJBQUE7QUNISjtBRE1BO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hKO0FETUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDSEo7QURNQTtFQUNJLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNISjtBRE1BO0VBQ0ksbUNBQUE7RUFDQTtJQUNFLGlCQUFBO0lBQ0EsVUFBQTtFQ0hKO0VES0UsbUNBQUE7RUFDQTtJQUNFLGVBQUE7SUFDQSxVQUFBO0VDSEo7QUFDRiIsImZpbGUiOiJhZG1pbi1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgcGFkZGluZy1yaWdodCA6IDF2dztcclxuICAgIH1cclxuICAgIHBhZGRpbmc6IDV2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcclxuICAgIGFuaW1hdGlvbjogbW92ZS11cCAwLjVzO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgIC0tYmFja2dyb3VuZC1yZ2I6IDE5MCwxOTAsMTkwO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA5OTk5cHg7XHJcblxyXG59XHJcbiNtZW51QnV0dG9uIHsgXHJcbiAgICAtLWJhY2tncm91bmQgOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXZ3O1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXZ3O1xyXG59XHJcblxyXG5pb24tY2hpcHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnZ3O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmUtdXAge1xyXG4gICAgLyogWW91IGNvdWxkIHRoaW5rIG9mIGFzIFwic3RlcCAxXCIgKi9cclxuICAgIDAlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAvKiBZb3UgY291bGQgdGhpbmsgb2YgYXMgXCJzdGVwIDJcIiAqL1xyXG4gICAgMTAwJSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsImlvbi1jYXJkIHtcbiAgcGFkZGluZzogNXZ3O1xuICBtYXJnaW4tYm90dG9tOiAzdmg7XG4gIGFuaW1hdGlvbjogbW92ZS11cCAwLjVzO1xufVxuaW9uLWNhcmQgaW9uLWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiAxdnc7XG59XG5cbmlvbi1saXN0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5pb24tc2tlbGV0b24tdGV4dCB7XG4gIC0tYmFja2dyb3VuZC1yZ2I6IDE5MCwxOTAsMTkwO1xuICAtLWJvcmRlci1yYWRpdXM6IDk5OTlweDtcbn1cblxuI21lbnVCdXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgcGFkZGluZy1ib3R0b206IDF2dztcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBwYWRkaW5nLWJvdHRvbTogNXZ3O1xufVxuXG5pb24tY2hpcCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogMnZ3O1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmUtdXAge1xuICAvKiBZb3UgY291bGQgdGhpbmsgb2YgYXMgXCJzdGVwIDFcIiAqL1xuICAwJSB7XG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAvKiBZb3UgY291bGQgdGhpbmsgb2YgYXMgXCJzdGVwIDJcIiAqL1xuICAxMDAlIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 22962:
/*!**********************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<app-circle-top></app-circle-top>\r\n<app-elections-header></app-elections-header>\r\n\r\n<ion-content *ngIf=\"loaded\">\r\n \r\n  <ion-card (click)=\"electionClicked(e)\" (click)=\"setIndex(i)\" *ngFor=\"let e of elections; let i = index\" id=\"election\">\r\n    <ion-card-header>\r\n      <ion-card-title text-capitalize><ion-icon name=\"newspaper-outline\"></ion-icon>{{e.electionName}}</ion-card-title>\r\n      <ion-card-subtitle>#{{e.id}}</ion-card-subtitle>\r\n      <ion-chip (click)=\"registerUser(e)\">\r\n        <ion-label><ion-icon name=\"person-add-outline\"></ion-icon>Register User</ion-label>\r\n      </ion-chip>\r\n      <ion-chip (click)=\"presentDeleteAlert()\">\r\n        <ion-label><ion-icon name=\"person-add-outline\"></ion-icon>Close</ion-label>\r\n      </ion-chip>\r\n    </ion-card-header>\r\n  </ion-card>\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"createElection()\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"menu\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"primary\" (click)=\"signOut()\"><ion-icon name=\"log-out-outline\"></ion-icon></ion-fab-button>\r\n      <ion-fab-button color=\"primary\" (click)=\"createElection()\"><ion-icon name=\"add\"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"signOut()\">\r\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n</ion-content>\r\n\r\n<ion-list *ngIf=\"!loaded\">\r\n  <ion-card>\r\n    <div>\r\n    <ion-thumbnail slot=\"start\">\r\n      <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h3>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text>\r\n      </h3>\r\n      <p>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text>\r\n      </p>\r\n      <p>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text>\r\n      </p>\r\n    </ion-label>\r\n  </div>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <div>\r\n    <ion-thumbnail slot=\"start\">\r\n      <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h3>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text>\r\n      </h3>\r\n      <p>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text>\r\n      </p>\r\n      <p>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text>\r\n      </p>\r\n    </ion-label>\r\n  </div>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <div>\r\n    <ion-thumbnail slot=\"start\">\r\n      <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h3>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text>\r\n      </h3>\r\n      <p>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text>\r\n      </p>\r\n      <p>\r\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text>\r\n      </p>\r\n    </ion-label>\r\n  </div>\r\n  </ion-card>\r\n</ion-list>";

/***/ })

}]);
//# sourceMappingURL=src_app_admin-dashboard_admin-dashboard_module_ts.js.map