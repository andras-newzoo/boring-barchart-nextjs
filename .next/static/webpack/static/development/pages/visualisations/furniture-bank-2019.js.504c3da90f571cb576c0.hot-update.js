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
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/PercentageChart.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  height: 80%;\n  width: 90%;\n\n  border: 1px solid ", ";\n\n  border-radius: 20px;\n  overflow: hidden;\n\n  svg {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n\n    rect {\n      fill: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), _styles__WEBPACK_IMPORTED_MODULE_5__["colorGreyLight"], _styles__WEBPACK_IMPORTED_MODULE_5__["colorGreen"]);

var PercentageChart = function PercentageChart(_ref) {
  var data = _ref.data;
  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var storedValues = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var prevData = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["usePrevious"])(data);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      init = _useState[0],
      setInit = _useState[1];

  var initVis, updateData;
  var dims = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useSvgResize"])(svgRef);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (dims.width && dims.height && data && !init) {
      initVis();
      setInit(true);
    }
  }, [data, dims.height, dims.width, init, initVis]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {//console.log('dims', dims)
  }, [dims]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (init && prevData !== data) {
      updateData();
    }
  }, [data, init, prevData, updateData]);

  initVis = function initVis() {
    var svg = Object(d3_selection__WEBPACK_IMPORTED_MODULE_4__["select"])(svgRef.current);
    svg.append("g").attr("class", "chart-area");
    var chartArea = Object(d3_selection__WEBPACK_IMPORTED_MODULE_4__["select"])(".chart-area");
    chartArea.append('rect').attr('x', 0).attr('y', 0).attr('height', dims.height).attr('width', dims.width * data);
    storedValues.current = {
      chartArea: chartArea
    };
  };

  updateData = function updateData() {
    var chartArea = storedValues.current.chartArea;
    chartArea.select('rect').transition().duration(1000).ease(d3_ease__WEBPACK_IMPORTED_MODULE_6__["easeBounceIn"]).attr('width', dims.width * data);
  };

  var resetChart = function resetChart() {};

  var updateDims = function updateDims() {};

  return __jsx(ChartWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("svg", {
    ref: svgRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PercentageChart);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.504c3da90f571cb576c0.hot-update.js.map