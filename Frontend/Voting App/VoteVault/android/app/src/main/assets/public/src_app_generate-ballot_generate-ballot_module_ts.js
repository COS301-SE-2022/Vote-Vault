"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_generate-ballot_generate-ballot_module_ts"],{

/***/ 99967:
/*!*******************************************************************!*\
  !*** ./src/app/generate-ballot/generate-ballot-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateBallotPageRoutingModule": () => (/* binding */ GenerateBallotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _generate_ballot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-ballot.page */ 83269);




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

/***/ 92846:
/*!***********************************************************!*\
  !*** ./src/app/generate-ballot/generate-ballot.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateBallotPageModule": () => (/* binding */ GenerateBallotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _generate_ballot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-ballot-routing.module */ 99967);
/* harmony import */ var _generate_ballot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-ballot.page */ 83269);







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

/***/ 83269:
/*!*********************************************************!*\
  !*** ./src/app/generate-ballot/generate-ballot.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateBallotPage": () => (/* binding */ GenerateBallotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _generate_ballot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-ballot.page.html?ngResource */ 51644);
/* harmony import */ var _generate_ballot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-ballot.page.scss?ngResource */ 74183);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 81502);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/contract.service */ 36569);










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
                duration: 60000
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

/***/ 74183:
/*!**********************************************************************!*\
  !*** ./src/app/generate-ballot/generate-ballot.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  height: 100%;\n}\n\n#header {\n  font-size: 3vh;\n  padding: 2vh;\n  width: 60%;\n  margin-left: 20%;\n  text-align: center;\n}\n\n#ballotNameBtn {\n  margin-top: 5vh;\n  width: 40%;\n  margin-bottom: 8vh;\n}\n\n#addItem {\n  padding: 1vh;\n  margin: auto;\n  width: 80%;\n}\n\nion-slide {\n  display: inline;\n}\n\nion-card {\n  padding: 2vh;\n  margin-bottom: 10vh;\n}\n\nion-button {\n  width: 30%;\n  margin-top: 2vh;\n}\n\nion-item {\n  --background: transparent !important;\n  --background-color: transparent;\n}\n\nion-label {\n  --color: transparent;\n}\n\n#genBtn {\n  width: 80%;\n  bottom: 2vh;\n}\n\n#finalSlide {\n  margin: auto;\n}\n\n.swiper-pagination {\n  position: fixed;\n  bottom: 0px;\n  padding-bottom: 3px;\n}\n\n#menuButton {\n  width: auto;\n}\n\n#titleInput {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.itemIcon {\n  position: absolute;\n  right: 0;\n  bottom: 1vh;\n}\n\nion-label {\n  font-weight: bold;\n  margin-left: 7vw;\n}\n\n#title-div {\n  padding-top: 10px;\n}\n\ninput {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  outline: none;\n  font-size: 0.8em;\n  height: 2.5em;\n  border: none;\n  width: 90%;\n  margin-left: 5vw;\n  margin-bottom: 10%;\n  border-radius: 25px;\n  margin-top: 5px;\n  background-color: var(--ion-color-fade);\n  padding-left: 5%;\n}\n\n#electionTitle {\n  margin-right: 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRlLWJhbGxvdC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXFZvdGluZyUyMEFwcFxcVm90ZVZhdWx0XFxzcmNcXGFwcFxcZ2VuZXJhdGUtYmFsbG90XFxnZW5lcmF0ZS1iYWxsb3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ0o7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUVBLFdBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUVJLFdBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUNESjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNGSjs7QURLQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLGlCQUFBO0FDRko7O0FES0E7RUFDSSwyQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FDRko7O0FESUE7RUFDSSxpQkFBQTtBQ0RKIiwiZmlsZSI6ImdlbmVyYXRlLWJhbGxvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7IFxyXG4gICAgaGVpZ2h0IDogMTAwJTtcclxufVxyXG5cclxuI2hlYWRlciB7IFxyXG4gICAgZm9udC1zaXplIDogM3ZoO1xyXG4gICAgcGFkZGluZzogMnZoO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNiYWxsb3ROYW1lQnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIHdpZHRoOiAgICAgIDQwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDh2aDtcclxufVxyXG5cclxuI2FkZEl0ZW0ge1xyXG4gICAgcGFkZGluZzogMXZoO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLXNsaWRlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgcGFkZGluZzogMnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxufVxyXG5pb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOjMwJTtcclxuICAgIG1hcmdpbi10b3A6IDJ2aDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jZ2VuQnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDJ2aDtcclxufVxyXG5cclxuI2ZpbmFsU2xpZGUge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4jbWVudUJ1dHRvbiB7IFxyXG4gICAgLy8gLS1iYWNrZ3JvdW5kIDogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuI3RpdGxlSW5wdXQge1xyXG4gICAgZGlzcGxheSA6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIFxyXG59XHJcblxyXG4uaXRlbUljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDF2aDtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tbGVmdDogN3Z3O1xyXG59XHJcblxyXG4jdGl0bGUtZGl2e1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1mYWRlKTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuI2VsZWN0aW9uVGl0bGV7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDV2dztcclxufSIsImlvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jaGVhZGVyIHtcbiAgZm9udC1zaXplOiAzdmg7XG4gIHBhZGRpbmc6IDJ2aDtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYmFsbG90TmFtZUJ0biB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWJvdHRvbTogOHZoO1xufVxuXG4jYWRkSXRlbSB7XG4gIHBhZGRpbmc6IDF2aDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODAlO1xufVxuXG5pb24tc2xpZGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbmlvbi1jYXJkIHtcbiAgcGFkZGluZzogMnZoO1xuICBtYXJnaW4tYm90dG9tOiAxMHZoO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNnZW5CdG4ge1xuICB3aWR0aDogODAlO1xuICBib3R0b206IDJ2aDtcbn1cblxuI2ZpbmFsU2xpZGUge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbiNtZW51QnV0dG9uIHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbiN0aXRsZUlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLml0ZW1JY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAxdmg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogN3Z3O1xufVxuXG4jdGl0bGUtZGl2IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbmlucHV0IHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWZhZGUpO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4jZWxlY3Rpb25UaXRsZSB7XG4gIG1hcmdpbi1yaWdodDogNXZ3O1xufSJdfQ== */";

/***/ }),

/***/ 51644:
/*!**********************************************************************!*\
  !*** ./src/app/generate-ballot/generate-ballot.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content id=\"main\"> \r\n  <div id=\"titleInput\">\r\n    <ion-button color = \"primary\" id = \"menuButton\" (click) = \"openCustom()\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button>\r\n    <div id=\"title-div\">\r\n      <ion-label>Election Title</ion-label>\r\n      <input id=\"electionTitle\" [(ngModel)] = \"electionTitle\">   \r\n    </div>\r\n  </div>\r\n  <ion-slides #slides pager=\"true\" mode=\"ios\" (ionSlideDidChange)=\"ionSlidesDidLoad(slides)\">\r\n    <ion-slide>\r\n      <ion-item id=\"pageName\">\r\n        <ion-label position=\"floating\">Ballot Name</ion-label>\r\n        <ion-input id=\"name\" [(ngModel)] = \"ballotName\"></ion-input>  \r\n        <!-- <ion-button id=\"ballotNameBtn\" slot=\"end\" (click)=\"saveBallotName()\">Confirm Name</ion-button>  -->\r\n      </ion-item>\r\n      <ion-card>\r\n        Candidate Details\r\n        <ion-item id=\"addItem\">\r\n          <ion-label position=\"floating\">Name</ion-label>\r\n          <ion-input [(ngModel)] = \"name\"></ion-input>   \r\n        </ion-item>\r\n      \r\n        <ion-item id=\"addItem\">\r\n          <ion-label position=\"floating\">Surname</ion-label>\r\n          <ion-input [(ngModel)] = \"surname\"></ion-input>\r\n        </ion-item>\r\n      \r\n        <ion-item id=\"addItem\">\r\n          <ion-label position=\"floating\">ID Number</ion-label>\r\n          <ion-input [(ngModel)] = \"idNum\"></ion-input>\r\n        </ion-item>\r\n        <ion-button (click) = \"addOption()\" size=\"small\">Add</ion-button>\r\n        </ion-card>\r\n      \r\n        <ion-card>\r\n        Candidate List\r\n          <ion-item *ngFor=\"let o of ballot1Options\">\r\n            <ion-label>{{o.name}} {{o.surname}}, {{o.id}}<ion-icon (click)=\"removeCandidate(o)\" class = \"itemIcon\" size = \"large\" name=\"close-circle-outline\" position=\"end\"></ion-icon></ion-label>\r\n          </ion-item>\r\n      \r\n      </ion-card>\r\n      <ion-button id=\"ballotNameBtn\" (click)=\"saveBallotName()\">Save Ballot</ion-button>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <ion-item id=\"pageName\">\r\n        <ion-label position=\"floating\">Ballot Name</ion-label>\r\n        <ion-input [(ngModel)] = \"ballotName1\"></ion-input>   \r\n        <!-- <ion-button (click)=\"saveBallotName()\" id=\"ballotNameBtn\" slot=\"end\">Confirm Name</ion-button>  -->\r\n      </ion-item>\r\n      <ion-card>\r\n        Candidate Details\r\n        <ion-item id=\"addItem\">\r\n          <ion-label position=\"floating\">Name</ion-label>\r\n          <ion-input id=\"name\" [(ngModel)] = \"name\"></ion-input>   \r\n        </ion-item>\r\n      \r\n        <ion-item id=\"addItem\">\r\n          <ion-label position=\"floating\">Surname</ion-label>\r\n          <ion-input [(ngModel)] = \"surname\"></ion-input>\r\n        </ion-item>\r\n      \r\n        <ion-item id=\"addItem\">\r\n          <ion-label position=\"floating\">ID Number</ion-label>\r\n          <ion-input [(ngModel)] = \"idNum\"></ion-input>\r\n        </ion-item>\r\n        <ion-button (click) = \"addOption()\" size=\"small\">Add</ion-button>\r\n        </ion-card>\r\n      \r\n        <ion-card>\r\n        Candidate List\r\n          <ion-item *ngFor=\"let o of ballot2Options\">\r\n            <ion-label>{{o.name}} {{o.surname}}, {{o.id}}<ion-icon (click)=\"removeCandidate(o)\" class = \"itemIcon\" size = \"large\" name=\"close-circle-outline\" position=\"end\"></ion-icon></ion-label>\r\n          </ion-item>\r\n      \r\n      </ion-card>\r\n      <ion-button id=\"ballotNameBtn\" (click)=\"saveBallotName()\">Save Ballot</ion-button>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <ion-item id=\"pageName\">\r\n        <ion-label position=\"floating\">Ballot Name</ion-label>\r\n        <ion-input [(ngModel)] = \"ballotName2\"></ion-input>   \r\n        <!-- <ion-button (click)=\"saveBallotName()\" id=\"ballotNameBtn\" slot=\"end\">Confirm Name</ion-button>  -->\r\n      </ion-item>\r\n    <ion-card>\r\n      Candidate Details\r\n    <ion-item id=\"addItem\">\r\n    <ion-label position=\"floating\">Name</ion-label>\r\n    <ion-input id=\"name\" [(ngModel)] = \"name\"></ion-input>   \r\n  </ion-item>\r\n\r\n  <ion-item id=\"addItem\">\r\n    <ion-label position=\"floating\">Surname</ion-label>\r\n    <ion-input [(ngModel)] = \"surname\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item id=\"addItem\">\r\n    <ion-label position=\"floating\">ID Number</ion-label>\r\n    <ion-input [(ngModel)] = \"idNum\"></ion-input>\r\n  </ion-item>\r\n  <ion-button (click) = \"addOption()\" size=\"small\">Add</ion-button>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n  Candidate List\r\n    <ion-item *ngFor=\"let o of ballot3Options\">\r\n      <ion-label>{{o.name}} {{o.surname}}, {{o.id}}<ion-icon (click)=\"removeCandidate(o)\" class = \"itemIcon\" size = \"large\" name=\"close-circle-outline\" position=\"end\"></ion-icon></ion-label>\r\n    </ion-item>\r\n\r\n  </ion-card>\r\n  <ion-button id=\"ballotNameBtn\" (click)=\"saveBallotName()\">Save Ballot</ion-button>\r\n  <!-- <ion-button id=\"genBtn\" (click)=\"generate()\">Generate</ion-button> -->\r\n  </ion-slide>\r\n\r\n  <ion-slide id=\"finalSlide\">\r\n    You are about to save the ballots.\r\n  <ion-button id=\"genBtn\" (click)=\"generate()\">Save</ion-button>\r\n  </ion-slide>\r\n  </ion-slides>\r\n  \r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_generate-ballot_generate-ballot_module_ts.js.map