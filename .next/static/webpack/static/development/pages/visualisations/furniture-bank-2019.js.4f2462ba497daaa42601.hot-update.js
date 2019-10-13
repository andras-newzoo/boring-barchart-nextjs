webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/index.jsx":
/*!************************************************!*\
  !*** ./containers/FurnitureBank2019/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./containers/FurnitureBank2019/containers/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles */ "./styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components */ "./components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var AVG_MONTHLY_WASTE = 130;
var AVG_WEEKLY_WASTE = 30;
var CARGO_VOLUME = 1179;

var Dashboard = function Dashboard() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      monthCount = _useState[0],
      setMonthCount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      weekCount = _useState2[0],
      setWeekCount = _useState2[1];

  var weight = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_7__["selectAllSelectedWeight"]);
  var volume = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_7__["selectAllSelectedVolume"]);
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
  var monthText = monthCount > 1 ? 'months' : 'month';
  var weekText = weekCount > 1 ? 'weeks' : 'week';
  var monthArray = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getArray"])(monthCount);
  var weekArray = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getArray"])(weekCount);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["MapContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["FamiliesContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "What is the estimated environmental impact of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartPaper"], {
    gridArea: "landfill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "What is the estimated amount of waste saved?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), !!weight && __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["LandFillSubContainer"], {
    gridArea: "weight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["FlexContainer"], {
    area: "num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["ConvertedNumber"], {
    data: weight,
    size: _styles__WEBPACK_IMPORTED_MODULE_5__["fontSizeXL"],
    weight: _styles__WEBPACK_IMPORTED_MODULE_5__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["colorGreen"],
    animate: true,
    smallSuffix: true,
    suffixSize: _styles__WEBPACK_IMPORTED_MODULE_5__["fontSizeM"],
    suffixLineHeight: 1.5,
    customSuffix: "lbs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["FlexContainer"], {
    area: "icon",
    align: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
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
        lineNumber: 134
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
        lineNumber: 146
      },
      __self: this
    });
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["FlexContainer"], {
    area: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["TextSpan"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, !!monthCount && "".concat(monthCount, " ").concat(monthText), !!monthCount && !!weekCount && " and ", !!weekCount ? "".concat(weekCount, " ").concat(weekText) : !monthCount && "Less than 1 ".concat(weekText), ' ', " of waste in an avg. Canadian household"))), !!volume && __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["LandFillSubContainer"], {
    gridArea: "volume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["FlexContainer"], {
    area: "num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["ConvertedNumber"], {
    data: volume,
    size: _styles__WEBPACK_IMPORTED_MODULE_5__["fontSizeXL"],
    weight: _styles__WEBPACK_IMPORTED_MODULE_5__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["colorGreen"],
    animate: true,
    smallSuffix: true,
    suffixSize: _styles__WEBPACK_IMPORTED_MODULE_5__["fontSizeM"],
    suffixLineHeight: 1.5,
    customSuffix: "cu.ft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["FlexContainer"], {
    area: "icon",
    align: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ContainerChart"], {
    height: volume / CARGO_VOLUME,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["FlexContainer"], {
    area: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx("img", {
    className: "container",
    src: "/static/icons/furnitureBank/container.svg",
    alt: "container icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["FlexContainer"], {
    area: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["TextSpan"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "Equivalent to ", ' ', __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["ConvertedNumber"], {
    data: volume / CARGO_VOLUME,
    display: "inline-block",
    perc: true,
    animate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }), ' ', " of an avg. cargo container"))))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "What is the estimated CO2 emission saved?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx("img", {
    className: "button",
    src: "/static/icons/furnitureBank/requestButton.svg",
    alt: "request button icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.4f2462ba497daaa42601.hot-update.js.map