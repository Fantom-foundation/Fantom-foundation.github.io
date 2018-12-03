(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guide-guide-module"],{

/***/ "./src/app/guide/getting-started/getting-started.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/guide/getting-started/getting-started.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"docs-markdown pad\">\n  <h5 class=\"docs-markdown-h5\">\n    Getting started developing on Fantom\n  </h5>\n\n  <p class=\"docs-markdown-p\">\n    <a href=\"https://github.com/Fantom-foundation\" class=\"docs-markdown-a\" target=\"_blank\">\n      Fantom foundation\n    </a> is made up of a number of repositories. This will guide you through getting your development environment setup.\n  </p>\n\n  <p class=\"docs-markdown-p\" *ngIf=\"os('Linux')\">\n    Though this guide is for the Ubuntu linux; it should be easy to retrofit to others.\n  </p>\n\n  <p class=\"docs-markdown-p\" *ngIf=\"os('macOS')\">\n    Though this guide has been tested on macOS High Sierra; it will probably work on older versions.\n  </p>\n\n  <p class=\"docs-markdown-p\" *ngIf=\"os('Windows')\">\n    Follow this guide on Windows 7+.\n  </p>\n\n  <em>\n    All grey background assumes you are running in an active\n    <ng-container *ngIf=\"os('Windows')\">Command Prompt (<code>cmd.exe</code>)</ng-container>\n    <ng-container *ngIf=\"os('macOS') || os('Linux')\">Terminal</ng-container>\n    session\n  </em>\n\n  <section id=\"step-0-install-build-dependencies\">\n    <h3\n      class=\"docs-header-link docs-markdown-h3\">\n      Step 0: Install build dependencies\n    </h3>\n    <pre class=\"docs-markdown-pre\"><code class=\"lang-bash docs-markdown-code\" *ngIf=\"os('Linux')\">\n      sudo apt update\n      sudo apt install build-essential git-core tcl\n    </code></pre>\n\n    <a *ngIf=\"os('macOS')\" href=\"https://developer.apple.com/downloads\" class=\"docs-markdown-a\" target=\"_blank\">\n      Latest XCode and Command Line Tools\n    </a>\n    <pre class=\"docs-markdown-pre\"><code class=\"lang-bash docs-markdown-code\" *ngIf=\"os('macOS')\">\n      /usr/bin/ruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\"\n      brew update\n      brew install git\n    </code></pre>\n\n    <section class=\"docs-guide-content\" *ngIf=\"os('Windows')\">\n      Ensure you check \"Add to PATH\" whenever asked:\n      <ol>\n        <li><a class=\"docs-markdown-a\"\n               href=\"https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=15\">\n          Build Tools for Visual Studio 2017\n        </a></li>\n        <li><a class=\"docs-markdown-a\" href=\"https://git-scm.com/download/win\">git</a></li>\n        <li><a class=\"docs-markdown-a\" href=\"https://www.python.org/downloads/windows\">Python 2.7</a></li>\n      </ol>\n      <p class=\"docs-markdown-p\">Test that it installed correctly with:</p>\n      <pre class=\"docs-markdown-pre\"><code class=\"lang-bash docs-markdown-code\">\n        git --version\n        cl /?\n      </code></pre>\n    </section>\n  </section>\n\n  <section id=\"step-1-install-go\">\n    <h3\n      class=\"docs-header-link docs-markdown-h3\">\n      Step 1: Install Go\n    </h3>\n\n    <pre class=\"docs-markdown-pre\" *ngIf=\"os('Linux')\"><code class=\"lang-bash docs-markdown-code\">\n        curl https://dl.google.com/go/go1.11.2.linux-amd64.tar.gz -o go.linux-amd64.tar.gz\n        tar -C /usr/local -xzf go.linux-amd64.tar.gz\n        sudo bash -c \"GOPATH=$HOME/go >> /etc/environment\"\n      </code></pre>\n\n    <pre class=\"docs-markdown-pre\" *ngIf=\"os('macOS')\"><code class=\"lang-bash docs-markdown-code\">\n        brew install go\n      </code></pre>\n\n    <p class=\"docs-markdown-p\" *ngIf=\"os('Windows')\">\n      Official Go installer: <a href=\"https://dl.google.com/go/go1.11.2.windows-amd64.msi\">go1.11.2.windows-amd64.msi</a>\n    </p>\n  </section>\n\n  <hr>\n  <p class=\"docs-markdown-p\">\n    Now you have everything you need to orchestrate with fantom-dev.\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/guide/getting-started/getting-started.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/guide/getting-started/getting-started.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad {\n  padding: 1px 3em 0 3em;\n  overflow: hidden; }\n\n/*\n.docs-markdown-code {\n  display: block;\n  padding: 0 0 1em 1em;\n  white-space: pre-line;\n}\n*/\n\npre {\n  white-space: pre; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW11ZWwvcmVwb3MvZmFudG9tL2ZhbnRvbS1kZXYtd2ViL3NyYy9hcHAvZ3VpZGUvZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFzQjtFQUN0QixpQkFBZ0IsRUFDakI7O0FBQ0Q7Ozs7OztFQU1FOztBQUNGO0VBQ0UsaUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZ3VpZGUvZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWQge1xuICBwYWRkaW5nOiAxcHggM2VtIDAgM2VtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLypcbi5kb2NzLW1hcmtkb3duLWNvZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCAwIDFlbSAxZW07XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cbiovXG5wcmUge1xuICB3aGl0ZS1zcGFjZTogcHJlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/guide/getting-started/getting-started.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/guide/getting-started/getting-started.component.ts ***!
  \********************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _platform_picker_platform_picker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../platform-picker/platform-picker.service */ "./src/app/platform-picker/platform-picker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GettingStartedComponent = /** @class */ (function () {
    function GettingStartedComponent(platformPickerService) {
        this.platformPickerService = platformPickerService;
        this.os = platformPickerService.is.bind(platformPickerService);
    }
    GettingStartedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-getting-started',
            template: __webpack_require__(/*! ./getting-started.component.html */ "./src/app/guide/getting-started/getting-started.component.html"),
            styles: [__webpack_require__(/*! ./getting-started.component.scss */ "./src/app/guide/getting-started/getting-started.component.scss")]
        }),
        __metadata("design:paramtypes", [_platform_picker_platform_picker_service__WEBPACK_IMPORTED_MODULE_1__["PlatformPickerService"]])
    ], GettingStartedComponent);
    return GettingStartedComponent;
}());



/***/ }),

/***/ "./src/app/guide/guide.component.html":
/*!********************************************!*\
  !*** ./src/app/guide/guide.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  guides works!\n</p>\n"

/***/ }),

/***/ "./src/app/guide/guide.component.scss":
/*!********************************************!*\
  !*** ./src/app/guide/guide.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1aWRlL2d1aWRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/guide/guide.component.ts":
/*!******************************************!*\
  !*** ./src/app/guide/guide.component.ts ***!
  \******************************************/
/*! exports provided: GuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideComponent", function() { return GuideComponent; });
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

var GuideComponent = /** @class */ (function () {
    function GuideComponent() {
    }
    GuideComponent.prototype.ngOnInit = function () {
    };
    GuideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-guides',
            template: __webpack_require__(/*! ./guide.component.html */ "./src/app/guide/guide.component.html"),
            styles: [__webpack_require__(/*! ./guide.component.scss */ "./src/app/guide/guide.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GuideComponent);
    return GuideComponent;
}());



/***/ }),

/***/ "./src/app/guide/guide.module.ts":
/*!***************************************!*\
  !*** ./src/app/guide/guide.module.ts ***!
  \***************************************/
/*! exports provided: GuideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideModule", function() { return GuideModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "./src/app/guide/getting-started/getting-started.component.ts");
/* harmony import */ var _guide_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guide.component */ "./src/app/guide/guide.component.ts");
/* harmony import */ var _guide_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guide.routes */ "./src/app/guide/guide.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var GuideModule = /** @class */ (function () {
    function GuideModule() {
    }
    GuideModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_guide_component__WEBPACK_IMPORTED_MODULE_5__["GuideComponent"], _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_4__["GettingStartedComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_guide_routes__WEBPACK_IMPORTED_MODULE_6__["guideRoutes"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            ]
        })
    ], GuideModule);
    return GuideModule;
}());



/***/ }),

/***/ "./src/app/guide/guide.routes.ts":
/*!***************************************!*\
  !*** ./src/app/guide/guide.routes.ts ***!
  \***************************************/
/*! exports provided: guideRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guideRoutes", function() { return guideRoutes; });
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "./src/app/guide/getting-started/getting-started.component.ts");
/* harmony import */ var _guide_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guide.component */ "./src/app/guide/guide.component.ts");


var guideRoutes = [
    { path: '', component: _guide_component__WEBPACK_IMPORTED_MODULE_1__["GuideComponent"] },
    { path: 'getting-started', component: _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_0__["GettingStartedComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=guide-guide-module.js.map