webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

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
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");



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


var selectAllSelected = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectedAllSelected, function (selectedList) {
  return selectedList.map(function (el) {
    return el.name;
  });
});
var selectTotalQuantity = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectedAllSelected, function (selectedList) {
  return selectedList.reduce(function (acc, curr) {
    return acc + curr.quantity;
  }, 0);
});
var selectAllUnselected = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectFurnitureList, selectAllSelected, function (totalList, allSelected) {
  return totalList.filter(function (el) {
    return !allSelected.map(function (el) {
      return el.toLowerCase();
    }).includes(el.product_name.toLowerCase());
  });
}); //* Get relevant postal code list

var selectFilteredDonationPostalCode = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAllDonation, selectAllSelected, function (donations, selectedItems) {
  return donations.filter(function (el) {
    return selectedItems.includes(el.product_name);
  });
}); //* Get family data for postal codes

var selectFilteredFamilies = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAllFamily, selectFilteredDonationPostalCode, function (families, selectedPostalCodes) {
  return families.filter(function (el) {
    return selectedPostalCodes.includes(el.postal_code);
  });
}); //* Get cooordinates for singe postal codes

var selectFilteredCoordinates = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAllCoordinates, selectFilteredDonationPostalCode, function (coordinates, selectedPostalCodes) {
  return selectedPostalCodes.map(function (el) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, el, {
      latitude: coordinates.find(function (d) {
        return d.postal_code === el.postal_code;
      }).latitude,
      longitude: coordinates.find(function (d) {
        return d.postal_code === el.postal_code;
      }).longitude
    });
  });
}); //* Get coordinates for all postal codes

var selectFilteredDonationsCoordinates = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])();

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.b4ef4b6a6b46f70d755a.hot-update.js.map