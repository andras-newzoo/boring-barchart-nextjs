webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/containers/ValueContainer.jsx":
/*!********************************************************************!*\
  !*** ./containers/FurnitureBank2019/containers/ValueContainer.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles */ "./styles/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks */ "./hooks/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components */ "./components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components */ "./containers/FurnitureBank2019/components/index.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/containers/ValueContainer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var AVG_DONATION_VALUE = 735;

var ValueContainer = function ValueContainer() {
  var windowSize = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useWindowSize"])();
  var totalPrice = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_6__["selectAllSelectedPrice"]);
  var perc = totalPrice / AVG_DONATION_VALUE;
  var fullCount = Math.floor(perc);
  var smallLayout = windowSize.width < 768;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartPaper"], {
    gridArea: "value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartTitle"], {
    contained: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "What is the estimated value of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    justify: "space-evenly",
    area: "abs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, !smallLayout && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), !!totalPrice && __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["ConvertedNumber"], {
    data: totalPrice,
    size: _styles__WEBPACK_IMPORTED_MODULE_3__["fontSizeXL"],
    weight: _styles__WEBPACK_IMPORTED_MODULE_3__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["colorGreen"],
    animate: true,
    prefix: "$",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["DonationPercentageContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, !!perc && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    area: "chart",
    height: smallLayout ? "40%" : "70%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["PercentageChart"], {
    data: perc,
    fullCount: fullCount,
    direction: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    area: "subchart",
    align: "flex-start",
    justify: smallLayout && "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    justify: "flex-start",
    align: "flex-start",
    width: "90%",
    height: "90%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(Math.floor(perc)), function (_, i) {
    return i + 1;
  }).map(function (el) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
      justify: "flex-start",
      align: "flex-start",
      width: smallLayout ? "5%" : "8%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("img", {
      key: el,
      style: {
        height: smallLayout ? '80%' : '55%',
        position: 'absolute'
      },
      className: "bar",
      src: "/static/icons/furnitureBank/bar.svg",
      alt: "completed bar icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }));
  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    area: "percentage",
    align: smallLayout && "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    align: smallLayout ? "flex-start" : "flex-end",
    paddingLeft: smallLayout && 1,
    height: smallLayout ? "50%" : "75%",
    direction: smallLayout && "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["ConvertedNumber"], {
    data: perc,
    size: _styles__WEBPACK_IMPORTED_MODULE_3__["fontSizeXL"],
    weight: _styles__WEBPACK_IMPORTED_MODULE_3__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["colorGreen"],
    animate: true,
    perc: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["TextSpan"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "\xA0of avg. donation value"))))), __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ValueContainer);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.2a83d554db958ba5800c.hot-update.js.map