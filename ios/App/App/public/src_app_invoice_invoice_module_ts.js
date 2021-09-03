(self["webpackChunkmytek_mobile_app"] = self["webpackChunkmytek_mobile_app"] || []).push([["src_app_invoice_invoice_module_ts"],{

/***/ 7546:
/*!***************************************************!*\
  !*** ./src/app/invoice/invoice-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicePageRoutingModule": () => (/* binding */ InvoicePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.page */ 6313);




const routes = [
    {
        path: '',
        component: _invoice_page__WEBPACK_IMPORTED_MODULE_0__.InvoicePage
    }
];
let InvoicePageRoutingModule = class InvoicePageRoutingModule {
};
InvoicePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvoicePageRoutingModule);



/***/ }),

/***/ 3277:
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicePageModule": () => (/* binding */ InvoicePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-routing.module */ 7546);
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.page */ 6313);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/footer/footer.component */ 5227);









let InvoicePageModule = class InvoicePageModule {
};
InvoicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoicePageRoutingModule
        ],
        declarations: [_invoice_page__WEBPACK_IMPORTED_MODULE_1__.InvoicePage, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent]
    })
], InvoicePageModule);



/***/ }),

/***/ 6313:
/*!*****************************************!*\
  !*** ./src/app/invoice/invoice.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicePage": () => (/* binding */ InvoicePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_invoice_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./invoice.page.html */ 2555);
/* harmony import */ var _invoice_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.page.scss */ 5895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 7673);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 9865);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _config_auth_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/auth-constant */ 644);
/* harmony import */ var _services_invoice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/invoice.service */ 9111);
/* harmony import */ var _services_registration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/registration.service */ 3216);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/storage.service */ 1188);
/* harmony import */ var _services_tenders_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/tenders.service */ 1287);













let InvoicePage = class InvoicePage {
    constructor(platform, actionSheetController, storageService, router, tenderService, invoiceService, alertCtrl, registrationService, filePath) {
        this.platform = platform;
        this.actionSheetController = actionSheetController;
        this.storageService = storageService;
        this.router = router;
        this.tenderService = tenderService;
        this.invoiceService = invoiceService;
        this.alertCtrl = alertCtrl;
        this.registrationService = registrationService;
        this.filePath = filePath;
        this.isLoading = true;
    }
    ngOnInit() {
        this.isLoading = true;
        this.storageService.get(_config_auth_constant__WEBPACK_IMPORTED_MODULE_4__.AuthConstants.AUTH).then(res => {
            console.log(res);
            if (res) {
                this.accessToken = res.token;
                this.userId = res.id;
                this.tenderService.getMyTenders(this.userId, this.accessToken).subscribe((response) => {
                    if (response.status == 'success') {
                        this.tenders = response.data;
                    }
                });
                this.invoiceService.getInvoices({ user_id: this.userId }, this.accessToken).subscribe((response) => {
                    if (response.status === 'success') {
                        this.invoices = response.data;
                    }
                    // console.log(this.invoices);
                    this.isLoading = false;
                });
            }
            else {
                this.router.navigate(['auth']);
            }
        });
    }
    selectImageSource(fileName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const buttons = [
                {
                    text: 'Take Photo',
                    icon: 'Camera',
                    handler: () => {
                        this.addImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera, fileName);
                    }
                },
                {
                    text: 'Choose from Gallery',
                    icon: 'Image',
                    handler: () => {
                        this.addImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos, fileName);
                    }
                }
            ];
            if (this.platform.is('pwa')) {
                buttons.push({
                    text: 'Choose a File',
                    icon: 'attach',
                    handler: () => {
                        this.fileInput.nativeElement.click();
                    }
                });
            }
            // for android
            if (this.platform.is('android')) {
                buttons.push({
                    text: 'Choose a File',
                    icon: 'attach',
                    handler: () => {
                        this.registrationService.selectFile().then(uri => {
                            this.filePath.resolveNativePath(uri)
                                .then((filePath) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                                // this.registrationService.makeBlob(filePath).then((blob) => {
                                //   const blobFile = blob;
                                //   console.log(blobFile);
                                //   this.registrationService.uploadImage(blobFile, fileName, this.userId, this.accessToken).subscribe(res => {
                                //     console.log('uploaded', res);
                                //   }, error => console.log('upload error', error));
                                // });
                            }))
                                .catch(err => console.log(err));
                        });
                    }
                });
            }
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select Image Source',
                buttons
            });
            yield actionSheet.present();
        });
    }
    addImage(source, fileName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                quality: 60,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64,
                source
            });
            this.imageUrl = 'data:image/jpeg;base64,' + image.base64String;
            this.registrationService.uploadImage(image.base64String, fileName, this.userId, this.accessToken).subscribe((newImage) => {
                this.imageUrl = newImage.url;
            });
        });
    }
    uploadFile(event) {
        // const eventObj: MSInputMethodContext = event as MSInputMethodContext;
        //const target: HTMLInputElement = eventObj.target as HTMLInputElement;
        const file = event.target.files[0];
        const fr = new FileReader();
        fr.onload = () => {
            const dataUrl = fr.result.toString();
            this.imageUrl = dataUrl;
            //   this.invoiceService.uploadImageFile(this.imageUrl, this.accessToken, this.userId).subscribe(newImage => {
            // });
        };
        fr.readAsDataURL(file);
    }
    onSubmit(form) {
        const postData = {
            tender_id: form.value.tender,
            user_id: this.userId,
            document: this.imageUrl
        };
        this.invoiceService.submitInvoice(postData, this.accessToken).subscribe(response => {
            // if(response.status == 'success'){
            //   this.router.navigateByUrl('/registration-thankyou');
            // }else{
            this.showAlert(response.message);
            //  }
        });
    }
    showAlert(message) {
        this.alertCtrl
            .create({
            header: 'Alert Message',
            message,
            buttons: [{
                    text: 'Okey',
                    handler: () => {
                        this.router.navigate(['home']);
                    }
                }
            ]
        })
            .then(alertEl => alertEl.present());
    }
};
InvoicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _services_tenders_service__WEBPACK_IMPORTED_MODULE_8__.TendersService },
    { type: _services_invoice_service__WEBPACK_IMPORTED_MODULE_5__.InvoiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _services_registration_service__WEBPACK_IMPORTED_MODULE_6__.RegistrationService },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_3__.FilePath }
];
InvoicePage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['fileInput', { static: false },] }]
};
InvoicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-invoice',
        template: _raw_loader_invoice_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_invoice_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InvoicePage);



/***/ }),

/***/ 9111:
/*!*********************************************!*\
  !*** ./src/app/services/invoice.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceService": () => (/* binding */ InvoiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




let InvoiceService = class InvoiceService {
    constructor(http) {
        this.http = http;
    }
    uploadImage(blobData, user_id, token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': 'Bearer ' + token
            })
        };
        const postData = { 'image': blobData, 'user_id': user_id };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'upload-invoice-document';
        return this.http.post(url, postData, httpHeader);
    }
    uploadImageFile(file, token, user_id) {
        const postData = { 'image': file, 'user_id': user_id };
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Authorization': 'Bearer ' + token
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'upload-invoice-document';
        return this.http.post(url, postData, httpHeader);
    }
    submitInvoice(postData, token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Accept': 'application/json, text/plain'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'submit-invoice';
        return this.http.post(url, postData, httpHeader);
    }
    getInvoices(postData, token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Accept': 'application/json, text/plain'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'invoices';
        return this.http.post(url, postData, httpHeader);
    }
};
InvoiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
InvoiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], InvoiceService);



/***/ }),

/***/ 5895:
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".transparent-card {\n  background: transparent;\n  box-shadow: none;\n  padding: 10px 0 0;\n}\n\n.transparent-card h2 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #313469;\n}\n\nion-content {\n  --background: #eef1f4;\n  background: #eef1f4;\n}\n\nion-card {\n  margin: 0;\n  border-radius: 0;\n  padding: 0;\n}\n\n.btn-grad {\n  --background: linear-gradient(to right, #eae8ea 0%, rgb(255, 255, 255) 100%);\n  margin: 0 20px;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  margin-bottom: 15px;\n}\n\n.btn-grad h2 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #313469;\n}\n\n.btn-grad > ion-icon {\n  background: #d0d1d4;\n  padding: 10px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludm9pY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBQUY7O0FBSUE7RUFDRSw0RUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlIQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQUYiLCJmaWxlIjoiaW52b2ljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnNwYXJlbnQtY2FyZHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMCAwO1xufVxuXG4udHJhbnNwYXJlbnQtY2FyZCBoMntcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMxMzQ2OTtcblxufVxuXG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWVmMWY0O1xuICBiYWNrZ3JvdW5kOiAjZWVmMWY0O1xufVxuXG5pb24tY2FyZHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5cbi5idG4tZ3JhZCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWFlOGVhIDAlLCByZ2IoMjU1LCAyNTUsIDI1NSkgMTAwJSk7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyMCUpIDBweCAzcHggMXB4IC0ycHgsIHJnYigwIDAgMCAvIDE0JSkgMHB4IDJweCAycHggMHB4LCByZ2IoMCAwIDAgLyAxMiUpIDBweCAxcHggNXB4IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5idG4tZ3JhZCBoMntcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMxMzQ2OTtcbn1cblxuLmJ0bi1ncmFkID4gaW9uLWljb257XG4gIGJhY2tncm91bmQ6ICNkMGQxZDQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 2555:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n<ion-content>\n  <div class=\"ion-text-center\"  *ngIf=\"isLoading\">\n    <ion-spinner color=\"primary\"></ion-spinner>\n\n  </div>\n<ion-grid>\n\n  <ion-card class=\"transparent-card\"  *ngIf=\"!isLoading \">\n    <ion-card-header>\n         <h2>Invoice</h2>\n    </ion-card-header>\n    <ion-card-content>\n      <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\" enctype=\"multipart/form-data\">\n        <ion-row>\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-select ngModel name=\"tender\">\n                <ion-select-option value=\"\">Select Tender</ion-select-option>\n                <ion-select-option *ngFor=\"let tender of tenders\" [value]=\"tender.id\">{{tender.name}}</ion-select-option>\n              </ion-select>  </ion-col>\n          </ion-row>\n\n\n<ion-row>\n  <ion-col size=\"12\" >\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\">\n      <input\n      type=\"file\"\n      #fileInput\n      (change)=\"uploadFile($event)\"\n      hidden=\"true\"\n      accept=\"image/*\"\n    />\n      <ion-button (click)=\"selectImageSource('invoice')\">Upload      </ion-button>\n\n      <ion-icon name=\"attach-outline\" slot=\"primary\"></ion-icon>\n    </ion-fab>\n  </ion-col>\n</ion-row>\n        <ion-button type=\"submit\" class=\"ion-text-center\">Submit</ion-button>\n\n      </form>\n\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-grid>\n\n\n<ion-grid class=\"ion-no-padding\"  *ngIf=\"!isLoading && invoices.length > 0\">\n\n  <ion-card class=\"transparent-card\">\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"6\" size-sm=\"6\">\n\n\n          <h1>My Invoices</h1>\n\n\n    </ion-col>\n\n    </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class=\"btn-grad\"  *ngFor=\"let item of invoices\" >\n\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"12\" size-sm=\"12\" >\n              <h2>{{item.created_at}}</h2>\n\n        </ion-col>\n        <ion-col size=\"12\" size-sm=\"12\" >\n          <h2>{{item.name}}</h2>\n\n    </ion-col>\n\n        <ion-col size=\"12\">\n          <h3><strong>Status: </strong>{{item.status}}</h3>\n\n        </ion-col>\n      </ion-row>\n\n\n    </ion-card-content>\n  </ion-card>\n</ion-grid>\n\n</ion-content>\n\n\n<app-footer></app-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_invoice_invoice_module_ts.js.map