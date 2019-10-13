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
      lineNumber: 44
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    open: openModal,
    handleClick: handleToggleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ModalContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    direction: "column",
    align: "flex-start",
    justify: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["TextSpan"], {
    paddingBottom: 1,
    weight: _styles__WEBPACK_IMPORTED_MODULE_8__["fontWeightL"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "What is Furniture Bank?"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, temporibus excepturi ratione reprehenderit expedita adipisci tempora voluptatem iure quos impedit."), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, aspernatur.")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    direction: "column",
    align: "flex-start",
    justify: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["TextSpan"], {
    paddingBottom: 1,
    weight: _styles__WEBPACK_IMPORTED_MODULE_8__["fontWeightL"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "\u200F\u200F\u200E \u200E "), "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam officiis et sapiente atque molestiae voluptas dolore aperiam? Aliquid optio, quam ipsum voluptas nesciunt dolorem. Fuga? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate sequi tenetur ipsa delectus nihil dolores reiciendis iure aut quaerat illum!"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    border: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    border: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    border: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    border: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
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
        lineNumber: 99
      },
      __self: this
    }),
    iconLeft: "19%",
    iconBottom: "17%",
    handleClick: handleToggleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["MapContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["FamiliesContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "What is the estimated environmental impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "What is the estimated CO2 emission saved?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.furniturebank.org/request-a-pick-up/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("img", {
    className: "button",
    src: "/static/icons/furnitureBank/requestButton.svg",
    alt: "request button icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.92361efff3b48131b102.hot-update.js.map