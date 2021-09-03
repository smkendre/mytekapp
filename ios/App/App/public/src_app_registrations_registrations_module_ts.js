(self["webpackChunkmytek_mobile_app"] = self["webpackChunkmytek_mobile_app"] || []).push([["src_app_registrations_registrations_module_ts"],{

/***/ 3105:
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ 8460:
/*!***************************************************************!*\
  !*** ./src/app/registrations/registrations-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationsPageRoutingModule": () => (/* binding */ RegistrationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _registrations_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrations.page */ 3469);




const routes = [
    {
        path: '',
        component: _registrations_page__WEBPACK_IMPORTED_MODULE_0__.RegistrationsPage
    },
    {
        path: 'thankyou',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./thankyou/thankyou.module */ 4033)).then(m => m.ThankyouPageModule)
    }
];
let RegistrationsPageRoutingModule = class RegistrationsPageRoutingModule {
};
RegistrationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistrationsPageRoutingModule);



/***/ }),

/***/ 5524:
/*!*******************************************************!*\
  !*** ./src/app/registrations/registrations.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationsPageModule": () => (/* binding */ RegistrationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _registrations_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrations-routing.module */ 8460);
/* harmony import */ var _registrations_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registrations.page */ 3469);
/* harmony import */ var _shared_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/image-picker/image-picker.component */ 4581);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/footer/footer.component */ 5227);










let RegistrationsPageModule = class RegistrationsPageModule {
};
RegistrationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _registrations_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrationsPageRoutingModule
        ],
        declarations: [_registrations_page__WEBPACK_IMPORTED_MODULE_1__.RegistrationsPage, _shared_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_2__.ImagePickerComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent],
        exports: [_shared_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_2__.ImagePickerComponent]
    })
], RegistrationsPageModule);



/***/ }),

/***/ 3469:
/*!*****************************************************!*\
  !*** ./src/app/registrations/registrations.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationsPage": () => (/* binding */ RegistrationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registrations_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registrations.page.html */ 1433);
/* harmony import */ var _registrations_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registrations.page.scss */ 1251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _config_auth_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/auth-constant */ 644);
/* harmony import */ var _services_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/registration.service */ 3216);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ 1188);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/camera */ 7673);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 9865);












let RegistrationsPage = class RegistrationsPage {
    constructor(router, registrationService, storageService, alertCtrl, actionSheetController, platform, authService, filePath) {
        this.router = router;
        this.registrationService = registrationService;
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.authService = authService;
        this.filePath = filePath;
        this.areaOfInterst = [];
        this.workLocations = [];
        this.isLoading = false;
        this.toggleDisplay = false;
        this.stateValue = '';
        this.districtValue = [];
        this.talukaValue = [];
        // toggle.contact = false;
        this.interested = [];
        this.iLikeIt = { isChecked: false };
        this.images = [];
        this.compareWithFn = (o1, o2) => {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
    }
    ngOnInit() {
        this.isLoading = true;
        this.storageService.get(_config_auth_constant__WEBPACK_IMPORTED_MODULE_2__.AuthConstants.AUTH).then(res => {
            console.log(res);
            if (res) {
                this.accessToken = res.token;
                this.username = res.name;
                this.userId = res.id;
                this.loadAllData();
            }
            else {
                this.router.navigate(['auth']);
            }
        });
        this.compareWith = this.compareWithFn;
    }
    addPreferedLocation() {
        // console.log(this.states.find(x => x.id === this.stateValue));
        const location = {
            state: this.states.find(x => x.id === this.stateValue).name,
            district: this.getdistricts(),
            taluka: this.getTalukas(),
        };
        this.workLocations.push(location);
        this.stateValue = null;
        this.districtValue = this.talukaValue = [];
    }
    getdistricts() {
        const districtArray = [];
        this.districtValue.forEach(dist => {
            // get district name
            const name = this.work_districts.find(x => x.id === dist).name;
            districtArray.push(name);
        });
        return districtArray;
    }
    getTalukas() {
        const talukaArray = [];
        this.talukaValue.forEach(talukaID => {
            console.log(this.work_talukas);
            console.log(this.work_talukas.find(x => x.id === talukaID));
            // get taluka name
            const name = this.work_talukas.find(x => x.id === talukaID).name;
            talukaArray.push(name);
        });
        return talukaArray;
    }
    removeLocation(index) {
        // console.log(index);
        this.workLocations.splice(index, 1);
    }
    loadAllData() {
        this.registrationService.get_states(this.accessToken).subscribe((response) => {
            if (response.status === 'success') {
                this.states = response.data;
                //   this.storageService.store('categories', response.data);
            }
        });
        this.authService.user_details({ user_id: this.userId }, this.accessToken).subscribe(response => {
            if (response.status == 'success') {
                this.user = response.data;
                this.uname = response.data.name;
                this.cname = response.data.cname;
                this.addr = response.data.addr;
                this.area_of_interest = this.interested = JSON.parse(response.data.area_of_interest);
                this.stateValue = response.data.state;
                this.districtValue = response.data.district;
                this.talukaValue = response.data.taluka;
                this.gst_num = response.data.gst_num;
                this.reg_num = response.data.reg_num;
                this.pan_num = response.data.pan_num;
                this.adhaar_num = response.data.adhaar_num;
                this.workLocations = response.data.locations;
            }
            //  console.log(this.user);
        });
        this.registrationService.get_categories(this.accessToken).subscribe((response) => {
            if (response.status === 'success') {
                this.areaOfInterst = response.data;
                this.isLoading = false;
            }
        });
    }
    onStateChange(event, field) {
        const stateID = event.target.value;
        console.log('stateID', stateID);
        this.registrationService.get_districts(stateID, this.accessToken).subscribe((response) => {
            if (response.status === 'success') {
                if (field == 'address') {
                    this.districts = response.data;
                }
                else {
                    this.work_districts = response.data;
                    console.log(this.work_districts);
                }
            }
        }, error => console.log(error));
    }
    onDistrictChange(event, field) {
        const districtId = event.target.value;
        console.log('districtId', districtId);
        this.registrationService.get_talukas(districtId, this.accessToken).subscribe((response) => {
            if (response.status === 'success') {
                if (field === 'address') {
                    this.talukas = response.data;
                }
                else {
                    this.work_talukas = response.data;
                    console.log('work_talukas', this.work_talukas);
                }
            }
        }, error => console.log(error));
    }
    toggleOtherField() {
        this.toggleDisplay = !this.toggleDisplay;
    }
    onSelect(selectedVal) {
        this.interested.push(selectedVal);
    }
    selectImageSource(fileName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const buttons = [
                {
                    text: 'Take Photo',
                    icon: 'Camera',
                    handler: () => {
                        this.addImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraSource.Camera, fileName);
                    }
                },
                {
                    text: 'Choose from Gallery',
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
                        this.registrationService.selectFile().then(uri => {
                            this.registrationService.makeFileIntoBlob(uri, this.accessToken, this.userId).then(res => {
                                console.log('RESPONSE', res);
                            }).catch(err => console.log(err));
                            //   this.filePath.resolveNativePath(uri)
                            //     .then(async (filePath) => {
                            //         this.updatedocumentLink(fileName, filePath);
                            //        await this.registrationService.makeBlob(uri).then((buffer) => {
                            //           console.log('blob',buffer);
                            //           const imgBlob = new Blob([buffer], {
                            //             type: 'image/jpeg'
                            //           });
                            //           const blobFile = imgBlob;
                            //           console.log('BLOB_FILE => ', blobFile);
                            //         }).catch(error => console.log('BLOB ERROR', error));
                            //     })
                            //     .catch(err => console.log('fileResolve ERROR', err));
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
    updateImagePreview(fileName, image) {
        if (fileName === 'gst_certificate') {
            this.imageUrl = image;
        }
        if (fileName === 'reg_certificate') {
            this.RegimageUrl = image;
        }
        if (fileName === 'pan_card') {
            this.PanimageUrl = image;
        }
        if (fileName === 'adhaar_file') {
            this.AdhaarimageUrl = image;
        }
    }
    updatedocumentLink(fileName, url) {
        if (fileName === 'gst_certificate') {
            this.gst_certificate_File = url;
        }
        if (fileName === 'reg_certificate') {
            this.reg_certificate_File = url;
        }
        if (fileName === 'pan_card') {
            this.pan_card_File = url;
        }
        if (fileName === 'adhaar_file') {
            this.adhaar_File = url;
        }
    }
    addImage(source, fileName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.Camera.getPhoto({
                quality: 60,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraResultType.Base64,
                source
            });
            try {
                const imgUrl = 'data:image/jpeg;base64,' + image.base64String;
                this.updateImagePreview(fileName, imgUrl);
                this.registrationService.uploadImage(image.base64String, fileName, this.userId, this.accessToken).subscribe((newImage) => {
                    this.images.push(newImage);
                });
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
            if (fieldName == 'gst_certificate') {
                this.imageUrl = dataUrl;
            }
            if (fieldName == 'reg_certificate') {
                this.RegimageUrl = dataUrl;
            }
            if (fieldName == 'pan_card') {
                this.PanimageUrl = dataUrl;
            }
            if (fieldName == 'adhaar_file') {
                this.AdhaarimageUrl = dataUrl;
            }
            this.registrationService.uploadImageFile(this.imageUrl, this.accessToken, fieldName, this.userId).subscribe((newImage) => {
                this.images.push(newImage);
            });
        };
        fr.readAsDataURL(file);
    }
    base64toBlob(base64Data, contentType) {
        contentType = contentType || '';
        const sliceSize = 1024;
        const byteCharacters = window.atob(base64Data);
        const bytesLength = byteCharacters.length;
        const slicesCount = Math.ceil(bytesLength / sliceSize);
        const byteArrays = new Array(slicesCount);
        for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            const begin = sliceIndex * sliceSize;
            const end = Math.min(begin + sliceSize, bytesLength);
            const bytes = new Array(end - begin);
            for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, { type: contentType });
    }
    onSubmit(form) {
        //  console.log(form.value); return false;
        let postData = {
            'name': form.value.uname,
            'company': form.value.company,
            'area_of_interest': this.interested,
            'address': form.value.address,
            'state': form.value.state,
            'district': form.value.district,
            'taluka': form.value.taluka,
            'gst_num': form.value.gst_num,
            'reg_num': form.value.reg_num,
            'pan_num': form.value.pan_num,
            'adhaar_num': form.value.adhaar_num,
            'user_id': this.userId,
        };
        // let formData = new FormData();
        // formData.append("photo", this.file, this.file.name);
        // this.http.post("http://localhost:3000/upload", formData).subscribe((response) => {
        //   console.log(response);
        // });
        this.registrationService.register(postData, this.accessToken).subscribe(response => {
            if (response.status == 'success') {
                this.router.navigateByUrl('/registration-thankyou');
            }
            else {
                this.showAlert(response.message);
            }
            // console.log(response);
        });
        //this.router.navigateByUrl('/registration-thankyou');
    }
    // uploadPhoto(fileChangeEvent) {
    //   // Get a reference to the file that has just been added to the input
    //   const photo = fileChangeEvent.target.files[0];
    //   // Create a form data object using the FormData API
    //   let formData = new FormData();
    //   // Add the file that was just added to the form data
    //   formData.append("photo", photo, photo.name);
    //   // POST formData to server using HttpClient
    // }
    checkLocationInputs() {
        if (this.stateValue === null || this.districtValue === null || this.talukaValue === null) {
            return true;
        }
        else if (this.districtValue.length === 0 || this.talukaValue.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    showAlert(message) {
        this.alertCtrl
            .create({
            header: 'Alert Message',
            message: message,
            buttons: [{
                    text: 'Okey',
                    handler: () => {
                        this.router.navigate(['registration-thankyou']);
                    }
                }
            ]
        })
            .then(alertEl => alertEl.present());
    }
};
RegistrationsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_registration_service__WEBPACK_IMPORTED_MODULE_3__.RegistrationService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__.FilePath }
];
RegistrationsPage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['fileInput', { static: false },] }]
};
RegistrationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-registrations',
        template: _raw_loader_registrations_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registrations_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistrationsPage);



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

/***/ 4581:
/*!***************************************************************!*\
  !*** ./src/app/shared/image-picker/image-picker.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePickerComponent": () => (/* binding */ ImagePickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_image_picker_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./image-picker.component.html */ 5753);
/* harmony import */ var _image_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-picker.component.scss */ 3198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 7673);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! events */ 3105);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_4__);







let ImagePickerComponent = class ImagePickerComponent {
    constructor() {
        this.imagePick = new events__WEBPACK_IMPORTED_MODULE_4__();
    }
    ngOnInit() { }
    onPickImage() {
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.isPluginAvailable('Camera')) {
            return;
        }
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
            quality: 50,
            source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Prompt,
            correctOrientation: true,
            resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64
        }).then(image => {
            this.selectedImage = image.base64String;
            this.imagePick.emit(image.base64String);
        }).catch(error => {
            console.log(error);
            return false;
        });
    }
};
ImagePickerComponent.ctorParameters = () => [];
ImagePickerComponent.propDecorators = {
    imagePick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
ImagePickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-image-picker',
        template: _raw_loader_image_picker_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_image_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ImagePickerComponent);



/***/ }),

/***/ 1251:
/*!*******************************************************!*\
  !*** ./src/app/registrations/registrations.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".transparent-card {\n  background: transparent;\n  box-shadow: none;\n  padding: 10px 0 0;\n}\n\n.transparent-card h2 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #313469;\n}\n\n.filter_options {\n  font-size: 14px;\n  color: #000000;\n}\n\n.filter_options ion-icon {\n  vertical-align: middle;\n}\n\nion-content {\n  --background: #eef1f4;\n  background: #eef1f4;\n}\n\nion-card {\n  margin: 0;\n  border-radius: 0;\n}\n\nion-list {\n  padding: 0;\n  background: transparent;\n}\n\nion-row {\n  margin-bottom: 10px;\n}\n\nh2 {\n  margin-right: 7px;\n  vertical-align: middle;\n  color: #737373;\n  font-size: 18px;\n}\n\nion-input, ion-textarea, ion-select {\n  --background: linear-gradient(to right, #eae8ea 0%, rgb(255, 255, 255) 100%);\n  margin: 0 0 15px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n}\n\nh1 {\n  font-weight: 700;\n}\n\n.location-card {\n  border-radius: 20px;\n  margin-right: 10px;\n}\n\n.location-card span {\n  font-weight: bold;\n}\n\n.location-card #close {\n  float: right;\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0Usc0JBQUE7QUFFRjs7QUFBQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSw0RUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5SEFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFIRTtFQUNFLGlCQUFBO0FBS0o7O0FBSEU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFLSiIsImZpbGUiOiJyZWdpc3RyYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc3BhcmVudC1jYXJke1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogMTBweCAwIDA7XG59XG5cbi50cmFuc3BhcmVudC1jYXJkIGgye1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzEzNDY5O1xuXG59XG4uZmlsdGVyX29wdGlvbnN7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uZmlsdGVyX29wdGlvbnMgaW9uLWljb257XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWVmMWY0O1xuICBiYWNrZ3JvdW5kOiAjZWVmMWY0O1xufVxuXG5pb24tY2FyZHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5cbmlvbi1saXN0e1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLXJvd3tcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaDJ7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogIzczNzM3MztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5pb24taW5wdXQsIGlvbi10ZXh0YXJlYSwgaW9uLXNlbGVjdHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlYWU4ZWEgMCUsIHJnYigyNTUsIDI1NSwgMjU1KSAxMDAlKTtcbiAgbWFyZ2luOiAwIDAgMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggM3B4IDFweCAtMnB4LCByZ2IoMCAwIDAgLyAxNCUpIDBweCAycHggMnB4IDBweCwgcmdiKDAgMCAwIC8gMTIlKSAwcHggMXB4IDVweCAwcHg7XG59XG5oMXtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5sb2NhdGlvbi1jYXJke1xuICBib3JkZXItcmFkaXVzOjIwcHg7XG4gIG1hcmdpbi1yaWdodDoxMHB4O1xuICBzcGFue1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gICNjbG9zZXtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICB9XG59XG4iXX0= */");

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

/***/ 3198:
/*!*****************************************************************!*\
  !*** ./src/app/shared/image-picker/image-picker.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS1waWNrZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 1433:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registrations/registrations.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n\n  <ion-row *ngIf=\"isLoading\">\n    <ion-col size=\"12\">\n      <div class=\"ion-text-center\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-grid>\n\n    <ion-card class=\"transparent-card\">\n      <ion-card-content>\n        <ion-row class=\"ion-text-center\">\n          <ion-col size=\"12\" size-sm=\"12\">\n            <h1>Registration Form</h1>\n          </ion-col>\n\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n\n    <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\" enctype=\"multipart/form-data\">\n\n      <ion-card class=\"transparent-card\">\n\n        <ion-card-content>\n          <ion-row>\n\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-input type=\"text\" name=\"uname\" [(ngModel)]=\"uname\" placeholder=\"Name *\"></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-input type=\"text\" [(ngModel)]=\"cname\" name=\"company\" placeholder=\"Company Name *\"></ion-input>\n            </ion-col>\n\n\n          </ion-row>\n          <div>\n            <h2>Address</h2>\n            <br>\n\n            <ion-row>\n              <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-textarea col=\"6\" [(ngModel)]=\"addr\" name=\"address\" placeholder=\"Address *\"></ion-textarea>\n              </ion-col>\n\n              <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-select [(ngModel)]=\"stateValue\" name=\"state\" (ionChange)=\"onStateChange($event, 'address')\">\n                  <ion-select-option value=\"\">Select State</ion-select-option>\n                  <ion-select-option *ngFor=\"let state of states\" [value]=\"state.id\">{{state.name}}</ion-select-option>\n                </ion-select>\n              </ion-col>\n              <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-select [(ngModel)]=\"districtValue\" name=\"district\" (ionChange)=\"onDistrictChange($event, 'address')\">\n                  <ion-select-option value=\"\">Select District</ion-select-option>\n                  <ion-select-option *ngFor=\"let dis of districts\" [value]=\"dis.id\">{{dis.name}}</ion-select-option>\n\n                </ion-select>\n              </ion-col>\n              <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-select [(ngModel)]=\"talukaValue\" name=\"taluka\">\n                  <ion-select-option value=\"\">Select Taluka</ion-select-option>\n                  <ion-select-option *ngFor=\"let city of talukas\" [value]=\"city.id\">{{city.name}}</ion-select-option>\n                </ion-select>\n              </ion-col>\n\n\n            </ion-row>\n\n\n        </div>\n<!-- [checked]=\"interested.indexOf(item.name) >= 0\" -->\n          <div *ngIf=\"!isLoading\">\n            <h2>Area of Interest *</h2>\n            <br>\n            <ion-row>\n              <ion-col size=\"6\" *ngFor=\"let item of areaOfInterst \">\n                <ion-checkbox name=\"area_of_interst[]\"\n                  value=\"{{item.name}}\" (click)=\"onSelect(item.name)\"></ion-checkbox>\n                <ion-label> {{item.name}}</ion-label>\n\n              </ion-col>\n\n              <ion-col size=\"6\">\n                <ion-checkbox name=\"area_of_interst[]\" (click)=\"toggleOtherField()\"></ion-checkbox>\n                <ion-label> Other</ion-label>\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row *ngIf=\"toggleDisplay\">\n              <ion-col size=\"6\">\n\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-textarea name=\"area_of_interst[]\"></ion-textarea>\n              </ion-col>\n            </ion-row>\n          </div>\n          <h2>Preferred work location</h2>\n          <br>\n          <ion-row *ngIf=\"workLocations.length > 0\">\n            <ion-card *ngFor=\"let item of workLocations;let i=index\" class=\"location-card\">\n              <ion-card-header>\n                <ion-icon color=\"primary\" name=\"location-outline\"></ion-icon>&nbsp;\n                <ion-label>{{item.state}}</ion-label>\n                <ion-icon color=\"danger\" id=\"close\" name=\"close-circle-outline\" (click)=\"removeLocation(i)\"></ion-icon>\n              </ion-card-header>\n              <ion-card-content>\n                <span>Districts:&nbsp;</span>\n                <ion-label *ngFor=\"let dist of item.district\"> {{dist}},&nbsp;</ion-label><br>\n                <span>Talukas:&nbsp;</span>\n                <ion-label *ngFor=\"let tal of item.taluka\">{{tal}},&nbsp;</ion-label><br>\n              </ion-card-content>\n            </ion-card>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-select [(ngModel)]=\"stateValue\" name=\"work_state[]\" (ionChange)=\"onStateChange($event, 'work_location')\">\n                <ion-select-option value=\"\">Select State</ion-select-option>\n                <ion-select-option *ngFor=\"let state of states\" [value]=\"state.id\">{{state.name}}</ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-select [(ngModel)]=\"districtValue\" multiple name=\"work_district[]\" (ionChange)=\"onDistrictChange($event, 'work_location')\" placeholder=\"Select District\">\n                <ion-select-option *ngFor=\"let dis of work_districts\" [value]=\"dis.id\">{{dis.name}}</ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-select [(ngModel)]=\"talukaValue\" multiple name=\"work_taluka[]\" placeholder=\"Select Taluka\">\n                <ion-select-option *ngFor=\"let city of work_talukas\" [value]=\"city.id\">{{city.name}}</ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col>\n              <ion-button shape=\"round\" expand=\"full\" [disabled]=\"checkLocationInputs()\" (click)=\"addPreferedLocation()\">add</ion-button>\n            </ion-col>\n          </ion-row>\n          <br>\n          <ion-row>\n            <h2>Documents</h2>\n            <br>\n            <ion-col size=\"3\">\n              <img [src]=\"imageUrl\" height=\"30px\" *ngIf=\"imageUrl\">\n            </ion-col>\n\n            <ion-col size=\"3\">\n              <img [src]=\"RegimageUrl\" height=\"30px\" *ngIf=\"RegimageUrl\">\n            </ion-col>\n            <ion-col size=\"3\">\n              <img [src]=\"PanimageUrl\" height=\"30px\" *ngIf=\"PanimageUrl\">\n            </ion-col>\n            <ion-col size=\"3\">\n              <img [src]=\"AdhaarimageUrl\" height=\"30px\" *ngIf=\"AdhaarimageUrl\">\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"8\">\n              <ion-input type=\"text\" [(ngModel)]=\"gst_num\" name=\"gst_num\" value=\"\" placeholder=\"Enter GST Number\">\n              </ion-input>\n\n            </ion-col>\n            <ion-col size=\"4\">\n\n              <ion-fab vertical=\"bottom\" horizontal=\"end\">\n                <input type=\"file\" #fileInput (change)=\"uploadFile($event, 'gst_certificate')\" hidden=\"true\"\n                  accept=\"image/*\" />\n\n                <ion-button (click)=\"selectImageSource('gst_certificate')\">\n                  Upload </ion-button>\n\n                <ion-icon name=\"attach-outline\" slot=\"primary\"></ion-icon>\n              </ion-fab>\n            </ion-col>\n            <ion-col>\n              <ion-label>{{gst_certificate_File}}</ion-label>\n            </ion-col>\n\n          </ion-row>\n\n\n          <ion-row>\n            <ion-col size=\"8\">\n              <ion-input type=\"text\" [(ngModel)]=\"pan_num\" name=\"pan_num\" value=\"\" placeholder=\"Pan Card Number\">\n              </ion-input>\n\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-fab vertical=\"bottom\" horizontal=\"end\">\n                <input type=\"file\" #fileInput (change)=\"uploadFile($event, 'pan_card')\" hidden=\"true\"\n                  accept=\"image/*\" />\n                <ion-button (click)=\"selectImageSource('pan_card')\">\n                  Upload </ion-button>\n              </ion-fab>\n            </ion-col>\n            <ion-col>\n              <ion-label>{{pan_card_File}}</ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"8\">\n              <ion-input type=\"text\" [(ngModel)]=\"reg_num\" name=\"reg_num\" value=\"\"\n                placeholder=\"Company Registration Number\"></ion-input>\n\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-fab vertical=\"bottom\" horizontal=\"end\">\n                <input type=\"file\" #fileInput (change)=\"uploadFile($event, 'reg_certificate')\" hidden=\"true\"\n                  accept=\"image/*,application/pdf\" />\n                <ion-button (click)=\"selectImageSource('reg_certificate')\">\n                  Upload </ion-button>\n              </ion-fab>\n            </ion-col>\n            <ion-col>\n              <ion-label>{{reg_certificate_File}}</ion-label>\n            </ion-col>\n          </ion-row>\n\n\n          <ion-row>\n            <ion-col size=\"8\">\n              <ion-input type=\"text\" [(ngModel)]=\"adhaar_num\" name=\"adhaar_num\" value=\"\" placeholder=\"Adhaar Number\">\n              </ion-input>\n\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-fab vertical=\"bottom\" horizontal=\"end\">\n                <input type=\"file\" #fileInput (change)=\"uploadFile($event, 'adhaar_file')\" hidden=\"true\"\n                  accept=\"image/*\" />\n                <ion-button (click)=\"selectImageSource('adhaar_file')\">\n                  Upload </ion-button>\n              </ion-fab>\n\n            </ion-col>\n            <ion-col>\n              <ion-label>{{adhaar_File}}</ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-button type=\"submit\" expand=\"block\" class=\"ion-text-center\">Submit</ion-button>\n        </ion-card-content>\n      </ion-card>\n\n\n    </form>\n  </ion-grid>\n\n</ion-content>\n<app-footer></app-footer>\n");

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

/***/ }),

/***/ 5753:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/image-picker/image-picker.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"picker\">\n  <ion-img role=\"button\" class=\"image\" (click)=\"onPickImage()\" [src]=\"selectedImage\" *ngIf=\"selectedImage\"></ion-img>\n<ion-button color=\"primary\" (click)=\"onPickImage()\" *ngIf=\"!selectedImage\">\n  <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n  <ion-label>Select Image</ion-label>\n</ion-button>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_registrations_registrations_module_ts.js.map