webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./styles/index.js":
/*!*************************!*\
  !*** ./styles/index.js ***!
  \*************************/
/*! exports provided: FlexContainer, defaultBreakPoints, createBreakPoints, paddingXL, paddingL, paddingM, paddingS, paddingXS, testBorder, fontWeightXS, fontWeightS, fontWeightM, fontWeightL, fontWeightXL, fontSizeXXL, fontSizeXL, fontSizeL, fontSizeM, fontSizeS, fontSizeXS, fontFamilyMain, colorGrey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sharedStyledComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharedStyledComponents */ "./styles/sharedStyledComponents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexContainer", function() { return _sharedStyledComponents__WEBPACK_IMPORTED_MODULE_0__["FlexContainer"]; });

/* harmony import */ var _mediaQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediaQueries */ "./styles/mediaQueries.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultBreakPoints", function() { return _mediaQueries__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBreakPoints", function() { return _mediaQueries__WEBPACK_IMPORTED_MODULE_1__["createBreakPoints"]; });

/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharedStyles */ "./styles/sharedStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paddingXL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["paddingXL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paddingL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["paddingL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paddingM", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["paddingM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paddingS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["paddingS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paddingXS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["paddingXS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "testBorder", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["testBorder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeightXS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontWeightXS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeightS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontWeightS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeightM", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontWeightM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeightL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontWeightL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeightXL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontWeightXL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeXXL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeXXL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeXL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeXL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeM", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeXS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeXS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFamilyMain", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontFamilyMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorGrey", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["colorGrey"]; });








/***/ }),

/***/ "./styles/sharedStyledComponents.js":
/*!******************************************!*\
  !*** ./styles/sharedStyledComponents.js ***!
  \******************************************/
/*! exports provided: FlexContainer, TextSpan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexContainer", function() { return FlexContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextSpan", function() { return TextSpan; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./styles/index.js");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharedStyles */ "./styles/sharedStyles.js");



var FlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "sharedStyledComponents__FlexContainer",
  componentId: "sc-1q45dof-0"
})(["display:flex;flex-direction:", ";justify-content:", ";;align-items:", ";"], function (props) {
  return props.direction || 'row';
}, function (props) {
  return props.justify || 'center';
}, function (props) {
  return props.align || 'center';
});
var TextSpan = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "sharedStyledComponents__TextSpan",
  componentId: "sc-1q45dof-1"
})(["font-size:", ";font-weight:", ";color:", ";"], function (props) {
  return props.size || ___WEBPACK_IMPORTED_MODULE_1__["fontSizeM"];
}, function (props) {
  return props.weight || ___WEBPACK_IMPORTED_MODULE_1__["fontWeightS"];
}, function (props) {
  return props.color || _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["colorGrey"];
});

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.f2f4f8348b4d4296374e.hot-update.js.map