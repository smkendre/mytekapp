(self["webpackChunkmytek_mobile_app"] = self["webpackChunkmytek_mobile_app"] || []).push([["default-src_app_services_tenders_service_ts-src_app_shared_footer_footer_component_ts-src_app-ee1dec"],{

/***/ 1287:
/*!*********************************************!*\
  !*** ./src/app/services/tenders.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TendersService": () => (/* binding */ TendersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ 1953);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ 138);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5917);







let TendersService = class TendersService {
    constructor(http, fileChooser, file) {
        this.http = http;
        this.fileChooser = fileChooser;
        this.file = file;
    }
    fetchTenders(token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Accept': 'application/json, text/plain'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'tenders';
        return this.http.get(url, httpHeader);
        //  return this.http.get<Tenders[]>('http://localhost:3000/tenders').pipe(
        //    tap(tenders => console.log('Users retrieved!')),
        //  catchError(this.handleError<Tenders[]>('Get user', []))
        //  );
    }
    getMyTenders(user_id, token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Accept': 'application/json, text/plain'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'my-tenders';
        const postData = { user_id: user_id };
        return this.http.post(url, postData, httpHeader);
    }
    getTenderMilestones(tender_id, token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Accept': 'application/json, text/plain'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'milestones';
        const postData = { tender_id: tender_id };
        return this.http.post(url, postData, httpHeader);
    }
    tenderDetails(tender_id, token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Accept': 'application/json, text/plain'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'tender-details';
        const postData = { id: tender_id };
        return this.http.post(url, postData, httpHeader);
    }
    submitRequest(tender_id, user_id, token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Accept': 'application/json, text/plain'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'tender-request';
        const postData = { tender_id: tender_id, user_id: user_id };
        return this.http.post(url, postData, httpHeader);
    }
    submitReportData(formData, user_id, tender_id, token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Accept': 'application/json, text/plain'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'submit-report';
        const postData = { formData: formData, tender_id: tender_id, user_id: user_id };
        return this.http.post(url, postData, httpHeader);
    }
    submitMaterialRequest(formData, token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Accept': 'application/json, text/plain'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'material-request';
        return this.http.post(url, formData, httpHeader);
    }
    getReportFields(tender_id, token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Accept': 'application/json, text/plain'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'report-fields';
        const postData = { tender_id: tender_id };
        return this.http.post(url, postData, httpHeader);
    }
    getMyreports(user_id, token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Accept': 'application/json, text/plain'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'my-reports';
        const postData = { user_id: user_id };
        return this.http.post(url, postData, httpHeader);
    }
    getMaterialRequests(user_id, token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Accept': 'application/json, text/plain'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'get-material-requests';
        const postData = { user_id: user_id };
        return this.http.post(url, postData, httpHeader);
    }
    getMaterialList(tender_id, token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Accept': 'application/json, text/plain'
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'materials';
        const postData = { tender_id: tender_id };
        return this.http.post(url, postData, httpHeader);
    }
    selectFile() {
        const options = { mime: 'application/pdf' };
        return this.fileChooser.open(options);
    }
    uploadImage(blobData, user_id, token) {
        // const formData = new FormData();
        // formData.append('file', blobData, `myimage.${ext}`);
        // formData.append('name', name);
        // formData.append('fileName', fileName);
        // formData.append('user_id', user_id);
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                Authorization: 'Bearer ' + token
            })
        };
        const postData = { image: blobData, tender_id: user_id };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'report-image';
        return this.http.post(url, postData, httpHeader);
        // return this.httpService.find('upload-image', formData, token);
    }
    uploadImageFile(file, token) {
        // const ext = file.name.split('.').pop();
        // const formData = new FormData();
        // formData.append('file', file);
        // formData.append('name', file.name);
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            })
        };
        const postData = { image: file };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'report-image';
        return this.http.post(url, postData, httpHeader);
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(result);
        };
    }
    makeFileIntoBlob(_imagePath, fileName) {
        return new Promise((resolve, reject) => {
            this.file
                .resolveLocalFilesystemUrl(_imagePath)
                .then(fileEntry => {
                const { name, nativeURL } = fileEntry;
                // get the path..
                const path = nativeURL.substring(0, nativeURL.lastIndexOf('/'));
                console.log('path', path);
                console.log('fileName', name);
                fileName = name;
                // we are provided with name, so now read the file into
                // a buffer
                return this.file.readAsArrayBuffer(path, name);
            })
                .then(buffer => {
                // get the buffer and make a blob to be saved
                const imgBlob = new Blob([buffer], {
                    type: 'image/jpeg'
                });
                console.log(imgBlob.type, imgBlob.size);
                resolve({
                    fileName,
                    imgBlob
                });
            })
                .catch(e => reject(e));
        });
    }
};
TendersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_1__.FileChooser },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__.File }
];
TendersService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], TendersService);



/***/ }),

/***/ 5227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./footer.component.html */ 7318);
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ 6910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 4687);





let FooterComponent = class FooterComponent {
    constructor(callNumber) {
        this.callNumber = callNumber;
    }
    ngOnInit() { }
    CallPhoneNumber() {
        this.callNumber.callNumber("8828133339", true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
};
FooterComponent.ctorParameters = () => [
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__.CallNumber }
];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FooterComponent);



/***/ }),

/***/ 9470:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header.component.html */ 126);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 4783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderComponent);



/***/ }),

/***/ 6910:
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 4783:
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 7318:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-footer>\n  <ion-button expand=\"full\" class=\"footer-link\" (click)=\"CallPhoneNumber()\">Call Us For Assistance</ion-button>\n</ion-footer>\n");

/***/ }),

/***/ 126:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-thumbnail slot=\"start\" class=\"header-icons\" [routerLink]=\"['/', 'profile']\">\n      <ion-img src=\"../../assets/01-04.png\"></ion-img>\n    </ion-thumbnail>\n      <ion-img src=\"../../assets/images/logo.jpg\" class=\"header-logo\"></ion-img>\n    <ion-thumbnail slot=\"primary\" class=\"header-icons\">\n      <ion-img src=\"../../assets/search-icon.png\"></ion-img>\n    </ion-thumbnail>\n\n    <ion-thumbnail slot=\"primary\" class=\"header-icons\">\n      <ion-img src=\"../../assets/bellicon.png\"></ion-img>\n    </ion-thumbnail>\n    <ion-thumbnail slot=\"primary\" class=\"header-icons\">\n      <ion-img src=\"../../assets/01-02.png\"></ion-img>\n    </ion-thumbnail>\n    <ion-button slot=\"primary\" class=\"drawer-menu\">\n      <ion-menu-button >\n        <img src=\"../../assets/01-03.png\" >\n      </ion-menu-button>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_services_tenders_service_ts-src_app_shared_footer_footer_component_ts-src_app-ee1dec.js.map