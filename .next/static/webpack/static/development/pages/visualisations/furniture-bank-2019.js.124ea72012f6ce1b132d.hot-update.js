webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./utils/chartHelpers.js":
/*!*******************************!*\
  !*** ./utils/chartHelpers.js ***!
  \*******************************/
/*! exports provided: numberTween, createUpdateSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberTween", function() { return numberTween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUpdateSvg", function() { return createUpdateSvg; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");



var numberTween = function numberTween(d, i, n, key, numFormat) {
  var that = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(n[i]);
  var num = +that.text().substring(0, that.text().length - 1) * 0.01;
  var newNum = d[key];
  var index = Object(d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"])(num, newNum);
  console.log(+that.text().substring(0, that.text().length));
  return function (t) {
    that.text("".concat(Object(d3_format__WEBPACK_IMPORTED_MODULE_2__["format"])(numFormat)(index(t))));
  };
};
var createUpdateSvg = function createUpdateSvg(_ref) {
  var area = _ref.area,
      dims = _ref.dims,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  } : _ref$margin,
      append = _ref.append,
      update = _ref.update;
  var chartArea;

  var setDims = function setDims(svg) {
    return svg.attr("width", dims.width).attr("height", dims.height);
  };

  var chartWidth = dims.width - margin.left - margin.right;
  var chartHeight = dims.height - margin.top - margin.bottom;

  if (append) {
    area.append("svg");
    var svg = area.select("svg");
    setDims(svg);
    svg.append("g").attr("class", "chart-area").attr("transform", "translate(".concat(margin.left, ", ").concat(margin.top, ")"));
    chartArea = area.select(".chart-area");
  }

  ;

  if (update) {
    setDims(area.select("svg"));
  }

  return {
    chartArea: chartArea,
    chartWidth: chartWidth,
    chartHeight: chartHeight
  };
};

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.124ea72012f6ce1b132d.hot-update.js.map