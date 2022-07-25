"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin-dashboard_admin-dashboard_module_ts"],{

/***/ 249:
/*!*******************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminDashboardPageRoutingModule": () => (/* binding */ AdminDashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _admin_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-dashboard.page */ 437);




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

/***/ 3870:
/*!***********************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminDashboardPageModule": () => (/* binding */ AdminDashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _admin_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-dashboard-routing.module */ 249);
/* harmony import */ var _admin_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-dashboard.page */ 437);







let AdminDashboardPageModule = class AdminDashboardPageModule {
};
AdminDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminDashboardPageRoutingModule
        ],
        declarations: [_admin_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.AdminDashboardPage]
    })
], AdminDashboardPageModule);



/***/ }),

/***/ 437:
/*!*********************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminDashboardPage": () => (/* binding */ AdminDashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _admin_dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-dashboard.page.html?ngResource */ 2962);
/* harmony import */ var _admin_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-dashboard.page.scss?ngResource */ 5972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 1502);







let AdminDashboardPage = class AdminDashboardPage {
    constructor(dataService, actionSheetController, router, menu) {
        this.dataService = dataService;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.menu = menu;
        this.elections = [{ "id": 1, "name": "Provincial Election", "ballots": [{ "name": "Cool", "options": [{ "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }] }, { "name": "", "options": [{ "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }] }, { "name": "", "options": [{ "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }] }] },
            { "id": 86, "name": "National Election", "ballots": [{ "name": "", "options": [{ "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }] }, { "name": "", "options": [] }, { "name": "", "options": [] }] },
            { "id": 129, "name": "District Election", "ballots": [{ "name": "", "options": [{ "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }] }, { "name": "", "options": [{ "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }, { "name": "John", "surname": "Smith" }] }, { "name": "", "options": [] }] }];
    }
    ngOnInit() {
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
    presentActionSheet(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: e.electionName,
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Ballots',
                        icon: 'copy-outline',
                        data: 10,
                        handler: () => {
                            this.navigate("generate-ballot");
                        }
                    }, {
                        text: 'Register User',
                        icon: 'person-add-outline',
                        data: 'Data value',
                        handler: () => {
                            this.navigate("register");
                        }
                    }, {
                        text: 'Vote',
                        icon: 'checkmark-done-circle-outline',
                        handler: () => {
                            this.navigate("ballot");
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Close Election',
                        role: 'destructive',
                        icon: 'close',
                        id: 'delete-button',
                        data: {
                            type: 'delete'
                        },
                        handler: () => {
                            console.log('Delete clicked');
                        }
                    }]
            });
            yield actionSheet.present();
            const { role, data } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role and data', role, data);
        });
    }
    electionClicked(e) {
        this.dataService.editElection(e);
        this.presentActionSheet(e);
    }
    createElection() {
        this.dataService.clear();
        this.router.navigate(['generate-ballot']);
    }
};
AdminDashboardPage.ctorParameters = () => [
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

/***/ 5972:
/*!**********************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-item ion-icon {\n  padding-right: 2vh;\n}\n\n#menuButton {\n  --background: transparent;\n}\n\n#title {\n  font-size: 5vh;\n  margin: auto;\n  padding: 5vh;\n  padding-left: 2vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWRhc2hib2FyZC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXFZvdGluZyUyMEFwcFxcVm90ZVZhdWx0XFxzcmNcXGFwcFxcYWRtaW4tZGFzaGJvYXJkXFxhZG1pbi1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7QUNBUjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FKIiwiZmlsZSI6ImFkbWluLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0IDogMnZoO1xyXG4gICAgfVxyXG59XHJcbiNtZW51QnV0dG9uIHsgXHJcbiAgICAtLWJhY2tncm91bmQgOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNXZoO1xyXG4gICAgbWFyZ2luIDogYXV0bztcclxuICAgIHBhZGRpbmc6IDV2aDtcclxuICAgIHBhZGRpbmctbGVmdDogMnZoO1xyXG59IiwiaW9uLWl0ZW0gaW9uLWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiAydmg7XG59XG5cbiNtZW51QnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuI3RpdGxlIHtcbiAgZm9udC1zaXplOiA1dmg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogNXZoO1xuICBwYWRkaW5nLWxlZnQ6IDJ2aDtcbn0iXX0= */";

/***/ }),

/***/ 2962:
/*!**********************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <!-- <ion-title id = \"title\">Elections</ion-title> -->\r\n\r\n  <ion-card (click)=\"electionClicked(e)\" *ngFor=\"let e of elections\" id=\"election\">\r\n    <ion-card-header>\r\n      <ion-card-title>{{e.name}}</ion-card-title>\r\n      <br>\r\n      <ion-card-subtitle>#{{e.id}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n  </ion-card>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"createElection()\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_admin-dashboard_admin-dashboard_module_ts.js.map