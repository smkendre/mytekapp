(self["webpackChunkmytek_mobile_app"] = self["webpackChunkmytek_mobile_app"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageRoutingModule": () => (/* binding */ AuthPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page */ 3561);




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage
    }
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageModule": () => (/* binding */ AuthPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 431);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page */ 3561);








let AuthPageModule = class AuthPageModule {
};
AuthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthPageRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_1__.AuthPage]
    })
], AuthPageModule);



/***/ }),

/***/ 3561:
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPage": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./auth.page.html */ 8419);
/* harmony import */ var _auth_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page.scss */ 957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 1188);
/* harmony import */ var _config_auth_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/auth-constant */ 644);









let AuthPage = class AuthPage {
    constructor(authService, router, loadingCtrl, alertCtrl, storageService) {
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storageService = storageService;
        this.isLogin = true;
        this.isLoading = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storageService.get(_config_auth_constant__WEBPACK_IMPORTED_MODULE_4__.AuthConstants.AUTH).then(res => {
            // console.log(res.name);
            if (res) {
                this.router.navigate(['home']);
            }
            else {
            }
        });
    }
    authenticate(email, password) {
        this.isLoading = true;
        this.loadingCtrl
            .create({ keyboardClose: true, message: 'Logging in...' })
            .then(loadingEl => {
            loadingEl.dismiss();
            this.router.navigateByUrl('/home');
            // let authObs: Observable<AuthResponseData>;
            // if (this.isLogin) {
            //   authObs = this.authService.login(email, password);
            //    console.log(authObs);
            // } else {
            // //  authObs = this.authService.signup(email, password);
            // }
            // authObs.subscribe(
            //   resData => {
            //     // console.log(resData);
            //     this.isLoading = false;
            //     loadingEl.dismiss();
            //     const code = resData.error_code;
            //     if(code){
            //       this.showAlert(resData.message);
            //     }else{
            //     }
            //     this.router.navigateByUrl('/home');
            //   },
            //   errRes => {
            //     loadingEl.dismiss();
            //     // const code = errRes.error.error.message;
            //     // let message = 'Could not sign you up, please try again.';
            //     // if (code === 'EMAIL_EXISTS') {
            //     //   message = 'This email address exists already!';
            //     // } else if (code === 'EMAIL_NOT_FOUND') {
            //     //   message = 'E-Mail address could not be found.';
            //     // } else if (code === 'INVALID_PASSWORD') {
            //     //   message = 'This password is not correct.';
            //     // }
            //     // this.showAlert(message);
            //   }
            // );
        });
    }
    onSwitchAuthMode() {
        this.isLogin = !this.isLogin;
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
            this.authService.login({ 'email': email, 'password': password }).subscribe((res) => {
                // console.log(res);
                loadingEl.dismiss();
                if (res.status == 'success') {
                    // console.log(AuthConstants.AUTH);
                    // console.log(res.data);
                    this.storageService.store(_config_auth_constant__WEBPACK_IMPORTED_MODULE_4__.AuthConstants.AUTH, res.data);
                    this.router.navigateByUrl('/home');
                }
                else {
                    this.showAlert(res.message);
                }
            }, (error) => {
                // console.log("Network Error");
                this.showAlert("Network Error");
            });
        });
        // console.log(form.value);
        // this.authenticate(email, password);
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
AuthPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
AuthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-auth',
        template: _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AuthPage);



/***/ }),

/***/ 957:
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  height: 100%;\n  --background: linear-gradient( #5a99fe, #5967ff) !important ;\n}\n\n.curve-borders {\n  border-radius: 75px;\n  width: 250px;\n  margin: 20px auto;\n}\n\nion-card-header {\n  padding: 10px 30px;\n}\n\nion-item {\n  border: 2px solid #c8c8c8;\n  border-radius: 8px;\n  --background: #eaeaea;\n  margin-bottom: 20px;\n}\n\n.login-container {\n  border-radius: 20px;\n  --background-color: #edf1f4;\n  padding: 40px 20px;\n}\n\n.login-container ion-button {\n  --background: linear-gradient(87deg, #5967ff 0, #5a99fe 100%) !important;\n}\n\n.transparent-card {\n  background: transparent;\n  box-shadow: none;\n  padding: 10px 0 0;\n  color: #ffffff;\n}\n\n.transparent-card h2 {\n  font-size: 28px;\n}\n\n.transparent-card ion-button {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.errorMsg {\n  border: none;\n  border-radius: 0;\n  --background: transparent;\n}\n\nion-grid {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLDREQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFLHdFQUFBO0FBR0Y7O0FBQUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUlGOztBQURBO0VBRUUsWUFBQTtBQUdGIiwiZmlsZSI6ImF1dGgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIGhlaWdodDogMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoICM1YTk5ZmUsICM1OTY3ZmYpICFpbXBvcnRhbnRcbn1cbi5jdXJ2ZS1ib3JkZXJzIHtcbiAgYm9yZGVyLXJhZGl1czogNzVweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cbmlvbi1jYXJkLWhlYWRlcntcbiAgcGFkZGluZzogMTBweCAzMHB4O1xufVxuXG5pb24taXRlbXtcbiAgYm9yZGVyOiAycHggc29saWQgI2M4YzhjODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLWJhY2tncm91bmQ6ICNlYWVhZWE7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sb2dpbi1jb250YWluZXJ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2VkZjFmNDtcbiAgcGFkZGluZzogNDBweCAyMHB4O1xufVxuXG4ubG9naW4tY29udGFpbmVyIGlvbi1idXR0b257XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDg3ZGVnLCAjNTk2N2ZmIDAsICM1YTk5ZmUgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLnRyYW5zcGFyZW50LWNhcmR7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDAgMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi50cmFuc3BhcmVudC1jYXJkIGgye1xuICBmb250LXNpemU6IDI4cHg7XG59XG4udHJhbnNwYXJlbnQtY2FyZCBpb24tYnV0dG9ue1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuXG59XG4uZXJyb3JNc2d7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWdyaWR7XG5cbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vLyBmb3Jte1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuXG4vLyB9XG4iXX0= */");

/***/ }),

/***/ 8419:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-content>\n  <ion-grid>\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n\n    <ion-row  class=\"text-align-center\">\n\n      <ion-col size=\"12\" size-sm=\"12\">\n        <ion-card class=\"curve-borders\">\n          <ion-card-header >\n              <div ><ion-img src=\"../../assets/images/logo.jpg\"></ion-img></div>\n          </ion-card-header>\n\n        </ion-card>\n        <ion-card size-md=\"12\" size-sm=\"12\" class=\"login-container\">\n\n          <ion-card-content>\n            <ion-item>\n              <ion-label position=\"floating\"><ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\n                Email Address</ion-label>\n              <ion-input type=\"text\" ngModel name=\"email\" id=\"email\" placeholder=\"Email Address\" required email #emailCtrl=\"ngModel\"></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"!emailCtrl.valid && emailCtrl.touched\" lines=\"none\" class=\"errorMsg\">\n              <ion-label>Please enter valid email address</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\"><ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon> Password</ion-label>\n              <ion-input type=\"password\" ngModel name=\"pwd\" id=\"pwd\" placeholder=\"Password\" required minlength=\"6\" #pwdCtrl=\"ngModel\"></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"!pwdCtrl.valid && pwdCtrl.touched\" lines=\"none\" class=\"errorMsg\">\n              <ion-label>Password should be 6 character long</ion-label>\n            </ion-item>\n            <ion-button type=\"submit\" [disabled]=\"!f.valid\">{{ isLogin ? 'Login': 'Signup'}}</ion-button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n        <ion-card class=\"transparent-card\">\n          <ion-card-content color=\"light\" class=\"ion-text-center \">\n            <h2>  New User?</h2>\n            <ion-button expand=\"full\" routerLink=\"/signup\" fill=\"clear\">Signup!</ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </form>\n\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map