"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);
/* harmony import */ var _components_circle_circle_circle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/circle/circle/circle.component */ 56300);
/* harmony import */ var _components_landing_header_landing_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/landing-header/landing-header.component */ 38265);









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage, _components_circle_circle_circle_component__WEBPACK_IMPORTED_MODULE_2__.CircleComponent, _components_landing_header_landing_header_component__WEBPACK_IMPORTED_MODULE_3__.LandingHeaderComponent]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 41729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 87047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);







let LoginPage = class LoginPage {
    constructor(loadingController, alertController, router, auth) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.auth = auth;
    }
    ngOnInit() {
    }
    navigate() {
        this.router.navigate(['voter-dashboard']);
    }
    adminLogin() {
        this.router.navigate(['admin-login']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.Auth }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 87047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "h5 {\n  width: 60%;\n  margin-left: 20%;\n  margin-top: 10%;\n  color: white;\n  text-align: center;\n}\n\nion-button {\n  font-size: 0.8em;\n  position: absolute;\n  bottom: 24%;\n  width: 40%;\n  margin-left: 30%;\n  --border-radius: 25px;\n}\n\np {\n  font-size: 0.7em;\n  position: absolute;\n  bottom: 17%;\n  width: 30%;\n  margin-left: 35%;\n  text-align: center;\n  color: var(--ion-color-fade);\n}\n\n#adminLogin {\n  font-size: 0.8em;\n  position: absolute;\n  bottom: 10%;\n  width: 30%;\n  margin-left: 35%;\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcVm90aW5nJTIwQXBwXFxWb3RlVmF1bHRcXHNyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg1IHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDI0JTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDMwJTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxNyU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQgOiAzNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWZhZGUpO1xyXG59XHJcblxyXG4jYWRtaW5Mb2dpbntcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwJTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDM1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLy8gI2hlYWRlciB7XHJcbi8vICAgICB3aWR0aDogODAlO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbi8vICAgICBmb250LXNpemU6IDNlbTtcclxuLy8gfSIsImg1IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyNCU7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNyU7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi1sZWZ0OiAzNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1mYWRlKTtcbn1cblxuI2FkbWluTG9naW4ge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAlO1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tbGVmdDogMzUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */";

/***/ }),

/***/ 41729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <!-- <span class=\"circle\"></span> -->\r\n  <app-circle></app-circle>\r\n  <app-landing-header></app-landing-header>\r\n  <!-- <ion-card>\r\n    <ion-card-header id=\"title\"> -->\r\n      <!-- <ion-card-title ></ion-card-title> -->\r\n    <!-- </ion-card-header>\r\n\r\n    <ion-button size = \"medium\" (click)=\"navigate()\">View Elections</ion-button>\r\n    <br>\r\n    <ion-button (click)=\"adminLogin()\" class=\"adminLogin\" color=\"transparent\">Admin Login</ion-button>\r\n  </ion-card> -->\r\n  <h5>View Elections</h5>\r\n  <ion-button (click)=\"navigate()\">View Elections</ion-button>\r\n  <p>or</p>\r\n  <p id=\"adminLogin\" (click)=\"adminLogin()\">Admin Login</p>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map