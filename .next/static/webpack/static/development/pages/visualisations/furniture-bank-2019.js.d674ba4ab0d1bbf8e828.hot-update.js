webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./store/furnitureBankReducer/selectors.js":
/*!*************************************************!*\
  !*** ./store/furnitureBankReducer/selectors.js ***!
  \*************************************************/
/*! exports provided: selectAllSelected, selectTotalQuantity, selectAllUnselected, selectFilteredDonationPostalCode, selectFilteredFamilies, selectFilteredCoordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSelected", function() { return selectAllSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotalQuantity", function() { return selectTotalQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllUnselected", function() { return selectAllUnselected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredDonationPostalCode", function() { return selectFilteredDonationPostalCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredFamilies", function() { return selectFilteredFamilies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredCoordinates", function() { return selectFilteredCoordinates; });
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");




var selectFurnitureList = function selectFurnitureList(state) {
  return state.furnitureBankReducer.productList;
};

var selectedAllSelected = function selectedAllSelected(state) {
  return state.furnitureBankReducer.selectedItems;
};

var selectAllDonation = function selectAllDonation(state) {
  return state.furnitureBankReducer.donationsData;
};

var selectAllFamily = function selectAllFamily(state) {
  return state.furnitureBankReducer.familyData;
};

var selectAllCoordinates = function selectAllCoordinates(state) {
  return state.furnitureBankReducer.coordinatesData;
}; //* Array of all selected items


var selectAllSelected = Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectedAllSelected, function (selectedList) {
  return selectedList.map(function (el) {
    return el.name;
  });
});
var selectTotalQuantity = Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectedAllSelected, function (selectedList) {
  return selectedList.reduce(function (acc, curr) {
    return acc + curr.quantity;
  }, 0);
});
var selectAllUnselected = Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFurnitureList, selectAllSelected, function (totalList, allSelected) {
  return totalList.filter(function (el) {
    return !allSelected.map(function (el) {
      return el.toLowerCase();
    }).includes(el.product_name.toLowerCase());
  });
}); //* Get relevant postal code list

var selectFilteredDonationPostalCode = Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectAllDonation, selectAllSelected, function (donations, selectedItems) {
  return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a(donations.filter(function (el) {
    return selectedItems.includes(el.product_name);
  }).map(function (el) {
    return el.postal_code;
  })));
}); //* Get family data for postal codes

var selectFilteredFamilies = Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectAllFamily, selectFilteredDonationPostalCode, function (families, selectedPostalCodes) {
  return families.filter(function (el) {
    return selectedPostalCodes.includes(el.postal_code);
  });
}); //* Get cooordinates for postal codes

var selectFilteredCoordinates = Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectAllCoordinates, selectFilteredDonationPostalCode, function (coordinates, selectedPostalCodes) {
  return coordinates.filter(function (el) {
    return selectedPostalCodes.includes(el.postal_code);
  });
});

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.d674ba4ab0d1bbf8e828.hot-update.js.map