webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/index.jsx":
/*!************************************************!*\
  !*** ./containers/FurnitureBank2019/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers */ "./containers/FurnitureBank2019/containers/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles */ "./styles/index.js");
/* harmony import */ var _styles_styledContainers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/styledContainers */ "./containers/FurnitureBank2019/styles/styledContainers.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components */ "./components/index.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    button: {
      background: _styles__WEBPACK_IMPORTED_MODULE_6__["colorRed"],
      color: "white",
      fontSize: _styles__WEBPACK_IMPORTED_MODULE_9__["fontSizeM"],
      boxShadow: "none",
      "&:hover": {
        background: _styles__WEBPACK_IMPORTED_MODULE_6__["colorRed"],
        color: "white"
      }
    }
  };
});
var AVG_MONTHLY_WASTE = 130;
var AVG_WEEKLY_WASTE = 30;

var Dashboard = function Dashboard() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      monthCount = _useState[0],
      setMonthCount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      weekCount = _useState2[0],
      setWeekCount = _useState2[1];

  var items = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_12__["selectAllSelectedItems"]);
  var price = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_12__["selectAllSelectedPrice"]);
  var weight = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_12__["selectAllSelectedWeight"]);
  var volume = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_12__["selectAllSelectedVolume"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var getMonth = function getMonth() {
      return Math.floor(weight / AVG_MONTHLY_WASTE);
    };

    if (getMonth() !== monthCount) {
      setMonthCount(getMonth());
    }
  }, [monthCount, weight]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var getWeek = function getWeek() {
      return Math.floor((weight - monthCount * AVG_MONTHLY_WASTE) / AVG_WEEKLY_WASTE);
    };

    if (getWeek() !== weekCount) {
      setWeekCount(getWeek());
    }
  }, [monthCount, weekCount, weight]);
  var monthText = monthCount > 1 ? 'months' : 'month';
  var weekText = weekCount > 1 ? 'weeks' : 'week';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), __jsx(_containers__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_7__["MapContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_7__["FamiliesContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_7__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "What is the estimated environmental impact of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ChartPaper"], {
    gridArea: "landfill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "What is the estimated amount of waste saved?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), weight && __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_10__["LandFillSubContainer"], {
    gridArea: "weight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["FlexContainer"], {
    area: "num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_13__["ConvertedNumber"], {
    data: weight,
    size: _styles__WEBPACK_IMPORTED_MODULE_9__["fontSizeXL"],
    weight: _styles__WEBPACK_IMPORTED_MODULE_9__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_6__["colorGreen"],
    animate: true,
    smallSuffix: true,
    suffixSize: _styles__WEBPACK_IMPORTED_MODULE_9__["fontSizeM"],
    suffixLineHeight: 1.5,
    customSuffix: "lbs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["FlexContainer"], {
    area: "icon",
    align: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, !!monthCount && _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(Math.floor(monthCount)), function (_, i) {
    return i + 1;
  }).map(function (el) {
    return __jsx("img", {
      key: el,
      className: "garbage-month",
      src: "/static/icons/furnitureBank/garbage.svg",
      alt: "garbage month icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    });
  }), !!weekCount && _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(Math.floor(weekCount)), function (_, i) {
    return i + 1;
  }).map(function (el) {
    return __jsx("img", {
      key: el,
      className: "garbage-week",
      src: "/static/icons/furnitureBank/garbage.svg",
      alt: "garbage week icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    });
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["FlexContainer"], {
    area: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["TextSpan"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, !!monthCount && "".concat(monthCount, " ").concat(monthText), !!weekCount ? "".concat(weekCount, " ").concat(weekText) : "Less than 1 ".concat(weekText), ' ', " of waste in an avg. Canadian household"))), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_10__["LandFillSubContainer"], {
    gridArea: "volume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["FlexContainer"], {
    area: "num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "Number"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["FlexContainer"], {
    area: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "Icons"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["FlexContainer"], {
    area: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["TextSpan"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Equivalent to 20% of an avg. cargo container"))))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "What is the estimated CO2 emission saved?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: classes.button,
    variant: "contained",
    disableRipple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "Request a Pickup"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.5a98d18152807e7eaf21.hot-update.js.map