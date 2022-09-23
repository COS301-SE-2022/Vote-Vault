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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 81502);







let VoterDashboardPage = class VoterDashboardPage {
    constructor(dataService, router, actionSheetController) {
        this.dataService = dataService;
        this.router = router;
        this.actionSheetController = actionSheetController;
        // this.elections = [{id : 1, name : 'Provincial Election', ballots : [{name : 'Cool', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]},{name : '', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]},{name : '', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]}]},
        //                   {id : 86, name : 'National Election', ballots : [{name : '', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]},{name : '', options : []},{name : '', options : []}]},
        //                   {id : 129, name : 'District Election', ballots : [{name : '', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]},{name : '', options : [{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'},{name : 'John', surname : 'Smith'}]},{name : '', options : []}]}];
        this.elections = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.elections = yield this.dataService.fetchAllElections();
            console.log(this.elections);
        });
    }
    electionClicked(e) {
        this.dataService.editElection(e);
        // this.presentActionSheet(e);
    }
    navigate(s) {
        this.router.navigate([s]);
    }
    vote(e) {
        this.electionClicked(e);
        this.navigate('ballot');
    }
};
VoterDashboardPage.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController }
];
VoterDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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

module.exports = "ion-card-title {\n  color: gray;\n}\n\n#header {\n  width: 80%;\n  margin-left: 10%;\n  text-align: center;\n  padding-top: 10%;\n  font-size: 3em;\n  padding-bottom: 10%;\n}\n\nion-card {\n  padding: 5vw;\n  margin-bottom: 3vh;\n}\n\nion-card-title {\n  color: black;\n  font-size: 1.5em;\n  margin-left: 5px;\n  padding-bottom: 5vw;\n}\n\nion-chip {\n  --background: var(--ion-color-primary);\n  color: white;\n  margin-right: 5px;\n}\n\nion-icon {\n  padding-right: 1vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdGVyLWRhc2hib2FyZC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXFZvdGluZyUyMEFwcFxcVm90ZVZhdWx0XFxzcmNcXGFwcFxcdm90ZXItZGFzaGJvYXJkXFx2b3Rlci1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJ2b3Rlci1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBwYWRkaW5nOiA1dnc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzdmg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDV2dztcclxufVxyXG5cclxuaW9uLWNoaXB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICAgIHBhZGRpbmctcmlnaHQgOiAxdnc7XHJcbn0iLCJpb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4jaGVhZGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBmb250LXNpemU6IDNlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuaW9uLWNhcmQge1xuICBwYWRkaW5nOiA1dnc7XG4gIG1hcmdpbi1ib3R0b206IDN2aDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1dnc7XG59XG5cbmlvbi1jaGlwIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgcGFkZGluZy1yaWdodDogMXZ3O1xufSJdfQ== */";

/***/ }),

/***/ 8623:
/*!**********************************************************************!*\
  !*** ./src/app/voter-dashboard/voter-dashboard.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content id=\"main\">\r\n  <app-circle-top></app-circle-top>\r\n  <app-elections-header></app-elections-header>\r\n    <!-- <ion-card (click)=\"electionClicked(e)\" *ngFor=\"let e of elections\" id=\"election\">\r\n      <ion-card-header>\r\n        <ion-card-title>{{e.electionName}}</ion-card-title>\r\n        <br>\r\n      </ion-card-header>\r\n    </ion-card> -->\r\n\r\n    <ion-card (click)=\"electionClicked(e)\" *ngFor=\"let e of elections; let i = index\" id=\"election\">\r\n      <ion-card-header>\r\n        <ion-card-title text-capitalize><ion-icon name=\"newspaper-outline\"></ion-icon>{{e.electionName}}</ion-card-title>\r\n        <!-- <ion-card-subtitle>#{{e.id}}</ion-card-subtitle> -->\r\n        <!-- <ion-chip (click)=\"registerUser(e)\">\r\n          <ion-label><ion-icon name=\"person-add-outline\"></ion-icon>Register User</ion-label>\r\n        </ion-chip> -->\r\n        <ion-chip (click)=\"vote(e)\">\r\n          <ion-label><ion-icon name=\"checkbox-outline\"></ion-icon>Vote</ion-label>\r\n        </ion-chip>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  </ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_voter-dashboard_voter-dashboard_module_ts.js.map