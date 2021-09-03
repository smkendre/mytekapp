(self["webpackChunkmytek_mobile_app"] = self["webpackChunkmytek_mobile_app"] || []).push([["src_app_tenders_my-tenders_my-tenders_module_ts"],{

/***/ 1651:
/*!*****************************************************************!*\
  !*** ./src/app/tenders/my-tenders/my-tenders-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyTendersPageRoutingModule": () => (/* binding */ MyTendersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _my_tenders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-tenders.page */ 8618);




const routes = [
    {
        path: '',
        component: _my_tenders_page__WEBPACK_IMPORTED_MODULE_0__.MyTendersPage
    }
];
let MyTendersPageRoutingModule = class MyTendersPageRoutingModule {
};
MyTendersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyTendersPageRoutingModule);



/***/ }),

/***/ 2892:
/*!*********************************************************!*\
  !*** ./src/app/tenders/my-tenders/my-tenders.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyTendersPageModule": () => (/* binding */ MyTendersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _my_tenders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-tenders-routing.module */ 1651);
/* harmony import */ var _my_tenders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-tenders.page */ 8618);
/* harmony import */ var src_app_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/header/header.component */ 9470);
/* harmony import */ var src_app_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/footer/footer.component */ 5227);









let MyTendersPageModule = class MyTendersPageModule {
};
MyTendersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _my_tenders_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyTendersPageRoutingModule
        ],
        declarations: [_my_tenders_page__WEBPACK_IMPORTED_MODULE_1__.MyTendersPage, src_app_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, src_app_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent]
    })
], MyTendersPageModule);



/***/ }),

/***/ 8618:
/*!*******************************************************!*\
  !*** ./src/app/tenders/my-tenders/my-tenders.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyTendersPage": () => (/* binding */ MyTendersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_my_tenders_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-tenders.page.html */ 9314);
/* harmony import */ var _my_tenders_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-tenders.page.scss */ 1999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_tenders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tenders.service */ 1287);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ 1188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _config_auth_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/auth-constant */ 644);








let MyTendersPage = class MyTendersPage {
    constructor(tenderService, router, storageService) {
        this.tenderService = tenderService;
        this.router = router;
        this.storageService = storageService;
        this.Tenders = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.storageService.get(_config_auth_constant__WEBPACK_IMPORTED_MODULE_4__.AuthConstants.AUTH).then(res => {
            if (res) {
                if (res.status == 2) {
                    this.router.navigate(['registration']);
                }
                this.accessToken = res.token;
                this.userId = res.id;
                this.tenderService.getMyTenders(this.userId, this.accessToken).subscribe((response) => {
                    this.isLoading = false;
                    if (response.status == 'success')
                        this.Tenders = response.data;
                });
            }
            else {
                this.router.navigate(['auth']);
            }
        });
    }
};
MyTendersPage.ctorParameters = () => [
    { type: _services_tenders_service__WEBPACK_IMPORTED_MODULE_2__.TendersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
MyTendersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-my-tenders',
        template: _raw_loader_my_tenders_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_tenders_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyTendersPage);



/***/ }),

/***/ 1999:
/*!*********************************************************!*\
  !*** ./src/app/tenders/my-tenders/my-tenders.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  margin: 0;\n  border-radius: 0;\n}\n\n.btn-grad {\n  --background: linear-gradient(to right, #eae8ea 0%, rgb(255, 255, 255) 100%);\n  margin: 0 20px;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  margin-bottom: 15px;\n}\n\n.btn-grad h2 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #313469;\n}\n\n.btn-grad > ion-icon {\n  background: #d0d1d4;\n  padding: 10px;\n  border-radius: 50%;\n}\n\nion-content, ion-list {\n  --background: #eef1f4;\n  background: #eef1f4;\n}\n\n.footer-link {\n  --background: linear-gradient(87deg, #5967ff 0, #5a99fe 100%) !important;\n}\n\n.ion-color-danger {\n  background: linear-gradient(87deg, #f5365c 0, #f56036 100%) !important;\n}\n\n.transparent-card {\n  background: transparent;\n  box-shadow: none;\n  padding: 15px 10px;\n}\n\n.transparent-card h1 {\n  font-size: 24px;\n  font-weight: 600;\n  color: #313469;\n}\n\n.icon {\n  display: inline-block;\n  font-size: 35px;\n  color: #ffC977;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.filter_options {\n  font-size: 14px;\n  color: #000000;\n}\n\n.filter_options ion-icon {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXRlbmRlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSw0RUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlIQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSx3RUFBQTtBQUVGOztBQUFBO0VBQ0Usc0VBQUE7QUFHRjs7QUFEQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBQUM7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBR0g7O0FBREE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0Usc0JBQUE7QUFLRiIsImZpbGUiOiJteS10ZW5kZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNhcmR7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmJ0bi1ncmFkIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlYWU4ZWEgMCUsIHJnYigyNTUsIDI1NSwgMjU1KSAxMDAlKTtcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDNweCAxcHggLTJweCwgcmdiKDAgMCAwIC8gMTQlKSAwcHggMnB4IDJweCAwcHgsIHJnYigwIDAgMCAvIDEyJSkgMHB4IDFweCA1cHggMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmJ0bi1ncmFkIGgye1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzEzNDY5O1xufVxuXG4uYnRuLWdyYWQgPiBpb24taWNvbntcbiAgYmFja2dyb3VuZDogI2QwZDFkNDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuaW9uLWNvbnRlbnQsIGlvbi1saXN0e1xuICAtLWJhY2tncm91bmQ6ICNlZWYxZjQ7XG4gIGJhY2tncm91bmQ6ICNlZWYxZjQ7XG59XG5cbi5mb290ZXItbGlua3tcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODdkZWcsICM1OTY3ZmYgMCwgIzVhOTlmZSAxMDAlKSAhaW1wb3J0YW50O1xufVxuLmlvbi1jb2xvci1kYW5nZXJ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4N2RlZywgI2Y1MzY1YyAwLCAjZjU2MDM2IDEwMCUpICFpbXBvcnRhbnQ7XG59XG4udHJhbnNwYXJlbnQtY2FyZHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbn1cblxuLnRyYW5zcGFyZW50LWNhcmQgaDF7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMTM0Njk7XG5cbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICNmZkM5Nzc7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gfVxuXG4gLnRleHR7XG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuIH1cbi5maWx0ZXJfb3B0aW9uc3tcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5maWx0ZXJfb3B0aW9ucyBpb24taWNvbntcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 9314:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tenders/my-tenders/my-tenders.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n<ion-content >\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"ion-text-center\"  *ngIf=\"isLoading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n\n      </div>\n      <div class=\"ion-text-center\" *ngIf=\"!isLoading &&  Tenders.length <= 0\">\n\n      <p > No Tenders Found !</p>\n      </div>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-grid class=\"ion-no-padding\"  *ngIf=\"!isLoading && Tenders.length > 0\">\n\n    <ion-card class=\"transparent-card\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\" size-sm=\"6\">\n\n\n            <h1>My Tenders</h1>\n\n\n      </ion-col>\n\n      </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card class=\"btn-grad\"  *ngFor=\"let tender of Tenders\" >\n\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\" size-sm=\"6\" >\n                <h2>{{tender.name}}</h2>\n\n          </ion-col>\n\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <h3><strong>Category: </strong>{{tender.category}}</h3>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" size-sm=\"6\" >\n                <h4><strong>Location: </strong></h4>\n                <ion-list *ngFor=\"let loc of tender.location \" >\n                  <ion-item>\n                    <strong>State: </strong>{{loc.state}}\n\n                  </ion-item>\n                  <ion-item>\n                    <strong>Districts: </strong>{{loc.districts}}\n                  </ion-item>\n                  <ion-item>\n                  <strong>Talukas: </strong>{{loc.talukas}}\n                  </ion-item>\n                </ion-list>\n\n          </ion-col>\n\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <ion-button color=\"primary\" [routerLink]=\"['/', 'milestones', tender.id]\" >Milestones</ion-button>\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n    </ion-card>\n  </ion-grid>\n</ion-content>\n<app-footer></app-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tenders_my-tenders_my-tenders_module_ts.js.map