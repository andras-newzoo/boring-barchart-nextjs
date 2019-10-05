webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./components/ItemChip/index.jsx":
/*!***************************************!*\
  !*** ./components/ItemChip/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var _containers_FurnitureBank2019_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/FurnitureBank2019/styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var react_redux_lib_hooks_useDispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux/lib/hooks/useDispatch */ "./node_modules/react-redux/lib/hooks/useDispatch.js");
/* harmony import */ var react_redux_lib_hooks_useDispatch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux_lib_hooks_useDispatch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/furnitureBankReducer/actions */ "./store/furnitureBankReducer/actions.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/components/ItemChip/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var ControlElement = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ItemChip__ControlElement",
  componentId: "m9j6cq-0"
})(["position:absolute;top:", "rem;left:", "rem;cursor:pointer;font-weight:", ";visibility:hidden;color:#fff;"], function (props) {
  return props.top;
}, function (props) {
  return props.left || 1.4;
}, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["fontWeightL"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ItemChip__Container",
  componentId: "m9j6cq-1"
})(["position:relative;display:flex;align-items:center;width:calc(100% - 4rem);height:", "px;padding:", ";margin:", ";padding-left:3rem;font-weight:", ";font-size:", ";border:1px solid ", ";border-radius:4px;background:", ";color:#fff;transition:0.5s all;&:hover ", ",&:hover ", "{visibility:visible;}"], function (props) {
  return props.height || 30;
}, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["paddingXS"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["paddingS"], function (props) {
  return props.fontWeight || _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["fontWeightXS"];
}, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["fontSizeM"], function (props) {
  return props.borderColor || _containers_FurnitureBank2019_styles__WEBPACK_IMPORTED_MODULE_4__["colorGreyDark"];
}, _containers_FurnitureBank2019_styles__WEBPACK_IMPORTED_MODULE_4__["colorGreyDark"], ControlElement, ControlElement);
var QuantityContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ItemChip__QuantityContainer",
  componentId: "m9j6cq-2"
})(["position:absolute;width:15px;left:1rem;top:50%;transform:translateY(-50%);display:flex;justify-content:center;font-weight:", ";"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__["fontWeightXL"]);

var ItemChip = function ItemChip(_ref) {
  var style = _ref.style;
  var dispatch = Object(react_redux_lib_hooks_useDispatch__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  return __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(ControlElement, {
    top: -0.2,
    onClick: function onClick() {
      return dispatch(Object(_store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_6__["incrementItem"])("Air Conditioner"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "+"), __jsx(ControlElement, {
    top: 2,
    left: 1.5,
    onClick: function onClick() {
      return dispatch(Object(_store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_6__["decrementItem"])("Air Conditioner"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "-"), __jsx(QuantityContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "2"), "Air Conditioner");
};

/* harmony default export */ __webpack_exports__["default"] = (ItemChip);

/***/ }),

/***/ "./containers/FurnitureBank2019/index.js":
/*!***********************************************!*\
  !*** ./containers/FurnitureBank2019/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/furnitureBankReducer/actions */ "./store/furnitureBankReducer/actions.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import styled from 'styled-components'


 // import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import SimpleDot from "../../components/IconComponents/SimpleDot";

var Dashboard = function Dashboard() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      width = _useState[0],
      setWidth = _useState[1];

  var panelContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var panelWidth = panelContainerRef.current.clientWidth;
    !width && setWidth(panelWidth);
  }, [panelContainerRef, width]);

  var handleSelected = function handleSelected(selected) {
    dispatch(Object(_store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_5__["addItem"])(selected));
  };

  var allSelected = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_6__["selectAllSelected"]);
  var allUnselected = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_6__["selectAllUnselected"]);
  console.log(allSelected);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Items to Donate"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["PanelContainer"], {
    ref: panelContainerRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["ItemChip"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["AutoComplete"], {
    data: allUnselected,
    itemKey: "product_name",
    handleSelected: handleSelected,
    style: {
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
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

/***/ "./store/furnitureBankReducer/actions.js":
/*!***********************************************!*\
  !*** ./store/furnitureBankReducer/actions.js ***!
  \***********************************************/
/*! exports provided: increment, decrement, updateFilter, addItem, incrementItem, decrementItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFilter", function() { return updateFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementItem", function() { return incrementItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementItem", function() { return decrementItem; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/furnitureBankReducer/types.js");

var increment = function increment() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["INCREMENT"]
  };
};
var decrement = function decrement() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DECREMENT"]
  };
};
var updateFilter = function updateFilter(filter) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FILTER"],
    payload: {
      filter: filter
    }
  };
};
var addItem = function addItem(item) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["ADD_ITEM"],
    payload: {
      item: item
    }
  };
};
var incrementItem = function incrementItem(item) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_ITEM"],
    payload: {
      item: item
    }
  };
};
var decrementItem = function decrementItem(item) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DECREMENT_ITEM"],
    payload: {
      item: item
    }
  };
};

/***/ }),

/***/ "./store/furnitureBankReducer/types.js":
/*!*********************************************!*\
  !*** ./store/furnitureBankReducer/types.js ***!
  \*********************************************/
/*! exports provided: INCREMENT, DECREMENT, UPDATE_FILTER, ADD_ITEM, DECREMENT_ITEM, INCREMENT_ITEM, REMOVE_ITEM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT", function() { return DECREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER", function() { return UPDATE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ITEM", function() { return ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_ITEM", function() { return DECREMENT_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_ITEM", function() { return INCREMENT_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';
var UPDATE_FILTER = 'UPDATE_FILTER';
var ADD_ITEM = 'ADD_ITEM';
var DECREMENT_ITEM = 'DECREMENT_ITEM';
var INCREMENT_ITEM = 'INCREMENT_ITEM';
var REMOVE_ITEM = 'REMOVE_ITEM';

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.90d5dd6bf5d1370ba723.hot-update.js.map