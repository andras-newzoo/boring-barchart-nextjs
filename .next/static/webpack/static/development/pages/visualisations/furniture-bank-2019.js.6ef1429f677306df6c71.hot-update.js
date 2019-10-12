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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles */ "./styles/index.js");
/* harmony import */ var _styles_styledElements__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/styledElements */ "./containers/FurnitureBank2019/styles/styledElements.js");
/* harmony import */ var _components_PersonsIcons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/PersonsIcons */ "./containers/FurnitureBank2019/components/PersonsIcons.jsx");
/* harmony import */ var _styles_styledContainers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/styledContainers */ "./containers/FurnitureBank2019/styles/styledContainers.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components */ "./components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
/* harmony import */ var _styles_sharedStyledComponents__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles/sharedStyledComponents */ "./styles/sharedStyledComponents.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks */ "./hooks/index.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    button: {
      background: _styles__WEBPACK_IMPORTED_MODULE_5__["colorGreen"],
      color: "white",
      fontSize: _styles__WEBPACK_IMPORTED_MODULE_8__["fontSizeM"],
      "&:hover": {
        background: _styles__WEBPACK_IMPORTED_MODULE_5__["colorGreen"],
        color: "white"
      }
    }
  };
});
var AVG_DONATION_VALUE = 735;

var Dashboard = function Dashboard() {
  var classes = useStyles();
  var windowSize = Object(_hooks__WEBPACK_IMPORTED_MODULE_16__["useWindowSize"])();
  var totalPrice = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_14__["selectAllSelectedPrice"]);
  var perc = totalPrice / AVG_DONATION_VALUE;
  var fullCount = Math.floor(perc);
  var smallLayout = windowSize.width < 768;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["MapContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_9__["ChartPaper"], {
    gridArea: "families",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["FamilyContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Who will be likely to receive your donation?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["Message"], {
    noData: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx(_components_PersonsIcons__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }))), __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_9__["ChartPaper"], {
    gridArea: "value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartTitle"], {
    contained: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "What is the estimated value of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    justify: "space-evenly",
    area: "abs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, !smallLayout && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), !!totalPrice && __jsx(_components__WEBPACK_IMPORTED_MODULE_12__["ConvertedNumber"], {
    data: totalPrice,
    size: _styles__WEBPACK_IMPORTED_MODULE_8__["fontSizeXL"],
    weight: _styles__WEBPACK_IMPORTED_MODULE_8__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_5__["colorGreen"],
    animate: true,
    prefix: "$",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_11__["DonationPercentageContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, !!perc && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    area: "chart",
    height: smallLayout ? "40%" : "70%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["PercentageChart"], {
    data: perc,
    fullCount: fullCount,
    direction: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    area: "subchart",
    align: "flex-start",
    justify: "flex-start",
    width: "90%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(Math.floor(perc)), function (_, i) {
    return i + 1;
  }).map(function (el) {
    return __jsx("img", {
      key: el,
      style: {
        height: 25,
        marginLeft: 4
      },
      className: "bar",
      src: "/static/icons/furnitureBank/bar.svg",
      alt: "completed bar icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    });
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    area: "percentage",
    align: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    align: smallLayout ? "flex-start" : "flex-end",
    paddingLeft: smallLayout && 1,
    height: "75%",
    direction: smallLayout && "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_12__["ConvertedNumber"], {
    data: perc,
    size: _styles__WEBPACK_IMPORTED_MODULE_8__["fontSizeXL"],
    weight: _styles__WEBPACK_IMPORTED_MODULE_8__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_5__["colorGreen"],
    animate: true,
    perc: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }), __jsx(_styles_sharedStyledComponents__WEBPACK_IMPORTED_MODULE_15__["TextSpan"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "\xA0of avg. donation value"))))), __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "What is the estimated environmental impact of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_9__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_9__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: classes.button,
    variant: "contained",
    disableRipple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "Request a Pickup", __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fontSize: "small",
    className: classes.rightIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.6ef1429f677306df6c71.hot-update.js.map