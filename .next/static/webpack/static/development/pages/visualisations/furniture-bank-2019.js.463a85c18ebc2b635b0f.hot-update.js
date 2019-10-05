webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./store/furnitureBankReducer/selectors.js":
/*!*************************************************!*\
  !*** ./store/furnitureBankReducer/selectors.js ***!
  \*************************************************/
/*! exports provided: selectAllLivingRoom, selectAllKitchen, selectFilteredFurniture, selectLivingRoomAndKitchen, selectAllSelected, selectAllUnselected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllLivingRoom", function() { return selectAllLivingRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllKitchen", function() { return selectAllKitchen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredFurniture", function() { return selectFilteredFurniture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLivingRoomAndKitchen", function() { return selectLivingRoomAndKitchen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSelected", function() { return selectAllSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllUnselected", function() { return selectAllUnselected; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");



var selectAllFurnitures = function selectAllFurnitures(state) {
  return state.furnitureBankReducer.furnitures;
};

var selectFilter = function selectFilter(state) {
  return state.furnitureBankReducer.filter;
};

var selectFurnitureList = function selectFurnitureList(state) {
  return state.furnitureBankReducer.productList;
};

var selectedAllSelected = function selectedAllSelected(state) {
  return state.furnitureBankReducer.selectedItems;
};

var selectAllLivingRoom = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAllFurnitures, function (allFurnitures) {
  return allFurnitures.filter(function (furn) {
    return furn.type === "living room";
  });
});
var selectAllKitchen = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAllFurnitures, function (allFurnitures) {
  return allFurnitures.filter(function (furn) {
    return furn.type === "kitchen";
  });
});
var selectFilteredFurniture = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAllFurnitures, selectFilter, function (allFurnitures, filter) {
  return allFurnitures.filter(function (furn) {
    return furn.type === filter;
  });
});
var selectLivingRoomAndKitchen = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([selectAllLivingRoom, selectAllKitchen], function (livingRoom, kitchen) {
  return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(livingRoom), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(kitchen));
});
var selectAllSelected = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectedAllSelected, function (selectedList) {
  return selectedList.map(function (el) {
    return el.name;
  });
});
var selectAllUnselected = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectFurnitureList, selectAllSelected, function (allSelected, totalList) {
  return totalList.filter(function (el) {
    return allSelected.includes(el.product_name);
  });
});

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.463a85c18ebc2b635b0f.hot-update.js.map