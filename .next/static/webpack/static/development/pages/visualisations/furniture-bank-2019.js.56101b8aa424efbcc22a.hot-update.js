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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles */ "./styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components */ "./components/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks */ "./hooks/index.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    button: {
      background: _styles__WEBPACK_IMPORTED_MODULE_7__["colorGreen"],
      color: "white",
      fontSize: _styles__WEBPACK_IMPORTED_MODULE_9__["fontSizeM"],
      "&:hover": {
        background: _styles__WEBPACK_IMPORTED_MODULE_7__["colorGreen"],
        color: "white"
      }
    }
  };
});
var AVG_DONATION_VALUE = 735;

var Dashboard = function Dashboard() {
  var classes = useStyles();
  var windowSize = Object(_hooks__WEBPACK_IMPORTED_MODULE_12__["useWindowSize"])();
  var totalPrice = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_11__["selectAllSelectedPrice"]);
  var perc = totalPrice / AVG_DONATION_VALUE;
  var fullCount = Math.floor(perc);
  var smallLayout = windowSize.width < 768;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["MapContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["ChartPaper"], {
    gridArea: "families",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["FamilyContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Who will be likely to receive your donation?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Message"], {
    noData: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["PersonIcons"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["ChartPaper"], {
    gridArea: "value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["ChartTitle"], {
    contained: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "What is the estimated value of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["FlexContainer"], {
    justify: "space-evenly",
    area: "abs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, !smallLayout && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), !!totalPrice && __jsx(_components__WEBPACK_IMPORTED_MODULE_10__["ConvertedNumber"], {
    data: totalPrice,
    size: _styles__WEBPACK_IMPORTED_MODULE_9__["fontSizeXL"],
    weight: _styles__WEBPACK_IMPORTED_MODULE_9__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_7__["colorGreen"],
    animate: true,
    prefix: "$",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["DonationPercentageContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, !!perc && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["FlexContainer"], {
    area: "chart",
    height: smallLayout ? "40%" : "70%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["PercentageChart"], {
    data: perc,
    fullCount: fullCount,
    direction: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["FlexContainer"], {
    area: "subchart",
    align: "flex-start",
    justify: smallLayout && "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["FlexContainer"], {
    justify: "flex-start",
    align: "flex-start",
    width: "90%",
    height: "90%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(Math.floor(perc)), function (_, i) {
    return i + 1;
  }).map(function (el) {
    return __jsx("img", {
      key: el,
      style: {
        height: smallLayout ? 40 : 25,
        marginLeft: 4
      },
      className: "bar",
      src: "/static/icons/furnitureBank/bar.svg",
      alt: "completed bar icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    });
  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["FlexContainer"], {
    area: "percentage",
    align: smallLayout && "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["FlexContainer"], {
    align: smallLayout ? "flex-start" : "flex-end",
    paddingLeft: smallLayout && 1,
    height: smallLayout ? "50%" : "75%",
    direction: smallLayout && "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_10__["ConvertedNumber"], {
    data: perc,
    size: _styles__WEBPACK_IMPORTED_MODULE_9__["fontSizeXL"],
    weight: _styles__WEBPACK_IMPORTED_MODULE_9__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_7__["colorGreen"],
    animate: true,
    perc: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["TextSpan"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "\xA0of avg. donation value"))))), __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "What is the estimated environmental impact of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: classes.button,
    variant: "contained",
    disableRipple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "Request a Pickup", __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fontSize: "small",
    className: classes.rightIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.56101b8aa424efbcc22a.hot-update.js.map