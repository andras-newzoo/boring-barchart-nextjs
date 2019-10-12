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
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/PercentageChart.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  height: 80%;\n  width: 90%;\n\n  border: 1px solid ", ";\n  background-color: ", ";\n\n  border-radius: 20px;\n  overflow: hidden;\n\n  svg {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), _styles__WEBPACK_IMPORTED_MODULE_6__["colorGreyLight"], chroma_js__WEBPACK_IMPORTED_MODULE_7___default()(_styles__WEBPACK_IMPORTED_MODULE_6__["colorGreyLight"]).brighten());

var PercentageChart = function PercentageChart(_ref) {
  var data = _ref.data,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  } : _ref$margin;
  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var storedValues = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      init = _useState[0],
      setInit = _useState[1];

  var initVis;
  var dims = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useSvgResize"])(svgRef);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (dims.width && dims.height && data && !init) {
      initVis();
      setInit(true);
    }
  }, [data, dims.height, dims.width, init, initVis]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {//console.log('dims', dims)
  }, [dims]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {//console.log('data', data)
  }, [data]);

  initVis = function initVis() {
    var svg = Object(d3_selection__WEBPACK_IMPORTED_MODULE_5__["select"])(svgRef.current);
    svg.append("g").attr("class", "chart-area").attr('transform', "translate(".concat(margin.left, ", ").concat(margin.top, ")"));
    var chartArea = Object(d3_selection__WEBPACK_IMPORTED_MODULE_5__["select"])(".chart-area");
    var chartWidth = dims.width - margin.right - margin.left;
    var chartHeight = dims.height - margin.top - margin.bottom;
    storedValues.current = {
      chartArea: chartArea,
      chartWidth: chartWidth,
      chartHeight: chartHeight
    };
  };

  var updateData = function updateData() {};

  var resetChart = function resetChart() {};

  var updateDims = function updateDims() {};

  return __jsx(ChartWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("svg", {
    ref: svgRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PercentageChart);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.b4366ed6d9a0bf7b74b5.hot-update.js.map