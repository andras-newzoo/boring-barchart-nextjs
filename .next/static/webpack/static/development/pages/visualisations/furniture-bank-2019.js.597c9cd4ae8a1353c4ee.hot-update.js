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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ "./components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/furnitureBankReducer/actions */ "./store/furnitureBankReducer/actions.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles */ "./styles/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var Dashboard = function Dashboard() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.furnitureBankReducer;
  }),
      openModal = _useSelector.openModal;

  var handleToggleModal = function handleToggleModal() {
    return dispatch(Object(_store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_7__["toggleModal"])());
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    open: openModal,
    handleClick: handleToggleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ModalContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["FlexContainer"], {
    direction: "column",
    align: "flex-start",
    justify: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["TextSpan"], {
    paddingBottom: 1,
    weight: _styles__WEBPACK_IMPORTED_MODULE_10__["fontWeightL"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "What is Furniture Bank?"), "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, temporibus excepturi ratione reprehenderit expedita adipisci tempora voluptatem iure quos impedit."), __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["FlexContainer"], {
    direction: "column",
    align: "flex-start",
    justify: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["TextSpan"], {
    paddingBottom: 1,
    weight: _styles__WEBPACK_IMPORTED_MODULE_10__["fontWeightL"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\u200F\u200F\u200E \u200E "), "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam officiis et sapiente atque molestiae voluptas dolore aperiam? Aliquid optio, quam ipsum voluptas nesciunt dolorem. Fuga?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["FlexContainer"], {
    border: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["FlexContainer"], {
    border: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["FlexContainer"], {
    border: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["FlexContainer"], {
    border: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["FixedInfoButton"], {
    top: 0,
    right: 0,
    height: 120,
    width: 120,
    round: true,
    corner: true,
    background: _styles__WEBPACK_IMPORTED_MODULE_2__["colorGreen"],
    translate: "50%, -50%",
    iconComponent: __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["QuestionMarkGillSemiBold"], {
      height: 25,
      width: 25,
      fill: "#fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }),
    iconLeft: "19%",
    iconBottom: "17%",
    handleClick: handleToggleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["MapContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["FamiliesContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "What is the estimated environmental impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "What is the estimated CO2 emission saved?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.furniturebank.org/request-a-pick-up/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("img", {
    className: "button",
    src: "/static/icons/furnitureBank/requestButton.svg",
    alt: "request button icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.597c9cd4ae8a1353c4ee.hot-update.js.map