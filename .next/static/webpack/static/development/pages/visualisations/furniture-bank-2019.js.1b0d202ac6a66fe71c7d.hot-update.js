webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./components/AutoComplete/index.jsx":
/*!*******************************************!*\
  !*** ./components/AutoComplete/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-autosuggest */ "./node_modules/react-autosuggest/dist/index.js");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! autosuggest-highlight/match */ "./node_modules/autosuggest-highlight/match/index.js");
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! autosuggest-highlight/parse */ "./node_modules/autosuggest-highlight/parse/index.js");
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./components/AutoComplete/styles.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/components/AutoComplete/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var escapeRegexCharacters = function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

var _getSuggestionValue = function getSuggestionValue(suggestion, key) {
  return suggestion[key];
};

var getSuggestions = function getSuggestions(data, key, value) {
  var escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  var regex = new RegExp("\\b" + escapedValue, "i");
  return data.filter(function (el) {
    return regex.test(el[key]);
  });
};

var _renderSuggestion = function renderSuggestion(suggestion, _ref, key) {
  var query = _ref.query;
  var suggestionText = suggestion[key];
  var matches = autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_3___default()(suggestionText, query);
  var parts = autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_4___default()(suggestionText, matches);
  return __jsx("span", {
    className: "suggestion-content " + suggestion.twitter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, parts.map(function (part, index) {
    var className = part.highlight ? "highlight" : null;
    return __jsx("span", {
      className: className,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, part.text);
  })));
};

var AutoComplete = function AutoComplete(_ref2) {
  var data = _ref2.data,
      itemKey = _ref2.itemKey,
      style = _ref2.style;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      suggestions = _useState2[0],
      setSuggestions = _useState2[1];

  var handleOnChange = function handleOnChange(_, _ref3) {
    var newValue = _ref3.newValue;
    return setValue(newValue);
  };

  var onSuggestionsFetchRequested = function onSuggestionsFetchRequested(_ref4) {
    var value = _ref4.value;
    return setSuggestions(getSuggestions(data, itemKey, value));
  };

  var onSuggestionsClearRequested = function onSuggestionsClearRequested() {
    return setSuggestions([]);
  };

  var inputProps = {
    placeholder: "Add new item",
    value: value,
    onChange: handleOnChange
  };
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["Container"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
    width: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(react_autosuggest__WEBPACK_IMPORTED_MODULE_2___default.a, {
    suggestions: suggestions,
    onSuggestionsFetchRequested: onSuggestionsFetchRequested,
    onSuggestionsClearRequested: onSuggestionsClearRequested,
    getSuggestionValue: function getSuggestionValue(suggestion) {
      return _getSuggestionValue(suggestion, itemKey);
    },
    renderSuggestion: function renderSuggestion(suggestion, query) {
      return _renderSuggestion(suggestion, query, itemKey);
    },
    inputProps: inputProps,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AutoComplete);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.1b0d202ac6a66fe71c7d.hot-update.js.map