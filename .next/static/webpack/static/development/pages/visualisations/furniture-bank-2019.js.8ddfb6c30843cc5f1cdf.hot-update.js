webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/containers/LandFillContainer.jsx":
/*!***********************************************************************!*\
  !*** ./containers/FurnitureBank2019/containers/LandFillContainer.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "./utils/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles */ "./styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components */ "./components/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/containers/LandFillContainer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var AVG_MONTHLY_WASTE = 130;
var AVG_WEEKLY_WASTE = 30;
var CARGO_VOLUME = 1179;

var LandFillContainer = function LandFillContainer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      monthCount = _useState[0],
      setMonthCount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      weekCount = _useState2[0],
      setWeekCount = _useState2[1];

  var weight = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAllSelectedWeight"]);
  var volume = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAllSelectedVolume"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var getMonth = function getMonth() {
      return Math.floor(weight / AVG_MONTHLY_WASTE);
    };

    if (getMonth() !== monthCount) {
      setMonthCount(getMonth());
    }
  }, [monthCount, weight]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var getWeek = function getWeek() {
      return Math.floor((weight - monthCount * AVG_MONTHLY_WASTE) / AVG_WEEKLY_WASTE);
    };

    if (getWeek() !== weekCount) {
      setWeekCount(getWeek());
    }
  }, [monthCount, weekCount, weight]);
  var monthText = monthCount > 1 ? "months" : "month";
  var weekText = weekCount > 1 ? "weeks" : "week";
  var monthArray = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getArray"])(monthCount);
  var weekArray = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getArray"])(weekCount);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ChartPaper"], {
    gridArea: "landfill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "What is the estimated amount of waste saved?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), !!weight && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["LandFillSubContainer"], {
    gridArea: "weight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["FlexContainer"], {
    area: "num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["ConvertedNumber"], {
    data: weight,
    size: _styles__WEBPACK_IMPORTED_MODULE_6__["fontSizeXL"],
    weight: _styles__WEBPACK_IMPORTED_MODULE_6__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_1__["colorGreen"],
    animate: true,
    smallSuffix: true,
    suffixSize: _styles__WEBPACK_IMPORTED_MODULE_6__["fontSizeM"],
    suffixLineHeight: 1.5,
    customSuffix: "lbs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["FlexContainer"], {
    area: "icon",
    align: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, monthArray && monthArray.length > 0 && monthArray.map(function (el) {
    return __jsx("img", {
      key: el,
      className: "garbage-month",
      src: "/static/icons/furnitureBank/garbage.svg",
      alt: "garbage month icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    });
  }), weekArray && weekArray.length > 0 && weekArray.map(function (el) {
    return __jsx("img", {
      key: el,
      className: "garbage-week",
      src: "/static/icons/furnitureBank/garbage.svg",
      alt: "garbage week icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    });
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["FlexContainer"], {
    area: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["TextSpan"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, !!monthCount && "".concat(monthCount, " ").concat(monthText), !!monthCount && !!weekCount && " and ", !!weekCount ? "".concat(weekCount, " ").concat(weekText) : !monthCount && "Less than 1 ".concat(weekText), " ", "of waste in an avg. Canadian household"))), !!volume && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["LandFillSubContainer"], {
    gridArea: "volume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["FlexContainer"], {
    area: "num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["ConvertedNumber"], {
    data: volume,
    size: _styles__WEBPACK_IMPORTED_MODULE_6__["fontSizeXL"],
    weight: _styles__WEBPACK_IMPORTED_MODULE_6__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_1__["colorGreen"],
    animate: true,
    smallSuffix: true,
    suffixSize: _styles__WEBPACK_IMPORTED_MODULE_6__["fontSizeM"],
    suffixLineHeight: 1.5,
    customSuffix: "cu.ft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["FlexContainer"], {
    area: "icon",
    align: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ContainerChart"], {
    height: volume / CARGO_VOLUME,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["FlexContainer"], {
    area: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("img", {
    className: "container",
    src: "/static/icons/furnitureBank/container.svg",
    alt: "container icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["FlexContainer"], {
    area: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["TextSpan"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Equivalent to", " ", __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["ConvertedNumber"], {
    data: volume / CARGO_VOLUME,
    display: "inline-block",
    perc: true,
    animate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), " ", "of an avg. cargo container")))));
};

/* harmony default export */ __webpack_exports__["default"] = (LandFillContainer);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.8ddfb6c30843cc5f1cdf.hot-update.js.map