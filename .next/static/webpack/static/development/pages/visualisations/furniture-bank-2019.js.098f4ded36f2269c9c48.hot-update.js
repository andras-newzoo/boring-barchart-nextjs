webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/index.jsx":
/*!************************************************!*\
  !*** ./containers/FurnitureBank2019/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers */ "./containers/FurnitureBank2019/containers/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles */ "./styles/index.js");
/* harmony import */ var _styles_styledContainers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/styledContainers */ "./containers/FurnitureBank2019/styles/styledContainers.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    button: {
      background: _styles__WEBPACK_IMPORTED_MODULE_5__["colorRed"],
      color: "white",
      fontSize: _styles__WEBPACK_IMPORTED_MODULE_8__["fontSizeM"],
      boxShadow: "none",
      "&:hover": {
        background: _styles__WEBPACK_IMPORTED_MODULE_5__["colorRed"],
        color: "white"
      }
    }
  };
});

var Dashboard = function Dashboard() {
  var classes = useStyles();
  var items = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_11__["selectAllSelectedItems"]);
  console.log(items);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), __jsx(_containers__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_6__["MapContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_6__["FamiliesContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx(_containers__WEBPACK_IMPORTED_MODULE_6__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "What is the estimated environmental impact of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartPaper"], {
    gridArea: "landfill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "What will be the estimated amount of waste saved?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_9__["LandFillSubContainer"], {
    gridArea: "weight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    area: "num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Number"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    area: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Icons"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    area: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Equivalent to 15.5 days of avg. Canadian household waste")), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_9__["LandFillSubContainer"], {
    gridArea: "volume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    area: "num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Number"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    area: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Icons"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["FlexContainer"], {
    area: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Equivalent to 20% of an avg. cargo container")))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: classes.button,
    variant: "contained",
    disableRipple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Request a Pickup"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./store/furnitureBankReducer/selectors.js":
/*!*************************************************!*\
  !*** ./store/furnitureBankReducer/selectors.js ***!
  \*************************************************/
/*! exports provided: selectAllSelected, selectTotalQuantity, selectAllUnselected, selectAllSelectedItems, selectAllSelectedPrice, selectFilteredDonationPostalCode, selectFilteredFamilies, selectFilteredCoordinates, selectUniqueCoordinates, selectPostalCodeFamilies, selectGroups, selectTopGroups, selectAdults, selectChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSelected", function() { return selectAllSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotalQuantity", function() { return selectTotalQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllUnselected", function() { return selectAllUnselected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSelectedItems", function() { return selectAllSelectedItems; });
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
var selectAllSelectedItems = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectFurnitureList, selectedAllSelected, function (furnitureList, selectedItems) {
  return selectedItems.map(function (el) {
    return furnitureList.find(function (d) {
      return d.product_name === el.name;
    });
  });
});
var selectAllSelectedPrice = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectAllSelectedItems, selectedAllSelected, function (selectedItems, selectedQuantities) {
  return selectedItems.reduce(function (acc, curr) {
    return acc + selectedQuantities.find(function (el) {
      return curr.product_name === el.name;
    }).quantity * curr.value;
  }, 0);
} // .map(
//   el =>
//     +furnitureList.find(d => d.product_name === el.name).value *
//     el.quantity
// )
// .reduce((acc, curr) => acc + curr, 0)
); //* Get relevant postal code list

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
  }).sort(function (a, b) {
    return b.share - a.share;
  }).slice(0, 3);
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
//# sourceMappingURL=furniture-bank-2019.js.098f4ded36f2269c9c48.hot-update.js.map