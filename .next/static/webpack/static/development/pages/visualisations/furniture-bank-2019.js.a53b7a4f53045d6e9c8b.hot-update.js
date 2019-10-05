webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./components/AutoComplete/helperFunctions.js":
/*!****************************************************!*\
  !*** ./components/AutoComplete/helperFunctions.js ***!
  \****************************************************/
/*! exports provided: getSuggestionValue, getSuggestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuggestionValue", function() { return getSuggestionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuggestions", function() { return getSuggestions; });
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-autosuggest */ "./node_modules/react-autosuggest/dist/index.js");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autosuggest-highlight/match */ "./node_modules/autosuggest-highlight/match/index.js");
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! autosuggest-highlight/parse */ "./node_modules/autosuggest-highlight/parse/index.js");
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_2__);




var escapeRegexCharacters = function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

var getSuggestionValue = function getSuggestionValue(suggestion) {
  return "".concat(suggestion.first, " ").concat(suggestion.last);
};
var getSuggestions = function getSuggestions(data, key, value) {
  var escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  var regex = new RegExp('\\b' + escapedValue, 'i');
  console.log(data);
  return data.filter(function (el) {
    return regex.test(getSuggestionValue(el[key]));
  });
}; // function renderSuggestion(suggestion, { query }) {
//   const suggestionText = `${suggestion.first} ${suggestion.last}`;
//   const matches = AutosuggestHighlightMatch(suggestionText, query);
//   const parts = AutosuggestHighlightParse(suggestionText, matches);
//   return (
//     <span className={'suggestion-content ' + suggestion.twitter}>
//       <span className="name">
//         {
//           parts.map((part, index) => {
//             const className = part.highlight ? 'highlight' : null;
//             return (
//               <span className={className} key={index}>{part.text}</span>
//             );
//           })
//         }
//       </span>
//     </span>
//   );
// }
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       value: '',
//       suggestions: []
//     };    
//   }
//   onChange = (event, { newValue, method }) => {
//     this.setState({
//       value: newValue
//     });
//   };
//   onSuggestionsFetchRequested = ({ value }) => {
//     this.setState({
//       suggestions: getSuggestions(value)
//     });
//   };
//   onSuggestionsClearRequested = () => {
//     this.setState({
//       suggestions: []
//     });
//   };
//   render() {
//     const { value, suggestions } = this.state;
//     const inputProps = {
//       placeholder: "Type 'c'",
//       value,
//       onChange: this.onChange
//     };
//     return (
//       <Autosuggest 
//         suggestions={suggestions}
//         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//         getSuggestionValue={getSuggestionValue}
//         renderSuggestion={renderSuggestion}
//         inputProps={inputProps} />
//     );
//   }
// }

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.a53b7a4f53045d6e9c8b.hot-update.js.map