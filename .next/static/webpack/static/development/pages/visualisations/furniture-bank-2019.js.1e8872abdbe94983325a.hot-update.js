webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./components/AutoComplete/index.jsx":
/*!*******************************************!*\
  !*** ./components/AutoComplete/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-autosuggest */ "./node_modules/react-autosuggest/dist/index.js");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! autosuggest-highlight/match */ "./node_modules/autosuggest-highlight/match/index.js");
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! autosuggest-highlight/parse */ "./node_modules/autosuggest-highlight/parse/index.js");
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./components/AutoComplete/styles.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/components/AutoComplete/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











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
  var matches = autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_2___default()(suggestionText, query);
  var parts = autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_3___default()(suggestionText, matches);
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
      itemKey = _ref2.itemKey;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
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
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(react_autosuggest__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
      lineNumber: 68
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AutoComplete);

/***/ }),

/***/ "./components/AutoComplete/styles.js":
/*!*******************************************!*\
  !*** ./components/AutoComplete/styles.js ***!
  \*******************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body {\n    font-family: Helvetica, sans-serif;\n  }\n\n  .react-autosuggest__container {\n    position: relative;\n  }\n\n  .react-autosuggest__input {\n    width: 240px;\n    height: 30px;\n    padding: 10px 20px;\n    font-family: Helvetica, sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    border: 1px solid #aaa;\n    border-radius: 4px;\n  }\n\n  .react-autosuggest__input:focus {\n    outline: none;\n  }\n\n  .react-autosuggest__container--open .react-autosuggest__input {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n  .react-autosuggest__suggestions-container {\n    display: none;\n  }\n\n  .react-autosuggest__container--open\n    .react-autosuggest__suggestions-container {\n    display: block;\n    position: absolute;\n    top: 51px;\n    width: 280px;\n    border: 1px solid #aaa;\n    background-color: #fff;\n    font-family: Helvetica, sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n    z-index: 2;\n  }\n\n  .react-autosuggest__suggestions-list {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n  }\n\n  .react-autosuggest__suggestion {\n    cursor: pointer;\n    padding: 10px 20px;\n  }\n\n  .react-autosuggest__suggestion:not(:first-child) {\n    border-top: 1px solid #ddd;\n  }\n\n  .react-autosuggest__suggestion--focused {\n    background-color: #0c7eaf;\n    color: #fff;\n  }\n\n  .suggestion-content {\n    display: flex;\n    align-items: center;\n    background-repeat: no-repeat;\n  }\n\n  .dancounsell {\n    background-image: url(https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/48.jpg);\n  }\n\n  .ladylexy {\n    background-image: url(https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/48.jpg);\n  }\n\n  .mtnmissy {\n    background-image: url(https://s3.amazonaws.com/uifaces/faces/twitter/mtnmissy/48.jpg);\n  }\n\n  .steveodom {\n    background-image: url(https://s3.amazonaws.com/uifaces/faces/twitter/steveodom/48.jpg);\n  }\n\n  .name {\n    margin-left: 68px;\n    line-height: 45px;\n  }\n\n  .highlight {\n    color: #ee0000;\n    font-weight: bold;\n  }\n\n  .react-autosuggest__suggestion--focused .highlight {\n    color: #120000;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@material-ui/icons/AddCircleOutline.js":
false,

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
false

})
//# sourceMappingURL=furniture-bank-2019.js.1e8872abdbe94983325a.hot-update.js.map