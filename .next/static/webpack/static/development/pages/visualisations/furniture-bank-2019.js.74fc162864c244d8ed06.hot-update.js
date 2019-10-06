webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./components/ItemChip/index.jsx":
/*!***************************************!*\
  !*** ./components/ItemChip/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var _containers_FurnitureBank2019_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/FurnitureBank2019/styles */ "./containers/FurnitureBank2019/styles/index.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/components/ItemChip/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var ControlElement = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ItemChip__ControlElement",
  componentId: "m9j6cq-0"
})(["position:absolute;top:", "rem;left:", "rem;cursor:pointer;font-weight:", ";visibility:hidden;@media (any-hover:none){visibility:visible;}"], function (props) {
  return props.top;
}, function (props) {
  return props.left || 1.4;
}, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["fontWeightL"]);
var DeleteIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ItemChip__DeleteIcon",
  componentId: "m9j6cq-1"
})(["position:absolute;right:1rem;top:50%;transform:translateY(-50%);font-weight:", ";cursor:pointer;visibility:hidden;trasition:all .3s;@media (any-hover:none){visibility:visible;}"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["fontWeightXL"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ItemChip__Container",
  componentId: "m9j6cq-2"
})(["position:relative;display:flex;align-items:center;width:calc(100% - 3.8rem);min-height:", "px;padding:", ";margin:0.4rem 0;padding-left:3rem;font-weight:", ";font-size:", ";border:1px solid ", ";border-radius:4px;background:", ";color:#fff;transition:0.5s all;&:hover ", ",&:hover ", ",&:hover ", "{visibility:visible;}"], function (props) {
  return props.height || 30;
}, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["paddingXS"], function (props) {
  return props.fontWeight || _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["fontWeightXS"];
}, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["fontSizeM"], function (props) {
  return props.borderColor || _containers_FurnitureBank2019_styles__WEBPACK_IMPORTED_MODULE_4__["colorGreyDark"];
}, _containers_FurnitureBank2019_styles__WEBPACK_IMPORTED_MODULE_4__["colorGreyDark"], ControlElement, ControlElement, DeleteIcon);
var QuantityContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ItemChip__QuantityContainer",
  componentId: "m9j6cq-3"
})(["position:absolute;width:15px;left:1rem;top:50%;transform:translateY(-50%);display:flex;justify-content:center;font-weight:", ";"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["fontWeightXL"]);

var ItemChip = function ItemChip(_ref) {
  var style = _ref.style,
      handleIncrementClick = _ref.handleIncrementClick,
      handleDecrementClick = _ref.handleDecrementClick,
      handleDeleteClick = _ref.handleDeleteClick,
      content = _ref.content,
      quantity = _ref.quantity;
  return __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx(ControlElement, {
    top: -0.2,
    onClick: handleIncrementClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "+"), quantity > 1 && __jsx(ControlElement, {
    top: 2,
    left: 1.5,
    onClick: handleDecrementClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "-"), __jsx(QuantityContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, quantity), content, __jsx(DeleteIcon, {
    onClick: handleDeleteClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "\xD7"));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemChip);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.74fc162864c244d8ed06.hot-update.js.map