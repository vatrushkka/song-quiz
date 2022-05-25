(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-summary-page-summary-page-module"],{

/***/ "Kq+w":
/*!**************************************************************!*\
  !*** ./src/app/pages/summary-page/summary-page.component.ts ***!
  \**************************************************************/
/*! exports provided: SummaryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageComponent", function() { return SummaryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/player.service */ "dY/6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/data.service */ "iiaH");
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/logo/logo.component */ "/0IE");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







class SummaryPageComponent {
    constructor(playerService, router, dataService) {
        this.playerService = playerService;
        this.router = router;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.subName = this.playerService.player$.subscribe(name => {
            this.name = name;
        });
        this.subScore = this.playerService.score$.subscribe(score => {
            this.score = score;
        });
        this.tabsSub = this.dataService.tabsAmount$.subscribe(amount => {
            this.tabsAmount = amount;
        });
    }
    playAgain() {
        this.playerService.startGame(this.name);
        this.router.navigate(['quiz']);
    }
    anotherPlayer() {
        this.playerService.playAnotherUser();
        this.router.navigate(['start']);
    }
    ngOnDestroy() {
        this.subName.unsubscribe();
        this.subScore.unsubscribe();
        this.tabsSub.unsubscribe();
    }
}
SummaryPageComponent.ɵfac = function SummaryPageComponent_Factory(t) { return new (t || SummaryPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
SummaryPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryPageComponent, selectors: [["app-summary-page"]], decls: 17, vars: 8, consts: [[1, "page-wrapper"], [1, "logo-center"], [1, "pos-rel"], [1, "union-container"], ["src", "assets/img/union.png", "alt", "", 1, "w-100"], [1, "page-container-m", "pos-rel", "align-center-col", "gap-2", "z-1"], [1, "score"], [1, "title-m"], [1, "text-m"], [1, "buttons-container"], ["text", "Another player", 3, "buttonClick"], ["text", "Play again", "icon", "arrow_right_alt", 3, "buttonClick"]], template: function SummaryPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("buttonClick", function SummaryPageComponent_Template_app_button_buttonClick_15_listener() { return ctx.anotherPlayer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("buttonClick", function SummaryPageComponent_Template_app_button_buttonClick_16_listener() { return ctx.playAgain(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.score, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, ctx.name), ", ", ctx.score >= ctx.tabsAmount * 3 - 2 ? "did so great!" : "you can do better, try again!", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("You've got ", ctx.score, " of ", ctx.tabsAmount * 3, ". ", ctx.score >= ctx.tabsAmount * 3 - 2 ? "You are definitely a music lover!" : null, "");
    } }, directives: [_shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], styles: [".align-center-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.gap-1[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n\n.gap-2[_ngcontent-%COMP%] {\n  gap: 2rem;\n}\n\n.gap-3[_ngcontent-%COMP%] {\n  gap: 3rem;\n}\n\n.o-hidden[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.pos-rel[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.z-1[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.page-container-m[_ngcontent-%COMP%] {\n  background-color: #1B1D31;\n  width: 110rem;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 1rem;\n  padding: 8rem;\n  text-align: center;\n  justify-content: space-between;\n  transition: all 0.3s;\n}\n\n.logo-center[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 9rem;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.title-m[_ngcontent-%COMP%] {\n  font-family: \"Prompt\", sans-serif;\n  font-size: 3rem;\n  font-weight: 700;\n  line-height: 4.5rem;\n  color: #FFFFFF;\n}\n\n@media (max-width: 1200px) and (min-width: 1001px) {\n  .page-container-m[_ngcontent-%COMP%] {\n    width: 90rem;\n  }\n}\n\n@media (max-width: 1000px) and (min-width: 801px) {\n  .page-container-m[_ngcontent-%COMP%] {\n    width: 70rem;\n  }\n}\n\n@media (max-width: 800px) and (min-width: 601px) {\n  .page-container-m[_ngcontent-%COMP%] {\n    width: 50rem;\n    padding: 7rem;\n  }\n\n  .title-m[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    line-height: 3.5rem;\n  }\n}\n\n@media (max-width: 600px) and (min-width: 451px) {\n  .page-container-m[_ngcontent-%COMP%] {\n    width: 40rem;\n    padding: 5rem;\n  }\n\n  .title-m[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    line-height: 3.5rem;\n  }\n}\n\n@media (max-width: 450px) {\n  .page-container-m[_ngcontent-%COMP%] {\n    width: 30rem;\n    padding: 4.5rem 3rem;\n  }\n\n  .title-m[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    line-height: 3rem;\n  }\n}\n\n.union-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 23rem;\n  height: 23rem;\n  top: -13.5rem;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.score[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -7rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #373B62;\n  border-radius: 100rem;\n  width: 10rem;\n  height: 10rem;\n  font-size: 3.6rem;\n}\n\n.buttons-container[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  display: flex;\n  gap: 2rem;\n}\n\n@media (max-width: 800px) {\n  .buttons-container[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n}\n\n@media (max-width: 600px) and (min-width: 451px) {\n  .score[_ngcontent-%COMP%] {\n    top: -6rem;\n    width: 9rem;\n    height: 9rem;\n    font-size: 3rem;\n  }\n\n  .union-container[_ngcontent-%COMP%] {\n    width: 21rem;\n    height: 21rem;\n    top: -12rem;\n  }\n}\n\n@media (max-width: 450px) {\n  .score[_ngcontent-%COMP%] {\n    top: -5rem;\n    width: 8rem;\n    height: 8rem;\n    font-size: 3rem;\n  }\n\n  .union-container[_ngcontent-%COMP%] {\n    width: 19rem;\n    height: 19rem;\n    top: -10.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fbWFpbi1zdHlsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL3N1bW1hcnktcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7QUNIRjs7QURNQTtFQUNFLFNBQUE7QUNIRjs7QURNQTtFQUNFLFNBQUE7QUNIRjs7QURNQTtFQUNFLFNBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsVUFBQTtBQ0hGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDTEY7O0FEUUE7RUFDRSx5QkVwRFE7RUZxRFIsYUFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLDhCQUFBO0VBRUEsb0JBQUE7QUNQRjs7QURZQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQ1RGOztBRGNBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNFdEZXO0FEMkViOztBRGdCQTtFQUNFO0lBQ0UsWUFBQTtFQ2JGO0FBQ0Y7O0FEZ0JBO0VBQ0U7SUFDRSxZQUFBO0VDZEY7QUFDRjs7QURpQkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDZkY7O0VEa0JBO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtFQ2ZGO0FBQ0Y7O0FEa0JBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQ2hCRjs7RURtQkE7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNoQkY7QUFDRjs7QURtQkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxvQkFBQTtFQ2pCRjs7RURvQkE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUNqQkY7QUFDRjs7QUF2SEE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQXlIRjs7QUF0SEE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBeUhGOztBQXRIQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUF5SEY7O0FBdEhBO0VBQ0U7SUFDRSw4QkFBQTtJQUNBLG1CQUFBO0VBeUhGO0FBQ0Y7O0FBdEhBO0VBRUU7SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBdUhGOztFQXBIQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQXVIRjtBQUNGOztBQXBIQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQXNIRjs7RUFuSEE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7RUFzSEY7QUFDRiIsImZpbGUiOiJzdW1tYXJ5LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29sb3JzXCI7XG5cbi8vIE1BSU5cblxuLmFsaWduLWNlbnRlci1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53LTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaC0xMDAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5nYXAtMSB7XG4gIGdhcDogMXJlbTtcbn1cblxuLmdhcC0yIHtcbiAgZ2FwOiAycmVtO1xufVxuXG4uZ2FwLTMge1xuICBnYXA6IDNyZW07XG59XG5cbi5vLWhpZGRlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wb3MtcmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uei0xIHtcbiAgei1pbmRleDogMTtcbn1cblxuLy8gUEFHRVNcblxuLnBhZ2Utd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wYWdlLWNvbnRhaW5lci1tIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLXBhZ2U7XG4gIHdpZHRoOiAxMTByZW07XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBhZGRpbmc6IDhyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcbn1cblxuLy8gTE9HT1xuXG4ubG9nby1jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOXJlbTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi8vIFRFWFRcblxuLnRpdGxlLW0ge1xuICBmb250LWZhbWlseTogJ1Byb21wdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDQuNXJlbTtcbiAgY29sb3I6ICR0ZXh0LWxpZ2h0O1xufVxuXG4vLyBSRVNQT05TSVZFXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiAxMDAxcHgpe1xuICAucGFnZS1jb250YWluZXItbSB7XG4gICAgd2lkdGg6IDkwcmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIGFuZCAobWluLXdpZHRoOiA4MDFweCl7XG4gIC5wYWdlLWNvbnRhaW5lci1tIHtcbiAgICB3aWR0aDogNzByZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSBhbmQgKG1pbi13aWR0aDogNjAxcHgpe1xuICAucGFnZS1jb250YWluZXItbSB7XG4gICAgd2lkdGg6IDUwcmVtO1xuICAgIHBhZGRpbmc6IDdyZW07XG4gIH1cblxuICAudGl0bGUtbSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIGFuZCAobWluLXdpZHRoOiA0NTFweCl7XG4gIC5wYWdlLWNvbnRhaW5lci1tIHtcbiAgICB3aWR0aDogNDByZW07XG4gICAgcGFkZGluZzogNXJlbTtcbiAgfVxuXG4gIC50aXRsZS1tIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnBhZ2UtY29udGFpbmVyLW0ge1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBwYWRkaW5nOiA0LjVyZW0gM3JlbTtcbiAgfVxuXG4gIC50aXRsZS1tIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzL21haW5cIjtcblxuLnVuaW9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIzcmVtO1xuICBoZWlnaHQ6IDIzcmVtO1xuICB0b3A6IC0xMy41cmVtO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLnNjb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC03cmVtO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzNCNjI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcbiAgd2lkdGg6IDEwcmVtO1xuICBoZWlnaHQ6IDEwcmVtO1xuICBmb250LXNpemU6IDMuNnJlbTtcbn1cblxuLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5idXR0b25zLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSBhbmQgKG1pbi13aWR0aDogNDUxcHgpIHtcblxuICAuc2NvcmUge1xuICAgIHRvcDogLTZyZW07XG4gICAgd2lkdGg6IDlyZW07XG4gICAgaGVpZ2h0OiA5cmVtO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuXG4gIC51bmlvbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAyMXJlbTtcbiAgICBoZWlnaHQ6IDIxcmVtO1xuICAgIHRvcDogLTEycmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuc2NvcmUge1xuICAgIHRvcDogLTVyZW07XG4gICAgd2lkdGg6IDhyZW07XG4gICAgaGVpZ2h0OiA4cmVtO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuXG4gIC51bmlvbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxOXJlbTtcbiAgICBoZWlnaHQ6IDE5cmVtO1xuICAgIHRvcDogLTEwLjVyZW07XG4gIH1cbn1cbiIsIi8vIFRFWFRcblxuJHRleHQtbGlnaHQ6ICNGRkZGRkY7XG5cbi8vIEJBQ0tHUk9VTkRcblxuJGJnLWFwcDogIzEyMTMxRTtcblxuJGJnLXBhZ2U6ICMxQjFEMzE7XG5cbi8vIEJPUkRFUlxuXG4kYm9yZGVyLWxpZ2h0OiAjMzczQjYyXG5cbiJdfQ== */"] });


/***/ }),

/***/ "iiaH":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DataService {
    constructor(http) {
        this.http = http;
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.data$ = this._data$;
        this._tabsAmount$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
        this.tabsAmount$ = this._tabsAmount$.asObservable();
        this._activeTab$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](1);
        this.activeTab$ = this._activeTab$.asObservable();
        this._correctAnswer$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](Math.floor(Math.random() * 4) + 1);
        this.correctAnswer$ = this._correctAnswer$.asObservable();
        this._isCorrectAnswer$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.isCorrectAnswer$ = this._isCorrectAnswer$.asObservable();
    }
    getData() {
        return this.http.get('https://levi9-song-quiz.herokuapp.com/api/data');
    }
    setData(data) {
        this._data$.next(data);
        this._tabsAmount$.next(data.length);
    }
    setCorrectAnswer() {
        let answer = Math.floor(Math.random() * 4) + 1;
        this._correctAnswer$.next(answer);
    }
    switchIsAnswer(newIsAnswer) {
        this._isCorrectAnswer$.next(newIsAnswer);
    }
    setActiveTab(id) {
        this._activeTab$.next(id);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pyyn":
/*!***********************************************************!*\
  !*** ./src/app/pages/summary-page/summary-page.module.ts ***!
  \***********************************************************/
/*! exports provided: SummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function() { return SummaryPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _summary_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary-page-routing.module */ "sKh2");
/* harmony import */ var _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/button/button.module */ "ySkq");
/* harmony import */ var _shared_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/logo/logo.module */ "K0mZ");
/* harmony import */ var _summary_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./summary-page.component */ "Kq+w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SummaryPageModule {
}
SummaryPageModule.ɵfac = function SummaryPageModule_Factory(t) { return new (t || SummaryPageModule)(); };
SummaryPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SummaryPageModule });
SummaryPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _summary_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["SummaryPageRoutingModule"],
            _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_2__["ButtonModule"],
            _shared_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_3__["LogoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SummaryPageModule, { declarations: [_summary_page_component__WEBPACK_IMPORTED_MODULE_4__["SummaryPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _summary_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["SummaryPageRoutingModule"],
        _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_2__["ButtonModule"],
        _shared_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_3__["LogoModule"]], exports: [_summary_page_component__WEBPACK_IMPORTED_MODULE_4__["SummaryPageComponent"]] }); })();


/***/ }),

/***/ "sKh2":
/*!*******************************************************************!*\
  !*** ./src/app/pages/summary-page/summary-page-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SummaryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageRoutingModule", function() { return SummaryPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _summary_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary-page.component */ "Kq+w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _summary_page_component__WEBPACK_IMPORTED_MODULE_1__["SummaryPageComponent"]
    }
];
class SummaryPageRoutingModule {
}
SummaryPageRoutingModule.ɵfac = function SummaryPageRoutingModule_Factory(t) { return new (t || SummaryPageRoutingModule)(); };
SummaryPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SummaryPageRoutingModule });
SummaryPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SummaryPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-summary-page-summary-page-module.js.map