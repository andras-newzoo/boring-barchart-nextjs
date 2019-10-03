webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./store/furnitureBankReducer/selectors.js":
/*!*************************************************!*\
  !*** ./store/furnitureBankReducer/selectors.js ***!
  \*************************************************/
/*! exports provided: selectAllLivingRoom, selectAllKitchen, selectFilteredFurniture, selectLivingRoomAndKitchen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllLivingRoom", function() { return selectAllLivingRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllKitchen", function() { return selectAllKitchen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredFurniture", function() { return selectFilteredFurniture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLivingRoomAndKitchen", function() { return selectLivingRoomAndKitchen; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");



var selectAllFurnitures = function selectAllFurnitures(state) {
  return state.furnitureBankReducer.furnitures;
};

var selectFilter = function selectFilter(state) {
  return state.furnitureBankReducer.filter;
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
var selectFilteredFurniture = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAllFurnitures, selectFilter, function (allFurnitures) {
  return allFurnitures.filter(function (furn) {
    return furn.type === selectFilter;
  });
});
var selectLivingRoomAndKitchen = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([selectAllLivingRoom, selectAllKitchen], function (livingRoom, kitchen) {
  return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(livingRoom), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(kitchen));
});

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.e57a76e7a3e9219a25b1.hot-update.js.map