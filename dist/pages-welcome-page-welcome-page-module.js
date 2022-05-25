(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-page-welcome-page-module"],{

/***/ "DNGe":
/*!***********************************************************!*\
  !*** ./src/app/pages/welcome-page/welcome-page.module.ts ***!
  \***********************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _welcome_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-page-routing.module */ "YrZl");
/* harmony import */ var _shared_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/logo/logo.module */ "K0mZ");
/* harmony import */ var _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/button/button.module */ "ySkq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _welcome_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome-page.component */ "PgMP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class WelcomePageModule {
}
WelcomePageModule.ɵfac = function WelcomePageModule_Factory(t) { return new (t || WelcomePageModule)(); };
WelcomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: WelcomePageModule });
WelcomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _welcome_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["WelcomePageRoutingModule"],
            _shared_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_2__["LogoModule"],
            _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](WelcomePageModule, { declarations: [_welcome_page_component__WEBPACK_IMPORTED_MODULE_5__["WelcomePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _welcome_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["WelcomePageRoutingModule"],
        _shared_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_2__["LogoModule"],
        _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]], exports: [_welcome_page_component__WEBPACK_IMPORTED_MODULE_5__["WelcomePageComponent"]] }); })();


/***/ }),

/***/ "PgMP":
/*!**************************************************************!*\
  !*** ./src/app/pages/welcome-page/welcome-page.component.ts ***!
  \**************************************************************/
/*! exports provided: WelcomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function() { return WelcomePageComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/player.service */ "dY/6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/data.service */ "iiaH");
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/logo/logo.component */ "/0IE");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









class WelcomePageComponent {
    constructor(fb, playerService, router, dataService) {
        this.fb = fb;
        this.playerService = playerService;
        this.router = router;
        this.dataService = dataService;
        this.quizForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)]],
        });
    }
    ngOnInit() {
    }
    startQuiz(name) {
        this.playerService.startGame(name);
        this.dataService.setActiveTab(1);
        this.router.navigate(['/quiz']);
    }
}
WelcomePageComponent.ɵfac = function WelcomePageComponent_Factory(t) { return new (t || WelcomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
WelcomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WelcomePageComponent, selectors: [["app-welcome-page"]], decls: 14, vars: 8, consts: [[1, "page-wrapper"], [1, "logo-center"], [1, "page-container-m", "align-center-col"], [1, "w-100", "gap-1", "align-center-col"], [1, "title-m"], [1, "text-m"], [1, "w-100", "gap-3", "align-center-col", 3, "formGroup"], ["formControlName", "name", 1, "welcome-input", 3, "placeholder"], ["icon", "arrow_right_alt", 3, "text", "disabled", "buttonClick"]], template: function WelcomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Please enter your name and let's start our quiz!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "app-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("buttonClick", function WelcomePageComponent_Template_app_button_buttonClick_12_listener() { return ctx.startQuiz(ctx.quizForm.value.name); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.quizForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 4, "Type your name here..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 6, "Start quiz"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.quizForm.invalid);
    } }, directives: [_shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"]], styles: [".align-center-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.gap-1[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n\n.gap-2[_ngcontent-%COMP%] {\n  gap: 2rem;\n}\n\n.gap-3[_ngcontent-%COMP%] {\n  gap: 3rem;\n}\n\n.o-hidden[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.pos-rel[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.z-1[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.page-container-m[_ngcontent-%COMP%] {\n  background-color: #1B1D31;\n  width: 110rem;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 1rem;\n  padding: 8rem;\n  text-align: center;\n  justify-content: space-between;\n  transition: all 0.3s;\n}\n\n.logo-center[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 9rem;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.title-m[_ngcontent-%COMP%] {\n  font-family: \"Prompt\", sans-serif;\n  font-size: 3rem;\n  font-weight: 700;\n  line-height: 4.5rem;\n  color: #FFFFFF;\n}\n\n@media (max-width: 1200px) and (min-width: 1001px) {\n  .page-container-m[_ngcontent-%COMP%] {\n    width: 90rem;\n  }\n}\n\n@media (max-width: 1000px) and (min-width: 801px) {\n  .page-container-m[_ngcontent-%COMP%] {\n    width: 70rem;\n  }\n}\n\n@media (max-width: 800px) and (min-width: 601px) {\n  .page-container-m[_ngcontent-%COMP%] {\n    width: 50rem;\n    padding: 7rem;\n  }\n\n  .title-m[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    line-height: 3.5rem;\n  }\n}\n\n@media (max-width: 600px) and (min-width: 451px) {\n  .page-container-m[_ngcontent-%COMP%] {\n    width: 40rem;\n    padding: 5rem;\n  }\n\n  .title-m[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    line-height: 3.5rem;\n  }\n}\n\n@media (max-width: 450px) {\n  .page-container-m[_ngcontent-%COMP%] {\n    width: 30rem;\n    padding: 4.5rem 3rem;\n  }\n\n  .title-m[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    line-height: 3rem;\n  }\n}\n\n.welcome-input[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  border-bottom: 2px solid #373B62;\n  width: 70%;\n  text-align: center;\n  padding: 2rem;\n  margin-top: 3rem;\n  outline: none;\n  transition: all 0.3s;\n}\n\n.welcome-input[_ngcontent-%COMP%]:focus {\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n}\n\n.welcome-input[_ngcontent-%COMP%]:focus::placeholder {\n  transform: translateY(-5px);\n  opacity: 0;\n  font-size: 1.2rem;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #FFFFFF;\n  opacity: 0.3;\n  font-size: 1.4rem;\n  transition: all 0.3s;\n}\n\ninput[_ngcontent-%COMP%]:hover::placeholder {\n  opacity: 0.5;\n}\n\n@media (max-width: 600px) and (min-width: 451px) {\n  .welcome-input[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n\n@media (max-width: 450px) {\n  .welcome-input[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .welcome-input[_ngcontent-%COMP%]:focus::placeholder {\n    font-size: 1rem;\n  }\n\n  input[_ngcontent-%COMP%]::placeholder {\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fbWFpbi1zdHlsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL3dlbGNvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7QUNIRjs7QURNQTtFQUNFLFNBQUE7QUNIRjs7QURNQTtFQUNFLFNBQUE7QUNIRjs7QURNQTtFQUNFLFNBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsVUFBQTtBQ0hGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDTEY7O0FEUUE7RUFDRSx5QkVwRFE7RUZxRFIsYUFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLDhCQUFBO0VBRUEsb0JBQUE7QUNQRjs7QURZQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQ1RGOztBRGNBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNFdEZXO0FEMkViOztBRGdCQTtFQUNFO0lBQ0UsWUFBQTtFQ2JGO0FBQ0Y7O0FEZ0JBO0VBQ0U7SUFDRSxZQUFBO0VDZEY7QUFDRjs7QURpQkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDZkY7O0VEa0JBO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtFQ2ZGO0FBQ0Y7O0FEa0JBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQ2hCRjs7RURtQkE7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNoQkY7QUFDRjs7QURtQkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxvQkFBQTtFQ2pCRjs7RURvQkE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUNqQkY7QUFDRjs7QUF2SEE7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQXlIRjs7QUF2SEU7RUFDRSxpREFBQTtBQXlISjs7QUF2SEk7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQXlITjs7QUFwSEE7RUFDRSxjQ3ZCVztFRHdCWCxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQXVIRjs7QUFuSEU7RUFDRSxZQUFBO0FBc0hKOztBQWxIQTtFQUNFO0lBQ0UsVUFBQTtFQXFIRjtBQUNGOztBQWxIQTtFQUNFO0lBQ0UsVUFBQTtFQW9IRjtFQWpISTtJQUNFLGVBQUE7RUFtSE47O0VBOUdBO0lBQ0UsaUJBQUE7RUFpSEY7QUFDRiIsImZpbGUiOiJ3ZWxjb21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29sb3JzXCI7XG5cbi8vIE1BSU5cblxuLmFsaWduLWNlbnRlci1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53LTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaC0xMDAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5nYXAtMSB7XG4gIGdhcDogMXJlbTtcbn1cblxuLmdhcC0yIHtcbiAgZ2FwOiAycmVtO1xufVxuXG4uZ2FwLTMge1xuICBnYXA6IDNyZW07XG59XG5cbi5vLWhpZGRlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wb3MtcmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uei0xIHtcbiAgei1pbmRleDogMTtcbn1cblxuLy8gUEFHRVNcblxuLnBhZ2Utd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wYWdlLWNvbnRhaW5lci1tIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLXBhZ2U7XG4gIHdpZHRoOiAxMTByZW07XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBhZGRpbmc6IDhyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcbn1cblxuLy8gTE9HT1xuXG4ubG9nby1jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOXJlbTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi8vIFRFWFRcblxuLnRpdGxlLW0ge1xuICBmb250LWZhbWlseTogJ1Byb21wdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDQuNXJlbTtcbiAgY29sb3I6ICR0ZXh0LWxpZ2h0O1xufVxuXG4vLyBSRVNQT05TSVZFXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiAxMDAxcHgpe1xuICAucGFnZS1jb250YWluZXItbSB7XG4gICAgd2lkdGg6IDkwcmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIGFuZCAobWluLXdpZHRoOiA4MDFweCl7XG4gIC5wYWdlLWNvbnRhaW5lci1tIHtcbiAgICB3aWR0aDogNzByZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSBhbmQgKG1pbi13aWR0aDogNjAxcHgpe1xuICAucGFnZS1jb250YWluZXItbSB7XG4gICAgd2lkdGg6IDUwcmVtO1xuICAgIHBhZGRpbmc6IDdyZW07XG4gIH1cblxuICAudGl0bGUtbSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIGFuZCAobWluLXdpZHRoOiA0NTFweCl7XG4gIC5wYWdlLWNvbnRhaW5lci1tIHtcbiAgICB3aWR0aDogNDByZW07XG4gICAgcGFkZGluZzogNXJlbTtcbiAgfVxuXG4gIC50aXRsZS1tIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnBhZ2UtY29udGFpbmVyLW0ge1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBwYWRkaW5nOiA0LjVyZW0gM3JlbTtcbiAgfVxuXG4gIC50aXRsZS1tIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzL21haW5cIjtcblxuLndlbGNvbWUtaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGJvcmRlci1saWdodDtcbiAgd2lkdGg6IDcwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKCNmZmYsIC41KTtcblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gIH1cbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICR0ZXh0LWxpZ2h0O1xuICBvcGFjaXR5OiAuMztcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XG59XG5cbmlucHV0OmhvdmVyIHtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgYW5kIChtaW4td2lkdGg6IDQ1MXB4KXtcbiAgLndlbGNvbWUtaW5wdXQge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KXtcbiAgLndlbGNvbWUtaW5wdXQge1xuICAgIHdpZHRoOiA5MCU7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbn1cbiIsIi8vIFRFWFRcblxuJHRleHQtbGlnaHQ6ICNGRkZGRkY7XG5cbi8vIEJBQ0tHUk9VTkRcblxuJGJnLWFwcDogIzEyMTMxRTtcblxuJGJnLXBhZ2U6ICMxQjFEMzE7XG5cbi8vIEJPUkRFUlxuXG4kYm9yZGVyLWxpZ2h0OiAjMzczQjYyXG5cbiJdfQ== */"] });


/***/ }),

/***/ "YrZl":
/*!*******************************************************************!*\
  !*** ./src/app/pages/welcome-page/welcome-page-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: WelcomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function() { return WelcomePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _welcome_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-page.component */ "PgMP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _welcome_page_component__WEBPACK_IMPORTED_MODULE_1__["WelcomePageComponent"]
    }
];
class WelcomePageRoutingModule {
}
WelcomePageRoutingModule.ɵfac = function WelcomePageRoutingModule_Factory(t) { return new (t || WelcomePageRoutingModule)(); };
WelcomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WelcomePageRoutingModule });
WelcomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WelcomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-welcome-page-welcome-page-module.js.map