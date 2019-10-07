webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/components/Map/MapContent.jsx":
/*!********************************************************************!*\
  !*** ./containers/FurnitureBank2019/components/Map/MapContent.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _mapStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStyles */ "./containers/FurnitureBank2019/components/Map/mapStyles.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../config */ "./config.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .. */ "./containers/FurnitureBank2019/components/index.js");


var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/Map/MapContent.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var initialViewport = {
  latitude: 43.702702563904154,
  longitude: -79.5290090619582,
  zoom: 9.070378236162412
};

var MapContent = function MapContent() {
  var filteredCoordinates = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_7__["selectFilteredCoordinates"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      initMap = _useState[0],
      setInitMap = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialViewport),
      viewport = _useState2[0],
      setViewPort = _useState2[1];

  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var handleMapLoaded = function handleMapLoaded() {
    mapRef.current.getMap().addSource(_mapStyles__WEBPACK_IMPORTED_MODULE_5__["HEATMAP_SOURCE_ID"], {
      type: "geojson",
      data: makeGeoJSON(filteredCoordinates)
    });
    mapRef.current.getMap().addLayer(_mapStyles__WEBPACK_IMPORTED_MODULE_5__["heatMapStyles"]);
    setInitMap(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (initMap) {
      mapRef.current.getMap().getSource(_mapStyles__WEBPACK_IMPORTED_MODULE_5__["HEATMAP_SOURCE_ID"]).setData(makeGeoJSON(filteredCoordinates));
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
      lineNumber: 63
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ChartTitle"], {
    withBG: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "In Which areas will your donated furniture be received?"), __jsx(___WEBPACK_IMPORTED_MODULE_9__["Message"], {
    noData: true,
    withBG: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: mapRef,
    mapboxApiAccessToken: _config__WEBPACK_IMPORTED_MODULE_8__["config"].MAP_API
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
      lineNumber: 69
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MapContent);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.4cd47af15f43f5a15308.hot-update.js.map