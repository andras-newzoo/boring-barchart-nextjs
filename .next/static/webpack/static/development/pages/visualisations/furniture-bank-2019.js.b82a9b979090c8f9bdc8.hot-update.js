webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./hooks/index.js":
/*!************************!*\
  !*** ./hooks/index.js ***!
  \************************/
/*! exports provided: useSvgResize, usePrevious */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useSvgResize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useSvgResize */ "./hooks/useSvgResize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSvgResize", function() { return _useSvgResize__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usePrevious */ "./hooks/usePrevious.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return _usePrevious__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./hooks/usePrevious.js":
/*!******************************!*\
  !*** ./hooks/usePrevious.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function usePrevious(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}

/* harmony default export */ __webpack_exports__["default"] = (usePrevious);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.b82a9b979090c8f9bdc8.hot-update.js.map