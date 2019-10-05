webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./components/AutoComplete/index.jsx":
/*!*******************************************!*\
  !*** ./components/AutoComplete/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_deburr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/deburr */ "./node_modules/lodash/deburr.js");
/* harmony import */ var lodash_deburr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_deburr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-autosuggest */ "./node_modules/react-autosuggest/dist/index.js");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! autosuggest-highlight/match */ "./node_modules/autosuggest-highlight/match/index.js");
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! autosuggest-highlight/parse */ "./node_modules/autosuggest-highlight/parse/index.js");
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles */ "./components/AutoComplete/styles.js");



var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/components/AutoComplete/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;












function _renderInputComponent(inputProps) {
  var classes = inputProps.classes,
      _inputProps$inputRef = inputProps.inputRef,
      _inputRef = _inputProps$inputRef === void 0 ? function () {} : _inputProps$inputRef,
      ref = inputProps.ref,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(inputProps, ["classes", "inputRef", "ref"]);

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    container: true,
    spacing: 1,
    alignItems: "center",
    className: classes.grid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_13__["AddIcon"], {
    color: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    fullWidth: true,
    InputProps: {
      inputRef: function inputRef(node) {
        ref(node);

        _inputRef(node);
      },
      classes: {
        input: classes.input
      }
    }
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))));
}

function getSuggestions(data, itemKey, value) {
  var inputValue = lodash_deburr__WEBPACK_IMPORTED_MODULE_4___default()(value.trim()).toLowerCase();
  var inputLength = inputValue.length;
  var count = 0;
  return inputLength === 0 ? [] : data.filter(function (item) {
    var keep = count < 5 && item[itemKey].slice(0, inputLength).toLowerCase() === inputValue;

    if (keep) {
      count += 1;
    }

    return keep;
  });
}

function AutoComplete(_ref) {
  var data = _ref.data,
      itemKey = _ref.itemKey,
      iconFill = _ref.iconFill;
  var classes = Object(_styles__WEBPACK_IMPORTED_MODULE_13__["useStyles"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      single = _React$useState2[0],
      setSingle = _React$useState2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      stateSuggestions = _useState[0],
      setSuggestions = _useState[1];

  var getSuggestionValue = function getSuggestionValue(item) {
    return item[itemKey];
  };

  var handleSuggestionsFetchRequested = function handleSuggestionsFetchRequested(_ref2) {
    var value = _ref2.value;
    return setSuggestions(getSuggestions(data, itemKey, value));
  };

  var handleSuggestionsClearRequested = function handleSuggestionsClearRequested() {
    return setSuggestions([]);
  };

  var handleChange = function handleChange(_, _ref3) {
    var newValue = _ref3.newValue;
    return setSingle(newValue);
  };

  var renderSuggestion = function renderSuggestion(data, _ref4) {
    var query = _ref4.query,
        isHighlighted = _ref4.isHighlighted;
    var matches = autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_6___default()(data[itemKey], query);
    var parts = autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_7___default()(data[itemKey], matches);
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
      selected: isHighlighted,
      component: "div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, parts.map(function (part) {
      return __jsx("span", {
        key: part.text,
        style: {
          fontWeight: part.highlight ? _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_11__["fontWeightL"] : _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_11__["fontWeightS"]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, part.text);
    })));
  };

  var autosuggestProps = {
    suggestions: stateSuggestions,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue: getSuggestionValue,
    renderSuggestion: renderSuggestion
  };
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(react_autosuggest__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, autosuggestProps, {
    inputProps: {
      classes: classes,
      id: "react-autosuggest-simple",
      placeholder: "Add a new item",
      value: single,
      onChange: handleChange
    },
    theme: {
      container: classes.container,
      suggestionsContainerOpen: classes.suggestionsContainerOpen,
      suggestionsList: classes.suggestionsList,
      suggestion: classes.suggestion
    },
    renderInputComponent: function renderInputComponent(inputProps) {
      return _renderInputComponent(inputProps, iconFill);
    },
    renderSuggestionsContainer: function renderSuggestionsContainer(options) {
      return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options.containerProps, {
        square: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), options.children);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (AutoComplete);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.c4bb4e8c14ac2095de49.hot-update.js.map