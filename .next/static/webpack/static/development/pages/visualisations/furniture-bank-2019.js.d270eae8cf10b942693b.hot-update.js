webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/styles/styledContainers.js":
/*!*****************************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/styledContainers.js ***!
  \*****************************************************************/
/*! exports provided: MainContainer, DashboardContainer, ControlsContainer, LogoContainer, ControlContainer, PanelContainer, ChartsContainer, SocChartsContainer, MapContainer, FamilyContainer, PersonsContainer, ValueContainer, DonationPercentageContainer, EnvChartsContainer, LandFillContainer, LandFillSubContainer, ContainerChart, EmissionContainer, ReqContainer, ModalContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContainer", function() { return MainContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardContainer", function() { return DashboardContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsContainer", function() { return ControlsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoContainer", function() { return LogoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelContainer", function() { return PanelContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsContainer", function() { return ChartsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocChartsContainer", function() { return SocChartsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapContainer", function() { return MapContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyContainer", function() { return FamilyContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonsContainer", function() { return PersonsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueContainer", function() { return ValueContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationPercentageContainer", function() { return DonationPercentageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvChartsContainer", function() { return EnvChartsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandFillContainer", function() { return LandFillContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandFillSubContainer", function() { return LandFillSubContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerChart", function() { return ContainerChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmissionContainer", function() { return EmissionContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqContainer", function() { return ReqContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainer", function() { return ModalContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables */ "./containers/FurnitureBank2019/styles/variables.js");


function _templateObject23() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 550px;\n    height: 750px;\n    padding: ", ";\n\n    grid-row-gap: 4rem;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 1fr);\n    grid-template-areas:\n      \"intro\"\n      \"help\"\n      \"one\"\n      \"two\"\n      \"three\"\n      \"data\";\n  "]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 650px;\n    height: 650px;\n    padding: ", ";\n\n    grid-row-gap: 3rem;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    grid-template-areas:\n      \"intro help\"\n      \"one two\"\n      \"three data\";\n  "]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    justify-content: center;\n  "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: ", "px;\n    transform: translateY(", "px);\n    background-color: ", ";\n  "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-rows: ", " repeat(2, 1fr);\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"title\"\n      \"landfill\"\n      \"emission\";\n  "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-areas:\n      \"chart chart\"\n      \"subchart percentage\";\n  "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-rows: 1fr repeat(2, 2fr);\n    grid-template-columns: 2fr 5fr;\n    grid-template-areas:\n    \". .\"\n    \"abs perc\"\n    \". perc\";  \n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-rows: ", " repeat(3, 1fr);\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"title\"\n      \"map\"\n      \"families\"\n      \"value\"\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: ", ";\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 0;\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 170px;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 160px;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 150px;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: ", ";\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 0;\n    grid-column-gap: ", ";\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    img {\n      width: 250px;\n    }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: ", ";\n    img {\n      width: 300px;\n    }\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 0;\n    align-items: center;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-rows: 70px 1fr;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-columns: 1fr;\n    grid-template-rows: 80px 1fr;\n    grid-template-areas:  \n      \"title\" \n      \"panel\";\n    grid-column-gap: 0;\n    grid-row-gap: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: 1fr;\n    grid-template-areas:  \"title panel\";\n    padding: 0;\n    grid-column-gap: ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    padding-top: 0;\n    padding-bottom: 7rem;\n    grid-template-rows: 300px 1fr;\n    height: 1400px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    height: 850px;\n    grid-template-columns: 1fr;\n    grid-template-rows: 200px 1fr;\n    grid-template-areas:  \n      \"control\"\n      \"charts\";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__MainContainer",
  componentId: "sc-86vxz-0"
})(["width:100vw;"]);
var DashboardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__DashboardContainer",
  componentId: "sc-86vxz-1"
})(["width:90%;height:650px;max-width:1440px;margin:0 auto;padding-top:4rem;padding-bottom:4rem;display:grid;grid-template-columns:300px 1fr;grid-template-areas:\"control charts\";", " ", " ", ""], ''
/* ${testBorder}; */
, _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject()), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject2()));
var ControlsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ControlsContainer",
  componentId: "sc-86vxz-2"
})(["display:grid;grid-area:control;grid-template-rows:100px 1fr;grid-template-columns:1fr;grid-template-areas:\"title\" \"panel\";", " padding:", ";", " ", " ", ""], ''
/* ${testBorder}; */
, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingM"], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject3(), _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapM"]), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject4(), _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapS"]), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].extraSmall(_templateObject5()));
var LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__LogoContainer",
  componentId: "sc-86vxz-3"
})(["grid-area:title;padding:", ";display:flex;align-items:flex-start;justify-content:center;background:#fff;img{width:100%;}", " ", " ", ""], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingS"], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject6()), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject7(), _variables__WEBPACK_IMPORTED_MODULE_3__["colorGreen"]), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].extraSmall(_templateObject8()));
var ControlContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ControlContainer",
  componentId: "sc-86vxz-4"
})(["grid-area:panel;display:grid;padding:", ";", " grid-template-rows:", " 1fr;grid-template-areas:\"title\" \"panel\";", " ", ""], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingS"], ''
/* ${testBorder}; */
, _variables__WEBPACK_IMPORTED_MODULE_3__["titleHeightM"], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject9(), _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapM"]), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject10(), _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingS"]));
var PanelContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__PanelContainer",
  componentId: "sc-86vxz-5"
})(["display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:490px;overflow-y:scroll;", " &::-webkit-scrollbar{display:none;}grid-area:panel;", " ", " ", ""], ''
/* ${testBorder}; */
, _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject11()), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject12()), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].extraSmall(_templateObject13()));
var ChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ChartsContainer",
  componentId: "sc-86vxz-6"
})(["display:grid;grid-area:charts;grid-row-gap:", ";padding:", ";grid-template-rows:3fr 2fr ", ";grid-template-areas:\"soc\" \"env\" \"req\";", " ", ""], _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapS"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingM"], _variables__WEBPACK_IMPORTED_MODULE_3__["titleHeightM"], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject14()), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject15(), _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingS"]));
var SocChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__SocChartsContainer",
  componentId: "sc-86vxz-7"
})(["display:grid;grid-area:soc;grid-row-gap:", ";grid-column-gap:", ";grid-template-rows:", " 1fr 100px;grid-template-columns:repeat(2,1fr);grid-template-areas:\"title title\" \"map families\" \"value value\";", ""], _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapS"], _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapM"], _variables__WEBPACK_IMPORTED_MODULE_3__["titleHeightM"], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject16(), _variables__WEBPACK_IMPORTED_MODULE_3__["titleHeightM"]));
var MapContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__MapContainer",
  componentId: "sc-86vxz-8"
})(["grid-area:map;height:100%;width:100%;"]);
var FamilyContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__FamilyContainer",
  componentId: "sc-86vxz-9"
})(["display:grid;grid-template-columns:repeat(2,2fr);grid-template-areas:\"chart persons\";align-items:center;justify-items:center;height:100%;width:100%;"]);
var PersonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__PersonsContainer",
  componentId: "sc-86vxz-10"
})(["grid-area:persons;display:flex;align-items:center;justify-content:center;padding-top:.5rem;div{display:flex;align-items:flex-end;justify-content:center;}img{margin-right:1rem;}.adult{height:110px;}.child{height:75px;}"]);
var ValueContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ValueContainer",
  componentId: "sc-86vxz-11"
})(["display:grid;grid-template-columns:2fr 5fr;grid-template-areas:\"abs perc\";height:100%;", ""], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject17()));
var DonationPercentageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__DonationPercentageContainer",
  componentId: "sc-86vxz-12"
})(["display:grid;grid-area:perc;grid-template-columns:3fr 2fr;grid-template-rows:repeat(3,1fr);grid-template-areas:\". .\" \"chart percentage\" \"subchart .\";justify-items:center;align-items:center;", ""], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject18()));
var EnvChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__EnvChartsContainer",
  componentId: "sc-86vxz-13"
})(["display:grid;grid-area:env;grid-row-gap:", ";grid-column-gap:", ";grid-template-rows:", " 1fr;grid-template-columns:repeat(2,1fr);grid-template-areas:\"title title\" \"landfill emission\";", ""], _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapS"], _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapM"], _variables__WEBPACK_IMPORTED_MODULE_3__["titleHeightM"], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject19(), _variables__WEBPACK_IMPORTED_MODULE_3__["titleHeightM"]));
var LandFillContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__LandFillContainer",
  componentId: "sc-86vxz-14"
})(["height:100%;width:100%;display:grid;grid-template-rows:20px repeat(2,1fr);grid-row-gap:1rem;grid-template-areas:\"title\" \"weight\" \"volume\";.garbage{&-month{height:45px;padding-right:2px;}&-week{height:20px;padding-right:1px;}}.container{height:45px;}"]);
var LandFillSubContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__LandFillSubContainer",
  componentId: "sc-86vxz-15"
})(["display:grid;grid-area:", ";grid-template-rows:1fr 30px;grid-template-columns:repeat(2,1fr);grid-template-areas:\"num icon\" \"text text\";"], function (props) {
  return props.gridArea;
});
var ContainerChart = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ContainerChart",
  componentId: "sc-86vxz-16"
})(["width:68px;height:", "px;background-color:", ";transform:translateY(", "px);transition:all 1s cubic-bezier(0.645,0.045,0.355,1);", ""], function (props) {
  return props.height < 1 ? props.height * 41 : 41;
}, _variables__WEBPACK_IMPORTED_MODULE_3__["colorGreen"], function (props) {
  return props.height < 1 ? 41 - props.height * 41 : 0;
}, _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject20(), function (props) {
  return props.height < 1 ? props.height * 40 : 40;
}, function (props) {
  return props.height < 1 ? 41 - props.height * 42 : 1;
}, _variables__WEBPACK_IMPORTED_MODULE_3__["colorGreen"]));
var EmissionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__EmissionContainer",
  componentId: "sc-86vxz-17"
})(["grid-area:emission;height:100%;width:100%;"]);
var ReqContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ReqContainer",
  componentId: "sc-86vxz-18"
})(["grid-area:req;display:flex;margin-top:1.6rem;justify-content:flex-end;align-items:center;.button{height:40px;cursor:pointer;transition:.3s all;&:hover{transform:translateY(-2px);}&:active{transform:translateY(0px);}}", ""], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject21()));
var ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ModalContainer",
  componentId: "sc-86vxz-19"
})(["width:750px;height:450px;padding:", ";position:relative;display:grid;grid-row-gap:2rem;grid-column-gap:3rem;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr);grid-template-areas:\"intro help data\" \"one two three\";", " ", " img{width:100%;}.icon{position:absolute;top:.5rem;right:1rem;font-size:", ";font-weight:", ";color:", ";cursor:pointer;}"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingXL"], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject22(), _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingL"]), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject23(), _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingM"]), _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontSizeL"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["fontWeightL"], _variables__WEBPACK_IMPORTED_MODULE_3__["colorRed"]);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.d270eae8cf10b942693b.hot-update.js.map