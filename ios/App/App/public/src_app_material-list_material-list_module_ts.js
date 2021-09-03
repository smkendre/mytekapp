(self["webpackChunkmytek_mobile_app"] = self["webpackChunkmytek_mobile_app"] || []).push([["src_app_material-list_material-list_module_ts"],{

/***/ 2760:
/*!***************************************************************!*\
  !*** ./src/app/material-list/material-list-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialListPageRoutingModule": () => (/* binding */ MaterialListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _material_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material-list.page */ 55);




const routes = [
    {
        path: '',
        component: _material_list_page__WEBPACK_IMPORTED_MODULE_0__.MaterialListPage
    }
];
let MaterialListPageRoutingModule = class MaterialListPageRoutingModule {
};
MaterialListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MaterialListPageRoutingModule);



/***/ }),

/***/ 3259:
/*!*******************************************************!*\
  !*** ./src/app/material-list/material-list.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialListPageModule": () => (/* binding */ MaterialListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _material_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material-list-routing.module */ 2760);
/* harmony import */ var _material_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material-list.page */ 55);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/footer/footer.component */ 5227);









let MaterialListPageModule = class MaterialListPageModule {
};
MaterialListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _material_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaterialListPageRoutingModule
        ],
        declarations: [_material_list_page__WEBPACK_IMPORTED_MODULE_1__.MaterialListPage, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent]
    })
], MaterialListPageModule);



/***/ }),

/***/ 55:
/*!*****************************************************!*\
  !*** ./src/app/material-list/material-list.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialListPage": () => (/* binding */ MaterialListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_material_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./material-list.page.html */ 6784);
/* harmony import */ var _material_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material-list.page.scss */ 7919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/auth-constant */ 644);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);
/* harmony import */ var src_app_services_tenders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tenders.service */ 1287);








let MaterialListPage = class MaterialListPage {
    constructor(router, tenderService, storageService) {
        this.router = router;
        this.tenderService = tenderService;
        this.storageService = storageService;
        this.Requests = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.storageService.get(src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_2__.AuthConstants.AUTH).then(res => {
            // console.log(res.name);
            if (res) {
                this.accessToken = res.token;
                this.userId = res.id;
                this.tenderService.getMaterialRequests(this.userId, this.accessToken).subscribe((response) => {
                    this.isLoading = false;
                    if (response.status == 'success')
                        this.Requests = response.data;
                });
            }
            else {
                this.router.navigate(['auth']);
            }
        });
    }
};
MaterialListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_tenders_service__WEBPACK_IMPORTED_MODULE_4__.TendersService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
MaterialListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-material-list',
        template: _raw_loader_material_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_material_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MaterialListPage);



/***/ }),

/***/ 7919:
/*!*******************************************************!*\
  !*** ./src/app/material-list/material-list.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  margin: 0;\n  border-radius: 0;\n}\n\n.drawer-menu {\n  --background: transparent;\n  --box-shadow: none;\n  --color: #000000;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.btn-grad {\n  --background: linear-gradient(to right, #eae8ea 0%, rgb(255, 255, 255) 100%);\n  margin: 0 20px;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  margin-bottom: 15px;\n}\n\n.btn-grad h2 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #313469;\n}\n\n.btn-grad > ion-icon {\n  background: #d0d1d4;\n  padding: 10px;\n  border-radius: 50%;\n}\n\nion-content, ion-list {\n  --background: #eef1f4;\n  background: #eef1f4;\n}\n\n.footer-link {\n  --background: linear-gradient(87deg, #5967ff 0, #5a99fe 100%) !important;\n}\n\n.ion-color-danger {\n  background: linear-gradient(87deg, #f5365c 0, #f56036 100%) !important;\n}\n\n.transparent-card {\n  background: transparent;\n  box-shadow: none;\n  padding: 15px 10px;\n}\n\n.transparent-card h1 {\n  font-size: 24px;\n  font-weight: 600;\n  color: #313469;\n}\n\n.icon {\n  display: inline-block;\n  font-size: 35px;\n  color: #ffC977;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.filter_options {\n  font-size: 14px;\n  color: #000000;\n}\n\n.filter_options ion-icon {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFsLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFFRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBR0E7RUFDRSw0RUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlIQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSx3RUFBQTtBQUVGOztBQUFBO0VBQ0Usc0VBQUE7QUFHRjs7QUFEQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBQUM7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBR0g7O0FBREE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0Usc0JBQUE7QUFLRiIsImZpbGUiOiJtYXRlcmlhbC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNhcmR7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmRyYXdlci1tZW51e1xuICAvLyAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNvbG9yOiAjMDAwMDAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG59XG4uYnRuLWdyYWQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VhZThlYSAwJSwgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCUpO1xuICBtYXJnaW46IDAgMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggM3B4IDFweCAtMnB4LCByZ2IoMCAwIDAgLyAxNCUpIDBweCAycHggMnB4IDBweCwgcmdiKDAgMCAwIC8gMTIlKSAwcHggMXB4IDVweCAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uYnRuLWdyYWQgaDJ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMTM0Njk7XG59XG5cbi5idG4tZ3JhZCA+IGlvbi1pY29ue1xuICBiYWNrZ3JvdW5kOiAjZDBkMWQ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pb24tY29udGVudCwgaW9uLWxpc3R7XG4gIC0tYmFja2dyb3VuZDogI2VlZjFmNDtcbiAgYmFja2dyb3VuZDogI2VlZjFmNDtcbn1cblxuLmZvb3Rlci1saW5re1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4N2RlZywgIzU5NjdmZiAwLCAjNWE5OWZlIDEwMCUpICFpbXBvcnRhbnQ7XG59XG4uaW9uLWNvbG9yLWRhbmdlcntcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDg3ZGVnLCAjZjUzNjVjIDAsICNmNTYwMzYgMTAwJSkgIWltcG9ydGFudDtcbn1cbi50cmFuc3BhcmVudC1jYXJke1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xufVxuXG4udHJhbnNwYXJlbnQtY2FyZCBoMXtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMxMzQ2OTtcblxufVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogI2ZmQzk3NztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiB9XG5cbiAudGV4dHtcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gfVxuLmZpbHRlcl9vcHRpb25ze1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmZpbHRlcl9vcHRpb25zIGlvbi1pY29ue1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuIl19 */");

/***/ }),

/***/ 6784:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/material-list/material-list.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n<ion-content >\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"ion-text-center\"  *ngIf=\"isLoading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n\n      </div>\n      <div class=\"ion-text-center\" *ngIf=\"!isLoading && Requests.length <= 0\">\n\n      <p > No Material Requests Found !</p>\n      </div>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-grid class=\"ion-no-padding\"  *ngIf=\"!isLoading && Requests.length > 0\">\n\n    <ion-card class=\"transparent-card\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"12\" size-sm=\"12\">\n\n\n            <h1> Material Requests</h1>\n\n            <ion-fab vertical=\"bottom\" horizontal=\"end\">\n              <ion-fab-button\n                color=\"success\"\n                size=\"small\"\n                [routerLink]=\"['/', 'material-request']\"\n              >\n                <ion-icon name=\"add\"></ion-icon>\n              </ion-fab-button>\n            </ion-fab>\n\n      </ion-col>\n      <!-- <ion-col size=\"6\" size-sm=\"6\">\n\n     <span class=\"filter_options\">Location <ion-icon name=\"chevron-down-circle-outline\" color=\"primary\"></ion-icon></span>\n        &nbsp;&nbsp;\n    <span class=\"filter_options\">Category <ion-icon name=\"chevron-down-circle-outline\" color=\"primary\"></ion-icon></span>\n  </ion-col> -->\n      </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card class=\"btn-grad\"  *ngFor=\"let row of Requests\" >\n\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\" size-sm=\"6\" >\n                <h2>{{row.material}}</h2>\n\n          </ion-col>\n\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <h3><strong>Tender: </strong>{{row.tender}}</h3>\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"6\" size-sm=\"6\" >\n                <h4><strong>Quanrity: </strong>{{row.quantity}}</h4>\n\n          </ion-col>\n\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <h4><strong>Status: </strong>{{row.status}}</h4>\n\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-grid>\n</ion-content>\n<app-footer></app-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_material-list_material-list_module_ts.js.map