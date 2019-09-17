webpackHotUpdate("static/development/pages/visualisations.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Box/Box.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Box/index.js":
false,

/***/ "./node_modules/@material-ui/system/esm/borders.js":
false,

/***/ "./node_modules/@material-ui/system/esm/breakpoints.js":
false,

/***/ "./node_modules/@material-ui/system/esm/compose.js":
false,

/***/ "./node_modules/@material-ui/system/esm/css.js":
false,

/***/ "./node_modules/@material-ui/system/esm/display.js":
false,

/***/ "./node_modules/@material-ui/system/esm/flexbox.js":
false,

/***/ "./node_modules/@material-ui/system/esm/index.js":
false,

/***/ "./node_modules/@material-ui/system/esm/memoize.js":
false,

/***/ "./node_modules/@material-ui/system/esm/merge.js":
false,

/***/ "./node_modules/@material-ui/system/esm/palette.js":
false,

/***/ "./node_modules/@material-ui/system/esm/positions.js":
false,

/***/ "./node_modules/@material-ui/system/esm/responsivePropType.js":
false,

/***/ "./node_modules/@material-ui/system/esm/shadows.js":
false,

/***/ "./node_modules/@material-ui/system/esm/sizing.js":
false,

/***/ "./node_modules/@material-ui/system/esm/spacing.js":
false,

/***/ "./node_modules/@material-ui/system/esm/style.js":
false,

/***/ "./node_modules/@material-ui/system/esm/typography.js":
false,

/***/ "./pages/visualisations/index.js":
/*!***************************************!*\
  !*** ./pages/visualisations/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _components_ImageCard_ImageCard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ImageCard/ImageCard.component */ "./components/ImageCard/ImageCard.component.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _static_data_mainContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../static/data/mainContent */ "./static/data/mainContent.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _components_NavBar_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/NavBar/Header */ "./components/NavBar/Header.jsx");


var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/pages/visualisations/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var ImageCardContainer = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_9__["styled"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"])({
  overflow: 'hidden',
  minHeight: '100%',
  maxHeight: '100%'
});
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  var _placeholder;

  return {
    placeholder: (_placeholder = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_placeholder, theme.breakpoints.down('lg'), {
      height: '15rem'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_placeholder, theme.breakpoints.down('md'), {
      height: '12.5rem'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_placeholder, theme.breakpoints.down('sm'), {
      height: '10rem'
    }), _placeholder)
  };
});

var Index = function Index() {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_NavBar_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("div", {
    className: classes.placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, _static_data_mainContent__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (c) {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true,
      xs: 12,
      sm: 6,
      md: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(ImageCardContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(_components_ImageCard_ImageCard_component__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, c, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }))));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=visualisations.js.8eb0e4cc19e246b32e85.hot-update.js.map