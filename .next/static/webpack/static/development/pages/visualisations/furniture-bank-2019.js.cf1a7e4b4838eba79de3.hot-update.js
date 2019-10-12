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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks */ "./hooks/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils */ "./utils/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/PercentageChart.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PercentageChart__ChartWrapper",
  componentId: "sc-18c8aar-0"
})(["position:relative;height:100%;width:90%;border:1px solid ", ";border-radius:20px;overflow:hidden;svg{position:absolute;rect{fill:", ";}}"], _styles__WEBPACK_IMPORTED_MODULE_6__["colorGreen"], _styles__WEBPACK_IMPORTED_MODULE_6__["colorGreen"]);

var PercentageChart = function PercentageChart(_ref) {
  var data = _ref.data,
      fullCount = _ref.fullCount,
      _ref$updateDuration = _ref.updateDuration,
      updateDuration = _ref$updateDuration === void 0 ? 1000 : _ref$updateDuration,
      _ref$resetDelay = _ref.resetDelay,
      resetDelay = _ref$resetDelay === void 0 ? 500 : _ref$resetDelay;
  var divRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var storedValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var prevData = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["usePrevious"])(data);
  var prevCount = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["usePrevious"])(fullCount);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      init = _useState[0],
      setInit = _useState[1];

  var initVis, resetChart, updateRect, updateDims;
  var dims = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useSvgResize"])(divRef);
  var prevDims = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["usePrevious"])(dims);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (dims.width && dims.height && data && !init) {
      initVis();
      setInit(true);
    }
  }, [data, dims.height, dims.width, init, initVis]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (init) {
      !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEqual(dims !== prevDims);
      updateDims();
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (init && prevData !== data) {
      prevCount < fullCount && resetChart('end');
      fullCount < prevCount && resetChart('start');
      fullCount === prevCount && updateRect();
    }
  }, [data, init, prevData, fullCount, prevCount, resetChart, updateDuration, resetDelay, updateRect, dims.width]);

  initVis = function initVis() {
    var area = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])(divRef.current);

    var _createUpdateSvg = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["createUpdateSvg"])({
      area: area,
      dims: dims,
      append: true
    }),
        chartArea = _createUpdateSvg.chartArea;

    chartArea.append("rect").attr("x", 0).attr("y", 0).attr("height", dims.height).attr("width", 0);
    storedValues.current = {
      area: area,
      chartArea: chartArea
    };
    updateRect();
  };

  updateDims = function updateDims() {
    var chartArea = storedValues.current.chartArea;
    Object(_utils__WEBPACK_IMPORTED_MODULE_8__["createUpdateSvg"])({
      area: Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])(divRef.current),
      dims: dims,
      update: true
    });
    chartArea.select("rect").attr("height", dims.height).attr("width", dims.width * (data - fullCount));
  };

  resetChart = function resetChart(resetPoint) {
    var chartArea = storedValues.current.chartArea;
    var toEnd = resetPoint === 'end';
    chartArea.select("rect").transition().duration(updateDuration / 2).ease(d3_ease__WEBPACK_IMPORTED_MODULE_4__["easeCubicInOut"]).attr("width", toEnd ? dims.width : 0).transition().delay(resetDelay).duration(0).attr("width", toEnd ? 0 : dims.width).transition().delay(updateDuration / 2).duration(updateDuration / 2).ease(d3_ease__WEBPACK_IMPORTED_MODULE_4__["easeCubicInOut"]).attr("width", dims.width * (data - fullCount));
  };

  updateRect = function updateRect() {
    var chartArea = storedValues.current.chartArea;
    console.log('running', updateDuration);
    chartArea.select("rect").transition("update").duration(updateDuration).ease(d3_ease__WEBPACK_IMPORTED_MODULE_4__["easeCubicInOut"]).attr("width", dims.width * (data - fullCount));
  };

  return __jsx(ChartWrapper, {
    ref: divRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PercentageChart);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.cf1a7e4b4838eba79de3.hot-update.js.map