webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/components/PercentageChart.jsx":
/*!*********************************************************************!*\
  !*** ./containers/FurnitureBank2019/components/PercentageChart.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks */ "./hooks/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/PercentageChart.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PercentageChart__ChartWrapper",
  componentId: "sc-18c8aar-0"
})(["position:relative;height:70%;width:90%;border:1px solid ", ";border-radius:20px;overflow:hidden;svg{position:absolute;rect{fill:", ";}}"], _styles__WEBPACK_IMPORTED_MODULE_4__["colorGreyDark"], _styles__WEBPACK_IMPORTED_MODULE_4__["colorGreen"]);

var PercentageChart = function PercentageChart(_ref) {
  var data = _ref.data;
  // const svgRef = useRef();
  var divRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var storedValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var prevData = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["usePrevious"])(data);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      init = _useState[0],
      setInit = _useState[1];

  var initVis, updateData;
  var dims = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useSvgResize"])(divRef);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(data);
    console.log(dims.width);
    console.log(dims.height);
    console.log(!init);

    if (dims.width && dims.height && data && !init) {
      initVis();
      setInit(true);
    }
  }, [data, dims.height, dims.width, init, initVis]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {//console.log('dims', dims)
  }, [dims]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (init && prevData !== data) {
      if (data > 1) {} else {// updateData()
      }
    }
  }, [data, init, prevData, updateData]);

  initVis = function initVis() {
    Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])(divRef.current).append('svg');
    Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])(divRef.current).select('svg').attr('width', dims.width).attr('height', dims.height).append("g").attr("class", "chart-area");
    var chartArea = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])(".chart-area");
    chartArea.append('rect').attr('x', 0).attr('y', 0).attr('height', dims.height + 1).attr('width', dims.width * data);
    storedValues.current = {
      chartArea: chartArea
    };
  };

  updateData = function updateData() {
    var chartArea = storedValues.current.chartArea;
    chartArea.select('rect').transition().duration(1000).ease(d3_ease__WEBPACK_IMPORTED_MODULE_5__["easeCubicInOut"]).attr('width', dims.width * data);
  };

  var resetChart = function resetChart() {
    var chartArea = storedValues.current.chartArea;
    chartArea.select('rect').attr('width', 0);
  };

  var updateDims = function updateDims() {};

  return __jsx(ChartWrapper, {
    ref: divRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PercentageChart);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.b39cdf595fd99e08918e.hot-update.js.map