"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin-login_admin-login_module_ts"],{

/***/ 63764:
/*!***********************************************************!*\
  !*** ./src/app/admin-login/admin-login-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLoginPageRoutingModule": () => (/* binding */ AdminLoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _admin_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-login.page */ 13296);




const routes = [
    {
        path: '',
        component: _admin_login_page__WEBPACK_IMPORTED_MODULE_0__.AdminLoginPage
    }
];
let AdminLoginPageRoutingModule = class AdminLoginPageRoutingModule {
};
AdminLoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminLoginPageRoutingModule);



/***/ }),

/***/ 82806:
/*!***************************************************!*\
  !*** ./src/app/admin-login/admin-login.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLoginPageModule": () => (/* binding */ AdminLoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _admin_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-login-routing.module */ 63764);
/* harmony import */ var _admin_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-login.page */ 13296);
/* harmony import */ var _components_circle_circle_circle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/circle/circle/circle.component */ 56300);
/* harmony import */ var _components_landing_header_landing_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/landing-header/landing-header.component */ 38265);









let AdminLoginPageModule = class AdminLoginPageModule {
};
AdminLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _admin_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminLoginPageRoutingModule
        ],
        declarations: [_admin_login_page__WEBPACK_IMPORTED_MODULE_1__.AdminLoginPage, _components_circle_circle_circle_component__WEBPACK_IMPORTED_MODULE_2__.CircleComponent, _components_landing_header_landing_header_component__WEBPACK_IMPORTED_MODULE_3__.LandingHeaderComponent]
    })
], AdminLoginPageModule);



/***/ }),

/***/ 13296:
/*!*************************************************!*\
  !*** ./src/app/admin-login/admin-login.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLoginPage": () => (/* binding */ AdminLoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-login.page.html?ngResource */ 56105);
/* harmony import */ var _admin_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-login.page.scss?ngResource */ 55826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/auth */ 70931);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ 81502);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contract.service */ 36569);










let AdminLoginPage = class AdminLoginPage {
    constructor(contractService, dataService, router, loadingController, alertController, auth) {
        this.contractService = contractService;
        this.dataService = dataService;
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.auth = auth;
    }
    ngOnInit() {
        // send();
    }
    navigate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.presentLoading();
                const user = yield (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(this.auth, this.email, this.password);
                this.dataService.setUserEmail(user.user.email);
                this.loadingController.dismiss();
                this.router.navigate(['admin-dashboard']);
            }
            catch (e) {
                this.loadingController.dismiss();
                this.presentAlert("Invalid credentials");
            }
        });
    }
    presentAlert(s) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.alertController.create({
                message: s,
                header: 'Invalid credentials',
                buttons: ['OK']
            });
            toast.present();
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    userLogin() {
        this.router.navigate(['login']);
    }
};
AdminLoginPage.ctorParameters = () => [
    { type: _services_contract_service__WEBPACK_IMPORTED_MODULE_4__.ContractService },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.Auth }
];
AdminLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-admin-login',
        template: _admin_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminLoginPage);



/***/ }),

/***/ 55826:
/*!**************************************************************!*\
  !*** ./src/app/admin-login/admin-login.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "h5 {\n  width: 60%;\n  margin-left: 20%;\n  margin-top: 10%;\n  color: white;\n  text-align: center;\n  margin-bottom: 10%;\n}\n\n#header {\n  width: 80%;\n  margin-left: 10%;\n  text-align: center;\n  padding-top: 10%;\n  font-size: 3em;\n}\n\np {\n  font-size: 0.7em;\n  position: absolute;\n  bottom: 17%;\n  width: 30%;\n  margin-left: 35%;\n  text-align: center;\n  color: var(--ion-color-fade);\n}\n\n#view-elections {\n  font-size: 0.8em;\n  position: absolute;\n  bottom: 10%;\n  width: 30%;\n  margin-left: 35%;\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\nion-button {\n  font-size: 0.8em;\n  position: absolute;\n  bottom: 24%;\n  width: 30%;\n  margin-left: 35%;\n  --border-radius: 25px;\n}\n\n#inputs {\n  position: absolute;\n  bottom: 30%;\n  width: 100%;\n}\n\nion-label {\n  margin-left: 20%;\n  color: black;\n  font-weight: bold;\n  font-size: 0.7em;\n}\n\ninput {\n  outline: none;\n  font-size: 0.8em;\n  height: 2.5em;\n  border: none;\n  width: 70%;\n  margin-left: 15%;\n  margin-bottom: 10%;\n  border-radius: 25px;\n  margin-top: 5px;\n  background-color: var(--ion-color-fade);\n  padding-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcVm90aW5nJTIwQXBwXFxWb3RlVmF1bHRcXHNyY1xcYXBwXFxhZG1pbi1sb2dpblxcYWRtaW4tbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJhZG1pbi1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxNyU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQgOiAzNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWZhZGUpO1xyXG59XHJcblxyXG4jdmlldy1lbGVjdGlvbnN7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMCU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQgOiAzNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjQlO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0IDogMzUlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4jaW5wdXRzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMzAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBoZWlnaHQ6IDIuNWVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWZhZGUpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuXHJcbn0iLCJoNSB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuI2hlYWRlciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgZm9udC1zaXplOiAzZW07XG59XG5cbnAge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTclO1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tbGVmdDogMzUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZmFkZSk7XG59XG5cbiN2aWV3LWVsZWN0aW9ucyB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi1sZWZ0OiAzNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjQlO1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tbGVmdDogMzUlO1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbiNpbnB1dHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cblxuaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBoZWlnaHQ6IDIuNWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZmFkZSk7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59Il19 */";

/***/ }),

/***/ 56105:
/*!**************************************************************!*\
  !*** ./src/app/admin-login/admin-login.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <app-circle></app-circle>\r\n  <app-landing-header></app-landing-header>\r\n  <h5>Admin Login</h5>\r\n  <div id=\"inputs\">\r\n    <ion-label>Email</ion-label>\r\n    <input id=\"email\" type=\"email\" [(ngModel)]=\"email\">\r\n    <ion-label>Password</ion-label>\r\n    <input id=\"password\" type=\"password\" [(ngModel)]=\"password\">\r\n  </div>\r\n  <ion-button (click)=\"navigate()\">Login</ion-button>\r\n  <p>Not an admin?</p>\r\n  <p id=\"view-elections\" (click)=\"userLogin()\">View Elections</p>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_admin-login_admin-login_module_ts.js.map