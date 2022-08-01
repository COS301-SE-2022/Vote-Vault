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
        this.dataService.fetchElections();
        this.elections = this.dataService.elections;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // this.elections = []
        // this.dataService.clear()
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
    presentActionSheet(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: e.electionName,
                cssClass: 'my-custom-class',
                buttons: [
                    //   {
                    //   text: 'Ballots',
                    //   icon: 'copy-outline',
                    //   data: 10,
                    //   handler: () => {
                    //     this.dataService.setAdminState('edit')
                    //     this.navigate("generate-ballot")
                    //   }
                    // }, 
                    {
                        text: 'Register User',
                        icon: 'person-add-outline',
                        data: 'Data value',
                        handler: () => {
                            console.log('clicked');
                            this.navigate("voter-registration");
                        }
                    },
                    // {
                    //   text: 'Vote',
                    //   icon: 'checkmark-done-circle-outline',
                    //   handler: () => {
                    //     this.navigate("ballot")
                    //   }
                    // },
                    {
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
                            this.elections.splice(this.index, 1);
                            this.dataService.deleteElection(this.dataService.electionID);
                            console.log('Delete clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
            const { role, data } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role and data', role, data);
        });
    }
    setIndex(i) {
        this.index = i;
    }
    electionClicked(e) {
        this.dataService.editElection(e);
        this.presentActionSheet(e);
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

module.exports = "ion-item ion-icon {\n  padding-right: 2vh;\n}\n\n#menuButton {\n  --background: transparent;\n}\n\nion-card-title {\n  color: black;\n}\n\n#header {\n  width: 80%;\n  margin-left: 10%;\n  text-align: center;\n  padding-top: 10%;\n  font-size: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWRhc2hib2FyZC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXFZvdGluZyUyMEFwcFxcVm90ZVZhdWx0XFxzcmNcXGFwcFxcYWRtaW4tZGFzaGJvYXJkXFxhZG1pbi1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7QUNBUjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FKIiwiZmlsZSI6ImFkbWluLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0IDogMnZoO1xyXG4gICAgfVxyXG59XHJcbiNtZW51QnV0dG9uIHsgXHJcbiAgICAtLWJhY2tncm91bmQgOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG59IiwiaW9uLWl0ZW0gaW9uLWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiAydmg7XG59XG5cbiNtZW51QnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNoZWFkZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIGZvbnQtc2l6ZTogM2VtO1xufSJdfQ== */";

/***/ }),

/***/ 2962:
/*!**********************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <!-- <ion-title id = \"title\">Elections</ion-title> -->\r\n  <h1 id=\"header\">Elections</h1>\r\n  <ion-card (click)=\"electionClicked(e)\" (click)=\"setIndex(i)\" *ngFor=\"let e of elections; let i = index\" id=\"election\">\r\n    <ion-card-header>\r\n      <ion-card-title>{{e.electionName}}</ion-card-title>\r\n      <br>\r\n      <ion-card-subtitle>#{{e.id}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n  </ion-card>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"createElection()\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"signOut()\">\r\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_admin-dashboard_admin-dashboard_module_ts.js.map