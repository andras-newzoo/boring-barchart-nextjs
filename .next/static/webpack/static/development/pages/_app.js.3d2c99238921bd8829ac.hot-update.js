webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/furnitureBankReducer/reducer.js":
/*!***********************************************!*\
  !*** ./store/furnitureBankReducer/reducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./store/furnitureBankReducer/types.js");
/* harmony import */ var _static_data_chartDataSets_FurnitureBank2019_coordinatesMaster_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/data/chartDataSets/FurnitureBank2019/coordinatesMaster.json */ "./static/data/chartDataSets/FurnitureBank2019/coordinatesMaster.json");
var _static_data_chartDataSets_FurnitureBank2019_coordinatesMaster_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/data/chartDataSets/FurnitureBank2019/coordinatesMaster.json */ "./static/data/chartDataSets/FurnitureBank2019/coordinatesMaster.json", 1);
/* harmony import */ var _static_data_chartDataSets_FurnitureBank2019_donationsData_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/data/chartDataSets/FurnitureBank2019/donationsData.json */ "./static/data/chartDataSets/FurnitureBank2019/donationsData.json");
var _static_data_chartDataSets_FurnitureBank2019_donationsData_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/data/chartDataSets/FurnitureBank2019/donationsData.json */ "./static/data/chartDataSets/FurnitureBank2019/donationsData.json", 1);
/* harmony import */ var _static_data_chartDataSets_FurnitureBank2019_familyData_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/data/chartDataSets/FurnitureBank2019/familyData.json */ "./static/data/chartDataSets/FurnitureBank2019/familyData.json");
var _static_data_chartDataSets_FurnitureBank2019_familyData_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/data/chartDataSets/FurnitureBank2019/familyData.json */ "./static/data/chartDataSets/FurnitureBank2019/familyData.json", 1);
/* harmony import */ var _utils_reducerUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/reducerUtils */ "./store/utils/reducerUtils.js");



var _createReducer;






var initialState = {
  count: 0,
  filter: 'living room',
  furnitures: [{
    type: "living room",
    name: "table"
  }, {
    type: "living room",
    name: "chair"
  }, {
    type: "living room",
    name: "television"
  }, {
    type: "kitchen",
    name: "fridge"
  }, {
    type: "kitchen",
    name: "oven"
  }],
  coordinatesData: _static_data_chartDataSets_FurnitureBank2019_coordinatesMaster_json__WEBPACK_IMPORTED_MODULE_3__,
  donationsData: _static_data_chartDataSets_FurnitureBank2019_donationsData_json__WEBPACK_IMPORTED_MODULE_4__,
  familyData: _static_data_chartDataSets_FurnitureBank2019_familyData_json__WEBPACK_IMPORTED_MODULE_5__
};

var incrementCounter = function incrementCounter(state) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    count: state.count + 1
  });
};

var decrementCounter = function decrementCounter(state) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    count: state.count - 1
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_reducerUtils__WEBPACK_IMPORTED_MODULE_6__["createReducer"])(initialState, (_createReducer = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _types__WEBPACK_IMPORTED_MODULE_2__["INCREMENT"], incrementCounter), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _types__WEBPACK_IMPORTED_MODULE_2__["DECREMENT"], decrementCounter), _createReducer)));

/***/ })

})
//# sourceMappingURL=_app.js.3d2c99238921bd8829ac.hot-update.js.map