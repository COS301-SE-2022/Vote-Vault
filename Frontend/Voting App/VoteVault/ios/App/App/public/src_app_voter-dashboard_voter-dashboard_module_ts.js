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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _voter_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voter-dashboard-routing.module */ 60553);
/* harmony import */ var _voter_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voter-dashboard.page */ 46607);







let VoterDashboardPageModule = class VoterDashboardPageModule {
};
VoterDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _voter_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.VoterDashboardPageRoutingModule
        ],
        declarations: [_voter_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.VoterDashboardPage]
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
        this.presentActionSheet(e);
    }
    navigate(s) {
        this.router.navigate([s]);
    }
    presentActionSheet(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: e.electionName,
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Vote',
                        icon: 'checkmark-done-circle-outline',
                        handler: () => {
                            this.navigate('ballot');
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
            const { role, data } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role and data', role, data);
        });
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

module.exports = "ion-card-title {\n  color: gray;\n}\n\n#header {\n  width: 80%;\n  margin-left: 10%;\n  text-align: center;\n  padding-top: 10%;\n  font-size: 3em;\n  padding-bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdGVyLWRhc2hib2FyZC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXFZvdGluZyUyMEFwcFxcVm90ZVZhdWx0XFxzcmNcXGFwcFxcdm90ZXItZGFzaGJvYXJkXFx2b3Rlci1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InZvdGVyLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbn0iLCJpb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4jaGVhZGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBmb250LXNpemU6IDNlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn0iXX0= */";

/***/ }),

/***/ 8623:
/*!**********************************************************************!*\
  !*** ./src/app/voter-dashboard/voter-dashboard.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content id=\"main\">\r\n  <h1 id=\"header\">Elections</h1>\r\n    <ion-card (click)=\"electionClicked(e)\" *ngFor=\"let e of elections\" id=\"election\">\r\n      <ion-card-header>\r\n        <ion-card-title>{{e.electionName}}</ion-card-title>\r\n        <br>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  </ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_voter-dashboard_voter-dashboard_module_ts.js.map