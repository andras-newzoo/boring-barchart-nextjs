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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles */ "./styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components */ "./components/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks */ "./hooks/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    button: {
      background: _styles__WEBPACK_IMPORTED_MODULE_6__["colorGreen"],
      color: "white",
      fontSize: _styles__WEBPACK_IMPORTED_MODULE_8__["fontSizeM"],
      "&:hover": {
        background: _styles__WEBPACK_IMPORTED_MODULE_6__["colorGreen"],
        color: "white"
      }
    }
  };
});

var Dashboard = function Dashboard() {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["MapContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ChartPaper"], {
    gridArea: "families",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["FamilyContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Who will be likely to receive your donation?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Message"], {
    noData: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["PersonIcons"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "What is the estimated environmental impact of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: classes.button,
    variant: "contained",
    disableRipple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Request a Pickup", __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fontSize: "small",
    className: classes.rightIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.4cf35b1497ea789aadb8.hot-update.js.map