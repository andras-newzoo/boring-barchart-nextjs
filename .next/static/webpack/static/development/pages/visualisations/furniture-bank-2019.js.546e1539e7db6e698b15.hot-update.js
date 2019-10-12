webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/components/PercentageChart.jsx":
/*!*********************************************************************!*\
  !*** ./containers/FurnitureBank2019/components/PercentageChart.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/PercentageChart.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var PercentageChart = function PercentageChart(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  console.log(svgRef);
  return __jsx("svg", {
    ref: svgRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PercentageChart);

/***/ }),

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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var _styles_styledElements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/styledElements */ "./containers/FurnitureBank2019/styles/styledElements.js");
/* harmony import */ var _components_PersonsIcons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/PersonsIcons */ "./containers/FurnitureBank2019/components/PersonsIcons.jsx");
/* harmony import */ var _styles_styledContainers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/styledContainers */ "./containers/FurnitureBank2019/styles/styledContainers.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles */ "./styles/index.js");
/* harmony import */ var _components_ConvertedNumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ConvertedNumber */ "./components/ConvertedNumber/index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
/* harmony import */ var _styles_sharedStyledComponents__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles/sharedStyledComponents */ "./styles/sharedStyledComponents.js");
/* harmony import */ var _components_PercentageChart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/PercentageChart */ "./containers/FurnitureBank2019/components/PercentageChart.jsx");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    button: {
      background: _styles__WEBPACK_IMPORTED_MODULE_4__["colorGreen"],
      color: "white",
      fontSize: _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_7__["fontSizeM"],
      "&:hover": {
        background: _styles__WEBPACK_IMPORTED_MODULE_4__["colorGreen"],
        color: "white"
      }
    }
  };
});
var AVG_DONATION_VALUE = 735;

var Dashboard = function Dashboard() {
  var classes = useStyles();
  var totalPrice = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_14__["selectAllSelectedPrice"]);
  var perc = totalPrice / AVG_DONATION_VALUE;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["MapContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_8__["ChartPaper"], {
    gridArea: "families",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["FamilyContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Who will be likely to receive your donation?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Message"], {
    noData: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(_components_PersonsIcons__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))), __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_8__["ChartPaper"], {
    gridArea: "value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ChartTitle"], {
    contained: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "What is the estimated value of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_11__["FlexContainer"], {
    justify: "space-evenly",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx(_components_ConvertedNumber__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: totalPrice,
    size: _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_7__["fontSizeXL"],
    weight: _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_7__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_4__["colorGreen"],
    animate: true,
    prefix: "$",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_10__["DonationPercentageContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_11__["FlexContainer"], {
    area: "chart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_components_PercentageChart__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_11__["FlexContainer"], {
    area: "subchart",
    align: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Subchart area"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_11__["FlexContainer"], {
    area: "percentage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_11__["FlexContainer"], {
    align: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(_components_ConvertedNumber__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: perc,
    size: _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_7__["fontSizeXL"],
    weight: _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_7__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_4__["colorGreen"],
    animate: true,
    perc: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx(_styles_sharedStyledComponents__WEBPACK_IMPORTED_MODULE_15__["TextSpan"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "\xA0of avg. donation value")))), __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "What is the estimated environmental impact of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_8__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_8__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: classes.button,
    variant: "contained",
    disableRipple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Request a Pickup", __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fontSize: "small",
    className: classes.rightIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.546e1539e7db6e698b15.hot-update.js.map