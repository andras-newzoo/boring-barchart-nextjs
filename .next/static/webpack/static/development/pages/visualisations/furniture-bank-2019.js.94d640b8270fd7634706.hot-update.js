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

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/components/ConvertedNumber/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var getFormattedNumber = function getFormattedNumber(_ref) {
  var val = _ref.val,
      perc = _ref.perc,
      expPlus = _ref.expPlus;
  var formatKey;

  if (perc) {
    if (expPlus) {
      if (-.1 < val && val < .1) {
        formatKey = '+.2%';
      } else {
        formatKey = '+.1%';
      }
    } else {
      if (-.1 < val && val < .1) {
        formatKey = '.2%';
      } else {
        formatKey = '.1%';
      }
    }
  } else {
    if (expPlus) {
      if (-1 < val && val < 1) {
        formatKey = '+.2f';
      } else {
        formatKey = '+.3s';
      }
    } else {
      if (-1 < val && val < 1) {
        formatKey = '.2f';
      } else {
        formatKey = '.3s';
      }
    }
  }

  return val ? Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(formatKey)(val).replace(/([a-zA-Z%])/g, "") : '-';
};
var getSuffix = function getSuffix(_ref2) {
  var val = _ref2.val,
      custom = _ref2.custom,
      perc = _ref2.perc;

  if (val === undefined) {
    return '';
  }

  if (custom) {
    return custom;
  }

  if (perc) {
    return "%";
  }

  if (val < 1000) {
    return '';
  }

  if (1000 <= val && val < 1000000) {
    return 'K';
  }

  if (1000000 <= val && val < 1000000000) {
    return 'M';
  }

  if (1000000000 <= val) {
    return 'B';
  }
};
var styles = {
  sizes: {
    xSmall: .75,
    small: .85,
    medium: 1,
    large: 1.15,
    xLarge: 1.5,
    xXLarge: 2,
    cell: .875
  },
  weights: {
    thin: 300,
    book: 400,
    medium: 500,
    bold: 700
  }
};
var fadein = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(["from{opacity:0;}to{opacity:1;}"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({
  displayName: "ConvertedNumber__Container",
  componentId: "jdjwlc-0"
})(["", " ", " font-weight:", ";", ""], function (props) {
  return props.isInitalized && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["animation:", " 2s;"], fadein);
}, function (props) {
  return styles.sizes[props.size] ? Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["font-size:", "rem;"], styles.sizes[props.size]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["font-size:", "rem;"], props.size);
}, function (props) {
  return styles.weights[props.weight] || props.weight;
}, function (props) {
  return props.smallSuffix && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])([".suffix{font-size:", ";margin-left:3px;}"], props.suffixSize ? "".concat(props.suffixSize, "rem") : "".concat(styles.sizes.medium, "rem"));
});

var ConvertedNumber = function ConvertedNumber(_ref3) {
  var data = _ref3.data,
      perc = _ref3.perc,
      prefix = _ref3.prefix,
      _ref3$weight = _ref3.weight,
      weight = _ref3$weight === void 0 ? 'book' : _ref3$weight,
      _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? 'medium' : _ref3$size,
      customSuffix = _ref3.customSuffix,
      animate = _ref3.animate,
      smallSuffix = _ref3.smallSuffix,
      expPlus = _ref3.expPlus,
      period = _ref3.period,
      suffixSize = _ref3.suffixSize,
      suffixSpace = _ref3.suffixSpace;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isInitalized = _useState[0],
      setIsInitalized = _useState[1];

  var styles = {
    weight: weight,
    size: size,
    smallSuffix: smallSuffix,
    suffixSize: suffixSize
  };
  if (data === undefined) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
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
      lineNumber: 82
    },
    __self: this
  }), prefix, animate ? __jsx(react_countup__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
    duration: 2,
    decimal: ".",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
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
      lineNumber: 101
    },
    __self: this
  }, suffixSpace && ' ', suffix), period && __jsx("span", {
    className: "period",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, ' ', period)));
};

/* harmony default export */ __webpack_exports__["default"] = (ConvertedNumber);

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var _styles_styledElements__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/styledElements */ "./containers/FurnitureBank2019/styles/styledElements.js");
/* harmony import */ var _components_PersonsIcons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/PersonsIcons */ "./containers/FurnitureBank2019/components/PersonsIcons.jsx");
/* harmony import */ var _styles_styledContainers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/styledContainers */ "./containers/FurnitureBank2019/styles/styledContainers.js");
/* harmony import */ var _components_ConvertedNumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ConvertedNumber */ "./components/ConvertedNumber/index.jsx");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    button: {
      background: _styles__WEBPACK_IMPORTED_MODULE_6__["colorGreen"],
      color: "white",
      fontSize: _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_9__["fontSizeM"],
      "&:hover": {
        background: _styles__WEBPACK_IMPORTED_MODULE_6__["colorGreen"],
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
      lineNumber: 52
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["MapContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_10__["ChartPaper"], {
    gridArea: "families",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["FamilyContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Who will be likely to receive your donation?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Message"], {
    noData: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(_components_PersonsIcons__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))), __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_10__["ChartPaper"], {
    gridArea: "value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ChartTitle"], {
    contained: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "What is the estimated value of your donation?"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_12__["DonationValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_components_ConvertedNumber__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "% of average donation"), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "What is the estimated environmental impact of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_10__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_10__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: classes.button,
    variant: "contained",
    disableRipple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Request a Pickup", __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    className: classes.rightIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./node_modules/countup.js/dist/countUp.min.js":
/*!*****************************************************!*\
  !*** ./node_modules/countup.js/dist/countUp.min.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(a,n){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(a,n,t){var e=function(a,n,t,e,i,r){function o(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(l.decimals),a+="",n=a.split("."),t=n[0],e=n.length>1?l.options.decimal+n[1]:"",l.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3===0&&(i=l.options.separator+i),i=t[o-r-1]+i;t=i}return l.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return l.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return l.options.numerals[+a]})),(s?"-":"")+l.options.prefix+t+e+l.options.suffix}function s(a,n,t,e){return t*(-Math.pow(2,-10*a/e)+1)*1024/1023+n}function u(a){return"number"==typeof a&&!isNaN(a)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var m in l.options)r.hasOwnProperty(m)&&null!==r[m]&&(l.options[m]=r[m]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var d=0,c=["webkit","moz","ms","o"],f=0;f<c.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[c[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[f]+"CancelAnimationFrame"]||window[c[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-d)),i=window.setTimeout(function(){a(t+e)},e);return d=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof a?document.getElementById(a):a,l.d?(l.startVal=Number(n),l.endVal=Number(t),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,e||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(a){var n=l.options.formattingFn(a);"INPUT"===l.d.tagName?this.d.value=n:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=n:this.d.innerHTML=n},l.count=function(a){l.startTime||(l.startTime=a),l.timestamp=a;var n=a-l.startTime;l.remaining=l.duration-n,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(n,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(n,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(n/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(n/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),n<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(a){l.initialize()&&(l.callback=a,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(a){if(l.initialize()){if(a=Number(a),!u(a))return void(l.error="[CountUp] update() - new endVal is not a number: "+a);l.error="",a!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=a,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)};return e});

/***/ }),

/***/ "./node_modules/d3-format/src/defaultLocale.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/defaultLocale.js ***!
  \*****************************************************/
/*! exports provided: format, formatPrefix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return formatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/d3-format/src/locale.js");


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});

function defaultLocale(definition) {
  locale = Object(_locale_js__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),

/***/ "./node_modules/d3-format/src/exponent.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/exponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatDecimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatDecimal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatGroup.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatGroup.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatNumerals.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/formatNumerals.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatPrefixAuto.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-format/src/formatPrefixAuto.js ***!
  \********************************************************/
/*! exports provided: prefixExponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixExponent", function() { return prefixExponent; });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");


var prefixExponent;

/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatRounded.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatRounded.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatSpecifier.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/formatSpecifier.js ***!
  \*******************************************************/
/*! exports provided: default, FormatSpecifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatSpecifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatSpecifier", function() { return FormatSpecifier; });
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),

/***/ "./node_modules/d3-format/src/formatTrim.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-format/src/formatTrim.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["default"] = (function(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatTypes.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatPrefixAuto.js */ "./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatRounded.js */ "./node_modules/d3-format/src/formatRounded.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(_formatRounded_js__WEBPACK_IMPORTED_MODULE_1__["default"])(x * 100, p); },
  "r": _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  "s": _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),

/***/ "./node_modules/d3-format/src/identity.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/identity.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-format/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-format/src/index.js ***!
  \*********************************************/
/*! exports provided: formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, FormatSpecifier, precisionFixed, precisionPrefix, precisionRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ "./node_modules/d3-format/src/defaultLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDefaultLocale", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["formatPrefix"]; });

/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.js */ "./node_modules/d3-format/src/locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatLocale", function() { return _locale_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatSpecifier.js */ "./node_modules/d3-format/src/formatSpecifier.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatSpecifier", function() { return _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatSpecifier", function() { return _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__["FormatSpecifier"]; });

/* harmony import */ var _precisionFixed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./precisionFixed.js */ "./node_modules/d3-format/src/precisionFixed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionFixed", function() { return _precisionFixed_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _precisionPrefix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./precisionPrefix.js */ "./node_modules/d3-format/src/precisionPrefix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionPrefix", function() { return _precisionPrefix_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _precisionRound_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./precisionRound.js */ "./node_modules/d3-format/src/precisionRound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return _precisionRound_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./node_modules/d3-format/src/locale.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-format/src/locale.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");
/* harmony import */ var _formatGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatGroup.js */ "./node_modules/d3-format/src/formatGroup.js");
/* harmony import */ var _formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatNumerals.js */ "./node_modules/d3-format/src/formatNumerals.js");
/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatSpecifier.js */ "./node_modules/d3-format/src/formatSpecifier.js");
/* harmony import */ var _formatTrim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatTrim.js */ "./node_modules/d3-format/src/formatTrim.js");
/* harmony import */ var _formatTypes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatTypes.js */ "./node_modules/d3-format/src/formatTypes.js");
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatPrefixAuto.js */ "./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-format/src/identity.js");









var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["default"] = (function(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_7__["default"] : Object(_formatGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_7__["default"] : Object(_formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__["default"])(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "-" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = Object(_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes_js__WEBPACK_IMPORTED_MODULE_5__["default"][type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = _formatTypes_js__WEBPACK_IMPORTED_MODULE_5__["default"][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = Object(_formatTrim_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;

        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__["prefixExponent"] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionFixed.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionFixed.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step) {
  return Math.max(0, -Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionPrefix.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionPrefix.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3 - Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionRound.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionRound.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(max) - Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(step)) + 1;
});


/***/ }),

/***/ "./node_modules/react-countup/build/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-countup/build/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);
var warning = _interopDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));
var CountUp = _interopDefault(__webpack_require__(/*! countup.js */ "./node_modules/countup.js/dist/countUp.min.js"));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var createCountUpInstance = function createCountUpInstance(el, props) {
  var decimal = props.decimal,
      decimals = props.decimals,
      duration = props.duration,
      easingFn = props.easingFn,
      end = props.end,
      formattingFn = props.formattingFn,
      prefix = props.prefix,
      separator = props.separator,
      start = props.start,
      suffix = props.suffix,
      useEasing = props.useEasing;
  return new CountUp(el, start, end, decimals, duration, {
    decimal: decimal,
    easingFn: easingFn,
    formattingFn: formattingFn,
    separator: separator,
    prefix: prefix,
    suffix: suffix,
    useEasing: useEasing,
    useGrouping: !!separator
  });
};

var CountUp$1 =
/*#__PURE__*/
function (_Component) {
  _inherits(CountUp$$1, _Component);

  function CountUp$$1() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CountUp$$1);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CountUp$$1)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "createInstance", function () {
      if (typeof _this.props.children === 'function') {
        // Warn when user didn't use containerRef at all
        warning(_this.containerRef.current && (_this.containerRef.current instanceof HTMLElement || _this.containerRef.current instanceof SVGTextElement), "Couldn't find attached element to hook the CountUp instance into! Try to attach \"containerRef\" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.");
      }

      return createCountUpInstance(_this.containerRef.current, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "pauseResume", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          reset = _assertThisInitialize.reset,
          start = _assertThisInitialize.restart,
          update = _assertThisInitialize.update;

      var onPauseResume = _this.props.onPauseResume;

      _this.instance.pauseResume();

      onPauseResume({
        reset: reset,
        start: start,
        update: update
      });
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          pauseResume = _assertThisInitialize2.pauseResume,
          start = _assertThisInitialize2.restart,
          update = _assertThisInitialize2.update;

      var onReset = _this.props.onReset;

      _this.instance.reset();

      onReset({
        pauseResume: pauseResume,
        start: start,
        update: update
      });
    });

    _defineProperty(_assertThisInitialized(_this), "restart", function () {
      _this.reset();

      _this.start();
    });

    _defineProperty(_assertThisInitialized(_this), "start", function () {
      var _assertThisInitialize3 = _assertThisInitialized(_this),
          pauseResume = _assertThisInitialize3.pauseResume,
          reset = _assertThisInitialize3.reset,
          start = _assertThisInitialize3.restart,
          update = _assertThisInitialize3.update;

      var _this$props = _this.props,
          delay = _this$props.delay,
          onEnd = _this$props.onEnd,
          onStart = _this$props.onStart;

      var run = function run() {
        return _this.instance.start(function () {
          return onEnd({
            pauseResume: pauseResume,
            reset: reset,
            start: start,
            update: update
          });
        });
      }; // Delay start if delay prop is properly set


      if (delay > 0) {
        _this.timeoutId = setTimeout(run, delay * 1000);
      } else {
        run();
      }

      onStart({
        pauseResume: pauseResume,
        reset: reset,
        update: update
      });
    });

    _defineProperty(_assertThisInitialized(_this), "update", function (newEnd) {
      var _assertThisInitialize4 = _assertThisInitialized(_this),
          pauseResume = _assertThisInitialize4.pauseResume,
          reset = _assertThisInitialize4.reset,
          start = _assertThisInitialize4.restart;

      var onUpdate = _this.props.onUpdate;

      _this.instance.update(newEnd);

      onUpdate({
        pauseResume: pauseResume,
        reset: reset,
        start: start
      });
    });

    _defineProperty(_assertThisInitialized(_this), "containerRef", React__default.createRef());

    return _this;
  }

  _createClass(CountUp$$1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          delay = _this$props2.delay;
      this.instance = this.createInstance(); // Don't invoke start if component is used as a render prop

      if (typeof children === 'function' && delay !== 0) return; // Otherwise just start immediately

      this.start();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props3 = this.props,
          end = _this$props3.end,
          start = _this$props3.start,
          suffix = _this$props3.suffix,
          prefix = _this$props3.prefix,
          redraw = _this$props3.redraw,
          duration = _this$props3.duration,
          separator = _this$props3.separator;
      var hasCertainPropsChanged = duration !== nextProps.duration || end !== nextProps.end || start !== nextProps.start || suffix !== nextProps.suffix || prefix !== nextProps.prefix || separator !== nextProps.separator;
      return hasCertainPropsChanged || redraw;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // If duration, suffix, prefix, separator or start has changed
      // there's no way to update the values.
      // So we need to re-create the CountUp instance in order to
      // restart it.
      var _this$props4 = this.props,
          end = _this$props4.end,
          start = _this$props4.start,
          suffix = _this$props4.suffix,
          prefix = _this$props4.prefix,
          duration = _this$props4.duration,
          separator = _this$props4.separator,
          preserveValue = _this$props4.preserveValue;

      if (duration !== prevProps.duration || start !== prevProps.start || suffix !== prevProps.suffix || prefix !== prevProps.suffix || separator !== prevProps.separator) {
        this.instance.reset();
        this.instance = this.createInstance();
        this.start();
      } // Only end value has changed, so reset and and re-animate with the updated
      // end value.


      if (end !== prevProps.end) {
        if (!preserveValue) {
          this.instance.reset();
        }

        this.instance.update(end);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.instance.reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          children = _this$props5.children,
          className = _this$props5.className,
          style = _this$props5.style;
      var containerRef = this.containerRef,
          pauseResume = this.pauseResume,
          reset = this.reset,
          restart = this.restart,
          update = this.update;

      if (typeof children === 'function') {
        return children({
          countUpRef: containerRef,
          pauseResume: pauseResume,
          reset: reset,
          start: restart,
          update: update
        });
      }

      return React__default.createElement("span", {
        className: className,
        ref: containerRef,
        style: style
      });
    }
  }]);

  return CountUp$$1;
}(React.Component);

_defineProperty(CountUp$1, "propTypes", {
  decimal: PropTypes.string,
  decimals: PropTypes.number,
  delay: PropTypes.number,
  easingFn: PropTypes.func,
  end: PropTypes.number.isRequired,
  formattingFn: PropTypes.func,
  onEnd: PropTypes.func,
  onStart: PropTypes.func,
  prefix: PropTypes.string,
  redraw: PropTypes.bool,
  separator: PropTypes.string,
  start: PropTypes.number,
  suffix: PropTypes.string,
  style: PropTypes.object,
  useEasing: PropTypes.bool,
  preserveValue: PropTypes.bool
});

_defineProperty(CountUp$1, "defaultProps", {
  decimal: '.',
  decimals: 0,
  delay: null,
  duration: null,
  easingFn: null,
  formattingFn: null,
  onEnd: function onEnd() {},
  onPauseResume: function onPauseResume() {},
  onReset: function onReset() {},
  onStart: function onStart() {},
  onUpdate: function onUpdate() {},
  prefix: '',
  redraw: false,
  separator: '',
  start: 0,
  suffix: '',
  style: undefined,
  useEasing: true,
  preserveValue: false
});

// since it only checks for truthy values -1 is enough to mock an element.

var NO_ELEMENT = -1;

var useCountUp = function useCountUp(props) {
  var _props = _objectSpread2({}, CountUp$1.defaultProps, {}, props);

  var start = _props.start,
      formattingFn = _props.formattingFn;

  var _useState = React.useState(typeof formattingFn === 'function' ? formattingFn(start) : start),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var countUpRef = React.useRef(null);

  var createInstance = function createInstance() {
    var countUp = createCountUpInstance(NO_ELEMENT, _props);
    var formattingFnRef = countUp.options.formattingFn;

    countUp.options.formattingFn = function () {
      var result = formattingFnRef.apply(void 0, arguments);
      setCount(result);
    };

    return countUp;
  };

  var getCountUp = function getCountUp() {
    var countUp = countUpRef.current;

    if (countUp !== null) {
      return countUp;
    }

    var newCountUp = createInstance();
    countUpRef.current = newCountUp;
    return newCountUp;
  };

  var reset = function reset() {
    var onReset = _props.onReset;
    getCountUp().reset();
    onReset({
      pauseResume: pauseResume,
      start: restart,
      update: update
    });
  };

  var restart = function restart() {
    var onStart = _props.onStart,
        onEnd = _props.onEnd;
    getCountUp().reset();
    getCountUp().start(function () {
      onEnd({
        pauseResume: pauseResume,
        reset: reset,
        start: restart,
        update: update
      });
    });
    onStart({
      pauseResume: pauseResume,
      reset: reset,
      update: update
    });
  };

  var pauseResume = function pauseResume() {
    var onPauseResume = _props.onPauseResume;
    getCountUp().pauseResume();
    onPauseResume({
      reset: reset,
      start: restart,
      update: update
    });
  };

  var update = function update(newEnd) {
    var onUpdate = _props.onUpdate;
    getCountUp().update(newEnd);
    onUpdate({
      pauseResume: pauseResume,
      reset: reset,
      start: restart
    });
  };

  React.useEffect(function () {
    var delay = _props.delay,
        onStart = _props.onStart,
        onEnd = _props.onEnd;
    var timeout = setTimeout(function () {
      onStart({
        pauseResume: pauseResume,
        reset: reset,
        update: update
      });
      getCountUp().start(function () {
        clearTimeout(timeout);
        onEnd({
          pauseResume: pauseResume,
          reset: reset,
          start: restart,
          update: update
        });
      });
    }, delay * 1000);
    return reset;
  }, []);
  return {
    countUp: count,
    start: restart,
    pauseResume: pauseResume,
    reset: reset,
    update: update
  };
};

exports.default = CountUp$1;
exports.useCountUp = useCountUp;


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.94d640b8270fd7634706.hot-update.js.map