(self["webpackChunkmytek_mobile_app"] = self["webpackChunkmytek_mobile_app"] || []).push([["src_app_tenders_submit-report_submit-report_module_ts"],{

/***/ 1227:
/*!***********************************************************************!*\
  !*** ./src/app/tenders/submit-report/submit-report-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitReportPageRoutingModule": () => (/* binding */ SubmitReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _submit_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit-report.page */ 3286);




const routes = [
    {
        path: '',
        component: _submit_report_page__WEBPACK_IMPORTED_MODULE_0__.SubmitReportPage
    }
];
let SubmitReportPageRoutingModule = class SubmitReportPageRoutingModule {
};
SubmitReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SubmitReportPageRoutingModule);



/***/ }),

/***/ 5262:
/*!***************************************************************!*\
  !*** ./src/app/tenders/submit-report/submit-report.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitReportPageModule": () => (/* binding */ SubmitReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _submit_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit-report-routing.module */ 1227);
/* harmony import */ var _submit_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-report.page */ 3286);
/* harmony import */ var src_app_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/header/header.component */ 9470);
/* harmony import */ var src_app_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/footer/footer.component */ 5227);









let SubmitReportPageModule = class SubmitReportPageModule {
};
SubmitReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _submit_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubmitReportPageRoutingModule
        ],
        declarations: [_submit_report_page__WEBPACK_IMPORTED_MODULE_1__.SubmitReportPage, src_app_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, src_app_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent]
    })
], SubmitReportPageModule);



/***/ }),

/***/ 3286:
/*!*************************************************************!*\
  !*** ./src/app/tenders/submit-report/submit-report.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitReportPage": () => (/* binding */ SubmitReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_submit_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./submit-report.page.html */ 7138);
/* harmony import */ var _submit_report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-report.page.scss */ 1918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_tenders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tenders.service */ 1287);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);
/* harmony import */ var src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/auth-constant */ 644);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/camera */ 7673);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 9865);











let SubmitReportPage = class SubmitReportPage {
    constructor(tenderService, router, alertCtrl, storageService, route, actionSheetController, platform, filePath) {
        this.tenderService = tenderService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.storageService = storageService;
        this.route = route;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.filePath = filePath;
        this.Fields = [];
        this.isLoading = false;
        this.images = [];
    }
    ngOnInit() {
        this.isLoading = true;
        this.storageService.get(src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_4__.AuthConstants.AUTH).then(res => {
            if (res) {
                this.accessToken = res.token;
                this.userId = res.id;
                this.tenderService.getReportFields(this.tender_id, this.accessToken).subscribe((response) => {
                    // this.Tenders = [];
                    if (response.status == 'success')
                        this.Fields = response.data;
                    this.isLoading = false;
                });
            }
            else {
                this.router.navigate(['auth']);
            }
        });
        this.tender_id = this.route.snapshot.paramMap.get('tenderId');
    }
    ionViewWillEnter() {
        // this.tenderService.getReportFields().subscribe((response) => {
        //   this.isLoading = false;
        //   // this.Tenders = [];
        //   this.Fields = response;
        // })
    }
    onSubmit(form) {
        this.isLoading = true;
        // this.router.navigateByUrl('/reports');
        // this.loadingCtrl
        //   .create({ keyboardClose: true, message: 'Logging in...' })
        //   .then(loadingEl => {
        //     loadingEl.present();
        //     let authObs: Observable<ResponseType>;
        //       authObs = this.tenderService.submitReport(this.Fields);
        //        console.log(authObs);
        //     authObs.subscribe(
        //       resData => {
        //         // console.log(resData);
        //         this.isLoading = false;
        //         loadingEl.dismiss();
        //         const code = resData.error_code;
        //         if(code){
        //           this.showAlert(resData.message);
        //         }else{
        //         }
        //         this.router.navigateByUrl('/home');
        //       },
        //       errRes => {
        //         loadingEl.dismiss();
        //       }
        //     );
        //   });
        if (!form.valid) {
            return;
        }
        // console.log(form.value);
        const formData = form.value;
        this.tenderService.submitReportData(formData, this.userId, this.tender_id, this.accessToken).subscribe(res => {
            this.isLoading = false;
            // if(res.status == 'success'){
            this.showAlert(res.message);
            // }else{
            //   this.showAlert(res.message);
            // }
        });
    }
    showAlert(message) {
        this.alertCtrl
            .create({
            header: 'Alert Message',
            message: message,
            buttons: [{
                    text: 'Okey',
                    handler: () => {
                        this.router.navigate(['reports']);
                    }
                }
            ]
        })
            .then(alertEl => alertEl.present());
    }
    selectImageSource(fileName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const buttons = [
                {
                    text: 'Take Photo',
                    icon: 'Camera',
                    handler: () => {
                        this.addImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraSource.Camera, fileName);
                    }
                },
                {
                    text: "Choose from Gallery",
                    icon: 'Image',
                    handler: () => {
                        this.addImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraSource.Photos, fileName);
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
                        this.tenderService.selectFile().then(uri => {
                            this.filePath.resolveNativePath(uri)
                                .then((filePath) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                                // this.updatedocumentLink(fileName, filePath);
                                this.tenderService.makeFileIntoBlob(filePath, fileName).then((blob) => {
                                    const blobFile = blob;
                                    this.imageUrl = blobFile;
                                    // this.tenderService.uploadImage(blobFile, fileName, this.userId, this.accessToken).subscribe(res => {
                                    //   console.log('uploaded',res);
                                    // }, error => console.log('upload error',error));
                                });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.Camera.getPhoto({
                quality: 60,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraResultType.Base64,
                source
            });
            try {
                const imgUrl = 'data:image/jpeg;base64,' + image.base64String;
                this.imageUrl = imgUrl;
                //this.updateImagePreview(fileName, imgUrl);
            }
            catch (error) {
            }
        });
    }
    // Used for browser direct file upload
    uploadFile(event, fieldName) {
        const file = event.target.files[0];
        const fr = new FileReader();
        fr.onload = () => {
            const dataUrl = fr.result.toString();
            // if (fieldName == 'gst_certificate') {
            this.imageUrl = dataUrl;
            // }
            // if (fieldName == 'reg_certificate') {
            //   this.RegimageUrl = dataUrl;
            // }
            // if (fieldName == 'pan_card') {
            //   this.PanimageUrl = dataUrl;
            // }
            // if (fieldName == 'adhaar_file') {
            //   this.AdhaarimageUrl = dataUrl;
            // }
            // this.registrationService.uploadImageFile(this.imageUrl, this.accessToken, fieldName, this.userId).subscribe((newImage: ApiImage) => {
            //   this.images.push(newImage);
            // });
        };
        fr.readAsDataURL(file);
    }
    // submitDocument(fileName: string){
    //   this.tenderService.selectFile().then(uri => {
    //     this.filePath.resolveNativePath(uri)
    //       .then(async (filePath) => {
    //         this.tenderService.makeFileIntoBlob(filePath,fileName).then((blob) => {
    //           const blobFile = blob;
    //           this.tenderService.uploadImage(blobFile, fileName, this.userId, this.accessToken).subscribe(res => {
    //             console.log('uploaded',res);
    //           }, error => console.log('upload error',error));
    //         });
    //       })
    //       .catch(err => console.log(err));
    //   });
    // }
    b64toBlob(b64Data, contentType = '', sliceSize = 512) {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
};
SubmitReportPage.ctorParameters = () => [
    { type: _services_tenders_service__WEBPACK_IMPORTED_MODULE_2__.TendersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__.FilePath }
];
SubmitReportPage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['fileInput', { static: false },] }]
};
SubmitReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-submit-report',
        template: _raw_loader_submit_report_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_submit_report_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SubmitReportPage);



/***/ }),

/***/ 1918:
/*!***************************************************************!*\
  !*** ./src/app/tenders/submit-report/submit-report.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".transparent-card {\n  background: transparent;\n  box-shadow: none;\n  padding: 10px 0 0;\n}\n\n.transparent-card h2 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #313469;\n}\n\n.filter_options {\n  font-size: 14px;\n  color: #000000;\n}\n\n.filter_options ion-icon {\n  vertical-align: middle;\n}\n\nion-content {\n  --background: #eef1f4;\n  background: #eef1f4;\n}\n\nion-card {\n  margin: 0;\n  border-radius: 0;\n  padding: 0;\n}\n\nion-list {\n  padding: 0;\n  background: transparent;\n}\n\nion-row {\n  margin-bottom: 10px;\n}\n\nion-label {\n  margin-right: 7px;\n  vertical-align: middle;\n  color: #000000;\n}\n\nion-input, ion-textarea {\n  --background: linear-gradient(to right, #eae8ea 0%, rgb(255, 255, 255) 100%);\n  margin: 0;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC1yZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0Usc0JBQUE7QUFFRjs7QUFBQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFHRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSw0RUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHlIQUFBO0FBRUYiLCJmaWxlIjoic3VibWl0LXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnNwYXJlbnQtY2FyZHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMCAwO1xufVxuXG4udHJhbnNwYXJlbnQtY2FyZCBoMntcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMxMzQ2OTtcblxufVxuLmZpbHRlcl9vcHRpb25ze1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmZpbHRlcl9vcHRpb25zIGlvbi1pY29ue1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogI2VlZjFmNDtcbiAgYmFja2dyb3VuZDogI2VlZjFmNDtcbn1cblxuaW9uLWNhcmR7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuXG5pb24tbGlzdHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1yb3d7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1sYWJlbHtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5pb24taW5wdXQsIGlvbi10ZXh0YXJlYXtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlYWU4ZWEgMCUsIHJnYigyNTUsIDI1NSwgMjU1KSAxMDAlKTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyMCUpIDBweCAzcHggMXB4IC0ycHgsIHJnYigwIDAgMCAvIDE0JSkgMHB4IDJweCAycHggMHB4LCByZ2IoMCAwIDAgLyAxMiUpIDBweCAxcHggNXB4IDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 7138:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tenders/submit-report/submit-report.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n<ion-content >\n\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"ion-text-center\"  *ngIf=\"isLoading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n\n      </div>\n      <div class=\"ion-text-center\" *ngIf=\"!isLoading && Fields.length <= 0\">\n\n      <p > No Report Format Found !</p>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-grid class=\"ion-no-padding\"  *ngIf=\"!isLoading && Fields.length > 0\">\n\n<form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n\n    <ion-card class=\"transparent-card\">\n      <ion-card-header>            <h2>Upate Daily Report</h2>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row *ngFor=\"let row of Fields\">\n          <ion-col size=\"4\" class=\"ion-no-padding\">\n            <ion-label>{{row.name}}: </ion-label>\n          </ion-col>\n\n          <ion-col size=\"8\" class=\"ion-no-padding\">\n            <ion-input type=\"text\" ngModel name=\"field_{{row.name}}\" value=\"\" ></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <ion-row >\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-label>Comment: </ion-label>\n            <ion-textarea rows=\"5\" ngModel name=\"comment\"></ion-textarea>\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row >\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n              <!-- <input\n                type=\"file\"\n                #fileInput\n                (change)=\"uploadFile($event)\"\n                hidden=\"true\"\n                accept=\"image/*\"\n              /> -->\n              <ion-button (click)=\"selectImageSource('file')\">\n        Upload      </ion-button>\n          </ion-col>\n\n        </ion-row>\n\n\n        <ion-input type=\"hidden\" ngModel name=\"tender_id\" value=\"{{tender_id}}\" ></ion-input>\n        <ion-input type=\"hidden\" ngModel name=\"file_path\" value=\"{{imageUrl}}\" ></ion-input>\n\n        <ion-button type=\"submit\" class=\"ion-text-center\">Submit</ion-button>\n      </ion-card-content>\n    </ion-card>\n\n\n  </form>\n\n  </ion-grid>\n</ion-content>\n<app-footer></app-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tenders_submit-report_submit-report_module_ts.js.map