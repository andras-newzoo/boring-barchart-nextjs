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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (initVis) {
      updateData();
    }
  }, [data, initVis]);

  initVis = function initVis() {
    var svg = Object(d3_selection__WEBPACK_IMPORTED_MODULE_4__["select"])(svgRef.current);
    svg.append("g").attr("class", "chart-area");
    var chartArea = Object(d3_selection__WEBPACK_IMPORTED_MODULE_4__["select"])(".chart-area");
    chartArea.append('rect').attr('x', 0).attr('y', 0).attr('height', dims.height).attr('width', dims.width * data);
    storedValues.current = {
      chartArea: chartArea
    };
  };

  var updateData = function updateData() {};

  var resetChart = function resetChart() {};

  var updateDims = function updateDims() {};

  var createUpdateRect = function createUpdateRect() {
    var chartArea = storedValues.current.chartArea;
    chartArea.select('rect').transition('update').duration(1000).attr('width', dims.width * data);
  };

  return __jsx(ChartWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("svg", {
    ref: svgRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PercentageChart);

/***/ }),

/***/ "./node_modules/d3-array/src/array.js":
false,

/***/ "./node_modules/d3-array/src/ascending.js":
false,

/***/ "./node_modules/d3-array/src/bin.js":
false,

/***/ "./node_modules/d3-array/src/bisect.js":
false,

/***/ "./node_modules/d3-array/src/bisector.js":
false,

/***/ "./node_modules/d3-array/src/constant.js":
false,

/***/ "./node_modules/d3-array/src/count.js":
false,

/***/ "./node_modules/d3-array/src/cross.js":
false,

/***/ "./node_modules/d3-array/src/descending.js":
false,

/***/ "./node_modules/d3-array/src/deviation.js":
false,

/***/ "./node_modules/d3-array/src/extent.js":
false,

/***/ "./node_modules/d3-array/src/greatest.js":
false,

/***/ "./node_modules/d3-array/src/greatestIndex.js":
false,

/***/ "./node_modules/d3-array/src/group.js":
false,

/***/ "./node_modules/d3-array/src/identity.js":
false,

/***/ "./node_modules/d3-array/src/index.js":
false,

/***/ "./node_modules/d3-array/src/least.js":
false,

/***/ "./node_modules/d3-array/src/leastIndex.js":
false,

/***/ "./node_modules/d3-array/src/max.js":
false,

/***/ "./node_modules/d3-array/src/maxIndex.js":
false,

/***/ "./node_modules/d3-array/src/mean.js":
false,

/***/ "./node_modules/d3-array/src/median.js":
false,

/***/ "./node_modules/d3-array/src/merge.js":
false,

/***/ "./node_modules/d3-array/src/min.js":
false,

/***/ "./node_modules/d3-array/src/minIndex.js":
false,

/***/ "./node_modules/d3-array/src/number.js":
false,

/***/ "./node_modules/d3-array/src/pairs.js":
false,

/***/ "./node_modules/d3-array/src/permute.js":
false,

/***/ "./node_modules/d3-array/src/quantile.js":
false,

/***/ "./node_modules/d3-array/src/quickselect.js":
false,

/***/ "./node_modules/d3-array/src/range.js":
false,

/***/ "./node_modules/d3-array/src/scan.js":
false,

/***/ "./node_modules/d3-array/src/shuffle.js":
false,

/***/ "./node_modules/d3-array/src/sum.js":
false,

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
false,

/***/ "./node_modules/d3-array/src/threshold/scott.js":
false,

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
false,

/***/ "./node_modules/d3-array/src/ticks.js":
false,

/***/ "./node_modules/d3-array/src/transpose.js":
false,

/***/ "./node_modules/d3-array/src/variance.js":
false,

/***/ "./node_modules/d3-array/src/zip.js":
false,

/***/ "./node_modules/d3-color/src/color.js":
false,

/***/ "./node_modules/d3-color/src/cubehelix.js":
false,

/***/ "./node_modules/d3-color/src/define.js":
false,

/***/ "./node_modules/d3-color/src/index.js":
false,

/***/ "./node_modules/d3-color/src/lab.js":
false,

/***/ "./node_modules/d3-color/src/math.js":
false,

/***/ "./node_modules/d3-interpolate/src/array.js":
false,

/***/ "./node_modules/d3-interpolate/src/basis.js":
false,

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
false,

/***/ "./node_modules/d3-interpolate/src/color.js":
false,

/***/ "./node_modules/d3-interpolate/src/constant.js":
false,

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
false,

/***/ "./node_modules/d3-interpolate/src/date.js":
false,

/***/ "./node_modules/d3-interpolate/src/discrete.js":
false,

/***/ "./node_modules/d3-interpolate/src/hcl.js":
false,

/***/ "./node_modules/d3-interpolate/src/hsl.js":
false,

/***/ "./node_modules/d3-interpolate/src/hue.js":
false,

/***/ "./node_modules/d3-interpolate/src/index.js":
false,

/***/ "./node_modules/d3-interpolate/src/lab.js":
false,

/***/ "./node_modules/d3-interpolate/src/number.js":
false,

/***/ "./node_modules/d3-interpolate/src/object.js":
false,

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
false,

/***/ "./node_modules/d3-interpolate/src/quantize.js":
false,

/***/ "./node_modules/d3-interpolate/src/rgb.js":
false,

/***/ "./node_modules/d3-interpolate/src/round.js":
false,

/***/ "./node_modules/d3-interpolate/src/string.js":
false,

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
false,

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
false,

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
false,

/***/ "./node_modules/d3-interpolate/src/value.js":
false,

/***/ "./node_modules/d3-interpolate/src/zoom.js":
false,

/***/ "./node_modules/d3-scale/src/band.js":
false,

/***/ "./node_modules/d3-scale/src/constant.js":
false,

/***/ "./node_modules/d3-scale/src/continuous.js":
false,

/***/ "./node_modules/d3-scale/src/diverging.js":
false,

/***/ "./node_modules/d3-scale/src/identity.js":
false,

/***/ "./node_modules/d3-scale/src/index.js":
false,

/***/ "./node_modules/d3-scale/src/init.js":
false,

/***/ "./node_modules/d3-scale/src/linear.js":
false,

/***/ "./node_modules/d3-scale/src/log.js":
false,

/***/ "./node_modules/d3-scale/src/nice.js":
false,

/***/ "./node_modules/d3-scale/src/number.js":
false,

/***/ "./node_modules/d3-scale/src/ordinal.js":
false,

/***/ "./node_modules/d3-scale/src/pow.js":
false,

/***/ "./node_modules/d3-scale/src/quantile.js":
false,

/***/ "./node_modules/d3-scale/src/quantize.js":
false,

/***/ "./node_modules/d3-scale/src/radial.js":
false,

/***/ "./node_modules/d3-scale/src/sequential.js":
false,

/***/ "./node_modules/d3-scale/src/sequentialQuantile.js":
false,

/***/ "./node_modules/d3-scale/src/symlog.js":
false,

/***/ "./node_modules/d3-scale/src/threshold.js":
false,

/***/ "./node_modules/d3-scale/src/tickFormat.js":
false,

/***/ "./node_modules/d3-scale/src/time.js":
false,

/***/ "./node_modules/d3-scale/src/utcTime.js":
false,

/***/ "./node_modules/d3-time-format/src/defaultLocale.js":
false,

/***/ "./node_modules/d3-time-format/src/index.js":
false,

/***/ "./node_modules/d3-time-format/src/isoFormat.js":
false,

/***/ "./node_modules/d3-time-format/src/isoParse.js":
false,

/***/ "./node_modules/d3-time-format/src/locale.js":
false,

/***/ "./node_modules/d3-time/src/day.js":
false,

/***/ "./node_modules/d3-time/src/duration.js":
false,

/***/ "./node_modules/d3-time/src/hour.js":
false,

/***/ "./node_modules/d3-time/src/index.js":
false,

/***/ "./node_modules/d3-time/src/interval.js":
false,

/***/ "./node_modules/d3-time/src/millisecond.js":
false,

/***/ "./node_modules/d3-time/src/minute.js":
false,

/***/ "./node_modules/d3-time/src/month.js":
false,

/***/ "./node_modules/d3-time/src/second.js":
false,

/***/ "./node_modules/d3-time/src/utcDay.js":
false,

/***/ "./node_modules/d3-time/src/utcHour.js":
false,

/***/ "./node_modules/d3-time/src/utcMinute.js":
false,

/***/ "./node_modules/d3-time/src/utcMonth.js":
false,

/***/ "./node_modules/d3-time/src/utcWeek.js":
false,

/***/ "./node_modules/d3-time/src/utcYear.js":
false,

/***/ "./node_modules/d3-time/src/week.js":
false,

/***/ "./node_modules/d3-time/src/year.js":
false

})
//# sourceMappingURL=furniture-bank-2019.js.64cc8715778ceaf7f7f4.hot-update.js.map