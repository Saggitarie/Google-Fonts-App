/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/modules/es.symbol'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/modules/es.symbol.description'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/modules/es.symbol.iterator'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/modules/es.array.iterator'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/modules/es.object.to-string'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/modules/es.string.iterator'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/modules/web.dom-collections.iterator'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n\n\n//Define variables to control input values.\nvar inputValue, resetButton, fontSize; // Event Listener for 'Type Something' Input Element\n\ninputValue = document.querySelector('.major-navigation__text-input');\nresetButton = document.querySelector('.major-navigation__reset');\nfontSize = document.querySelector('.major-navigation__select');\ninputValue.addEventListener('input', function () {\n  var customTextByUser = inputValue.value;\n  var sampleTexts = document.getElementsByClassName('card__sample-text');\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = sampleTexts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var sampleText = _step.value;\n      sampleText.textContent = customTextByUser;\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n}); //Reset Button\n\nresetButton.addEventListener('click', function () {\n  inputValue.value = '';\n  var sampleTexts = document.getElementsByClassName('card__sample-text');\n  var _iteratorNormalCompletion2 = true;\n  var _didIteratorError2 = false;\n  var _iteratorError2 = undefined;\n\n  try {\n    for (var _iterator2 = sampleTexts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n      var sampleText = _step2.value;\n      sampleText.textContent = '';\n    }\n  } catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n        _iterator2[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError2) {\n        throw _iteratorError2;\n      }\n    }\n  }\n}); // Font Size\n\nfontSize.addEventListener('input', function () {\n  var x = fontSize.value;\n\n  switch (x) {\n    case '20':\n      // document.querySelector('.card__sample-text').style.fontSize = '200%';\n      var sampleTexts = document.getElementsByClassName('card__sample-text');\n      var _iteratorNormalCompletion3 = true;\n      var _didIteratorError3 = false;\n      var _iteratorError3 = undefined;\n\n      try {\n        for (var _iterator3 = sampleTexts[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n          var sampleText = _step3.value;\n          sampleText.style.fontSize = '200%';\n        }\n      } catch (err) {\n        _didIteratorError3 = true;\n        _iteratorError3 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion3 && _iterator3[\"return\"] != null) {\n            _iterator3[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError3) {\n            throw _iteratorError3;\n          }\n        }\n      }\n\n      break;\n\n    case '24':\n      // document.querySelector('.card__sample-text').style.fontSize = '240%';\n      var sampleTexts = document.getElementsByClassName('card__sample-text');\n      var _iteratorNormalCompletion4 = true;\n      var _didIteratorError4 = false;\n      var _iteratorError4 = undefined;\n\n      try {\n        for (var _iterator4 = sampleTexts[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n          var sampleText = _step4.value;\n          sampleText.style.fontSize = '240%';\n        }\n      } catch (err) {\n        _didIteratorError4 = true;\n        _iteratorError4 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion4 && _iterator4[\"return\"] != null) {\n            _iterator4[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError4) {\n            throw _iteratorError4;\n          }\n        }\n      }\n\n      break;\n\n    case '28':\n      // document.querySelector('.card__sample-text').style.fontSize = '280%';\n      var sampleTexts = document.getElementsByClassName('card__sample-text');\n      var _iteratorNormalCompletion5 = true;\n      var _didIteratorError5 = false;\n      var _iteratorError5 = undefined;\n\n      try {\n        for (var _iterator5 = sampleTexts[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {\n          var sampleText = _step5.value;\n          sampleText.style.fontSize = '280%';\n        }\n      } catch (err) {\n        _didIteratorError5 = true;\n        _iteratorError5 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion5 && _iterator5[\"return\"] != null) {\n            _iterator5[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError5) {\n            throw _iteratorError5;\n          }\n        }\n      }\n\n      break;\n\n    case '32':\n      // document.querySelector('.card__sample-text').style.fontSize = '320%';\n      var sampleTexts = document.getElementsByClassName('card__sample-text');\n      var _iteratorNormalCompletion6 = true;\n      var _didIteratorError6 = false;\n      var _iteratorError6 = undefined;\n\n      try {\n        for (var _iterator6 = sampleTexts[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {\n          var sampleText = _step6.value;\n          sampleText.style.fontSize = '320%';\n        }\n      } catch (err) {\n        _didIteratorError6 = true;\n        _iteratorError6 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion6 && _iterator6[\"return\"] != null) {\n            _iterator6[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError6) {\n            throw _iteratorError6;\n          }\n        }\n      }\n\n      break;\n  }\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi babel-polyfill ./src/js/app.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'babel-polyfill'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nmodule.exports = __webpack_require__(/*! ./src/js/app.js */\"./src/js/app.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./src/js/app.js?");

/***/ })

/******/ });