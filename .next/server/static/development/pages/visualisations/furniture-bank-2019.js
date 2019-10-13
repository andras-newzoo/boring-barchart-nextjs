module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AutoComplete/index.jsx":
/*!*******************************************!*\
  !*** ./components/AutoComplete/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-autosuggest */ "react-autosuggest");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! autosuggest-highlight/match */ "autosuggest-highlight/match");
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! autosuggest-highlight/parse */ "autosuggest-highlight/parse");
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/AutoComplete/styles.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/components/AutoComplete/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const getSuggestionValue = (suggestion, key) => suggestion[key];

const getSuggestions = (data, key, value) => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("\\b" + escapedValue, "i");
  return data.filter(el => regex.test(el[key]));
};

const renderSuggestion = (suggestion, {
  query
}, key) => {
  const suggestionText = suggestion[key];
  const matches = autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_3___default()(suggestionText, query);
  const parts = autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_4___default()(suggestionText, matches);
  return __jsx("span", {
    className: "suggestion-content " + suggestion.twitter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, parts.map((part, index) => {
    const className = part.highlight ? "highlight" : null;
    return __jsx("span", {
      className: className,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, part.text);
  })));
};

const AutoComplete = ({
  data,
  itemKey,
  style,
  handleSelected,
  iconColor
}) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: suggestions,
    1: setSuggestions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const handleOnChange = (_, {
    newValue
  }) => setValue(newValue);

  const onSuggestionsFetchRequested = ({
    value
  }) => setSuggestions(getSuggestions(data, itemKey, value));

  const onSuggestionsClearRequested = () => setSuggestions([]);

  const inputProps = {
    placeholder: "Add new item",
    value,
    onChange: handleOnChange
  };
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["Container"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
    searched: value.length,
    color: iconColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "icon",
    fontSize: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx(react_autosuggest__WEBPACK_IMPORTED_MODULE_2___default.a, {
    suggestions: suggestions,
    onSuggestionsFetchRequested: onSuggestionsFetchRequested,
    onSuggestionsClearRequested: onSuggestionsClearRequested,
    onSuggestionSelected: (_, {
      suggestionValue
    }) => {
      setValue('');
      handleSelected(suggestionValue);
    },
    getSuggestionValue: suggestion => getSuggestionValue(suggestion, itemKey),
    renderSuggestion: (suggestion, query) => renderSuggestion(suggestion, query, itemKey),
    inputProps: inputProps,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var _containers_FurnitureBank2019_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/FurnitureBank2019/styles */ "./containers/FurnitureBank2019/styles/index.js");



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1xf7u5x-0"
})(["position:relative;.react-autosuggest__container{position:relative;}.react-autosuggest__input{", " height:", "px;padding:", ";margin:.4rem 0;padding-left:", "rem;font-weight:", ";font-size:", ";border:1px solid ", ";border-radius:4px;font-family:", ";color:", ";transition:.5s all;&:focus{outline:none;}}.react-autosuggest__container--open .react-autosuggest__input{border-bottom-left-radius:0;border-bottom-right-radius:0;}.react-autosuggest__suggestions-container{display:none;}.react-autosuggest__container--open .react-autosuggest__suggestions-container{display:block;position:absolute;top:calc(30px + 1.4rem - 1px);width:", "px;border:1px solid ", ";background-color:#fff;font-weight:", ";font-size:", ";border-bottom-left-radius:4px;border-bottom-right-radius:4px;z-index:2;}.react-autosuggest__suggestions-list{margin:0;padding:0;list-style-type:none;}.react-autosuggest__suggestion{cursor:pointer;padding:", ";}.highlight{color:", ";font-weight:", ";}.icon{position:absolute;top:50%;left:1rem;transform:translateY(-50%);z-index:10;fill:", ";visibility:", ";}"], props => props.searched ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:calc(", "px - 1.8rem);"], props => props.width) : Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:calc(", "px - 4rem);"], props => props.width), props => props.height || 30, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingXS"], props => !props.searched && 3, props => props.fontWeight || _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontWeightXS"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontSizeM"], props => props.borderColor || '#aaa', _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontFamilyMain"], _containers_FurnitureBank2019_styles__WEBPACK_IMPORTED_MODULE_2__["colorGreyDark"], props => props.width - 2, props => props.borderColor || '#aaa', props => props.fontWeight || _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontWeightXS"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontSizeM"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingXS"], props => props.highlight || '#333', _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontWeightL"], props => props.color || _containers_FurnitureBank2019_styles__WEBPACK_IMPORTED_MODULE_2__["colorGreyDark"], props => props.searched ? 'hidden' : 'visible');

/***/ }),

/***/ "./components/ConvertedNumber/index.jsx":
/*!**********************************************!*\
  !*** ./components/ConvertedNumber/index.jsx ***!
  \**********************************************/
/*! exports provided: getFormattedNumber, getSuffix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedNumber", function() { return getFormattedNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuffix", function() { return getSuffix; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "d3-format");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_format__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/sharedStyles */ "./styles/sharedStyles.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/components/ConvertedNumber/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const getFormattedNumber = ({
  val,
  perc,
  expPlus
}) => {
  let formatKey;

  if (perc) {
    if (expPlus) {
      if (-0.1 < val && val < 0.1) {
        formatKey = "+.2%";
      } else {
        formatKey = "+.1%";
      }
    } else {
      if (-0.1 < val && val < 0.1) {
        formatKey = ".2%";
      } else {
        formatKey = ".1%";
      }
    }
  } else {
    if (expPlus) {
      if (-1 < val && val < 1) {
        formatKey = "+.2f";
      } else {
        formatKey = "+.3s";
      }
    } else {
      if (-1 < val && val < 1) {
        formatKey = ".2f";
      } else {
        formatKey = ".3s";
      }
    }
  }

  return val ? Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(formatKey)(val).replace(/([a-zA-Z%])/g, "") : "-";
};
const getSuffix = ({
  val,
  custom,
  perc
}) => {
  if (val === undefined) {
    return "";
  }

  if (custom) {
    return custom;
  }

  if (perc) {
    return "%";
  }

  if (val < 1000) {
    return "";
  }

  if (1000 <= val && val < 1000000) {
    return "K";
  }

  if (1000000 <= val && val < 1000000000) {
    return "M";
  }

  if (1000000000 <= val) {
    return "B";
  }
};
const fadein = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(["from{opacity:0;}to{opacity:1;}"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.span.withConfig({
  displayName: "ConvertedNumber__Container",
  componentId: "jdjwlc-0"
})(["display:", ";align-items:flex-end;", " font-size:", ";font-weight:", ";color:", ";line-height:", ";", ""], props => props.display || 'flex', props => props.isInitalized && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["animation:", " 2s;"], fadein), props => props.size, props => props.weight, props => props.color, props => props.lineHeight, props => (props.smallSuffix || props.smallPrefix) && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])([".suffix,.prefix{display:block;font-size:", ";margin-left:3px;line-height:", ";}"], props.suffixSize || props.prefixSize, props.suffixLineHeight || props.prefixLineHeight));

const ConvertedNumber = ({
  data,
  duration = 2,
  perc,
  prefix,
  weight = _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__["fontWeightS"],
  size = _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__["fontSizeM"],
  color = _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__["colorGrey"],
  lineHeight = 1.2,
  suffixSize,
  suffixLineHeight,
  customSuffix,
  animate,
  smallSuffix,
  expPlus,
  period,
  suffixSpace,
  prefixSpace,
  prefixSize,
  smallPrefix,
  prefixLineHeight,
  display
}) => {
  const {
    0: isInitalized,
    1: setIsInitalized
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const styles = {
    weight,
    size,
    smallSuffix,
    suffixSize,
    color,
    lineHeight,
    smallPrefix,
    suffixLineHeight,
    prefixSize,
    prefixLineHeight,
    display
  };
  if (data === undefined) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  });
  const suffix = getSuffix({
    val: data,
    custom: customSuffix,
    perc
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }), prefix && __jsx("span", {
    className: "prefix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, prefix, prefixSpace && " "), animate ? __jsx(react_countup__WEBPACK_IMPORTED_MODULE_3___default.a, {
    end: data,
    decimals: 3,
    preserveValue: true,
    formattingFn: val => getFormattedNumber({
      val,
      perc,
      expPlus
    }),
    onEnd: () => !isInitalized && setIsInitalized(true),
    duration: duration,
    decimal: ".",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }) : getFormattedNumber({
    val: data,
    perc,
    expPlus
  }), suffix && __jsx("span", {
    className: "suffix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, suffixSpace && " ", suffix), period && __jsx("span", {
    className: "period",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, " ", period)));
};

/* harmony default export */ __webpack_exports__["default"] = (ConvertedNumber);

/***/ }),

/***/ "./components/FixedInfoButton/FixedInfoButton.jsx":
/*!********************************************************!*\
  !*** ./components/FixedInfoButton/FixedInfoButton.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles */ "./styles/index.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/components/FixedInfoButton/FixedInfoButton.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "FixedInfoButton__Container",
  componentId: "s3rour-0"
})(["position:absolute;background-color:", ";color:", ";", " border-radius:", ";transform:translate(", ");cursor:pointer;"], props => props.background || _styles__WEBPACK_IMPORTED_MODULE_3__["colorGrey"], props => props.color || "#fff", props => Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["top:", ";right:", ";bottom:", ";left:", ";width:", "px;height:", "px;"], props.top, props.right, props.bottom, props.left, props.width, props.height), props => props.round && "100%", props => props.corner && props.translate);
const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "FixedInfoButton__IconContainer",
  componentId: "s3rour-1"
})(["position:relative;height:100%;width:100%;"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "FixedInfoButton__Icon",
  componentId: "s3rour-2"
})(["position:absolute;", " .icon{height:", "px;}"], props => Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["top:", ";right:", ";bottom:", ";left:", ";"], props.iconTop, props.iconRight, props.iconBottom, props.iconLeft), props => props.iconHeight || 25);

const FixedInfoButton = ({
  top,
  right,
  bottom,
  left,
  background,
  color,
  height,
  width,
  round,
  corner,
  translate,
  iconPath,
  iconLeft,
  iconBottom,
  iconTop,
  iconRight,
  iconHeight,
  iconComponent,
  handleClick
}) => {
  const dims = {
    top,
    right,
    bottom,
    left,
    height,
    width,
    corner,
    translate
  };
  const styles = {
    background,
    color,
    round
  };
  const iconDims = {
    iconLeft,
    iconBottom,
    iconTop,
    iconRight,
    iconHeight
  };
  return __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dims, styles, {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), __jsx(IconContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(Icon, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, iconDims, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), iconComponent ? iconComponent : __jsx("img", {
    className: "icon",
    src: iconPath,
    alt: "fixed icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FixedInfoButton);

/***/ }),

/***/ "./components/IconComponents/QuestionMarkGillSemiBold.jsx":
/*!****************************************************************!*\
  !*** ./components/IconComponents/QuestionMarkGillSemiBold.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/components/IconComponents/QuestionMarkGillSemiBold.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const QuestionMarkGillSemiBold = ({
  fill = "#000",
  width,
  height,
  stroke = "none",
  className
}) => __jsx("svg", {
  width: width,
  height: height,
  viewBox: "0 0 58.5 155.6",
  className: `${className || ""}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("path", {
  id: "error-icon",
  stroke: stroke,
  strokeWidth: "1",
  fill: fill,
  fillRule: "nonzero",
  d: "M22,0c11.1,0,20,2.9,26.6,8.7c6.6,5.8,9.9,13.4,9.9,22.9c0,6.2-1.3,12.6-4,19.1c-2.7,6.5-7.5,14.4-14.4,23.8 c-4.8,6.4-8.3,12.1-10.7,16.9c-2.4,4.9-3.5,9.4-3.5,13.8c0,1.7-0.4,3.2-1.3,4.3c-0.9,1.1-2,1.7-3.4,1.7c-3.3,0-6-2.4-8.4-7.2 c-2.3-4.8-3.5-10-3.5-15.7c0-5.1,1-10.2,3.1-15.5c2.1-5.2,5.4-11.3,10-18.1c5.1-7.5,7.6-14.1,7.6-19.7c0-4-1.2-7.1-3.6-9.4 c-2.4-2.3-5.8-3.4-10.2-3.4c-5.1,0-10.1,1.9-14.9,5.8H0L4.2,3.8C5.7,3,8.5,2.2,12.8,1.3C17,0.4,20.1,0,22,0z M23.6,122.3 c4.3,0,8.2,1.7,11.6,5.1c3.4,3.4,5.1,7.3,5.1,11.6c0,4.3-1.6,8.1-4.9,11.5c-3.3,3.4-7.2,5.1-11.8,5.1c-4.6,0-8.5-1.6-11.7-4.9 c-3.3-3.3-4.9-7.2-4.9-11.7c0-4.4,1.7-8.3,5-11.7C15.4,124,19.2,122.3,23.6,122.3z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (QuestionMarkGillSemiBold);

/***/ }),

/***/ "./components/IconComponents/index.js":
/*!********************************************!*\
  !*** ./components/IconComponents/index.js ***!
  \********************************************/
/*! exports provided: QuestionMarkGillSemiBold */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuestionMarkGillSemiBold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionMarkGillSemiBold */ "./components/IconComponents/QuestionMarkGillSemiBold.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionMarkGillSemiBold", function() { return _QuestionMarkGillSemiBold__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./components/ItemChip/index.jsx":
/*!***************************************!*\
  !*** ./components/ItemChip/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var _containers_FurnitureBank2019_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/FurnitureBank2019/styles */ "./containers/FurnitureBank2019/styles/index.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/components/ItemChip/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const ControlElement = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ItemChip__ControlElement",
  componentId: "m9j6cq-0"
})(["position:absolute;top:", "rem;left:", "rem;cursor:pointer;font-weight:", ";visibility:hidden;@media (any-hover:none){visibility:visible;}"], props => props.top, props => props.left || 1.4, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["fontWeightL"]);
const DeleteIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ItemChip__DeleteIcon",
  componentId: "m9j6cq-1"
})(["position:absolute;right:1rem;top:50%;transform:translateY(-50%);font-weight:", ";cursor:pointer;visibility:hidden;trasition:all .3s;@media (any-hover:none){visibility:visible;}"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["fontWeightXL"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ItemChip__Container",
  componentId: "m9j6cq-2"
})(["position:relative;display:flex;align-items:center;width:calc(100% - 3.8rem);min-height:", "px;padding:", ";margin:0.4rem 0;padding-left:3rem;font-weight:", ";font-size:", ";border:1px solid ", ";border-radius:4px;background:", ";color:#fff;transition:0.5s all;&:hover ", ",&:hover ", ",&:hover ", "{visibility:visible;}"], props => props.height || 30, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["paddingXS"], props => props.fontWeight || _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["fontWeightXS"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["fontSizeM"], props => props.borderColor || _containers_FurnitureBank2019_styles__WEBPACK_IMPORTED_MODULE_4__["colorGreyDark"], _containers_FurnitureBank2019_styles__WEBPACK_IMPORTED_MODULE_4__["colorGreyDark"], ControlElement, ControlElement, DeleteIcon);
const QuantityContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ItemChip__QuantityContainer",
  componentId: "m9j6cq-3"
})(["position:absolute;width:15px;left:1rem;top:50%;transform:translateY(-50%);display:flex;justify-content:center;font-weight:", ";"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["fontWeightXL"]);

const ItemChip = ({
  style,
  handleIncrementClick,
  handleDecrementClick,
  handleDeleteClick,
  content,
  quantity
}) => {
  return __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }), __jsx(ControlElement, {
    top: -0.2,
    onClick: handleIncrementClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "+"), quantity > 1 && __jsx(ControlElement, {
    top: 2,
    left: 1.5,
    onClick: handleDecrementClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "-"), __jsx(QuantityContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, quantity), content, __jsx(DeleteIcon, {
    onClick: handleDeleteClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "\xD7"));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemChip);

/***/ }),

/***/ "./components/Modal/Modal.jsx":
/*!************************************!*\
  !*** ./components/Modal/Modal.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/components/Modal/Modal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ModalBackground = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Modal__ModalBackground",
  componentId: "sc-15imcyp-0"
})(["position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,", ");display:", ";z-index:1000;"], props => props.opacity || .5, props => props.open ? 'block' : 'none');
const ModalPaper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Modal__ModalPaper",
  componentId: "sc-15imcyp-1"
})(["position:absolute;left:50%;", " ", " z-index:1100;background-color:#fff;", ""], props => props.size === "s" && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["transform:translate(-50%,-25%);"]), props => props.size === "m" && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["transform:translate(-50%,-50%);"]), props => props.open ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["transition:1s all;opacity:1;top:50%;visibility:visible;"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["transition:0s all;opacity:0;top:-50%;visibility:hidden;"]));

const Modal = ({
  children,
  open,
  handleClick,
  size
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ModalBackground, {
    onClick: handleClick,
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx(ModalPaper, {
    open: open,
    size: size,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: AutoComplete, ItemChip, ConvertedNumber, FixedInfoButton, QuestionMarkGillSemiBold, Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutoComplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoComplete */ "./components/AutoComplete/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return _AutoComplete__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ItemChip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemChip */ "./components/ItemChip/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemChip", function() { return _ItemChip__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ConvertedNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConvertedNumber */ "./components/ConvertedNumber/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConvertedNumber", function() { return _ConvertedNumber__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _FixedInfoButton_FixedInfoButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FixedInfoButton/FixedInfoButton */ "./components/FixedInfoButton/FixedInfoButton.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedInfoButton", function() { return _FixedInfoButton_FixedInfoButton__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Modal_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal/Modal */ "./components/Modal/Modal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal_Modal__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _IconComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IconComponents */ "./components/IconComponents/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionMarkGillSemiBold", function() { return _IconComponents__WEBPACK_IMPORTED_MODULE_5__["QuestionMarkGillSemiBold"]; });









/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = {
  MAP_API: 'pk.eyJ1Ijoic3plYW5kciIsImEiOiJjajlpeWxnNHUzbWNiMzNvcnF1ZGUzbG5rIn0.fk33YGLOHSZtT_CMEWoIag'
};

/***/ }),

/***/ "./containers/FurnitureBank2019/components/BarChart.jsx":
/*!**************************************************************!*\
  !*** ./containers/FurnitureBank2019/components/BarChart.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-array */ "d3-array");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(d3_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks */ "./hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils */ "./utils/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../styles */ "./styles/index.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-ease */ "d3-ease");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(d3_ease__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/BarChart.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "BarChart__ChartWrapper",
  componentId: "sc-1lmwodk-0"
})(["height:100%;width:100%;border-left:1px solid ", ";rect{fill:", ";}.variable{fill:", ";font-size:1rem;}.value{fill:#fff;font-size:", ";font-weight:", ";text-anchor:end;}"], _styles__WEBPACK_IMPORTED_MODULE_10__["colorGrey"], _styles__WEBPACK_IMPORTED_MODULE_7__["colorGreen"], _styles__WEBPACK_IMPORTED_MODULE_10__["colorGrey"], _styles__WEBPACK_IMPORTED_MODULE_10__["fontSizeM"], _styles__WEBPACK_IMPORTED_MODULE_10__["fontWeightL"]);

const BarChart = ({
  data,
  updateDuration = 1000
}) => {
  const divRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const storedValues = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const prevData = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["usePrevious"])(data);
  const {
    0: init,
    1: setInit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let initVis, updateData, updateDims;
  const dims = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["useSvgResize"])(divRef);
  const prevDims = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["usePrevious"])(dims);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (data && dims.height && dims.width && !init) {
      initVis();
      setInit(true);
    }

    if (init && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEqual(data, prevData)) {
      updateData();
    }
  }, [data, dims, init, initVis, prevData, updateData]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (init) {
      !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEqual(dims, prevDims) && updateDims();
    }
  }, [dims, init, prevDims, updateDims]);

  initVis = () => {
    const area = Object(d3_selection__WEBPACK_IMPORTED_MODULE_5__["select"])(divRef.current);
    const {
      chartArea
    } = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createUpdateSvg"])({
      area,
      dims,
      append: true
    });
    const yScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_4__["scaleBand"])().range([0, dims.height]).paddingOuter(.3).paddingInner(.4);
    const xScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"])().range([0, dims.width]);
    storedValues.current = {
      area,
      chartArea,
      yScale,
      xScale
    };
    updateData();
  };

  updateData = () => {
    const {
      yScale,
      xScale
    } = storedValues.current;
    yScale.domain(data.map(d => d.group));
    xScale.domain([0, Object(d3_array__WEBPACK_IMPORTED_MODULE_6__["max"])(data, d => d.share)]);
    storedValues.current = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, storedValues.current, {
      yScale,
      xScale
    });
    createUpdateRects();
    createUpdateValueText();
    createUpdateVariableText();
  };

  const createUpdateRects = () => {
    const {
      chartArea,
      yScale,
      xScale
    } = storedValues.current;
    const rects = chartArea.selectAll('rect').data(data, d => d.group);
    removeElement(rects);
    rects.enter().append('rect').attr('x', 0).attr('y', d => yScale(d.group)).attr('height', yScale.bandwidth()).attr('width', 0).merge(rects).transition().duration(updateDuration).ease(d3_ease__WEBPACK_IMPORTED_MODULE_11__["easeCubicInOut"]).attr('width', d => xScale(d.share));
  };

  updateDims = () => {
    const {
      area,
      chartArea,
      yScale,
      xScale,
      centerText,
      yPos
    } = storedValues.current;
    yScale.range([0, dims.height]);
    xScale.range([0, dims.width]);
    Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createUpdateSvg"])({
      area,
      dims,
      update: true
    });
    chartArea.selectAll('rect').attr('width', d => xScale(d.share)).attr('y', d => yScale(d.group)).attr('height', yScale.bandwidth());
    chartArea.selectAll('.value').attr('x', d => xScale(d.share) - 2).attr('y', centerText);
    chartArea.selectAll('.variable').attr('y', yPos);
    storedValues.current = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, storedValues.current, {
      yScale,
      xScale
    });
  };

  const createUpdateValueText = () => {
    const {
      chartArea,
      yScale,
      xScale
    } = storedValues.current;
    const texts = chartArea.selectAll('.value').data(data, d => d.group);

    const centerText = d => yScale(d.group) + yScale.bandwidth() / 2 + 4;

    removeElement(texts);
    texts.enter().append('text').attr('class', 'value').attr('x', 0).attr('y', centerText).attr('opacity', 0).text(0).merge(texts).transition().duration(updateDuration).ease(d3_ease__WEBPACK_IMPORTED_MODULE_11__["easeCubicInOut"]).attr('x', d => xScale(d.share) - 3).tween('text', (d, i, n) => Object(_utils__WEBPACK_IMPORTED_MODULE_9__["numberTween"])(d, i, n, 'share', '.1%')).attr('opacity', 1);
    storedValues.current = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, storedValues.current, {
      centerText
    });
  };

  const createUpdateVariableText = () => {
    const {
      chartArea,
      yScale
    } = storedValues.current;
    const texts = chartArea.selectAll('.variable').data(data, d => d.group);

    const yPos = d => yScale(d.group) - 3;

    removeElement(texts);
    texts.enter().append('text').attr('class', 'variable').attr('x', 1).attr('y', yPos).attr('opacity', 0).text(d => d.group).merge(texts).transition().duration(updateDuration).ease(d3_ease__WEBPACK_IMPORTED_MODULE_11__["easeCubicInOut"]).attr('y', yPos).attr('opacity', 1);
    storedValues.current = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, storedValues.current, {
      yPos
    });
  };

  const removeElement = el => el.exit().transition().duration(updateDuration).ease(d3_ease__WEBPACK_IMPORTED_MODULE_11__["easeCubicInOut"]).attr('y', dims.height * 2).remove();

  return __jsx(ChartWrapper, {
    ref: divRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BarChart);

/***/ }),

/***/ "./containers/FurnitureBank2019/components/InfoButton.jsx":
/*!****************************************************************!*\
  !*** ./containers/FurnitureBank2019/components/InfoButton.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components */ "./components/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles */ "./styles/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/InfoButton.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const InfoButton = ({
  handleClick,
  smallLayout
}) => {
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["FixedInfoButton"], {
    top: 0,
    right: 0,
    height: 120,
    width: 120,
    round: true,
    corner: true,
    background: smallLayout ? _styles__WEBPACK_IMPORTED_MODULE_3__["colorGrey"] : _styles__WEBPACK_IMPORTED_MODULE_2__["colorGreen"],
    translate: "50%, -50%",
    iconComponent: __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["QuestionMarkGillSemiBold"], {
      height: 25,
      width: 25,
      fill: "#fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    }),
    iconLeft: "19%",
    iconBottom: "17%",
    handleClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (InfoButton);

/***/ }),

/***/ "./containers/FurnitureBank2019/components/Message.jsx":
/*!*************************************************************!*\
  !*** ./containers/FurnitureBank2019/components/Message.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/Message.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Message = ({
  noData,
  withBG
}) => {
  const selected = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAllSelected"]);
  const adults = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAdults"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, selected.length === 0 && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ChartTitle"], {
    message: true,
    withBG: withBG,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Please start by adding furnitures!"), noData && selected.length > 0 && !adults && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ChartTitle"], {
    message: true,
    withBG: withBG,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Sorry, we don't have data for the selected ", selected.length === 1 ? 'item' : 'items', "!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./containers/FurnitureBank2019/components/Modal.jsx":
/*!***********************************************************!*\
  !*** ./containers/FurnitureBank2019/components/Modal.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components */ "./components/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles */ "./styles/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/Modal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ModalComponent = ({
  openModal,
  handleClick,
  data,
  smallLayout
}) => {
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    open: openModal,
    handleClick: handleClick,
    size: smallLayout ? "s" : "m",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ModalContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("span", {
    className: "icon",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "\xD7"), data.map(el => __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    direction: "column",
    align: "flex-start",
    justify: "flex-start",
    area: el.area,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["TextSpan"], {
    paddingBottom: 1,
    weight: _styles__WEBPACK_IMPORTED_MODULE_3__["fontWeightL"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, el.title), el.text.map(par => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, par), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }))), el.gif && __jsx("img", {
    src: el.gif,
    alt: el.gifAlt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalComponent);

/***/ }),

/***/ "./containers/FurnitureBank2019/components/PercentageChart.jsx":
/*!*********************************************************************!*\
  !*** ./containers/FurnitureBank2019/components/PercentageChart.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-ease */ "d3-ease");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_ease__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-transition */ "d3-transition");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(d3_transition__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks */ "./hooks/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils */ "./utils/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../styles */ "./styles/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/PercentageChart.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PercentageChart__ChartWrapper",
  componentId: "sc-18c8aar-0"
})(["height:100%;width:90%;border:1px solid ", ";border-radius:20px;overflow:hidden;rect{fill:", ";}"], _styles__WEBPACK_IMPORTED_MODULE_9__["colorGrey"], _styles__WEBPACK_IMPORTED_MODULE_7__["colorGreen"]);

const PercentageChart = ({
  data,
  fullCount,
  updateDuration = 1000,
  resetDelay = 500
}) => {
  const divRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const storedValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const prevData = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["usePrevious"])(data);
  const prevCount = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["usePrevious"])(fullCount);
  const {
    0: init,
    1: setInit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let initVis, resetChart, updateRect, updateDims;
  const dims = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useSvgResize"])(divRef);
  const prevDims = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["usePrevious"])(dims);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (dims.width && dims.height && data && !init) {
      initVis();
      setInit(true);
    }
  }, [data, dims.height, dims.width, init, initVis]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (init) {
      !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEqual(dims, prevDims) && updateDims();
    }
  }, [dims, init, prevDims, updateDims]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (init && prevData !== data) {
      prevCount < fullCount && resetChart("end");
      fullCount < prevCount && resetChart("start");
      fullCount === prevCount && updateRect();
    }
  }, [data, init, prevData, fullCount, prevCount, resetChart, updateDuration, resetDelay, updateRect, dims.width]);

  initVis = () => {
    const area = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])(divRef.current);
    const {
      chartArea
    } = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["createUpdateSvg"])({
      area,
      dims,
      append: true
    });
    chartArea.append("rect").attr("x", 0).attr("y", 0).attr("height", dims.height).attr("width", 0);
    storedValues.current = {
      area,
      chartArea
    };
    updateRect();
  };

  updateDims = () => {
    const {
      chartArea
    } = storedValues.current;
    Object(_utils__WEBPACK_IMPORTED_MODULE_8__["createUpdateSvg"])({
      area: Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])(divRef.current),
      dims,
      update: true
    });
    chartArea.select("rect").attr("height", dims.height).attr("width", dims.width * (data - fullCount));
  };

  resetChart = resetPoint => {
    const {
      chartArea
    } = storedValues.current;
    const toEnd = resetPoint === "end";
    chartArea.select("rect").transition().duration(updateDuration / 2).ease(d3_ease__WEBPACK_IMPORTED_MODULE_4__["easeCubicInOut"]).attr("width", toEnd ? dims.width : 0).transition().delay(resetDelay).duration(0).attr("width", toEnd ? 0 : dims.width).transition().delay(updateDuration / 2).duration(updateDuration / 2).ease(d3_ease__WEBPACK_IMPORTED_MODULE_4__["easeCubicInOut"]).attr("width", dims.width * (data - fullCount));
  };

  updateRect = () => {
    const {
      chartArea
    } = storedValues.current;
    chartArea.select("rect").transition("update").duration(updateDuration).ease(d3_ease__WEBPACK_IMPORTED_MODULE_4__["easeCubicInOut"]).attr("width", dims.width * (data - fullCount));
  };

  return __jsx(ChartWrapper, {
    ref: divRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PercentageChart);

/***/ }),

/***/ "./containers/FurnitureBank2019/components/PersonsIcons.jsx":
/*!******************************************************************!*\
  !*** ./containers/FurnitureBank2019/components/PersonsIcons.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/PersonsIcons.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const PersonsIcon = () => {
  const adults = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_4__["selectAdults"]);
  const children = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_4__["selectChildren"]);

  const adultsArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(Math.round(adults || 0)).keys());

  const childrenArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(Math.round(children || 0)).keys());

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["PersonsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, adultsArray.map(el => __jsx("img", {
    key: el,
    className: "adult",
    src: "/static/icons/furnitureBank/person.svg",
    alt: "adult person icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), childrenArray.map(el => __jsx("img", {
    key: el,
    className: "child",
    src: "/static/icons/furnitureBank/person.svg",
    alt: "child person icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (PersonsIcon);

/***/ }),

/***/ "./containers/FurnitureBank2019/components/index.js":
/*!**********************************************************!*\
  !*** ./containers/FurnitureBank2019/components/index.js ***!
  \**********************************************************/
/*! exports provided: Message, PercentageChart, PersonIcons, BarChart, ModalComponent, InfoButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message */ "./containers/FurnitureBank2019/components/Message.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _Message__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PercentageChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PercentageChart */ "./containers/FurnitureBank2019/components/PercentageChart.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PercentageChart", function() { return _PercentageChart__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _PersonsIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PersonsIcons */ "./containers/FurnitureBank2019/components/PersonsIcons.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonIcons", function() { return _PersonsIcons__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _BarChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BarChart */ "./containers/FurnitureBank2019/components/BarChart.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarChart", function() { return _BarChart__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ "./containers/FurnitureBank2019/components/Modal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _Modal__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _InfoButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InfoButton */ "./containers/FurnitureBank2019/components/InfoButton.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoButton", function() { return _InfoButton__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./containers/FurnitureBank2019/containers/ControlContainer.jsx":
/*!**********************************************************************!*\
  !*** ./containers/FurnitureBank2019/containers/ControlContainer.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ "./components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/actions */ "./store/furnitureBankReducer/actions.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/containers/ControlContainer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ControlContainer = () => {
  const {
    0: dimensions,
    1: setDimensions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const {
    0: windowWidth,
    1: setWindowWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const panelContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const panelWidth = panelContainerRef.current.clientWidth;
    const panelHeight = panelContainerRef.current.clientHeight;
    setDimensions({
      width: panelWidth,
      height: panelHeight
    });
  }, [panelContainerRef, windowWidth]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  const handleResize = () => setWindowWidth(window.innerWidth);

  const handleSelected = selected => dispatch(Object(_store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_4__["addItem"])(selected));

  const handleIncrementClick = item => dispatch(Object(_store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_4__["incrementItem"])(item));

  const handleDecrementClick = item => dispatch(Object(_store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_4__["decrementItem"])(item));

  const handleDeleteClick = item => dispatch(Object(_store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_4__["deleteItem"])(item));

  const {
    selectedItems
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.furnitureBankReducer);
  const allUnselected = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_5__["selectAllUnselected"]);
  const totalQuantity = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_5__["selectTotalQuantity"]);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Items to Donate ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "\xA0 ( ", totalQuantity, " )")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["PanelContainer"], {
    ref: panelContainerRef,
    height: dimensions && dimensions.height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, selectedItems.length > 0 && selectedItems.map(item => __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["ItemChip"], {
    key: item.name,
    handleIncrementClick: () => handleIncrementClick(item.name),
    handleDecrementClick: () => handleDecrementClick(item.name),
    handleDeleteClick: () => handleDeleteClick(item.name),
    content: item.name,
    quantity: item.quantity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["AutoComplete"], {
    data: allUnselected,
    itemKey: "product_name",
    handleSelected: handleSelected,
    iconColor: _styles__WEBPACK_IMPORTED_MODULE_1__["colorGreen"],
    style: dimensions && {
      width: dimensions.width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ControlContainer);

/***/ }),

/***/ "./containers/FurnitureBank2019/containers/FamiliesContainer.jsx":
/*!***********************************************************************!*\
  !*** ./containers/FurnitureBank2019/containers/FamiliesContainer.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles */ "./styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/containers/FamiliesContainer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const FamiliesContainer = () => {
  const clientGroups = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_5__["selectTopGroups"]);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ChartPaper"], {
    gridArea: "families",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["FamilyContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Who will be likely to receive your donation?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    noData: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["PersonIcons"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    height: "75%",
    width: "85%",
    marginTop: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, !!clientGroups[0].share && __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["BarChart"], {
    data: clientGroups,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FamiliesContainer);

/***/ }),

/***/ "./containers/FurnitureBank2019/containers/LandFillContainer.jsx":
/*!***********************************************************************!*\
  !*** ./containers/FurnitureBank2019/containers/LandFillContainer.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "./utils/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles */ "./styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components */ "./components/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/containers/LandFillContainer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const AVG_MONTHLY_WASTE = 130;
const AVG_WEEKLY_WASTE = 30;
const CARGO_VOLUME = 1179;

const LandFillContainer = () => {
  const {
    0: monthCount,
    1: setMonthCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: weekCount,
    1: setWeekCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const weight = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAllSelectedWeight"]);
  const volume = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAllSelectedVolume"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getMonth = () => Math.floor(weight / AVG_MONTHLY_WASTE);

    if (getMonth() !== monthCount) {
      setMonthCount(getMonth());
    }
  }, [monthCount, weight]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getWeek = () => Math.floor((weight - monthCount * AVG_MONTHLY_WASTE) / AVG_WEEKLY_WASTE);

    if (getWeek() !== weekCount) {
      setWeekCount(getWeek());
    }
  }, [monthCount, weekCount, weight]);
  const monthText = monthCount > 1 ? "months" : "month";
  const weekText = weekCount > 1 ? "weeks" : "week";
  const monthArray = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getArray"])(monthCount);
  const weekArray = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getArray"])(weekCount);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ChartPaper"], {
    gridArea: "landfill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "What is the estimated amount of waste saved?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), !!weight && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["LandFillSubContainer"], {
    gridArea: "weight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["FlexContainer"], {
    area: "num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["ConvertedNumber"], {
    data: weight,
    size: _styles__WEBPACK_IMPORTED_MODULE_6__["fontSizeXL"],
    weight: _styles__WEBPACK_IMPORTED_MODULE_6__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_1__["colorGreen"],
    animate: true,
    smallSuffix: true,
    suffixSize: _styles__WEBPACK_IMPORTED_MODULE_6__["fontSizeM"],
    suffixLineHeight: 1.5,
    customSuffix: "lbs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["FlexContainer"], {
    area: "icon",
    align: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, monthArray && monthArray.length > 0 && monthArray.map(el => __jsx("img", {
    key: el,
    className: "garbage-month",
    src: "/static/icons/furnitureBank/garbage.svg",
    alt: "garbage month icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  })), weekArray && weekArray.length > 0 && weekArray.map(el => __jsx("img", {
    key: el,
    className: "garbage-week",
    src: "/static/icons/furnitureBank/garbage.svg",
    alt: "garbage week icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["FlexContainer"], {
    area: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["TextSpan"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, !!monthCount && `${monthCount} ${monthText}`, !!monthCount && !!weekCount && ` and `, !!weekCount ? `${weekCount} ${weekText}` : !monthCount && `Less than 1 ${weekText}`, " ", "of waste in an avg. Canadian household"))), !!volume && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["LandFillSubContainer"], {
    gridArea: "volume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["FlexContainer"], {
    area: "num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["ConvertedNumber"], {
    data: volume,
    size: _styles__WEBPACK_IMPORTED_MODULE_6__["fontSizeXL"],
    weight: _styles__WEBPACK_IMPORTED_MODULE_6__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_1__["colorGreen"],
    animate: true,
    smallSuffix: true,
    suffixSize: _styles__WEBPACK_IMPORTED_MODULE_6__["fontSizeM"],
    suffixLineHeight: 1.5,
    customSuffix: "cu.ft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["FlexContainer"], {
    area: "icon",
    align: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ContainerChart"], {
    height: volume / CARGO_VOLUME,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["FlexContainer"], {
    area: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx("img", {
    className: "container",
    src: "/static/icons/furnitureBank/container.svg",
    alt: "container icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["FlexContainer"], {
    area: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["TextSpan"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, "Equivalent to", " ", __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["ConvertedNumber"], {
    data: volume / CARGO_VOLUME,
    display: "inline-block",
    weight: _styles__WEBPACK_IMPORTED_MODULE_6__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_1__["colorGreen"],
    perc: true,
    animate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }), " ", "of an avg. cargo container")))));
};

/* harmony default export */ __webpack_exports__["default"] = (LandFillContainer);

/***/ }),

/***/ "./containers/FurnitureBank2019/containers/MapContainer.jsx":
/*!******************************************************************!*\
  !*** ./containers/FurnitureBank2019/containers/MapContainer.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-map-gl */ "react-map-gl");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components */ "./containers/FurnitureBank2019/components/index.js");


var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/containers/MapContainer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const initialViewport = {
  latitude: 43.702702563904154,
  longitude: -79.5290090619582,
  zoom: 9.070378236162412
};

const MapContent = () => {
  const filteredCoordinates = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_6__["selectFilteredCoordinates"]);
  const {
    0: initMap,
    1: setInitMap
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: viewport,
    1: setViewPort
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialViewport);
  const mapRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  const handleMapLoaded = () => {
    mapRef.current.getMap().addSource(_styles__WEBPACK_IMPORTED_MODULE_4__["HEATMAP_SOURCE_ID"], {
      type: "geojson",
      data: makeGeoJSON(filteredCoordinates)
    });
    mapRef.current.getMap().addLayer(_styles__WEBPACK_IMPORTED_MODULE_4__["heatMapStyles"]);
    setInitMap(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (initMap) {
      mapRef.current.getMap().getSource(_styles__WEBPACK_IMPORTED_MODULE_4__["HEATMAP_SOURCE_ID"]).setData(makeGeoJSON(filteredCoordinates));
    }
  }, [filteredCoordinates, initMap]);

  const makeGeoJSON = data => {
    if (!data) return undefined;
    return {
      type: "FeatureCollection",
      features: data.map(feature => {
        return {
          type: "Feature",
          properties: {
            id: feature.postal_code
          },
          geometry: {
            type: "Point",
            coordinates: feature.coors ? [feature.coors.longitude, feature.coors.latitude, 0] : [0, 0, 0]
          }
        };
      })
    };
  };

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["MapContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ChartTitle"], {
    withBG: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "In Which areas will your donated furniture be received?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Message"], {
    noData: true,
    withBG: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: mapRef,
    mapboxApiAccessToken: _config__WEBPACK_IMPORTED_MODULE_7__["config"].MAP_API
  }, viewport, {
    width: "100%",
    height: "100%",
    onViewportChange: viewport => setViewPort(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, viewport)),
    mapStyle: "mapbox://styles/szeandr/ck1f4skvt0xyl1ct93ti7k1s6",
    onLoad: handleMapLoaded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MapContent);

/***/ }),

/***/ "./containers/FurnitureBank2019/containers/ValueContainer.jsx":
/*!********************************************************************!*\
  !*** ./containers/FurnitureBank2019/containers/ValueContainer.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles */ "./styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components */ "./components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components */ "./containers/FurnitureBank2019/components/index.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/containers/ValueContainer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const AVG_DONATION_VALUE = 735;

const ValueContainer = ({
  smallLayout
}) => {
  const totalPrice = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_5__["selectAllSelectedPrice"]);
  const perc = totalPrice / AVG_DONATION_VALUE;
  const fullCount = Math.floor(perc);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartPaper"], {
    gridArea: "value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartTitle"], {
    contained: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "What is the estimated value of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    justify: "space-evenly",
    area: "abs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, !smallLayout && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), !!totalPrice && __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["ConvertedNumber"], {
    data: totalPrice,
    size: _styles__WEBPACK_IMPORTED_MODULE_3__["fontSizeXL"],
    weight: _styles__WEBPACK_IMPORTED_MODULE_3__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["colorGreen"],
    animate: true,
    prefix: "$",
    smallPrefix: true,
    prefixSize: _styles__WEBPACK_IMPORTED_MODULE_3__["fontSizeM"],
    prefixLineHeight: 1.7,
    prefixSpace: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["DonationPercentageContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, !!perc && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    area: "chart",
    height: smallLayout ? "35%" : "70%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["PercentageChart"], {
    data: perc,
    fullCount: fullCount,
    direction: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    area: "subchart",
    align: "flex-start",
    justify: smallLayout && "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    justify: "flex-start",
    align: "flex-start",
    width: "90%",
    height: "90%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(Math.floor(perc)), (_, i) => i + 1).map(el => __jsx("img", {
    key: el,
    style: {
      height: smallLayout ? 40 : 25,
      marginLeft: 4
    },
    className: "bar",
    src: "/static/icons/furnitureBank/bar.svg",
    alt: "completed bar icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    area: "percentage",
    align: smallLayout && "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"], {
    align: smallLayout ? "flex-start" : "flex-end",
    paddingLeft: smallLayout && 1,
    height: smallLayout ? "50%" : "75%",
    direction: smallLayout && "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["ConvertedNumber"], {
    data: perc,
    size: _styles__WEBPACK_IMPORTED_MODULE_3__["fontSizeXL"],
    weight: _styles__WEBPACK_IMPORTED_MODULE_3__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["colorGreen"],
    animate: true,
    smallSuffix: true,
    suffixSize: _styles__WEBPACK_IMPORTED_MODULE_3__["fontSizeM"],
    suffixLineHeight: 1.5,
    perc: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["TextSpan"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "\xA0of avg. donation value"))))), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ValueContainer);

/***/ }),

/***/ "./containers/FurnitureBank2019/containers/index.js":
/*!**********************************************************!*\
  !*** ./containers/FurnitureBank2019/containers/index.js ***!
  \**********************************************************/
/*! exports provided: ValueContainer, MapContainer, ControlContainer, FamiliesContainer, LandFillContainer */
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

/* harmony import */ var _LandFillContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LandFillContainer */ "./containers/FurnitureBank2019/containers/LandFillContainer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandFillContainer", function() { return _LandFillContainer__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./containers/FurnitureBank2019/index.jsx":
/*!************************************************!*\
  !*** ./containers/FurnitureBank2019/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./containers/FurnitureBank2019/containers/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/furnitureBankReducer/actions */ "./store/furnitureBankReducer/actions.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks */ "./hooks/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles */ "./styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components */ "./components/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










 ///https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator

const AVG_MILES_PER_KILOGRAM = 2.4;

const Dashboard = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const {
    openModal,
    modalText
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.furnitureBankReducer);

  const handleToggleModal = () => dispatch(Object(_store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_6__["toggleModal"])());

  const windowSize = Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useWindowSize"])();
  const smallLayout = windowSize.width < 768;
  const emission = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_8__["selectAllSelectedEmission"]); // KG of CO2 Emssion Avoided

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], {
    openModal: openModal,
    handleClick: handleToggleModal,
    data: modalText,
    smallLayout: smallLayout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["InfoButton"], {
    handleClick: handleToggleModal,
    smallLayout: smallLayout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  })), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "What is the estimated social impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["MapContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["FamiliesContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["ValueContainer"], {
    smallLayout: smallLayout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "What is the estimated environmental impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_3__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartPaper"], {
    gridArea: "emission",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "What is the estimated CO2 emission saved?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["FlexContainer"], {
    area: "num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["FlexContainer"], {
    direction: "column",
    align: "flex-start",
    width: "50%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_10__["ConvertedNumber"], {
    data: Math.abs(emission),
    size: _styles__WEBPACK_IMPORTED_MODULE_9__["fontSizeXL"],
    weight: _styles__WEBPACK_IMPORTED_MODULE_9__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["colorGreen"],
    animate: true,
    smallSuffix: true,
    suffixSize: _styles__WEBPACK_IMPORTED_MODULE_9__["fontSizeM"],
    suffixLineHeight: 1.5,
    customSuffix: "kg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "CO2 emission avoided"))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["FlexContainer"], {
    area: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "Icon"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["FlexContainer"], {
    area: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "Equivalent to\xA0", __jsx(_components__WEBPACK_IMPORTED_MODULE_10__["ConvertedNumber"], {
    data: Math.abs(emission) * AVG_MILES_PER_KILOGRAM,
    weight: _styles__WEBPACK_IMPORTED_MODULE_9__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["colorGreen"],
    display: "inline-block",
    animate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }), "\xA0miles driven by an avg. passenger vehicle")))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://www.furniturebank.org/request-a-pick-up/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx("img", {
    className: "button",
    src: "/static/icons/furnitureBank/requestButton.svg",
    alt: "request button icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./containers/FurnitureBank2019/styles/index.js":
/*!******************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/index.js ***!
  \******************************************************/
/*! exports provided: colorGreen, colorRedDark, colorRed, colorGreyLight, colorGreyDark, media, LandFillSubContainer, ContainerChart, MainContainer, DashboardContainer, ControlsContainer, LogoContainer, ControlContainer, PanelContainer, ChartsContainer, SocChartsContainer, MapContainer, FamilyContainer, PersonsContainer, ValueContainer, EnvChartsContainer, LandFillContainer, EmissionContainer, ReqContainer, DonationPercentageContainer, ModalContainer, MainTitle, ChartTitle, ChartPaper, HEATMAP_SOURCE_ID, heatMapStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./containers/FurnitureBank2019/styles/variables.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorGreen", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["colorGreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorRedDark", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["colorRedDark"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorRed", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["colorRed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorGreyLight", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["colorGreyLight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorGreyDark", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["colorGreyDark"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "media", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["media"]; });

/* harmony import */ var _styledContainers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledContainers */ "./containers/FurnitureBank2019/styles/styledContainers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandFillSubContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["LandFillSubContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerChart", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ContainerChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["MainContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["DashboardContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ControlsContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["LogoContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["PanelContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ChartsContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocChartsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["SocChartsContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["MapContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FamilyContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["FamilyContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["PersonsContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ValueContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvChartsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["EnvChartsContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandFillContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["LandFillContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmissionContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["EmissionContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReqContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ReqContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonationPercentageContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["DonationPercentageContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ModalContainer"]; });

/* harmony import */ var _styledElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styledElements */ "./containers/FurnitureBank2019/styles/styledElements.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainTitle", function() { return _styledElements__WEBPACK_IMPORTED_MODULE_2__["MainTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartTitle", function() { return _styledElements__WEBPACK_IMPORTED_MODULE_2__["ChartTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartPaper", function() { return _styledElements__WEBPACK_IMPORTED_MODULE_2__["ChartPaper"]; });

/* harmony import */ var _mapStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapStyles */ "./containers/FurnitureBank2019/styles/mapStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HEATMAP_SOURCE_ID", function() { return _mapStyles__WEBPACK_IMPORTED_MODULE_3__["HEATMAP_SOURCE_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heatMapStyles", function() { return _mapStyles__WEBPACK_IMPORTED_MODULE_3__["heatMapStyles"]; });









/***/ }),

/***/ "./containers/FurnitureBank2019/styles/mapStyles.js":
/*!**********************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/mapStyles.js ***!
  \**********************************************************/
/*! exports provided: HEATMAP_SOURCE_ID, heatMapStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEATMAP_SOURCE_ID", function() { return HEATMAP_SOURCE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heatMapStyles", function() { return heatMapStyles; });
const HEATMAP_SOURCE_ID = "earthquakes-source";
const MAX_ZOOM_LEVEL = 20;
const heatMapStyles = {
  id: "heatmap-layer",
  source: HEATMAP_SOURCE_ID,
  maxzoom: MAX_ZOOM_LEVEL,
  type: "heatmap",
  paint: {
    // Increase the heatmap weight based on frequency and property magnitude
    "heatmap-weight": ["interpolate", ["linear"], ["get", "mag"], 0, 0, 6, 1],
    // Increase the heatmap color weight weight by zoom level
    // heatmap-intensity is a multiplier on top of heatmap-weight
    "heatmap-intensity": ["interpolate", ["linear"], ["zoom"], 0, 1, MAX_ZOOM_LEVEL, 3],
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    "heatmap-color": ["interpolate", ["linear"], ["heatmap-density"], 0, "rgba(33,102,172,0)", 0.2, "#c4f6e3", 0.4, "#9be1c7", 0.8, "#70cbac", 1, "#3db692"],
    // Adjust the heatmap radius by zoom level
    "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, MAX_ZOOM_LEVEL, 20],
    // // Transition from heatmap to circle layer by zoom level
    "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 10, 1, 20, 0]
  }
};

/***/ }),

/***/ "./containers/FurnitureBank2019/styles/styledContainers.js":
/*!*****************************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/styledContainers.js ***!
  \*****************************************************************/
/*! exports provided: MainContainer, DashboardContainer, ControlsContainer, LogoContainer, ControlContainer, PanelContainer, ChartsContainer, SocChartsContainer, MapContainer, FamilyContainer, PersonsContainer, ValueContainer, DonationPercentageContainer, EnvChartsContainer, LandFillContainer, LandFillSubContainer, ContainerChart, EmissionContainer, ReqContainer, ModalContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContainer", function() { return MainContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardContainer", function() { return DashboardContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsContainer", function() { return ControlsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoContainer", function() { return LogoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelContainer", function() { return PanelContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsContainer", function() { return ChartsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocChartsContainer", function() { return SocChartsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapContainer", function() { return MapContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyContainer", function() { return FamilyContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonsContainer", function() { return PersonsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueContainer", function() { return ValueContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationPercentageContainer", function() { return DonationPercentageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvChartsContainer", function() { return EnvChartsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandFillContainer", function() { return LandFillContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandFillSubContainer", function() { return LandFillSubContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerChart", function() { return ContainerChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmissionContainer", function() { return EmissionContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqContainer", function() { return ReqContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainer", function() { return ModalContainer; });
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./containers/FurnitureBank2019/styles/variables.js");



const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__MainContainer",
  componentId: "sc-86vxz-0"
})(["width:100vw;"]);
const DashboardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__DashboardContainer",
  componentId: "sc-86vxz-1"
})(["width:90%;height:650px;max-width:1440px;margin:0 auto;padding-top:4rem;padding-bottom:4rem;display:grid;grid-template-columns:300px 1fr;grid-template-areas:\"control charts\";", " ", ""], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].medium`
    padding-top: 3rem;
    padding-bottom: 3rem;
    height: 850px;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 1fr;
    grid-template-areas:  
      "control"
      "charts";
  `, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    width: 100%;
    padding-top: 0;
    padding-bottom: 2rem;
    grid-template-rows: 300px 1fr;
    height: 1400px;
  `);
const ControlsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__ControlsContainer",
  componentId: "sc-86vxz-2"
})(["display:grid;grid-area:control;grid-template-rows:100px 1fr;grid-template-columns:1fr;grid-template-areas:\"title\" \"panel\";", " padding:", ";", " ", " ", ""], ''
/* ${testBorder}; */
, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_0__["paddingM"], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].medium`
    grid-template-columns: 250px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:  "title panel";
    padding: 0;
    grid-column-gap: ${_variables__WEBPACK_IMPORTED_MODULE_2__["gridGapM"]};
  `, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr;
    grid-template-areas:  
      "title" 
      "panel";
    grid-column-gap: 0;
    grid-row-gap: ${_variables__WEBPACK_IMPORTED_MODULE_2__["gridGapS"]};
  `, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].extraSmall`
    grid-template-rows: 70px 1fr;
  `);
const LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__LogoContainer",
  componentId: "sc-86vxz-3"
})(["grid-area:title;padding:", ";display:flex;align-items:flex-start;justify-content:center;background:#fff;img{width:100%;}", " ", " ", ""], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_0__["paddingS"], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].medium`
    padding: 0;
    align-items: center;
  `, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    background: ${_variables__WEBPACK_IMPORTED_MODULE_2__["colorGreen"]};
    img {
      width: 300px;
    }
  `, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].extraSmall`
    img {
      width: 250px;
    }
  `);
const ControlContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__ControlContainer",
  componentId: "sc-86vxz-4"
})(["grid-area:panel;display:grid;padding:", ";", " grid-template-rows:", " 1fr;grid-template-areas:\"title\" \"panel\";", " ", ""], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_0__["paddingS"], ''
/* ${testBorder}; */
, _variables__WEBPACK_IMPORTED_MODULE_2__["titleHeightM"], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].medium`
    padding: 0;
    grid-column-gap: ${_variables__WEBPACK_IMPORTED_MODULE_2__["gridGapM"]};
  `, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    padding: ${_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_0__["paddingS"]};
  `);
const PanelContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__PanelContainer",
  componentId: "sc-86vxz-5"
})(["display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:490px;overflow-y:scroll;", " &::-webkit-scrollbar{display:none;}grid-area:panel;", " ", " ", ""], ''
/* ${testBorder}; */
, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].medium`
    height: 150px;
  `, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    height: 160px;
  `, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].extraSmall`
    height: 170px;
  `);
const ChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__ChartsContainer",
  componentId: "sc-86vxz-6"
})(["display:grid;grid-area:charts;grid-row-gap:", ";padding:", ";grid-template-rows:3fr 2fr ", ";grid-template-areas:\"soc\" \"env\" \"req\";", " ", ""], _variables__WEBPACK_IMPORTED_MODULE_2__["gridGapS"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_0__["paddingM"], _variables__WEBPACK_IMPORTED_MODULE_2__["titleHeightM"], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].medium`
    padding: 0;
  `, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    padding: ${_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_0__["paddingS"]};
  `);
const SocChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__SocChartsContainer",
  componentId: "sc-86vxz-7"
})(["display:grid;grid-area:soc;grid-row-gap:", ";grid-column-gap:", ";grid-template-rows:", " 1fr 100px;grid-template-columns:repeat(2,1fr);grid-template-areas:\"title title\" \"map families\" \"value value\";", ""], _variables__WEBPACK_IMPORTED_MODULE_2__["gridGapS"], _variables__WEBPACK_IMPORTED_MODULE_2__["gridGapM"], _variables__WEBPACK_IMPORTED_MODULE_2__["titleHeightM"], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    grid-template-rows: ${_variables__WEBPACK_IMPORTED_MODULE_2__["titleHeightM"]} repeat(3, 1fr);
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "map"
      "families"
      "value"
  `);
const MapContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__MapContainer",
  componentId: "sc-86vxz-8"
})(["grid-area:map;height:100%;width:100%;"]);
const FamilyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__FamilyContainer",
  componentId: "sc-86vxz-9"
})(["display:grid;grid-template-columns:repeat(2,2fr);grid-template-areas:\"chart persons\";align-items:center;justify-items:center;height:100%;width:100%;"]);
const PersonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__PersonsContainer",
  componentId: "sc-86vxz-10"
})(["grid-area:persons;display:flex;align-items:center;justify-content:center;padding-top:.5rem;div{display:flex;align-items:flex-end;justify-content:center;}img{margin-right:1rem;}.adult{height:110px;}.child{height:75px;}"]);
const ValueContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__ValueContainer",
  componentId: "sc-86vxz-11"
})(["display:grid;grid-template-columns:2fr 5fr;grid-template-areas:\"abs perc\";height:100%;", ""], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    grid-template-rows: 1fr repeat(2, 2fr);
    grid-template-columns: 2fr 5fr;
    grid-template-areas:
    ". ."
    "abs perc"
    ". perc";  
  `);
const DonationPercentageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__DonationPercentageContainer",
  componentId: "sc-86vxz-12"
})(["display:grid;grid-area:perc;grid-template-columns:3fr 2fr;grid-template-rows:repeat(3,1fr);grid-template-areas:\". .\" \"chart percentage\" \"subchart .\";justify-items:center;align-items:center;", ""], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "chart chart"
      "subchart percentage";
  `);
const EnvChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__EnvChartsContainer",
  componentId: "sc-86vxz-13"
})(["display:grid;grid-area:env;grid-row-gap:", ";grid-column-gap:", ";grid-template-rows:", " 1fr;grid-template-columns:repeat(2,1fr);grid-template-areas:\"title title\" \"landfill emission\";", ""], _variables__WEBPACK_IMPORTED_MODULE_2__["gridGapS"], _variables__WEBPACK_IMPORTED_MODULE_2__["gridGapM"], _variables__WEBPACK_IMPORTED_MODULE_2__["titleHeightM"], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    grid-template-rows: ${_variables__WEBPACK_IMPORTED_MODULE_2__["titleHeightM"]} repeat(2, 1fr);
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "landfill"
      "emission";
  `);
const LandFillContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__LandFillContainer",
  componentId: "sc-86vxz-14"
})(["height:100%;width:100%;display:grid;grid-template-rows:20px repeat(2,1fr);grid-row-gap:1rem;grid-template-areas:\"title\" \"weight\" \"volume\";.garbage{&-month{height:45px;padding-right:2px;}&-week{height:20px;padding-right:1px;}}.container{height:45px;}"]);
const LandFillSubContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__LandFillSubContainer",
  componentId: "sc-86vxz-15"
})(["display:grid;grid-area:", ";grid-template-rows:1fr 30px;grid-template-columns:repeat(2,1fr);grid-template-areas:\"num icon\" \"text text\";"], props => props.gridArea);
const ContainerChart = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__ContainerChart",
  componentId: "sc-86vxz-16"
})(["width:68px;height:", "px;background-color:", ";transform:translateY(", "px);transition:all 1s cubic-bezier(0.645,0.045,0.355,1);", ""], props => props.height < 1 ? props.height * 41 : 41, _variables__WEBPACK_IMPORTED_MODULE_2__["colorGreen"], props => props.height < 1 ? 41 - props.height * 41 : 0, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    height: ${props => props.height < 1 ? props.height * 40 : 40}px;
    transform: translateY(${props => props.height < 1 ? 41 - props.height * 42 : 1}px);
    background-color: ${_variables__WEBPACK_IMPORTED_MODULE_2__["colorGreen"]};
  `);
const EmissionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__EmissionContainer",
  componentId: "sc-86vxz-17"
})(["height:100%;width:100%;display:grid;grid-template-rows:1fr 4fr 30px;grid-template-columns:repeat(2,1fr);grid-template-areas:\". .\" \"num icon\" \"text text\";"]);
const ReqContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__ReqContainer",
  componentId: "sc-86vxz-18"
})(["grid-area:req;display:flex;margin-top:1.6rem;justify-content:flex-end;align-items:center;.button{height:40px;cursor:pointer;transition:.3s all;&:hover{transform:translateY(-2px);}&:active{transform:translateY(0px);}}", ""], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    justify-content: center;
  `);
const ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__ModalContainer",
  componentId: "sc-86vxz-19"
})(["width:750px;height:450px;padding:", ";position:relative;display:grid;grid-row-gap:2rem;grid-column-gap:3rem;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr);grid-template-areas:\"intro help data\" \"one two three\";", " ", " img{width:100%;}.icon{position:absolute;top:.5rem;right:1rem;font-size:", ";font-weight:", ";color:", ";cursor:pointer;}"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_0__["paddingXL"], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].medium`
    width: 650px;
    height: 650px;
    padding: ${_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_0__["paddingL"]};

    grid-row-gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      "intro help"
      "one two"
      "three data";
  `, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    width: 300px;
    height: 1200px;

    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-template-areas:
      "intro"
      "help"
      "one"
      "two"
      "three"
      "data";
  `, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_0__["fontSizeL"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_0__["fontWeightL"], _variables__WEBPACK_IMPORTED_MODULE_2__["colorRed"]);

/***/ }),

/***/ "./containers/FurnitureBank2019/styles/styledElements.js":
/*!***************************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/styledElements.js ***!
  \***************************************************************/
/*! exports provided: MainTitle, ChartTitle, ChartPaper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTitle", function() { return MainTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartTitle", function() { return ChartTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPaper", function() { return ChartPaper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./containers/FurnitureBank2019/styles/variables.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./containers/FurnitureBank2019/styles/index.js");





const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledElements__MainTitle",
  componentId: "sc-1j0zlij-0"
})(["font-size:", ";font-weight:", ";color:", ";text-transform:uppercase;grid-area:", ";display:flex;align-items:center;justify-content:flex-start;grid-area:", ";", " span{font-weight:", ";font-size:", ";}"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontSizeL"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontWeightL"], _variables__WEBPACK_IMPORTED_MODULE_2__["colorGreyDark"], props => props.gridArea, props => props.gridArea, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    font-size: ${_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontSizeM"]};
    
    span {
      font-size: ${_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontSizeS"]};
    }
  `, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontWeightM"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontSizeM"]);
const ChartTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledElements__ChartTitle",
  componentId: "sc-1j0zlij-1"
})(["font-size:", ";font-weight:", ";color:", ";text-transform:uppercase;background:", ";position:absolute;", " ", " z-index:100;padding:", ";display:flex;align-items:center;justify-content:flex-start;grid-area:", ";"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontSizeM"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontWeightM"], _variables__WEBPACK_IMPORTED_MODULE_2__["colorGreyDark"], props => props.withBG && '#fff', props => props.message ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["top:50%;left:50%;transform:translate(-50%,-50%);white-space:nowrap;color:", ";"], ___WEBPACK_IMPORTED_MODULE_4__["colorGreen"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["top:0;left:0;"]), props => props.contained && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:80px;", ""], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
       width: auto;
    `), _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingXS"], props => props.gridArea);
const ChartPaper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"]).withConfig({
  displayName: "styledElements__ChartPaper",
  componentId: "sc-1j0zlij-2"
})(["grid-area:", ";height:100%;width:100%;overflow:hidden;position:relative;"], props => props.gridArea);

/***/ }),

/***/ "./containers/FurnitureBank2019/styles/variables.js":
/*!**********************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/variables.js ***!
  \**********************************************************/
/*! exports provided: colorGreen, colorRedDark, colorRed, colorGreyLight, colorGreyDark, titleHeightM, titleHeightS, gridGapM, gridGapS, media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorGreen", function() { return colorGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorRedDark", function() { return colorRedDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorRed", function() { return colorRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorGreyLight", function() { return colorGreyLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorGreyDark", function() { return colorGreyDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titleHeightM", function() { return titleHeightM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titleHeightS", function() { return titleHeightS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridGapM", function() { return gridGapM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridGapS", function() { return gridGapS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/mediaQueries */ "./styles/mediaQueries.js");

const colorGreen = '#3db692';
const colorRedDark = '#b02b2c';
const colorRed = '#ec1c24';
const colorGreyLight = '#D3D3D3';
const colorGreyDark = '#333';
const titleHeightM = '3rem';
const titleHeightS = '2rem';
const gridGapM = '2.4rem';
const gridGapS = '1.2rem';
const media = Object(_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_0__["createBreakPoints"])({
  medium: 1024,
  small: 767,
  extraSmall: 545
});

/***/ }),

/***/ "./hooks/index.js":
/*!************************!*\
  !*** ./hooks/index.js ***!
  \************************/
/*! exports provided: useSvgResize, usePrevious, useWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useSvgResize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useSvgResize */ "./hooks/useSvgResize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSvgResize", function() { return _useSvgResize__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usePrevious */ "./hooks/usePrevious.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return _usePrevious__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useWindowSize */ "./hooks/useWindowSize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return _useWindowSize__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./hooks/usePrevious.js":
/*!******************************!*\
  !*** ./hooks/usePrevious.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function usePrevious(value) {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

/* harmony default export */ __webpack_exports__["default"] = (usePrevious);

/***/ }),

/***/ "./hooks/useSvgResize.js":
/*!*******************************!*\
  !*** ./hooks/useSvgResize.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useSvgResize = svgRef => {
  const {
    0: dims,
    1: setDims
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: undefined,
    height: undefined
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handleResize = () => {
      // console.log(svgRef.current.offsetHeight);
      const width = svgRef.current.offsetWidth;
      const height = svgRef.current.offsetHeight;
      setDims({
        width,
        height
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [svgRef]);
  return dims;
};

/* harmony default export */ __webpack_exports__["default"] = (useSvgResize);

/***/ }),

/***/ "./hooks/useWindowSize.js":
/*!********************************!*\
  !*** ./hooks/useWindowSize.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useWindowSize() {
  const isClient = false;
  const getSize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined
  }), [isClient]);
  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getSize, isClient]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "core-js/library/fn/set");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/visualisations/furniture-bank-2019.js":
/*!*****************************************************!*\
  !*** ./pages/visualisations/furniture-bank-2019.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_FurnitureBank2019__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/FurnitureBank2019 */ "./containers/FurnitureBank2019/index.jsx");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/pages/visualisations/furniture-bank-2019.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_containers_FurnitureBank2019__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}));

/***/ }),

/***/ "./store/furnitureBankReducer/actions.js":
/*!***********************************************!*\
  !*** ./store/furnitureBankReducer/actions.js ***!
  \***********************************************/
/*! exports provided: addItem, incrementItem, decrementItem, deleteItem, toggleModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementItem", function() { return incrementItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementItem", function() { return decrementItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleModal", function() { return toggleModal; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/furnitureBankReducer/types.js");

const addItem = item => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["ADD_ITEM"],
  payload: {
    item
  }
});
const incrementItem = item => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_ITEM"],
  payload: {
    item
  }
});
const decrementItem = item => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DECREMENT_ITEM"],
  payload: {
    item
  }
});
const deleteItem = item => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_ITEM"],
  payload: {
    item
  }
});
const toggleModal = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_MODAL"]
});

/***/ }),

/***/ "./store/furnitureBankReducer/selectors.js":
/*!*************************************************!*\
  !*** ./store/furnitureBankReducer/selectors.js ***!
  \*************************************************/
/*! exports provided: selectAllSelected, selectTotalQuantity, selectAllUnselected, selectAllSelectedItems, selectAllSelectedPrice, selectAllSelectedWeight, selectAllSelectedVolume, selectAllSelectedEmission, selectFilteredDonationPostalCode, selectFilteredFamilies, selectFilteredCoordinates, selectUniqueCoordinates, selectPostalCodeFamilies, selectGroups, selectTopGroups, selectAdults, selectChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSelected", function() { return selectAllSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotalQuantity", function() { return selectTotalQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllUnselected", function() { return selectAllUnselected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSelectedItems", function() { return selectAllSelectedItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSelectedPrice", function() { return selectAllSelectedPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSelectedWeight", function() { return selectAllSelectedWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSelectedVolume", function() { return selectAllSelectedVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSelectedEmission", function() { return selectAllSelectedEmission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredDonationPostalCode", function() { return selectFilteredDonationPostalCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredFamilies", function() { return selectFilteredFamilies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredCoordinates", function() { return selectFilteredCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUniqueCoordinates", function() { return selectUniqueCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPostalCodeFamilies", function() { return selectPostalCodeFamilies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectGroups", function() { return selectGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTopGroups", function() { return selectTopGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAdults", function() { return selectAdults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectChildren", function() { return selectChildren; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);






const selectGroupList = state => state.furnitureBankReducer.groups;

const selectFurnitureList = state => state.furnitureBankReducer.productList;

const selectedAllSelected = state => state.furnitureBankReducer.selectedItems;

const selectAllDonation = state => state.furnitureBankReducer.donationsData;

const selectAllEmission = state => state.furnitureBankReducer.emissionData;

const selectAllFamily = state => state.furnitureBankReducer.familyData;

const selectAllCoordinates = state => state.furnitureBankReducer.coordinatesData; //* Array of all selected items


const selectAllSelected = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectedAllSelected, selectedList => selectedList.map(el => el.name));
const selectTotalQuantity = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectedAllSelected, selectedList => selectedList.reduce((acc, curr) => acc + curr.quantity, 0));
const selectAllUnselected = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectFurnitureList, selectAllSelected, (totalList, allSelected) => totalList.filter(el => !allSelected.map(el => el.toLowerCase()).includes(el.product_name.toLowerCase())));
const selectAllSelectedItems = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectFurnitureList, selectedAllSelected, (furnitureList, selectedItems) => selectedItems.map(el => furnitureList.find(d => d.product_name === el.name)));
const selectAllSelectedPrice = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectAllSelectedItems, selectedAllSelected, (selectedItems, selectedQuantities) => selectedItems.reduce((acc, curr) => acc + selectedQuantities.find(el => curr.product_name === el.name).quantity * curr.value, 0));
const selectAllSelectedWeight = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectAllSelectedItems, selectedAllSelected, (selectedItems, selectedQuantities) => selectedItems.reduce((acc, curr) => acc + selectedQuantities.find(el => curr.product_name === el.name).quantity * curr.weight_lbs, 0));
const selectAllSelectedVolume = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectAllSelectedItems, selectedAllSelected, (selectedItems, selectedQuantities) => selectedItems.reduce((acc, curr) => acc + selectedQuantities.find(el => curr.product_name === el.name).quantity * curr.volume_ft, 0));
const selectAllSelectedEmission = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectedAllSelected, selectAllEmission, (selectedItems, emissionList) => selectedItems.reduce((acc, curr) => {
  const result = emissionList.find(el => el.product_name === curr.name);
  return result ? acc + result.kg_co2_per_unit * curr.quantity : acc;
}, 0)); //* Get relevant postal code list

const selectFilteredDonationPostalCode = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectAllDonation, selectAllSelected, (donations, selectedItems) => donations.filter(el => selectedItems.includes(el.product_name))); //* Get family data for postal codes

const selectFilteredFamilies = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectAllFamily, selectFilteredDonationPostalCode, (families, selectedPostalCodes) => families.filter(el => selectedPostalCodes.includes(el.postal_code))); //* Get coordinates for filtere items

const selectFilteredCoordinates = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectAllCoordinates, selectFilteredDonationPostalCode, (coordinates, selectedPostalCodes) => selectedPostalCodes.map(el => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, el, {
  coors: coordinates.find(d => d.postal_code === el.postal_code)
}))); //* Get unique list of postal codes

const selectUniqueCoordinates = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectFilteredDonationPostalCode, filteredPostalCodes => [...new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default.a(filteredPostalCodes.map(el => el.postal_code))]); //* Get families from filtered postal codes

const selectPostalCodeFamilies = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectUniqueCoordinates, selectAllFamily, (postalCodes, families) => families.filter(el => postalCodes.includes(el.postal_code))); //* Top Groups

const selectGroups = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectPostalCodeFamilies, families => lodash__WEBPACK_IMPORTED_MODULE_4___default.a.groupBy(families, "segment"));
const selectTopGroups = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectGroups, selectGroupList, selectPostalCodeFamilies, (groups, groupList, total) => groupList.map(el => groups[el] ? {
  group: el,
  share: groups[el].length / total.length
} : {
  group: el,
  share: 0
}).sort((a, b) => b.share - a.share).slice(0, 3)); //* Persons

const selectAdults = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectPostalCodeFamilies, families => lodash__WEBPACK_IMPORTED_MODULE_4___default.a.mean(families.map(el => _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(el.adults) || 0)));
const selectChildren = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectPostalCodeFamilies, families => lodash__WEBPACK_IMPORTED_MODULE_4___default.a.mean(families.map(el => _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(el.children) || 0)));

/***/ }),

/***/ "./store/furnitureBankReducer/types.js":
/*!*********************************************!*\
  !*** ./store/furnitureBankReducer/types.js ***!
  \*********************************************/
/*! exports provided: ADD_ITEM, DECREMENT_ITEM, INCREMENT_ITEM, DELETE_ITEM, TOGGLE_MODAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ITEM", function() { return ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_ITEM", function() { return DECREMENT_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_ITEM", function() { return INCREMENT_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ITEM", function() { return DELETE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MODAL", function() { return TOGGLE_MODAL; });
const ADD_ITEM = 'ADD_ITEM';
const DECREMENT_ITEM = 'DECREMENT_ITEM';
const INCREMENT_ITEM = 'INCREMENT_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const TOGGLE_MODAL = 'TOGGLE_MODAL';

/***/ }),

/***/ "./styles/index.js":
/*!*************************!*\
  !*** ./styles/index.js ***!
  \*************************/
/*! exports provided: FlexContainer, TextSpan, defaultBreakPoints, createBreakPoints, paddingXL, paddingL, paddingM, paddingS, paddingXS, testBorder, fontWeightXS, fontWeightS, fontWeightM, fontWeightL, fontWeightXL, fontSizeXXL, fontSizeXL, fontSizeL, fontSizeM, fontSizeS, fontSizeXS, fontFamilyMain, colorGrey, easeInOutCubic, zIndexModal, zIndexModalBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sharedStyledComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharedStyledComponents */ "./styles/sharedStyledComponents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexContainer", function() { return _sharedStyledComponents__WEBPACK_IMPORTED_MODULE_0__["FlexContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextSpan", function() { return _sharedStyledComponents__WEBPACK_IMPORTED_MODULE_0__["TextSpan"]; });

/* harmony import */ var _mediaQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediaQueries */ "./styles/mediaQueries.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultBreakPoints", function() { return _mediaQueries__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBreakPoints", function() { return _mediaQueries__WEBPACK_IMPORTED_MODULE_1__["createBreakPoints"]; });

/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharedStyles */ "./styles/sharedStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paddingXL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["paddingXL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paddingL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["paddingL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paddingM", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["paddingM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paddingS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["paddingS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paddingXS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["paddingXS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "testBorder", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["testBorder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeightXS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontWeightXS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeightS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontWeightS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeightM", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontWeightM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeightL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontWeightL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeightXL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontWeightXL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeXXL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeXXL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeXL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeXL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeM", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeXS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeXS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFamilyMain", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontFamilyMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorGrey", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["colorGrey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeInOutCubic", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["easeInOutCubic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zIndexModal", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["zIndexModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zIndexModalBackground", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["zIndexModalBackground"]; });






/***/ }),

/***/ "./styles/mediaQueries.js":
/*!********************************!*\
  !*** ./styles/mediaQueries.js ***!
  \********************************/
/*! exports provided: default, createBreakPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBreakPoints", function() { return createBreakPoints; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const sizes = {
  largest: 1300,
  large: 1100,
  medium: 900,
  small: 770,
  smallest: 600,
  tiny: 450
};
/* harmony default export */ __webpack_exports__["default"] = (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(sizes).reduce((acc, label) => {
  acc[label] = (...args) => Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (max-width:", "px){", ";}"], sizes[label], Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(...args));

  return acc;
}, {}));
const createBreakPoints = (customBreakpoints = sizes) => _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(customBreakpoints).reduce((acc, label) => {
  acc[label] = (...args) => Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (max-width:", "px){", ";}"], customBreakpoints[label], Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(...args));

  return acc;
}, {});

/***/ }),

/***/ "./styles/sharedStyledComponents.js":
/*!******************************************!*\
  !*** ./styles/sharedStyledComponents.js ***!
  \******************************************/
/*! exports provided: FlexContainer, TextSpan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexContainer", function() { return FlexContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextSpan", function() { return TextSpan; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./styles/index.js");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharedStyles */ "./styles/sharedStyles.js");



const FlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "sharedStyledComponents__FlexContainer",
  componentId: "sc-1q45dof-0"
})(["display:flex;position:", ";flex-direction:", ";justify-content:", ";;align-items:", ";grid-area:", ";width:", ";height:", ";font-size:", ";padding-left:", "rem;margin-top:", "rem;padding:", ";", ""], props => props.position || 'relative', props => props.direction || 'row', props => props.justify || 'center', props => props.align || 'center', props => props.area, props => props.width || '100%', props => props.height || '100%', props => props.size || ___WEBPACK_IMPORTED_MODULE_1__["fontSizeM"], props => props.paddingLeft || 0, props => props.marginTop || 0, props => props.padding, props => props.border && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["border:1px solid black;"]));
const TextSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "sharedStyledComponents__TextSpan",
  componentId: "sc-1q45dof-1"
})(["font-size:", ";font-weight:", ";color:", ";display:", ";padding-bottom:", "rem;"], props => props.size || ___WEBPACK_IMPORTED_MODULE_1__["fontSizeM"], props => props.weight || ___WEBPACK_IMPORTED_MODULE_1__["fontWeightS"], props => props.color || _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["colorGrey"], props => props.display || 'block', props => props.paddingBottom || 0);

/***/ }),

/***/ "./styles/sharedStyles.js":
/*!********************************!*\
  !*** ./styles/sharedStyles.js ***!
  \********************************/
/*! exports provided: fontFamilyMain, colorGrey, fontSizeXXL, fontSizeXL, fontSizeL, fontSizeM, fontSizeS, fontSizeXS, fontWeightXS, fontWeightS, fontWeightM, fontWeightL, fontWeightXL, paddingXL, paddingL, paddingM, paddingS, paddingXS, testBorder, easeInOutCubic, zIndexModal, zIndexModalBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamilyMain", function() { return fontFamilyMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorGrey", function() { return colorGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeXXL", function() { return fontSizeXXL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeXL", function() { return fontSizeXL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeL", function() { return fontSizeL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeM", function() { return fontSizeM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeS", function() { return fontSizeS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeXS", function() { return fontSizeXS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeightXS", function() { return fontWeightXS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeightS", function() { return fontWeightS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeightM", function() { return fontWeightM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeightL", function() { return fontWeightL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeightXL", function() { return fontWeightXL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingXL", function() { return paddingXL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingL", function() { return paddingL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingM", function() { return paddingM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingS", function() { return paddingS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingXS", function() { return paddingXS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testBorder", function() { return testBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutCubic", function() { return easeInOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndexModal", function() { return zIndexModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndexModalBackground", function() { return zIndexModalBackground; });
const fontFamilyMain = `gill-sans-nova, sans-serif`;
const colorGrey = `#333333`;
const fontSizeXXL = `3.6rem`;
const fontSizeXL = `2.4rem`;
const fontSizeL = `1.6rem`;
const fontSizeM = `1.2rem`;
const fontSizeS = `.8rem`;
const fontSizeXS = `.6rem`;
const fontWeightXS = 200;
const fontWeightS = 300;
const fontWeightM = 400;
const fontWeightL = 600;
const fontWeightXL = 700;
const paddingXL = '1.2rem 2.4rem';
const paddingL = '1rem 2rem';
const paddingM = '0.8rem 1.6rem';
const paddingS = '0.6rem 1.2rem';
const paddingXS = '0.4rem .8rem';
const testBorder = `border: 1px solid black`;
const easeInOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
const zIndexModal = 1100;
const zIndexModalBackground = 1000;

/***/ }),

/***/ "./utils/chartHelpers.js":
/*!*******************************!*\
  !*** ./utils/chartHelpers.js ***!
  \*******************************/
/*! exports provided: numberTween, createUpdateSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberTween", function() { return numberTween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUpdateSvg", function() { return createUpdateSvg; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "d3-interpolate");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_interpolate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-format */ "d3-format");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_format__WEBPACK_IMPORTED_MODULE_2__);



const numberTween = (d, i, n, key, numFormat) => {
  const that = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(n[i]);
  const num = +that.text().substring(0, that.text().length - 1) * 0.01;
  const newNum = d[key];
  const index = Object(d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"])(num, newNum);
  return function (t) {
    that.text(`${Object(d3_format__WEBPACK_IMPORTED_MODULE_2__["format"])(numFormat)(index(t))}`);
  };
};
const createUpdateSvg = ({
  area,
  dims,
  margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  append,
  update
}) => {
  let chartArea;

  const setDims = svg => svg.attr("width", dims.width).attr("height", dims.height);

  const chartWidth = dims.width - margin.left - margin.right;
  const chartHeight = dims.height - margin.top - margin.bottom;

  if (append) {
    area.append("svg");
    const svg = area.select("svg");
    setDims(svg);
    svg.append("g").attr("class", "chart-area").attr("transform", `translate(${margin.left}, ${margin.top})`);
    chartArea = area.select(".chart-area");
  }

  ;

  if (update) {
    setDims(area.select("svg"));
  }

  return {
    chartArea,
    chartWidth,
    chartHeight
  };
};

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: createUpdateSvg, numberTween, getArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chartHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartHelpers */ "./utils/chartHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUpdateSvg", function() { return _chartHelpers__WEBPACK_IMPORTED_MODULE_0__["createUpdateSvg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberTween", function() { return _chartHelpers__WEBPACK_IMPORTED_MODULE_0__["numberTween"]; });

/* harmony import */ var _renderHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderHelpers */ "./utils/renderHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getArray", function() { return _renderHelpers__WEBPACK_IMPORTED_MODULE_1__["getArray"]; });





/***/ }),

/***/ "./utils/renderHelpers.js":
/*!********************************!*\
  !*** ./utils/renderHelpers.js ***!
  \********************************/
/*! exports provided: getArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArray", function() { return getArray; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);

const getArray = num => num > 0 ? _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(Math.floor(num)), (_, i) => i + 1) : [];

/***/ }),

/***/ 3:
/*!***********************************************************!*\
  !*** multi ./pages/visualisations/furniture-bank-2019.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andrasszesztai/Desktop/boring-barchart-nextjs/pages/visualisations/furniture-bank-2019.js */"./pages/visualisations/furniture-bank-2019.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "autosuggest-highlight/match":
/*!**********************************************!*\
  !*** external "autosuggest-highlight/match" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("autosuggest-highlight/match");

/***/ }),

/***/ "autosuggest-highlight/parse":
/*!**********************************************!*\
  !*** external "autosuggest-highlight/parse" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("autosuggest-highlight/parse");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/set":
/*!*****************************************!*\
  !*** external "core-js/library/fn/set" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ }),

/***/ "d3-array":
/*!***************************!*\
  !*** external "d3-array" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-array");

/***/ }),

/***/ "d3-ease":
/*!**************************!*\
  !*** external "d3-ease" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-ease");

/***/ }),

/***/ "d3-format":
/*!****************************!*\
  !*** external "d3-format" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-format");

/***/ }),

/***/ "d3-interpolate":
/*!*********************************!*\
  !*** external "d3-interpolate" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-interpolate");

/***/ }),

/***/ "d3-scale":
/*!***************************!*\
  !*** external "d3-scale" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-scale");

/***/ }),

/***/ "d3-selection":
/*!*******************************!*\
  !*** external "d3-selection" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-selection");

/***/ }),

/***/ "d3-transition":
/*!********************************!*\
  !*** external "d3-transition" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-transition");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-autosuggest":
/*!************************************!*\
  !*** external "react-autosuggest" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-autosuggest");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-map-gl":
/*!*******************************!*\
  !*** external "react-map-gl" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-map-gl");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=furniture-bank-2019.js.map