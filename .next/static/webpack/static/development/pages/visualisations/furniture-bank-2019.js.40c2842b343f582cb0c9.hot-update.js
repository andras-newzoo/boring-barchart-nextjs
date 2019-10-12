webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/components/PercentageChart.jsx":
/*!*********************************************************************!*\
  !*** ./containers/FurnitureBank2019/components/PercentageChart.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks */ "./hooks/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles */ "./styles/index.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/PercentageChart.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  ", ";\n  height: 100%;\n  width: 100%;\n\n  svg {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), _styles__WEBPACK_IMPORTED_MODULE_4__["testBorder"]);

var PercentageChart = function PercentageChart(_ref) {
  var data = _ref.data;
  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var dims = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useSvgResize"])(svgRef);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log('dims', dims);
  }, [dims]);
  return __jsx(ChartWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("svg", {
    ref: svgRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PercentageChart);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.40c2842b343f582cb0c9.hot-update.js.map