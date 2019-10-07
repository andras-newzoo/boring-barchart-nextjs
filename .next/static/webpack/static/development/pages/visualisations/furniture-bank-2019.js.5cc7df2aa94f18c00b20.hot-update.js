webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/components/Message.jsx":
/*!*************************************************************!*\
  !*** ./containers/FurnitureBank2019/components/Message.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/Message.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Message = function Message(_ref) {
  var noData = _ref.noData,
      withBG = _ref.withBG;
  var selected = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAllSelected"]);
  var adults = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAdults"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, selected.length === 0 && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ChartTitle"], {
    message: true,
    withBG: withBG,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Please start by adding furnitures!"), noData && selected.length > 0 && !adults && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ChartTitle"], {
    message: true,
    withBG: withBG,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Sorry, we don't have data for the selected ", selected.length === 1 ? 'item' : 'items', "!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.5cc7df2aa94f18c00b20.hot-update.js.map