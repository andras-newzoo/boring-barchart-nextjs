webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./hooks/index.js":
/*!************************!*\
  !*** ./hooks/index.js ***!
  \************************/
/*! exports provided: useSvgResize, usePrevious, useWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useSvgResize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useSvgResize */ "./hooks/useSvgResize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSvgResize", function() { return _useSvgResize__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usePrevious */ "./hooks/usePrevious.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return _usePrevious__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useWindowSize */ "./hooks/useWindowSize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return _useWindowSize__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./hooks/useWindowSize.js":
/*!********************************!*\
  !*** ./hooks/useWindowSize.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useWindowSize() {
  var isClient = true;
  var getSize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }, [isClient]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize),
      windowSize = _useState[0],
      setWindowSize = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, [getSize, isClient]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.690f21b1064498338975.hot-update.js.map