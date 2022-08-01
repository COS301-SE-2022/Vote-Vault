"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_generate-ballot_generate-ballot_module_ts"],{

/***/ 9967:
/*!*******************************************************************!*\
  !*** ./src/app/generate-ballot/generate-ballot-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateBallotPageRoutingModule": () => (/* binding */ GenerateBallotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _generate_ballot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-ballot.page */ 3269);




const routes = [
    {
        path: '',
        component: _generate_ballot_page__WEBPACK_IMPORTED_MODULE_0__.GenerateBallotPage
    }
];
let GenerateBallotPageRoutingModule = class GenerateBallotPageRoutingModule {
};
GenerateBallotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GenerateBallotPageRoutingModule);



/***/ }),

/***/ 9344:
/*!***********************************************************!*\
  !*** ./src/app/generate-ballot/generate-ballot.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateBallotPageModule": () => (/* binding */ GenerateBallotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _generate_ballot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-ballot-routing.module */ 9967);
/* harmony import */ var _generate_ballot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-ballot.page */ 3269);







let GenerateBallotPageModule = class GenerateBallotPageModule {
};
GenerateBallotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _generate_ballot_routing_module__WEBPACK_IMPORTED_MODULE_0__.GenerateBallotPageRoutingModule
        ],
        declarations: [_generate_ballot_page__WEBPACK_IMPORTED_MODULE_1__.GenerateBallotPage]
    })
], GenerateBallotPageModule);



/***/ }),

/***/ 3269:
/*!*********************************************************!*\
  !*** ./src/app/generate-ballot/generate-ballot.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateBallotPage": () => (/* binding */ GenerateBallotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _generate_ballot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-ballot.page.html?ngResource */ 1644);
/* harmony import */ var _generate_ballot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-ballot.page.scss?ngResource */ 4183);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 1502);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/contract.service */ 6569);










let GenerateBallotPage = class GenerateBallotPage {
    constructor(contractService, location, loadingController, menu, toastController, router, dataService) {
        this.contractService = contractService;
        this.location = location;
        this.loadingController = loadingController;
        this.menu = menu;
        this.toastController = toastController;
        this.router = router;
        this.dataService = dataService;
        this.slideIndex = 0;
        this.optionInput = '';
        this.name = '';
        this.surname = '';
        this.idNum = '';
        this.ballotName = '';
        this.ballotName1 = '';
        this.ballotName2 = '';
        this.electionTitle = '';
        this.ballot1Options = [];
        this.ballot2Options = [];
        this.ballot3Options = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.populateBallots();
    }
    ngOnDestroy() {
        this.dataService.clear();
    }
    populateBallots() {
        this.options = [];
        this.electionTitle = this.dataService.electionName;
        this.ballot1Options = this.dataService.ballot1.options;
        this.ballotName = this.dataService.ballot1.name;
        this.ballot2Options = this.dataService.ballot2.options;
        this.ballotName1 = this.dataService.ballot2.name;
        this.ballot3Options = this.dataService.ballot3.options;
        this.ballotName2 = this.dataService.ballot3.name;
    }
    addOption() {
        const newCandidate = { name: this.name, surname: this.surname, id: this.idNum, isChecked: false };
        //Add option to correct ballot
        this.dataService.addOption(newCandidate, this.slideIndex);
        switch (this.slideIndex) {
            case 0: {
                this.ballot1Options = this.dataService.getOptions(this.slideIndex);
                break;
            }
            case 1: {
                this.ballot2Options = this.dataService.getOptions(this.slideIndex);
                break;
            }
            case 2: {
                this.ballot3Options = this.dataService.getOptions(this.slideIndex);
                break;
            }
        }
        // console.log(this.ballot1Options)
        // console.log(this.ballot2Options)
        this.name = '';
        this.surname = '';
        this.idNum = '';
        this.toast_addUser();
    }
    generate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.dataService.saveElectionName(this.electionTitle);
            this.presentLoading();
            if (this.dataService.adminState === 'edit') {
                yield this.dataService.saveEdit()
                    .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(res);
                    this.dataService.clear();
                    // await this.dataService.fetchElections().then(() =>  {
                    this.loadingController.dismiss();
                    this.router.navigate(['admin-dashboard']);
                    // })
                }))
                    .catch((e) => {
                    console.error(e);
                    this.loadingController.dismiss();
                    this.router.navigate(['admin-dashboard']);
                });
            }
            else if (this.dataService.adminState === 'generate') {
                const sizes = [this.ballot1Options.length, this.ballot2Options.length, this.ballot3Options.length];
                //Deploy contract to blockchain with number of candidates and voters as parameters
                yield this.contractService.deploy(this.dataService.electionName, 10, 20, sizes)
                    .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    const contractAddress = res;
                    //Add election to database and save address of contract
                    yield this.dataService.saveElection(contractAddress)
                        .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        // this.dataService.clear()
                        // await this.dataService.fetchElections().then(() =>  {
                        this.loadingController.dismiss();
                        this.router.navigate(['admin-dashboard']);
                        // })
                    }))
                        .catch((e) => {
                        console.error(e);
                        this.loadingController.dismiss();
                        this.router.navigate(['admin-dashboard']);
                    });
                }));
            }
        });
    }
    ionSlidesDidLoad(slides) {
        slides.getActiveIndex().then((index) => {
            this.slideIndex = index;
            // console.log(this.slideIndex)
            this.options = this.dataService.getOptions(this.slideIndex);
        });
    }
    saveBallotName() {
        switch (this.slideIndex) {
            case 0: {
                this.dataService.saveBallotName(this.ballotName, this.slideIndex);
                break;
            }
            case 1: {
                this.dataService.saveBallotName(this.ballotName1, this.slideIndex);
                break;
            }
            case 2: {
                this.dataService.saveBallotName(this.ballotName2, this.slideIndex);
                break;
            }
        }
        this.toast_saveButton();
    }
    toast_saveButton() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                duration: 800,
                message: 'Ballot saved succesfully',
                color: 'light',
                mode: 'ios'
            });
            yield toast.present();
        });
    }
    toast_addUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                duration: 800,
                message: 'User added successfully',
                color: 'light',
                mode: 'ios'
            });
            yield toast.present();
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
    openCustom() {
        this.dataService.clear();
        // this.dataService.fetchElections()
        this.location.back();
        // this.router.navigate(['admin-dashboard']);
    }
    navigate(s) {
        this.router.navigate([s]);
    }
    removeCandidate(c) {
        switch (this.slideIndex) {
            case 0: {
                const i = this.ballot1Options.indexOf(c);
                if (i != -1) {
                    this.dataService.removeOption(i, this.slideIndex);
                }
                break;
            }
            case 1: {
                const i = this.ballot2Options.indexOf(c);
                if (i != -1) {
                    this.dataService.removeOption(i, this.slideIndex);
                }
                break;
            }
            case 2: {
                const i = this.ballot3Options.indexOf(c);
                if (i != -1) {
                    this.dataService.removeOption(i, this.slideIndex);
                }
                break;
            }
        }
    }
};
GenerateBallotPage.ctorParameters = () => [
    { type: _services_contract_service__WEBPACK_IMPORTED_MODULE_3__.ContractService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
GenerateBallotPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['slides', { static: true },] }]
};
GenerateBallotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-generate-ballot',
        template: _generate_ballot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_generate_ballot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GenerateBallotPage);



/***/ }),

/***/ 4183:
/*!**********************************************************************!*\
  !*** ./src/app/generate-ballot/generate-ballot.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  height: 100%;\n}\n\n#header {\n  font-size: 3vh;\n  padding: 2vh;\n  width: 60%;\n  margin-left: 20%;\n  text-align: center;\n}\n\n#ballotNameBtn {\n  margin-top: 5vh;\n  width: 40%;\n  margin-bottom: 8vh;\n}\n\n#addItem {\n  padding: 1vh;\n  margin: auto;\n  width: 80%;\n}\n\nion-slide {\n  display: inline;\n}\n\nion-card {\n  padding: 2vh;\n  margin-bottom: 10vh;\n}\n\nion-button {\n  width: 30%;\n  margin-top: 2vh;\n}\n\nion-item {\n  --background: transparent !important;\n  --background-color: transparent;\n}\n\nion-label {\n  --color: transparent;\n}\n\n#genBtn {\n  width: 80%;\n  bottom: 2vh;\n}\n\n#finalSlide {\n  margin: auto;\n}\n\n.swiper-pagination {\n  position: fixed;\n  bottom: 0px;\n  padding-bottom: 3px;\n}\n\n#menuButton {\n  width: auto;\n}\n\n#titleInput {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.itemIcon {\n  position: absolute;\n  right: 0;\n  bottom: 1vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRlLWJhbGxvdC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXFZvdGluZyUyMEFwcFxcVm90ZVZhdWx0XFxzcmNcXGFwcFxcZ2VuZXJhdGUtYmFsbG90XFxnZW5lcmF0ZS1iYWxsb3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ0o7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUVBLFdBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUVJLFdBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUNESjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNGSiIsImZpbGUiOiJnZW5lcmF0ZS1iYWxsb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgeyBcclxuICAgIGhlaWdodCA6IDEwMCU7XHJcbn1cclxuXHJcbiNoZWFkZXIgeyBcclxuICAgIGZvbnQtc2l6ZSA6IDN2aDtcclxuICAgIHBhZGRpbmc6IDJ2aDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jYmFsbG90TmFtZUJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICB3aWR0aDogICAgICA0MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4dmg7XHJcbn1cclxuXHJcbiNhZGRJdGVtIHtcclxuICAgIHBhZGRpbmc6IDF2aDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDJ2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XHJcbn1cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDozMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAydmg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI2dlbkJ0biB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAydmg7XHJcbn1cclxuXHJcbiNmaW5hbFNsaWRlIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnN3aXBlci1wYWdpbmF0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxufVxyXG5cclxuI21lbnVCdXR0b24geyBcclxuICAgIC8vIC0tYmFja2dyb3VuZCA6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbiN0aXRsZUlucHV0IHtcclxuICAgIGRpc3BsYXkgOiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBcclxufVxyXG5cclxuLml0ZW1JY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAxdmg7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2hlYWRlciB7XG4gIGZvbnQtc2l6ZTogM3ZoO1xuICBwYWRkaW5nOiAydmg7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2JhbGxvdE5hbWVCdG4ge1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi1ib3R0b206IDh2aDtcbn1cblxuI2FkZEl0ZW0ge1xuICBwYWRkaW5nOiAxdmg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwJTtcbn1cblxuaW9uLXNsaWRlIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG5pb24tY2FyZCB7XG4gIHBhZGRpbmc6IDJ2aDtcbiAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIC0tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4jZ2VuQnRuIHtcbiAgd2lkdGg6IDgwJTtcbiAgYm90dG9tOiAydmg7XG59XG5cbiNmaW5hbFNsaWRlIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufVxuXG4jbWVudUJ1dHRvbiB7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4jdGl0bGVJbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pdGVtSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMXZoO1xufSJdfQ== */";

/***/ }),

/***/ 1644:
/*!**********************************************************************!*\
  !*** ./src/app/generate-ballot/generate-ballot.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-menu side=\"start\" menuId=\"custom\" contentId=\"main\" class=\"my-custom-menu\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-title>Menu</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item lines=\"none\" detail=\"false\" (click)=\"navigate('admin-dashboard')\">\r\n        <ion-icon name=\"home-outline\"></ion-icon><ion-label>Dashboard</ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" detail=\"false\" (click)=\"navigate('register')\">\r\n        <ion-icon name=\"people-outline\"></ion-icon><ion-label>Register Voters</ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" detail=\"false\" (click)=\"navigate('ballot')\">\r\n        <ion-icon name=\"checkbox-outline\"></ion-icon>  <ion-label>Vote</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n   -->\r\n<ion-content id=\"main\"> \r\n  <div id=\"titleInput\">\r\n    <ion-button color = \"primary\" id = \"menuButton\" (click) = \"openCustom()\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button>\r\n    <ion-item id=\"electionTitle\">\r\n      <ion-label position=\"floating\">Election Title</ion-label>\r\n      <ion-input [(ngModel)] = \"electionTitle\"></ion-input>   \r\n    </ion-item>\r\n  </div>\r\n  <ion-slides #slides pager=\"true\" mode=\"ios\" (ionSlideDidChange)=\"ionSlidesDidLoad(slides)\">\r\n    <ion-slide>\r\n      <ion-item id=\"pageName\">\r\n        <ion-label position=\"floating\">Ballot Name</ion-label>\r\n        <ion-input id=\"name\" [(ngModel)] = \"ballotName\"></ion-input>  \r\n        <!-- <ion-button id=\"ballotNameBtn\" slot=\"end\" (click)=\"saveBallotName()\">Confirm Name</ion-button>  -->\r\n      </ion-item>\r\n      <ion-card>\r\n        Candidate Details\r\n        <ion-item id=\"addItem\">\r\n          <ion-label position=\"floating\">Name</ion-label>\r\n          <ion-input [(ngModel)] = \"name\"></ion-input>   \r\n        </ion-item>\r\n      \r\n        <ion-item id=\"addItem\">\r\n          <ion-label position=\"floating\">Surname</ion-label>\r\n          <ion-input [(ngModel)] = \"surname\"></ion-input>\r\n        </ion-item>\r\n      \r\n        <ion-item id=\"addItem\">\r\n          <ion-label position=\"floating\">ID Number</ion-label>\r\n          <ion-input [(ngModel)] = \"idNum\"></ion-input>\r\n        </ion-item>\r\n        <ion-button (click) = \"addOption()\" size=\"small\">Add</ion-button>\r\n        </ion-card>\r\n      \r\n        <ion-card>\r\n        Candidate List\r\n          <ion-item *ngFor=\"let o of ballot1Options\">\r\n            <ion-label>{{o.name}} {{o.surname}}, {{o.id}}<ion-icon (click)=\"removeCandidate(o)\" class = \"itemIcon\" size = \"large\" name=\"close-circle-outline\" position=\"end\"></ion-icon></ion-label>\r\n          </ion-item>\r\n      \r\n      </ion-card>\r\n      <ion-button id=\"ballotNameBtn\" (click)=\"saveBallotName()\">Save Ballot</ion-button>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <ion-item id=\"pageName\">\r\n        <ion-label position=\"floating\">Ballot Name</ion-label>\r\n        <ion-input [(ngModel)] = \"ballotName1\"></ion-input>   \r\n        <!-- <ion-button (click)=\"saveBallotName()\" id=\"ballotNameBtn\" slot=\"end\">Confirm Name</ion-button>  -->\r\n      </ion-item>\r\n      <ion-card>\r\n        Candidate Details\r\n        <ion-item id=\"addItem\">\r\n          <ion-label position=\"floating\">Name</ion-label>\r\n          <ion-input id=\"name\" [(ngModel)] = \"name\"></ion-input>   \r\n        </ion-item>\r\n      \r\n        <ion-item id=\"addItem\">\r\n          <ion-label position=\"floating\">Surname</ion-label>\r\n          <ion-input [(ngModel)] = \"surname\"></ion-input>\r\n        </ion-item>\r\n      \r\n        <ion-item id=\"addItem\">\r\n          <ion-label position=\"floating\">ID Number</ion-label>\r\n          <ion-input [(ngModel)] = \"idNum\"></ion-input>\r\n        </ion-item>\r\n        <ion-button (click) = \"addOption()\" size=\"small\">Add</ion-button>\r\n        </ion-card>\r\n      \r\n        <ion-card>\r\n        Candidate List\r\n          <ion-item *ngFor=\"let o of ballot2Options\">\r\n            <ion-label>{{o.name}} {{o.surname}}, {{o.id}}<ion-icon (click)=\"removeCandidate(o)\" class = \"itemIcon\" size = \"large\" name=\"close-circle-outline\" position=\"end\"></ion-icon></ion-label>\r\n          </ion-item>\r\n      \r\n      </ion-card>\r\n      <ion-button id=\"ballotNameBtn\" (click)=\"saveBallotName()\">Save Ballot</ion-button>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <ion-item id=\"pageName\">\r\n        <ion-label position=\"floating\">Ballot Name</ion-label>\r\n        <ion-input [(ngModel)] = \"ballotName2\"></ion-input>   \r\n        <!-- <ion-button (click)=\"saveBallotName()\" id=\"ballotNameBtn\" slot=\"end\">Confirm Name</ion-button>  -->\r\n      </ion-item>\r\n    <ion-card>\r\n      Candidate Details\r\n    <ion-item id=\"addItem\">\r\n    <ion-label position=\"floating\">Name</ion-label>\r\n    <ion-input id=\"name\" [(ngModel)] = \"name\"></ion-input>   \r\n  </ion-item>\r\n\r\n  <ion-item id=\"addItem\">\r\n    <ion-label position=\"floating\">Surname</ion-label>\r\n    <ion-input [(ngModel)] = \"surname\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item id=\"addItem\">\r\n    <ion-label position=\"floating\">ID Number</ion-label>\r\n    <ion-input [(ngModel)] = \"idNum\"></ion-input>\r\n  </ion-item>\r\n  <ion-button (click) = \"addOption()\" size=\"small\">Add</ion-button>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n  Candidate List\r\n    <ion-item *ngFor=\"let o of ballot3Options\">\r\n      <ion-label>{{o.name}} {{o.surname}}, {{o.id}}<ion-icon (click)=\"removeCandidate(o)\" class = \"itemIcon\" size = \"large\" name=\"close-circle-outline\" position=\"end\"></ion-icon></ion-label>\r\n    </ion-item>\r\n\r\n  </ion-card>\r\n  <ion-button id=\"ballotNameBtn\" (click)=\"saveBallotName()\">Save Ballot</ion-button>\r\n  <!-- <ion-button id=\"genBtn\" (click)=\"generate()\">Generate</ion-button> -->\r\n  </ion-slide>\r\n\r\n  <ion-slide id=\"finalSlide\">\r\n    You are about to save the ballots.\r\n  <ion-button id=\"genBtn\" (click)=\"generate()\">Save</ion-button>\r\n  </ion-slide>\r\n  </ion-slides>\r\n  \r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_generate-ballot_generate-ballot_module_ts.js.map