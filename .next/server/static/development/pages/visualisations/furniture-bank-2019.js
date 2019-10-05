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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, parts.map((part, index) => {
    const className = part.highlight ? "highlight" : null;
    return __jsx("span", {
      className: className,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }, part.text);
  })));
};

const AutoComplete = ({
  data,
  itemKey,
  style
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
    width: 250,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx(react_autosuggest__WEBPACK_IMPORTED_MODULE_2___default.a, {
    suggestions: suggestions,
    onSuggestionsFetchRequested: onSuggestionsFetchRequested,
    onSuggestionsClearRequested: onSuggestionsClearRequested,
    getSuggestionValue: suggestion => getSuggestionValue(suggestion, itemKey),
    renderSuggestion: (suggestion, query) => renderSuggestion(suggestion, query, itemKey),
    inputProps: inputProps,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
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


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`

  .react-autosuggest__container {
    position: relative;
  }

  .react-autosuggest__input {
    width: calc(${props => props.width}px - 3.2rem);
    height: ${props => props.height || 30}px;
    padding: .8rem 1.6rem;
    font-weight: ${props => props.fontWeight || _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontWeightXS"]};
    font-size: ${_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontSizeM"]};
    border: 1px solid ${props => props.borderColor || '#aaa'};
    border-radius: 4px;

    &:focus {
      outline: none;
    }
  }

  .react-autosuggest__container--open .react-autosuggest__input {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .react-autosuggest__suggestions-container {
    display: none;
  }

  .react-autosuggest__container--open
  .react-autosuggest__suggestions-container {
    display: block;
    position: absolute;
    top: calc(30px + 1.6rem + 1px);
    width: ${props => props.width}px;
    border: 1px solid ${props => props.borderColor || '#aaa'};
    background-color: #fff;
    font-weight: ${props => props.fontWeight || _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontWeightXS"]};
    font-size: 1.6rem;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 2;
  }

  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: .8rem 1.6rem;
  }

  .highlight {
    color: ${props => props.highlight || '#333'};
    font-weight: ${_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontWeightL"]};
  }
`;

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: AutoComplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutoComplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoComplete */ "./components/AutoComplete/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return _AutoComplete__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./containers/FurnitureBank2019/index.js":
/*!***********************************************!*\
  !*** ./containers/FurnitureBank2019/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import { Container, Grid, styled as styledMaterial, Paper } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";

 // import styled from 'styled-components'
// import { increment, decrement, updateFilter } from "../../store/furnitureBankReducer/actions";
// import { selectAllLivingRoom, selectAllKitchen, selectLivingRoomAndKitchen, selectFilteredFurniture  } from "../../store/furnitureBankReducer/selectors";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import SimpleDot from "../../components/IconComponents/SimpleDot";
// import { testBorder } from "../../styles/sharedStyles";

const Dashboard = () => {
  const {
    productList
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.furnitureBankReducer);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Items to Donate"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["PanelContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["AutoComplete"], {
    data: productList,
    itemKey: "product_name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Charts"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard); // const viewport = {
//   width: "100%",
//   height: "100%",
//   latitude: 43.65107,
//   longitude: -79.347015,
//   zoom: 9
// };
// const {
//   count,
//   filter
//  } = useSelector(state => state.furnitureBankReducer)
//  const kitchen = useSelector(selectAllKitchen)
//  const livingRoomAndKitchen = useSelector(selectLivingRoomAndKitchen)
//  const filteredFurnitures = useSelector(selectFilteredFurniture)
//  const dispatch = useDispatch()
//  useEffect(() => {
//    console.log(filteredFurnitures);
//  }, [ kitchen, livingRoomAndKitchen, filteredFurnitures, filter ])
// {/* <MapContainer>
//   <ReactMapGL
//     mapboxApiAccessToken="pk.eyJ1Ijoic3plYW5kciIsImEiOiJjajlpeWxnNHUzbWNiMzNvcnF1ZGUzbG5rIn0.fk33YGLOHSZtT_CMEWoIag"
//     {...viewport}
//     mapStyle="mapbox://styles/szeandr/cje3v8qwedxub2st94yulcma7"
//   > */}
//     {/* {
//       coordinatesData.map(coor => (
//         <Marker
//           latitude={coor.latitude}
//           longitude={coor.longitude}
//         >
//           <SimpleDot widht={5} height={5} />
//         </Marker>
//       ))
//     } */}
//   {/* </ReactMapGL>
// </MapContainer> */}
// {/* <button onClick={() => dispatch(decrement())}>Decrement</button>
// <button onClick={() => dispatch(increment())}>Increment</button>
// <button onClick={() => dispatch(updateFilter('living room'))}>Living Room</button>
// <button onClick={() => dispatch(updateFilter('kitchen'))}>Kitchen</button> */}

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
/*! exports provided: MainContainer, DashboardContainer, ControlsContainer, LogoContainer, ControlContainer, PanelContainer, ChartsContainer */
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./containers/FurnitureBank2019/styles/variables.js");



const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledContainers__MainContainer",
  componentId: "sc-86vxz-0"
})(["margin:0;padding:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;"]);
const DashboardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledContainers__DashboardContainer",
  componentId: "sc-86vxz-1"
})(["width:90%;height:650px;max-width:1440px;margin:5rem 0;display:grid;grid-template-columns:300px 1fr;grid-template-areas:\"control charts\";", ""], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].medium`
    width: 80%;
    margin: 2.5rem 0;

    grid-template-columns: 1fr;
    grid-template-rows: 200px 1fr;
    grid-template-areas:  "control"
                          "charts";
  `);
const ControlsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledContainers__ControlsContainer",
  componentId: "sc-86vxz-2"
})(["display:grid;grid-area:control;grid-template-rows:150px 1fr;grid-template-columns:1fr;grid-template-areas:\"title\" \"panel\";", ""], _variables__WEBPACK_IMPORTED_MODULE_2__["media"].medium`
 
    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:  "title panel";
  `);
const LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledContainers__LogoContainer",
  componentId: "sc-86vxz-3"
})(["grid-area:title;display:flex;justify-content:center;align-items:center;img{width:80%;}"]);
const ControlContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledContainers__ControlContainer",
  componentId: "sc-86vxz-4"
})(["grid-area:panel;display:grid;grid-template-rows:50px 1fr;grid-template-areas:\"title\" \"panel\""]);
const PanelContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledContainers__PanelContainer",
  componentId: "sc-86vxz-5"
})(["display:flex;flex-direction:column;align-items:center;justify-content:flex-start;grid-area:panel;", ""], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["testBorder"]);
const ChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledContainers__ChartsContainer",
  componentId: "sc-86vxz-6"
})(["display:grid;grid-area:charts;"]);

/***/ }),

/***/ "./containers/FurnitureBank2019/styles/styledElements.js":
/*!***************************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/styledElements.js ***!
  \***************************************************************/
/*! exports provided: MainTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTitle", function() { return MainTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./containers/FurnitureBank2019/styles/variables.js");



const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledElements__MainTitle",
  componentId: "sc-1j0zlij-0"
})(["font-size:", ";font-weight:", ";color:", ";display:flex;align-items:center;justify-content:flex-start;grid-area:", ";"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontSizeL"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontWeightL"], _variables__WEBPACK_IMPORTED_MODULE_2__["colorGreyDark"], props => props.gridArea);

/***/ }),

/***/ "./containers/FurnitureBank2019/styles/variables.js":
/*!**********************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/variables.js ***!
  \**********************************************************/
/*! exports provided: colorGreen, colorRedDark, colorRed, colorGreyLight, colorGreyDark, media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorGreen", function() { return colorGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorRedDark", function() { return colorRedDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorRed", function() { return colorRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorGreyLight", function() { return colorGreyLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorGreyDark", function() { return colorGreyDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/mediaQueries */ "./styles/mediaQueries.js");

const colorGreen = '#3db692';
const colorRedDark = '#b02b2c';
const colorRed = '#ec1c24';
const colorGreyLight = 'lightgray';
const colorGreyDark = '#333';
const media = Object(_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_0__["createBreakPoints"])({
  medium: 1024
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

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
/* harmony import */ var _containers_FurnitureBank2019__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/FurnitureBank2019 */ "./containers/FurnitureBank2019/index.js");
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
/*! exports provided: colorGrey, fontSizeXXL, fontSizeXL, fontSizeL, fontSizeM, fontSizeS, fontSizeXS, fontWeightXS, fontWeightS, fontWeightM, fontWeightL, fontWeightXL, testBorder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testBorder", function() { return testBorder; });
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
const testBorder = `border: 1px solid black;`;

/***/ }),

/***/ 5:
/*!***********************************************************!*\
  !*** multi ./pages/visualisations/furniture-bank-2019.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andrasszesztai/Desktop/boring-barchart-nextjs/pages/visualisations/furniture-bank-2019.js */"./pages/visualisations/furniture-bank-2019.js");


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

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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