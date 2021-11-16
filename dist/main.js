/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/globals.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/globals.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody, html {\n    min-height: 100vh;\n}\nbody, html, #content {\n    min-width: 100vw;\n    margin: 0;\n}\n\n#header {\n    height: 10vh;\n    background-color: #f7f0f0;\n}\n\n#header-title{\n    margin: 0;\n}\n\n#content {\n    height: 90vh;\n    display: flex;\n    flex-direction: row;\n}\n\n#sidebar, #todo-container {\n    height: 100vh;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n\n\n#sidebar {\n    background-color: #DFE0E2;\n    padding: 1vw;\n    font-size: 40px;\n    width: 25%;\n}\n\n#todo-container {\n    width: 75%;\n    \n    height: 100vh;\n    display: flex;\n    flex-direction: row;\n}\n\n\n#sidebar, #new-todo-container {\n    \n}\n\n\n#new-todo-container {\n    height: 10%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 2.5vh;\n    \n    \n}\n\n#new-todo-button{\n    height: 80%;\n    width: 90%;\n    border-radius: 6%;\n    font-size: 50%;\n}\n\n.time-button-container {\n    display: flex;\n    flex-direction: column;\n    height: 20%;\n    justify-content: space-between;\n\n}\n\n\n.time-button, .project-button {\n    background-color: inherit;\n    border: none;\n    text-align: left;\n    font-size: 49%;\n    \n}\n\n#project-heading {\n    margin-bottom: 0px;\n}\n\n#project-add-text-container {\n    display: flex;\n    align-content: flex-end;\n    padding-top: 5%;\n    padding-bottom: 5%;\n}\n#project-add-text{\n    margin: 0; \n    margin-left: 2%;\n    font-size: 49%;\n}\n\n.button-on-hover {\n    background-color: tomato;\n}\n\n.selected-todo {\n    display: none;\n}\n\n\n.current-todo-group, .selected-todo {\n    background-color: #DFE0E2;\n    width: 30%;\n    height: 70%;\n    border-radius: 30px;\n    margin: 4%;\n    \n}\n\n\n\n.current-todo-group, .selected-todo-on{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 1%;\n}\n\n.todo-item{\n    width: 90%;\n    margin: 2%;\n    height: 5%;\n    display: flex;\n    align-items: center;\n}\n\n.checkbox{\n    margin-right: 2%;\n}\n\n\n.modal {\n    display: flex;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    width: 30vw;\n    height: 60vh;\n    border-radius: 3%;\n    \n    z-index: 2000;\n\n  }\n\n  .modal-visible {\n      \n  }\n\n  .todo-modal-container {\n    width: 200%;\n  \n    /* spacing as needed */\n    \n  \n    /* let it scroll */\n    overflow: auto;\n}\n  \n  .modal-header {\n      display: flex;\n      flex-direction: row;\n      height: 10%;\n      justify-content: center;\n      \n  }\n  .modal-content {\n      height: 80%;\n      width: 100%;\n      display: flex;\n      \n      \n  }\n\n  .modal-button {\n      width: 100%;\n      height: 10%;\n      \n  }\n\n  .modal-title {\n      \n  }\n\n\n\n  .right-container {\n      padding-left: 10%;\n  }\n\n\n.left-container, .right-container  {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n}\n\n\n.modal-overlay {\n\n    /* recommendation:\n       don't focus on the number \"1000\" here, but rather,\n       you should have a documented system for z-index and \n       follow that system. This number should be pretty\n       high on the scale in that system.\n    */\n    z-index: 1000;\n  \n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  \n  }\n\n  .modal-closed {\n      display: none;\n  }", "",{"version":3,"sources":["webpack://./src/styles/globals.css"],"names":[],"mappings":";AACA;IACI,iBAAiB;AACrB;AACA;IACI,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,gDAAgD;AACpD;;;;AAIA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,UAAU;AACd;;AAEA;IACI,UAAU;;IAEV,aAAa;IACb,aAAa;IACb,mBAAmB;AACvB;;;AAGA;;AAEA;;;AAGA;IACI,WAAW;IACX,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,oBAAoB;;;AAGxB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,8BAA8B;;AAElC;;;AAGA;IACI,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;IAChB,cAAc;;AAElB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,SAAS;IACT,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,yBAAyB;IACzB,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,UAAU;;AAEd;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,UAAU;IACV,UAAU;IACV,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;;AAGA;IACI,aAAa;IACb,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,iBAAiB;;IAEjB,aAAa;;EAEf;;EAEA;;EAEA;;EAEA;IACE,WAAW;;IAEX,sBAAsB;;;IAGtB,kBAAkB;IAClB,cAAc;AAClB;;EAEE;MACI,aAAa;MACb,mBAAmB;MACnB,WAAW;MACX,uBAAuB;;EAE3B;EACA;MACI,WAAW;MACX,WAAW;MACX,aAAa;;;EAGjB;;EAEA;MACI,WAAW;MACX,WAAW;;EAEf;;EAEA;;EAEA;;;;EAIA;MACI,iBAAiB;EACrB;;;AAGF;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;;AAGA;;IAEI;;;;;KAKC;IACD,aAAa;;IAEb,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;;EAE1D;;EAEA;MACI,aAAa;EACjB","sourcesContent":["\nbody, html {\n    min-height: 100vh;\n}\nbody, html, #content {\n    min-width: 100vw;\n    margin: 0;\n}\n\n#header {\n    height: 10vh;\n    background-color: #f7f0f0;\n}\n\n#header-title{\n    margin: 0;\n}\n\n#content {\n    height: 90vh;\n    display: flex;\n    flex-direction: row;\n}\n\n#sidebar, #todo-container {\n    height: 100vh;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n\n\n#sidebar {\n    background-color: #DFE0E2;\n    padding: 1vw;\n    font-size: 40px;\n    width: 25%;\n}\n\n#todo-container {\n    width: 75%;\n    \n    height: 100vh;\n    display: flex;\n    flex-direction: row;\n}\n\n\n#sidebar, #new-todo-container {\n    \n}\n\n\n#new-todo-container {\n    height: 10%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 2.5vh;\n    \n    \n}\n\n#new-todo-button{\n    height: 80%;\n    width: 90%;\n    border-radius: 6%;\n    font-size: 50%;\n}\n\n.time-button-container {\n    display: flex;\n    flex-direction: column;\n    height: 20%;\n    justify-content: space-between;\n\n}\n\n\n.time-button, .project-button {\n    background-color: inherit;\n    border: none;\n    text-align: left;\n    font-size: 49%;\n    \n}\n\n#project-heading {\n    margin-bottom: 0px;\n}\n\n#project-add-text-container {\n    display: flex;\n    align-content: flex-end;\n    padding-top: 5%;\n    padding-bottom: 5%;\n}\n#project-add-text{\n    margin: 0; \n    margin-left: 2%;\n    font-size: 49%;\n}\n\n.button-on-hover {\n    background-color: tomato;\n}\n\n.selected-todo {\n    display: none;\n}\n\n\n.current-todo-group, .selected-todo {\n    background-color: #DFE0E2;\n    width: 30%;\n    height: 70%;\n    border-radius: 30px;\n    margin: 4%;\n    \n}\n\n\n\n.current-todo-group, .selected-todo-on{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 1%;\n}\n\n.todo-item{\n    width: 90%;\n    margin: 2%;\n    height: 5%;\n    display: flex;\n    align-items: center;\n}\n\n.checkbox{\n    margin-right: 2%;\n}\n\n\n.modal {\n    display: flex;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    width: 30vw;\n    height: 60vh;\n    border-radius: 3%;\n    \n    z-index: 2000;\n\n  }\n\n  .modal-visible {\n      \n  }\n\n  .todo-modal-container {\n    width: 200%;\n  \n    /* spacing as needed */\n    \n  \n    /* let it scroll */\n    overflow: auto;\n}\n  \n  .modal-header {\n      display: flex;\n      flex-direction: row;\n      height: 10%;\n      justify-content: center;\n      \n  }\n  .modal-content {\n      height: 80%;\n      width: 100%;\n      display: flex;\n      \n      \n  }\n\n  .modal-button {\n      width: 100%;\n      height: 10%;\n      \n  }\n\n  .modal-title {\n      \n  }\n\n\n\n  .right-container {\n      padding-left: 10%;\n  }\n\n\n.left-container, .right-container  {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n}\n\n\n.modal-overlay {\n\n    /* recommendation:\n       don't focus on the number \"1000\" here, but rather,\n       you should have a documented system for z-index and \n       follow that system. This number should be pretty\n       high on the scale in that system.\n    */\n    z-index: 1000;\n  \n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  \n  }\n\n  .modal-closed {\n      display: none;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./globals.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/globals.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions/dom.js":
/*!******************************!*\
  !*** ./src/functions/dom.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadDomElements": () => (/* binding */ loadDomElements),
/* harmony export */   "displayCurrentTodo": () => (/* binding */ displayCurrentTodo)
/* harmony export */ });



// add group to dom

function createNewDomsGroup(str) {
    console.log('I created a new group on the dom')
}



//

// sets modal event listeners
// specifically, I'm concerned with the list 
// should have a hyper link that links to modal


function setModalListlEventListener() {

}

function setModalOverlayListener() {
    let overlay = document.querySelector('.modal-overlay');
    overlay.addEventListener('click', () => {
        toggleModalVisibility(overlay)
    })
}

function setNewTodoListener() {
    let todo = document.getElementById('new-todo-button');
    todo.addEventListener('click', () => {
        toggleModalVisibility(todo)
    })
    console.log('im working')
}

function toggleModalVisibility(modal) {
    modal.classList.toggle('modal.visible')
}

// function setAddNewTodoListener() {
//     let addButton = document.getElementById('new-todo-button');
//     addButton.addEventListener('click', () => {
//        displayTodoForm();
//       })

// }



function setTodoItemListener(todoItem) {
    let secondPanel = document.querySelector('.selected-todo')
    todoItem.addEventListener('click', () => {
        secondPanel.classList.toggle('selected-todo-on')
      })

}

function setTodoItemListeners() {
    let todos = document.querySelectorAll('.todo-item');
    todos.forEach((todo) => {
        setTodoItemListener(todo)
    })
}





function setCheckboxListener(checkbox) {
    checkbox.addEventListener('click', () => {
        console.log('imma delete this thing later')
      })
      
}

function setCheckboxListeners() {
    let checkboxes = document.querySelectorAll('.checkbox')
    checkboxes.forEach((checkbox) => {
        setCheckboxListener(checkbox)
    })  
}

function setButtonHovers() {
    let buttons = document.querySelectorAll('.time-button, .project-button')
    buttons.forEach((button) => {
        setHover(button)
    })  
}

function setDivHovers() {
    let divs = document.querySelectorAll('.todo-item')
    divs.forEach((div) => {
        setHover(div)
    })
}

// sets hover toggle for an individual button
function setHover(button) {
    button.addEventListener('mouseenter', () => {
        button.classList.toggle('button-on-hover')
      })
    button.addEventListener('mouseleave', () => {
    button.classList.toggle('button-on-hover')})
}

function setHovers() {
    setDivHovers();
    setButtonHovers();
}


function setAddProjectListener() {
    let div = document.getElementById('project-add-text-container')
    div.addEventListener('click', () => {
        displayProjectForm();
      })
}

function displayProjectForm() {
    console.log('I will ask people questions about their project')
}

// function displayTodoForm() {
//     console.log('I will ask people questions about their todo item')
// }
// // 



// when you click a todo item, toggles the second panel

function toggleCurrentTodo() {
    let currentTodo = document.querySelector(".selected-todo");
    currentTodo.classList.toggle('selected-todo-on')
}


function setCurrentTodoContent(todo)  {
    console.log('i will soon insert the corect information');
}
function displayCurrentTodo(todo) {
    setCurrentTodoContent(todo)
    toggleCurrentTodo();
    console.log('i will soon display the correct information')
    
}








// so I think it makes sense to associate todo deletebuttons
// w/ their parent element on the dom
// so you add eventlistener on click to trigger corresponding todo
// deletion
function setDeleteButtons() {

}



// takes input from findTodo
// locates dom element and deletes it
function domDeleteTodo(dom_element) {
    
}



// takes an exported todo from addtodo and creates
// a dom element that corresponds to it
// crucially, does not actually place that todo into the dom
// createDomTodo's output is the input for appendChildTodo
function createDomTodo(todo) {

}



// takes an inputted todo element
// based on it's group property places in correct group
// based on date, places into correct date location
// (remember, main is the default place where todos are placed)


function appendChildTodo(todo) {
    
    // calling both the group finder and date finder



    // query selector for date element

    // query selector for group element

    // append to do to parent element

}


// todo ------> correct dom element
// takes in a todo element and identifies which date category it
// fits into
// returns the string name of the dom elements


function translateTodoDate(todo) {

}

// todo ------> correct dom element
// takes in a todo element and identifies which date category it
// fits into
// returns the string name of the dom elements

function translateTodoGroup(todo) {
    
}




// takes in the big array of todos and appends them 
// to their correct parent element
// (I wonder if we couold sort the array first as it's being made)
// seems pretty complicated




// loop through array 
// on each todo call translate date & group
// 



// currrent plan is to call this when the web page is loaded
// (the first time?)

function displayTodos(arr) {
    for (let i = 0; i < arr.length; i++) {
        currentTodo = arr[i];
        appendChildTodo(currentTodo)
    }
}


// based on the val (1-5), sets the coloring of the todo element
// priority
function setPriorityStyling(todo) {

}


// first off, how do I store todos by group
// not sure that it makes terribly much sense to loop through
// the entire array, and then sort it by group each time



function sortTodobyGroup(todo_array) {}



function setTodoContainer(todo_array) {}



// delete group from dom





// toggle selectedtodo


// initial load

function loadDomElements() {
    setHovers()
    setCheckboxListeners()
    setTodoItemListeners()
    setAddProjectListener();
    setNewTodoListener();
    setModalOverlayListener();
}



function stringIsTooLong(str) {
    return (str.length < 31)
}




/***/ }),

/***/ "./src/functions/logic.js":
/*!********************************!*\
  !*** ./src/functions/logic.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "modifyPriority": () => (/* binding */ modifyPriority),
/* harmony export */   "addTodo": () => (/* binding */ addTodo)
/* harmony export */ });





// string ---> int
// takes an inputted name of a todo and locates
// the string that corresponds to it in todoArray
// 
function findTodo(str, arr) {
    const isIndex = (element) => element.name = str
    arr.findIndex(isIndex);
}


function createTodo(title , dueDate, description, priority, group) {
    return {
        title: title,
        dueDate: dueDate,
        description: description,
        priority: priority,
        group: group,
    }
}


// int -----> modifies array
// takes inputted integer position produced from findTodo
// and deletes todo at that position from array


function deleteTodo(arrayPos, arr) {
    arr.splice(arrayPos, 1);
}



function addTodo(todo, arr){
    arr.append(todo);
}


// int, int -----> todo
// ugh don't really like how this interacts with find index
// you have to input a todo by searching the array for it
// with findIndex
// and then set the todo at that index to something different
function modifyPriority(index, num) {
    todo = todoArray[index] ;
    todo.priority = num
    todoArray[index] = todo;

}






// delete group 
// nee

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _functions_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/logic */ "./src/functions/logic.js");
/* harmony import */ var _functions_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/dom */ "./src/functions/dom.js");





// to import a function from date-fns  use 
// import 'your_function_name' from 'date-fns/fp" (or whatever path it is stored in)

const todoArray = [];

// separate array of projects
const projectArray = [];





// This is run when the webpage is initialized
function loadContent() {
    (0,_functions_dom__WEBPACK_IMPORTED_MODULE_2__.loadDomElements)()

}


loadContent();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsK0NBQStDO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7Ozs7QUFJQTs7OztBQUlBOzs7Ozs7QUFNQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFNEM7Ozs7O0FBSzVDO0FBQ0E7Ozs7OztVQzVEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkI7O0FBRWtCO0FBQ0E7O0FBRS9DO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBLElBQUksK0RBQWU7O0FBRW5COzs7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzP2RhMzAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvZnVuY3Rpb25zL2RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvZnVuY3Rpb25zL2xvZ2ljLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5ib2R5LCBodG1sIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbmJvZHksIGh0bWwsICNjb250ZW50IHtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmMGYwO1xcbn1cXG5cXG4jaGVhZGVyLXRpdGxle1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jc2lkZWJhciwgI3RvZG8tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5cXG4jc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkUwRTI7XFxuICAgIHBhZGRpbmc6IDF2dztcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB3aWR0aDogMjUlO1xcbn1cXG5cXG4jdG9kby1jb250YWluZXIge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuXFxuI3NpZGViYXIsICNuZXctdG9kby1jb250YWluZXIge1xcbiAgICBcXG59XFxuXFxuXFxuI25ldy10b2RvLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIuNXZoO1xcbiAgICBcXG4gICAgXFxufVxcblxcbiNuZXctdG9kby1idXR0b257XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2JTtcXG4gICAgZm9udC1zaXplOiA1MCU7XFxufVxcblxcbi50aW1lLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbn1cXG5cXG5cXG4udGltZS1idXR0b24sIC5wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiA0OSU7XFxuICAgIFxcbn1cXG5cXG4jcHJvamVjdC1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4jcHJvamVjdC1hZGQtdGV4dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XFxufVxcbiNwcm9qZWN0LWFkZC10ZXh0e1xcbiAgICBtYXJnaW46IDA7IFxcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxuICAgIGZvbnQtc2l6ZTogNDklO1xcbn1cXG5cXG4uYnV0dG9uLW9uLWhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xcbn1cXG5cXG4uc2VsZWN0ZWQtdG9kbyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbi5jdXJyZW50LXRvZG8tZ3JvdXAsIC5zZWxlY3RlZC10b2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTBFMjtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIG1hcmdpbjogNCU7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG4uY3VycmVudC10b2RvLWdyb3VwLCAuc2VsZWN0ZWQtdG9kby1vbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDElO1xcbn1cXG5cXG4udG9kby1pdGVte1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDIlO1xcbiAgICBoZWlnaHQ6IDUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3h7XFxuICAgIG1hcmdpbi1yaWdodDogMiU7XFxufVxcblxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgaGVpZ2h0OiA2MHZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAzJTtcXG4gICAgXFxuICAgIHotaW5kZXg6IDIwMDA7XFxuXFxuICB9XFxuXFxuICAubW9kYWwtdmlzaWJsZSB7XFxuICAgICAgXFxuICB9XFxuXFxuICAudG9kby1tb2RhbC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMjAwJTtcXG4gIFxcbiAgICAvKiBzcGFjaW5nIGFzIG5lZWRlZCAqL1xcbiAgICBcXG4gIFxcbiAgICAvKiBsZXQgaXQgc2Nyb2xsICovXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4gIFxcbiAgLm1vZGFsLWhlYWRlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGhlaWdodDogMTAlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIFxcbiAgfVxcbiAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICAgIGhlaWdodDogODAlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgXFxuICAgICAgXFxuICB9XFxuXFxuICAubW9kYWwtYnV0dG9uIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwJTtcXG4gICAgICBcXG4gIH1cXG5cXG4gIC5tb2RhbC10aXRsZSB7XFxuICAgICAgXFxuICB9XFxuXFxuXFxuXFxuICAucmlnaHQtY29udGFpbmVyIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gIH1cXG5cXG5cXG4ubGVmdC1jb250YWluZXIsIC5yaWdodC1jb250YWluZXIgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuXFxuLm1vZGFsLW92ZXJsYXkge1xcblxcbiAgICAvKiByZWNvbW1lbmRhdGlvbjpcXG4gICAgICAgZG9uJ3QgZm9jdXMgb24gdGhlIG51bWJlciBcXFwiMTAwMFxcXCIgaGVyZSwgYnV0IHJhdGhlcixcXG4gICAgICAgeW91IHNob3VsZCBoYXZlIGEgZG9jdW1lbnRlZCBzeXN0ZW0gZm9yIHotaW5kZXggYW5kIFxcbiAgICAgICBmb2xsb3cgdGhhdCBzeXN0ZW0uIFRoaXMgbnVtYmVyIHNob3VsZCBiZSBwcmV0dHlcXG4gICAgICAgaGlnaCBvbiB0aGUgc2NhbGUgaW4gdGhhdCBzeXN0ZW0uXFxuICAgICovXFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAgXFxuICB9XFxuXFxuICAubW9kYWwtY2xvc2VkIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdEQUFnRDtBQUNwRDs7OztBQUlBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTs7SUFFVixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7O0FBR0E7O0FBRUE7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7OztBQUd4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCw4QkFBOEI7O0FBRWxDOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixVQUFVOztBQUVkOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsYUFBYTs7RUFFZjs7RUFFQTs7RUFFQTs7RUFFQTtJQUNFLFdBQVc7O0lBRVgsc0JBQXNCOzs7SUFHdEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0VBRUU7TUFDSSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCx1QkFBdUI7O0VBRTNCO0VBQ0E7TUFDSSxXQUFXO01BQ1gsV0FBVztNQUNYLGFBQWE7OztFQUdqQjs7RUFFQTtNQUNJLFdBQVc7TUFDWCxXQUFXOztFQUVmOztFQUVBOztFQUVBOzs7O0VBSUE7TUFDSSxpQkFBaUI7RUFDckI7OztBQUdGO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7OztBQUdBOztJQUVJOzs7OztLQUtDO0lBQ0QsYUFBYTs7SUFFYixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7O0VBRTFEOztFQUVBO01BQ0ksYUFBYTtFQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5LCBodG1sIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbmJvZHksIGh0bWwsICNjb250ZW50IHtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmMGYwO1xcbn1cXG5cXG4jaGVhZGVyLXRpdGxle1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jc2lkZWJhciwgI3RvZG8tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5cXG4jc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkUwRTI7XFxuICAgIHBhZGRpbmc6IDF2dztcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB3aWR0aDogMjUlO1xcbn1cXG5cXG4jdG9kby1jb250YWluZXIge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuXFxuI3NpZGViYXIsICNuZXctdG9kby1jb250YWluZXIge1xcbiAgICBcXG59XFxuXFxuXFxuI25ldy10b2RvLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIuNXZoO1xcbiAgICBcXG4gICAgXFxufVxcblxcbiNuZXctdG9kby1idXR0b257XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2JTtcXG4gICAgZm9udC1zaXplOiA1MCU7XFxufVxcblxcbi50aW1lLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbn1cXG5cXG5cXG4udGltZS1idXR0b24sIC5wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiA0OSU7XFxuICAgIFxcbn1cXG5cXG4jcHJvamVjdC1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4jcHJvamVjdC1hZGQtdGV4dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XFxufVxcbiNwcm9qZWN0LWFkZC10ZXh0e1xcbiAgICBtYXJnaW46IDA7IFxcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxuICAgIGZvbnQtc2l6ZTogNDklO1xcbn1cXG5cXG4uYnV0dG9uLW9uLWhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xcbn1cXG5cXG4uc2VsZWN0ZWQtdG9kbyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbi5jdXJyZW50LXRvZG8tZ3JvdXAsIC5zZWxlY3RlZC10b2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTBFMjtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIG1hcmdpbjogNCU7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG4uY3VycmVudC10b2RvLWdyb3VwLCAuc2VsZWN0ZWQtdG9kby1vbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDElO1xcbn1cXG5cXG4udG9kby1pdGVte1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDIlO1xcbiAgICBoZWlnaHQ6IDUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3h7XFxuICAgIG1hcmdpbi1yaWdodDogMiU7XFxufVxcblxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgaGVpZ2h0OiA2MHZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAzJTtcXG4gICAgXFxuICAgIHotaW5kZXg6IDIwMDA7XFxuXFxuICB9XFxuXFxuICAubW9kYWwtdmlzaWJsZSB7XFxuICAgICAgXFxuICB9XFxuXFxuICAudG9kby1tb2RhbC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMjAwJTtcXG4gIFxcbiAgICAvKiBzcGFjaW5nIGFzIG5lZWRlZCAqL1xcbiAgICBcXG4gIFxcbiAgICAvKiBsZXQgaXQgc2Nyb2xsICovXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4gIFxcbiAgLm1vZGFsLWhlYWRlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGhlaWdodDogMTAlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIFxcbiAgfVxcbiAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICAgIGhlaWdodDogODAlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgXFxuICAgICAgXFxuICB9XFxuXFxuICAubW9kYWwtYnV0dG9uIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwJTtcXG4gICAgICBcXG4gIH1cXG5cXG4gIC5tb2RhbC10aXRsZSB7XFxuICAgICAgXFxuICB9XFxuXFxuXFxuXFxuICAucmlnaHQtY29udGFpbmVyIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gIH1cXG5cXG5cXG4ubGVmdC1jb250YWluZXIsIC5yaWdodC1jb250YWluZXIgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuXFxuLm1vZGFsLW92ZXJsYXkge1xcblxcbiAgICAvKiByZWNvbW1lbmRhdGlvbjpcXG4gICAgICAgZG9uJ3QgZm9jdXMgb24gdGhlIG51bWJlciBcXFwiMTAwMFxcXCIgaGVyZSwgYnV0IHJhdGhlcixcXG4gICAgICAgeW91IHNob3VsZCBoYXZlIGEgZG9jdW1lbnRlZCBzeXN0ZW0gZm9yIHotaW5kZXggYW5kIFxcbiAgICAgICBmb2xsb3cgdGhhdCBzeXN0ZW0uIFRoaXMgbnVtYmVyIHNob3VsZCBiZSBwcmV0dHlcXG4gICAgICAgaGlnaCBvbiB0aGUgc2NhbGUgaW4gdGhhdCBzeXN0ZW0uXFxuICAgICovXFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAgXFxuICB9XFxuXFxuICAubW9kYWwtY2xvc2VkIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFscy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuXG5cbi8vIGFkZCBncm91cCB0byBkb21cblxuZnVuY3Rpb24gY3JlYXRlTmV3RG9tc0dyb3VwKHN0cikge1xuICAgIGNvbnNvbGUubG9nKCdJIGNyZWF0ZWQgYSBuZXcgZ3JvdXAgb24gdGhlIGRvbScpXG59XG5cblxuXG4vL1xuXG4vLyBzZXRzIG1vZGFsIGV2ZW50IGxpc3RlbmVyc1xuLy8gc3BlY2lmaWNhbGx5LCBJJ20gY29uY2VybmVkIHdpdGggdGhlIGxpc3QgXG4vLyBzaG91bGQgaGF2ZSBhIGh5cGVyIGxpbmsgdGhhdCBsaW5rcyB0byBtb2RhbFxuXG5cbmZ1bmN0aW9uIHNldE1vZGFsTGlzdGxFdmVudExpc3RlbmVyKCkge1xuXG59XG5cbmZ1bmN0aW9uIHNldE1vZGFsT3ZlcmxheUxpc3RlbmVyKCkge1xuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKTtcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2dnbGVNb2RhbFZpc2liaWxpdHkob3ZlcmxheSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzZXROZXdUb2RvTGlzdGVuZXIoKSB7XG4gICAgbGV0IHRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRvZG8tYnV0dG9uJyk7XG4gICAgdG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlTW9kYWxWaXNpYmlsaXR5KHRvZG8pXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygnaW0gd29ya2luZycpXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1vZGFsVmlzaWJpbGl0eShtb2RhbCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ21vZGFsLnZpc2libGUnKVxufVxuXG4vLyBmdW5jdGlvbiBzZXRBZGROZXdUb2RvTGlzdGVuZXIoKSB7XG4vLyAgICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdG9kby1idXR0b24nKTtcbi8vICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgICAgZGlzcGxheVRvZG9Gb3JtKCk7XG4vLyAgICAgICB9KVxuXG4vLyB9XG5cblxuXG5mdW5jdGlvbiBzZXRUb2RvSXRlbUxpc3RlbmVyKHRvZG9JdGVtKSB7XG4gICAgbGV0IHNlY29uZFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkLXRvZG8nKVxuICAgIHRvZG9JdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzZWNvbmRQYW5lbC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZC10b2RvLW9uJylcbiAgICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gc2V0VG9kb0l0ZW1MaXN0ZW5lcnMoKSB7XG4gICAgbGV0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8taXRlbScpO1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgc2V0VG9kb0l0ZW1MaXN0ZW5lcih0b2RvKVxuICAgIH0pXG59XG5cblxuXG5cblxuZnVuY3Rpb24gc2V0Q2hlY2tib3hMaXN0ZW5lcihjaGVja2JveCkge1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaW1tYSBkZWxldGUgdGhpcyB0aGluZyBsYXRlcicpXG4gICAgICB9KVxuICAgICAgXG59XG5cbmZ1bmN0aW9uIHNldENoZWNrYm94TGlzdGVuZXJzKCkge1xuICAgIGxldCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94JylcbiAgICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICAgIHNldENoZWNrYm94TGlzdGVuZXIoY2hlY2tib3gpXG4gICAgfSkgIFxufVxuXG5mdW5jdGlvbiBzZXRCdXR0b25Ib3ZlcnMoKSB7XG4gICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGltZS1idXR0b24sIC5wcm9qZWN0LWJ1dHRvbicpXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgc2V0SG92ZXIoYnV0dG9uKVxuICAgIH0pICBcbn1cblxuZnVuY3Rpb24gc2V0RGl2SG92ZXJzKCkge1xuICAgIGxldCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8taXRlbScpXG4gICAgZGl2cy5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgICAgc2V0SG92ZXIoZGl2KVxuICAgIH0pXG59XG5cbi8vIHNldHMgaG92ZXIgdG9nZ2xlIGZvciBhbiBpbmRpdmlkdWFsIGJ1dHRvblxuZnVuY3Rpb24gc2V0SG92ZXIoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdidXR0b24tb24taG92ZXInKVxuICAgICAgfSlcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYnV0dG9uLW9uLWhvdmVyJyl9KVxufVxuXG5mdW5jdGlvbiBzZXRIb3ZlcnMoKSB7XG4gICAgc2V0RGl2SG92ZXJzKCk7XG4gICAgc2V0QnV0dG9uSG92ZXJzKCk7XG59XG5cblxuZnVuY3Rpb24gc2V0QWRkUHJvamVjdExpc3RlbmVyKCkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1hZGQtdGV4dC1jb250YWluZXInKVxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGlzcGxheVByb2plY3RGb3JtKCk7XG4gICAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdEZvcm0oKSB7XG4gICAgY29uc29sZS5sb2coJ0kgd2lsbCBhc2sgcGVvcGxlIHF1ZXN0aW9ucyBhYm91dCB0aGVpciBwcm9qZWN0Jylcbn1cblxuLy8gZnVuY3Rpb24gZGlzcGxheVRvZG9Gb3JtKCkge1xuLy8gICAgIGNvbnNvbGUubG9nKCdJIHdpbGwgYXNrIHBlb3BsZSBxdWVzdGlvbnMgYWJvdXQgdGhlaXIgdG9kbyBpdGVtJylcbi8vIH1cbi8vIC8vIFxuXG5cblxuLy8gd2hlbiB5b3UgY2xpY2sgYSB0b2RvIGl0ZW0sIHRvZ2dsZXMgdGhlIHNlY29uZCBwYW5lbFxuXG5mdW5jdGlvbiB0b2dnbGVDdXJyZW50VG9kbygpIHtcbiAgICBsZXQgY3VycmVudFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkLXRvZG9cIik7XG4gICAgY3VycmVudFRvZG8uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQtdG9kby1vbicpXG59XG5cblxuZnVuY3Rpb24gc2V0Q3VycmVudFRvZG9Db250ZW50KHRvZG8pICB7XG4gICAgY29uc29sZS5sb2coJ2kgd2lsbCBzb29uIGluc2VydCB0aGUgY29yZWN0IGluZm9ybWF0aW9uJyk7XG59XG5mdW5jdGlvbiBkaXNwbGF5Q3VycmVudFRvZG8odG9kbykge1xuICAgIHNldEN1cnJlbnRUb2RvQ29udGVudCh0b2RvKVxuICAgIHRvZ2dsZUN1cnJlbnRUb2RvKCk7XG4gICAgY29uc29sZS5sb2coJ2kgd2lsbCBzb29uIGRpc3BsYXkgdGhlIGNvcnJlY3QgaW5mb3JtYXRpb24nKVxuICAgIFxufVxuXG5cblxuXG5cblxuXG5cbi8vIHNvIEkgdGhpbmsgaXQgbWFrZXMgc2Vuc2UgdG8gYXNzb2NpYXRlIHRvZG8gZGVsZXRlYnV0dG9uc1xuLy8gdy8gdGhlaXIgcGFyZW50IGVsZW1lbnQgb24gdGhlIGRvbVxuLy8gc28geW91IGFkZCBldmVudGxpc3RlbmVyIG9uIGNsaWNrIHRvIHRyaWdnZXIgY29ycmVzcG9uZGluZyB0b2RvXG4vLyBkZWxldGlvblxuZnVuY3Rpb24gc2V0RGVsZXRlQnV0dG9ucygpIHtcblxufVxuXG5cblxuLy8gdGFrZXMgaW5wdXQgZnJvbSBmaW5kVG9kb1xuLy8gbG9jYXRlcyBkb20gZWxlbWVudCBhbmQgZGVsZXRlcyBpdFxuZnVuY3Rpb24gZG9tRGVsZXRlVG9kbyhkb21fZWxlbWVudCkge1xuICAgIFxufVxuXG5cblxuLy8gdGFrZXMgYW4gZXhwb3J0ZWQgdG9kbyBmcm9tIGFkZHRvZG8gYW5kIGNyZWF0ZXNcbi8vIGEgZG9tIGVsZW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBpdFxuLy8gY3J1Y2lhbGx5LCBkb2VzIG5vdCBhY3R1YWxseSBwbGFjZSB0aGF0IHRvZG8gaW50byB0aGUgZG9tXG4vLyBjcmVhdGVEb21Ub2RvJ3Mgb3V0cHV0IGlzIHRoZSBpbnB1dCBmb3IgYXBwZW5kQ2hpbGRUb2RvXG5mdW5jdGlvbiBjcmVhdGVEb21Ub2RvKHRvZG8pIHtcblxufVxuXG5cblxuLy8gdGFrZXMgYW4gaW5wdXR0ZWQgdG9kbyBlbGVtZW50XG4vLyBiYXNlZCBvbiBpdCdzIGdyb3VwIHByb3BlcnR5IHBsYWNlcyBpbiBjb3JyZWN0IGdyb3VwXG4vLyBiYXNlZCBvbiBkYXRlLCBwbGFjZXMgaW50byBjb3JyZWN0IGRhdGUgbG9jYXRpb25cbi8vIChyZW1lbWJlciwgbWFpbiBpcyB0aGUgZGVmYXVsdCBwbGFjZSB3aGVyZSB0b2RvcyBhcmUgcGxhY2VkKVxuXG5cbmZ1bmN0aW9uIGFwcGVuZENoaWxkVG9kbyh0b2RvKSB7XG4gICAgXG4gICAgLy8gY2FsbGluZyBib3RoIHRoZSBncm91cCBmaW5kZXIgYW5kIGRhdGUgZmluZGVyXG5cblxuXG4gICAgLy8gcXVlcnkgc2VsZWN0b3IgZm9yIGRhdGUgZWxlbWVudFxuXG4gICAgLy8gcXVlcnkgc2VsZWN0b3IgZm9yIGdyb3VwIGVsZW1lbnRcblxuICAgIC8vIGFwcGVuZCB0byBkbyB0byBwYXJlbnQgZWxlbWVudFxuXG59XG5cblxuLy8gdG9kbyAtLS0tLS0+IGNvcnJlY3QgZG9tIGVsZW1lbnRcbi8vIHRha2VzIGluIGEgdG9kbyBlbGVtZW50IGFuZCBpZGVudGlmaWVzIHdoaWNoIGRhdGUgY2F0ZWdvcnkgaXRcbi8vIGZpdHMgaW50b1xuLy8gcmV0dXJucyB0aGUgc3RyaW5nIG5hbWUgb2YgdGhlIGRvbSBlbGVtZW50c1xuXG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVRvZG9EYXRlKHRvZG8pIHtcblxufVxuXG4vLyB0b2RvIC0tLS0tLT4gY29ycmVjdCBkb20gZWxlbWVudFxuLy8gdGFrZXMgaW4gYSB0b2RvIGVsZW1lbnQgYW5kIGlkZW50aWZpZXMgd2hpY2ggZGF0ZSBjYXRlZ29yeSBpdFxuLy8gZml0cyBpbnRvXG4vLyByZXR1cm5zIHRoZSBzdHJpbmcgbmFtZSBvZiB0aGUgZG9tIGVsZW1lbnRzXG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVRvZG9Hcm91cCh0b2RvKSB7XG4gICAgXG59XG5cblxuXG5cbi8vIHRha2VzIGluIHRoZSBiaWcgYXJyYXkgb2YgdG9kb3MgYW5kIGFwcGVuZHMgdGhlbSBcbi8vIHRvIHRoZWlyIGNvcnJlY3QgcGFyZW50IGVsZW1lbnRcbi8vIChJIHdvbmRlciBpZiB3ZSBjb3VvbGQgc29ydCB0aGUgYXJyYXkgZmlyc3QgYXMgaXQncyBiZWluZyBtYWRlKVxuLy8gc2VlbXMgcHJldHR5IGNvbXBsaWNhdGVkXG5cblxuXG5cbi8vIGxvb3AgdGhyb3VnaCBhcnJheSBcbi8vIG9uIGVhY2ggdG9kbyBjYWxsIHRyYW5zbGF0ZSBkYXRlICYgZ3JvdXBcbi8vIFxuXG5cblxuLy8gY3VycnJlbnQgcGxhbiBpcyB0byBjYWxsIHRoaXMgd2hlbiB0aGUgd2ViIHBhZ2UgaXMgbG9hZGVkXG4vLyAodGhlIGZpcnN0IHRpbWU/KVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kb3MoYXJyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3VycmVudFRvZG8gPSBhcnJbaV07XG4gICAgICAgIGFwcGVuZENoaWxkVG9kbyhjdXJyZW50VG9kbylcbiAgICB9XG59XG5cblxuLy8gYmFzZWQgb24gdGhlIHZhbCAoMS01KSwgc2V0cyB0aGUgY29sb3Jpbmcgb2YgdGhlIHRvZG8gZWxlbWVudFxuLy8gcHJpb3JpdHlcbmZ1bmN0aW9uIHNldFByaW9yaXR5U3R5bGluZyh0b2RvKSB7XG5cbn1cblxuXG4vLyBmaXJzdCBvZmYsIGhvdyBkbyBJIHN0b3JlIHRvZG9zIGJ5IGdyb3VwXG4vLyBub3Qgc3VyZSB0aGF0IGl0IG1ha2VzIHRlcnJpYmx5IG11Y2ggc2Vuc2UgdG8gbG9vcCB0aHJvdWdoXG4vLyB0aGUgZW50aXJlIGFycmF5LCBhbmQgdGhlbiBzb3J0IGl0IGJ5IGdyb3VwIGVhY2ggdGltZVxuXG5cblxuZnVuY3Rpb24gc29ydFRvZG9ieUdyb3VwKHRvZG9fYXJyYXkpIHt9XG5cblxuXG5mdW5jdGlvbiBzZXRUb2RvQ29udGFpbmVyKHRvZG9fYXJyYXkpIHt9XG5cblxuXG4vLyBkZWxldGUgZ3JvdXAgZnJvbSBkb21cblxuXG5cblxuXG4vLyB0b2dnbGUgc2VsZWN0ZWR0b2RvXG5cblxuLy8gaW5pdGlhbCBsb2FkXG5cbmZ1bmN0aW9uIGxvYWREb21FbGVtZW50cygpIHtcbiAgICBzZXRIb3ZlcnMoKVxuICAgIHNldENoZWNrYm94TGlzdGVuZXJzKClcbiAgICBzZXRUb2RvSXRlbUxpc3RlbmVycygpXG4gICAgc2V0QWRkUHJvamVjdExpc3RlbmVyKCk7XG4gICAgc2V0TmV3VG9kb0xpc3RlbmVyKCk7XG4gICAgc2V0TW9kYWxPdmVybGF5TGlzdGVuZXIoKTtcbn1cblxuXG5cbmZ1bmN0aW9uIHN0cmluZ0lzVG9vTG9uZyhzdHIpIHtcbiAgICByZXR1cm4gKHN0ci5sZW5ndGggPCAzMSlcbn1cblxuXG5leHBvcnQge2xvYWREb21FbGVtZW50cywgZGlzcGxheUN1cnJlbnRUb2RvfSIsIlxuXG5cblxuXG4vLyBzdHJpbmcgLS0tPiBpbnRcbi8vIHRha2VzIGFuIGlucHV0dGVkIG5hbWUgb2YgYSB0b2RvIGFuZCBsb2NhdGVzXG4vLyB0aGUgc3RyaW5nIHRoYXQgY29ycmVzcG9uZHMgdG8gaXQgaW4gdG9kb0FycmF5XG4vLyBcbmZ1bmN0aW9uIGZpbmRUb2RvKHN0ciwgYXJyKSB7XG4gICAgY29uc3QgaXNJbmRleCA9IChlbGVtZW50KSA9PiBlbGVtZW50Lm5hbWUgPSBzdHJcbiAgICBhcnIuZmluZEluZGV4KGlzSW5kZXgpO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUgLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGdyb3VwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgZ3JvdXA6IGdyb3VwLFxuICAgIH1cbn1cblxuXG4vLyBpbnQgLS0tLS0+IG1vZGlmaWVzIGFycmF5XG4vLyB0YWtlcyBpbnB1dHRlZCBpbnRlZ2VyIHBvc2l0aW9uIHByb2R1Y2VkIGZyb20gZmluZFRvZG9cbi8vIGFuZCBkZWxldGVzIHRvZG8gYXQgdGhhdCBwb3NpdGlvbiBmcm9tIGFycmF5XG5cblxuZnVuY3Rpb24gZGVsZXRlVG9kbyhhcnJheVBvcywgYXJyKSB7XG4gICAgYXJyLnNwbGljZShhcnJheVBvcywgMSk7XG59XG5cblxuXG5mdW5jdGlvbiBhZGRUb2RvKHRvZG8sIGFycil7XG4gICAgYXJyLmFwcGVuZCh0b2RvKTtcbn1cblxuXG4vLyBpbnQsIGludCAtLS0tLT4gdG9kb1xuLy8gdWdoIGRvbid0IHJlYWxseSBsaWtlIGhvdyB0aGlzIGludGVyYWN0cyB3aXRoIGZpbmQgaW5kZXhcbi8vIHlvdSBoYXZlIHRvIGlucHV0IGEgdG9kbyBieSBzZWFyY2hpbmcgdGhlIGFycmF5IGZvciBpdFxuLy8gd2l0aCBmaW5kSW5kZXhcbi8vIGFuZCB0aGVuIHNldCB0aGUgdG9kbyBhdCB0aGF0IGluZGV4IHRvIHNvbWV0aGluZyBkaWZmZXJlbnRcbmZ1bmN0aW9uIG1vZGlmeVByaW9yaXR5KGluZGV4LCBudW0pIHtcbiAgICB0b2RvID0gdG9kb0FycmF5W2luZGV4XSA7XG4gICAgdG9kby5wcmlvcml0eSA9IG51bVxuICAgIHRvZG9BcnJheVtpbmRleF0gPSB0b2RvO1xuXG59XG5cbmV4cG9ydCB7Y3JlYXRlVG9kbywgbW9kaWZ5UHJpb3JpdHksIGFkZFRvZG99XG5cblxuXG5cbi8vIGRlbGV0ZSBncm91cCBcbi8vIG5lZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5pbXBvcnQgeyBjcmVhdGVUb2RvICB9IGZyb20gJy4vZnVuY3Rpb25zL2xvZ2ljJ1xuaW1wb3J0IHtsb2FkRG9tRWxlbWVudHN9IGZyb20gJy4vZnVuY3Rpb25zL2RvbSdcblxuLy8gdG8gaW1wb3J0IGEgZnVuY3Rpb24gZnJvbSBkYXRlLWZucyAgdXNlIFxuLy8gaW1wb3J0ICd5b3VyX2Z1bmN0aW9uX25hbWUnIGZyb20gJ2RhdGUtZm5zL2ZwXCIgKG9yIHdoYXRldmVyIHBhdGggaXQgaXMgc3RvcmVkIGluKVxuXG5jb25zdCB0b2RvQXJyYXkgPSBbXTtcblxuLy8gc2VwYXJhdGUgYXJyYXkgb2YgcHJvamVjdHNcbmNvbnN0IHByb2plY3RBcnJheSA9IFtdO1xuXG5cblxuXG5cbi8vIFRoaXMgaXMgcnVuIHdoZW4gdGhlIHdlYnBhZ2UgaXMgaW5pdGlhbGl6ZWRcbmZ1bmN0aW9uIGxvYWRDb250ZW50KCkge1xuICAgIGxvYWREb21FbGVtZW50cygpXG5cbn1cblxuXG5sb2FkQ29udGVudCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9