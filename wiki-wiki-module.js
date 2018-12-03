(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wiki-wiki-module"],{

/***/ "./src/app/wiki/generated/generate_routes.ts":
/*!***************************************************!*\
  !*** ./src/app/wiki/generated/generate_routes.ts ***!
  \***************************************************/
/*! exports provided: generatedRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatedRoutes", function() { return generatedRoutes; });
/* harmony import */ var _wiki_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wiki.component */ "./src/app/wiki/wiki.component.ts");

var generatedRoutes = [
    {
        path: 'home',
        data: {
            template: 'Welcome to the fantom-dev-web wiki!\n',
            styles: [
                ':host {color: red}'
            ]
        },
        component: _wiki_component__WEBPACK_IMPORTED_MODULE_0__["WikiComponent"]
    },
    {
        path: 'sample-home',
        data: {
            template: 'Welcome to the fantom-dev-web wiki!\n',
            styles: [
                ':host {color: red}'
            ]
        },
        component: _wiki_component__WEBPACK_IMPORTED_MODULE_0__["WikiComponent"]
    }
];


/***/ }),

/***/ "./src/app/wiki/wiki.component.html":
/*!******************************************!*\
  !*** ./src/app/wiki/wiki.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #container></div>\n"

/***/ }),

/***/ "./src/app/wiki/wiki.component.scss":
/*!******************************************!*\
  !*** ./src/app/wiki/wiki.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpa2kvd2lraS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/wiki/wiki.component.ts":
/*!****************************************!*\
  !*** ./src/app/wiki/wiki.component.ts ***!
  \****************************************/
/*! exports provided: WikiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiComponent", function() { return WikiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WikiComponent = /** @class */ (function () {
    function WikiComponent(route, compiler) {
        this.route = route;
        this.compiler = compiler;
    }
    WikiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.template = data.template;
            _this.styles = data.styles || [];
        });
    };
    WikiComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Must clear cache.
        this.compiler.clearCache();
        // Define the component using Component decorator.
        var component = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: this.template,
            styles: this.styles
        })(/** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }()));
        // Define the module using NgModule decorator.
        var module = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [component]
        })(/** @class */ (function () {
            function class_2() {
            }
            return class_2;
        }()));
        // Asynchronously (recommended) compile the module and the component.
        this.compiler.compileModuleAndAllComponentsAsync(module)
            .then(function (factories) {
            // Get the component factory.
            var componentFactory = factories.componentFactories[0];
            // Create the component and add to the view.
            var componentRef = _this.container.createComponent(componentFactory);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WikiComponent.prototype, "template", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WikiComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], WikiComponent.prototype, "container", void 0);
    WikiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wiki',
            template: __webpack_require__(/*! ./wiki.component.html */ "./src/app/wiki/wiki.component.html"),
            styles: [__webpack_require__(/*! ./wiki.component.scss */ "./src/app/wiki/wiki.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"]])
    ], WikiComponent);
    return WikiComponent;
}());



/***/ }),

/***/ "./src/app/wiki/wiki.module.ts":
/*!*************************************!*\
  !*** ./src/app/wiki/wiki.module.ts ***!
  \*************************************/
/*! exports provided: WikiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiModule", function() { return WikiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _wiki_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wiki.component */ "./src/app/wiki/wiki.component.ts");
/* harmony import */ var _wiki_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wiki.routes */ "./src/app/wiki/wiki.routes.ts");
/* harmony import */ var _generated_generate_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generated/generate_routes */ "./src/app/wiki/generated/generate_routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/*
const declarations = wikiRoutes
  .map(r => Object.assign(r.component, {__prop__metadata__: (WikiComponent as any).__prop__metadata__}))
  .filter(r => r.name !== 'WikiComponent');
console.info('declarations:', [WikiComponent, ...declarations], ';');
*/
var WikiModule = /** @class */ (function () {
    function WikiModule() {
    }
    WikiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_wiki_component__WEBPACK_IMPORTED_MODULE_4__["WikiComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_wiki_routes__WEBPACK_IMPORTED_MODULE_5__["wikiRoutes"]), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_generated_generate_routes__WEBPACK_IMPORTED_MODULE_6__["generatedRoutes"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
            ],
            providers: []
        })
    ], WikiModule);
    return WikiModule;
}());



/***/ }),

/***/ "./src/app/wiki/wiki.routes.ts":
/*!*************************************!*\
  !*** ./src/app/wiki/wiki.routes.ts ***!
  \*************************************/
/*! exports provided: wikiRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wikiRoutes", function() { return wikiRoutes; });
/* harmony import */ var _wiki_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wiki.component */ "./src/app/wiki/wiki.component.ts");

var wikiRoutes = [
    { path: '', component: _wiki_component__WEBPACK_IMPORTED_MODULE_0__["WikiComponent"], data: { template: 'hello' } },
    { path: 'foo', component: _wiki_component__WEBPACK_IMPORTED_MODULE_0__["WikiComponent"], data: { template: 'foo', styles: [':host {color: red}'] } },
    { path: 'bar', component: _wiki_component__WEBPACK_IMPORTED_MODULE_0__["WikiComponent"], data: { template: 'bar', styles: [':host {color: blue}'] } },
    { path: 'can', component: _wiki_component__WEBPACK_IMPORTED_MODULE_0__["WikiComponent"], data: { template: 'can', styles: [':host {color: green}'] } }
];


/***/ })

}]);
//# sourceMappingURL=wiki-wiki-module.js.map