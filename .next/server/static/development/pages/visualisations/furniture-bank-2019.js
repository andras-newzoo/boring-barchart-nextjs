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
  handleSelected
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
      lineNumber: 66
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
      lineNumber: 67
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
})(["position:relative;.react-autosuggest__container{position:relative;}.react-autosuggest__input{", " height:", "px;padding:", ";margin:.4rem 0;padding-left:", "rem;font-weight:", ";font-size:", ";border:1px solid ", ";border-radius:4px;font-family:", ";color:", ";transition:.5s all;&:focus{outline:none;}}.react-autosuggest__container--open .react-autosuggest__input{border-bottom-left-radius:0;border-bottom-right-radius:0;}.react-autosuggest__suggestions-container{display:none;}.react-autosuggest__container--open .react-autosuggest__suggestions-container{display:block;position:absolute;top:calc(30px + 1.4rem - 1px);width:", "px;border:1px solid ", ";background-color:#fff;font-weight:", ";font-size:", ";border-bottom-left-radius:4px;border-bottom-right-radius:4px;z-index:2;}.react-autosuggest__suggestions-list{margin:0;padding:0;list-style-type:none;}.react-autosuggest__suggestion{cursor:pointer;padding:", ";}.highlight{color:", ";font-weight:", ";}.icon{position:absolute;top:50%;left:1rem;transform:translateY(-50%);z-index:10;fill:", ";visibility:", ";}"], props => props.searched ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:calc(", "px - 1.8rem);"], props => props.width) : Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:calc(", "px - 4rem);"], props => props.width), props => props.height || 30, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingXS"], props => !props.searched && 3, props => props.fontWeight || _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontWeightXS"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontSizeM"], props => props.borderColor || '#aaa', _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontFamilyMain"], _containers_FurnitureBank2019_styles__WEBPACK_IMPORTED_MODULE_2__["colorGreyDark"], props => props.width - 2, props => props.borderColor || '#aaa', props => props.fontWeight || _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontWeightXS"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontSizeM"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingXS"], props => props.highlight || '#333', _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontWeightL"], _containers_FurnitureBank2019_styles__WEBPACK_IMPORTED_MODULE_2__["colorGreyDark"], props => props.searched ? 'hidden' : 'visible');

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

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: AutoComplete, ItemChip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutoComplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoComplete */ "./components/AutoComplete/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return _AutoComplete__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ItemChip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemChip */ "./components/ItemChip/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemChip", function() { return _ItemChip__WEBPACK_IMPORTED_MODULE_1__["default"]; });





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

/***/ "./containers/FurnitureBank2019/components/ControlContainer.jsx":
/*!**********************************************************************!*\
  !*** ./containers/FurnitureBank2019/components/ControlContainer.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ "./components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/actions */ "./store/furnitureBankReducer/actions.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/ControlContainer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ControlContainer = () => {
  const {
    0: dimensions,
    1: setDimensions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const panelContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const panelWidth = panelContainerRef.current.clientWidth;
    const panelHeight = panelContainerRef.current.clientHeight;
    !dimensions && setDimensions({
      width: panelWidth,
      height: panelHeight
    });
  }, [panelContainerRef, dimensions]);

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
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Items to Donate ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "\xA0 ( ", totalQuantity, " )")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["PanelContainer"], {
    ref: panelContainerRef,
    height: dimensions && dimensions.height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
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
      lineNumber: 52
    },
    __self: undefined
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["AutoComplete"], {
    data: allUnselected,
    itemKey: "product_name",
    handleSelected: handleSelected,
    style: dimensions && {
      width: dimensions.width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ControlContainer);

/***/ }),

/***/ "./containers/FurnitureBank2019/components/Map/mapStyles.js":
/*!******************************************************************!*\
  !*** ./containers/FurnitureBank2019/components/Map/mapStyles.js ***!
  \******************************************************************/
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
    "heatmap-color": ["interpolate", ["linear"], ["heatmap-density"], 0, "rgba(33,102,172,0)", 0.2, "#3db692", 0.4, "#6bbca0", 0.8, "#ccc", 1, "#333"],
    // Adjust the heatmap radius by zoom level
    "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, MAX_ZOOM_LEVEL, 20],
    // // Transition from heatmap to circle layer by zoom level
    "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 5, 1, 20, 0]
  }
};

/***/ }),

/***/ "./containers/FurnitureBank2019/components/index.js":
/*!**********************************************************!*\
  !*** ./containers/FurnitureBank2019/components/index.js ***!
  \**********************************************************/
/*! exports provided: ControlContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ControlContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlContainer */ "./containers/FurnitureBank2019/components/ControlContainer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return _ControlContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./containers/FurnitureBank2019/index.jsx":
/*!************************************************!*\
  !*** ./containers/FurnitureBank2019/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
/* harmony import */ var _styles_styledContainers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/styledContainers */ "./containers/FurnitureBank2019/styles/styledContainers.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-map-gl */ "react-map-gl");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Map_mapStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Map/mapStyles */ "./containers/FurnitureBank2019/components/Map/mapStyles.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Send */ "@material-ui/icons/Send");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _styles_styledElements__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles/styledElements */ "./containers/FurnitureBank2019/styles/styledElements.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["makeStyles"])(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  button: {
    background: _styles__WEBPACK_IMPORTED_MODULE_3__["colorGreen"],
    color: 'white',
    fontSize: _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_15__["fontSizeM"],
    '&:hover': {
      background: _styles__WEBPACK_IMPORTED_MODULE_3__["colorGreen"],
      color: 'white'
    }
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const filteredCoordinates = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_6__["selectFilteredCoordinates"]);
  const {
    0: initMap,
    1: setInitMap
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const mapRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const viewport = {
    width: "100%",
    height: "100%",
    latitude: 43.66107,
    longitude: -79.477015,
    zoom: 8
  };

  const handleMapLoaded = () => {
    mapRef.current.getMap().addSource(_components_Map_mapStyles__WEBPACK_IMPORTED_MODULE_10__["HEATMAP_SOURCE_ID"], {
      type: "geojson",
      data: makeGeoJSON(filteredCoordinates)
    });
    mapRef.current.getMap().addLayer(_components_Map_mapStyles__WEBPACK_IMPORTED_MODULE_10__["heatMapStyles"]);
    setInitMap(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (initMap) {
      mapRef.current.getMap().getSource(_components_Map_mapStyles__WEBPACK_IMPORTED_MODULE_10__["HEATMAP_SOURCE_ID"]).setData(makeGeoJSON(filteredCoordinates));
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_7__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "What is the estimated social impact of your donation?"), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_7__["MapContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_17__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: mapRef,
    mapboxApiAccessToken: _config__WEBPACK_IMPORTED_MODULE_16__["config"].MAP_API
  }, viewport, {
    mapStyle: "mapbox://styles/szeandr/ck1664yzv02iq1crq35ea679o",
    onLoad: handleMapLoaded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  })))), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_7__["FamilyContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_17__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  })), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_7__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_17__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }))), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_7__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, "What is the estimated environmental impact of your donation?"), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_7__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_17__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  })), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_7__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_17__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }))), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_7__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["MainTitle"], {
    spec: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    className: classes.button,
    variant: "contained",
    disableRipple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, "Request a Pickup", __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_13___default.a, {
    fontSize: "small",
    className: classes.rightIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
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
/*! exports provided: colorGreen, colorRedDark, colorRed, colorGreyLight, colorGreyDark, media, MainContainer, DashboardContainer, ControlsContainer, LogoContainer, ControlContainer, PanelContainer, ChartsContainer, MainTitle */
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["MainContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["DashboardContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ControlsContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["LogoContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["PanelContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ChartsContainer"]; });

/* harmony import */ var _styledElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styledElements */ "./containers/FurnitureBank2019/styles/styledElements.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainTitle", function() { return _styledElements__WEBPACK_IMPORTED_MODULE_2__["MainTitle"]; });








/***/ }),

/***/ "./containers/FurnitureBank2019/styles/styledContainers.js":
/*!*****************************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/styledContainers.js ***!
  \*****************************************************************/
/*! exports provided: MainContainer, DashboardContainer, ControlsContainer, LogoContainer, ControlContainer, PanelContainer, ChartsContainer, SocChartsContainer, MapContainer, FamilyContainer, ValueContainer, EnvChartsContainer, LandFillContainer, EmissionContainer, ReqContainer */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueContainer", function() { return ValueContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvChartsContainer", function() { return EnvChartsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandFillContainer", function() { return LandFillContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmissionContainer", function() { return EmissionContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqContainer", function() { return ReqContainer; });
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./containers/FurnitureBank2019/styles/variables.js");


 // import { border } from "@material-ui/system";

const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__MainContainer",
  componentId: "sc-86vxz-0"
})(["width:100vw;"]);
const DashboardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__DashboardContainer",
  componentId: "sc-86vxz-1"
})(["width:90%;height:650px;max-width:1440px;margin:0 auto;padding-top:5rem;padding-bottom:5rem;display:grid;grid-template-columns:300px 1fr;grid-template-areas:\"control charts\";", " ", " ", ""], ''
/* ${testBorder}; */
, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].medium`
    padding-top: 3rem;
    padding-bottom: 3rem;
    height: 850px;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 1fr;
    grid-template-areas:  
      "control"
      "charts";
  `, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    width: 95%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    grid-template-rows: 300px 1fr;
    height: 1300px;
  `);
const ControlsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__ControlsContainer",
  componentId: "sc-86vxz-2"
})(["display:grid;grid-area:control;grid-template-rows:100px 1fr;grid-template-columns:1fr;grid-template-areas:\"title\" \"panel\";", " padding:", ";", " ", ""], ''
/* ${testBorder}; */
, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_0__["paddingM"], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].medium`
    grid-template-columns: 250px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:  "title panel";
    padding: 0;
    grid-column-gap: ${_variables__WEBPACK_IMPORTED_MODULE_2__["gridGapM"]};
  `, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    grid-template-columns: 1fr;
    grid-template-rows: 70px 1fr;
    grid-template-areas:  
      "title" 
      "panel";
    grid-column-gap: 0;
    grid-row-gap: ${_variables__WEBPACK_IMPORTED_MODULE_2__["gridGapM"]};
  `);
const LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__LogoContainer",
  componentId: "sc-86vxz-3"
})(["grid-area:title;padding:", ";", " img{width:100%;}", ""], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_0__["paddingS"], ''
/* ${testBorder}; */
, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].medium`
    padding: 0;
  `);
const ControlContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__ControlContainer",
  componentId: "sc-86vxz-4"
})(["grid-area:panel;display:grid;padding:", ";", " grid-template-rows:", " 1fr;grid-template-areas:\"title\" \"panel\";", ""], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_0__["paddingS"], ''
/* ${testBorder}; */
, _variables__WEBPACK_IMPORTED_MODULE_2__["titleHeightM"], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].medium`
    padding: 0;
    grid-column-gap: ${_variables__WEBPACK_IMPORTED_MODULE_2__["gridGapM"]};
  `);
const PanelContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__PanelContainer",
  componentId: "sc-86vxz-5"
})(["display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:350px;overflow-y:scroll;", " &::-webkit-scrollbar{display:none;}grid-area:panel;", " ", ""], ''
/* ${testBorder}; */
, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].medium`
    height: 150px;
  `, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    height: 170px;
  `);
const ChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__ChartsContainer",
  componentId: "sc-86vxz-6"
})(["display:grid;grid-area:charts;grid-row-gap:", ";padding:", ";", " grid-template-rows:3fr 2fr ", ";grid-template-areas:\"soc\" \"env\" \"req\";"], _variables__WEBPACK_IMPORTED_MODULE_2__["gridGapS"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_0__["paddingM"], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].medium`
    padding: 0;
  `, _variables__WEBPACK_IMPORTED_MODULE_2__["titleHeightM"]);
const SocChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__SocChartsContainer",
  componentId: "sc-86vxz-7"
})(["display:grid;grid-area:soc;grid-row-gap:", ";grid-column-gap:", ";grid-template-rows:", " 1fr 100px;grid-template-columns:repeat(2,1fr);grid-template-areas:\"title title\" \"map families\" \"value value\";", ""], _variables__WEBPACK_IMPORTED_MODULE_2__["gridGapS"], _variables__WEBPACK_IMPORTED_MODULE_2__["gridGapM"], _variables__WEBPACK_IMPORTED_MODULE_2__["titleHeightM"], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].small`
    grid-template-rows: ${_variables__WEBPACK_IMPORTED_MODULE_2__["titleHeightM"]} repeat(2, 1fr) 100px;
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
})(["grid-area:families;height:100%;width:100%;"]);
const ValueContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__ValueContainer",
  componentId: "sc-86vxz-10"
})(["grid-area:value;height:100%;width:100%;"]);
const EnvChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__EnvChartsContainer",
  componentId: "sc-86vxz-11"
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
  componentId: "sc-86vxz-12"
})(["grid-area:landfill;height:100%;width:100%;"]);
const EmissionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__EmissionContainer",
  componentId: "sc-86vxz-13"
})(["grid-area:emission;height:100%;width:100%;"]);
const ReqContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styledContainers__ReqContainer",
  componentId: "sc-86vxz-14"
})(["grid-area:req;display:flex;margin-top:1.6rem;justify-content:space-between;align-items:center;"]);

/***/ }),

/***/ "./containers/FurnitureBank2019/styles/styledElements.js":
/*!***************************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/styledElements.js ***!
  \***************************************************************/
/*! exports provided: MainTitle, ChartPaper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTitle", function() { return MainTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPaper", function() { return ChartPaper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./containers/FurnitureBank2019/styles/variables.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);




const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledElements__MainTitle",
  componentId: "sc-1j0zlij-0"
})(["font-size:", ";font-weight:", ";color:", ";text-transform:uppercase;grid-area:", ";display:flex;align-items:center;justify-content:flex-start;grid-area:", ";", " span{font-weight:", ";font-size:", ";}"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontSizeL"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontWeightL"], _variables__WEBPACK_IMPORTED_MODULE_2__["colorGreyDark"], props => props.gridArea, props => props.gridArea, _variables__WEBPACK_IMPORTED_MODULE_2__["media"].medium`
    font-size: ${_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontSizeM"]};
    
    span {
      font-size: ${_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontSizeS"]};
    }
  `, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontWeightS"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontSizeM"]);
const ChartPaper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"]).withConfig({
  displayName: "styledElements__ChartPaper",
  componentId: "sc-1j0zlij-1"
})(["height:100%;width:100%;"]);

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
const colorGreyLight = 'lightgray';
const colorGreyDark = '#333';
const titleHeightM = '3rem';
const titleHeightS = '2rem';
const gridGapM = '2.4rem';
const gridGapS = '1.2rem';
const media = Object(_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_0__["createBreakPoints"])({
  medium: 1024,
  small: 768
});

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
/*! exports provided: increment, decrement, updateFilter, addItem, incrementItem, decrementItem, deleteItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFilter", function() { return updateFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementItem", function() { return incrementItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementItem", function() { return decrementItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/furnitureBankReducer/types.js");

const increment = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["INCREMENT"]
});
const decrement = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DECREMENT"]
});
const updateFilter = filter => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FILTER"],
  payload: {
    filter
  }
});
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

/***/ }),

/***/ "./store/furnitureBankReducer/selectors.js":
/*!*************************************************!*\
  !*** ./store/furnitureBankReducer/selectors.js ***!
  \*************************************************/
/*! exports provided: selectAllSelected, selectTotalQuantity, selectAllUnselected, selectFilteredDonationPostalCode, selectFilteredFamilies, selectFilteredCoordinates, selectFilteredDonationsCoordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSelected", function() { return selectAllSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotalQuantity", function() { return selectTotalQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllUnselected", function() { return selectAllUnselected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredDonationPostalCode", function() { return selectFilteredDonationPostalCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredFamilies", function() { return selectFilteredFamilies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredCoordinates", function() { return selectFilteredCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredDonationsCoordinates", function() { return selectFilteredDonationsCoordinates; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_1__);



const selectFurnitureList = state => state.furnitureBankReducer.productList;

const selectedAllSelected = state => state.furnitureBankReducer.selectedItems;

const selectAllDonation = state => state.furnitureBankReducer.donationsData;

const selectAllFamily = state => state.furnitureBankReducer.familyData;

const selectAllCoordinates = state => state.furnitureBankReducer.coordinatesData; //* Array of all selected items


const selectAllSelected = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectedAllSelected, selectedList => selectedList.map(el => el.name));
const selectTotalQuantity = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectedAllSelected, selectedList => selectedList.reduce((acc, curr) => acc + curr.quantity, 0));
const selectAllUnselected = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectFurnitureList, selectAllSelected, (totalList, allSelected) => totalList.filter(el => !allSelected.map(el => el.toLowerCase()).includes(el.product_name.toLowerCase()))); //* Get relevant postal code list

const selectFilteredDonationPostalCode = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAllDonation, selectAllSelected, (donations, selectedItems) => donations.filter(el => selectedItems.includes(el.product_name))); //* Get family data for postal codes

const selectFilteredFamilies = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAllFamily, selectFilteredDonationPostalCode, (families, selectedPostalCodes) => families.filter(el => selectedPostalCodes.includes(el.postal_code))); //* Get cooordinates for singe postal codes

const selectFilteredCoordinates = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAllCoordinates, selectFilteredDonationPostalCode, (coordinates, selectedPostalCodes) => selectedPostalCodes.map(el => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, el, {
  coors: coordinates.find(d => d.postal_code === el.postal_code)
}))); //* Get coordinates for all postal codes

const selectFilteredDonationsCoordinates = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])();

/***/ }),

/***/ "./store/furnitureBankReducer/types.js":
/*!*********************************************!*\
  !*** ./store/furnitureBankReducer/types.js ***!
  \*********************************************/
/*! exports provided: INCREMENT, DECREMENT, UPDATE_FILTER, ADD_ITEM, DECREMENT_ITEM, INCREMENT_ITEM, DELETE_ITEM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT", function() { return DECREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER", function() { return UPDATE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ITEM", function() { return ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_ITEM", function() { return DECREMENT_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_ITEM", function() { return INCREMENT_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ITEM", function() { return DELETE_ITEM; });
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UPDATE_FILTER = 'UPDATE_FILTER';
const ADD_ITEM = 'ADD_ITEM';
const DECREMENT_ITEM = 'DECREMENT_ITEM';
const INCREMENT_ITEM = 'INCREMENT_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

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

/***/ "./styles/sharedStyles.js":
/*!********************************!*\
  !*** ./styles/sharedStyles.js ***!
  \********************************/
/*! exports provided: fontFamilyMain, colorGrey, fontSizeXXL, fontSizeXL, fontSizeL, fontSizeM, fontSizeS, fontSizeXS, fontWeightXS, fontWeightS, fontWeightM, fontWeightL, fontWeightXL, paddingXL, paddingL, paddingM, paddingS, paddingXS, testBorder */
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

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "@material-ui/icons/Send":
/*!******************************************!*\
  !*** external "@material-ui/icons/Send" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Send");

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