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
      area: el.area,
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
        lineNumber: 23
      },
      __self: this
    }, el.title), el.text.map(function (par) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, par), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }));
    }), el.gif && __jsx("img", {
      src: el.gif,
      alt: el.gifAlt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalComponent);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.93e94c8e0f348e129605.hot-update.js.map