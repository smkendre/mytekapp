(self["webpackChunkmytek_mobile_app"] = self["webpackChunkmytek_mobile_app"] || []).push([["src_app_material-request_material-request_module_ts"],{

/***/ 9805:
/*!*********************************************************************!*\
  !*** ./src/app/material-request/material-request-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialRequestPageRoutingModule": () => (/* binding */ MaterialRequestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _material_request_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material-request.page */ 9869);




const routes = [
    {
        path: '',
        component: _material_request_page__WEBPACK_IMPORTED_MODULE_0__.MaterialRequestPage
    }
];
let MaterialRequestPageRoutingModule = class MaterialRequestPageRoutingModule {
};
MaterialRequestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MaterialRequestPageRoutingModule);



/***/ }),

/***/ 8041:
/*!*************************************************************!*\
  !*** ./src/app/material-request/material-request.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialRequestPageModule": () => (/* binding */ MaterialRequestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _material_request_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material-request-routing.module */ 9805);
/* harmony import */ var _material_request_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material-request.page */ 9869);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/footer/footer.component */ 5227);









let MaterialRequestPageModule = class MaterialRequestPageModule {
};
MaterialRequestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _material_request_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaterialRequestPageRoutingModule
        ],
        declarations: [_material_request_page__WEBPACK_IMPORTED_MODULE_1__.MaterialRequestPage, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent]
    })
], MaterialRequestPageModule);



/***/ }),

/***/ 9869:
/*!***********************************************************!*\
  !*** ./src/app/material-request/material-request.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialRequestPage": () => (/* binding */ MaterialRequestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_material_request_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./material-request.page.html */ 1204);
/* harmony import */ var _material_request_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material-request.page.scss */ 2662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _config_auth_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/auth-constant */ 644);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 1188);
/* harmony import */ var _services_tenders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/tenders.service */ 1287);










let MaterialRequestPage = class MaterialRequestPage {
    constructor(router, formBuilder, storageService, tenderService, alertCtrl) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.tenderService = tenderService;
        this.alertCtrl = alertCtrl;
        this.isLoading = false;
        this.fieldCount = 1;
        this.myForm = formBuilder.group({
            'tender': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'material': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'qnt': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.storageService.get(_config_auth_constant__WEBPACK_IMPORTED_MODULE_2__.AuthConstants.AUTH).then(res => {
            // console.log(res.name);
            if (res.status == 2) {
                this.router.navigate(['registration']);
            }
            if (res) {
                this.accessToken = res.token;
                this.userId = res.id;
                this.tenderService.getMyTenders(this.userId, this.accessToken).subscribe((response) => {
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
    ionViewWillEnter() {
    }
    addControl() {
        this.fieldCount++;
        this.myForm.addControl('player' + this.fieldCount, new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required));
    }
    onChangeTender(tender_id) {
        this.tenderService.getMaterialList(tender_id, this.accessToken).subscribe(response => {
            if (response.status == 'success') {
                this.Materials = response.data;
            }
        });
    }
    onSubmit(form) {
        let postData = {
            tender_id: form.value.tender,
            material_id: form.value.material,
            quantity: form.value.qnt,
            user_id: this.userId
        };
        this.tenderService.submitMaterialRequest(postData, this.accessToken).subscribe(response => {
            this.showAlert(response.message);
            // console.log(response);
        });
        //  this.router.navigateByUrl('/material-request-list');
    }
    showAlert(message) {
        this.alertCtrl
            .create({
            header: 'Alert Message',
            message: message,
            buttons: [{
                    text: 'Okey',
                    handler: () => {
                        this.router.navigate(['material-request-list']);
                    }
                }
            ]
        })
            .then(alertEl => alertEl.present());
    }
};
MaterialRequestPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _services_tenders_service__WEBPACK_IMPORTED_MODULE_4__.TendersService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
MaterialRequestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-material-request',
        template: _raw_loader_material_request_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_material_request_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MaterialRequestPage);



/***/ }),

/***/ 2662:
/*!*************************************************************!*\
  !*** ./src/app/material-request/material-request.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  margin: 0;\n  border-radius: 0;\n}\n\nion-label {\n  font-weight: bold;\n  padding-bottom: 10px;\n  display: inline-block;\n}\n\nion-col {\n  padding: 0 0 20px;\n}\n\n.btn-grad {\n  --background: linear-gradient(to right, #eae8ea 0%, rgb(255, 255, 255) 100%);\n  margin: 0 20px;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  margin-bottom: 15px;\n}\n\n.btn-grad h2 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #313469;\n}\n\n.btn-grad > ion-icon {\n  background: #d0d1d4;\n  padding: 10px;\n  border-radius: 50%;\n}\n\nion-content, ion-list {\n  --background: #eef1f4;\n  background: #eef1f4;\n}\n\n.footer-link {\n  --background: linear-gradient(87deg, #5967ff 0, #5a99fe 100%) !important;\n}\n\n.transparent-card {\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n}\n\n.transparent-card h1 {\n  font-size: 24px;\n  font-weight: 600;\n  color: #313469;\n}\n\n.icon {\n  display: inline-block;\n  font-size: 35px;\n  color: #ffC977;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.filter_options {\n  font-size: 14px;\n  color: #000000;\n}\n\n.filter_options ion-icon {\n  vertical-align: middle;\n}\n\nion-input, ion-textarea, ion-select {\n  --background: linear-gradient(to right, #eae8ea 0%, rgb(255, 255, 255) 100%);\n  background: linear-gradient(to right, #eae8ea 0%, white 100%);\n  margin: 0;\n  border-radius: 7px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n}\n\n.middle_align {\n  margin-top: 10px;\n  padding-left: 5px;\n}\n\nion-icon {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFsLXJlcXVlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0RUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlIQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSx3RUFBQTtBQUdGOztBQURBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFJRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFJRjs7QUFBQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQUdGOztBQUFDO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQUdIOztBQURBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLHNCQUFBO0FBS0Y7O0FBRkE7RUFDRSw0RUFBQTtFQUNBLDZEQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EseUhBQUE7QUFLRjs7QUFGQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7QUFNRiIsImZpbGUiOiJtYXRlcmlhbC1yZXF1ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNhcmR7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbmlvbi1sYWJlbHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmlvbi1jb2x7XG4gIHBhZGRpbmc6IDAgMCAyMHB4O1xufVxuXG4uYnRuLWdyYWQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VhZThlYSAwJSwgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCUpO1xuICBtYXJnaW46IDAgMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggM3B4IDFweCAtMnB4LCByZ2IoMCAwIDAgLyAxNCUpIDBweCAycHggMnB4IDBweCwgcmdiKDAgMCAwIC8gMTIlKSAwcHggMXB4IDVweCAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uYnRuLWdyYWQgaDJ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMTM0Njk7XG59XG5cbi5idG4tZ3JhZCA+IGlvbi1pY29ue1xuICBiYWNrZ3JvdW5kOiAjZDBkMWQ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pb24tY29udGVudCwgaW9uLWxpc3R7XG4gIC0tYmFja2dyb3VuZDogI2VlZjFmNDtcbiAgYmFja2dyb3VuZDogI2VlZjFmNDtcbn1cblxuLmZvb3Rlci1saW5re1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4N2RlZywgIzU5NjdmZiAwLCAjNWE5OWZlIDEwMCUpICFpbXBvcnRhbnQ7XG59XG4udHJhbnNwYXJlbnQtY2FyZHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50cmFuc3BhcmVudC1jYXJkIGgxe1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzEzNDY5O1xuXG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjZmZDOTc3O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuIH1cblxuIC50ZXh0e1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiB9XG4uZmlsdGVyX29wdGlvbnN7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uZmlsdGVyX29wdGlvbnMgaW9uLWljb257XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlvbi1pbnB1dCwgaW9uLXRleHRhcmVhLCBpb24tc2VsZWN0e1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VhZThlYSAwJSwgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlYWU4ZWEgMCUsIHJnYigyNTUsIDI1NSwgMjU1KSAxMDAlKTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDNweCAxcHggLTJweCwgcmdiKDAgMCAwIC8gMTQlKSAwcHggMnB4IDJweCAwcHgsIHJnYigwIDAgMCAvIDEyJSkgMHB4IDFweCA1cHggMHB4O1xufVxuXG4ubWlkZGxlX2FsaWdue1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbmlvbi1pY29ue1xuICBmb250LXNpemU6IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ 1204:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/material-request/material-request.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content >\n\n\n  <ion-row>\n    <ion-col size=\"12\">\n\n    </ion-col>\n  </ion-row>\n  <ion-grid class=\"ion-no-padding\" >\n\n    <ion-card class=\"transparent-card\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"12\" size-sm=\"12\">\n\n            <h1>Send Material Request</h1>\n\n\n      </ion-col>\n\n      </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n<form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n\n    <ion-card class=\"transparent-card\">\n\n      <ion-card-content>\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"12\" size-sm=\"12\" >\n            <ion-label>Tender List: </ion-label>\n            <ion-select name=\"tender\" ngModel required  (ionChange)=\"onChangeTender($event.target.value)\">\n              <ion-select-option value=\"\">Select Tender</ion-select-option>\n              <ion-select-option value=\"{{item.id}}\" *ngFor=\"let item of Tenders\">{{item.name}}</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"12\" size-sm=\"12\">\n            <ion-label>Material List: </ion-label>\n            <ion-select name=\"material\" ngModel required >\n              <ion-select-option value=\"\">Select Material</ion-select-option>\n              <ion-select-option value=\"{{item.id}}\" *ngFor=\"let item of Materials\">{{item.name}}</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"12\" size-sm=\"12\" >\n            <ion-label>Quantity: </ion-label>\n            <ion-input type=\"text\" name=\"qnt\" value=\"\" placeholder=\"Quantity\" ngModel required ></ion-input>\n          </ion-col>\n          <!-- <ion-col size=\"1\" size-sm=\"1\" class=\"ion-no-padding middle_align\">\n            <ion-label></ion-label>\n\n            <ion-icon color=\"success\" name=\"add-circle\"></ion-icon>\n            <ion-icon color=\"danger\" name=\"remove-circle\"></ion-icon>\n          </ion-col> -->\n        </ion-row>\n        <!-- <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"4\" size-sm=\"4\" class=\"ion-no-padding\">\n            <ion-select name=\"tender\">\n              <ion-select-option value=\"\">Select Tender</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"4\" size-sm=\"4\" class=\"ion-no-padding\">\n            <ion-select name=\"tender\">\n              <ion-select-option value=\"\">Select Material</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"3\" size-sm=\"3\" class=\"ion-no-padding\">\n            <ion-input type=\"text\" name=\"qnt\" value=\"\" placeholder=\"Quantity\"></ion-input>\n          </ion-col>\n          <ion-col size=\"1\" size-sm=\"1\" class=\"ion-no-padding middle_align\">\n            <ion-label></ion-label>\n\n            <ion-icon color=\"success\" name=\"add-circle\"></ion-icon>\n            <ion-icon color=\"danger\" name=\"remove-circle\"></ion-icon>\n          </ion-col>\n        </ion-row> -->\n\n        <div class=\"ion-text-center\">\n        <ion-button type=\"submit\" class=\"ion-text-center\">Submit Request</ion-button>\n      </div>\n      </ion-card-content>\n    </ion-card>\n\n\n  </form>\n\n  </ion-grid>\n</ion-content>\n<app-footer></app-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_material-request_material-request_module_ts.js.map