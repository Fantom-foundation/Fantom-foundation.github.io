(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./guide/guide.module": [
		"./src/app/guide/guide.module.ts",
		"guide-guide-module"
	],
	"./root/root.module": [
		"./src/app/root/root.module.ts",
		"root-root-module"
	],
	"./wiki/wiki.module": [
		"./src/app/wiki/wiki.module.ts",
		"wiki-wiki-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', loadChildren: './root/root.module#RootModule' },
    { path: 'guide', loadChildren: './guide/guide.module#GuideModule' },
    { path: 'wiki', loadChildren: './wiki/wiki.module#WikiModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { /*enableTracing: true,*/ scrollPositionRestoration: 'enabled' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar class=\"mat-elevation-z6\"></app-navbar>\n<div style=\"padding-top: 55px\"></div>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-root {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 56px;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\napp-navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  margin-bottom: 55px !important; }\n\napp-root > app-component-sidenav {\n  flex: 1; }\n\napp-root > app-getting-started,\napp-root > app-guides {\n  overflow-y: auto; }\n\n@media (max-width: 720px) {\n  app-root {\n    top: 92px; }\n  app-root > app-getting-started,\n  app-root > app-guides {\n    overflow-y: visible; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW11ZWwvcmVwb3MvZmFudG9tL2ZhbnRvbS1kZXYtd2ViL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsVUFBUztFQUNULFVBQVM7RUFDVCxRQUFPO0VBQ1AsU0FBUSxFQUNUOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixPQUFNO0VBQ04sUUFBTztFQUNQLFNBQVE7RUFDUixXQUFVO0VBQ1YsK0JBQThCLEVBQy9COztBQUVEO0VBQ0UsUUFBTyxFQUNSOztBQUVEOztFQUVFLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFO0lBQ0UsVUFBUyxFQUNWO0VBRUQ7O0lBRUUsb0JBQW1CLEVBQ3BCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcm9vdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG5hcHAtbmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tYm90dG9tOiA1NXB4ICFpbXBvcnRhbnQ7XG59XG5cbmFwcC1yb290ID4gYXBwLWNvbXBvbmVudC1zaWRlbmF2IHtcbiAgZmxleDogMTtcbn1cblxuYXBwLXJvb3QgPiBhcHAtZ2V0dGluZy1zdGFydGVkLFxuYXBwLXJvb3QgPiBhcHAtZ3VpZGVzIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIGFwcC1yb290IHtcbiAgICB0b3A6IDkycHg7XG4gIH1cblxuICBhcHAtcm9vdCA+IGFwcC1nZXR0aW5nLXN0YXJ0ZWQsXG4gIGFwcC1yb290ID4gYXBwLWd1aWRlcyB7XG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'fantom-dev';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _platform_picker_platform_picker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./platform-picker/platform-picker.service */ "./src/app/platform-picker/platform-picker.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.module */ "./src/app/navbar/navbar.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.module */ "./src/app/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_6__["NavbarModule"],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"]
            ],
            providers: [_platform_picker_platform_picker_service__WEBPACK_IMPORTED_MODULE_3__["PlatformPickerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"docs-footer\">\n  <div class=\"docs-footer-list\">\n    <div class=\"docs-footer-logo\">\n      <div class=\"footer-logo\">\n        <a href=\"https://github.com/Fantom-foundation\" target=\"_blank\" aria-label=\"GitHub\">\n          <img class=\"docs-footer-angular-logo\"\n               src=\"assets/img/logos/github-circle-white-transparent.svg\"\n               alt=\"GitHub\">\n        </a>\n        <a href=\"https://github.com/Fantom-foundation\" target=\"_blank\" aria-label=\"Gitter\">\n          <img class=\"docs-footer-angular-logo\"\n               src=\"assets/img/logos/gitter.svg\"\n               alt=\"GitHub\">\n        </a>\n        <a href=\"https://github.com/Fantom-foundation\" target=\"_blank\" aria-label=\"Telegram\">\n          <img class=\"docs-footer-angular-logo\"\n               src=\"assets/img/logos/telegram.svg\"\n               alt=\"GitHub\">\n        </a>&emsp;\n      </div>\n    </div>\n\n    <div class=\"docs-footer-version\">\n      <button mat-button routerLink=\"guide/getting-started\">Getting started</button>\n      <button mat-button routerLink=\"/wiki\">Wiki</button>\n    </div>\n\n    <div class=\"docs-footer-copyright\">\n      <span>Code licensed under an MIT-style License.</span>\n      <span>Documentation licensed under CC BY 4.0.</span>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".docs-footer {\n  padding: 12px;\n  font-size: 12px;\n  margin-top: 40px; }\n\n.docs-footer-list {\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  padding: 8px; }\n\n.docs-footer-logo {\n  flex: 1; }\n\n.docs-footer-angular-logo {\n  height: 50px; }\n\n.docs-footer-version {\n  flex: 1;\n  text-align: center; }\n\n.docs-footer-copyright {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n  flex-direction: column;\n  min-width: 225px;\n  text-align: center; }\n\n.docs-footer-logo span {\n  display: inline-block;\n  line-height: 50px;\n  margin: 0 40px;\n  vertical-align: bottom; }\n\n.docs-footer-logo span a {\n    font-size: 16px;\n    padding: 0;\n    text-decoration: none;\n    color: inherit; }\n\n.docs-footer-logo span a:hover {\n      text-decoration: underline; }\n\n@media screen and (max-width: 884px) {\n  .docs-footer-list {\n    flex-direction: column; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW11ZWwvcmVwb3MvZmFudG9tL2ZhbnRvbS1kZXYtd2ViL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYixnQkFBZTtFQUNmLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGFBQVksRUFDYjs7QUFFRDtFQUNFLFFBQU8sRUFDUjs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLFFBQU87RUFDUCxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsUUFBTztFQUNQLDBCQUF5QjtFQUN6Qix1QkFBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLHNCQUFxQjtFQUNyQixrQkFBaUI7RUFDakIsZUFBYztFQUNkLHVCQUFzQixFQVl2Qjs7QUFoQkQ7SUFPSSxnQkFBZTtJQUNmLFdBQVU7SUFDVixzQkFBcUI7SUFDckIsZUFBYyxFQUtmOztBQWZIO01BYU0sMkJBQTBCLEVBQzNCOztBQUlMO0VBQ0U7SUFDRSx1QkFBc0IsRUFDdkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jcy1mb290ZXIge1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5kb2NzLWZvb3Rlci1saXN0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uZG9jcy1mb290ZXItbG9nbyB7XG4gIGZsZXg6IDE7XG59XG5cbi5kb2NzLWZvb3Rlci1hbmd1bGFyLWxvZ28ge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5kb2NzLWZvb3Rlci12ZXJzaW9uIHtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZG9jcy1mb290ZXItY29weXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAyMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZG9jcy1mb290ZXItbG9nbyBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwIDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG5cbiAgYSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODg0cHgpe1xuICAuZG9jcy1mb290ZXItbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.version = '0.0.1';
    }
    FooterComponent.prototype.scrollToTop = function () {
        document.getElementsByTagName('app-navbar')[0].scrollIntoView({ behavior: 'smooth' });
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
            ],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TODO: figure out if the <nav> should go inside of a <header> element. -->\n<nav class=\"docs-navbar-header\">\n  <button mat-button class=\"docs-button docs-navbar-hide-vsmall\" id=\"name\" routerLink=\"/\" aria-label=\"fantom-dev\">\n    fantom-dev\n  </button>\n  <!--<a mat-button class=\"docs-navbar-hide-small docs-button\"\n     *ngFor=\"let key of sectionKeys\"\n     [routerLink]=\"key\">{{sections[key].name}}</a>\n  <a mat-button class=\"docs-navbar-hide-small docs-button\" routerLink=\"guides\">Guides</a>\n  -->\n  <ng-container *ngIf=\"w.location.pathname.indexOf('guide/getting-started') > -1\">\n    <div class=\"flex-spacer\"></div>\n    <app-platform-picker></app-platform-picker>\n  </ng-container>\n\n  <div class=\"flex-spacer\"></div>\n  <div fxFlex>\n    <a mat-icon-button\n       href=\"https://github.com/Fantom-foundation\" aria-label=\"Telegram Channel\">\n      <app-svg-viewer\n        src=\"../assets/img/logos/telegram.svg\"\n        scaleToContainer=\"true\"></app-svg-viewer>\n    </a>\n    <a mat-icon-button\n       href=\"https://github.com/Fantom-foundation\" aria-label=\"Gitter channel\">\n      <app-svg-viewer\n        src=\"../assets/img/logos/gitter.svg\"\n        scaleToContainer=\"true\"></app-svg-viewer>\n    </a>\n    <a mat-icon-button\n       href=\"https://github.com/Fantom-foundation\" aria-label=\"GitHub Repository\">\n      <app-svg-viewer\n        src=\"../assets/img/logos/github-circle-white-transparent.svg\"\n        scaleToContainer=\"true\"></app-svg-viewer>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".docs-navbar-header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 8px 16px; }\n  .docs-navbar-header > .mat-button:last-child {\n    margin-left: auto; }\n  .flex-spacer {\n  flex-grow: 1; }\n  .docs-angular-logo {\n  height: 26px;\n  margin: 0 4px 3px 0;\n  vertical-align: middle; }\n  .docs-github-logo {\n  height: 21px;\n  margin: 0 7px 2px 0;\n  vertical-align: middle; }\n  .docs-navbar-link {\n  text-decoration: inherit;\n  flex: 1; }\n  .docs-navbar {\n  display: none; }\n  .docs-navbar-show-small {\n  display: none; }\n  #name {\n  font-size: larger; }\n  /**\n  * Rules for when the device is detected to be a small screen.\n  * Moves content two rows instead of one.\n  */\n  @media (max-width: 720px) {\n  .docs-navbar-hide-small {\n    display: none; }\n  .docs-navbar-show-small {\n    display: block; }\n  .docs-navbar {\n    display: flex; }\n  .docs-navbar--github-logo {\n    margin: 0; } }\n  a {\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW11ZWwvcmVwb3MvZmFudG9tL2ZhbnRvbS1kZXYtd2ViL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYixnQkFBZTtFQUNmLG9CQUFtQjtFQUNuQixrQkFBaUIsRUFPbEI7RUFYRDtJQVFNLGtCQUFpQixFQUNsQjtFQUlMO0VBQ0UsYUFBWSxFQUNiO0VBRUQ7RUFDRSxhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLHVCQUFzQixFQUN2QjtFQUVEO0VBQ0UsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQix1QkFBc0IsRUFDdkI7RUFFRDtFQUNFLHlCQUF3QjtFQUN4QixRQUFPLEVBQ1I7RUFFRDtFQUNFLGNBQWEsRUFDZDtFQUVEO0VBQ0UsY0FBYSxFQUNkO0VBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7RUFFRDs7O0lBR0k7RUFDSjtFQUNFO0lBQ0UsY0FBYSxFQUNkO0VBRUQ7SUFDRSxlQUFjLEVBQ2Y7RUFFRDtJQUNFLGNBQWEsRUFDZDtFQUVEO0lBQ0UsVUFBUyxFQUNWLEVBQUE7RUFJSDtFQUNFLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jcy1uYXZiYXItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMTZweDtcblxuICA+IC5tYXQtYnV0dG9uIHtcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgfVxuICB9XG59XG5cbi5mbGV4LXNwYWNlciB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmRvY3MtYW5ndWxhci1sb2dvIHtcbiAgaGVpZ2h0OiAyNnB4O1xuICBtYXJnaW46IDAgNHB4IDNweCAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZG9jcy1naXRodWItbG9nbyB7XG4gIGhlaWdodDogMjFweDtcbiAgbWFyZ2luOiAwIDdweCAycHggMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRvY3MtbmF2YmFyLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIGZsZXg6IDE7XG59XG5cbi5kb2NzLW5hdmJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kb2NzLW5hdmJhci1zaG93LXNtYWxsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI25hbWUge1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuLyoqXG4gICogUnVsZXMgZm9yIHdoZW4gdGhlIGRldmljZSBpcyBkZXRlY3RlZCB0byBiZSBhIHNtYWxsIHNjcmVlbi5cbiAgKiBNb3ZlcyBjb250ZW50IHR3byByb3dzIGluc3RlYWQgb2Ygb25lLlxuICAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5kb2NzLW5hdmJhci1oaWRlLXNtYWxsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmRvY3MtbmF2YmFyLXNob3ctc21hbGwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmRvY3MtbmF2YmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmRvY3MtbmF2YmFyLS1naXRodWItbG9nbyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cblxuYSB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.w = window;
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.module.ts":
/*!*****************************************!*\
  !*** ./src/app/navbar/navbar.module.ts ***!
  \*****************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _platform_picker_platform_picker_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../platform-picker/platform-picker.module */ "./src/app/platform-picker/platform-picker.module.ts");
/* harmony import */ var _svg_viewer_svg_viewer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../svg-viewer/svg-viewer.module */ "./src/app/svg-viewer/svg-viewer.module.ts");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar.component */ "./src/app/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _svg_viewer_svg_viewer_module__WEBPACK_IMPORTED_MODULE_5__["SvgViewerModule"], _platform_picker_platform_picker_module__WEBPACK_IMPORTED_MODULE_4__["PlatformPickerModule"]
            ],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/platform-picker/platform-picker.component.html":
/*!****************************************************************!*\
  !*** ./src/app/platform-picker/platform-picker.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select [(ngModel)]=\"platformSelectd\"\n              (selectionChange)=updateService($event)>\n    <mat-option *ngFor=\"let platform of platformPickerService.platforms\" [value]=platform>\n      {{ platform }}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/app/platform-picker/platform-picker.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/platform-picker/platform-picker.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-select-placeholder, .mat-select-trigger, .mat-select-value-text {\n  color: rgba(255, 255, 255, 0.87) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW11ZWwvcmVwb3MvZmFudG9tL2ZhbnRvbS1kZXYtd2ViL3NyYy9hcHAvcGxhdGZvcm0tcGlja2VyL3BsYXRmb3JtLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRDQUEyQyxFQUM1QyIsImZpbGUiOiJzcmMvYXBwL3BsYXRmb3JtLXBpY2tlci9wbGF0Zm9ybS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXNlbGVjdC1wbGFjZWhvbGRlciwgLm1hdC1zZWxlY3QtdHJpZ2dlciwgLm1hdC1zZWxlY3QtdmFsdWUtdGV4dCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/platform-picker/platform-picker.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/platform-picker/platform-picker.component.ts ***!
  \**************************************************************/
/*! exports provided: PlatformPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformPickerComponent", function() { return PlatformPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _platform_picker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform-picker.service */ "./src/app/platform-picker/platform-picker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlatformPickerComponent = /** @class */ (function () {
    function PlatformPickerComponent(platformPickerService) {
        this.platformPickerService = platformPickerService;
    }
    PlatformPickerComponent.prototype.ngOnInit = function () {
        this.platformSelectd = this.platformPickerService.getPlatform();
    };
    PlatformPickerComponent.prototype.updateService = function (event) {
        if (event.value != null)
            this.platformPickerService.setPlatform(event.value);
    };
    PlatformPickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-platform-picker',
            template: __webpack_require__(/*! ./platform-picker.component.html */ "./src/app/platform-picker/platform-picker.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./platform-picker.component.scss */ "./src/app/platform-picker/platform-picker.component.scss")]
        }),
        __metadata("design:paramtypes", [_platform_picker_service__WEBPACK_IMPORTED_MODULE_1__["PlatformPickerService"]])
    ], PlatformPickerComponent);
    return PlatformPickerComponent;
}());



/***/ }),

/***/ "./src/app/platform-picker/platform-picker.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/platform-picker/platform-picker.module.ts ***!
  \***********************************************************/
/*! exports provided: PlatformPickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformPickerModule", function() { return PlatformPickerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _platform_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform-picker.component */ "./src/app/platform-picker/platform-picker.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PlatformPickerModule = /** @class */ (function () {
    function PlatformPickerModule() {
    }
    PlatformPickerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_platform_picker_component__WEBPACK_IMPORTED_MODULE_2__["PlatformPickerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"]
            ],
            exports: [_platform_picker_component__WEBPACK_IMPORTED_MODULE_2__["PlatformPickerComponent"]]
        })
    ], PlatformPickerModule);
    return PlatformPickerModule;
}());



/***/ }),

/***/ "./src/app/platform-picker/platform-picker.service.ts":
/*!************************************************************!*\
  !*** ./src/app/platform-picker/platform-picker.service.ts ***!
  \************************************************************/
/*! exports provided: PlatformPickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformPickerService", function() { return PlatformPickerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlatformPickerService = /** @class */ (function () {
    function PlatformPickerService() {
        this.platforms = [
            'macOS', 'Linux', 'Windows'
        ];
        var platForm = localStorage.getItem('platform');
        if (platForm == null)
            this._platform = this.platforms[1];
    }
    // public get platform(): string {
    PlatformPickerService.prototype.getPlatform = function () {
        var platForm = localStorage.getItem('platform');
        return platForm == null ? this._platform : platForm;
    };
    PlatformPickerService.prototype.is = function (platform) {
        return this.getPlatform() === platform;
    };
    // public set platform(platForm: string) {
    PlatformPickerService.prototype.setPlatform = function (platForm) {
        this._platform = platForm;
        localStorage.setItem('platform', platForm);
    };
    PlatformPickerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PlatformPickerService);
    return PlatformPickerService;
}());



/***/ }),

/***/ "./src/app/svg-viewer/svg-viewer.component.html":
/*!******************************************************!*\
  !*** ./src/app/svg-viewer/svg-viewer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"docs-svg-viewer\" aria-hidden=\"true\"></div>\n"

/***/ }),

/***/ "./src/app/svg-viewer/svg-viewer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/svg-viewer/svg-viewer.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N2Zy12aWV3ZXIvc3ZnLXZpZXdlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/svg-viewer/svg-viewer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/svg-viewer/svg-viewer.component.ts ***!
  \****************************************************/
/*! exports provided: SvgViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgViewerComponent", function() { return SvgViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SvgViewerComponent = /** @class */ (function () {
    function SvgViewerComponent(elementRef, http) {
        this.elementRef = elementRef;
        this.http = http;
    }
    SvgViewerComponent.prototype.ngOnInit = function () {
        this.fetchAndInlineSvgContent(this.src);
    };
    SvgViewerComponent.prototype.inlineSvgContent = function (template) {
        this.elementRef.nativeElement.innerHTML = template;
        if (this.scaleToContainer) {
            var svg = this.elementRef.nativeElement.querySelector('svg');
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '100%');
            svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        }
    };
    SvgViewerComponent.prototype.fetchAndInlineSvgContent = function (path) {
        var _this = this;
        var svgAbsPath = getAbsolutePathFromSrc(path);
        this.http.get(svgAbsPath, { responseType: 'text' }).subscribe(function (svgResponse) {
            _this.inlineSvgContent(svgResponse);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SvgViewerComponent.prototype, "src", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SvgViewerComponent.prototype, "scaleToContainer", void 0);
    SvgViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-svg-viewer',
            template: __webpack_require__(/*! ./svg-viewer.component.html */ "./src/app/svg-viewer/svg-viewer.component.html"),
            styles: [__webpack_require__(/*! ./svg-viewer.component.scss */ "./src/app/svg-viewer/svg-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SvgViewerComponent);
    return SvgViewerComponent;
}());

var getAbsolutePathFromSrc = function (src) { return src.slice(src.indexOf('assets/') - 1); };


/***/ }),

/***/ "./src/app/svg-viewer/svg-viewer.module.ts":
/*!*************************************************!*\
  !*** ./src/app/svg-viewer/svg-viewer.module.ts ***!
  \*************************************************/
/*! exports provided: SvgViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgViewerModule", function() { return SvgViewerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _svg_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-viewer.component */ "./src/app/svg-viewer/svg-viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SvgViewerModule = /** @class */ (function () {
    function SvgViewerModule() {
    }
    SvgViewerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_svg_viewer_component__WEBPACK_IMPORTED_MODULE_3__["SvgViewerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            exports: [_svg_viewer_component__WEBPACK_IMPORTED_MODULE_3__["SvgViewerComponent"]]
        })
    ], SvgViewerModule);
    return SvgViewerModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samuel/repos/fantom/fantom-dev-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map