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
})(["position:relative;display:flex;align-items:center;width:calc(100% - 4rem);height:", "px;padding:", ";margin:", ";padding-left:3rem;font-weight:", ";font-size:", ";border:1px solid ", ";border-radius:4px;background:", ";color:#fff;transition:0.5s all;&:hover ", ",&:hover  ", "{visibility:visible;}"], function (props) {
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
    top: -.2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "+"), __jsx(ControlElement, {
    top: 2,
    left: 1.5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "-"), __jsx(QuantityContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "2"), "Air Conditioner");
};

/* harmony default export */ __webpack_exports__["default"] = (ItemChip);

/***/ }),

/***/ "./node_modules/react-redux/lib/components/Context.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/lib/components/Context.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = exports.ReactReduxContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ReactReduxContext = _react["default"].createContext(null);

exports.ReactReduxContext = ReactReduxContext;
var _default = ReactReduxContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-redux/lib/hooks/useDispatch.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/lib/hooks/useDispatch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createDispatchHook = createDispatchHook;
exports.useDispatch = void 0;

var _Context = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/lib/components/Context.js");

var _useStore = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/lib/hooks/useStore.js");

/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */
function createDispatchHook(context) {
  if (context === void 0) {
    context = _Context.ReactReduxContext;
  }

  var useStore = context === _Context.ReactReduxContext ? _useStore.useStore : (0, _useStore.createStoreHook)(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */


var useDispatch = createDispatchHook();
exports.useDispatch = useDispatch;

/***/ }),

/***/ "./node_modules/react-redux/lib/hooks/useReduxContext.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/lib/hooks/useReduxContext.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useReduxContext = useReduxContext;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));

var _Context = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/lib/components/Context.js");

/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */
function useReduxContext() {
  var contextValue = (0, _react.useContext)(_Context.ReactReduxContext);
  (0, _invariant["default"])(contextValue, 'could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  return contextValue;
}

/***/ }),

/***/ "./node_modules/react-redux/lib/hooks/useStore.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/lib/hooks/useStore.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createStoreHook = createStoreHook;
exports.useStore = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _Context = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/lib/components/Context.js");

var _useReduxContext2 = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/lib/hooks/useReduxContext.js");

/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */
function createStoreHook(context) {
  if (context === void 0) {
    context = _Context.ReactReduxContext;
  }

  var useReduxContext = context === _Context.ReactReduxContext ? _useReduxContext2.useReduxContext : function () {
    return (0, _react.useContext)(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */


var useStore = createStoreHook();
exports.useStore = useStore;

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.87c884738fa38f4e2c54.hot-update.js.map