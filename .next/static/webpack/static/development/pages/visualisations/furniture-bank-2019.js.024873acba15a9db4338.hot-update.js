webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./components/FixedInfoButton/FixedInfoButton.jsx":
/*!********************************************************!*\
  !*** ./components/FixedInfoButton/FixedInfoButton.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles */ "./styles/index.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/components/FixedInfoButton/FixedInfoButton.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "FixedInfoButton__Container",
  componentId: "s3rour-0"
})(["position:fixed;background-color:", ";color:", ";", " border-radius:", ";transform:translate(", ");cursor:pointer;"], function (props) {
  return props.background || _styles__WEBPACK_IMPORTED_MODULE_3__["colorGrey"];
}, function (props) {
  return props.color || "#fff";
}, function (props) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["top:", ";right:", ";bottom:", ";left:", ";width:", "px;height:", "px;"], props.top, props.right, props.bottom, props.left, props.width, props.height);
}, function (props) {
  return props.round && "100%";
}, function (props) {
  return props.corner && props.translate;
});
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "FixedInfoButton__IconContainer",
  componentId: "s3rour-1"
})(["position:relative;height:100%;width:100%;border:1px solid black;"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "FixedInfoButton__Icon",
  componentId: "s3rour-2"
})(["position:absolute;background-color:#fff;bottom:20%;left:20%;.icon{height:25px;width:25px;}"]);

var FixedInfoButton = function FixedInfoButton(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      background = _ref.background,
      color = _ref.color,
      height = _ref.height,
      width = _ref.width,
      round = _ref.round,
      corner = _ref.corner,
      translate = _ref.translate,
      iconPath = _ref.iconPath;
  var dims = {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    height: height,
    width: width,
    corner: corner,
    translate: translate
  };
  var styles = {
    background: background,
    color: color,
    round: round
  };
  return __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dims, styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(IconContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("img", {
    className: "icon",
    src: iconPath,
    alt: "fixed icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FixedInfoButton);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.024873acba15a9db4338.hot-update.js.map