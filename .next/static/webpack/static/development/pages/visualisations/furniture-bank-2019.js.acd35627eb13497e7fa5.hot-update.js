webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./components/ConvertedNumber/index.jsx":
/*!**********************************************!*\
  !*** ./components/ConvertedNumber/index.jsx ***!
  \**********************************************/
/*! exports provided: getFormattedNumber, getSuffix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedNumber", function() { return getFormattedNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuffix", function() { return getSuffix; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/sharedStyles */ "./styles/sharedStyles.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/components/ConvertedNumber/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var getFormattedNumber = function getFormattedNumber(_ref) {
  var val = _ref.val,
      perc = _ref.perc,
      expPlus = _ref.expPlus;
  var formatKey;

  if (perc) {
    if (expPlus) {
      if (-0.1 < val && val < 0.1) {
        formatKey = "+.2%";
      } else {
        formatKey = "+.1%";
      }
    } else {
      if (-0.1 < val && val < 0.1) {
        formatKey = ".2%";
      } else {
        formatKey = ".1%";
      }
    }
  } else {
    if (expPlus) {
      if (-1 < val && val < 1) {
        formatKey = "+.2f";
      } else {
        formatKey = "+.3s";
      }
    } else {
      if (-1 < val && val < 1) {
        formatKey = ".2f";
      } else {
        formatKey = ".3s";
      }
    }
  }

  return val ? Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(formatKey)(val).replace(/([a-zA-Z%])/g, "") : "-";
};
var getSuffix = function getSuffix(_ref2) {
  var val = _ref2.val,
      custom = _ref2.custom,
      perc = _ref2.perc;

  if (val === undefined) {
    return "";
  }

  if (custom) {
    return custom;
  }

  if (perc) {
    return "%";
  }

  if (val < 1000) {
    return "";
  }

  if (1000 <= val && val < 1000000) {
    return "K";
  }

  if (1000000 <= val && val < 1000000000) {
    return "M";
  }

  if (1000000000 <= val) {
    return "B";
  }
};
var fadein = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(["from{opacity:0;}to{opacity:1;}"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({
  displayName: "ConvertedNumber__Container",
  componentId: "jdjwlc-0"
})(["display:", ";align-items:flex-end;", " font-size:", ";font-weight:", ";color:", ";line-height:", ";", ""], function (props) {
  return props.display || 'flex';
}, function (props) {
  return props.isInitalized && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["animation:", " 2s;"], fadein);
}, function (props) {
  return props.size;
}, function (props) {
  return props.weight;
}, function (props) {
  return props.color;
}, function (props) {
  return props.lineHeight;
}, function (props) {
  return (props.smallSuffix || props.smallPrefix) && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])([".suffix,.prefix{display:block;font-size:", ";margin-left:3px;line-height:", ";}"], props.suffixSize || props.prefixSize, props.suffixLineHeight || props.prefixLineHeight);
});

var ConvertedNumber = function ConvertedNumber(_ref3) {
  var data = _ref3.data,
      _ref3$duration = _ref3.duration,
      duration = _ref3$duration === void 0 ? 2 : _ref3$duration,
      perc = _ref3.perc,
      prefix = _ref3.prefix,
      _ref3$weight = _ref3.weight,
      weight = _ref3$weight === void 0 ? _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__["fontWeightS"] : _ref3$weight,
      _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__["fontSizeM"] : _ref3$size,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__["colorGrey"] : _ref3$color,
      _ref3$lineHeight = _ref3.lineHeight,
      lineHeight = _ref3$lineHeight === void 0 ? 1.2 : _ref3$lineHeight,
      suffixSize = _ref3.suffixSize,
      suffixLineHeight = _ref3.suffixLineHeight,
      customSuffix = _ref3.customSuffix,
      animate = _ref3.animate,
      smallSuffix = _ref3.smallSuffix,
      expPlus = _ref3.expPlus,
      period = _ref3.period,
      suffixSpace = _ref3.suffixSpace,
      prefixSpace = _ref3.prefixSpace,
      prefixSize = _ref3.prefixSize,
      smallPrefix = _ref3.smallPrefix,
      prefixLineHeight = _ref3.prefixLineHeight;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isInitalized = _useState[0],
      setIsInitalized = _useState[1];

  var styles = {
    weight: weight,
    size: size,
    smallSuffix: smallSuffix,
    suffixSize: suffixSize,
    color: color,
    lineHeight: lineHeight,
    smallPrefix: smallPrefix,
    suffixLineHeight: suffixLineHeight,
    prefixSize: prefixSize,
    prefixLineHeight: prefixLineHeight
  };
  if (data === undefined) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  });
  var suffix = getSuffix({
    val: data,
    custom: customSuffix,
    perc: perc
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), prefix && __jsx("span", {
    className: "prefix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, prefix, prefixSpace && " "), animate ? __jsx(react_countup__WEBPACK_IMPORTED_MODULE_3___default.a, {
    end: data,
    decimals: 3,
    preserveValue: true,
    formattingFn: function formattingFn(val) {
      return getFormattedNumber({
        val: val,
        perc: perc,
        expPlus: expPlus
      });
    },
    onEnd: function onEnd() {
      return !isInitalized && setIsInitalized(true);
    },
    duration: duration,
    decimal: ".",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }) : getFormattedNumber({
    val: data,
    perc: perc,
    expPlus: expPlus
  }), suffix && __jsx("span", {
    className: "suffix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, suffixSpace && " ", suffix), period && __jsx("span", {
    className: "period",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, " ", period)));
};

/* harmony default export */ __webpack_exports__["default"] = (ConvertedNumber);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.acd35627eb13497e7fa5.hot-update.js.map