webpackHotUpdate("static/development/pages/visualisations.js",{

/***/ "../../node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "../../node_modules/gud/index.js":
false,

/***/ "../../node_modules/history/esm/history.js":
false,

/***/ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "../../node_modules/mini-create-react-context/dist/esm/index.js":
false,

/***/ "../../node_modules/mini-create-react-context/node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "../../node_modules/object-assign/index.js":
false,

/***/ "../../node_modules/path-to-regexp/index.js":
false,

/***/ "../../node_modules/path-to-regexp/node_modules/isarray/index.js":
false,

/***/ "../../node_modules/prop-types/checkPropTypes.js":
false,

/***/ "../../node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "../../node_modules/prop-types/index.js":
false,

/***/ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "../../node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "../../node_modules/react-is/index.js":
false,

/***/ "../../node_modules/react-router-dom/esm/react-router-dom.js":
false,

/***/ "../../node_modules/react-router/esm/react-router.js":
false,

/***/ "../../node_modules/react/cjs/react.development.js":
false,

/***/ "../../node_modules/react/index.js":
false,

/***/ "../../node_modules/resolve-pathname/index.js":
false,

/***/ "../../node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
false,

/***/ "../../node_modules/tiny-warning/dist/tiny-warning.esm.js":
false,

/***/ "../../node_modules/value-equal/index.js":
false,

/***/ "./components/IconChart/IconChart.jsx":
/*!********************************************!*\
  !*** ./components/IconChart/IconChart.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-selection */ "../../node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-scale */ "../../node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-transition */ "../../node_modules/d3-transition/src/index.js");





var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/components/IconChart/IconChart.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "IconChart__Wrapper",
  componentId: "sc-1oa1hct-0"
})(["svg{cursor:pointer;}"]);

var IconChart =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(IconChart, _Component);

  function IconChart(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IconChart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(IconChart).call(this, props));
    _this.state = {
      location: _this.props.location,
      data: [{
        sortKey: 0,
        yKey: "A",
        xKey: 250
      }, {
        sortKey: 1,
        yKey: "B",
        xKey: 300
      }, {
        sortKey: 2,
        yKey: "C",
        xKey: 200
      }]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IconChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initVis();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.location !== this.props.location) {
        this.randomizeData();
      }

      if (this.props.fill !== prevProps.fill) {
        this.updateFill();
      }
    }
  }, {
    key: "getColor",
    value: function getColor() {}
  }, {
    key: "randomizeData",
    value: function randomizeData() {
      var randomXKey = function randomXKey() {
        return lodash__WEBPACK_IMPORTED_MODULE_7___default.a.random(50, 300);
      };

      var data = [{
        sortKey: randomXKey(),
        yKey: "A",
        xKey: randomXKey()
      }, {
        sortKey: randomXKey(),
        yKey: "B",
        xKey: randomXKey()
      }, {
        sortKey: randomXKey(),
        yKey: "C",
        xKey: randomXKey()
      }];
      this.updateVis(data.sort(function (a, b) {
        return a.sortKey - b.sortKey;
      }), this.getColor());
    }
  }, {
    key: "initVis",
    value: function initVis() {
      var _this2 = this;

      var svg = Object(d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"])(this.svg);
      var data = this.state.data;
      svg.attr("height", 40).attr("width", 40);
      svg.append("g").attr("class", "chart-area").attr("transform", "translate(0,7)");
      this.yScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_9__["scaleBand"])().range([0, 30]).domain(data.map(function (d) {
        return d.yKey;
      })).padding(0.3);
      this.xScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_9__["scaleLinear"])().range([0, 35]).domain([0, 300]);
      this.chartArea = svg.select(".chart-area");
      this.chartArea.append("line").attr("x1", 0).attr("x2", 0).attr("y1", 0).attr("y2", 30).attr("stroke", this.props.fill).attr("stroke-width", 1).attr("stroke-linejoin", "round").attr("stroke-linecap", "round");
      var rects = this.chartArea.selectAll("rect").data(data, function (d) {
        return d.yKey;
      });
      rects.enter().append("rect").attr("x", this.xScale(0)).attr("y", function (d) {
        return _this2.yScale(d.yKey);
      }).attr("height", this.yScale.bandwidth()).attr("width", this.xScale(0)).attr("fill", this.props.fill).merge(rects).transition("in").duration(1000).delay(function (_, i) {
        return i * 250;
      }).attr("width", function (d) {
        return _this2.xScale(d.xKey);
      });
    }
  }, {
    key: "updateVis",
    value: function updateVis(data) {
      var _this3 = this;

      this.yScale.domain(data.map(function (d) {
        return d.yKey;
      }));
      this.chartArea.selectAll("rect").data(data, function (d) {
        return d.yKey;
      }).transition("update-width").delay(function (d) {
        return d.sortKey;
      }).duration(1000).attr("width", function (d) {
        return _this3.xScale(d.xKey);
      }).attr("fill", this.props.fill);
    }
  }, {
    key: "updateFill",
    value: function updateFill() {
      this.chartArea.selectAll("rect").attr("fill", this.props.fill);
      this.chartArea.select("line").attr("stroke", this.props.fill);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return __jsx(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("svg", {
        ref: function ref(svg) {
          return _this4.svg = svg;
        },
        onClick: function onClick() {
          return _this4.randomizeData();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }));
    }
  }]);

  return IconChart;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (IconChart);

/***/ })

})
//# sourceMappingURL=visualisations.js.d6ce73b5ff4c91d1c552.hot-update.js.map