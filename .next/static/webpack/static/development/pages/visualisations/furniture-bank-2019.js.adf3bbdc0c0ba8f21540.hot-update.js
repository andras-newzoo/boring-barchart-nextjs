webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./hooks/useSvgResize.js":
/*!*******************************!*\
  !*** ./hooks/useSvgResize.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var useSvgResize = function useSvgResize(svgRef) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: undefined,
    height: undefined
  }),
      dims = _useState[0],
      setDims = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var handleResize = function handleResize() {
      console.log(svgRef.current.offsetHeight);
      var width = svgRef.current.clientWidth;
      var height = svgRef.current.clientHeight;
      setDims({
        width: width,
        height: height
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, [svgRef]);
  return dims;
};

/* harmony default export */ __webpack_exports__["default"] = (useSvgResize);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.adf3bbdc0c0ba8f21540.hot-update.js.map