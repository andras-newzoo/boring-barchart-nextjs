webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/components/BarChart.jsx":
/*!**************************************************************!*\
  !*** ./containers/FurnitureBank2019/components/BarChart.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks */ "./hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils */ "./utils/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../styles */ "./styles/index.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/BarChart.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BarChart__ChartWrapper",
  componentId: "sc-1lmwodk-0"
})(["height:100%;width:100%;border-left:1px solid ", ";rect{fill:", ";}"], _styles__WEBPACK_IMPORTED_MODULE_9__["colorGrey"], _styles__WEBPACK_IMPORTED_MODULE_6__["colorGreen"]);

var BarChart = function BarChart(_ref) {
  var data = _ref.data,
      _ref$updateDuration = _ref.updateDuration,
      updateDuration = _ref$updateDuration === void 0 ? 1000 : _ref$updateDuration;
  var divRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var storedValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var prevData = Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["usePrevious"])(data);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      init = _useState[0],
      setInit = _useState[1];

  var initVis, updateData, updateDims;
  var dims = Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useSvgResize"])(divRef);
  var prevDims = Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["usePrevious"])(dims);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (data && dims.height && dims.width && !init) {
      initVis();
      setInit(true);
    }
  }, [data, dims, init, initVis, prevData]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {}, [dims]);

  initVis = function initVis() {
    var area = Object(d3_selection__WEBPACK_IMPORTED_MODULE_4__["select"])(divRef.current);

    var _createUpdateSvg = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["createUpdateSvg"])({
      area: area,
      dims: dims,
      append: true
    }),
        chartArea = _createUpdateSvg.chartArea;

    var yScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleBand"])().domain(data.map(function (d) {
      return d.group;
    })).range([0, dims.height]).paddingOuter(.3).paddingInner(.4);
    var xScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"])().domain([0, Object(d3_array__WEBPACK_IMPORTED_MODULE_5__["max"])(data, function (d) {
      return d.share;
    })]).range([0, dims.width]);
    storedValues.current = {
      chartArea: chartArea,
      yScale: yScale,
      xScale: xScale
    };
    updateData();
  };

  updateData = function updateData() {
    createUpdateRects();
    createUpdateValueText();
    createUpdateVariableText();
  };

  var createUpdateRects = function createUpdateRects() {
    var _storedValues$current = storedValues.current,
        chartArea = _storedValues$current.chartArea,
        yScale = _storedValues$current.yScale,
        xScale = _storedValues$current.xScale;
    var rects = chartArea.selectAll('rect').data(data, function (d) {
      return d.group;
    });
    rects.exit().transition().duration(updateDuration).ease(d3_ease__WEBPACK_IMPORTED_MODULE_10__["easeCubicInOut"]).attr('y', dims.height * 2).remove();
    rects.enter().append('rect').attr('x', 0).attr('y', function (d) {
      return yScale(d.group);
    }).attr('height', yScale.bandwidth()).attr('width', 0).transition().duration(updateDuration).ease(d3_ease__WEBPACK_IMPORTED_MODULE_10__["easeCubicInOut"]).attr('width', function (d) {
      return xScale(d.share);
    });
  };

  var createUpdateValueText = function createUpdateValueText() {};

  var createUpdateVariableText = function createUpdateVariableText() {};

  return __jsx(ChartWrapper, {
    ref: divRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BarChart);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.64d18e447bae220a6037.hot-update.js.map