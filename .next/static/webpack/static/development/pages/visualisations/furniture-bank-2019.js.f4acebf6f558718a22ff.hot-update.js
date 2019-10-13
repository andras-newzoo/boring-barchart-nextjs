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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 600px;\n  height: 300px;\n  z-index: 1100;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, .4);\n  display: ", ";\n  z-index: 1000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var ModalBackground = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject(), function (props) {
  return props.visible ? 'block' : 'none';
});
var ModalPaper = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Paper"])(_templateObject2());

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
      lineNumber: 64
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(ModalBackground, {
    onClick: handleToggleModal,
    visible: openModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(ModalPaper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Hello"), __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["FixedInfoButton"], {
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
        lineNumber: 86
      },
      __self: this
    }),
    iconLeft: "19%",
    iconBottom: "17%",
    handleClick: handleToggleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), __jsx(_containers__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_4__["MapContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_4__["FamiliesContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_4__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "What is the estimated environmental impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_4__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "What is the estimated CO2 emission saved?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.furniturebank.org/request-a-pick-up/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("img", {
    className: "button",
    src: "/static/icons/furnitureBank/requestButton.svg",
    alt: "request button icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.f4acebf6f558718a22ff.hot-update.js.map