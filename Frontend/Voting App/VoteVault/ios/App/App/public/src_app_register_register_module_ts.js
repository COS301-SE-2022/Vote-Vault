"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 3963:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 8135);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 8723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 3963);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 8135);
/* harmony import */ var _angular_router_testing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router/testing */ 9504);








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _angular_router_testing__WEBPACK_IMPORTED_MODULE_7__.RouterTestingModule.withRoutes([])
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 8135:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 4754);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let RegisterPage = class RegisterPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.voterIDs = [];
        this.voterNames = [];
        this.voterSurnames = [];
    }
    registerVoter() {
        const nVoter = { name: this.name, surname: this.surname, id: this.idNum, isRegistered: false };
        if (nVoter.name === undefined || nVoter.surname === undefined || nVoter.id === undefined) {
            alert('Please make sure all fields are filled in.');
            return;
        }
        if (nVoter.id.length !== 13) {
            alert('Please enter an ID number with a length of 13.');
            return;
        }
        if (!/^[0-9]+$/.test(nVoter.id)) {
            alert('Please make sure the ID only exists of digits.');
            return;
        }
        const first = this.voterIDs.find((obj) => obj === nVoter.id);
        if (first != null) {
            alert('The entered ID is already registered with a voter.');
            return;
        }
        this.voterNames.push(nVoter.name);
        this.voterSurnames.push(nVoter.surname);
        this.voterIDs.push(nVoter.id);
        this.name = '';
        this.surname = '';
        this.idNum = '';
    }
    openCustom() {
        this.router.navigate(['admin-dashboard']);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 6219:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-card-title {\n  text-decoration: underline;\n}\n\nion-card {\n  background-color: var(--ion-color-tertiary-shade);\n}\n\n.voter-Details {\n  width: 50%;\n  left: 25%;\n}\n\nbody > ion-card > ion-card-header > ion-card-title {\n  color: white;\n  font-size: 150%;\n}\n\n@media (max-width: 992px) {\n  .voter-Details {\n    width: auto;\n    left: auto;\n  }\n}\n\n#menuButton {\n  --background: transparent;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcVm90aW5nJTIwQXBwXFxWb3RlVmF1bHRcXHNyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFVBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDQUoiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSk7XHJcbn1cclxuXHJcbi52b3Rlci1EZXRhaWxzIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbn1cclxuXHJcbmJvZHkgPiBpb24tY2FyZCA+IGlvbi1jYXJkLWhlYWRlciA+IGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC52b3Rlci1EZXRhaWxzIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4jbWVudUJ1dHRvbiB7IFxyXG4gICAgLS1iYWNrZ3JvdW5kIDogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogYXV0bztcclxufSIsImlvbi1jYXJkLXRpdGxlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlKTtcbn1cblxuLnZvdGVyLURldGFpbHMge1xuICB3aWR0aDogNTAlO1xuICBsZWZ0OiAyNSU7XG59XG5cbmJvZHkgPiBpb24tY2FyZCA+IGlvbi1jYXJkLWhlYWRlciA+IGlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1MCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAudm90ZXItRGV0YWlscyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbGVmdDogYXV0bztcbiAgfVxufVxuI21lbnVCdXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogYXV0bztcbn0iXX0= */";

/***/ }),

/***/ 4754:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<body>\r\n  <ion-button id = \"menuButton\" (click) = \"openCustom()\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button> \r\n  <ion-header class=\"ion-margin-bottom\">\r\n    <ion-toolbar class=\"ion-text-center\">\r\n      <ion-title id=\"page-heading\">Voter Registration</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-card class=\"voter-Details ion-text-center ion-padding\">\r\n    <ion-card-header>\r\n      <ion-card-title>\r\n        Voter Details\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-item color=\"light\">\r\n      <ion-label position=\"floating\">First Name:</ion-label>\r\n      <ion-input [(ngModel)] = \"name\" placeholder=\"Enter first name here\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item color=\"light\">\r\n      <ion-label position=\"floating\">Last Name:</ion-label>\r\n      <ion-input [(ngModel)] = \"surname\" placeholder=\"Enter last name here\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item color=\"light\">\r\n      <ion-label position=\"floating\">ID Number:</ion-label>\r\n      <ion-input [(ngModel)] = \"idNum\" placeholder=\"Enter ID number here\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item  class=\"ion-align-items-center\" color=\"light\">\r\n      <ion-label position=\"floating\">Scan ID:</ion-label>\r\n      <ion-button size=\"medium\">\r\n        <ion-icon name=\"camera-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n\r\n    <ion-button class=\"ion-margin-top\" (click) = \"registerVoter()\">\r\n        Register Voter\r\n    </ion-button>\r\n  </ion-card>\r\n</body>";

/***/ }),

/***/ 446:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/common/fesm2015/testing.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MOCK_PLATFORM_LOCATION_CONFIG": () => (/* binding */ MOCK_PLATFORM_LOCATION_CONFIG),
/* harmony export */   "MockLocationStrategy": () => (/* binding */ MockLocationStrategy),
/* harmony export */   "MockPlatformLocation": () => (/* binding */ MockPlatformLocation),
/* harmony export */   "SpyLocation": () => (/* binding */ SpyLocation)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/**
 * @license Angular v13.2.7
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Joins two parts of a URL with a slash if needed.
 *
 * @param start  URL string
 * @param end    URL string
 *
 *
 * @returns The joined URL string.
 */

function joinWithSlash(start, end) {
  if (start.length == 0) {
    return end;
  }

  if (end.length == 0) {
    return start;
  }

  let slashes = 0;

  if (start.endsWith('/')) {
    slashes++;
  }

  if (end.startsWith('/')) {
    slashes++;
  }

  if (slashes == 2) {
    return start + end.substring(1);
  }

  if (slashes == 1) {
    return start + end;
  }

  return start + '/' + end;
}
/**
 * Removes a trailing slash from a URL string if needed.
 * Looks for the first occurrence of either `#`, `?`, or the end of the
 * line as `/` characters and removes the trailing slash if one exists.
 *
 * @param url URL string.
 *
 * @returns The URL string, modified if needed.
 */


function stripTrailingSlash(url) {
  const match = url.match(/#|\?|$/);
  const pathEndIdx = match && match.index || url.length;
  const droppedSlashIdx = pathEndIdx - (url[pathEndIdx - 1] === '/' ? 1 : 0);
  return url.slice(0, droppedSlashIdx) + url.slice(pathEndIdx);
}
/**
 * Normalizes URL parameters by prepending with `?` if needed.
 *
 * @param  params String of URL parameters.
 *
 * @returns The normalized URL parameters string.
 */


function normalizeQueryParams(params) {
  return params && params[0] !== '?' ? '?' + params : params;
}
/**
 * A spy for {@link Location} that allows tests to fire simulated location events.
 *
 * @publicApi
 */


class SpyLocation {
  constructor() {
    this.urlChanges = [];
    this._history = [new LocationState('', '', null)];
    this._historyIndex = 0;
    /** @internal */

    this._subject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** @internal */

    this._baseHref = '';
    /** @internal */

    this._platformStrategy = null;
    /** @internal */

    this._platformLocation = null;
    /** @internal */

    this._urlChangeListeners = [];
  }

  setInitialPath(url) {
    this._history[this._historyIndex].path = url;
  }

  setBaseHref(url) {
    this._baseHref = url;
  }

  path() {
    return this._history[this._historyIndex].path;
  }

  getState() {
    return this._history[this._historyIndex].state;
  }

  isCurrentPathEqualTo(path, query = '') {
    const givenPath = path.endsWith('/') ? path.substring(0, path.length - 1) : path;
    const currPath = this.path().endsWith('/') ? this.path().substring(0, this.path().length - 1) : this.path();
    return currPath == givenPath + (query.length > 0 ? '?' + query : '');
  }

  simulateUrlPop(pathname) {
    this._subject.emit({
      'url': pathname,
      'pop': true,
      'type': 'popstate'
    });
  }

  simulateHashChange(pathname) {
    const path = this.prepareExternalUrl(pathname);
    this.pushHistory(path, '', null);
    this.urlChanges.push('hash: ' + pathname); // the browser will automatically fire popstate event before each `hashchange` event, so we need
    // to simulate it.

    this._subject.emit({
      'url': pathname,
      'pop': true,
      'type': 'popstate'
    });

    this._subject.emit({
      'url': pathname,
      'pop': true,
      'type': 'hashchange'
    });
  }

  prepareExternalUrl(url) {
    if (url.length > 0 && !url.startsWith('/')) {
      url = '/' + url;
    }

    return this._baseHref + url;
  }

  go(path, query = '', state = null) {
    path = this.prepareExternalUrl(path);
    this.pushHistory(path, query, state);
    const locationState = this._history[this._historyIndex - 1];

    if (locationState.path == path && locationState.query == query) {
      return;
    }

    const url = path + (query.length > 0 ? '?' + query : '');
    this.urlChanges.push(url);

    this._notifyUrlChangeListeners(path + normalizeQueryParams(query), state);
  }

  replaceState(path, query = '', state = null) {
    path = this.prepareExternalUrl(path);
    const history = this._history[this._historyIndex];

    if (history.path == path && history.query == query) {
      return;
    }

    history.path = path;
    history.query = query;
    history.state = state;
    const url = path + (query.length > 0 ? '?' + query : '');
    this.urlChanges.push('replace: ' + url);

    this._notifyUrlChangeListeners(path + normalizeQueryParams(query), state);
  }

  forward() {
    if (this._historyIndex < this._history.length - 1) {
      this._historyIndex++;

      this._subject.emit({
        'url': this.path(),
        'state': this.getState(),
        'pop': true,
        'type': 'popstate'
      });
    }
  }

  back() {
    if (this._historyIndex > 0) {
      this._historyIndex--;

      this._subject.emit({
        'url': this.path(),
        'state': this.getState(),
        'pop': true,
        'type': 'popstate'
      });
    }
  }

  historyGo(relativePosition = 0) {
    const nextPageIndex = this._historyIndex + relativePosition;

    if (nextPageIndex >= 0 && nextPageIndex < this._history.length) {
      this._historyIndex = nextPageIndex;

      this._subject.emit({
        'url': this.path(),
        'state': this.getState(),
        'pop': true,
        'type': 'popstate'
      });
    }
  }

  onUrlChange(fn) {
    this._urlChangeListeners.push(fn);

    if (!this._urlChangeSubscription) {
      this._urlChangeSubscription = this.subscribe(v => {
        this._notifyUrlChangeListeners(v.url, v.state);
      });
    }
  }
  /** @internal */


  _notifyUrlChangeListeners(url = '', state) {
    this._urlChangeListeners.forEach(fn => fn(url, state));
  }

  subscribe(onNext, onThrow, onReturn) {
    return this._subject.subscribe({
      next: onNext,
      error: onThrow,
      complete: onReturn
    });
  }

  normalize(url) {
    return null;
  }

  pushHistory(path, query, state) {
    if (this._historyIndex > 0) {
      this._history.splice(this._historyIndex + 1);
    }

    this._history.push(new LocationState(path, query, state));

    this._historyIndex = this._history.length - 1;
  }

}

SpyLocation.ɵfac = function SpyLocation_Factory(t) {
  return new (t || SpyLocation)();
};

SpyLocation.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: SpyLocation,
  factory: SpyLocation.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpyLocation, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

class LocationState {
  constructor(path, query, state) {
    this.path = path;
    this.query = query;
    this.state = state;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A mock implementation of {@link LocationStrategy} that allows tests to fire simulated
 * location events.
 *
 * @publicApi
 */


class MockLocationStrategy extends _angular_common__WEBPACK_IMPORTED_MODULE_1__.LocationStrategy {
  constructor() {
    super();
    this.internalBaseHref = '/';
    this.internalPath = '/';
    this.internalTitle = '';
    this.urlChanges = [];
    /** @internal */

    this._subject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.stateChanges = [];
  }

  simulatePopState(url) {
    this.internalPath = url;

    this._subject.emit(new _MockPopStateEvent(this.path()));
  }

  path(includeHash = false) {
    return this.internalPath;
  }

  prepareExternalUrl(internal) {
    if (internal.startsWith('/') && this.internalBaseHref.endsWith('/')) {
      return this.internalBaseHref + internal.substring(1);
    }

    return this.internalBaseHref + internal;
  }

  pushState(ctx, title, path, query) {
    // Add state change to changes array
    this.stateChanges.push(ctx);
    this.internalTitle = title;
    const url = path + (query.length > 0 ? '?' + query : '');
    this.internalPath = url;
    const externalUrl = this.prepareExternalUrl(url);
    this.urlChanges.push(externalUrl);
  }

  replaceState(ctx, title, path, query) {
    // Reset the last index of stateChanges to the ctx (state) object
    this.stateChanges[(this.stateChanges.length || 1) - 1] = ctx;
    this.internalTitle = title;
    const url = path + (query.length > 0 ? '?' + query : '');
    this.internalPath = url;
    const externalUrl = this.prepareExternalUrl(url);
    this.urlChanges.push('replace: ' + externalUrl);
  }

  onPopState(fn) {
    this._subject.subscribe({
      next: fn
    });
  }

  getBaseHref() {
    return this.internalBaseHref;
  }

  back() {
    if (this.urlChanges.length > 0) {
      this.urlChanges.pop();
      this.stateChanges.pop();
      const nextUrl = this.urlChanges.length > 0 ? this.urlChanges[this.urlChanges.length - 1] : '';
      this.simulatePopState(nextUrl);
    }
  }

  forward() {
    throw 'not implemented';
  }

  getState() {
    return this.stateChanges[(this.stateChanges.length || 1) - 1];
  }

}

MockLocationStrategy.ɵfac = function MockLocationStrategy_Factory(t) {
  return new (t || MockLocationStrategy)();
};

MockLocationStrategy.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MockLocationStrategy,
  factory: MockLocationStrategy.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MockLocationStrategy, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [];
  }, null);
})();

class _MockPopStateEvent {
  constructor(newUrl) {
    this.newUrl = newUrl;
    this.pop = true;
    this.type = 'popstate';
  }

}
/**
 * Parser from https://tools.ietf.org/html/rfc3986#appendix-B
 * ^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?
 *  12            3  4          5       6  7        8 9
 *
 * Example: http://www.ics.uci.edu/pub/ietf/uri/#Related
 *
 * Results in:
 *
 * $1 = http:
 * $2 = http
 * $3 = //www.ics.uci.edu
 * $4 = www.ics.uci.edu
 * $5 = /pub/ietf/uri/
 * $6 = <undefined>
 * $7 = <undefined>
 * $8 = #Related
 * $9 = Related
 */


const urlParse = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;

function parseUrl(urlStr, baseHref) {
  const verifyProtocol = /^((http[s]?|ftp):\/\/)/;
  let serverBase; // URL class requires full URL. If the URL string doesn't start with protocol, we need to add
  // an arbitrary base URL which can be removed afterward.

  if (!verifyProtocol.test(urlStr)) {
    serverBase = 'http://empty.com/';
  }

  let parsedUrl;

  try {
    parsedUrl = new URL(urlStr, serverBase);
  } catch (e) {
    const result = urlParse.exec(serverBase || '' + urlStr);

    if (!result) {
      throw new Error(`Invalid URL: ${urlStr} with base: ${baseHref}`);
    }

    const hostSplit = result[4].split(':');
    parsedUrl = {
      protocol: result[1],
      hostname: hostSplit[0],
      port: hostSplit[1] || '',
      pathname: result[5],
      search: result[6],
      hash: result[8]
    };
  }

  if (parsedUrl.pathname && parsedUrl.pathname.indexOf(baseHref) === 0) {
    parsedUrl.pathname = parsedUrl.pathname.substring(baseHref.length);
  }

  return {
    hostname: !serverBase && parsedUrl.hostname || '',
    protocol: !serverBase && parsedUrl.protocol || '',
    port: !serverBase && parsedUrl.port || '',
    pathname: parsedUrl.pathname || '/',
    search: parsedUrl.search || '',
    hash: parsedUrl.hash || ''
  };
}
/**
 * Provider for mock platform location config
 *
 * @publicApi
 */


const MOCK_PLATFORM_LOCATION_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MOCK_PLATFORM_LOCATION_CONFIG');
/**
 * Mock implementation of URL state.
 *
 * @publicApi
 */

class MockPlatformLocation {
  constructor(config) {
    this.baseHref = '';
    this.hashUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.urlChangeIndex = 0;
    this.urlChanges = [{
      hostname: '',
      protocol: '',
      port: '',
      pathname: '/',
      search: '',
      hash: '',
      state: null
    }];

    if (config) {
      this.baseHref = config.appBaseHref || '';
      const parsedChanges = this.parseChanges(null, config.startUrl || 'http://_empty_/', this.baseHref);
      this.urlChanges[0] = Object.assign({}, parsedChanges);
    }
  }

  get hostname() {
    return this.urlChanges[this.urlChangeIndex].hostname;
  }

  get protocol() {
    return this.urlChanges[this.urlChangeIndex].protocol;
  }

  get port() {
    return this.urlChanges[this.urlChangeIndex].port;
  }

  get pathname() {
    return this.urlChanges[this.urlChangeIndex].pathname;
  }

  get search() {
    return this.urlChanges[this.urlChangeIndex].search;
  }

  get hash() {
    return this.urlChanges[this.urlChangeIndex].hash;
  }

  get state() {
    return this.urlChanges[this.urlChangeIndex].state;
  }

  getBaseHrefFromDOM() {
    return this.baseHref;
  }

  onPopState(fn) {
    // No-op: a state stack is not implemented, so
    // no events will ever come.
    return () => {};
  }

  onHashChange(fn) {
    const subscription = this.hashUpdate.subscribe(fn);
    return () => subscription.unsubscribe();
  }

  get href() {
    let url = `${this.protocol}//${this.hostname}${this.port ? ':' + this.port : ''}`;
    url += `${this.pathname === '/' ? '' : this.pathname}${this.search}${this.hash}`;
    return url;
  }

  get url() {
    return `${this.pathname}${this.search}${this.hash}`;
  }

  parseChanges(state, url, baseHref = '') {
    // When the `history.state` value is stored, it is always copied.
    state = JSON.parse(JSON.stringify(state));
    return Object.assign(Object.assign({}, parseUrl(url, baseHref)), {
      state
    });
  }

  replaceState(state, title, newUrl) {
    const {
      pathname,
      search,
      state: parsedState,
      hash
    } = this.parseChanges(state, newUrl);
    this.urlChanges[this.urlChangeIndex] = Object.assign(Object.assign({}, this.urlChanges[this.urlChangeIndex]), {
      pathname,
      search,
      hash,
      state: parsedState
    });
  }

  pushState(state, title, newUrl) {
    const {
      pathname,
      search,
      state: parsedState,
      hash
    } = this.parseChanges(state, newUrl);

    if (this.urlChangeIndex > 0) {
      this.urlChanges.splice(this.urlChangeIndex + 1);
    }

    this.urlChanges.push(Object.assign(Object.assign({}, this.urlChanges[this.urlChangeIndex]), {
      pathname,
      search,
      hash,
      state: parsedState
    }));
    this.urlChangeIndex = this.urlChanges.length - 1;
  }

  forward() {
    const oldUrl = this.url;
    const oldHash = this.hash;

    if (this.urlChangeIndex < this.urlChanges.length) {
      this.urlChangeIndex++;
    }

    this.scheduleHashUpdate(oldHash, oldUrl);
  }

  back() {
    const oldUrl = this.url;
    const oldHash = this.hash;

    if (this.urlChangeIndex > 0) {
      this.urlChangeIndex--;
    }

    this.scheduleHashUpdate(oldHash, oldUrl);
  }

  historyGo(relativePosition = 0) {
    const oldUrl = this.url;
    const oldHash = this.hash;
    const nextPageIndex = this.urlChangeIndex + relativePosition;

    if (nextPageIndex >= 0 && nextPageIndex < this.urlChanges.length) {
      this.urlChangeIndex = nextPageIndex;
    }

    this.scheduleHashUpdate(oldHash, oldUrl);
  }

  getState() {
    return this.state;
  }

  scheduleHashUpdate(oldHash, oldUrl) {
    if (oldHash !== this.hash) {
      scheduleMicroTask(() => this.hashUpdate.next({
        type: 'hashchange',
        state: null,
        oldUrl,
        newUrl: this.url
      }));
    }
  }

}

MockPlatformLocation.ɵfac = function MockPlatformLocation_Factory(t) {
  return new (t || MockPlatformLocation)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MOCK_PLATFORM_LOCATION_CONFIG, 8));
};

MockPlatformLocation.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MockPlatformLocation,
  factory: MockPlatformLocation.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MockPlatformLocation, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MOCK_PLATFORM_LOCATION_CONFIG]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, null);
})();

function scheduleMicroTask(cb) {
  Promise.resolve(null).then(cb);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 9504:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/router/fesm2015/testing.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterTestingModule": () => (/* binding */ RouterTestingModule),
/* harmony export */   "setupTestingRouter": () => (/* binding */ setupTestingRouter)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_testing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/testing */ 446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 2816);
/**
 * @license Angular v13.2.7
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file exists to easily patch the SpyNgModuleFactoryLoader into g3

const EXTRA_ROUTER_TESTING_PROVIDERS = [];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

function isUrlHandlingStrategy(opts) {
  // This property check is needed because UrlHandlingStrategy is an interface and doesn't exist at
  // runtime.
  return 'shouldProcessUrl' in opts;
}
/**
 * Router setup factory function used for testing.
 *
 * @publicApi
 */


function setupTestingRouter(urlSerializer, contexts, location, compiler, injector, routes, opts, urlHandlingStrategy, routeReuseStrategy) {
  const router = new _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router(null, urlSerializer, contexts, location, injector, compiler, (0,_angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵflatten"])(routes));

  if (opts) {
    // Handle deprecated argument ordering.
    if (isUrlHandlingStrategy(opts)) {
      router.urlHandlingStrategy = opts;
    } else {
      // Handle ExtraOptions
      (0,_angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵassignExtraOptionsToRouter"])(opts, router);
    }
  }

  if (urlHandlingStrategy) {
    router.urlHandlingStrategy = urlHandlingStrategy;
  }

  if (routeReuseStrategy) {
    router.routeReuseStrategy = routeReuseStrategy;
  }

  return router;
}
/**
 * @description
 *
 * Sets up the router to be used for testing.
 *
 * The modules sets up the router to be used for testing.
 * It provides spy implementations of `Location` and `LocationStrategy`.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * beforeEach(() => {
 *   TestBed.configureTestingModule({
 *     imports: [
 *       RouterTestingModule.withRoutes(
 *         [{path: '', component: BlankCmp}, {path: 'simple', component: SimpleCmp}]
 *       )
 *     ]
 *   });
 * });
 * ```
 *
 * @publicApi
 */


class RouterTestingModule {
  static withRoutes(routes, config) {
    return {
      ngModule: RouterTestingModule,
      providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_0__.provideRoutes)(routes), {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_0__.ROUTER_CONFIGURATION,
        useValue: config ? config : {}
      }]
    };
  }

}

RouterTestingModule.ɵfac = function RouterTestingModule_Factory(t) {
  return new (t || RouterTestingModule)();
};

RouterTestingModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: RouterTestingModule,
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
RouterTestingModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵROUTER_PROVIDERS"], EXTRA_ROUTER_TESTING_PROVIDERS, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location,
    useClass: _angular_common_testing__WEBPACK_IMPORTED_MODULE_3__.SpyLocation
  }, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__.LocationStrategy,
    useClass: _angular_common_testing__WEBPACK_IMPORTED_MODULE_3__.MockLocationStrategy
  }, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router,
    useFactory: setupTestingRouter,
    deps: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.UrlSerializer, _angular_router__WEBPACK_IMPORTED_MODULE_0__.ChildrenOutletContexts, _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Compiler, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector, _angular_router__WEBPACK_IMPORTED_MODULE_0__.ROUTES, _angular_router__WEBPACK_IMPORTED_MODULE_0__.ROUTER_CONFIGURATION, [_angular_router__WEBPACK_IMPORTED_MODULE_0__.UrlHandlingStrategy, new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional()], [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouteReuseStrategy, new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional()]]
  }, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_0__.PreloadingStrategy,
    useExisting: _angular_router__WEBPACK_IMPORTED_MODULE_0__.NoPreloading
  }, (0,_angular_router__WEBPACK_IMPORTED_MODULE_0__.provideRoutes)([])],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RouterTestingModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
      providers: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵROUTER_PROVIDERS"], EXTRA_ROUTER_TESTING_PROVIDERS, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location,
        useClass: _angular_common_testing__WEBPACK_IMPORTED_MODULE_3__.SpyLocation
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__.LocationStrategy,
        useClass: _angular_common_testing__WEBPACK_IMPORTED_MODULE_3__.MockLocationStrategy
      }, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router,
        useFactory: setupTestingRouter,
        deps: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.UrlSerializer, _angular_router__WEBPACK_IMPORTED_MODULE_0__.ChildrenOutletContexts, _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Compiler, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector, _angular_router__WEBPACK_IMPORTED_MODULE_0__.ROUTES, _angular_router__WEBPACK_IMPORTED_MODULE_0__.ROUTER_CONFIGURATION, [_angular_router__WEBPACK_IMPORTED_MODULE_0__.UrlHandlingStrategy, new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional()], [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouteReuseStrategy, new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional()]]
      }, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_0__.PreloadingStrategy,
        useExisting: _angular_router__WEBPACK_IMPORTED_MODULE_0__.NoPreloading
      }, (0,_angular_router__WEBPACK_IMPORTED_MODULE_0__.provideRoutes)([])]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file exists for easily patching SpyNgModuleFactoryLoader in g3


var spy_ng_module_factory_loader = {};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map