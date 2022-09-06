(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 3412)).then(m => m.FolderPageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_contract_service_ts"), __webpack_require__.e("src_app_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./register/register.module */ 18723)).then(m => m.RegisterPageModule)
    },
    {
        path: 'ballot',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_contract_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_ballot_ballot_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ballot/ballot.module */ 28068)).then(m => m.BallotPageModule)
    },
    {
        path: 'generate-ballot',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_contract_service_ts"), __webpack_require__.e("src_app_generate-ballot_generate-ballot_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./generate-ballot/generate-ballot.module */ 92846)).then(m => m.GenerateBallotPageModule)
    },
    {
        path: 'admin-login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_contract_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-login_admin-login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-login/admin-login.module */ 82806)).then(m => m.AdminLoginPageModule)
    },
    {
        path: 'admin-dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin-dashboard_admin-dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-dashboard/admin-dashboard.module */ 73870)).then(m => m.AdminDashboardPageModule)
    },
    {
        path: 'voter-dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_voter-dashboard_voter-dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./voter-dashboard/voter-dashboard.module */ 93582)).then(m => m.VoterDashboardPageModule)
    },
    {
        path: 'voter-registration',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_contract_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_voter-registration_voter-registration_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./voter-registration/voter-registration.module */ 55729)).then(m => m.VoterRegistrationPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AppComponent = class AppComponent {
    constructor() {
        this.appPages = [
            { title: 'Register Voter', url: '/register', icon: 'person-add' },
            { title: 'Generate Ballots', url: '/generate-ballot', icon: 'create' },
            { title: 'Ballots', url: '/ballot', icon: 'book' },
            { title: 'Login', url: '/login', icon: 'log-in' },
        ];
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/app */ 89674);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ 81502);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 5684);














let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_10__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_10__.initializeApp)(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.getFirestore)()),
            (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__.getAuth)())],
        providers: [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner, _data_service__WEBPACK_IMPORTED_MODULE_3__.DataService, { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy }, _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 81502:
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Voter": () => (/* binding */ Voter),
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 31866);




class Voter {
    Voter(n, sn, id, g) {
        this.birthName = n;
        this.surname = sn;
        this.IDnum = id;
        this.Gender = g;
        this.Voted = false;
    }
}
let DataService = class DataService {
    constructor(firestore) {
        this.firestore = firestore;
        this.electionOptions = [];
        this.ballot1 = {};
        this.ballot2 = {};
        this.ballot3 = {};
        this.ballot1.options = [];
        this.ballot1.name = '';
        this.ballot2.options = [];
        this.ballot2.name = '';
        this.ballot3.options = [];
        this.ballot3.name = '';
        this.votes = [];
        this.userEmail = '';
        this.elections = [];
        this.registeredUsers = [];
        this.electionName = '';
        this.adminState = '';
        this.electionID = '';
        this.voter = null;
        this.contractAddress = '';
        this.voterId = '';
        // this.deployContract()
    }
    setAdminState(s) {
        this.adminState = s;
    }
    fetchAllElections() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const colRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(this.firestore, 'elections');
            const electionsSnap = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(colRef);
            let elections = [];
            electionsSnap.forEach(doc => {
                const e = {};
                // console.log(doc.data())
                e.ballots = doc.data().ballots;
                e.users = doc.data().users;
                e.electionName = doc.data().electionName;
                e.id = doc.id;
                e.voted = doc.data().voted;
                e.address = doc.data().address;
                // console.log(doc.data().election)
                elections.push(e);
            });
            return elections;
        });
    }
    fetchElections() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.elections = [];
            //TODO: Fetch elections for signed in user
            const adminRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, 'admins', 'ssdpressed@gmail.com');
            const adminSnap = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(adminRef);
            if (adminSnap.exists()) {
                console.log("Document data:", adminSnap.data());
                const election_id_array = adminSnap.data().elections;
                election_id_array.forEach((id) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        //Retrieve Election
                        const electionSnap = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, 'elections', id));
                        const e = {};
                        // console.log(doc.data())
                        e.ballots = electionSnap.data().ballots;
                        e.users = electionSnap.data().users;
                        e.electionName = electionSnap.data().electionName;
                        e.id = electionSnap.id;
                        e.voted = electionSnap.data().voted;
                        e.address = electionSnap.data().address;
                        // console.log(doc.data().election)
                        this.elections.push(e);
                    }
                    catch (e) {
                        //console.error(e)
                    }
                }));
            }
            else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        });
    }
    checkVoters(idnum) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let found;
            found = false;
            const registeredIDs = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, 'elections', this.electionID);
            const getrefID = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(registeredIDs);
            const idfound = {};
            try {
                for (let index = 0; index < getrefID.data().users.length; index++) {
                    if (idnum === getrefID.data().users[index].id) {
                        found = true;
                        throw idfound;
                    }
                    if (found == true) {
                        alert('shouldnt reach this');
                        throw idfound;
                    }
                }
            }
            catch (error) {
                return true;
            }
            if (found == false) {
                return false;
            }
        });
    }
    editElection(e) {
        console.log(e);
        this.ballot1.options = e.ballots[0].options;
        this.ballot2.options = e.ballots[1].options;
        this.ballot3.options = e.ballots[2].options;
        this.ballot1.name = e.ballots[0].name;
        this.ballot2.name = e.ballots[1].name;
        this.ballot3.name = e.ballots[2].name;
        this.electionName = e.electionName;
        this.electionID = e.id;
        this.contractAddress = e.address;
    }
    saveEdit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const electionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, 'elections', this.electionID);
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(electionRef, {
                adminEmail: this.userEmail,
                ballots: [this.ballot1, this.ballot2, this.ballot3],
                electionName: this.electionName,
                active: true,
                users: this.registeredUsers
            }).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                yield this.fetchElections();
            }));
        });
    }
    saveElection(contractAddress) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let electionId = "";
            const electionRef = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(this.firestore, 'elections'), {
                adminEmail: this.userEmail,
                ballots: [this.ballot1, this.ballot2, this.ballot3],
                electionName: this.electionName,
                active: true,
                users: this.registeredUsers,
                address: contractAddress,
                voted: []
            }).then((ref) => {
                this.mapAdminToElection(ref);
                electionId = ref.id;
                const e = {};
                e.adminEmail = this.userEmail;
                e.ballots = [this.ballot1, this.ballot2, this.ballot3];
                e.electionName = this.electionName;
                e.active = true;
                e.users = this.registeredUsers;
                e.address = contractAddress;
                e.voted = [];
                e.id = ref.id;
                this.elections.push(e);
            }).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                // await this.fetchElections()
            }));
            return electionId;
        });
    }
    mapAdminToElection(ref) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.log(ref.id);
            const id = ref.id;
            const adminRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, 'admins', this.userEmail);
            const adminSnap = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(adminRef);
            if (adminSnap.exists()) {
                yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(adminRef, {
                    elections: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(id)
                });
            }
            else {
                yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, "admins", this.userEmail), {
                    elections: [id]
                });
            }
        });
    }
    clear() {
        this.ballot1 = {};
        this.ballot2 = {};
        this.ballot3 = {};
        this.ballot1.options = [];
        this.ballot1.name = '';
        this.ballot2.options = [];
        this.ballot2.name = '';
        this.ballot3.options = [];
        this.ballot3.name = '';
        // this.votes = []
        // this.elections = []
        this.electionName = '';
    }
    setUserEmail(s) {
        this.userEmail = s;
    }
    saveElectionName(s) {
        this.electionName = s;
    }
    addOption(o, i) {
        switch (i) {
            case 0: {
                this.ballot1.options.push(o);
                break;
            }
            case 1: {
                this.ballot2.options.push(o);
                break;
            }
            case 2: {
                this.ballot3.options.push(o);
                break;
            }
        }
        console.log(this.ballot1);
    }
    removeOption(index, i) {
        switch (i) {
            case 0: {
                if (index != -1) {
                    this.ballot1.options.splice(index, 1);
                }
                ;
                break;
            }
            case 1: {
                if (index != -1) {
                    this.ballot2.options.splice(index, 1);
                }
                ;
                break;
            }
            case 2: {
                if (index != -1) {
                    this.ballot3.options.splice(index, 1);
                }
                ;
                break;
            }
        }
    }
    getOptions(i) {
        switch (i) {
            case 0: {
                return this.ballot1.options;
                break;
            }
            case 1: {
                return this.ballot2.options;
                break;
            }
            case 2: {
                return this.ballot3.options;
                break;
            }
        }
    }
    getBallot(i) {
        switch (i) {
            case 0: {
                return this.ballot1;
                break;
            }
            case 1: {
                return this.ballot2;
                break;
            }
            case 2: {
                return this.ballot3;
                break;
            }
        }
    }
    saveBallotName(name, index) {
        switch (index) {
            case 0: {
                this.ballot1.name = name;
                break;
            }
            case 1: {
                this.ballot2.name = name;
                break;
            }
            case 2: {
                this.ballot3.name = name;
                break;
            }
        }
    }
    addvoter(nvoter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveVoter(nvoter);
        });
    }
    createVoter(name, surname, id, gender) {
        this.voter = new Voter();
        this.voter.Voter(name, surname, id, gender);
        return this.voter;
    }
    saveVoter(v) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const voter = {
                name: v.birthName,
                surname: v.surname,
                gender: v.Gender,
                id: v.IDnum,
                voted: v.Voted
            };
            const electionRef = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(this.firestore, 'voters'), {
                voter
            });
            //Save to elections collection
            const elRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, 'elections', this.electionID);
            const elSnap = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(elRef);
            if (elSnap.exists()) {
                yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(elRef, {
                    users: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(voter)
                });
            }
        });
    }
    deleteElection(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, "elections", id));
        });
    }
    setVote(v) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let found;
            found = false;
            let i;
            i = -1;
            const registeredIDs = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, 'elections', this.electionID);
            const getrefID = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(registeredIDs);
            const idfound = {};
            try {
                for (let index = 0; index < getrefID.data().users.length; index++) {
                    if (v.IDnum === getrefID.data().users[index].id) {
                        found = true;
                        v.Voted = true;
                        getrefID.data().users[index].voted = true;
                        i = index;
                        throw idfound;
                    }
                    if (found == true) {
                        alert('shouldnt reach this');
                        throw idfound;
                    }
                }
            }
            catch (error) {
            }
        });
    }
    checkVoted(v) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let found;
            found = false;
            const registeredIDs = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, 'elections', this.electionID);
            const getrefID = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(registeredIDs);
            const idfound = {};
            try {
                for (let index = 0; index < getrefID.data().users.length; index++) {
                    if (v.IDnum === getrefID.data().voted[index].id) {
                        found = true;
                        throw idfound;
                    }
                    if (found == true) {
                        alert('shouldnt reach this');
                        throw idfound;
                    }
                }
            }
            catch (error) {
                return true;
            }
            return false;
        });
    }
    vote(v) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const voter = {
                name: v.birthName,
                surname: v.surname,
                gender: v.Gender,
                id: v.IDnum,
                voted: true
            };
            //Save to elections collection under voted
            const elRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, 'elections', this.electionID);
            const elSnap = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(elRef);
            if (elSnap.exists()) {
                yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(elRef, {
                    voted: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(voter)
                });
            }
        });
    }
};
DataService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    firebase: {
        apiKey: "AIzaSyCp6Fe8i7QAlvtfgs9YWd1v154p7x7iT3A",
        authDomain: "votevault-23c86.firebaseapp.com",
        projectId: "votevault-23c86",
        storageBucket: "votevault-23c86.appspot.com",
        messagingSenderId: "173079414550",
        appId: "1:173079414550:web:d057d49d669af633043237",
    },
    contractABI: '[{"constant":true,"inputs":[],"name":"startDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"votes_one","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"endDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"votes_two","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"votes_three","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"electionID","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"id","type":"string"},{"name":"sd","type":"uint256"},{"name":"ed","type":"uint256"},{"name":"numCandidates","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"id","type":"string"},{"name":"age","type":"uint256"},{"name":"gender","type":"string"}],"name":"registerUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"string"},{"name":"votes","type":"uint256[]"}],"name":"addVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getId","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"string"}],"name":"updateId","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]',
    contractBytecode: '0x60806040523480156200001157600080fd5b50604051620010f9380380620010f9833981018060405260808110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b828101905060208101848111156200006757600080fd5b81518560018202830111640100000000821117156200008557600080fd5b505092919060200180519060200190929190805190602001909291908051640100000000811115620000b657600080fd5b82810190506020810184811115620000cd57600080fd5b8151856020820283011164010000000082111715620000eb57600080fd5b505092919050505083600390805190602001906200010b9291906200034e565b5082600481905550816005819055508060008151811015156200012a57fe5b90602001906020020151604051908082528060200260200182016040528015620001635781602001602082028038833980820191505090505b50600090805190602001906200017b929190620003d5565b508060018151811015156200018c57fe5b90602001906020020151604051908082528060200260200182016040528015620001c55781602001602082028038833980820191505090505b5060019080519060200190620001dd929190620003d5565b50806002815181101515620001ee57fe5b90602001906020020151604051908082528060200260200182016040528015620002275781602001602082028038833980820191505090505b50600290805190602001906200023f929190620003d5565b5060008090505b8160008151811015156200025657fe5b906020019060200201518110156200029557600080828154811015156200027957fe5b9060005260206000200181905550808060010191505062000246565b5060008090505b816001815181101515620002ac57fe5b90602001906020020151811015620002ec576000600182815481101515620002d057fe5b906000526020600020018190555080806001019150506200029c565b5060008090505b8160028151811015156200030357fe5b90602001906020020151811015620003435760006002828154811015156200032757fe5b90600052602060002001819055508080600101915050620002f3565b50505050506200044f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200039157805160ff1916838001178555620003c2565b82800160010185558215620003c2579182015b82811115620003c1578251825591602001919060010190620003a4565b5b509050620003d1919062000427565b5090565b82805482825590600052602060002090810192821562000414579160200282015b8281111562000413578251825591602001919060010190620003f6565b5b50905062000423919062000427565b5090565b6200044c91905b80821115620004485760008160009055506001016200042e565b5090565b90565b610c9a806200045f6000396000f3fe6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630b97bc86146100a9578063151cb180146100d45780635295da5d146101235780635d1ca6311461027f5780635ede13731461030f57806362609da4146103d7578063c24a0f8b14610540578063dfd66c6d1461056b578063f0b99cdd146105ba578063f8e78e9a14610609575b600080fd5b3480156100b557600080fd5b506100be610699565b6040518082815260200191505060405180910390f35b3480156100e057600080fd5b5061010d600480360360208110156100f757600080fd5b810190808035906020019092919050505061069f565b6040518082815260200191505060405180910390f35b34801561012f57600080fd5b5061027d6004803603604081101561014657600080fd5b810190808035906020019064010000000081111561016357600080fd5b82018360208201111561017557600080fd5b8035906020019184600183028401116401000000008311171561019757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156101fa57600080fd5b82018360208201111561020c57600080fd5b8035906020019184602083028401116401000000008311171561022e57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506106c2565b005b34801561028b57600080fd5b50610294610888565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102d45780820151818401526020810190506102b9565b50505050905090810190601f1680156103015780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561031b57600080fd5b506103d56004803603602081101561033257600080fd5b810190808035906020019064010000000081111561034f57600080fd5b82018360208201111561036157600080fd5b8035906020019184600183028401116401000000008311171561038357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061092a565b005b3480156103e357600080fd5b5061053e600480360360608110156103fa57600080fd5b810190808035906020019064010000000081111561041757600080fd5b82018360208201111561042957600080fd5b8035906020019184600183028401116401000000008311171561044b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001906401000000008111156104b857600080fd5b8201836020820111156104ca57600080fd5b803590602001918460018302840111640100000000831117156104ec57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610944565b005b34801561054c57600080fd5b50610555610a45565b6040518082815260200191505060405180910390f35b34801561057757600080fd5b506105a46004803603602081101561058e57600080fd5b8101908080359060200190929190505050610a4b565b6040518082815260200191505060405180910390f35b3480156105c657600080fd5b506105f3600480360360208110156105dd57600080fd5b8101908080359060200190929190505050610a6e565b6040518082815260200191505060405180910390f35b34801561061557600080fd5b5061061e610a91565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561065e578082015181840152602081019050610643565b50505050905090810190601f16801561068b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60045481565b6000818154811015156106ae57fe5b906000526020600020016000915090505481565b600160008260008151811015156106d557fe5b906020019060200201518154811015156106eb57fe5b906000526020600020015401600082600081518110151561070857fe5b9060200190602002015181548110151561071e57fe5b90600052602060002001819055506001600082600181518110151561073f57fe5b9060200190602002015181548110151561075557fe5b906000526020600020015401600082600181518110151561077257fe5b9060200190602002015181548110151561078857fe5b9060005260206000200181905550600160008260028151811015156107a957fe5b906020019060200201518154811015156107bf57fe5b90600052602060002001540160008260028151811015156107dc57fe5b906020019060200201518154811015156107f257fe5b906000526020600020018190555060016007836040518082805190602001908083835b60208310151561083a5780518252602082019150602081019050602083039250610815565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548160ff0219169083151502179055505050565b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109205780601f106108f557610100808354040283529160200191610920565b820191906000526020600020905b81548152906001019060200180831161090357829003601f168201915b5050505050905090565b8060039080519060200190610940929190610b2f565b5050565b60006007846040518082805190602001908083835b60208310151561097e5780518252602082019150602081019050602083039250610959565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548160ff0219169083151502179055506109d0610baf565b604080519081016040528084815260200183815250905060068190806001815401808255809150509060018203906000526020600020906002020160009091929091909150600082015181600001556020820151816001019080519060200190610a3b929190610bc9565b5050505050505050565b60055481565b600181815481101515610a5a57fe5b906000526020600020016000915090505481565b600281815481101515610a7d57fe5b906000526020600020016000915090505481565b60038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b275780601f10610afc57610100808354040283529160200191610b27565b820191906000526020600020905b815481529060010190602001808311610b0a57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610b7057805160ff1916838001178555610b9e565b82800160010185558215610b9e579182015b82811115610b9d578251825591602001919060010190610b82565b5b509050610bab9190610c49565b5090565b604080519081016040528060008152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c0a57805160ff1916838001178555610c38565b82800160010185558215610c38579182015b82811115610c37578251825591602001919060010190610c1c565b5b509050610c459190610c49565b5090565b610c6b91905b80821115610c67576000816000905550600101610c4f565b5090565b9056fea165627a7a723058209fc548a31c2954fa8f0965fe95574c5125f09881e8aa594d7a13c3256c6c2bcf0029',
    privateKey: '0x1bfdd10e791617c7e8e9c7d0a451b45f1fcf07c831504d8f2fa0727a2b166cd2'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxWb3RpbmclMjBBcHBcXFZvdGVWYXVsdFxcc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTs7RUFFRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkRBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FDQUY7O0FEYUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNWRjs7QURhQTtFQUNFLHNEQUFBO0FDVkY7O0FEYUE7RUFDRSwrQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsY0FBQTtBQ1ZGOztBRGFBO0VBQ0UsZ0JBQUE7QUNWRjs7QURhQTtFQUNFLHNCQUFBO0FDVkY7O0FEYUE7RUFDRSxtQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ1ZGOztBRGFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDVkY7O0FEYUE7RUFDRSwrQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNWRjs7QURhQTtFQUNFLGtCQUFBO0FDVkY7O0FEYUE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQ1ZGOztBRGFBO0VBQ0Usa0JBQUE7QUNWRjs7QURhQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FDWEY7O0FEY0E7RUFDRSxpQ0FBQTtBQ1hGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4vLyBpb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbi8vICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbi8vICAgY29sb3I6ICM3NTc1NzU7XHJcblxyXG4vLyAgIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbi8vIH1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgY29sb3I6ICM2MTZlN2U7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICM3Mzg0OWE7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1ub3RlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn0iLCJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <!-- <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content>\r\n        <ion-list id=\"inbox-list\">\r\n          <ion-list-header>VoteVault</ion-list-header>\r\n          <ion-note>The most secure voting app of All Time</ion-note>\r\n\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\r\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu> -->\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  <!-- </ion-split-pane> -->\r\n</ion-app>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
