webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/components/Modal.jsx":
/*!***********************************************************!*\
  !*** ./containers/FurnitureBank2019/components/Modal.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components */ "./components/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles */ "./styles/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/Modal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ModalComponent = function ModalComponent(_ref) {
  var openModal = _ref.openModal,
      handleClick = _ref.handleClick,
      data = _ref.data;
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    open: openModal,
    handleClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ModalContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("span", {
    className: "icon",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "\xD7"), data.map(function (el) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
      direction: "column",
      align: "flex-start",
      justify: "flex-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["TextSpan"], {
      paddingBottom: 1,
      weight: _styles__WEBPACK_IMPORTED_MODULE_3__["fontWeightL"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, el.title), el.text.map(function (par) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, par), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    }), el.gif && __jsx("img", {
      src: el.gif,
      alt: el.gifAlt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalComponent);

/***/ }),

/***/ "./containers/FurnitureBank2019/components/index.js":
/*!**********************************************************!*\
  !*** ./containers/FurnitureBank2019/components/index.js ***!
  \**********************************************************/
/*! exports provided: Message, PercentageChart, PersonIcons, BarChart, ModalComponent, InfoButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message */ "./containers/FurnitureBank2019/components/Message.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _Message__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PercentageChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PercentageChart */ "./containers/FurnitureBank2019/components/PercentageChart.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PercentageChart", function() { return _PercentageChart__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _PersonsIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PersonsIcons */ "./containers/FurnitureBank2019/components/PersonsIcons.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonIcons", function() { return _PersonsIcons__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _BarChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BarChart */ "./containers/FurnitureBank2019/components/BarChart.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarChart", function() { return _BarChart__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ "./containers/FurnitureBank2019/components/Modal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _Modal__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _InfoButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InfoButton */ "./containers/FurnitureBank2019/components/InfoButton.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoButton", function() { return _InfoButton__WEBPACK_IMPORTED_MODULE_5__["default"]; });









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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./containers/FurnitureBank2019/containers/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ "./components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/furnitureBankReducer/actions */ "./store/furnitureBankReducer/actions.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles */ "./styles/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Dashboard = function Dashboard() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.furnitureBankReducer;
  }),
      openModal = _useSelector.openModal,
      modalText = _useSelector.modalText;

  var handleToggleModal = function handleToggleModal() {
    return dispatch(Object(_store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_7__["toggleModal"])());
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], {
    openModal: openModal,
    handleClick: handleToggleModal,
    data: modalText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["InfoButton"], {
    handleClick: handleToggleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["MapContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["FamiliesContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "What is the estimated environmental impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "What is the estimated CO2 emission saved?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.furniturebank.org/request-a-pick-up/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("img", {
    className: "button",
    src: "/static/icons/furnitureBank/requestButton.svg",
    alt: "request button icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js":
false

})
//# sourceMappingURL=furniture-bank-2019.js.be9d9fb05ce9d52c54d1.hot-update.js.map