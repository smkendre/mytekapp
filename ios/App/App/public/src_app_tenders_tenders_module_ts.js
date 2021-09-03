(self["webpackChunkmytek_mobile_app"] = self["webpackChunkmytek_mobile_app"] || []).push([["src_app_tenders_tenders_module_ts"],{

/***/ 1697:
/*!***************************************************!*\
  !*** ./src/app/tenders/tenders-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TendersPageRoutingModule": () => (/* binding */ TendersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tenders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tenders.page */ 3439);




const routes = [
    {
        path: '',
        component: _tenders_page__WEBPACK_IMPORTED_MODULE_0__.TendersPage,
    },
    {
        path: 'milestones',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./milestones/milestones.module */ 5922)).then(m => m.MilestonesPageModule)
    },
    {
        path: 'details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./details/details.module */ 5811)).then(m => m.DetailsPageModule)
    }
];
let TendersPageRoutingModule = class TendersPageRoutingModule {
};
TendersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TendersPageRoutingModule);



/***/ }),

/***/ 8647:
/*!*******************************************!*\
  !*** ./src/app/tenders/tenders.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TendersPageModule": () => (/* binding */ TendersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tenders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tenders-routing.module */ 1697);
/* harmony import */ var _tenders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenders.page */ 3439);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/footer/footer.component */ 5227);










let TendersPageModule = class TendersPageModule {
};
TendersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _tenders_routing_module__WEBPACK_IMPORTED_MODULE_0__.TendersPageRoutingModule
        ],
        declarations: [_tenders_page__WEBPACK_IMPORTED_MODULE_1__.TendersPage, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent]
    })
], TendersPageModule);



/***/ }),

/***/ 3439:
/*!*****************************************!*\
  !*** ./src/app/tenders/tenders.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TendersPage": () => (/* binding */ TendersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tenders_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tenders.page.html */ 5423);
/* harmony import */ var _tenders_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenders.page.scss */ 4912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _config_auth_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/auth-constant */ 644);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 1188);
/* harmony import */ var _services_tenders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/tenders.service */ 1287);









// import {subscribe} from 'rxjs/operators';
let TendersPage = class TendersPage {
    constructor(tenderService, router, storageService, alertCtrl) {
        this.tenderService = tenderService;
        this.router = router;
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.Tenders = [];
    }
    ngOnInit() {
        this.isLoading = true;
        this.storageService.get(_config_auth_constant__WEBPACK_IMPORTED_MODULE_2__.AuthConstants.AUTH).then(res => {
            //console.log(res);
            if (res) {
                if (res.status == 2) {
                    this.router.navigate(['registration']);
                }
                this.accessToken = res.token;
                this.userId = res.id;
                this.userStatus = res.status;
                this.tenderService.fetchTenders(this.accessToken).subscribe((response) => {
                    this.isLoading = false;
                    //console.log("My res:",response);
                    //alert(JSON.stringify(response));
                    if (response.status == 'success')
                        this.Tenders = response.data;
                    this.isLoading = false;
                });
            }
            else {
                this.router.navigate(['auth']);
            }
        });
    }
    submitRequest(id) {
        this.isLoading = true;
        this.tenderService.submitRequest(id, this.userId, this.accessToken).subscribe(res => {
            this.isLoading = false;
            if (res.status == 'success') {
                this.router.navigateByUrl('/thankyou');
            }
            else {
                this.showAlert(res.message);
            }
        });
    }
    showAlert(message) {
        this.alertCtrl
            .create({
            header: 'Authentication failed',
            message: message,
            buttons: ['Okay']
        })
            .then(alertEl => alertEl.present());
    }
};
TendersPage.ctorParameters = () => [
    { type: _services_tenders_service__WEBPACK_IMPORTED_MODULE_4__.TendersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
TendersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tenders',
        template: _raw_loader_tenders_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tenders_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TendersPage);



/***/ }),

/***/ 4912:
/*!*******************************************!*\
  !*** ./src/app/tenders/tenders.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  margin: 0;\n  border-radius: 0;\n}\n\n.drawer-menu {\n  --background: transparent;\n  --box-shadow: none;\n  --color: #000000;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.btn-grad {\n  --background: linear-gradient(to right, #eae8ea 0%, rgb(255, 255, 255) 100%);\n  margin: 0 20px;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  margin-bottom: 15px;\n}\n\n.btn-grad h2 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #313469;\n}\n\n.btn-grad > ion-icon {\n  background: #d0d1d4;\n  padding: 10px;\n  border-radius: 50%;\n}\n\nion-content, ion-list {\n  --background: #eef1f4;\n  background: #eef1f4;\n}\n\n.footer-link {\n  --background: linear-gradient(87deg, #5967ff 0, #5a99fe 100%) !important;\n}\n\n.ion-color-danger {\n  background: linear-gradient(87deg, #f5365c 0, #f56036 100%) !important;\n}\n\n.transparent-card {\n  background: transparent;\n  box-shadow: none;\n  padding: 15px 10px;\n}\n\n.transparent-card h1 {\n  font-size: 24px;\n  font-weight: 600;\n  color: #313469;\n}\n\n.icon {\n  display: inline-block;\n  font-size: 35px;\n  color: #ffC977;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.filter_options {\n  font-size: 14px;\n  color: #000000;\n}\n\n.filter_options ion-icon {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbmRlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFFRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBR0E7RUFDRSw0RUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlIQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSx3RUFBQTtBQUVGOztBQUFBO0VBQ0Usc0VBQUE7QUFHRjs7QUFEQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBQUM7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBR0g7O0FBREE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0Usc0JBQUE7QUFLRiIsImZpbGUiOiJ0ZW5kZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNhcmR7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmRyYXdlci1tZW51e1xuICAvLyAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNvbG9yOiAjMDAwMDAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG59XG4uYnRuLWdyYWQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VhZThlYSAwJSwgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCUpO1xuICBtYXJnaW46IDAgMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggM3B4IDFweCAtMnB4LCByZ2IoMCAwIDAgLyAxNCUpIDBweCAycHggMnB4IDBweCwgcmdiKDAgMCAwIC8gMTIlKSAwcHggMXB4IDVweCAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uYnRuLWdyYWQgaDJ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMTM0Njk7XG59XG5cbi5idG4tZ3JhZCA+IGlvbi1pY29ue1xuICBiYWNrZ3JvdW5kOiAjZDBkMWQ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pb24tY29udGVudCwgaW9uLWxpc3R7XG4gIC0tYmFja2dyb3VuZDogI2VlZjFmNDtcbiAgYmFja2dyb3VuZDogI2VlZjFmNDtcbn1cblxuLmZvb3Rlci1saW5re1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4N2RlZywgIzU5NjdmZiAwLCAjNWE5OWZlIDEwMCUpICFpbXBvcnRhbnQ7XG59XG4uaW9uLWNvbG9yLWRhbmdlcntcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDg3ZGVnLCAjZjUzNjVjIDAsICNmNTYwMzYgMTAwJSkgIWltcG9ydGFudDtcbn1cbi50cmFuc3BhcmVudC1jYXJke1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xufVxuXG4udHJhbnNwYXJlbnQtY2FyZCBoMXtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMxMzQ2OTtcblxufVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogI2ZmQzk3NztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiB9XG5cbiAudGV4dHtcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gfVxuLmZpbHRlcl9vcHRpb25ze1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmZpbHRlcl9vcHRpb25zIGlvbi1pY29ue1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuIl19 */");

/***/ }),

/***/ 5423:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tenders/tenders.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n<ion-content >\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"ion-text-center\"  *ngIf=\"isLoading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n\n      </div>\n      <div class=\"ion-text-center\" *ngIf=\"!isLoading && Tenders.length <= 0\">\n\n      <p > No Tenders Found !</p>\n      </div>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-grid class=\"ion-no-padding\"  *ngIf=\"!isLoading && Tenders.length > 0\">\n\n    <ion-card class=\"transparent-card\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\" size-sm=\"6\">\n\n\n            <h1> Tenders</h1>\n\n\n      </ion-col>\n      <!-- <ion-col size=\"6\" size-sm=\"6\">\n\n     <span class=\"filter_options\">Location <ion-icon name=\"chevron-down-circle-outline\" color=\"primary\"></ion-icon></span>\n        &nbsp;&nbsp;\n    <span class=\"filter_options\">Category <ion-icon name=\"chevron-down-circle-outline\" color=\"primary\"></ion-icon></span>\n  </ion-col> -->\n      </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card class=\"btn-grad\"  *ngFor=\"let tender of Tenders\" >\n\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"12\" size-sm=\"12\" >\n                <h2>{{tender.name}}</h2>\n\n          </ion-col>\n\n          <ion-col size=\"12\" >\n            <h3><strong>Category: </strong>{{tender.category}}</h3>\n\n          </ion-col>\n          <ion-button color=\"primary\" [routerLink]=\"['/', 'tender-details', tender.id]\" >View Details</ion-button>\n\n        </ion-row>\n\n        <!-- <ion-row>\n          <ion-col size=\"12\" size-sm=\"12\" >\n                <h4><strong>Locations: </strong></h4>\n              <ion-list *ngFor=\"let loc of tender.location \" >\n                <ion-item>\n                  <strong>State: </strong>{{loc.state}}\n\n                </ion-item>\n                <ion-item>\n                  <strong>Districts: </strong>{{loc.districts}}\n                </ion-item>\n                <ion-item>\n                <strong>Talukas: </strong>{{loc.talukas}}\n                </ion-item>\n              </ion-list>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"ion-text-center\">\n            <ion-button color=\"primary\" (click)=\"submitRequest(tender.id)\" *ngIf=\" tender.request_status == null\" >Submit Request</ion-button>\n          </ion-col>\n        </ion-row> -->\n      </ion-card-content>\n    </ion-card>\n<!--\n    <ion-card class=\"btn-grad\">\n\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\" size-sm=\"6\" >\n\n\n                <h2>Tender Name</h2>\n                <h2>Category</h2>\n                <h2>Location</h2>\n\n          </ion-col>\n\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <ion-button color=\"primary\">Submit Request</ion-button>\n          </ion-col>\n        </ion-row>\n\n\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"btn-grad\">\n\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\" size-sm=\"6\" >\n\n\n                <h2>Tender Name</h2>\n                <h2>Category</h2>\n                <h2>Location</h2>\n\n          </ion-col>\n\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <ion-button color=\"primary\">Submit Request</ion-button>\n          </ion-col>\n        </ion-row>\n\n\n      </ion-card-content>\n    </ion-card> -->\n  </ion-grid>\n</ion-content>\n<app-footer></app-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tenders_tenders_module_ts.js.map