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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks */ "./hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "./utils/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/BarChart.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BarChart__ChartWrapper",
  componentId: "sc-1lmwodk-0"
})(["height:100%;width:100%;border:1px solid red;rect{fill:", ";}"], _styles__WEBPACK_IMPORTED_MODULE_3__["colorGreen"]);

var BarChart = function BarChart(_ref) {
  var data = _ref.data;
  var divRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var storedValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var prevData = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["usePrevious"])(data);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      init = _useState[0],
      setInit = _useState[1];

  var initVis, updateData, updateDims;
  var dims = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useSvgResize"])(divRef);
  var prevDims = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["usePrevious"])(dims);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEqual(prevData, data));

    if (data && dims && !init) {
      initVis();
      setInit(true);
    }
  }, [data, dims, init, initVis, prevData]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {}, [dims]);

  initVis = function initVis() {
    var area = Object(d3_selection__WEBPACK_IMPORTED_MODULE_6__["select"])(divRef.current);

    var _createUpdateSvg = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["createUpdateSvg"])({
      area: area,
      dims: dims,
      append: true
    }),
        chartArea = _createUpdateSvg.chartArea;
  };

  return __jsx(ChartWrapper, {
    ref: divRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BarChart);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.c513aca0209d3cf7cc7a.hot-update.js.map