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
  var noData = _ref.noData;
  var selected = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAllSelected"]);
  var adults = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAdults"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, selected.length === 0 && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ChartTitle"], {
    message: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Please start by adding furnitures!"), noData && selected.length > 0 && !adults && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ChartTitle"], {
    message: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Sorry, we don't have data for the selected ", selected.length === 1 ? 'item' : 'items', "!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./containers/FurnitureBank2019/components/index.js":
/*!**********************************************************!*\
  !*** ./containers/FurnitureBank2019/components/index.js ***!
  \**********************************************************/
/*! exports provided: ControlContainer, MapContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ControlContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlContainer */ "./containers/FurnitureBank2019/components/ControlContainer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return _ControlContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Map_MapContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map/MapContent */ "./containers/FurnitureBank2019/components/Map/MapContent.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapContent", function() { return _Map_MapContent__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message */ "./containers/FurnitureBank2019/components/Message.jsx");





/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.30204439f6f7b969aec3.hot-update.js.map