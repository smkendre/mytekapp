(self["webpackChunkmytek_mobile_app"] = self["webpackChunkmytek_mobile_app"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/footer/footer.component */ 5227);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _config_auth_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/auth-constant */ 644);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 1188);







let HomePage = class HomePage {
    constructor(router, storageService) {
        this.router = router;
        this.storageService = storageService;
        this.isLoading = true;
        this.slideOpts = {
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true,
                    };
                    swiper.params = Object.assign(swiper.params, overwriteParams);
                    swiper.params = Object.assign(swiper.originalParams, overwriteParams);
                },
                setTranslate() {
                    const swiper = this;
                    const { slides } = swiper;
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = swiper.slides.eq(i);
                        const offset$$1 = $slideEl[0].swiperSlideOffset;
                        let tx = -offset$$1;
                        if (!swiper.params.virtualTranslate)
                            tx -= swiper.translate;
                        let ty = 0;
                        if (!swiper.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        const slideOpacity = swiper.params.fadeEffect.crossFade
                            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
                            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                        $slideEl
                            .css({
                            opacity: slideOpacity,
                        })
                            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    const { slides, $wrapperEl } = swiper;
                    slides.transition(duration);
                    if (swiper.params.virtualTranslate && duration !== 0) {
                        let eventTriggered = false;
                        slides.transitionEnd(() => {
                            if (eventTriggered)
                                return;
                            if (!swiper || swiper.destroyed)
                                return;
                            eventTriggered = true;
                            swiper.animating = false;
                            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                            for (let i = 0; i < triggerEvents.length; i += 1) {
                                $wrapperEl.trigger(triggerEvents[i]);
                            }
                        });
                    }
                },
            }
        };
    }
    ngOnInit() {
        // this.slides.startAutoplay();
        this.storageService.get(_config_auth_constant__WEBPACK_IMPORTED_MODULE_2__.AuthConstants.AUTH).then(res => {
            //  console.log(res.status);
            if (res) {
                this.isLoading = false;
                this.userId = res.id;
                this.accessToken = res.token;
                this.userStatus = res.status;
            }
            else {
                this.router.navigate(['auth']);
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
HomePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['slides', { static: true },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



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

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  margin: 0;\n  border-radius: 0;\n}\n\n.drawer-menu {\n  --background: transparent;\n  --box-shadow: none;\n  --color: #000000;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.btn-grad {\n  --background: linear-gradient(to right, #eae8ea 0%, rgb(255, 255, 255) 100%);\n  margin: 0 20px;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  margin-bottom: 10px;\n}\n\n.btn-grad h2 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #313469;\n}\n\n.btn-grad > ion-icon {\n  background: #d0d1d4;\n  padding: 10px;\n  border-radius: 50%;\n}\n\nion-list {\n  background: #eef1f4;\n}\n\n.footer-link {\n  --background: linear-gradient(87deg, #5967ff 0, #5a99fe 100%) !important;\n}\n\nion-slides {\n  height: 260px;\n}\n\n.bg-1 {\n  background: url('home-slide-1.jpeg') no-repeat center center;\n  background-size: cover;\n}\n\n.bg-2 {\n  background: url('home-slide-2.jpg') no-repeat center center;\n  background-size: cover;\n}\n\n.bg-3 {\n  background: url('home-slide-3.jpg') no-repeat center center;\n  background-size: cover;\n}\n\n.bg-4 {\n  background: url('home-slide-4.jpg') no-repeat center center;\n  background-size: cover;\n}\n\n.bg-5 {\n  background: url('home-slide-5.jpg') no-repeat center center;\n  background-size: cover;\n}\n\nion-slide {\n  position: relative;\n}\n\n.bg-1 ion-title {\n  vertical-align: bottom;\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  color: #fff;\n  font-weight: bolder;\n  background: rgba(0, 0, 0, 0.3);\n  text-transform: uppercase;\n}\n\n.bg-2 ion-title {\n  vertical-align: bottom;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #fff;\n  font-weight: bolder;\n  background: rgba(0, 0, 0, 0.3);\n  text-transform: uppercase;\n  width: 325px;\n  height: 70px;\n}\n\n.bg-4 ion-title {\n  vertical-align: bottom;\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  color: #fff;\n  font-weight: bolder;\n  background: rgba(0, 0, 0, 0.3);\n  text-transform: uppercase;\n}\n\n.bg-5 ion-title {\n  vertical-align: bottom;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #fff;\n  font-weight: bolder;\n  background: rgba(0, 0, 0, 0.3);\n  text-transform: uppercase;\n  width: 325px;\n  height: 70px;\n}\n\n.bg-3 ion-title {\n  vertical-align: bottom;\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  color: #fff;\n  font-weight: bolder;\n  background: rgba(0, 0, 0, 0.3);\n  text-transform: uppercase;\n}\n\nion-footer {\n  background-color: #FAFBFD;\n  text-align: center;\n}\n\nion-footer::before {\n  background-image: none;\n}\n\nion-footer ion-button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFFRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBR0E7RUFDRSw0RUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlIQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUNDO0VBQ0Msd0VBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFBQTtFQUVFLDREQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFBQTtFQUVFLDJEQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFBQTtFQUVFLDJEQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFBQTtFQUVFLDJEQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFBQTtFQUVFLDJEQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQURGOztBQUtBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQUZGOztBQU9BO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0Usc0JBQUE7QUFKRjs7QUFNQTtFQUNFLFNBQUE7QUFIRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNhcmR7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmRyYXdlci1tZW51e1xuICAvLyAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNvbG9yOiAjMDAwMDAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG59XG4uYnRuLWdyYWQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VhZThlYSAwJSwgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCUpO1xuICBtYXJnaW46IDAgMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggM3B4IDFweCAtMnB4LCByZ2IoMCAwIDAgLyAxNCUpIDBweCAycHggMnB4IDBweCwgcmdiKDAgMCAwIC8gMTIlKSAwcHggMXB4IDVweCAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYnRuLWdyYWQgaDJ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMTM0Njk7XG59XG5cbi5idG4tZ3JhZCA+IGlvbi1pY29ue1xuICBiYWNrZ3JvdW5kOiAjZDBkMWQ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pb24tbGlzdHtcbiAgYmFja2dyb3VuZDogI2VlZjFmNDtcbn1cblxuIC5mb290ZXItbGlua3tcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODdkZWcsICM1OTY3ZmYgMCwgIzVhOTlmZSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAyNjBweDtcbn1cbi5iZy0xIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwYWNjMTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUtc2xpZGUtMS5qcGVnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uYmctMiB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmYmMwMmQ7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLXNsaWRlLTIuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uYmctMyB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM3Y2IzNDI7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLXNsaWRlLTMuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uYmctNCB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM3Y2IzNDI7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLXNsaWRlLTQuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uYmctNSB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM3Y2IzNDI7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLXNsaWRlLTUuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmlvbi1zbGlkZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmctMSBpb24tdGl0bGV7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi5iZy0yIGlvbi10aXRsZXtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogMzI1cHg7XG4gIGhlaWdodDogNzBweDtcbn1cblxuXG4uYmctNCBpb24tdGl0bGV7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi5iZy01IGlvbi10aXRsZXtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogMzI1cHg7XG4gIGhlaWdodDogNzBweDtcbn1cblxuXG4uYmctMyBpb24tdGl0bGV7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxufVxuXG5cbmlvbi1mb290ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZCRkQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuaW9uLWZvb3Rlcjo6YmVmb3Jle1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuaW9uLWZvb3RlciBpb24tYnV0dG9ue1xuICBtYXJnaW46IDA7XG59XG4iXX0= */");

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

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<app-header></app-header>\n\n\n<ion-content>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"ion-text-center\"  *ngIf=\"isLoading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n\n      </div>\n\n    </ion-col>\n  </ion-row>\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"!isLoading\">\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"6\" offset-sm=\"3\" class=\"ion-text-center\">\n\n        <ion-slides #slides  autoplay=\"true\" [options]=\"slideOpts\" pager=\"true\">\n          <ion-slide class=\"bg-1\">\n            <ion-title>CCTV</ion-title>\n          </ion-slide>\n          <ion-slide class=\"bg-2\">\n            <ion-title>Integrated command</ion-title>\n\n          </ion-slide>\n          <ion-slide class=\"bg-3\">\n            <ion-title>Electrical Works</ion-title>\n\n          </ion-slide>\n          <ion-slide class=\"bg-4\">\n            <ion-title>Civil Works</ion-title>\n\n          </ion-slide>\n          <ion-slide class=\"bg-5\">\n            <ion-title>Solar Panel Works</ion-title>\n\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\n        <ion-list>\n          <ion-item [routerLink]=\"['/','tenders']\" detail class=\"btn-grad\">\n            <ion-thumbnail slot=\"start\">\n              <ion-img src=\"../assets/01-05.png\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n\n            <h2>Tenders</h2>\n\n          </ion-label>\n          </ion-item>\n          <ion-item [routerLink]=\"['/','my-tenders']\" detail class=\"btn-grad\">\n            <ion-thumbnail slot=\"start\">\n              <ion-img src=\"../assets/01-06.png\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n\n            <h2>My Tenders</h2>\n\n          </ion-label>\n          </ion-item>\n          <ion-item [routerLink]=\"['/', 'material-request-list']\" detail class=\"btn-grad\">\n            <ion-thumbnail slot=\"start\">\n              <ion-img src=\"../assets/01-07.png\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n\n            <h2>Material Request</h2>\n\n          </ion-label>\n          </ion-item>\n          <ion-item [routerLink]=\"['/', 'reports']\" detail class=\"btn-grad\">\n            <ion-thumbnail slot=\"start\">\n              <ion-img src=\"../assets/01-08.png\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n\n            <h2>My Reports</h2>\n\n          </ion-label>\n        </ion-item>\n        <ion-item [routerLink]=\"['/', 'invoice']\" detail class=\"btn-grad\">\n          <ion-thumbnail slot=\"start\">\n            <ion-img src=\"../assets/01-09.png\"></ion-img>\n          </ion-thumbnail>\n          <ion-label>\n\n          <h2>My Invoices</h2>\n\n        </ion-label>\n      </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<app-footer></app-footer>\n");

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
//# sourceMappingURL=src_app_home_home_module_ts.js.map