(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, theCallback, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theCallback", function() { return theCallback; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "../../../node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
var _jsxFileName = "/home/poettinb/imagetest/apps/imagetest/src/app/app.tsx";



let lastImageId = undefined;
const token = "eyJ4LWVudiI6IlZBTCIsImFsZyI6IlJTMjU2IiwieC1yZWciOiJFVSIsImtpZCI6InJldS12YWxpZGF0aW9uIn0.eyJmZ3JwIjpbXSwiY2x0eSI6InB1YmxpYyIsInN1YiI6ImE2MWM4MzlhLWEyOGMtNDU3OS04OWM5LTRmZDM2Njg3YmZiYyIsImF1ZCI6Ijk2ODVEMzU3NTAxM0ZFNEYwQUY0NkIxNDE1NDlFQ0E1MDI5NTRGMjRGQjZFRTA5NTZENTAwRkU3QzVGRTE2MzgiLCJhenAiOiI5Njg1RDM1NzUwMTNGRTRGMEFGNDZCMTQxNTQ5RUNBNTAyOTU0RjI0RkI2RUUwOTU2RDUwMEZFN0M1RkUxNjM4Iiwic2NvcGUiOlsiUmVhZEFjY291bnQiLCJTZXR0aW5ncyIsIklkZW50aWZ5QXBwbGlhbmNlIiwiQ29udHJvbCIsIkRlbGV0ZUFwcGxpYW5jZSIsIldyaXRlQXBwbGlhbmNlIiwiUmVhZE9yaWdBcGkiLCJNb25pdG9yIiwiV3JpdGVPcmlnQXBpIiwiSW1hZ2VzIl0sImlzcyI6IkVVOlZBTDoyIiwicHJtIjpbInRyZyIsImRlbW8iLCJhbSIsImVxdCJdLCJleHAiOjE2MzM0MTk5NDgsImlhdCI6MTYzMzMzMzU0OCwianRpIjoiZjFlY2Q1ZjktOGMxNi00ZjhlLWI1MmEtZTAyOTJiOWNhM2QyIn0.LIxIsOGiC2k0HTuvt4FUsu_0EX_-Rgo3PNygmFe1WlQzcu8aSrLk7hsi06xsqxRAwBvet3EGvKN3c2fF8JvGzwcSWaImc9mGaGhDohMpyd3_MlLvXjcCJY06myfd2DvUTlPfs6OvZLhD--RorJOcG0SRsErA04QJ-up_L2ObKF_cFvpbU89WyRilAqMqp6wxmVp_gsosinRCVfMoEl8lhq2PcAni7-XayCpBp3iAYXWp4hVIUbVa-mmOsjWBwUpLts4po0tNsgc4nlWaPMygVrXBgMT6OlVB7v7JARduM-6ZukOFbi76L-71yINpLzz69SsZZMN-IQCxODaTXQlGSg";
function App() {
  const startVideo = async () => {
    const msgSpan = document.getElementById("msg");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      }); // eslint-disable-next-line @typescript-eslint/no-explicit-any

      const video = document.getElementById('video');
      video.srcObject = stream;
      video.play();
      console.log('getUserMedia succeeded');
      if (msgSpan) msgSpan.innerText = `getUserMedia succeeded`;
    } catch (e) {
      if (msgSpan) msgSpan.innerText = `${e}`;
      console.log(`getUserMedia failed: ${e}`);
    }
  };

  const takeScreenshot = async () => {
    var _canvas$getContext;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const video = document.getElementById('video');
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;
    (_canvas$getContext = canvas.getContext('2d')) == null ? void 0 : _canvas$getContext.drawImage(video, 0, 0, 1000, 1000);
    const data = canvas.toDataURL('image/png');
    console.log(data);
    const headers = {
      Authorization: `Bearer ${token}`
    };
    const result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://10.0.2.2:8080/api/image', {
      data
    }, {
      headers
    });
    console.log(result);
    lastImageId = result.data.imageId;
  };

  const loadImage = async () => {
    if (lastImageId === undefined) {
      return;
    }

    const result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`http://10.0.2.2:8080/api/image/${lastImageId}?v=gray`);
    console.log(result);
    const img = document.getElementById('theImg');
    img == null ? void 0 : img.setAttribute('src', result.data.objectUrl);
  };

  const enumerateDevices = async () => {
    const devicesP = document.getElementById('devices');
    const devices = await navigator.mediaDevices.enumerateDevices();
    if (devicesP) devicesP.innerText = devices.map(device => `${device.kind}-${device.deviceId}`).map(s => s.slice(0, 30)).join('\n');
  };

  const getGeoLocation = async () => {
    const location = document.getElementById('location');
    console.log('getGeoLocation', location);

    if (location) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log('callback: positive');
        location.innerText = `Position: ${position.timestamp} (${position.coords.latitude}, ${position.coords.longitude})`;
      }, error => {
        location.innerText = `Error: ${error.message}`;
      });
    }
  };

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: "Great web design since 1997"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
      type: "button",
      value: "Enumerate devices",
      style: {
        background: 'brown',
        color: 'magenta'
      },
      onClick: enumerateDevices
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 132
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
      type: "button",
      value: "Request permissions",
      style: {
        background: 'yellow',
        color: 'pink'
      },
      onClick: () => // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.Android.showToast("Prost!")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 56
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
      type: "button",
      value: "Go to settings",
      style: {
        background: 'green',
        color: 'yellow'
      },
      onClick: () => // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.Android.pickPicture()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 50
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
      type: "button",
      value: "Start Video",
      onClick: startVideo,
      style: {
        background: 'blue',
        color: 'red'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("video", {
        id: "video",
        width: "200px",
        height: "200px",
        style: {
          margin: 'auto'
        },
        children: "Video stream not available."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: "Devices:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      id: "devices"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: "State:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      id: "msg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
      type: "button",
      value: "Get location",
      style: {
        background: 'olive',
        color: 'white'
      },
      onClick: getGeoLocation
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: "Location:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      id: "location"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
function theCallback(image) {
  const img = document.getElementById('theImg');
  img == null ? void 0 : img.setAttribute('src', `data:image/jpg;base64,${image}`);
} // eslint-disable-next-line @typescript-eslint/no-explicit-any

window.callbacks = {}; // eslint-disable-next-line @typescript-eslint/no-explicit-any

window.callbacks['theCallback'] = theCallback;
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "../../../node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
var _jsxFileName = "/home/poettinb/imagetest/apps/imagetest/src/main.tsx";




react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["StrictMode"], {
  children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/poettinb/imagetest/apps/imagetest/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map