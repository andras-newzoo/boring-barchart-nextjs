webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/containers/FamiliesContainer.jsx":
/*!***********************************************************************!*\
  !*** ./containers/FurnitureBank2019/containers/FamiliesContainer.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles */ "./styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/containers/FamiliesContainer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var FamiliesContainer = function FamiliesContainer() {
  var clientGroups = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_5__["selectTopGroups"]);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ChartPaper"], {
    gridArea: "families",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["FamilyContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Who will be likely to receive your donation?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    noData: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["PersonIcons"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    height: "75%",
    width: "85%",
    marginTop: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, !!clientGroups[0].share && __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["BarChart"], {
    data: clientGroups,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FamiliesContainer);

/***/ }),

/***/ "./containers/FurnitureBank2019/containers/index.js":
/*!**********************************************************!*\
  !*** ./containers/FurnitureBank2019/containers/index.js ***!
  \**********************************************************/
/*! exports provided: ValueContainer, MapContainer, ControlContainer, FamiliesContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ValueContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueContainer */ "./containers/FurnitureBank2019/containers/ValueContainer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueContainer", function() { return _ValueContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapContainer */ "./containers/FurnitureBank2019/containers/MapContainer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapContainer", function() { return _MapContainer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ControlContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ControlContainer */ "./containers/FurnitureBank2019/containers/ControlContainer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return _ControlContainer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _FamiliesContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FamiliesContainer */ "./containers/FurnitureBank2019/containers/FamiliesContainer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FamiliesContainer", function() { return _FamiliesContainer__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.901914c3a10ee9b313ac.hot-update.js.map