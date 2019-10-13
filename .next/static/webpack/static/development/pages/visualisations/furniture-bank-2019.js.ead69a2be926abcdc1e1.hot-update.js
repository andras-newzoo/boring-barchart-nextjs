webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./components/Modal/Modal.jsx":
/*!************************************!*\
  !*** ./components/Modal/Modal.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/components/Modal/Modal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ModalBackground = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Modal__ModalBackground",
  componentId: "sc-15imcyp-0"
})(["position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,", ");display:", ";z-index:1000;"], function (props) {
  return props.opacity || .5;
}, function (props) {
  return props.open ? 'block' : 'none';
});
var ModalPaper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Modal__ModalPaper",
  componentId: "sc-15imcyp-1"
})(["position:absolute;left:50%;", " ", " z-index:1100;background-color:#fff;", ""], function (props) {
  return props.size === "s" && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["transform:translate(-50%,-25%);"]);
}, function (props) {
  return props.size === "m" && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["transform:translate(-50%,-50%);"]);
}, function (props) {
  return props.open ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["transition:1s all;opacity:1;top:50%;visibility:visible;"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["transition:0s all;opacity:0;top:-50%;visibility:hidden;"]);
});

var Modal = function Modal(_ref) {
  var children = _ref.children,
      open = _ref.open,
      handleClick = _ref.handleClick,
      size = _ref.size;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ModalBackground, {
    onClick: handleClick,
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(ModalPaper, {
    open: open,
    size: size,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.ead69a2be926abcdc1e1.hot-update.js.map