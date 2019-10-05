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

var getSuggestionValue = function getSuggestionValue(suggestion) {
  return console.log(suggestion);
}; //`${suggestion.first} ${suggestion.last}`


var getSuggestions = function getSuggestions(data, key, value) {
  var escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  var regex = new RegExp("\\b" + escapedValue, "i");
  console.log(data, key);
  return data.filter(function (el) {
    return regex.test(getSuggestionValue(el[key]));
  });
};

var renderSuggestion = function renderSuggestion(suggestion, _ref) {
  var query = _ref.query;
  console.log(suggestion); // const suggestionText = `${suggestion.first} ${suggestion.last}`;
  // const matches = match(suggestionText, query);
  // const parts = parse(suggestionText, matches);
  // return (
  //   <span className={"suggestion-content " + suggestion.twitter}>
  //     <span className="name">
  //       {parts.map((part, index) => {
  //         const className = part.highlight ? "highlight" : null;
  //         return (
  //           <span className={className} key={index}>
  //             {part.text}
  //           </span>
  //         );
  //       })}
  //     </span>
  //   </span>
  // );
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

  console.log('key', itemKey);

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
  return __jsx(react_autosuggest__WEBPACK_IMPORTED_MODULE_1___default.a, {
    suggestions: suggestions,
    onSuggestionsFetchRequested: onSuggestionsFetchRequested,
    onSuggestionsClearRequested: onSuggestionsClearRequested,
    getSuggestionValue: getSuggestionValue,
    renderSuggestion: renderSuggestion,
    inputProps: inputProps,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AutoComplete);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.7bc178c68810656bd850.hot-update.js.map