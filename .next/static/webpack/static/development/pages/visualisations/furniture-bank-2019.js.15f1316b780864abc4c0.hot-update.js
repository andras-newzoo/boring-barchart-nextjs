webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/components/Map/MapContent.jsx":
false,

/***/ "./containers/FurnitureBank2019/components/Map/mapStyles.js":
false,

/***/ "./containers/FurnitureBank2019/components/index.js":
/*!**********************************************************!*\
  !*** ./containers/FurnitureBank2019/components/index.js ***!
  \**********************************************************/
/*! exports provided: ControlContainer, Message, PercentageChart, PersonIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ControlContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlContainer */ "./containers/FurnitureBank2019/components/ControlContainer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return _ControlContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message */ "./containers/FurnitureBank2019/components/Message.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _Message__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _PercentageChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PercentageChart */ "./containers/FurnitureBank2019/components/PercentageChart.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PercentageChart", function() { return _PercentageChart__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _PersonsIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PersonsIcons */ "./containers/FurnitureBank2019/components/PersonsIcons.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonIcons", function() { return _PersonsIcons__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./containers/FurnitureBank2019/containers/MapContainer.jsx":
/*!******************************************************************!*\
  !*** ./containers/FurnitureBank2019/containers/MapContainer.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components */ "./containers/FurnitureBank2019/components/index.js");


var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/containers/MapContainer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var initialViewport = {
  latitude: 43.702702563904154,
  longitude: -79.5290090619582,
  zoom: 9.070378236162412
};

var MapContent = function MapContent() {
  var filteredCoordinates = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_6__["selectFilteredCoordinates"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      initMap = _useState[0],
      setInitMap = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialViewport),
      viewport = _useState2[0],
      setViewPort = _useState2[1];

  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var handleMapLoaded = function handleMapLoaded() {
    mapRef.current.getMap().addSource(_styles__WEBPACK_IMPORTED_MODULE_4__["HEATMAP_SOURCE_ID"], {
      type: "geojson",
      data: makeGeoJSON(filteredCoordinates)
    });
    mapRef.current.getMap().addLayer(_styles__WEBPACK_IMPORTED_MODULE_4__["heatMapStyles"]);
    setInitMap(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (initMap) {
      mapRef.current.getMap().getSource(_styles__WEBPACK_IMPORTED_MODULE_4__["HEATMAP_SOURCE_ID"]).setData(makeGeoJSON(filteredCoordinates));
    }
  }, [filteredCoordinates, initMap]);

  var makeGeoJSON = function makeGeoJSON(data) {
    if (!data) return undefined;
    return {
      type: "FeatureCollection",
      features: data.map(function (feature) {
        return {
          type: "Feature",
          properties: {
            id: feature.postal_code
          },
          geometry: {
            type: "Point",
            coordinates: feature.coors ? [feature.coors.longitude, feature.coors.latitude, 0] : [0, 0, 0]
          }
        };
      })
    };
  };

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["MapContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ChartTitle"], {
    withBG: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "In Which areas will your donated furniture be received?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Message"], {
    noData: true,
    withBG: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: mapRef,
    mapboxApiAccessToken: _config__WEBPACK_IMPORTED_MODULE_7__["config"].MAP_API
  }, viewport, {
    width: "100%",
    height: "100%",
    onViewportChange: function onViewportChange(viewport) {
      return setViewPort(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, viewport));
    },
    mapStyle: "mapbox://styles/szeandr/ck1f4skvt0xyl1ct93ti7k1s6",
    onLoad: handleMapLoaded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MapContent);

/***/ }),

/***/ "./containers/FurnitureBank2019/containers/index.js":
/*!**********************************************************!*\
  !*** ./containers/FurnitureBank2019/containers/index.js ***!
  \**********************************************************/
/*! exports provided: ValueContainer, MapContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ValueContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueContainer */ "./containers/FurnitureBank2019/containers/ValueContainer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueContainer", function() { return _ValueContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapContainer */ "./containers/FurnitureBank2019/containers/MapContainer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapContainer", function() { return _MapContainer__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

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
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    button: {
      background: _styles__WEBPACK_IMPORTED_MODULE_5__["colorGreen"],
      color: "white",
      fontSize: _styles__WEBPACK_IMPORTED_MODULE_8__["fontSizeM"],
      "&:hover": {
        background: _styles__WEBPACK_IMPORTED_MODULE_5__["colorGreen"],
        color: "white"
      }
    }
  };
});

var Dashboard = function Dashboard() {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_containers__WEBPACK_IMPORTED_MODULE_6__["MapContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartPaper"], {
    gridArea: "families",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["FamilyContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Who will be likely to receive your donation?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Message"], {
    noData: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["PersonIcons"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }))), __jsx(_containers__WEBPACK_IMPORTED_MODULE_6__["ValueContainer"], {
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
  }, "What is the estimated environmental impact of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: classes.button,
    variant: "contained",
    disableRipple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Request a Pickup", __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fontSize: "small",
    className: classes.rightIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./containers/FurnitureBank2019/styles/index.js":
/*!******************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/index.js ***!
  \******************************************************/
/*! exports provided: colorGreen, colorRedDark, colorRed, colorGreyLight, colorGreyDark, media, MainContainer, DashboardContainer, ControlsContainer, LogoContainer, ControlContainer, PanelContainer, ChartsContainer, SocChartsContainer, MapContainer, FamilyContainer, PersonsContainer, ValueContainer, EnvChartsContainer, LandFillContainer, EmissionContainer, ReqContainer, DonationPercentageContainer, MainTitle, ChartTitle, ChartPaper, HEATMAP_SOURCE_ID, heatMapStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./containers/FurnitureBank2019/styles/variables.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorGreen", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["colorGreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorRedDark", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["colorRedDark"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorRed", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["colorRed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorGreyLight", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["colorGreyLight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorGreyDark", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["colorGreyDark"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "media", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["media"]; });

/* harmony import */ var _styledContainers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledContainers */ "./containers/FurnitureBank2019/styles/styledContainers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["MainContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["DashboardContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ControlsContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["LogoContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["PanelContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ChartsContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocChartsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["SocChartsContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["MapContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FamilyContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["FamilyContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["PersonsContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ValueContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvChartsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["EnvChartsContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandFillContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["LandFillContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmissionContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["EmissionContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReqContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ReqContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonationPercentageContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["DonationPercentageContainer"]; });

/* harmony import */ var _styledElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styledElements */ "./containers/FurnitureBank2019/styles/styledElements.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainTitle", function() { return _styledElements__WEBPACK_IMPORTED_MODULE_2__["MainTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartTitle", function() { return _styledElements__WEBPACK_IMPORTED_MODULE_2__["ChartTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartPaper", function() { return _styledElements__WEBPACK_IMPORTED_MODULE_2__["ChartPaper"]; });

/* harmony import */ var _mapStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapStyles */ "./containers/FurnitureBank2019/styles/mapStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HEATMAP_SOURCE_ID", function() { return _mapStyles__WEBPACK_IMPORTED_MODULE_3__["HEATMAP_SOURCE_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heatMapStyles", function() { return _mapStyles__WEBPACK_IMPORTED_MODULE_3__["heatMapStyles"]; });










/***/ }),

/***/ "./containers/FurnitureBank2019/styles/mapStyles.js":
/*!**********************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/mapStyles.js ***!
  \**********************************************************/
/*! exports provided: HEATMAP_SOURCE_ID, heatMapStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEATMAP_SOURCE_ID", function() { return HEATMAP_SOURCE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heatMapStyles", function() { return heatMapStyles; });
var HEATMAP_SOURCE_ID = "earthquakes-source";
var MAX_ZOOM_LEVEL = 20;
var heatMapStyles = {
  id: "heatmap-layer",
  source: HEATMAP_SOURCE_ID,
  maxzoom: MAX_ZOOM_LEVEL,
  type: "heatmap",
  paint: {
    // Increase the heatmap weight based on frequency and property magnitude
    "heatmap-weight": ["interpolate", ["linear"], ["get", "mag"], 0, 0, 6, 1],
    // Increase the heatmap color weight weight by zoom level
    // heatmap-intensity is a multiplier on top of heatmap-weight
    "heatmap-intensity": ["interpolate", ["linear"], ["zoom"], 0, 1, MAX_ZOOM_LEVEL, 3],
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    "heatmap-color": ["interpolate", ["linear"], ["heatmap-density"], 0, "rgba(33,102,172,0)", 0.2, "#c4f6e3", 0.4, "#9be1c7", 0.8, "#70cbac", 1, "#3db692"],
    // Adjust the heatmap radius by zoom level
    "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, MAX_ZOOM_LEVEL, 20],
    // // Transition from heatmap to circle layer by zoom level
    "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 10, 1, 20, 0]
  }
};

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.15f1316b780864abc4c0.hot-update.js.map