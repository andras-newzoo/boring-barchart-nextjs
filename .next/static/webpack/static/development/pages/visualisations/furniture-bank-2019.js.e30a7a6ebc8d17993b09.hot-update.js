webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/index.jsx":
/*!************************************************!*\
  !*** ./containers/FurnitureBank2019/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "./containers/FurnitureBank2019/containers/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components */ "./components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/furnitureBankReducer/actions */ "./store/furnitureBankReducer/actions.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  color: rgba(0, 0, 0, .2);\n  display: block;\n  z-index: 100;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var ModalBackground = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject());

var Dashboard = function Dashboard() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.furnitureBankReducer;
  }),
      openModal = _useSelector.openModal;

  var handleToggleModal = function handleToggleModal() {
    return dispatch(Object(_store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_8__["toggleModal"])());
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(ModalBackground, {
    onClick: handleToggleModal,
    visible: openModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["FixedInfoButton"], {
    top: 0,
    right: 0,
    height: 120,
    width: 120,
    round: true,
    corner: true,
    background: _styles__WEBPACK_IMPORTED_MODULE_3__["colorGreen"],
    translate: "50%, -50%",
    iconComponent: __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["QuestionMarkGillSemiBold"], {
      height: 25,
      width: 25,
      fill: "#fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }),
    iconLeft: "19%",
    iconBottom: "17%",
    handleClick: handleToggleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), __jsx(_containers__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_4__["MapContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_4__["FamiliesContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_4__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "What is the estimated environmental impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_4__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "What is the estimated CO2 emission saved?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.furniturebank.org/request-a-pick-up/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("img", {
    className: "button",
    src: "/static/icons/furnitureBank/requestButton.svg",
    alt: "request button icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.e30a7a6ebc8d17993b09.hot-update.js.map