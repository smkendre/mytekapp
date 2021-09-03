(self["webpackChunkmytek_mobile_app"] = self["webpackChunkmytek_mobile_app"] || []).push([["src_app_signup_signup_module_ts"],{

/***/ 159:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 771);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 7648:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 159);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 771);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 771:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 1355);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 4194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _config_auth_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/auth-constant */ 644);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ 1188);









let SignupPage = class SignupPage {
    constructor(alertCtrl, loadingCtrl, authService, storageService, router) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.storageService = storageService;
        this.router = router;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        this.loadingCtrl
            .create({ keyboardClose: true, message: 'Logging in...' })
            .then(loadingEl => {
            if (!form.valid) {
                return;
            }
            const email = form.value.email;
            const password = form.value.pwd;
            const name = form.value.uname;
            console.log(name);
            this.authService.signup({ 'name': name, 'email': email, 'password': password }).subscribe((res) => {
                loadingEl.dismiss();
                if (res.status == 'success') {
                    this.storageService.store(_config_auth_constant__WEBPACK_IMPORTED_MODULE_2__.AuthConstants.AUTH, res.data);
                    this.router.navigateByUrl('/home');
                }
                else {
                    this.showAlert(res.message);
                }
            }, (error) => {
                this.showAlert("Network Error");
            });
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
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 4194:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  height: 100%;\n  --background: linear-gradient( #5a99fe, #5967ff) !important ;\n}\n\n.curve-borders {\n  border-radius: 75px;\n  width: 250px;\n  margin: 20px auto;\n}\n\nion-card-header {\n  padding: 10px 30px;\n}\n\nion-item {\n  border: 2px solid #c8c8c8;\n  border-radius: 8px;\n  --background: #eaeaea;\n  margin-bottom: 20px;\n}\n\n.login-container {\n  border-radius: 20px;\n  --background-color: #edf1f4;\n  padding: 40px 20px;\n}\n\n.login-container ion-button {\n  --background: linear-gradient(87deg, #5967ff 0, #5a99fe 100%) !important;\n}\n\n.transparent-card {\n  background: transparent;\n  box-shadow: none;\n  padding: 10px 0 0;\n  color: #ffffff;\n}\n\n.transparent-card h2 {\n  font-size: 28px;\n}\n\n.transparent-card ion-button {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.errorMsg {\n  border: none;\n  border-radius: 0;\n  --background: transparent;\n}\n\nion-grid {\n  height: 100%;\n}\n\n.native-input.sc-ion-input-md:-webkit-autofill, input:-internal-autofill-selected {\n  background-color: #c8c8c8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsNERBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQUFBO0VBQ0Usd0VBQUE7QUFHRjs7QUFBQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBSUY7O0FBREE7RUFFRSxZQUFBO0FBR0Y7O0FBQ0E7RUFHRSxvQ0FBQTtBQUFGIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggIzVhOTlmZSwgIzU5NjdmZikgIWltcG9ydGFudFxufVxuLmN1cnZlLWJvcmRlcnMge1xuICBib3JkZXItcmFkaXVzOiA3NXB4O1xuICB3aWR0aDogMjUwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuaW9uLWNhcmQtaGVhZGVye1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG59XG5cbmlvbi1pdGVte1xuICBib3JkZXI6IDJweCBzb2xpZCAjYzhjOGM4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYmFja2dyb3VuZDogI2VhZWFlYTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lcntcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMWY0O1xuICBwYWRkaW5nOiA0MHB4IDIwcHg7XG59XG5cbi5sb2dpbi1jb250YWluZXIgaW9uLWJ1dHRvbntcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODdkZWcsICM1OTY3ZmYgMCwgIzVhOTlmZSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4udHJhbnNwYXJlbnQtY2FyZHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMCAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnRyYW5zcGFyZW50LWNhcmQgaDJ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi50cmFuc3BhcmVudC1jYXJkIGlvbi1idXR0b257XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbn1cbi5lcnJvck1zZ3tcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tZ3JpZHtcblxuICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQ6LXdlYmtpdC1hdXRvZmlsbCwgaW5wdXQ6LWludGVybmFsLWF1dG9maWxsLXNlbGVjdGVkXG5cbiB7XG4gIGJhY2tncm91bmQtY29sb3I6I2M4YzhjOCAhaW1wb3J0YW50O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYXV0b2ZpbGwge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cblxuLy8gZm9ybXtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIGhlaWdodDogMTAwJTtcblxuLy8gfVxuIl19 */");

/***/ }),

/***/ 1355:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-content>\n  <ion-grid>\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n\n    <ion-row  class=\"text-align-center\">\n\n      <ion-col size=\"12\" size-sm=\"12\">\n        <ion-card class=\"curve-borders\">\n          <ion-card-header >\n              <div ><ion-img src=\"../../assets/images/logo.jpg\"></ion-img></div>\n          </ion-card-header>\n\n        </ion-card>\n        <ion-card size-md=\"12\" size-sm=\"12\" class=\"login-container\">\n\n          <ion-card-content>\n            <ion-item>\n              <ion-label position=\"floating\"><ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\n                Name</ion-label>\n              <ion-input type=\"text\" ngModel name=\"uname\" id=\"uname\" placeholder=\"Name\" required  #nameCtrl=\"ngModel\"></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"!nameCtrl.valid && nameCtrl.touched\" lines=\"none\" class=\"errorMsg\">\n              <ion-label>Please enter name</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\"><ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\n                Email Address</ion-label>\n              <ion-input type=\"email\" ngModel name=\"email\" id=\"email\" placeholder=\"Email Address\" required email #emailCtrl=\"ngModel\"></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"!emailCtrl.valid && emailCtrl.touched\" lines=\"none\" class=\"errorMsg\">\n              <ion-label>Please enter valid email address</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\"><ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon> Password</ion-label>\n              <ion-input type=\"password\" ngModel name=\"pwd\" id=\"pwd\" placeholder=\"Password\" required minlength=\"8\" #pwdCtrl=\"ngModel\"></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"!pwdCtrl.valid && pwdCtrl.touched\" lines=\"none\" class=\"errorMsg\">\n              <ion-label>Password should be 8 character long</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\"><ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon>Confirm Password</ion-label>\n              <ion-input type=\"password\" ngModel name=\"cpwd\" id=\"cpwd\" placeholder=\"Confirm Password\" required minlength=\"8\" #cpwdCtrl=\"ngModel\"></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"!cpwdCtrl.valid && cpwdCtrl.touched\" lines=\"none\" class=\"errorMsg\">\n              <ion-label>Password and confirm password do not match</ion-label>\n            </ion-item>\n            <ion-button type=\"submit\" [disabled]=\"!f.valid\">Signup</ion-button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n        <ion-card class=\"transparent-card\">\n          <ion-card-content color=\"light\" class=\"ion-text-center \">\n            <h2>  Alredy a User?</h2>\n            <ion-button expand=\"full\" routerLink=\"/auth\" fill=\"clear\">Login!</ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </form>\n\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map