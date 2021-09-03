(self["webpackChunkmytek_mobile_app"] = self["webpackChunkmytek_mobile_app"] || []).push([["common"],{

/***/ 6633:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 3150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 2954);
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ 7279);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 7330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 2377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 2954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 1269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 7357:
/*!*******************************************************************!*\
  !*** ./src/app/registrations/thankyou/thankyou-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankyouPageRoutingModule": () => (/* binding */ ThankyouPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _thankyou_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thankyou.page */ 2855);




const routes = [
    {
        path: '',
        component: _thankyou_page__WEBPACK_IMPORTED_MODULE_0__.ThankyouPage
    }
];
let ThankyouPageRoutingModule = class ThankyouPageRoutingModule {
};
ThankyouPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ThankyouPageRoutingModule);



/***/ }),

/***/ 4033:
/*!***********************************************************!*\
  !*** ./src/app/registrations/thankyou/thankyou.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankyouPageModule": () => (/* binding */ ThankyouPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _thankyou_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thankyou-routing.module */ 7357);
/* harmony import */ var _thankyou_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thankyou.page */ 2855);
/* harmony import */ var src_app_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/header/header.component */ 9470);
/* harmony import */ var src_app_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/footer/footer.component */ 5227);









let ThankyouPageModule = class ThankyouPageModule {
};
ThankyouPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _thankyou_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThankyouPageRoutingModule
        ],
        declarations: [_thankyou_page__WEBPACK_IMPORTED_MODULE_1__.ThankyouPage, src_app_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, src_app_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent]
    })
], ThankyouPageModule);



/***/ }),

/***/ 2855:
/*!*********************************************************!*\
  !*** ./src/app/registrations/thankyou/thankyou.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankyouPage": () => (/* binding */ ThankyouPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_thankyou_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./thankyou.page.html */ 4322);
/* harmony import */ var _thankyou_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thankyou.page.scss */ 3466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ThankyouPage = class ThankyouPage {
    constructor() { }
    ngOnInit() {
    }
};
ThankyouPage.ctorParameters = () => [];
ThankyouPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-thankyou',
        template: _raw_loader_thankyou_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_thankyou_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ThankyouPage);



/***/ }),

/***/ 3216:
/*!**************************************************!*\
  !*** ./src/app/services/registration.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationService": () => (/* binding */ RegistrationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 6858);
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ 1953);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ 138);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 9865);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 7905);

/* eslint-disable @typescript-eslint/naming-convention */








let RegistrationService = class RegistrationService {
    constructor(httpService, http, fileChooser, file, filePath, transfer) {
        this.httpService = httpService;
        this.http = http;
        this.fileChooser = fileChooser;
        this.file = file;
        this.filePath = filePath;
        this.transfer = transfer;
        this.fileTransfer = this.transfer.create();
    }
    uploadImage(blobData, fieldName, user_id, token) {
        const formData = new FormData();
        formData.append('files', blobData);
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                Authorization: 'Bearer ' + token
            })
        };
        const postData = { image: blobData, user_id, field_name: fieldName };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'upload-image';
        return this.http.post(url, postData, httpHeader);
    }
    uploadImageFile(file, token, fieldName, user_id) {
        const postData = { image: file, user_id, field_name: fieldName };
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                // 'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + token
            })
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'upload-image';
        return this.http.post(url, postData, httpHeader);
    }
    get_categories(token) {
        // const httpHeader = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     'Authorization': 'Bearer '+token })
        // };
        // const url = environment.apiUrl + 'categories';
        return this.httpService.get('categories', token);
    }
    get_states(token) {
        return this.httpService.get('states', token);
    }
    selectFile() {
        const options = { mime: 'application/pdf' };
        return this.fileChooser.open(options);
    }
    get_districts(state_id, token) {
        return this.httpService.find('get_districts', { state_id }, token);
    }
    get_talukas(district_id, token) {
        return this.httpService.find('get_talukas', { district_id }, token);
    }
    register(postData, token) {
        return this.httpService.find('registration', postData, token);
    }
    makeBuffer(_imagePath, token, user_id) {
        // return new Promise((resolve, reject) => {
        let fileName;
        return this.filePath
            .resolveNativePath(_imagePath)
            .then(file_path => {
            console.log('path', file_path);
            const path_split = file_path.split('/');
            fileName = path_split[path_split.length - 1];
            this.uploadFile(file_path, fileName, token, user_id);
            const dirPath = 'file:///storage/emulated/0/' + path_split.splice(path_split.length - 2, 1) + '/';
            console.log('fileName', fileName);
            console.log('dirPath', dirPath);
            return this.file.readAsArrayBuffer(dirPath, fileName);
        });
    }
    uploadFile(path, name, token, user_id) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                Authorization: 'Bearer ' + token
            })
        };
        const options = {
            fileKey: 'file',
            fileName: name,
            headers: httpHeader,
            httpMethod: 'POST',
            mimeType: 'file/pdf',
            params: { user_id: user_id }
        };
        const endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'upload-image';
        this.fileTransfer.upload(path, endpoint, options)
            .then((data) => {
            console.log('upload success', data);
        }, (err) => {
            console.log('upload error', err);
        });
    }
    makeBlob(_imagePath, token, user_id) {
        return this.makeBuffer(_imagePath, token, user_id)
            .then((buffer) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('buffer', buffer);
            // get the buffer and make a blob to be saved
            const imgBlob = new Blob([buffer], {
                type: 'image/jpeg'
            });
            console.log(imgBlob);
            return imgBlob;
            // this.uploadImage(imgBlob, fileName, userId, token).subscribe(res => {
            //   console.log('uploaded',res);
            // }, error => console.log('upload error',error));
            //   console.log('BLOB ==>',imgBlob);
            //   console.log(imgBlob.type, imgBlob.size);
        }));
    }
    makeFileIntoBlob(_imagePath, accessToken, userId) {
        // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
        return new Promise((resolve, reject) => {
            //  let fileName = '';
            this.makeBuffer(_imagePath, accessToken, userId)
                .then(buffer => {
                // get the buffer and make a blob to be saved
                const imgBlob = new Blob([buffer], {
                    type: 'image/jpeg'
                });
                console.log(imgBlob, imgBlob.size);
                resolve(imgBlob);
            })
                .catch(e => reject(e));
        });
    }
};
RegistrationService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_2__.FileChooser },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__.FilePath },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__.FileTransfer }
];
RegistrationService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], RegistrationService);



/***/ }),

/***/ 8205:
/*!***********************************************************!*\
  !*** ./src/app/tenders/details/details-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": () => (/* binding */ DetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 5754);




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ 5811:
/*!***************************************************!*\
  !*** ./src/app/tenders/details/details.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageModule": () => (/* binding */ DetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 8205);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 5754);
/* harmony import */ var src_app_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/header/header.component */ 9470);
/* harmony import */ var src_app_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/footer/footer.component */ 5227);









let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage, src_app_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, src_app_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent]
    })
], DetailsPageModule);



/***/ }),

/***/ 5754:
/*!*************************************************!*\
  !*** ./src/app/tenders/details/details.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./details.page.html */ 5637);
/* harmony import */ var _details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page.scss */ 1238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/auth-constant */ 644);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);
/* harmony import */ var _services_tenders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tenders.service */ 1287);









let DetailsPage = class DetailsPage {
    constructor(router, storageService, tenderService, alertCtrl, route) {
        this.router = router;
        this.storageService = storageService;
        this.tenderService = tenderService;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.tender = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.storageService.get(src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_2__.AuthConstants.AUTH).then(res => {
            if (res) {
                this.accessToken = res.token;
                this.userId = res.id;
                this.tenderService.tenderDetails(this.tenderId, this.accessToken).subscribe((response) => {
                    this.isLoading = false;
                    if (response.status == 'success') {
                        this.tender = response.data;
                    }
                });
            }
            else {
                this.router.navigate(['auth']);
            }
        });
        this.tenderId = this.route.snapshot.paramMap.get('tenderId');
        // console.log(this.tenderId);
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
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _services_tenders_service__WEBPACK_IMPORTED_MODULE_4__.TendersService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
DetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-details',
        template: _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetailsPage);



/***/ }),

/***/ 6459:
/*!*****************************************************************!*\
  !*** ./src/app/tenders/milestones/milestones-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MilestonesPageRoutingModule": () => (/* binding */ MilestonesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _milestones_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./milestones.page */ 1947);




const routes = [
    {
        path: '',
        component: _milestones_page__WEBPACK_IMPORTED_MODULE_0__.MilestonesPage
    }
];
let MilestonesPageRoutingModule = class MilestonesPageRoutingModule {
};
MilestonesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MilestonesPageRoutingModule);



/***/ }),

/***/ 5922:
/*!*********************************************************!*\
  !*** ./src/app/tenders/milestones/milestones.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MilestonesPageModule": () => (/* binding */ MilestonesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _milestones_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./milestones-routing.module */ 6459);
/* harmony import */ var _milestones_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./milestones.page */ 1947);
/* harmony import */ var src_app_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/header/header.component */ 9470);
/* harmony import */ var src_app_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/footer/footer.component */ 5227);









let MilestonesPageModule = class MilestonesPageModule {
};
MilestonesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _milestones_routing_module__WEBPACK_IMPORTED_MODULE_0__.MilestonesPageRoutingModule
        ],
        declarations: [_milestones_page__WEBPACK_IMPORTED_MODULE_1__.MilestonesPage, src_app_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, src_app_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent]
    })
], MilestonesPageModule);



/***/ }),

/***/ 1947:
/*!*******************************************************!*\
  !*** ./src/app/tenders/milestones/milestones.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MilestonesPage": () => (/* binding */ MilestonesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_milestones_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./milestones.page.html */ 6517);
/* harmony import */ var _milestones_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./milestones.page.scss */ 4339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_tenders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tenders.service */ 1287);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ 1188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _config_auth_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/auth-constant */ 644);








let MilestonesPage = class MilestonesPage {
    constructor(tenderService, router, storageService, route) {
        this.tenderService = tenderService;
        this.router = router;
        this.storageService = storageService;
        this.route = route;
        this.Milestones = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.tender_id = this.route.snapshot.paramMap.get('tenderId');
        this.storageService.get(_config_auth_constant__WEBPACK_IMPORTED_MODULE_4__.AuthConstants.AUTH).then(res => {
            // console.log(res.name);
            if (res) {
                this.accessToken = res.token;
                this.tenderService.getTenderMilestones(this.tender_id, this.accessToken).subscribe((response) => {
                    this.isLoading = false;
                    // this.Tenders = [];
                    // this.Milestones = response;
                    if (response.status == 'success')
                        this.Milestones = response.data;
                    // console.log(response);
                });
            }
            else {
                this.router.navigate(['auth']);
            }
        });
        // console.log(this.tender_id);
    }
};
MilestonesPage.ctorParameters = () => [
    { type: _services_tenders_service__WEBPACK_IMPORTED_MODULE_2__.TendersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
MilestonesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-milestones',
        template: _raw_loader_milestones_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_milestones_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MilestonesPage);



/***/ }),

/***/ 3466:
/*!***********************************************************!*\
  !*** ./src/app/registrations/thankyou/thankyou.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-grid {\n  height: 100%;\n  background: linear-gradient(#5a99fe, #5967ff) !important;\n  color: #ffffff;\n}\n\nion-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\nh1 {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoYW5reW91LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx3REFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRiIsImZpbGUiOiJ0aGFua3lvdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoICM1YTk5ZmUsICM1OTY3ZmYpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tcm93e1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbmgxe1xuICBmb250LXdlaWdodDogNzAwO1xufVxuIl19 */");

/***/ }),

/***/ 1238:
/*!***************************************************!*\
  !*** ./src/app/tenders/details/details.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 4339:
/*!*********************************************************!*\
  !*** ./src/app/tenders/milestones/milestones.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  margin: 0;\n  border-radius: 0;\n}\n\n.btn-grad {\n  --background: linear-gradient(to right, #eae8ea 0%, rgb(255, 255, 255) 100%);\n  margin: 0 20px;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  margin-bottom: 15px;\n}\n\n.btn-grad h2 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #313469;\n}\n\n.btn-grad > ion-icon {\n  background: #d0d1d4;\n  padding: 10px;\n  border-radius: 50%;\n}\n\nion-content, ion-list {\n  --background: #eef1f4;\n  background: #eef1f4;\n}\n\n.footer-link {\n  --background: linear-gradient(87deg, #5967ff 0, #5a99fe 100%) !important;\n}\n\n.ion-color-danger {\n  background: linear-gradient(87deg, #f5365c 0, #f56036 100%) !important;\n}\n\n.transparent-card {\n  background: transparent;\n  box-shadow: none;\n  padding: 15px 10px;\n}\n\n.transparent-card h1 {\n  font-size: 24px;\n  font-weight: 600;\n  color: #313469;\n}\n\n.icon {\n  display: inline-block;\n  font-size: 35px;\n  color: #ffC977;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.filter_options {\n  font-size: 14px;\n  color: #000000;\n}\n\n.filter_options ion-icon {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbGVzdG9uZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSw0RUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlIQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSx3RUFBQTtBQUVGOztBQUFBO0VBQ0Usc0VBQUE7QUFHRjs7QUFEQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBQUM7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBR0g7O0FBREE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0Usc0JBQUE7QUFLRiIsImZpbGUiOiJtaWxlc3RvbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNhcmR7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmJ0bi1ncmFkIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlYWU4ZWEgMCUsIHJnYigyNTUsIDI1NSwgMjU1KSAxMDAlKTtcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDNweCAxcHggLTJweCwgcmdiKDAgMCAwIC8gMTQlKSAwcHggMnB4IDJweCAwcHgsIHJnYigwIDAgMCAvIDEyJSkgMHB4IDFweCA1cHggMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmJ0bi1ncmFkIGgye1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzEzNDY5O1xufVxuXG4uYnRuLWdyYWQgPiBpb24taWNvbntcbiAgYmFja2dyb3VuZDogI2QwZDFkNDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuaW9uLWNvbnRlbnQsIGlvbi1saXN0e1xuICAtLWJhY2tncm91bmQ6ICNlZWYxZjQ7XG4gIGJhY2tncm91bmQ6ICNlZWYxZjQ7XG59XG5cbi5mb290ZXItbGlua3tcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODdkZWcsICM1OTY3ZmYgMCwgIzVhOTlmZSAxMDAlKSAhaW1wb3J0YW50O1xufVxuLmlvbi1jb2xvci1kYW5nZXJ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4N2RlZywgI2Y1MzY1YyAwLCAjZjU2MDM2IDEwMCUpICFpbXBvcnRhbnQ7XG59XG4udHJhbnNwYXJlbnQtY2FyZHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbn1cblxuLnRyYW5zcGFyZW50LWNhcmQgaDF7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMTM0Njk7XG5cbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICNmZkM5Nzc7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gfVxuXG4gLnRleHR7XG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuIH1cbi5maWx0ZXJfb3B0aW9uc3tcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5maWx0ZXJfb3B0aW9ucyBpb24taWNvbntcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 4322:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registrations/thankyou/thankyou.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content center text-center>\n  <ion-grid>\n    <ion-row center>\n      <ion-col class=\"ion-text-center\">\n        <h1 text-uppercase no-padding no-margin>Thank you for registering with us.</h1>\n        <h3 no-padding no-margin>We will notify you once the admin approves your request.</h3>\n        <ion-button color=\"light\" routerLink=\"/home\">Go Back</ion-button>\n\n      </ion-col>\n\n</ion-row>\n\n\n  </ion-grid>\n\n</ion-content>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ 5637:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tenders/details/details.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"ion-text-center\"  *ngIf=\"isLoading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n\n      </div>\n\n    </ion-col>\n  </ion-row>\n\n  <ion-grid class=\"ion-no-padding\"  *ngIf=\"!isLoading\">\n\n  <ion-card >\n    <ion-card-header><h2>{{tender.name}}</h2></ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"12\">\n          <strong>Category: </strong>{{tender.category}}\n          <hr>\n        </ion-col  >\n        <ion-col size=12>\n          <ion-label><strong>Work Locations: </strong></ion-label>\n          <div *ngFor=\"let loc of tender.work_location \">\n          <p>    <strong>State: </strong>{{loc.state}} </p>\n          <p>    <strong>Districts: </strong>{{loc.districts}} </p>\n          <p>    <strong>Talukas: </strong>{{loc.talukas}} </p>\n          <hr>\n        </div>\n        </ion-col>\n        <ion-col size=12>\n          <strong>Scope of work: </strong>{{tender.scope}}\n        </ion-col  >\n\n        <ion-col size=12>\n          <ion-button (click)=\"submitRequest(tender.id)\" class=\"ion-text-center\"  *ngIf=\" tender.request_status == null\" >Submit Request</ion-button>\n\n        </ion-col>\n      </ion-row>\n\n\n    </ion-card-content>\n  </ion-card>\n</ion-grid>\n\n</ion-content>\n<app-footer></app-footer>\n");

/***/ }),

/***/ 6517:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tenders/milestones/milestones.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content >\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"ion-text-center\"  *ngIf=\"isLoading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n\n      </div>\n      <div class=\"ion-text-center\" *ngIf=\"!isLoading && Milestones.length <= 0\">\n\n      <p > No Milestones Found !</p>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-grid class=\"ion-no-padding\"  *ngIf=\"!isLoading && Milestones.length > 0\">\n    <ion-card class=\"transparent-card\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\" size-sm=\"6\">\n\n\n            <h1> Milestones</h1>\n\n\n      </ion-col>\n      <ion-col size=\"6\" size-sm=\"6\">\n\n     <!-- <span class=\"filter_options\">Location <ion-icon name=\"chevron-down-circle-outline\" color=\"primary\"></ion-icon></span>\n        &nbsp;&nbsp;\n    <span class=\"filter_options\">Category <ion-icon name=\"chevron-down-circle-outline\" color=\"primary\"></ion-icon></span> -->\n  </ion-col>\n      </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n\n\n    <ion-card class=\"btn-grad\"  *ngFor=\"let row of Milestones\" >\n      <ion-card-content>\n        <ion-row >\n          <ion-col size=\"6\" size-sm=\"6\" >\n             <h2>{{row.name}}</h2>\n              <p>{{row.from_date}} To {{row.to_date}}</p>\n            </ion-col>\n\n          <ion-col size=\"6\" class=\"ion-text-right\">\n            <ion-button color=\"primary\" [routerLink]=\"['/', 'submit-report', row.tender_id]\" >Report</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n\n  </ion-grid>\n</ion-content>\n<app-footer></app-footer>\n");

/***/ })

}]);
//# sourceMappingURL=common.js.map