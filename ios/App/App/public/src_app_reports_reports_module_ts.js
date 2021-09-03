(self["webpackChunkmytek_mobile_app"] = self["webpackChunkmytek_mobile_app"] || []).push([["src_app_reports_reports_module_ts"],{

/***/ 9021:
/*!***************************************************!*\
  !*** ./src/app/reports/reports-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsPageRoutingModule": () => (/* binding */ ReportsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.page */ 8327);




const routes = [
    {
        path: '',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_0__.ReportsPage
    }
];
let ReportsPageRoutingModule = class ReportsPageRoutingModule {
};
ReportsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReportsPageRoutingModule);



/***/ }),

/***/ 3065:
/*!*******************************************!*\
  !*** ./src/app/reports/reports.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsPageModule": () => (/* binding */ ReportsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports-routing.module */ 9021);
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.page */ 8327);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/footer/footer.component */ 5227);









let ReportsPageModule = class ReportsPageModule {
};
ReportsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportsPageRoutingModule
        ],
        declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_1__.ReportsPage, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent]
    })
], ReportsPageModule);



/***/ }),

/***/ 8327:
/*!*****************************************!*\
  !*** ./src/app/reports/reports.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsPage": () => (/* binding */ ReportsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_reports_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reports.page.html */ 8610);
/* harmony import */ var _reports_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.page.scss */ 1344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);
/* harmony import */ var src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/auth-constant */ 644);
/* harmony import */ var _services_tenders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/tenders.service */ 1287);








let ReportsPage = class ReportsPage {
    constructor(router, tenderService, storageService) {
        this.router = router;
        this.tenderService = tenderService;
        this.storageService = storageService;
        this.Report = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.storageService.get(src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_3__.AuthConstants.AUTH).then(res => {
            if (res) {
                this.accessToken = res.token;
                this.userId = res.id;
                this.tenderService.getMyreports(this.userId, this.accessToken).subscribe((response) => {
                    this.isLoading = false;
                    if (response.status === 'success') {
                        this.Report = response.data;
                    }
                });
            }
            else {
                this.router.navigate(['auth']);
            }
        });
    }
};
ReportsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_tenders_service__WEBPACK_IMPORTED_MODULE_4__.TendersService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService }
];
ReportsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-reports',
        template: _raw_loader_reports_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reports_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReportsPage);



/***/ }),

/***/ 1344:
/*!*******************************************!*\
  !*** ./src/app/reports/reports.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  margin: 0;\n  border-radius: 0;\n}\n\n.btn-grad {\n  --background: linear-gradient(to right, #eae8ea 0%, rgb(255, 255, 255) 100%);\n  margin: 0 20px;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  margin-bottom: 15px;\n}\n\n.btn-grad h2 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #313469;\n}\n\n.btn-grad > ion-icon {\n  background: #d0d1d4;\n  padding: 10px;\n  border-radius: 50%;\n}\n\nion-content, ion-list {\n  --background: #eef1f4;\n  background: #eef1f4;\n}\n\n.footer-link {\n  --background: linear-gradient(87deg, #5967ff 0, #5a99fe 100%) !important;\n}\n\n.ion-color-danger {\n  background: linear-gradient(87deg, #f5365c 0, #f56036 100%) !important;\n}\n\n.transparent-card {\n  background: transparent;\n  box-shadow: none;\n}\n\n.transparent-card h1 {\n  font-size: 24px;\n  font-weight: 600;\n  color: #313469;\n}\n\n.icon {\n  display: inline-block;\n  font-size: 35px;\n  color: #ffC977;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.filter_options {\n  font-size: 14px;\n  color: #000000;\n}\n\n.filter_options ion-icon {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSw0RUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlIQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSx3RUFBQTtBQUVGOztBQUFBO0VBQ0Usc0VBQUE7QUFHRjs7QUFEQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUNDO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQUVIOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFHRjs7QUFEQTtFQUNFLHNCQUFBO0FBSUYiLCJmaWxlIjoicmVwb3J0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jYXJke1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5idG4tZ3JhZCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWFlOGVhIDAlLCByZ2IoMjU1LCAyNTUsIDI1NSkgMTAwJSk7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyMCUpIDBweCAzcHggMXB4IC0ycHgsIHJnYigwIDAgMCAvIDE0JSkgMHB4IDJweCAycHggMHB4LCByZ2IoMCAwIDAgLyAxMiUpIDBweCAxcHggNXB4IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5idG4tZ3JhZCBoMntcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMxMzQ2OTtcbn1cblxuLmJ0bi1ncmFkID4gaW9uLWljb257XG4gIGJhY2tncm91bmQ6ICNkMGQxZDQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmlvbi1jb250ZW50LCBpb24tbGlzdHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWVmMWY0O1xuICBiYWNrZ3JvdW5kOiAjZWVmMWY0O1xufVxuXG4uZm9vdGVyLWxpbmt7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDg3ZGVnLCAjNTk2N2ZmIDAsICM1YTk5ZmUgMTAwJSkgIWltcG9ydGFudDtcbn1cbi5pb24tY29sb3ItZGFuZ2Vye1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODdkZWcsICNmNTM2NWMgMCwgI2Y1NjAzNiAxMDAlKSAhaW1wb3J0YW50O1xufVxuLnRyYW5zcGFyZW50LWNhcmR7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICAvLyBwYWRkaW5nOiAxNXB4IDEwcHg7XG59XG5cbi50cmFuc3BhcmVudC1jYXJkIGgxe1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzEzNDY5O1xuXG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjZmZDOTc3O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuIH1cblxuIC50ZXh0e1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiB9XG4uZmlsdGVyX29wdGlvbnN7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uZmlsdGVyX29wdGlvbnMgaW9uLWljb257XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4iXX0= */");

/***/ }),

/***/ 8610:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n<ion-content>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"ion-text-center\" *ngIf=\"isLoading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n\n      </div>\n      <div class=\"ion-text-center\" *ngIf=\"!isLoading && Report.length <= 0\">\n\n        <p> No Reports Found !</p>\n      </div>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"!isLoading && Report.length > 0\">\n\n    <div *ngFor=\"let row of Report\">\n      <ion-card class=\"transparent-card\">\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"10\" size-sm=\"10\">\n\n\n              <h1 class=\"ion-text-left\"> Report for - {{row.name}}</h1>\n\n            </ion-col>\n            <ion-col size=\"2\" size-sm=\"2\">\n\n\n              <ion-button color=\"success\" class=\"ion-text-right\" [routerLink]=\"['/', 'submit-report', row.id]\"   >Add\n              </ion-button>\n\n            </ion-col>\n\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n\n      <div *ngIf=\" row.report.length > 0\">\n        <ion-card class=\"btn-grad\" *ngFor=\"let report of row.report\">\n\n          <ion-card-content>\n            <ion-row>\n              <ion-col size=\"12\" size-sm=\"12\">\n                <h2>{{report.created_at}}</h2>\n\n              </ion-col>\n\n\n              <ion-col size=\"12\" size-sm=\"12\" *ngFor=\"let field of report.data \">\n\n                <h3><strong>{{field.key}}: </strong>{{field.value}}</h3>\n\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"12\">\n                <h3> <strong> Comment: </strong>{{report.comment}}</h3>\n\n              </ion-col>\n              <!-- <ion-col size=\"12\">\n              <h3><strong>Field 1: </strong>{{row.field1}}</h3>\n\n            </ion-col>\n            <ion-col size=\"12\">\n              <h3><strong>Field 12: </strong>{{row.field2}}</h3>\n\n            </ion-col>\n            <ion-col size=\"12\">\n              <h3><strong>Field 13: </strong>{{row.field3}}</h3>\n\n            </ion-col>\n            <ion-col size=\"12\">\n              <h3><strong>Field 14: </strong>{{row.field4}}</h3>\n\n            </ion-col> -->\n            </ion-row>\n\n\n          </ion-card-content>\n        </ion-card>\n      </div>\n      <ion-label *ngIf=\" row.report.length <= 0\">\n        <ion-card class=\"transparent-card\">\n          <ion-card-content>\n            <ion-row>\n              <ion-col size=\"12\" size-sm=\"12\">\n\n\n                <h3> No reports submitted yet</h3>\n\n\n              </ion-col>\n\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-label>\n    </div>\n\n  </ion-grid>\n</ion-content>\n<app-footer></app-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_reports_reports_module_ts.js.map