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
    constructor(alertController, dataService, actionSheetController, router, menu) {
        this.alertController = alertController;
        this.dataService = dataService;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.menu = menu;
        this.dataService.fetchElections();
        this.elections = this.dataService.elections;
    }
    ngOnInit() {
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
};
AdminDashboardPage.ctorParameters = () => [
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

module.exports = "ion-card {\n  padding: 5vw;\n  margin-bottom: 3vh;\n}\nion-card ion-icon {\n  padding-right: 1vw;\n}\n#menuButton {\n  --background: transparent;\n}\nion-card-title {\n  color: black;\n  font-size: 1.5em;\n  margin-left: 5vw;\n  padding-bottom: 1vw;\n}\nion-card-subtitle {\n  margin-left: 5vw;\n  padding-bottom: 5vw;\n}\nion-chip {\n  --background: var(--ion-color-primary);\n  color: white;\n  margin-right: 5px;\n  margin-left: 2vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWRhc2hib2FyZC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXFZvdGluZyUyMEFwcFxcVm90ZVZhdWx0XFxzcmNcXGFwcFxcYWRtaW4tZGFzaGJvYXJkXFxhZG1pbi1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUksWUFBQTtFQUNBLGtCQUFBO0FDRko7QURGSTtFQUNJLGtCQUFBO0FDSVI7QURFQTtFQUNJLHlCQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUE7RUFDSSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoiYWRtaW4tZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQgOiAxdnc7XHJcbiAgICB9XHJcbiAgICBwYWRkaW5nOiA1dnc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzdmg7XHJcbn1cclxuXHJcbiNtZW51QnV0dG9uIHsgXHJcbiAgICAtLWJhY2tncm91bmQgOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXZ3O1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXZ3O1xyXG59XHJcblxyXG5pb24tY2hpcHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnZ3O1xyXG59XHJcbiIsImlvbi1jYXJkIHtcbiAgcGFkZGluZzogNXZ3O1xuICBtYXJnaW4tYm90dG9tOiAzdmg7XG59XG5pb24tY2FyZCBpb24taWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDF2dztcbn1cblxuI21lbnVCdXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgcGFkZGluZy1ib3R0b206IDF2dztcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBwYWRkaW5nLWJvdHRvbTogNXZ3O1xufVxuXG5pb24tY2hpcCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogMnZ3O1xufSJdfQ== */";

/***/ }),

/***/ 22962:
/*!**********************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <app-circle-top></app-circle-top>\r\n  <app-elections-header></app-elections-header>\r\n  <ion-card (click)=\"electionClicked(e)\" (click)=\"setIndex(i)\" *ngFor=\"let e of elections; let i = index\" id=\"election\">\r\n    <ion-card-header>\r\n      <ion-card-title text-capitalize><ion-icon name=\"newspaper-outline\"></ion-icon>{{e.electionName}}</ion-card-title>\r\n      <ion-card-subtitle>#{{e.id}}</ion-card-subtitle>\r\n      <ion-chip (click)=\"registerUser(e)\">\r\n        <ion-label><ion-icon name=\"person-add-outline\"></ion-icon>Register User</ion-label>\r\n      </ion-chip>\r\n      <ion-chip (click)=\"presentDeleteAlert()\">\r\n        <ion-label><ion-icon name=\"person-add-outline\"></ion-icon>Close</ion-label>\r\n      </ion-chip>\r\n    </ion-card-header>\r\n  </ion-card>\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"createElection()\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"menu\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"primary\" (click)=\"signOut()\"><ion-icon name=\"log-out-outline\"></ion-icon></ion-fab-button>\r\n      <ion-fab-button color=\"primary\" (click)=\"createElection()\"><ion-icon name=\"add\"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"signOut()\">\r\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_admin-dashboard_admin-dashboard_module_ts.js.map
