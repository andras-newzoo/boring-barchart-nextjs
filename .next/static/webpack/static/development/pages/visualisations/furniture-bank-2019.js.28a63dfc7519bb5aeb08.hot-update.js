webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./store/furnitureBankReducer/selectors.js":
/*!*************************************************!*\
  !*** ./store/furnitureBankReducer/selectors.js ***!
  \*************************************************/
/*! exports provided: selectAllSelected, selectTotalQuantity, selectAllUnselected, selectAllSelectedPrice, selectFilteredDonationPostalCode, selectFilteredFamilies, selectFilteredCoordinates, selectUniqueCoordinates, selectPostalCodeFamilies, selectGroups, selectTopGroups, selectAdults, selectChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSelected", function() { return selectAllSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotalQuantity", function() { return selectTotalQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllUnselected", function() { return selectAllUnselected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSelectedPrice", function() { return selectAllSelectedPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredDonationPostalCode", function() { return selectFilteredDonationPostalCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredFamilies", function() { return selectFilteredFamilies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredCoordinates", function() { return selectFilteredCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUniqueCoordinates", function() { return selectUniqueCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPostalCodeFamilies", function() { return selectPostalCodeFamilies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectGroups", function() { return selectGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTopGroups", function() { return selectTopGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAdults", function() { return selectAdults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectChildren", function() { return selectChildren; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);







var selectGroupList = function selectGroupList(state) {
  return state.furnitureBankReducer.groups;
};

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


var selectAllSelected = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectedAllSelected, function (selectedList) {
  return selectedList.map(function (el) {
    return el.name;
  });
});
var selectTotalQuantity = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectedAllSelected, function (selectedList) {
  return selectedList.reduce(function (acc, curr) {
    return acc + curr.quantity;
  }, 0);
});
var selectAllUnselected = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectFurnitureList, selectAllSelected, function (totalList, allSelected) {
  return totalList.filter(function (el) {
    return !allSelected.map(function (el) {
      return el.toLowerCase();
    }).includes(el.product_name.toLowerCase());
  });
});
var selectAllSelectedPrice = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectFurnitureList, selectedAllSelected, function (furnitureList, selectedItems) {
  return selectedItems.map(function (el) {
    return +furnitureList.filter(function (d) {
      return d.product_name === el.name;
    })[0].value * el.quantity;
  }).reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
}); //* Get relevant postal code list

var selectFilteredDonationPostalCode = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectAllDonation, selectAllSelected, function (donations, selectedItems) {
  return donations.filter(function (el) {
    return selectedItems.includes(el.product_name);
  });
}); //* Get family data for postal codes

var selectFilteredFamilies = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectAllFamily, selectFilteredDonationPostalCode, function (families, selectedPostalCodes) {
  return families.filter(function (el) {
    return selectedPostalCodes.includes(el.postal_code);
  });
}); //* Get coordinates for filtere items

var selectFilteredCoordinates = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectAllCoordinates, selectFilteredDonationPostalCode, function (coordinates, selectedPostalCodes) {
  return selectedPostalCodes.map(function (el) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, el, {
      coors: coordinates.find(function (d) {
        return d.postal_code === el.postal_code;
      })
    });
  });
}); //* Get unique list of postal codes

var selectUniqueCoordinates = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectFilteredDonationPostalCode, function (filteredPostalCodes) {
  return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default.a(filteredPostalCodes.map(function (el) {
    return el.postal_code;
  })));
}); //* Get families from filtered postal codes

var selectPostalCodeFamilies = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectUniqueCoordinates, selectAllFamily, function (postalCodes, families) {
  return families.filter(function (el) {
    return postalCodes.includes(el.postal_code);
  });
}); //* Top Groups

var selectGroups = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectPostalCodeFamilies, function (families) {
  return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.groupBy(families, "segment");
});
var selectTopGroups = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectGroups, selectGroupList, selectPostalCodeFamilies, function (groups, groupList, total) {
  return groupList.map(function (el) {
    return groups[el] ? {
      group: el,
      share: groups[el].length / total.length
    } : {
      group: el,
      share: 0
    };
  });
}); //* Persons

var selectAdults = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectPostalCodeFamilies, function (families) {
  return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.mean(families.map(function (el) {
    return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(el.adults) || 0;
  }));
});
var selectChildren = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectPostalCodeFamilies, function (families) {
  return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.mean(families.map(function (el) {
    return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(el.children) || 0;
  }));
});

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.28a63dfc7519bb5aeb08.hot-update.js.map