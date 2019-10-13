webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./static/data/chartDataSets/FurnitureBank2019/modalText.js":
/*!******************************************************************!*\
  !*** ./static/data/chartDataSets/FurnitureBank2019/modalText.js ***!
  \******************************************************************/
/*! exports provided: modalText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalText", function() { return modalText; });
var modalText = [{
  title: "What is Furniture Bank?",
  text: ["Founded in 1998, Furniture Bank is a registered charity and social enterprise which redistributes gently-used furniture and housewares from donors in the community to families and individuals experiencing furniture poverty.", "Its clients include women and children leaving shelters, the formerly homeless, and newcomers and refugees to Canada.", "Revenues generated through its furniture removal service, which is run as a social enterprise."]
}, {
  title: "How can you help?",
  text: ["Furniture Bank's Vision is a world in which everyone has access to a furnished home.", "By supporting our mission with a financial gift or an in-kind donation of furniture, you will help change the lives of thousands of individuals and families annually who experience furniture poverty."]
}, {
  title: "‏‏‎ ‎",
  text: ["Datasources: Furniture Bank, CRC Research, EuroMed", "Designed and built by: Andras Szesztai"]
}];

/***/ }),

/***/ "./store/furnitureBankReducer/reducer.js":
/*!***********************************************!*\
  !*** ./store/furnitureBankReducer/reducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./store/furnitureBankReducer/types.js");
/* harmony import */ var _static_data_chartDataSets_FurnitureBank2019_coordinatesMaster_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/data/chartDataSets/FurnitureBank2019/coordinatesMaster.json */ "./static/data/chartDataSets/FurnitureBank2019/coordinatesMaster.json");
var _static_data_chartDataSets_FurnitureBank2019_coordinatesMaster_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/data/chartDataSets/FurnitureBank2019/coordinatesMaster.json */ "./static/data/chartDataSets/FurnitureBank2019/coordinatesMaster.json", 1);
/* harmony import */ var _static_data_chartDataSets_FurnitureBank2019_donationsData_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/data/chartDataSets/FurnitureBank2019/donationsData.json */ "./static/data/chartDataSets/FurnitureBank2019/donationsData.json");
var _static_data_chartDataSets_FurnitureBank2019_donationsData_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/data/chartDataSets/FurnitureBank2019/donationsData.json */ "./static/data/chartDataSets/FurnitureBank2019/donationsData.json", 1);
/* harmony import */ var _static_data_chartDataSets_FurnitureBank2019_familyData_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/data/chartDataSets/FurnitureBank2019/familyData.json */ "./static/data/chartDataSets/FurnitureBank2019/familyData.json");
var _static_data_chartDataSets_FurnitureBank2019_familyData_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/data/chartDataSets/FurnitureBank2019/familyData.json */ "./static/data/chartDataSets/FurnitureBank2019/familyData.json", 1);
/* harmony import */ var _static_data_chartDataSets_FurnitureBank2019_productList_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/data/chartDataSets/FurnitureBank2019/productList.json */ "./static/data/chartDataSets/FurnitureBank2019/productList.json");
var _static_data_chartDataSets_FurnitureBank2019_productList_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/data/chartDataSets/FurnitureBank2019/productList.json */ "./static/data/chartDataSets/FurnitureBank2019/productList.json", 1);
/* harmony import */ var _static_data_chartDataSets_FurnitureBank2019_modalText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../static/data/chartDataSets/FurnitureBank2019/modalText */ "./static/data/chartDataSets/FurnitureBank2019/modalText.js");
/* harmony import */ var _utils_reducerUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/reducerUtils */ "./store/utils/reducerUtils.js");




var _createReducer;








var initialState = {
  selectedItems: [],
  groups: ["Refugees", "Women and/or Children", "Formerly Homeless", "Indigenous", "Immigrants", "Mental Illness", "Immigrants & Newcomers", "Women & Children", "At Risk Youth", "LGBTQ"],
  coordinatesData: _static_data_chartDataSets_FurnitureBank2019_coordinatesMaster_json__WEBPACK_IMPORTED_MODULE_4__,
  donationsData: _static_data_chartDataSets_FurnitureBank2019_donationsData_json__WEBPACK_IMPORTED_MODULE_5__,
  familyData: _static_data_chartDataSets_FurnitureBank2019_familyData_json__WEBPACK_IMPORTED_MODULE_6__,
  productList: _static_data_chartDataSets_FurnitureBank2019_productList_json__WEBPACK_IMPORTED_MODULE_7__,
  modalText: _static_data_chartDataSets_FurnitureBank2019_modalText__WEBPACK_IMPORTED_MODULE_8__["modalText"],
  openModal: false
};

var addItem = function addItem(state, payload) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
    selectedItems: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.selectedItems), [{
      name: payload.item,
      quantity: 1
    }])
  });
};

var incrementItem = function incrementItem(state, payload) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
    selectedItems: state.selectedItems.map(function (el) {
      return el.name === payload.item ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, el, {
        quantity: el.quantity + 1
      }) : el;
    })
  });
};

var decrementItem = function decrementItem(state, payload) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
    selectedItems: state.selectedItems.map(function (el) {
      return el.name === payload.item ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, el, {
        quantity: el.quantity - 1
      }) : el;
    })
  });
};

var deleteItem = function deleteItem(state, payload) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
    selectedItems: state.selectedItems.filter(function (el) {
      return el.name !== payload.item;
    })
  });
};

var toggleModal = function toggleModal(state) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
    openModal: !state.openModal
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_reducerUtils__WEBPACK_IMPORTED_MODULE_9__["createReducer"])(initialState, (_createReducer = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _types__WEBPACK_IMPORTED_MODULE_3__["ADD_ITEM"], addItem), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _types__WEBPACK_IMPORTED_MODULE_3__["INCREMENT_ITEM"], incrementItem), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _types__WEBPACK_IMPORTED_MODULE_3__["DECREMENT_ITEM"], decrementItem), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _types__WEBPACK_IMPORTED_MODULE_3__["DELETE_ITEM"], deleteItem), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _types__WEBPACK_IMPORTED_MODULE_3__["TOGGLE_MODAL"], toggleModal), _createReducer)));

/***/ })

})
//# sourceMappingURL=_app.js.f02a2f717ebbb4fee1b1.hot-update.js.map