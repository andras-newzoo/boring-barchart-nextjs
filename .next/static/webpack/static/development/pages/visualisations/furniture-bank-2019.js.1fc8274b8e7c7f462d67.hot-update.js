webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./styles/mediaQueries.js":
/*!********************************!*\
  !*** ./styles/mediaQueries.js ***!
  \********************************/
/*! exports provided: default, createBreakPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBreakPoints", function() { return createBreakPoints; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var sizes = {
  largest: 1300,
  large: 1100,
  medium: 900,
  small: 770,
  smallest: 600,
  tiny: 450
};
/* harmony default export */ __webpack_exports__["default"] = (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (max-width:", "px){", ";}"], sizes[label], styled_components__WEBPACK_IMPORTED_MODULE_1__["css"].apply(void 0, arguments));
  };

  return acc;
}, {}));
var createBreakPoints = function createBreakPoints() {
  var customBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : sizes;
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(customBreakpoints).reduce(function (acc, label) {
    acc[label] = function () {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (max-width:", "px){", ";}"], customBreakpoints[label], styled_components__WEBPACK_IMPORTED_MODULE_1__["css"].apply(void 0, arguments));
    };

    return acc;
  }, {});
};

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.1fc8274b8e7c7f462d67.hot-update.js.map