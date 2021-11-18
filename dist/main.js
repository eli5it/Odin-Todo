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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody, html {\n    min-height: 100vh;\n}\nbody, html, #content {\n    min-width: 100vw;\n    margin: 0;\n}\n\n#header {\n    height: 10vh;\n    background-color: #f7f0f0;\n}\n\n#header-title{\n    margin: 0;\n}\n\n#content {\n    height: 90vh;\n    display: flex;\n    flex-direction: row;\n}\n\n#sidebar, #todo-container {\n    height: 100vh;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n\n\n#sidebar {\n    background-color: #DFE0E2;\n    padding: 1vw;\n    font-size: 40px;\n    width: 25%;\n}\n\n#todo-container {\n    width: 75%;\n    \n    height: 100vh;\n    display: flex;\n    flex-direction: row;\n}\n\n\n#sidebar, #new-todo-container {\n    \n}\n\n\n#new-todo-container {\n    height: 10%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 2.5vh;\n    \n    \n}\n\n#new-todo-button{\n    height: 80%;\n    width: 90%;\n    border-radius: 6%;\n    font-size: 50%;\n}\n\n.time-button-container {\n    display: flex;\n    flex-direction: column;\n    height: 20%;\n    justify-content: space-between;\n\n}\n\n\n.time-button, .project-button, .new-project-button {\n    background-color: inherit;\n    border: none;\n    text-align: left;\n    font-size: 49%;\n    \n}\n.projects-container {\n    width: 100%;\n}\n.new-project-button {\n    width:  100%;\n    height: 50px;\n}\n\n#project-heading {\n    margin-bottom: 0px;\n}\n\n#project-add-text-container {\n    display: flex;\n    align-content: flex-end;\n    padding-top: 5%;\n    padding-bottom: 5%;\n}\n#project-add-text{\n    margin: 0; \n    margin-left: 2%;\n    font-size: 49%;\n}\n\n.button-on-hover {\n    background-color: tomato;\n}\n\n.selected-todo {\n    display: none;\n}\n\n\n.current-todo-group, .selected-todo {\n    background-color: #DFE0E2;\n    width: 30%;\n    height: 70%;\n    border-radius: 30px;\n    margin: 4%;\n    \n}\n\n\n\n.current-todo-group, .selected-todo-on{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 1%;\n}\n\n.todo-item{\n    width: 90%;\n    margin: 2%;\n    height: 5%;\n    display: flex;\n    align-items: center;\n}\n\n.checkbox{\n    margin-right: 2%;\n}\n\n\n.modal {\n    display: flex;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    width: 30vw;\n    height: 60vh;\n    border-radius: 3%;\n    \n    z-index: 2000;\n\n  }\n\n  .modal-visible {\n      \n  }\n\n  .todo-modal-container {\n    width: 200%;\n  \n    /* spacing as needed */\n    \n  \n    /* let it scroll */\n    overflow: auto;\n}\n\n\n\n#new-project-modal {\n    width: 25vw;\n    height: 20vh;\n}\n\n\n.project-modal-container {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    \n}\n.project-header {\n    height: 15%;\n    align-items: center;\n    margin-bottom: 5%;\n    \n}\n.project-header, .project-textbox-container {\n    display: flex;\n    justify-content: center;\n    \n}\n\n.project-textbox-container {\n    height: 65%;\n    \n    \n}\n.project-textarea {\n    width: 90%;\n    height: 40%;\n    \n}\n\n.project-button-container {\n    height: 20%;\n    \n}\n\n.project-button {\n    width: 49%;\n    margin: 0;\n    height: 100%;\n    align-items: center;\n    text-align: center;\n    font-size: 20px;\n    \n\n}\n  \n  .modal-header {\n      display: flex;\n      flex-direction: row;\n      height: 10%;\n      justify-content: center;\n      \n  }\n  .modal-content {\n      height: 80%;\n      width: 100%;\n      display: flex;\n      \n      \n  }\n\n  .modal-button {\n      width: 100%;\n      height: 10%;\n      \n  }\n\n  .modal-title {\n      \n  }\n\n\n\n  .right-container {\n      padding-left: 10%;\n  }\n\n\n.left-container, .right-container  {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n}\n\n\n.modal-overlay {\n\n   \n    z-index: 1000;\n  \n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  \n  }\n\n\n  #list-modal-overlay {\n    z-index: 3000;\n\n  }\n\n\n\n\n  .list-modal {\n    display: flex;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    width: 50%;\n    height: 50%;\n    border-radius: 3%;\n    \n    z-index: 2000;\n  }\n\n  .modal-closed {\n      display: none;\n  }\n\n\n", "",{"version":3,"sources":["webpack://./src/styles/globals.css"],"names":[],"mappings":"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","sourcesContent":["\nbody, html {\n    min-height: 100vh;\n}\nbody, html, #content {\n    min-width: 100vw;\n    margin: 0;\n}\n\n#header {\n    height: 10vh;\n    background-color: #f7f0f0;\n}\n\n#header-title{\n    margin: 0;\n}\n\n#content {\n    height: 90vh;\n    display: flex;\n    flex-direction: row;\n}\n\n#sidebar, #todo-container {\n    height: 100vh;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n\n\n#sidebar {\n    background-color: #DFE0E2;\n    padding: 1vw;\n    font-size: 40px;\n    width: 25%;\n}\n\n#todo-container {\n    width: 75%;\n    \n    height: 100vh;\n    display: flex;\n    flex-direction: row;\n}\n\n\n#sidebar, #new-todo-container {\n    \n}\n\n\n#new-todo-container {\n    height: 10%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 2.5vh;\n    \n    \n}\n\n#new-todo-button{\n    height: 80%;\n    width: 90%;\n    border-radius: 6%;\n    font-size: 50%;\n}\n\n.time-button-container {\n    display: flex;\n    flex-direction: column;\n    height: 20%;\n    justify-content: space-between;\n\n}\n\n\n.time-button, .project-button, .new-project-button {\n    background-color: inherit;\n    border: none;\n    text-align: left;\n    font-size: 49%;\n    \n}\n.projects-container {\n    width: 100%;\n}\n.new-project-button {\n    width:  100%;\n    height: 50px;\n}\n\n#project-heading {\n    margin-bottom: 0px;\n}\n\n#project-add-text-container {\n    display: flex;\n    align-content: flex-end;\n    padding-top: 5%;\n    padding-bottom: 5%;\n}\n#project-add-text{\n    margin: 0; \n    margin-left: 2%;\n    font-size: 49%;\n}\n\n.button-on-hover {\n    background-color: tomato;\n}\n\n.selected-todo {\n    display: none;\n}\n\n\n.current-todo-group, .selected-todo {\n    background-color: #DFE0E2;\n    width: 30%;\n    height: 70%;\n    border-radius: 30px;\n    margin: 4%;\n    \n}\n\n\n\n.current-todo-group, .selected-todo-on{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 1%;\n}\n\n.todo-item{\n    width: 90%;\n    margin: 2%;\n    height: 5%;\n    display: flex;\n    align-items: center;\n}\n\n.checkbox{\n    margin-right: 2%;\n}\n\n\n.modal {\n    display: flex;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    width: 30vw;\n    height: 60vh;\n    border-radius: 3%;\n    \n    z-index: 2000;\n\n  }\n\n  .modal-visible {\n      \n  }\n\n  .todo-modal-container {\n    width: 200%;\n  \n    /* spacing as needed */\n    \n  \n    /* let it scroll */\n    overflow: auto;\n}\n\n\n\n#new-project-modal {\n    width: 25vw;\n    height: 20vh;\n}\n\n\n.project-modal-container {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    \n}\n.project-header {\n    height: 15%;\n    align-items: center;\n    margin-bottom: 5%;\n    \n}\n.project-header, .project-textbox-container {\n    display: flex;\n    justify-content: center;\n    \n}\n\n.project-textbox-container {\n    height: 65%;\n    \n    \n}\n.project-textarea {\n    width: 90%;\n    height: 40%;\n    \n}\n\n.project-button-container {\n    height: 20%;\n    \n}\n\n.project-button {\n    width: 49%;\n    margin: 0;\n    height: 100%;\n    align-items: center;\n    text-align: center;\n    font-size: 20px;\n    \n\n}\n  \n  .modal-header {\n      display: flex;\n      flex-direction: row;\n      height: 10%;\n      justify-content: center;\n      \n  }\n  .modal-content {\n      height: 80%;\n      width: 100%;\n      display: flex;\n      \n      \n  }\n\n  .modal-button {\n      width: 100%;\n      height: 10%;\n      \n  }\n\n  .modal-title {\n      \n  }\n\n\n\n  .right-container {\n      padding-left: 10%;\n  }\n\n\n.left-container, .right-container  {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n}\n\n\n.modal-overlay {\n\n   \n    z-index: 1000;\n  \n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  \n  }\n\n\n  #list-modal-overlay {\n    z-index: 3000;\n\n  }\n\n\n\n\n  .list-modal {\n    display: flex;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    width: 50%;\n    height: 50%;\n    border-radius: 3%;\n    \n    z-index: 2000;\n  }\n\n  .modal-closed {\n      display: none;\n  }\n\n\n"],"sourceRoot":""}]);
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







function setModalButtonEventListener() {
    let button = document.querySelector('.modal-button');
    button.addEventListener('click', () => {
        createDomTodo();
        toggleModalVisibilities();
    })
}


function setModalListEventListener() {
    let listButton = document.querySelector('.modal-list');
    let listModal = document.querySelector('.list-modal')
    
    listButton.addEventListener('click', () => {
        toggleModalVisibility(listModal);
    })
    

}


function setModalListlEventListener() {
    
}

function setModalOverlayListener() {
    let overlay = document.querySelector('.modal-overlay');
    overlay.addEventListener('click', () => {
        toggleModalVisibilities(overlay)
    })
}


function setNewProjectListener() {
    let project = document.getElementById('project-add-text-container');
    let cancelButton = document.querySelector('.cancel-button');
    let createButton = document.querySelector('.create-button');
    let overlay = document.querySelector('.modal-overlay');
    let modal = document.querySelector('#new-project-modal')
    let textbox = document.querySelector('.project-textarea')
    
    project.addEventListener('click', () => {
        toggleModalVisibility(overlay)
        toggleModalVisibility(modal)
    })
    cancelButton.addEventListener('click', () => {
        toggleModalVisibility(overlay)
        toggleModalVisibility(modal)
    })
    createButton.addEventListener('click', () => {
        if (checkTextContent(textbox.value)) {
            const textContent = textbox.value
            createProjectElement(textContent)
            toggleModalVisibility(overlay)
            toggleModalVisibility(modal)
        }
        
    })
    
}

function createProjectElement(text)  {
    const container = document.querySelector('.projects-container');
    const newProject = document.createElement('button');
    
    newProject.classList.add('new-project-button')
    newProject.textContent = text
    container.appendChild(newProject);
}

function checkTextContent(textbox) {
    console.log(textbox)
    return (textbox.length !== 0)
}






function setNewTodoListener() {
    let todo = document.getElementById('new-todo-button');
    let overlay = document.querySelector('.modal-overlay');
    let modal = document.querySelector('#new-todo-modal')
    todo.addEventListener('click', () => {
        toggleModalVisibility(overlay)
        toggleModalVisibility(modal)
    })
    
}

function toggleModalVisibility(modal) {
    modal.classList.toggle('modal-closed')
}





function toggleModalVisibilities() {
    let modalList = document.querySelectorAll('.modals');
    modalList.forEach((modal) => {
        if (!(modal.classList.contains('modal-closed')))
        {toggleModalVisibility(modal)}
    })
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
    let buttons = document.querySelectorAll('.sidebar-button, .project-button')
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
    console.log('imma create a todo on the dom')
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
    setNewTodoListener();
    setNewProjectListener();
    setModalOverlayListener();
    setModalButtonEventListener();
    setModalListEventListener() 
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxjQUFjLGFBQWEsV0FBVyxTQUFTLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksWUFBWSxLQUFLLEtBQUssVUFBVSxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxLQUFLLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sUUFBUSxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSx3QkFBd0IsMEJBQTBCLFFBQVEsS0FBSyxXQUFXLFNBQVMsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLHdDQUF3Qyx3QkFBd0IsR0FBRyx3QkFB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O0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsK0NBQStDO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBOzs7O0FBSUE7Ozs7QUFJQTs7Ozs7O0FBTUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRTRDOzs7OztBQUs1QztBQUNBOzs7Ozs7VUM1REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZCOztBQUVrQjtBQUNBOztBQUUvQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQSxJQUFJLCtEQUFlOztBQUVuQjs7O0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz9kYTMwIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2Z1bmN0aW9ucy9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2Z1bmN0aW9ucy9sb2dpYy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuYm9keSwgaHRtbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5ib2R5LCBodG1sLCAjY29udGVudCB7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjBmMDtcXG59XFxuXFxuI2hlYWRlci10aXRsZXtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuI3NpZGViYXIsICN0b2RvLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuXFxuI3NpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFMEUyO1xcbiAgICBwYWRkaW5nOiAxdnc7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgd2lkdGg6IDI1JTtcXG59XFxuXFxuI3RvZG8tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcblxcbiNzaWRlYmFyLCAjbmV3LXRvZG8tY29udGFpbmVyIHtcXG4gICAgXFxufVxcblxcblxcbiNuZXctdG9kby1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyLjV2aDtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4jbmV3LXRvZG8tYnV0dG9ue1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNiU7XFxuICAgIGZvbnQtc2l6ZTogNTAlO1xcbn1cXG5cXG4udGltZS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG59XFxuXFxuXFxuLnRpbWUtYnV0dG9uLCAucHJvamVjdC1idXR0b24sIC5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogNDklO1xcbiAgICBcXG59XFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcXG4gICAgd2lkdGg6ICAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbiNwcm9qZWN0LWhlYWRpbmcge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbiNwcm9qZWN0LWFkZC10ZXh0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nLXRvcDogNSU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcXG59XFxuI3Byb2plY3QtYWRkLXRleHR7XFxuICAgIG1hcmdpbjogMDsgXFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG4gICAgZm9udC1zaXplOiA0OSU7XFxufVxcblxcbi5idXR0b24tb24taG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XFxufVxcblxcbi5zZWxlY3RlZC10b2RvIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLmN1cnJlbnQtdG9kby1ncm91cCwgLnNlbGVjdGVkLXRvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFMEUyO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgbWFyZ2luOiA0JTtcXG4gICAgXFxufVxcblxcblxcblxcbi5jdXJyZW50LXRvZG8tZ3JvdXAsIC5zZWxlY3RlZC10b2RvLW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMSU7XFxufVxcblxcbi50b2RvLWl0ZW17XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIGhlaWdodDogNSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcXG59XFxuXFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBoZWlnaHQ6IDYwdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMlO1xcbiAgICBcXG4gICAgei1pbmRleDogMjAwMDtcXG5cXG4gIH1cXG5cXG4gIC5tb2RhbC12aXNpYmxlIHtcXG4gICAgICBcXG4gIH1cXG5cXG4gIC50b2RvLW1vZGFsLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAyMDAlO1xcbiAgXFxuICAgIC8qIHNwYWNpbmcgYXMgbmVlZGVkICovXFxuICAgIFxcbiAgXFxuICAgIC8qIGxldCBpdCBzY3JvbGwgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcblxcblxcbiNuZXctcHJvamVjdC1tb2RhbCB7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxufVxcblxcblxcbi5wcm9qZWN0LW1vZGFsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG59XFxuLnByb2plY3QtaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbiAgICBcXG59XFxuLnByb2plY3QtaGVhZGVyLCAucHJvamVjdC10ZXh0Ym94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLnByb2plY3QtdGV4dGJveC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDY1JTtcXG4gICAgXFxuICAgIFxcbn1cXG4ucHJvamVjdC10ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogNDAlO1xcbiAgICBcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQ5JTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBcXG5cXG59XFxuICBcXG4gIC5tb2RhbC1oZWFkZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBoZWlnaHQ6IDEwJTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBcXG4gIH1cXG4gIC5tb2RhbC1jb250ZW50IHtcXG4gICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIFxcbiAgICAgIFxcbiAgfVxcblxcbiAgLm1vZGFsLWJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMCU7XFxuICAgICAgXFxuICB9XFxuXFxuICAubW9kYWwtdGl0bGUge1xcbiAgICAgIFxcbiAgfVxcblxcblxcblxcbiAgLnJpZ2h0LWNvbnRhaW5lciB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICB9XFxuXFxuXFxuLmxlZnQtY29udGFpbmVyLCAucmlnaHQtY29udGFpbmVyICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcblxcbi5tb2RhbC1vdmVybGF5IHtcXG5cXG4gICBcXG4gICAgei1pbmRleDogMTAwMDtcXG4gIFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICBcXG4gIH1cXG5cXG5cXG4gICNsaXN0LW1vZGFsLW92ZXJsYXkge1xcbiAgICB6LWluZGV4OiAzMDAwO1xcblxcbiAgfVxcblxcblxcblxcblxcbiAgLmxpc3QtbW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMlO1xcbiAgICBcXG4gICAgei1pbmRleDogMjAwMDtcXG4gIH1cXG5cXG4gIC5tb2RhbC1jbG9zZWQge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0RBQWdEO0FBQ3BEOzs7O0FBSUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFD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c291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5LCBodG1sIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbmJvZHksIGh0bWwsICNjb250ZW50IHtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmMGYwO1xcbn1cXG5cXG4jaGVhZGVyLXRpdGxle1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jc2lkZWJhciwgI3RvZG8tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5cXG4jc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkUwRTI7XFxuICAgIHBhZGRpbmc6IDF2dztcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB3aWR0aDogMjUlO1xcbn1cXG5cXG4jdG9kby1jb250YWluZXIge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuXFxuI3NpZGViYXIsICNuZXctdG9kby1jb250YWluZXIge1xcbiAgICBcXG59XFxuXFxuXFxuI25ldy10b2RvLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIuNXZoO1xcbiAgICBcXG4gICAgXFxufVxcblxcbiNuZXctdG9kby1idXR0b257XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2JTtcXG4gICAgZm9udC1zaXplOiA1MCU7XFxufVxcblxcbi50aW1lLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbn1cXG5cXG5cXG4udGltZS1idXR0b24sIC5wcm9qZWN0LWJ1dHRvbiwgLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiA0OSU7XFxuICAgIFxcbn1cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgICB3aWR0aDogIDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuI3Byb2plY3QtaGVhZGluZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuI3Byb2plY3QtYWRkLXRleHQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xcbn1cXG4jcHJvamVjdC1hZGQtdGV4dHtcXG4gICAgbWFyZ2luOiAwOyBcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgICBmb250LXNpemU6IDQ5JTtcXG59XFxuXFxuLmJ1dHRvbi1vbi1ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcXG59XFxuXFxuLnNlbGVjdGVkLXRvZG8ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4uY3VycmVudC10b2RvLWdyb3VwLCAuc2VsZWN0ZWQtdG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkUwRTI7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBtYXJnaW46IDQlO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuLmN1cnJlbnQtdG9kby1ncm91cCwgLnNlbGVjdGVkLXRvZG8tb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxJTtcXG59XFxuXFxuLnRvZG8taXRlbXtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiAyJTtcXG4gICAgaGVpZ2h0OiA1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94e1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xcbn1cXG5cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGhlaWdodDogNjB2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMyU7XFxuICAgIFxcbiAgICB6LWluZGV4OiAyMDAwO1xcblxcbiAgfVxcblxcbiAgLm1vZGFsLXZpc2libGUge1xcbiAgICAgIFxcbiAgfVxcblxcbiAgLnRvZG8tbW9kYWwtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDIwMCU7XFxuICBcXG4gICAgLyogc3BhY2luZyBhcyBuZWVkZWQgKi9cXG4gICAgXFxuICBcXG4gICAgLyogbGV0IGl0IHNjcm9sbCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuXFxuXFxuI25ldy1wcm9qZWN0LW1vZGFsIHtcXG4gICAgd2lkdGg6IDI1dnc7XFxuICAgIGhlaWdodDogMjB2aDtcXG59XFxuXFxuXFxuLnByb2plY3QtbW9kYWwtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbn1cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICAgIFxcbn1cXG4ucHJvamVjdC1oZWFkZXIsIC5wcm9qZWN0LXRleHRib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ucHJvamVjdC10ZXh0Ym94LWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNjUlO1xcbiAgICBcXG4gICAgXFxufVxcbi5wcm9qZWN0LXRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiA0MCU7XFxuICAgIFxcbn1cXG5cXG4ucHJvamVjdC1idXR0b24tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIFxcbn1cXG5cXG4ucHJvamVjdC1idXR0b24ge1xcbiAgICB3aWR0aDogNDklO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIFxcblxcbn1cXG4gIFxcbiAgLm1vZGFsLWhlYWRlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGhlaWdodDogMTAlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIFxcbiAgfVxcbiAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICAgIGhlaWdodDogODAlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgXFxuICAgICAgXFxuICB9XFxuXFxuICAubW9kYWwtYnV0dG9uIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwJTtcXG4gICAgICBcXG4gIH1cXG5cXG4gIC5tb2RhbC10aXRsZSB7XFxuICAgICAgXFxuICB9XFxuXFxuXFxuXFxuICAucmlnaHQtY29udGFpbmVyIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gIH1cXG5cXG5cXG4ubGVmdC1jb250YWluZXIsIC5yaWdodC1jb250YWluZXIgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuXFxuLm1vZGFsLW92ZXJsYXkge1xcblxcbiAgIFxcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIFxcbiAgfVxcblxcblxcbiAgI2xpc3QtbW9kYWwtb3ZlcmxheSB7XFxuICAgIHotaW5kZXg6IDMwMDA7XFxuXFxuICB9XFxuXFxuXFxuXFxuXFxuICAubGlzdC1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMyU7XFxuICAgIFxcbiAgICB6LWluZGV4OiAyMDAwO1xcbiAgfVxcblxcbiAgLm1vZGFsLWNsb3NlZCB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWxzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcblxuXG4vLyBhZGQgZ3JvdXAgdG8gZG9tXG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0RvbXNHcm91cChzdHIpIHtcbiAgICBjb25zb2xlLmxvZygnSSBjcmVhdGVkIGEgbmV3IGdyb3VwIG9uIHRoZSBkb20nKVxufVxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBzZXRNb2RhbEJ1dHRvbkV2ZW50TGlzdGVuZXIoKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1idXR0b24nKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZURvbVRvZG8oKTtcbiAgICAgICAgdG9nZ2xlTW9kYWxWaXNpYmlsaXRpZXMoKTtcbiAgICB9KVxufVxuXG5cbmZ1bmN0aW9uIHNldE1vZGFsTGlzdEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgbGV0IGxpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbGlzdCcpO1xuICAgIGxldCBsaXN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1tb2RhbCcpXG4gICAgXG4gICAgbGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlTW9kYWxWaXNpYmlsaXR5KGxpc3RNb2RhbCk7XG4gICAgfSlcbiAgICBcblxufVxuXG5cbmZ1bmN0aW9uIHNldE1vZGFsTGlzdGxFdmVudExpc3RlbmVyKCkge1xuICAgIFxufVxuXG5mdW5jdGlvbiBzZXRNb2RhbE92ZXJsYXlMaXN0ZW5lcigpIHtcbiAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1vdmVybGF5Jyk7XG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlTW9kYWxWaXNpYmlsaXRpZXMob3ZlcmxheSlcbiAgICB9KVxufVxuXG5cbmZ1bmN0aW9uIHNldE5ld1Byb2plY3RMaXN0ZW5lcigpIHtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWFkZC10ZXh0LWNvbnRhaW5lcicpO1xuICAgIGxldCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWJ1dHRvbicpO1xuICAgIGxldCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWJ1dHRvbicpO1xuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKTtcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtbW9kYWwnKVxuICAgIGxldCB0ZXh0Ym94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGV4dGFyZWEnKVxuICAgIFxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZU1vZGFsVmlzaWJpbGl0eShvdmVybGF5KVxuICAgICAgICB0b2dnbGVNb2RhbFZpc2liaWxpdHkobW9kYWwpXG4gICAgfSlcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZU1vZGFsVmlzaWJpbGl0eShvdmVybGF5KVxuICAgICAgICB0b2dnbGVNb2RhbFZpc2liaWxpdHkobW9kYWwpXG4gICAgfSlcbiAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChjaGVja1RleHRDb250ZW50KHRleHRib3gudmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IHRleHRib3gudmFsdWVcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RFbGVtZW50KHRleHRDb250ZW50KVxuICAgICAgICAgICAgdG9nZ2xlTW9kYWxWaXNpYmlsaXR5KG92ZXJsYXkpXG4gICAgICAgICAgICB0b2dnbGVNb2RhbFZpc2liaWxpdHkobW9kYWwpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbiAgICBcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVsZW1lbnQodGV4dCkgIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIFxuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtYnV0dG9uJylcbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gdGV4dFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tUZXh0Q29udGVudCh0ZXh0Ym94KSB7XG4gICAgY29uc29sZS5sb2codGV4dGJveClcbiAgICByZXR1cm4gKHRleHRib3gubGVuZ3RoICE9PSAwKVxufVxuXG5cblxuXG5cblxuZnVuY3Rpb24gc2V0TmV3VG9kb0xpc3RlbmVyKCkge1xuICAgIGxldCB0b2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10b2RvLWJ1dHRvbicpO1xuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKTtcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8tbW9kYWwnKVxuICAgIHRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZU1vZGFsVmlzaWJpbGl0eShvdmVybGF5KVxuICAgICAgICB0b2dnbGVNb2RhbFZpc2liaWxpdHkobW9kYWwpXG4gICAgfSlcbiAgICBcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTW9kYWxWaXNpYmlsaXR5KG1vZGFsKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnbW9kYWwtY2xvc2VkJylcbn1cblxuXG5cblxuXG5mdW5jdGlvbiB0b2dnbGVNb2RhbFZpc2liaWxpdGllcygpIHtcbiAgICBsZXQgbW9kYWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFscycpO1xuICAgIG1vZGFsTGlzdC5mb3JFYWNoKChtb2RhbCkgPT4ge1xuICAgICAgICBpZiAoIShtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWNsb3NlZCcpKSlcbiAgICAgICAge3RvZ2dsZU1vZGFsVmlzaWJpbGl0eShtb2RhbCl9XG4gICAgfSlcbn1cblxuLy8gZnVuY3Rpb24gc2V0QWRkTmV3VG9kb0xpc3RlbmVyKCkge1xuLy8gICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRvZG8tYnV0dG9uJyk7XG4vLyAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgICAgIGRpc3BsYXlUb2RvRm9ybSgpO1xuLy8gICAgICAgfSlcblxuLy8gfVxuXG5cblxuZnVuY3Rpb24gc2V0VG9kb0l0ZW1MaXN0ZW5lcih0b2RvSXRlbSkge1xuICAgIGxldCBzZWNvbmRQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC10b2RvJylcbiAgICB0b2RvSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2Vjb25kUGFuZWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQtdG9kby1vbicpXG4gICAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIHNldFRvZG9JdGVtTGlzdGVuZXJzKCkge1xuICAgIGxldCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWl0ZW0nKTtcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgIHNldFRvZG9JdGVtTGlzdGVuZXIodG9kbylcbiAgICB9KVxufVxuXG5cblxuXG5cbmZ1bmN0aW9uIHNldENoZWNrYm94TGlzdGVuZXIoY2hlY2tib3gpIHtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ltbWEgZGVsZXRlIHRoaXMgdGhpbmcgbGF0ZXInKVxuICAgICAgfSlcbiAgICAgIFxufVxuXG5mdW5jdGlvbiBzZXRDaGVja2JveExpc3RlbmVycygpIHtcbiAgICBsZXQgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpXG4gICAgY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgICAgICBzZXRDaGVja2JveExpc3RlbmVyKGNoZWNrYm94KVxuICAgIH0pICBcbn1cblxuZnVuY3Rpb24gc2V0QnV0dG9uSG92ZXJzKCkge1xuICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItYnV0dG9uLCAucHJvamVjdC1idXR0b24nKVxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIHNldEhvdmVyKGJ1dHRvbilcbiAgICB9KSAgXG59XG5cbmZ1bmN0aW9uIHNldERpdkhvdmVycygpIHtcbiAgICBsZXQgZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWl0ZW0nKVxuICAgIGRpdnMuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgICAgIHNldEhvdmVyKGRpdilcbiAgICB9KVxufVxuXG4vLyBzZXRzIGhvdmVyIHRvZ2dsZSBmb3IgYW4gaW5kaXZpZHVhbCBidXR0b25cbmZ1bmN0aW9uIHNldEhvdmVyKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYnV0dG9uLW9uLWhvdmVyJylcbiAgICAgIH0pXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2J1dHRvbi1vbi1ob3ZlcicpfSlcbn1cblxuZnVuY3Rpb24gc2V0SG92ZXJzKCkge1xuICAgIHNldERpdkhvdmVycygpO1xuICAgIHNldEJ1dHRvbkhvdmVycygpO1xufVxuXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gZGlzcGxheVRvZG9Gb3JtKCkge1xuLy8gICAgIGNvbnNvbGUubG9nKCdJIHdpbGwgYXNrIHBlb3BsZSBxdWVzdGlvbnMgYWJvdXQgdGhlaXIgdG9kbyBpdGVtJylcbi8vIH1cbi8vIC8vIFxuXG5cblxuLy8gd2hlbiB5b3UgY2xpY2sgYSB0b2RvIGl0ZW0sIHRvZ2dsZXMgdGhlIHNlY29uZCBwYW5lbFxuXG5mdW5jdGlvbiB0b2dnbGVDdXJyZW50VG9kbygpIHtcbiAgICBsZXQgY3VycmVudFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkLXRvZG9cIik7XG4gICAgY3VycmVudFRvZG8uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQtdG9kby1vbicpXG59XG5cblxuZnVuY3Rpb24gc2V0Q3VycmVudFRvZG9Db250ZW50KHRvZG8pICB7XG4gICAgY29uc29sZS5sb2coJ2kgd2lsbCBzb29uIGluc2VydCB0aGUgY29yZWN0IGluZm9ybWF0aW9uJyk7XG59XG5mdW5jdGlvbiBkaXNwbGF5Q3VycmVudFRvZG8odG9kbykge1xuICAgIHNldEN1cnJlbnRUb2RvQ29udGVudCh0b2RvKVxuICAgIHRvZ2dsZUN1cnJlbnRUb2RvKCk7XG4gICAgY29uc29sZS5sb2coJ2kgd2lsbCBzb29uIGRpc3BsYXkgdGhlIGNvcnJlY3QgaW5mb3JtYXRpb24nKVxuICAgIFxufVxuXG5cblxuXG5cblxuXG5cbi8vIHNvIEkgdGhpbmsgaXQgbWFrZXMgc2Vuc2UgdG8gYXNzb2NpYXRlIHRvZG8gZGVsZXRlYnV0dG9uc1xuLy8gdy8gdGhlaXIgcGFyZW50IGVsZW1lbnQgb24gdGhlIGRvbVxuLy8gc28geW91IGFkZCBldmVudGxpc3RlbmVyIG9uIGNsaWNrIHRvIHRyaWdnZXIgY29ycmVzcG9uZGluZyB0b2RvXG4vLyBkZWxldGlvblxuZnVuY3Rpb24gc2V0RGVsZXRlQnV0dG9ucygpIHtcblxufVxuXG5cblxuLy8gdGFrZXMgaW5wdXQgZnJvbSBmaW5kVG9kb1xuLy8gbG9jYXRlcyBkb20gZWxlbWVudCBhbmQgZGVsZXRlcyBpdFxuZnVuY3Rpb24gZG9tRGVsZXRlVG9kbyhkb21fZWxlbWVudCkge1xuICAgIFxufVxuXG5cblxuLy8gdGFrZXMgYW4gZXhwb3J0ZWQgdG9kbyBmcm9tIGFkZHRvZG8gYW5kIGNyZWF0ZXNcbi8vIGEgZG9tIGVsZW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBpdFxuLy8gY3J1Y2lhbGx5LCBkb2VzIG5vdCBhY3R1YWxseSBwbGFjZSB0aGF0IHRvZG8gaW50byB0aGUgZG9tXG4vLyBjcmVhdGVEb21Ub2RvJ3Mgb3V0cHV0IGlzIHRoZSBpbnB1dCBmb3IgYXBwZW5kQ2hpbGRUb2RvXG5mdW5jdGlvbiBjcmVhdGVEb21Ub2RvKHRvZG8pIHtcbiAgICBjb25zb2xlLmxvZygnaW1tYSBjcmVhdGUgYSB0b2RvIG9uIHRoZSBkb20nKVxufVxuXG5cblxuLy8gdGFrZXMgYW4gaW5wdXR0ZWQgdG9kbyBlbGVtZW50XG4vLyBiYXNlZCBvbiBpdCdzIGdyb3VwIHByb3BlcnR5IHBsYWNlcyBpbiBjb3JyZWN0IGdyb3VwXG4vLyBiYXNlZCBvbiBkYXRlLCBwbGFjZXMgaW50byBjb3JyZWN0IGRhdGUgbG9jYXRpb25cbi8vIChyZW1lbWJlciwgbWFpbiBpcyB0aGUgZGVmYXVsdCBwbGFjZSB3aGVyZSB0b2RvcyBhcmUgcGxhY2VkKVxuXG5cbmZ1bmN0aW9uIGFwcGVuZENoaWxkVG9kbyh0b2RvKSB7XG4gICAgXG4gICAgLy8gY2FsbGluZyBib3RoIHRoZSBncm91cCBmaW5kZXIgYW5kIGRhdGUgZmluZGVyXG5cblxuXG4gICAgLy8gcXVlcnkgc2VsZWN0b3IgZm9yIGRhdGUgZWxlbWVudFxuXG4gICAgLy8gcXVlcnkgc2VsZWN0b3IgZm9yIGdyb3VwIGVsZW1lbnRcblxuICAgIC8vIGFwcGVuZCB0byBkbyB0byBwYXJlbnQgZWxlbWVudFxuXG59XG5cblxuLy8gdG9kbyAtLS0tLS0+IGNvcnJlY3QgZG9tIGVsZW1lbnRcbi8vIHRha2VzIGluIGEgdG9kbyBlbGVtZW50IGFuZCBpZGVudGlmaWVzIHdoaWNoIGRhdGUgY2F0ZWdvcnkgaXRcbi8vIGZpdHMgaW50b1xuLy8gcmV0dXJucyB0aGUgc3RyaW5nIG5hbWUgb2YgdGhlIGRvbSBlbGVtZW50c1xuXG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVRvZG9EYXRlKHRvZG8pIHtcblxufVxuXG4vLyB0b2RvIC0tLS0tLT4gY29ycmVjdCBkb20gZWxlbWVudFxuLy8gdGFrZXMgaW4gYSB0b2RvIGVsZW1lbnQgYW5kIGlkZW50aWZpZXMgd2hpY2ggZGF0ZSBjYXRlZ29yeSBpdFxuLy8gZml0cyBpbnRvXG4vLyByZXR1cm5zIHRoZSBzdHJpbmcgbmFtZSBvZiB0aGUgZG9tIGVsZW1lbnRzXG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVRvZG9Hcm91cCh0b2RvKSB7XG4gICAgXG59XG5cblxuXG5cbi8vIHRha2VzIGluIHRoZSBiaWcgYXJyYXkgb2YgdG9kb3MgYW5kIGFwcGVuZHMgdGhlbSBcbi8vIHRvIHRoZWlyIGNvcnJlY3QgcGFyZW50IGVsZW1lbnRcbi8vIChJIHdvbmRlciBpZiB3ZSBjb3VvbGQgc29ydCB0aGUgYXJyYXkgZmlyc3QgYXMgaXQncyBiZWluZyBtYWRlKVxuLy8gc2VlbXMgcHJldHR5IGNvbXBsaWNhdGVkXG5cblxuXG5cbi8vIGxvb3AgdGhyb3VnaCBhcnJheSBcbi8vIG9uIGVhY2ggdG9kbyBjYWxsIHRyYW5zbGF0ZSBkYXRlICYgZ3JvdXBcbi8vIFxuXG5cblxuLy8gY3VycnJlbnQgcGxhbiBpcyB0byBjYWxsIHRoaXMgd2hlbiB0aGUgd2ViIHBhZ2UgaXMgbG9hZGVkXG4vLyAodGhlIGZpcnN0IHRpbWU/KVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kb3MoYXJyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3VycmVudFRvZG8gPSBhcnJbaV07XG4gICAgICAgIGFwcGVuZENoaWxkVG9kbyhjdXJyZW50VG9kbylcbiAgICB9XG59XG5cblxuLy8gYmFzZWQgb24gdGhlIHZhbCAoMS01KSwgc2V0cyB0aGUgY29sb3Jpbmcgb2YgdGhlIHRvZG8gZWxlbWVudFxuLy8gcHJpb3JpdHlcbmZ1bmN0aW9uIHNldFByaW9yaXR5U3R5bGluZyh0b2RvKSB7XG5cbn1cblxuXG4vLyBmaXJzdCBvZmYsIGhvdyBkbyBJIHN0b3JlIHRvZG9zIGJ5IGdyb3VwXG4vLyBub3Qgc3VyZSB0aGF0IGl0IG1ha2VzIHRlcnJpYmx5IG11Y2ggc2Vuc2UgdG8gbG9vcCB0aHJvdWdoXG4vLyB0aGUgZW50aXJlIGFycmF5LCBhbmQgdGhlbiBzb3J0IGl0IGJ5IGdyb3VwIGVhY2ggdGltZVxuXG5cblxuZnVuY3Rpb24gc29ydFRvZG9ieUdyb3VwKHRvZG9fYXJyYXkpIHt9XG5cblxuXG5mdW5jdGlvbiBzZXRUb2RvQ29udGFpbmVyKHRvZG9fYXJyYXkpIHt9XG5cblxuXG4vLyBkZWxldGUgZ3JvdXAgZnJvbSBkb21cblxuXG5cblxuXG4vLyB0b2dnbGUgc2VsZWN0ZWR0b2RvXG5cblxuLy8gaW5pdGlhbCBsb2FkXG5cbmZ1bmN0aW9uIGxvYWREb21FbGVtZW50cygpIHtcbiAgICBzZXRIb3ZlcnMoKVxuICAgIHNldENoZWNrYm94TGlzdGVuZXJzKClcbiAgICBzZXRUb2RvSXRlbUxpc3RlbmVycygpXG4gICAgc2V0TmV3VG9kb0xpc3RlbmVyKCk7XG4gICAgc2V0TmV3UHJvamVjdExpc3RlbmVyKCk7XG4gICAgc2V0TW9kYWxPdmVybGF5TGlzdGVuZXIoKTtcbiAgICBzZXRNb2RhbEJ1dHRvbkV2ZW50TGlzdGVuZXIoKTtcbiAgICBzZXRNb2RhbExpc3RFdmVudExpc3RlbmVyKCkgXG4gICAgXG59XG5cblxuXG5mdW5jdGlvbiBzdHJpbmdJc1Rvb0xvbmcoc3RyKSB7XG4gICAgcmV0dXJuIChzdHIubGVuZ3RoIDwgMzEpXG59XG5cblxuZXhwb3J0IHtsb2FkRG9tRWxlbWVudHMsIGRpc3BsYXlDdXJyZW50VG9kb30iLCJcblxuXG5cblxuLy8gc3RyaW5nIC0tLT4gaW50XG4vLyB0YWtlcyBhbiBpbnB1dHRlZCBuYW1lIG9mIGEgdG9kbyBhbmQgbG9jYXRlc1xuLy8gdGhlIHN0cmluZyB0aGF0IGNvcnJlc3BvbmRzIHRvIGl0IGluIHRvZG9BcnJheVxuLy8gXG5mdW5jdGlvbiBmaW5kVG9kbyhzdHIsIGFycikge1xuICAgIGNvbnN0IGlzSW5kZXggPSAoZWxlbWVudCkgPT4gZWxlbWVudC5uYW1lID0gc3RyXG4gICAgYXJyLmZpbmRJbmRleChpc0luZGV4KTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlICwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBncm91cCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIGdyb3VwOiBncm91cCxcbiAgICB9XG59XG5cblxuLy8gaW50IC0tLS0tPiBtb2RpZmllcyBhcnJheVxuLy8gdGFrZXMgaW5wdXR0ZWQgaW50ZWdlciBwb3NpdGlvbiBwcm9kdWNlZCBmcm9tIGZpbmRUb2RvXG4vLyBhbmQgZGVsZXRlcyB0b2RvIGF0IHRoYXQgcG9zaXRpb24gZnJvbSBhcnJheVxuXG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8oYXJyYXlQb3MsIGFycikge1xuICAgIGFyci5zcGxpY2UoYXJyYXlQb3MsIDEpO1xufVxuXG5cblxuZnVuY3Rpb24gYWRkVG9kbyh0b2RvLCBhcnIpe1xuICAgIGFyci5hcHBlbmQodG9kbyk7XG59XG5cblxuLy8gaW50LCBpbnQgLS0tLS0+IHRvZG9cbi8vIHVnaCBkb24ndCByZWFsbHkgbGlrZSBob3cgdGhpcyBpbnRlcmFjdHMgd2l0aCBmaW5kIGluZGV4XG4vLyB5b3UgaGF2ZSB0byBpbnB1dCBhIHRvZG8gYnkgc2VhcmNoaW5nIHRoZSBhcnJheSBmb3IgaXRcbi8vIHdpdGggZmluZEluZGV4XG4vLyBhbmQgdGhlbiBzZXQgdGhlIHRvZG8gYXQgdGhhdCBpbmRleCB0byBzb21ldGhpbmcgZGlmZmVyZW50XG5mdW5jdGlvbiBtb2RpZnlQcmlvcml0eShpbmRleCwgbnVtKSB7XG4gICAgdG9kbyA9IHRvZG9BcnJheVtpbmRleF0gO1xuICAgIHRvZG8ucHJpb3JpdHkgPSBudW1cbiAgICB0b2RvQXJyYXlbaW5kZXhdID0gdG9kbztcblxufVxuXG5leHBvcnQge2NyZWF0ZVRvZG8sIG1vZGlmeVByaW9yaXR5LCBhZGRUb2RvfVxuXG5cblxuXG4vLyBkZWxldGUgZ3JvdXAgXG4vLyBuZWUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuaW1wb3J0IHsgY3JlYXRlVG9kbyAgfSBmcm9tICcuL2Z1bmN0aW9ucy9sb2dpYydcbmltcG9ydCB7bG9hZERvbUVsZW1lbnRzfSBmcm9tICcuL2Z1bmN0aW9ucy9kb20nXG5cbi8vIHRvIGltcG9ydCBhIGZ1bmN0aW9uIGZyb20gZGF0ZS1mbnMgIHVzZSBcbi8vIGltcG9ydCAneW91cl9mdW5jdGlvbl9uYW1lJyBmcm9tICdkYXRlLWZucy9mcFwiIChvciB3aGF0ZXZlciBwYXRoIGl0IGlzIHN0b3JlZCBpbilcblxuY29uc3QgdG9kb0FycmF5ID0gW107XG5cbi8vIHNlcGFyYXRlIGFycmF5IG9mIHByb2plY3RzXG5jb25zdCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuXG5cblxuXG4vLyBUaGlzIGlzIHJ1biB3aGVuIHRoZSB3ZWJwYWdlIGlzIGluaXRpYWxpemVkXG5mdW5jdGlvbiBsb2FkQ29udGVudCgpIHtcbiAgICBsb2FkRG9tRWxlbWVudHMoKVxuXG59XG5cblxubG9hZENvbnRlbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==