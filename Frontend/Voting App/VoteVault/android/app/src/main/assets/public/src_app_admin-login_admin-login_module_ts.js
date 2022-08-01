"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin-login_admin-login_module_ts"],{

/***/ 3764:
/*!***********************************************************!*\
  !*** ./src/app/admin-login/admin-login-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLoginPageRoutingModule": () => (/* binding */ AdminLoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _admin_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-login.page */ 3296);




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

/***/ 2806:
/*!***************************************************!*\
  !*** ./src/app/admin-login/admin-login.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLoginPageModule": () => (/* binding */ AdminLoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _admin_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-login-routing.module */ 3764);
/* harmony import */ var _admin_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-login.page */ 3296);







let AdminLoginPageModule = class AdminLoginPageModule {
};
AdminLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminLoginPageRoutingModule
        ],
        declarations: [_admin_login_page__WEBPACK_IMPORTED_MODULE_1__.AdminLoginPage]
    })
], AdminLoginPageModule);



/***/ }),

/***/ 3296:
/*!*************************************************!*\
  !*** ./src/app/admin-login/admin-login.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLoginPage": () => (/* binding */ AdminLoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _admin_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-login.page.html?ngResource */ 6105);
/* harmony import */ var _admin_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-login.page.scss?ngResource */ 5826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/auth */ 931);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ 1502);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contract.service */ 6569);










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

/***/ 5826:
/*!**************************************************************!*\
  !*** ./src/app/admin-login/admin-login.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  margin-top: 20%;\n  vertical-align: middle;\n  padding: 5vh;\n}\n\nion-input {\n  --background: var(--ion-color-light-tint);\n}\n\nion-button {\n  width: 40%;\n  margin-left: 30%;\n}\n\n#header {\n  width: 80%;\n  margin-left: 10%;\n  text-align: center;\n  padding-top: 10%;\n  font-size: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcVm90aW5nJTIwQXBwXFxWb3RlVmF1bHRcXHNyY1xcYXBwXFxhZG1pbi1sb2dpblxcYWRtaW4tbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJhZG1pbi1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nOiA1dmg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxufSIsImlvbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiA1dmg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbn1cblxuI2hlYWRlciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgZm9udC1zaXplOiAzZW07XG59Il19 */";

/***/ }),

/***/ 6105:
/*!**************************************************************!*\
  !*** ./src/app/admin-login/admin-login.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <h1 id=\"header\">Admin Login</h1>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <!-- <ion-card-title>Login</ion-card-title> -->\r\n      <br>\r\n      <br>\r\n      <ion-card-subtitle>Email</ion-card-subtitle>\r\n      <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\r\n      <br>\r\n      <ion-card-subtitle>Password</ion-card-subtitle>\r\n      <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n    </ion-card-header>\r\n\r\n    <ion-button expand=\"full\" (click)=\"navigate()\">Login</ion-button>\r\n    <br>\r\n    <br>\r\n    <ion-button (click)=\"userLogin()\" class=\"userLogin\" color=\"transparent\">User View</ion-button>\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_admin-login_admin-login_module_ts.js.map