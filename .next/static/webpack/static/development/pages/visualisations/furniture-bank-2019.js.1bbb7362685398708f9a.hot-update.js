webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/components/ControlContainer.jsx":
false,

/***/ "./containers/FurnitureBank2019/components/index.js":
/*!**********************************************************!*\
  !*** ./containers/FurnitureBank2019/components/index.js ***!
  \**********************************************************/
/*! exports provided: Message, PercentageChart, PersonIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message */ "./containers/FurnitureBank2019/components/Message.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _Message__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PercentageChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PercentageChart */ "./containers/FurnitureBank2019/components/PercentageChart.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PercentageChart", function() { return _PercentageChart__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _PersonsIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PersonsIcons */ "./containers/FurnitureBank2019/components/PersonsIcons.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonIcons", function() { return _PersonsIcons__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./containers/FurnitureBank2019/containers/ControlContainer.jsx":
/*!**********************************************************************!*\
  !*** ./containers/FurnitureBank2019/containers/ControlContainer.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ "./components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/actions */ "./store/furnitureBankReducer/actions.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/containers/ControlContainer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var ControlContainer = function ControlContainer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      dimensions = _useState[0],
      setDimensions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      windowWidth = _useState2[0],
      setWindowWidth = _useState2[1];

  var panelContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var panelWidth = panelContainerRef.current.clientWidth;
    var panelHeight = panelContainerRef.current.clientHeight;
    setDimensions({
      width: panelWidth,
      height: panelHeight
    });
  }, [panelContainerRef, windowWidth]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('resize', handleResize);
  }, []);

  var handleResize = function handleResize() {
    return setWindowWidth(window.innerWidth);
  };

  var handleSelected = function handleSelected(selected) {
    return dispatch(Object(_store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_4__["addItem"])(selected));
  };

  var _handleIncrementClick = function handleIncrementClick(item) {
    return dispatch(Object(_store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_4__["incrementItem"])(item));
  };

  var _handleDecrementClick = function handleDecrementClick(item) {
    return dispatch(Object(_store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_4__["decrementItem"])(item));
  };

  var _handleDeleteClick = function handleDeleteClick(item) {
    return dispatch(Object(_store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_4__["deleteItem"])(item));
  };

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.furnitureBankReducer;
  }),
      selectedItems = _useSelector.selectedItems;

  var allUnselected = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_5__["selectAllUnselected"]);
  var totalQuantity = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_5__["selectTotalQuantity"]);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Items to Donate ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\xA0 ( ", totalQuantity, " )")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["PanelContainer"], {
    ref: panelContainerRef,
    height: dimensions && dimensions.height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, selectedItems.length > 0 && selectedItems.map(function (item) {
    return __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["ItemChip"], {
      key: item.name,
      handleIncrementClick: function handleIncrementClick() {
        return _handleIncrementClick(item.name);
      },
      handleDecrementClick: function handleDecrementClick() {
        return _handleDecrementClick(item.name);
      },
      handleDeleteClick: function handleDeleteClick() {
        return _handleDeleteClick(item.name);
      },
      content: item.name,
      quantity: item.quantity,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    });
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["AutoComplete"], {
    data: allUnselected,
    itemKey: "product_name",
    handleSelected: handleSelected,
    iconColor: _styles__WEBPACK_IMPORTED_MODULE_1__["colorGreen"],
    style: dimensions && {
      width: dimensions.width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ControlContainer);

/***/ }),

/***/ "./containers/FurnitureBank2019/containers/index.js":
/*!**********************************************************!*\
  !*** ./containers/FurnitureBank2019/containers/index.js ***!
  \**********************************************************/
/*! exports provided: ValueContainer, MapContainer, ControlContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ValueContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueContainer */ "./containers/FurnitureBank2019/containers/ValueContainer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueContainer", function() { return _ValueContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapContainer */ "./containers/FurnitureBank2019/containers/MapContainer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapContainer", function() { return _MapContainer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ControlContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ControlContainer */ "./containers/FurnitureBank2019/containers/ControlContainer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return _ControlContainer__WEBPACK_IMPORTED_MODULE_2__["default"]; });






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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers */ "./containers/FurnitureBank2019/containers/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles */ "./styles/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
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

var Dashboard = function Dashboard() {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx(_containers__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_6__["MapContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartPaper"], {
    gridArea: "families",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["FamilyContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Who will be likely to receive your donation?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Message"], {
    noData: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["PersonIcons"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }))), __jsx(_containers__WEBPACK_IMPORTED_MODULE_6__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "What is the estimated environmental impact of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartPaper"], {
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
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: classes.button,
    variant: "contained",
    disableRipple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Request a Pickup", __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fontSize: "small",
    className: classes.rightIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.1bbb7362685398708f9a.hot-update.js.map