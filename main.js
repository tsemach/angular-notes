(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/basic/basic.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _forms_form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/form-examples/form-examples.component */ "./src/app/forms/form-examples/form-examples.component.ts");
/* harmony import */ var _routing_routing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing/routing.component */ "./src/app/routing/routing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', 'component': _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"] },
    { path: 'basic', 'component': _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"] },
    { path: 'forms', 'component': _forms_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"], children: [
            { path: 'examples', 'component': _forms_form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_4__["FormExamplesComponent"] },
        ] },
    { path: 'routing', 'component': _routing_routing_component__WEBPACK_IMPORTED_MODULE_5__["RoutingComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"nav\">\n  <a class=\"nav-link active\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/basic\" href=\"#\">Basic</a>\n  <a class=\"nav-link active\" routerLink=\"/forms\">Forms</a>\n  <a class=\"nav-link active\" routerLink=\"/routing\">Routing</a>\n  <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n</nav>\n\n<router-outlet></router-outlet>\n\n<!-- \n\n\n\n<div class=\"row\">\n  <div class=\"col-6\" style=\"border-style: ridge;\">\n    <hr>\n    <h4>Note: Html Attribute Binind</h4>\n    <app-html-attr></app-html-attr>\n    <hr>\n    <h4>Note: Adding bootstrap</h4>\n    <app-bootstrap></app-bootstrap>\n    <hr>\n    <h4>Note: Class Binding</h4>\n    <app-class-binding></app-class-binding>\n    <hr>\n    <h4>Note: Event Propagation</h4>\n    <app-event-propagation></app-event-propagation>\n    <hr>\n    <h4>Note: Event Filtering</h4>\n    <app-event-filtering></app-event-filtering>\n    <hr>\n    <h4>Note: Template Variables</h4>\n    <app-template-variabels></app-template-variabels>\n    <hr>\n    <h4>Note: Using ng-conant</h4>\n    <app-ng-contant>\n      <div class=\"heading\">This is The Panel Heading Coming from app-component</div>\n      <div class=\"body\">\n        This is The Body Coming from app-component\n        <h5>Some Body ...</h5>\n      </div>\n    </app-ng-contant>\n    <hr>      \n  </div>\n  <div class=\"col-6\" style=\"border-style: ridge;\">    \n    <hr>\n    <h4>Note: Two way binding</h4>\n    <app-two-way-binding></app-two-way-binding>\n    <hr>    \n    <h4>Note: Form Basic</h4>\n    <app-form-basic></app-form-basic>\n    <hr>\n  </div>\n</div> -->\n\n<!-- <hr>\n<h4>Note: Html Attribute Binind</h4>\n<app-html-attr></app-html-attr>\n<hr>\n<h4>Note: Adding bootstrap</h4>\n<app-bootstrap></app-bootstrap>\n<hr>\n<h4>Note: Class Binding</h4>\n<app-class-binding></app-class-binding>\n<hr>\n<h4>Note: Event Propagation</h4>\n<app-event-propagation></app-event-propagation>\n<hr>\n<h4>Note: Event Filtering</h4>\n<app-event-filtering></app-event-filtering>\n<hr>\n<h4>Note: Template Variables</h4>\n<app-template-variabels></app-template-variabels>\n<hr>\n<h4>Note: Using ng-conant</h4>\n<app-ng-contant>\n  <div class=\"heading\">This is The Panel Heading Coming from app-component</div>\n  <div class=\"body\">\n    This is The Body Coming from app-component\n    <h5>Some Body ...</h5>\n  </div>\n</app-ng-contant>\n<hr> -->"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _basic_html_attr_html_attr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic/html-attr/html-attr.component */ "./src/app/basic/html-attr/html-attr.component.ts");
/* harmony import */ var _basic_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic/bootstrap/bootstrap.component */ "./src/app/basic/bootstrap/bootstrap.component.ts");
/* harmony import */ var _basic_class_binding_class_binding_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic/class-binding/class-binding.component */ "./src/app/basic/class-binding/class-binding.component.ts");
/* harmony import */ var _basic_event_propagation_event_propagation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic/event-propagation/event-propagation.component */ "./src/app/basic/event-propagation/event-propagation.component.ts");
/* harmony import */ var _basic_event_filtering_event_filtering_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basic/event-filtering/event-filtering.component */ "./src/app/basic/event-filtering/event-filtering.component.ts");
/* harmony import */ var _basic_template_variabels_template_variabels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./basic/template-variabels/template-variabels.component */ "./src/app/basic/template-variabels/template-variabels.component.ts");
/* harmony import */ var _basic_ng_contant_ng_contant_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./basic/ng-contant/ng-contant.component */ "./src/app/basic/ng-contant/ng-contant.component.ts");
/* harmony import */ var _basic_two_way_binding_two_way_binding_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./basic/two-way-binding/two-way-binding.component */ "./src/app/basic/two-way-binding/two-way-binding.component.ts");
/* harmony import */ var _forms_form_basic_form_basic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forms/form-basic/form-basic.component */ "./src/app/forms/form-basic/form-basic.component.ts");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/basic/basic.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _forms_form_ngmodel_form_ngmodel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forms/form-ngmodel/form-ngmodel.component */ "./src/app/forms/form-ngmodel/form-ngmodel.component.ts");
/* harmony import */ var _forms_form_validations_form_validations_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./forms/form-validations/form-validations.component */ "./src/app/forms/form-validations/form-validations.component.ts");
/* harmony import */ var _forms_form_ngform_form_ngform_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forms/form-ngform/form-ngform.component */ "./src/app/forms/form-ngform/form-ngform.component.ts");
/* harmony import */ var _forms_form_ngmodelgroup_form_ngmodelgroup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forms/form-ngmodelgroup/form-ngmodelgroup.component */ "./src/app/forms/form-ngmodelgroup/form-ngmodelgroup.component.ts");
/* harmony import */ var _forms_form_disablesubmit_form_disablesubmit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./forms/form-disablesubmit/form-disablesubmit.component */ "./src/app/forms/form-disablesubmit/form-disablesubmit.component.ts");
/* harmony import */ var _forms_form_examples_form_angular_form_angular_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./forms/form-examples/form-angular/form-angular.component */ "./src/app/forms/form-examples/form-angular/form-angular.component.ts");
/* harmony import */ var _forms_form_examples_form_exercise_form_exercise_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./forms/form-examples/form-exercise/form-exercise.component */ "./src/app/forms/form-examples/form-exercise/form-exercise.component.ts");
/* harmony import */ var _forms_form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./forms/form-examples/form-examples.component */ "./src/app/forms/form-examples/form-examples.component.ts");
/* harmony import */ var _routing_routing_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./routing/routing.component */ "./src/app/routing/routing.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _basic_html_attr_html_attr_component__WEBPACK_IMPORTED_MODULE_5__["HtmlAttrComponent"],
                _basic_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["BootstrapComponent"],
                _basic_class_binding_class_binding_component__WEBPACK_IMPORTED_MODULE_7__["ClassBindingComponent"],
                _basic_event_propagation_event_propagation_component__WEBPACK_IMPORTED_MODULE_8__["EventPropagationComponent"],
                _basic_event_filtering_event_filtering_component__WEBPACK_IMPORTED_MODULE_9__["EventFilteringComponent"],
                _basic_template_variabels_template_variabels_component__WEBPACK_IMPORTED_MODULE_10__["TemplateVariabelsComponent"],
                _basic_ng_contant_ng_contant_component__WEBPACK_IMPORTED_MODULE_11__["NgContantComponent"],
                _basic_two_way_binding_two_way_binding_component__WEBPACK_IMPORTED_MODULE_12__["TwoWayBindingComponent"],
                _forms_form_basic_form_basic_component__WEBPACK_IMPORTED_MODULE_13__["FormBasicComponent"],
                _basic_basic_component__WEBPACK_IMPORTED_MODULE_14__["BasicComponent"],
                _forms_forms_component__WEBPACK_IMPORTED_MODULE_15__["FormsComponent"],
                _forms_form_ngmodel_form_ngmodel_component__WEBPACK_IMPORTED_MODULE_16__["FormNgmodelComponent"],
                _forms_form_validations_form_validations_component__WEBPACK_IMPORTED_MODULE_17__["FormValidationsComponent"],
                _forms_form_ngform_form_ngform_component__WEBPACK_IMPORTED_MODULE_18__["FormNgformComponent"],
                _forms_form_ngmodelgroup_form_ngmodelgroup_component__WEBPACK_IMPORTED_MODULE_19__["FormNgmodelgroupComponent"],
                _forms_form_disablesubmit_form_disablesubmit_component__WEBPACK_IMPORTED_MODULE_20__["FormDisablesubmitComponent"],
                _forms_form_examples_form_angular_form_angular_component__WEBPACK_IMPORTED_MODULE_21__["FormAngularComponent"],
                _forms_form_examples_form_exercise_form_exercise_component__WEBPACK_IMPORTED_MODULE_22__["FormExerciseComponent"],
                _forms_form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_23__["FormExamplesComponent"],
                _routing_routing_component__WEBPACK_IMPORTED_MODULE_24__["RoutingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/basic/basic.component.css":
/*!*******************************************!*\
  !*** ./src/app/basic/basic.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/basic/basic.component.html":
/*!********************************************!*\
  !*** ./src/app/basic/basic.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- this is the left column -->\n  <div class=\"col-6\" style=\"border-style: ridge;\">\n    <hr>\n    <h4>Note: Html Attribute Binind</h4>\n    <app-html-attr></app-html-attr>\n    <hr>\n    <h4>Note: Adding bootstrap</h4>\n    <app-bootstrap></app-bootstrap>\n    <hr>\n    <h4>Note: Class Binding</h4>\n    <app-class-binding></app-class-binding>\n    <hr>\n    <h4>Note: Event Propagation</h4>\n    <app-event-propagation></app-event-propagation>\n    <hr>\n    <h4>Note: Event Filtering</h4>\n    <app-event-filtering></app-event-filtering>\n    <hr>\n    <h4>Note: Template Variables</h4>\n    <app-template-variabels></app-template-variabels>\n    <hr>\n    <h4>Note: Using ng-conant</h4>\n    <app-ng-contant>\n      <div class=\"heading\">This is The Panel Heading Coming from app-component</div>\n      <div class=\"body\">\n        This is The Body Coming from app-component\n        <h5>Some Body ...</h5>\n      </div>\n    </app-ng-contant>\n    <hr>      \n  </div>\n  <div class=\"col-6\" style=\"border-style: ridge;\">\n    <!-- this is the right column -->\n    <hr>\n    <h4>Note: Two way binding</h4>\n    <app-two-way-binding></app-two-way-binding>\n    <hr>\n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/basic/basic.component.ts":
/*!******************************************!*\
  !*** ./src/app/basic/basic.component.ts ***!
  \******************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
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

var BasicComponent = /** @class */ (function () {
    function BasicComponent() {
    }
    BasicComponent.prototype.ngOnInit = function () {
    };
    BasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic',
            template: __webpack_require__(/*! ./basic.component.html */ "./src/app/basic/basic.component.html"),
            styles: [__webpack_require__(/*! ./basic.component.css */ "./src/app/basic/basic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicComponent);
    return BasicComponent;
}());



/***/ }),

/***/ "./src/app/basic/bootstrap/bootstrap.component.css":
/*!*********************************************************!*\
  !*** ./src/app/basic/bootstrap/bootstrap.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/basic/bootstrap/bootstrap.component.html":
/*!**********************************************************!*\
  !*** ./src/app/basic/bootstrap/bootstrap.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>There are two ways of adding bootstrap support</h5>\n<ol>\n  <li>Adding into angular-cli.json</li>\n  <li>Adding into style.css</li>\n</ol>\n<b>Option-1: using angular-cli.json</b>\n<pre>\n  # npm install --save bootstrap@3\n    \n  // open the file .angular-cli.json and add the boostrap css file in it\n  -) under the section \"styles\": [ ... ]\n  -) add the entry \"../node_modules/bootstrap/dist/css/bootstrap.min.css\"    \n</pre>\n<b>Option-2: edit the file sytle.css</b>\n<ul>\n  <li><code>run: npm install bootstrap --save</code></li>\n  <li><code>edit style.css add the line: @import \"~bootstrap/dist/css/bootstrap.css;\"</code></li>\n</ul>\n<p>Let test the bootstrap by adding a primary button - it should be blue color</p>\n<button class=\"btn btn-primary\">save</button>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/basic/bootstrap/bootstrap.component.ts":
/*!********************************************************!*\
  !*** ./src/app/basic/bootstrap/bootstrap.component.ts ***!
  \********************************************************/
/*! exports provided: BootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponent", function() { return BootstrapComponent; });
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

var BootstrapComponent = /** @class */ (function () {
    function BootstrapComponent() {
    }
    BootstrapComponent.prototype.ngOnInit = function () {
    };
    BootstrapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bootstrap',
            template: __webpack_require__(/*! ./bootstrap.component.html */ "./src/app/basic/bootstrap/bootstrap.component.html"),
            styles: [__webpack_require__(/*! ./bootstrap.component.css */ "./src/app/basic/bootstrap/bootstrap.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BootstrapComponent);
    return BootstrapComponent;
}());



/***/ }),

/***/ "./src/app/basic/class-binding/class-binding.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/basic/class-binding/class-binding.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/basic/class-binding/class-binding.component.html":
/*!******************************************************************!*\
  !*** ./src/app/basic/class-binding/class-binding.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Its possible to use a variation of property binding to bing into a html class</h5>\nFor example:\n<pre>\n<code>\n  &lt;button class=\"btn btn-primary\" [class.<mark>active</mark>]&gt;save&gt;/button&gt;  \n  <strong>active: is the name of the target class of button</strong>\n  \n  In the component you can use:\n  <strong><code>this.active = true | false</code></strong>\n  </code>\n<pre>\n<div class=\"row\" style=\"width: 200px;\">\n<button class=\"btn btn-primary\" [style.backgroundColor]=\"yellow\">save</button>  \n<button class=\"btn btn-primary\" (click)=\"onClickMe()\">click me</button>  \n</div>"

/***/ }),

/***/ "./src/app/basic/class-binding/class-binding.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/basic/class-binding/class-binding.component.ts ***!
  \****************************************************************/
/*! exports provided: ClassBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassBindingComponent", function() { return ClassBindingComponent; });
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

var ClassBindingComponent = /** @class */ (function () {
    function ClassBindingComponent() {
        this.active = false;
    }
    ClassBindingComponent.prototype.ngOnInit = function () {
    };
    ClassBindingComponent.prototype.onClickMe = function () {
        this.active = !this.active;
        console.log("[ClassBindingComponent:onClickMe] this.active = " + this.active);
    };
    ClassBindingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-class-binding',
            template: __webpack_require__(/*! ./class-binding.component.html */ "./src/app/basic/class-binding/class-binding.component.html"),
            styles: [__webpack_require__(/*! ./class-binding.component.css */ "./src/app/basic/class-binding/class-binding.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClassBindingComponent);
    return ClassBindingComponent;
}());



/***/ }),

/***/ "./src/app/basic/event-filtering/event-filtering.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/basic/event-filtering/event-filtering.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/basic/event-filtering/event-filtering.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/basic/event-filtering/event-filtering.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<pre>\n  Anguler can filtering an event so you don't have to check it with if (event.something === .. like event.keCode === 13 for enter) then ..  \n  <u>For example</u>        \n    <p>// the onKeyUp will called only on pressing enter</p>\n    &lt;input&gt; (keyup.enter)=\"onKeyUp()\"/&gt;\n  <code>\n    onKeyUp() &#123;\n      console.log(\"Enter was press!\");\n    &#125;\n  </code>\n</pre>\nType few characters then press Enter:\n<p>data = <strong>{{ data }}</strong></p>\n<input (keyup.enter)=\"onKeyUp($event)\"/>\n"

/***/ }),

/***/ "./src/app/basic/event-filtering/event-filtering.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/basic/event-filtering/event-filtering.component.ts ***!
  \********************************************************************/
/*! exports provided: EventFilteringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFilteringComponent", function() { return EventFilteringComponent; });
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

var EventFilteringComponent = /** @class */ (function () {
    function EventFilteringComponent() {
        this.data = '';
    }
    EventFilteringComponent.prototype.ngOnInit = function () {
    };
    EventFilteringComponent.prototype.onKeyUp = function ($event) {
        console.log("Enter was press!");
        console.log("Enter was press!, value = ", $event.target.value);
        this.data = $event.target.value;
        //this.data = $event.value;
    };
    EventFilteringComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-filtering',
            template: __webpack_require__(/*! ./event-filtering.component.html */ "./src/app/basic/event-filtering/event-filtering.component.html"),
            styles: [__webpack_require__(/*! ./event-filtering.component.css */ "./src/app/basic/event-filtering/event-filtering.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventFilteringComponent);
    return EventFilteringComponent;
}());



/***/ }),

/***/ "./src/app/basic/event-propagation/event-propagation.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/basic/event-propagation/event-propagation.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/basic/event-propagation/event-propagation.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/basic/event-propagation/event-propagation.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>\n  DOM is using event propagation so when event is fired on all elements where define in it path up to the root element\n  So if:\n    &lt;element-1&gt;\n      &lt;element-2&gt;\n        &lt;element-3&gt;\n  if element-3 event is firing then its goes up to element-2 and well as element-3.  \n\n  To stop this propagation use in the component event handler:\n  <code>\n    onClick($event) \t&#123;\n      event.stopPropagation;\n    &#125;\n  </code>\n</pre>"

/***/ }),

/***/ "./src/app/basic/event-propagation/event-propagation.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/basic/event-propagation/event-propagation.component.ts ***!
  \************************************************************************/
/*! exports provided: EventPropagationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPropagationComponent", function() { return EventPropagationComponent; });
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

var EventPropagationComponent = /** @class */ (function () {
    function EventPropagationComponent() {
    }
    EventPropagationComponent.prototype.ngOnInit = function () {
    };
    EventPropagationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-propagation',
            template: __webpack_require__(/*! ./event-propagation.component.html */ "./src/app/basic/event-propagation/event-propagation.component.html"),
            styles: [__webpack_require__(/*! ./event-propagation.component.css */ "./src/app/basic/event-propagation/event-propagation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventPropagationComponent);
    return EventPropagationComponent;
}());



/***/ }),

/***/ "./src/app/basic/html-attr/html-attr.component.css":
/*!*********************************************************!*\
  !*** ./src/app/basic/html-attr/html-attr.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/basic/html-attr/html-attr.component.html":
/*!**********************************************************!*\
  !*** ./src/app/basic/html-attr/html-attr.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Thml attribute are in most cases 1-to-1 mapping with DOM element BUT not in all cases.</p>\n<p>Also the opposite, html attribute may not have DOM attribute</p>\n<p>When using attribute binding we are binding into a DOM attribute (not the html).</p>\n<p>So When need to targing HTML attribute need to tell Angular about it by adding 'attr.' prefix</p>\n<p>For example: </p>\n<pre>\n  &lt;table&gt;\n    &lt;tr&gt;\n      &lt;td [attr.colspan]=\"colspan\"&gt; Table Data &lt;/td&gt;\n    &lt;tr&gt;\n  &lt;/table&gt;\n</pre>  \n<table>\n  <tr>\n    <td [attr.colspan]=\"colspan\">Table Data</td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/basic/html-attr/html-attr.component.ts":
/*!********************************************************!*\
  !*** ./src/app/basic/html-attr/html-attr.component.ts ***!
  \********************************************************/
/*! exports provided: HtmlAttrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlAttrComponent", function() { return HtmlAttrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HtmlAttrComponent = /** @class */ (function () {
    function HtmlAttrComponent() {
        this.colspen = 2;
    }
    HtmlAttrComponent.prototype.ngOnInit = function () {
    };
    HtmlAttrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-html-attr',
            template: __webpack_require__(/*! ./html-attr.component.html */ "./src/app/basic/html-attr/html-attr.component.html"),
            styles: [__webpack_require__(/*! ./html-attr.component.css */ "./src/app/basic/html-attr/html-attr.component.css")]
        })
    ], HtmlAttrComponent);
    return HtmlAttrComponent;
}());



/***/ }),

/***/ "./src/app/basic/ng-contant/ng-contant.component.css":
/*!***********************************************************!*\
  !*** ./src/app/basic/ng-contant/ng-contant.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\n  color: rebeccapurple;\n}"

/***/ }),

/***/ "./src/app/basic/ng-contant/ng-contant.component.html":
/*!************************************************************!*\
  !*** ./src/app/basic/ng-contant/ng-contant.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nUse when needed to inject a contant to the template from outside.\nYou can use property binding but in cases where it is more complex contant use ng-contant.\nng-content enable the component user to customize the content of a component.\n\n<p>For example the template looking like:</p>\n<pre style=\"color: blueviolet\">\n&lt;div class=\"panel panel-default\"&gt;\n  &lt;div class=\"panel-heading\"&gt;\n    <span style=\"color: darkblue\">// identify the ng-contant select as class=\"heading\"</span>\n    &lt;ng-contnat select=\".heading\"&gt;&lt;/ng-contant&gt;\n  &lt;/div&gt;\n  &lt;div class=\"panel-body\"&gt;\n    <span style=\"color: darkblue\">// identify the ng-contant select as class=\"body\"</span>\n    &lt;ng-contnat select=\".body\"&gt;&lt;/ng-contant&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n</pre>\n\nTo use this component:\n<pre style=\"color: blueviolet\">\n&lt;the-component&gt;\n  &lt;div class=\"heading\"&gt;&lt;/div&gt;\n  &lt;div class=\"body\"&gt;\n    &lt;h2&gt;This is body&lt;/h2&gt;\n  &lt;/div&gt;    \n&gt;/the-component&gt;\n</pre>\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <ng-content select=\".heading\"></ng-content>\n  </div>\n  <div class=\"panel-body\">\n    <ng-content select=\".body\"></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/basic/ng-contant/ng-contant.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/basic/ng-contant/ng-contant.component.ts ***!
  \**********************************************************/
/*! exports provided: NgContantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgContantComponent", function() { return NgContantComponent; });
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

var NgContantComponent = /** @class */ (function () {
    function NgContantComponent() {
    }
    NgContantComponent.prototype.ngOnInit = function () {
    };
    NgContantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ng-contant',
            template: __webpack_require__(/*! ./ng-contant.component.html */ "./src/app/basic/ng-contant/ng-contant.component.html"),
            styles: [__webpack_require__(/*! ./ng-contant.component.css */ "./src/app/basic/ng-contant/ng-contant.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NgContantComponent);
    return NgContantComponent;
}());



/***/ }),

/***/ "./src/app/basic/template-variabels/template-variabels.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/basic/template-variabels/template-variabels.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pre {\n  margin: 0px;\n  padding: 0px;\n}"

/***/ }),

/***/ "./src/app/basic/template-variabels/template-variabels.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/basic/template-variabels/template-variabels.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nPassing variables from template to component can be done in two ways\n<ol>\n  <li>Passing by $event</li>\n  <li>Passing by #something</li>\n</ol>\n<b>Option-1: passing by $event</b>\n<pre>\n  &lt;input&gt; (keyup.enter)=\"onKeyUp($event)\"/&gt;\n  <code>\n  onKeyUp($event) \t&#123;\n    console.log($event.target.value);\n  &#125;\n  </code>    \n</pre>\n<b>Option-2: passing by #something</b>\n<pre>\n  &lt;input&gt; #email (keyup.enter)=\"onKeyUp(email.value)\"/&gt;\n  <strong>#email: is a referance to input field.</strong>\n  <code>\n  onKeyUp(email) \t&#123;\n    console.log(email);\n  &#125;\n  </code>    \n</pre>\n\n<div class=\"row\">\n  <div class=\"col-4\">    \n    <p>option-1: <strong>{{ option1_data }}</strong></p>\n  </div>  \n  <div class=\"col-4\">\n    <p>option-2: <strong>{{ option2_data }}</strong></p>\n  </div>\n</div>        \n\n<div class=\"row\">\n  <div class=\"col-4\">    \n    option-1: <input (keyup.enter)=\"onKeyUp1($event)\"/>\n  </div>  \n  <div class=\"col-4\">\n    option-2: <input #email (keyup.enter)=\"onKeyUp2(email.value)\"/>\n  </div>\n</div>  \n\n\n  \n  "

/***/ }),

/***/ "./src/app/basic/template-variabels/template-variabels.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/basic/template-variabels/template-variabels.component.ts ***!
  \**************************************************************************/
/*! exports provided: TemplateVariabelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateVariabelsComponent", function() { return TemplateVariabelsComponent; });
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

var TemplateVariabelsComponent = /** @class */ (function () {
    function TemplateVariabelsComponent() {
        this.option1_data = '';
        this.option2_data = '';
    }
    TemplateVariabelsComponent.prototype.ngOnInit = function () {
    };
    TemplateVariabelsComponent.prototype.onKeyUp1 = function ($event) {
        console.log("onKeyUp1 - value: ", $event.target.value);
        this.option1_data = $event.target.value;
    };
    TemplateVariabelsComponent.prototype.onKeyUp2 = function (email) {
        console.log("onKeyUp2 - value: ", email);
        this.option2_data = email;
    };
    TemplateVariabelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-template-variabels',
            template: __webpack_require__(/*! ./template-variabels.component.html */ "./src/app/basic/template-variabels/template-variabels.component.html"),
            styles: [__webpack_require__(/*! ./template-variabels.component.css */ "./src/app/basic/template-variabels/template-variabels.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TemplateVariabelsComponent);
    return TemplateVariabelsComponent;
}());



/***/ }),

/***/ "./src/app/basic/two-way-binding/two-way-binding.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/basic/two-way-binding/two-way-binding.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/basic/two-way-binding/two-way-binding.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/basic/two-way-binding/two-way-binding.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nTo enable two communication between a component and a view.\n<p></p>\n<pre>\n<b>Option-1: by inline in the event binding</b>\n&lt;input&gt; [value]=\"email\" (keyup.enter)=\"email = $event.target.value; onKeyUp($event)\"/&gt;\n<code>\nonKeyUp() \t&#123;\n  console.log(\"email = \", email);\n&#125;\n</code>    \n</pre>\n<pre>\n<b>Option-2: using angular ngModel two way data binding</b>\n&lt;input&gt; [(ngModel)]=\"email\" (keyup.enter)=\"onKeyUp($event)\"/&gt;\n<code>\nonKeyUp() \t&#123;\n  console.log(\"email = \", email);\n&#125;\n</code>    \n</pre>\n    \n<div class=\"row\">\n  <div class=\"col-4\">    \n    <p>option-1: <strong>{{ option1_data }}</strong></p>\n  </div>  \n  <div class=\"col-4\">\n    <p>option-2: <strong>{{ option2_data }}</strong></p>\n  </div>\n</div>   \n\n<div class=\"row\">  \n  <div class=\"col-4\">        \n    <p>Two way binding by inline the (keyup.enter) event binding</p>\n    option-1: <input [value]=\"email1\" (keyup.enter)=\"email1 = $event.target.value; onKeyUp1()\"/>\n  </div>  \n\n  <div class=\"col-4\">\n      <p>Two way binding by using angular ngModel</p>\n      option-2: <input [(ngModel)]=\"email2\" (keyup.enter)=\"onKeyUp2()\"/>       \n    </div>\n</div>  \n\n\n  \n  "

/***/ }),

/***/ "./src/app/basic/two-way-binding/two-way-binding.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/basic/two-way-binding/two-way-binding.component.ts ***!
  \********************************************************************/
/*! exports provided: TwoWayBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoWayBindingComponent", function() { return TwoWayBindingComponent; });
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

var TwoWayBindingComponent = /** @class */ (function () {
    function TwoWayBindingComponent() {
        this.option1_data = '';
        this.option2_data = '';
        this.email1 = 'you@someplace.com';
        this.email2 = 'me@elsewhere.com';
    }
    TwoWayBindingComponent.prototype.ngOnInit = function () {
    };
    TwoWayBindingComponent.prototype.onKeyUp1 = function () {
        console.log("[onKeyUp1: email = ", this.email1);
        this.option1_data = this.email1;
    };
    TwoWayBindingComponent.prototype.onKeyUp2 = function () {
        console.log("[onKeyUp2: email = ", this.email2);
        this.option2_data = this.email2;
    };
    TwoWayBindingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-two-way-binding',
            template: __webpack_require__(/*! ./two-way-binding.component.html */ "./src/app/basic/two-way-binding/two-way-binding.component.html"),
            styles: [__webpack_require__(/*! ./two-way-binding.component.css */ "./src/app/basic/two-way-binding/two-way-binding.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TwoWayBindingComponent);
    return TwoWayBindingComponent;
}());



/***/ }),

/***/ "./src/app/forms/form-basic/form-basic.component.css":
/*!***********************************************************!*\
  !*** ./src/app/forms/form-basic/form-basic.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/form-basic/form-basic.component.html":
/*!************************************************************!*\
  !*** ./src/app/forms/form-basic/form-basic.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>\n  <b>FormControl</b>: for each input field in the form need to create intnace of FormControl class\n  <b>FormGroup</b>: a group of FormControl, validation of group is validation of all FormControl in the group\n  <b>Template Driven Form</b>: using angular directives to create FormContorl\n  <b>Reactive Form</b>: using a code to create FormControl\n</pre>\n<form>\n  <div class=\"form-group\">\n    <label for=\"firstName\">First Name</label>\n    <input class=\"form-control\" type=\"text\" id=\"firstName\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"comment\">Comment</label>\n    <textarea id=\"\" cols=\"30\" rows=\"10\" class=\"form-control\"></textarea>\n  </div>\n    <button class=\"btn btn-primary\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/forms/form-basic/form-basic.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/forms/form-basic/form-basic.component.ts ***!
  \**********************************************************/
/*! exports provided: FormBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBasicComponent", function() { return FormBasicComponent; });
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

var FormBasicComponent = /** @class */ (function () {
    function FormBasicComponent() {
    }
    FormBasicComponent.prototype.ngOnInit = function () {
    };
    FormBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-basic',
            template: __webpack_require__(/*! ./form-basic.component.html */ "./src/app/forms/form-basic/form-basic.component.html"),
            styles: [__webpack_require__(/*! ./form-basic.component.css */ "./src/app/forms/form-basic/form-basic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormBasicComponent);
    return FormBasicComponent;
}());



/***/ }),

/***/ "./src/app/forms/form-disablesubmit/form-disablesubmit.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/forms/form-disablesubmit/form-disablesubmit.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/form-disablesubmit/form-disablesubmit.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/forms/form-disablesubmit/form-disablesubmit.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>\nUse fm.valid to disabled / enable the submit button\n\n&lt;form <b style=\"color:red;\">#fm=\"ngForm\" (ngSubmit)=\"submit(fm)\"</b>&gt;\n  &lt;div ngModelGroup=\"contact\" #contact=\"ngModelGroup\"&gt;\n    &lt;div class=\"form-group\"&gt;\n      &lt;label for=\"firstName\"&gt;First Name&lt;/label&gt;\n      &lt;input <b style=\"color:red;\">require minlegnth=\"3\" maxlength=10 pattern=\"banana\" </b> <b>ngModel name=\"firstName\"</b> #firstName (change)=\"log(firstName)\" class=\"form-control\" type=\"text\" id=\"firstName\"&gt;\n      &lt;div class=\"alert alert-danger\" *ngIf=\"firstName.touched && !firstName.valid\"&gt;\n        &lt;div *ngIf=\"firstName.errors.required\">First name is require ..&lt;/div&gt;\n        &lt;div *ngIf=\"firstName.errors.minlength\">First name should be minimum 3 charachters&lt;/div&gt;\n        &lt;div *ngIf=\"firstName.errors.pattern\">First name doesn't match the pattern&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n  &lt;button class=\"btn btn-primary\" <b style=\"color:red;\">[disabled]=\"fm.valid\"</b> &gt;Submit&lt;button&gt;\n&lt;/form&gt;\n</pre>\n<form #fm=\"ngForm\" (ngSubmit)=\"submit(fm)\">\n  <div ngModelGroup=\"contact\" #contact=\"ngModelGroup\">\n    <div *ngIf=\"!contact.valid\">Validation errors of that group</div>\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>      \n      <input ngModel name=\"firstName\" minlegnth=\"3\" maxlength=10 pattern=\"banana\" #firstName=\"ngModel\" (change)=\"log(firstName)\" class=\"form-control\" type=\"text\" id=\"firstName\">\n      <div class=\"alert alert-danger\" *ngIf=\"firstName.touched && !firstName.valid\">\n        <div *ngIf=\"firstName.errors.required\">First name is require ..</div>\n        <div *ngIf=\"firstName.errors.minlength\">First name should be minimum {{firstName.errors.minlength.requiredLength}} charachters</div>\n        <div *ngIf=\"firstName.errors.pattern\">First name doesn't match the pattern</div>\n      </div>\n    </div> \n  </div>\n\n  <button class=\"btn btn-primary\" [disabled]=\"fm.valid\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/forms/form-disablesubmit/form-disablesubmit.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/forms/form-disablesubmit/form-disablesubmit.component.ts ***!
  \**************************************************************************/
/*! exports provided: FormDisablesubmitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDisablesubmitComponent", function() { return FormDisablesubmitComponent; });
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

var FormDisablesubmitComponent = /** @class */ (function () {
    function FormDisablesubmitComponent() {
    }
    FormDisablesubmitComponent.prototype.log = function (what) {
        console.log(what);
    };
    FormDisablesubmitComponent.prototype.submit = function (fm) {
        console.log("fm = ", fm);
    };
    FormDisablesubmitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-disablesubmit',
            template: __webpack_require__(/*! ./form-disablesubmit.component.html */ "./src/app/forms/form-disablesubmit/form-disablesubmit.component.html"),
            styles: [__webpack_require__(/*! ./form-disablesubmit.component.css */ "./src/app/forms/form-disablesubmit/form-disablesubmit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormDisablesubmitComponent);
    return FormDisablesubmitComponent;
}());



/***/ }),

/***/ "./src/app/forms/form-examples/form-angular/form-angular.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/forms/form-examples/form-angular/form-angular.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n/* body { \n  padding-left: 10px;   \n} */"

/***/ }),

/***/ "./src/app/forms/form-examples/form-angular/form-angular.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/forms/form-examples/form-angular/form-angular.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"submitted\">  \n  <h3>Hero Form</h3>\n  {{diagnostic}}\n  <form #heroForm=\"ngForm\" (ngSubmit)=\"onSubmit(heroForm)\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>      \n      <input  class=\"form-control\" type=\"text\" ngModel name=\"name\" #spy #name=\"ngModel\" id=\"name\" required [(ngModel)]=\"model.name\" (change)=\"log(name)\">\n      <div class=\"alert alert-danger\"[hidden]=\"name.valid || name.pristine\">Name is required</div>\n      TODO: remove this: {{model.name}} : {{spy.className}}\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"alterEgo\">Alter Ego</label>\n      <input type=\"text\" class=\"form-control\" id=\"alterEgo\" ngModel name=\"alterEgo\" #alterEgo=\"ngModel\" [(ngModel)]=\"model.alterEgo\" (change)=\"log(alterEgo)\">\n      TODO: remove this: {{model.alterEgo}}\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"power\">Hero Power</label>\n      <select class=\"form-control\" id=\"power\" required ngModel name=\"power\" #power=\"ngModel\" [(ngModel)]=\"model.power\" (change)=\"log(power)\">\n        <option *ngFor=\"let pow of powers\" [value]=\"pow\">{{pow}}</option>\n      </select>\n      TODO: remove this: {{model.power}}\n    </div>\n\n    <!-- \n      *Submit*: the (type=\"submit\") makes it the form submit button. \n      (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\": this make the form accessable with in the submit button.\n      [disabled]=\"!heroForm.form.valid\": bound the overall form validation to disabled attribute.\n\n      *New Hero*: heroForm.reset() need to ba called to reset the heroForm validator flags\n      the form may remember some flags prior to new hero click so need to reset.\n    -->\n    <button type=\"submit\" class=\"btn btn-success\" style=\"margin-right: 10px\" [disabled]=\"!heroForm.form.valid\">Submit</button>\n    <button type=\"button\" class=\"btn btn-primary\" style=\"margin-right: 10px\" (click)=\"newHero(); heroForm.reset()\">New Hero</button>\n\n  </form>  \n</div>\n<div [hidden]=\"!submitted\">\n  <h2>You submitted the following:</h2>\n  <div class=\"row\" style=\"padding-left: 10px;\">\n    <div class=\"col-xs-3\">Name: </div>\n    <div class=\"col-xs-9  pull-left\" style=\"color: red;\">{{ model.name }}</div>\n  </div>\n  <div class=\"row\" style=\"padding-left: 10px;\">\n    <div class=\"col-xs-3\">Alter Ego: </div>\n    <div class=\"col-xs-9 pull-left\" style=\"color: red;\">{{ model.alterEgo }}</div>\n  </div>\n  <div class=\"row\" style=\"padding-left: 10px;\">\n    <div class=\"col-xs-3\">Power: </div>\n    <div class=\"col-xs-9 pull-left\" style=\"color: red;\">{{ model.power }}</div>\n  </div>\n  <br>\n  <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\n</div>"

/***/ }),

/***/ "./src/app/forms/form-examples/form-angular/form-angular.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/forms/form-examples/form-angular/form-angular.component.ts ***!
  \****************************************************************************/
/*! exports provided: FormAngularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAngularComponent", function() { return FormAngularComponent; });
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "./src/app/forms/form-examples/form-angular/hero.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormAngularComponent = /** @class */ (function () {
    function FormAngularComponent() {
        this.powers = ['Really Smart',
            'Super Flexible',
            'Super Hot',
            'Weather Changer'];
        this.model = new _hero__WEBPACK_IMPORTED_MODULE_0__["Hero"](18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.submitted = false;
    }
    FormAngularComponent.prototype.onSubmit = function (heroForm) {
        this.submitted = true;
        console.log("heroForm = ", heroForm);
    };
    Object.defineProperty(FormAngularComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    FormAngularComponent.prototype.log = function (what) {
        console.log(what);
    };
    FormAngularComponent.prototype.newHero = function () {
        this.model = new _hero__WEBPACK_IMPORTED_MODULE_0__["Hero"](42, '', '');
    };
    FormAngularComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-angular',
            template: __webpack_require__(/*! ./form-angular.component.html */ "./src/app/forms/form-examples/form-angular/form-angular.component.html"),
            styles: [__webpack_require__(/*! ./form-angular.component.css */ "./src/app/forms/form-examples/form-angular/form-angular.component.css")]
        })
    ], FormAngularComponent);
    return FormAngularComponent;
}());



/***/ }),

/***/ "./src/app/forms/form-examples/form-angular/hero.ts":
/*!**********************************************************!*\
  !*** ./src/app/forms/form-examples/form-angular/hero.ts ***!
  \**********************************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
var Hero = /** @class */ (function () {
    function Hero(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Hero;
}());



/***/ }),

/***/ "./src/app/forms/form-examples/form-examples.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/forms/form-examples/form-examples.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/form-examples/form-examples.component.html":
/*!******************************************************************!*\
  !*** ./src/app/forms/form-examples/form-examples.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-6\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Angular Tutorial: Template Driven Form</h1>\n      </div>    \n      <div class=\"panel-body\">\n        <app-form-angular></app-form-angular>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-6\">\n    <div class=\"panel panel-default\" style=\"margin-right: 10px\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Template Driven Exercise</h1>\n      </div>    \n      <div class=\"panel-body\">\n        <app-form-exercise></app-form-exercise>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/form-examples/form-examples.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/forms/form-examples/form-examples.component.ts ***!
  \****************************************************************/
/*! exports provided: FormExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormExamplesComponent", function() { return FormExamplesComponent; });
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

var FormExamplesComponent = /** @class */ (function () {
    function FormExamplesComponent() {
    }
    FormExamplesComponent.prototype.ngOnInit = function () {
    };
    FormExamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-examples',
            template: __webpack_require__(/*! ./form-examples.component.html */ "./src/app/forms/form-examples/form-examples.component.html"),
            styles: [__webpack_require__(/*! ./form-examples.component.css */ "./src/app/forms/form-examples/form-examples.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormExamplesComponent);
    return FormExamplesComponent;
}());



/***/ }),

/***/ "./src/app/forms/form-examples/form-exercise/form-exercise.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/forms/form-examples/form-exercise/form-exercise.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.ng-valid[required], .ng-valid.required  {\n  border: 2px solid #42A948; \n}\n\n.ng-invalid:not(form)  {\n  border: 2px solid #a94442; \n}\n*/\n\n/**\n * this apply to all element with classes of \n * form-control && ng-touched && ng-invalid.\n *\n * Angular add ng-touched && ng-invalid when apply form-control.\n */\n\n.form-control.ng-touched.ng-invalid {\n  border: 2px solid red;\n}\n\n.alert.alert-danger {\n  margin: 0px;\n  /* padding: 0px; */\n}"

/***/ }),

/***/ "./src/app/forms/form-examples/form-exercise/form-exercise.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/forms/form-examples/form-exercise/form-exercise.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"submitted\">\n  <h3>Exercise Form</h3>\n  {{diagnostic}}\n  <form #courseForm=\"ngForm\" (ngSubmit)=\"onSubmit(courseForm)\">\n    <div class=\"form-group\">\n      <b><label for=\"name\">Course Name</label></b>\n      <input \n        class=\"form-control\" \n        type=\"text\" ngModel name=\"courseName\" \n        #spy #courseName=\"ngModel\" \n        id=\"name\" \n        required \n        minlength=\"4\" \n        [(ngModel)]=\"name\" \n        (change)=\"log(courseName)\">\n      <div class=\"alert alert-danger\" [hidden]=\"courseName.valid || courseName.pristine\">Course Name is required</div>\n      <div class=\"alert alert-danger\" *ngIf=\"courseName.errors && courseName.errors.minlength\">Name minimum charachters is {{ courseName.errors.minlength.requiredLength}}</div>\n\n      TODO: remove this: {{name}} : {{spy.className}}\n    </div>\n\n    <div class=\"form-group\">\n      <b><label for=\"categories\">Category</label></b>\n      <select class=\"form-control\" id=\"categories\" required ngModel name=\"courseCategory\" #courseCategory=\"ngModel\" [(ngModel)]=\"category\" (change)=\"log(courseCategory)\">\n        <option *ngFor=\"let category of categories\" [value]=\"category\">{{category}}</option>\n      </select>\n      TODO: remove this: {{category}}\n      <div class=\"checkbox\">\n        <label>\n          <input type=\"checkbox\" ngModel name=\"isGuarantee\" [(ngModel)]=\"isGuarantee\">\n          Check for 30 days many back guarantee\n          </label>\n          <p> {{courseForm.value | json }}</p>\n      </div>\n    </div>\n\n    <!-- \n      *Submit*: the (type=\"submit\") makes it the form submit button. \n      (ngSubmit)=\"onSubmit()\" #courseForm=\"ngForm\": this make the form accessable with in the submit button.\n      [disabled]=\"!courseForm.form.valid\": bound the overall form validation to disabled attribute.\n\n      *New Hero*: courseForm.reset() need to ba called to reset the courseForm validator flags\n      the form may remember some flags prior to new hero click so need to reset.\n    -->\n    <button type=\"submit\" class=\"btn btn-success\" style=\"margin-right: 10px\" [disabled]=\"!courseForm.form.valid\">Submit</button>\n    <button type=\"button\" class=\"btn btn-primary\" style=\"margin-right: 10px\" (click)=\"newHero(); courseForm.reset()\">New Course</button>\n  </form>  \n</div>\n\n<div [hidden]=\"!submitted\">\n  <h3>You submitted the following:</h3>\n  <div class=\"row\" style=\"padding-left: 10px;\">\n    <div class=\"col-xs-3\">Name: </div>\n    <div class=\"col-xs-9  pull-left\" style=\"color: red;\">{{ name }}</div>\n  </div>\n  <div class=\"row\" style=\"padding-left: 10px;\">\n    <div class=\"col-xs-3\">Category: </div>\n    <div class=\"col-xs-9 pull-left\" style=\"color: red;\">{{ category }}</div>\n  </div>\n  <div class=\"row\" style=\"padding-left: 10px;\">\n    <div class=\"col-xs-3\">isGuarantee: </div>\n    <div class=\"col-xs-9 pull-left\" style=\"color: red;\">{{ isGuarantee }}</div>\n  </div>\n  <br>\n  <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\n</div>"

/***/ }),

/***/ "./src/app/forms/form-examples/form-exercise/form-exercise.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/forms/form-examples/form-exercise/form-exercise.component.ts ***!
  \******************************************************************************/
/*! exports provided: FormExerciseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormExerciseComponent", function() { return FormExerciseComponent; });
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

var FormExerciseComponent = /** @class */ (function () {
    function FormExerciseComponent() {
        this.name = '';
        this.category = '';
        this.submitted = false;
        this.isGuarantee = false;
        this.categories = [
            'Development',
            'Art',
            'Photographic'
        ];
    }
    FormExerciseComponent.prototype.ngOnInit = function () {
    };
    FormExerciseComponent.prototype.log = function (what) {
        console.log(what);
    };
    FormExerciseComponent.prototype.isOnGuarantee = function (value) {
        this.isGuarantee = value;
    };
    FormExerciseComponent.prototype.onSubmit = function (heroForm) {
        this.submitted = true;
        console.log("name = " + this.name + ", category = " + this.category);
    };
    FormExerciseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-exercise',
            template: __webpack_require__(/*! ./form-exercise.component.html */ "./src/app/forms/form-examples/form-exercise/form-exercise.component.html"),
            styles: [__webpack_require__(/*! ./form-exercise.component.css */ "./src/app/forms/form-examples/form-exercise/form-exercise.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormExerciseComponent);
    return FormExerciseComponent;
}());



/***/ }),

/***/ "./src/app/forms/form-ngform/form-ngform.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forms/form-ngform/form-ngform.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/form-ngform/form-ngform.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forms/form-ngform/form-ngform.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>\n    Like ngModel create a form-control angular create form-group for each form element.\n    <b>ngForm</b>: is a directive (the name is a the selector). Angular automatic apply the \n    ngForm directive (unless is define with not(ngForm)).\n    <b>ngSubmit</b>: output property of ngForm. We can bind the template variable to ngFrom and \n    send it to an event property.\n    <b>fm.form.values</b>: include the values of the form-controls inside the group. This can use to\n    send directrly to server.\n    \n    &lt;form <b style=\"color:red;\">#fm=\"ngForm\" (ngSubmit)=\"submit(fm)\"</b>&gt;\n      &lt;div class=\"form-group\"&gt;\n        &lt;label for=\"firstName\"&gt;First Name&lt;/label&gt;\n        &lt;input <b style=\"color:red;\">require minlegnth=\"3\" maxlength=10 pattern=\"banana\" </b> <b>ngModel name=\"firstName\"</b> #firstName (change)=\"log(firstName)\" class=\"form-control\" type=\"text\" id=\"firstName\"&gt;\n        &lt;div class=\"alert alert-danger\" *ngIf=\"firstName.touched && !firstName.valid\"&gt;\n          &lt;div *ngIf=\"firstName.errors.required\">First name is require ..&lt;/div&gt;\n          &lt;div *ngIf=\"firstName.errors.minlength\">First name should be minimum 3 charachters&lt;/div&gt;\n          &lt;div *ngIf=\"firstName.errors.pattern\">First name doesn't match the pattern&lt;/div&gt;        \n        &lt;/div&gt;\n        &lt;button class=\"btn btn-primary\"&gt;Submit&lt;button&gt;\n      &lt;/div&gt;\n    &lt;/form&gt;\n  </pre>\n  <form #fm=\"ngForm\" (ngSubmit)=\"submit(fm)\">\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input ngModel name=\"firstName\" minlegnth=\"3\" maxlength=10 pattern=\"banana\" #firstName=\"ngModel\" (change)=\"log(firstName)\" class=\"form-control\" type=\"text\" id=\"firstName\">\n      <div class=\"alert alert-danger\" *ngIf=\"firstName.touched && !firstName.valid\">\n        <div *ngIf=\"firstName.errors.required\">First name is require ..</div>\n        <div *ngIf=\"firstName.errors.minlength\">First name should be minimum {{firstName.errors.minlength.requiredLength}} charachters</div>\n        <div *ngIf=\"firstName.errors.pattern\">First name doesn't match the pattern</div>\n      </div>\n  \n    </div>    \n    <!-- <div class=\"form-group\">\n      <label for=\"comment\">Comment</label>\n      <textarea ngModel name=\"comment\" id=\"\" cols=\"30\" rows=\"10\" class=\"form-control\"></textarea>\n    </div> -->\n      <button class=\"btn btn-primary\">Submit</button>\n  </form>"

/***/ }),

/***/ "./src/app/forms/form-ngform/form-ngform.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forms/form-ngform/form-ngform.component.ts ***!
  \************************************************************/
/*! exports provided: FormNgformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormNgformComponent", function() { return FormNgformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormNgformComponent = /** @class */ (function () {
    function FormNgformComponent() {
    }
    FormNgformComponent.prototype.submit = function (fm) {
        console.log(fm);
    };
    FormNgformComponent.prototype.log = function (what) {
        console.log(what);
    };
    FormNgformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-ngform',
            template: __webpack_require__(/*! ./form-ngform.component.html */ "./src/app/forms/form-ngform/form-ngform.component.html"),
            styles: [__webpack_require__(/*! ./form-ngform.component.css */ "./src/app/forms/form-ngform/form-ngform.component.css")]
        })
    ], FormNgformComponent);
    return FormNgformComponent;
}());



/***/ }),

/***/ "./src/app/forms/form-ngmodel/form-ngmodel.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forms/form-ngmodel/form-ngmodel.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  "

/***/ }),

/***/ "./src/app/forms/form-ngmodel/form-ngmodel.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forms/form-ngmodel/form-ngmodel.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>\n    <b>ngModel</b>: creating implist FormContorl\n    <b>name</b>: adding ngModel with an attrbiute name=\"..\" enable to distigush the directive from others.\n    This all need to add to set template-driven approch for validation.\n    <b style=\"color:red;\">require</b>: a field indicate to angular that this field is require\n\n    <b>#firstName (change)=\"log(firstName)\"</b>: adding a template variable just to log the value of ngModel\n    When type name in the firstName input you can check the console about the ngModel FormControl object.    \n    The 'control' field is of type control.\n\n    <b>add valid validation</b>&lt;div class=\"alert alert-danger\" *ngIf=\"firstName.touched && !firstName.valid\"&gt;First Name is Require ..&lt;/div&gt;\n    this render the div if !firstName.valid and the input is 'touched'.\n\n    &lt;form&gt;\n      &lt;div class=\"form-group\"&gt;\n        &lt;label for=\"firstName\"&gt;First Name&lt;/label&gt;\n        &lt;input <b style=\"color:red;\">require</b> <b>ngModel name=\"firstName\"</b> #firstName (change)=\"log(firstName)\" class=\"form-control\" type=\"text\" id=\"firstName\"&gt;\n        &lt;div class=\"alert alert-danger\" <b>*ngIf=\"firstName.touched && !firstName.valid\"</b>&gt;First Name is Require ..&lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=\"form-group\"&gt;\n        &lt;label for=\"comment\"&gt;Comment&lt;/label&gt;\n        &lt;textarea ngModel name=\"comment\" id=\"\" cols=\"30\" rows=\"10\" class=\"form-control\"&gt;&lt;/textarea&gt;\n      &lt;/div&gt;\n      &lt;button class=\"btn btn-primary\"&gt;Submit&lt;button&gt;\n    &lt;/form&gt;\n  </pre>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input ngModel name=\"firstName\" #firstName=\"ngModel\" (change)=\"log(firstName)\" class=\"form-control\" type=\"text\" id=\"firstName\">\n      <div class=\"alert alert-danger\" *ngIf=\"firstName.touched && !firstName.valid\">First Name is Require ..</div>\n  \n    </div>    \n    <!-- <div class=\"form-group\">\n      <label for=\"comment\">Comment</label>\n      <textarea ngModel name=\"comment\" id=\"\" cols=\"30\" rows=\"10\" class=\"form-control\"></textarea>\n    </div> -->\n      <button class=\"btn btn-primary\">Submit</button>\n  </form>"

/***/ }),

/***/ "./src/app/forms/form-ngmodel/form-ngmodel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forms/form-ngmodel/form-ngmodel.component.ts ***!
  \**************************************************************/
/*! exports provided: FormNgmodelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormNgmodelComponent", function() { return FormNgmodelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormNgmodelComponent = /** @class */ (function () {
    function FormNgmodelComponent() {
    }
    FormNgmodelComponent.prototype.log = function (what) {
        console.log(what);
    };
    FormNgmodelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-ngmodel',
            template: __webpack_require__(/*! ./form-ngmodel.component.html */ "./src/app/forms/form-ngmodel/form-ngmodel.component.html"),
            styles: [__webpack_require__(/*! ./form-ngmodel.component.css */ "./src/app/forms/form-ngmodel/form-ngmodel.component.css")]
        })
    ], FormNgmodelComponent);
    return FormNgmodelComponent;
}());



/***/ }),

/***/ "./src/app/forms/form-ngmodelgroup/form-ngmodelgroup.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/forms/form-ngmodelgroup/form-ngmodelgroup.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/form-ngmodelgroup/form-ngmodelgroup.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/forms/form-ngmodelgroup/form-ngmodelgroup.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>\n<b>ngModelGroup</b>: a group if form-group. it is combain all the forms in one nested object.\n#contact=\"ngModelGroup\" can be reference any where in the template and validate the group as a hole.\n<b style=\"color:red;\">&lt;div *ngIf=\"!contact.valid\"&gt;&lt;/div&gt;</b> validate the entaier group\n\n&lt;form <b style=\"color:red;\">#fm=\"ngForm\" (ngSubmit)=\"submit(fm)\"</b>&gt;\n  &lt;div ngModelGroup=\"contact\" #contact=\"ngModelGroup\"&gt;\n    &lt;div class=\"form-group\"&gt;\n      &lt;label for=\"firstName\"&gt;First Name&lt;/label&gt;\n      &lt;input <b style=\"color:red;\">require minlegnth=\"3\" maxlength=10 pattern=\"banana\" </b> <b>ngModel name=\"firstName\"</b> #firstName (change)=\"log(firstName)\" class=\"form-control\" type=\"text\" id=\"firstName\"&gt;\n      &lt;div class=\"alert alert-danger\" *ngIf=\"firstName.touched && !firstName.valid\"&gt;\n        &lt;div *ngIf=\"firstName.errors.required\">First name is require ..&lt;/div&gt;\n        &lt;div *ngIf=\"firstName.errors.minlength\">First name should be minimum 3 charachters&lt;/div&gt;\n        &lt;div *ngIf=\"firstName.errors.pattern\">First name doesn't match the pattern&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n  &lt;button class=\"btn btn-primary\"&gt;Submit&lt;button&gt;\n&lt;/form&gt;\n</pre>\n<form #fm=\"ngForm\" (ngSubmit)=\"submit(fm)\">\n  <div ngModelGroup=\"contact\" #contact=\"ngModelGroup\">\n    <div *ngIf=\"!contact.valid\"></div>\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>      \n      <input ngModel name=\"firstName\" minlegnth=\"3\" maxlength=10 pattern=\"banana\" #firstName=\"ngModel\" (change)=\"log(firstName)\" class=\"form-control\" type=\"text\" id=\"firstName\">\n      <div class=\"alert alert-danger\" *ngIf=\"firstName.touched && !firstName.valid\">\n        <div *ngIf=\"firstName.errors.required\">First name is require ..</div>\n        <div *ngIf=\"firstName.errors.minlength\">First name should be minimum {{firstName.errors.minlength.requiredLength}} charachters</div>\n        <div *ngIf=\"firstName.errors.pattern\">First name doesn't match the pattern</div>\n      </div>\n    </div> \n  </div>\n  \n  <!-- <div class=\"form-group\">\n    <label for=\"comment\">Comment</label>\n    <textarea ngModel name=\"comment\" id=\"\" cols=\"30\" rows=\"10\" class=\"form-control\"></textarea>\n  </div> -->\n    <button class=\"btn btn-primary\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/forms/form-ngmodelgroup/form-ngmodelgroup.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/forms/form-ngmodelgroup/form-ngmodelgroup.component.ts ***!
  \************************************************************************/
/*! exports provided: FormNgmodelgroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormNgmodelgroupComponent", function() { return FormNgmodelgroupComponent; });
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

var FormNgmodelgroupComponent = /** @class */ (function () {
    function FormNgmodelgroupComponent() {
    }
    FormNgmodelgroupComponent.prototype.ngOnInit = function () {
    };
    FormNgmodelgroupComponent.prototype.log = function (what) {
        console.log(what);
    };
    FormNgmodelgroupComponent.prototype.submit = function (fm) {
        console.log(fm);
    };
    FormNgmodelgroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-ngmodelgroup',
            template: __webpack_require__(/*! ./form-ngmodelgroup.component.html */ "./src/app/forms/form-ngmodelgroup/form-ngmodelgroup.component.html"),
            styles: [__webpack_require__(/*! ./form-ngmodelgroup.component.css */ "./src/app/forms/form-ngmodelgroup/form-ngmodelgroup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormNgmodelgroupComponent);
    return FormNgmodelgroupComponent;
}());



/***/ }),

/***/ "./src/app/forms/form-validations/form-validations.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/forms/form-validations/form-validations.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/**\n * this apply to all element with classes of \n * form-control && ng-touched && ng-invalid.\n *\n * Angular add ng-touched && ng-invalid when apply form-control.\n */\n.form-control.ng-touched.ng-invalid {\n  border: 2px solid red;\n}\n"

/***/ }),

/***/ "./src/app/forms/form-validations/form-validations.component.html":
/*!************************************************************************!*\
  !*** ./src/app/forms/form-validations/form-validations.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>\nHTML-5 provide sevral directives for validation like minlegnth, maxlegth \n<b>pattern</b>: apply regular expression.\nThe form-control check those validations and update the firstName object.\nCheck the browser console for details about firstName object.\n\n<b>Stypling</b>: see the .css file for stying the input field when error occure.\n\n&lt;form&gt;\n  &lt;div class=\"form-group\"&gt;\n    &lt;label for=\"firstName\"&gt;First Name&lt;/label&gt;\n    &lt;input <b style=\"color:red;\">require minlegnth=\"3\" maxlength=10 pattern=\"banana\" </b> <b>ngModel name=\"firstName\"</b> #firstName (change)=\"log(firstName)\" class=\"form-control\" type=\"text\" id=\"firstName\"&gt;\n    &lt;div class=\"alert alert-danger\" *ngIf=\"firstName.touched && !firstName.valid\"&gt;\n      &lt;div *ngIf=\"firstName.errors.required\">First name is require ..&lt;/div&gt;\n        &lt;div *ngIf=\"firstName.errors.minlength\">First name should be minimum 3 charachters&lt;/div&gt;\n        &lt;div *ngIf=\"firstName.errors.pattern\">First name doesn't match the pattern&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;button class=\"btn btn-primary\"&gt;Submit&lt;button&gt;\n&lt;/form&gt;\n</pre>\n<form>\n<div class=\"form-group\">\n  <label for=\"firstName\">First Name</label>\n  <input ngModel name=\"firstName\" minlegnth=\"3\" maxlength=10 pattern=\"banana\" #firstName=\"ngModel\" (change)=\"log(firstName)\" class=\"form-control\" type=\"text\" id=\"firstName\">\n  <div class=\"alert alert-danger\" *ngIf=\"firstName.touched && !firstName.valid\">\n    <div *ngIf=\"firstName.errors.required\">First name is require ..</div>\n    <div *ngIf=\"firstName.errors.minlength\">First name should be minimum {{firstName.errors.minlength.requiredLength}} charachters</div>\n    <div *ngIf=\"firstName.errors.pattern\">First name doesn't match the pattern</div>\n  </div>\n\n</div>    \n<!-- <div class=\"form-group\">\n  <label for=\"comment\">Comment</label>\n  <textarea ngModel name=\"comment\" id=\"\" cols=\"30\" rows=\"10\" class=\"form-control\"></textarea>\n</div> -->\n  <button class=\"btn btn-primary\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/forms/form-validations/form-validations.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/forms/form-validations/form-validations.component.ts ***!
  \**********************************************************************/
/*! exports provided: FormValidationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationsComponent", function() { return FormValidationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormValidationsComponent = /** @class */ (function () {
    function FormValidationsComponent() {
    }
    FormValidationsComponent.prototype.log = function (what) {
        console.log(what);
    };
    FormValidationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-validations',
            template: __webpack_require__(/*! ./form-validations.component.html */ "./src/app/forms/form-validations/form-validations.component.html"),
            styles: [__webpack_require__(/*! ./form-validations.component.css */ "./src/app/forms/form-validations/form-validations.component.css")]
        })
    ], FormValidationsComponent);
    return FormValidationsComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.css":
/*!*******************************************!*\
  !*** ./src/app/forms/forms.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/forms.component.html":
/*!********************************************!*\
  !*** ./src/app/forms/forms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <!-- <a class=\"nav-link\" [routerLink]=\"['/forms', 'angular']\" style=\"background-color: black; color: coral; width: 90px;\" href=\"#\">Angular</a>\n  <a class=\"nav-link\" [routerLink]=\"['/forms', 'exercise']\" style=\"background-color: black; color: coral; width: 90px;\" href=\"#\">Exercise</a> -->\n  <a \n    class=\"nav-link\" \n    [routerLink]=\"['/forms', 'examples']\" \n    style=\"background-color: black; color: coral; width: 80px; margin-bottom: 10px; margin-left: 15px;\" \n    href=\"#\">Examples</a>\n\n</div>\n<router-outlet></router-outlet>\n\n<div class=\"row\">\n  <!-- this is the left column -->\n  <div class=\"col-6\" style=\"border-style: ridge;\">\n    <hr>\n    <h4>Note: Form Basic</h4>\n    <app-form-basic></app-form-basic>    \n    <hr>\n    <h4>Note: Using ngModel to create form control</h4>\n    <app-form-ngmodel></app-form-ngmodel>\n    <hr>    \n    <h4>Note: Disbale the Submit Button</h4>\n    <app-form-disablesubmit></app-form-disablesubmit>\n    <hr>\n  </div>\n  <div class=\"col-6\" style=\"border-style: ridge;\">\n    <!-- this is the right column -->\n    <hr>\n    <h4>Note: Form Control Validations</h4>\n    <app-form-validations></app-form-validations>\n    <hr>    \n    <h4>Note: Using ngForm</h4>\n    <app-form-ngform></app-form-ngform>\n    <hr>    \n    <h4>Note: Using ngModelGroup</h4>\n    <app-form-ngmodelgroup></app-form-ngmodelgroup>\n    <hr>        \n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
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

var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
    }
    FormsComponent.prototype.ngOnInit = function () {
    };
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.css */ "./src/app/forms/forms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.component.css":
/*!***********************************************!*\
  !*** ./src/app/routing/routing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routing/routing.component.html":
/*!************************************************!*\
  !*** ./src/app/routing/routing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- this is the left column -->\n  <div class=\"col-6\" style=\"border-style: ridge;\">\n    <hr>\n  </div>\n  <div class=\"col-6\" style=\"border-style: ridge;\">\n    <!-- this is the right column -->\n    <hr>\n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/routing/routing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/routing/routing.component.ts ***!
  \**********************************************/
/*! exports provided: RoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponent", function() { return RoutingComponent; });
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

var RoutingComponent = /** @class */ (function () {
    function RoutingComponent() {
    }
    RoutingComponent.prototype.ngOnInit = function () {
    };
    RoutingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-routing',
            template: __webpack_require__(/*! ./routing.component.html */ "./src/app/routing/routing.component.html"),
            styles: [__webpack_require__(/*! ./routing.component.css */ "./src/app/routing/routing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RoutingComponent);
    return RoutingComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tsemach/work/angular-notes.master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map