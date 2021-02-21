module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TJtU");


/***/ }),

/***/ "TJtU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Privacy = props => __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Jumbotron"], {
  className: "jumbo-blk"
}, __jsx("h1", null, "Privacy Policy")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("p", null, "This privacy notice discloses the privacy practices for GAMEstream, our partner websites and any businesses we are associated with. This privacy notice applies solely to information collected by this website. It will notify you of the following:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"], {
  flush: true
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], null, "What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], null, "What choices are available to you regarding the use of your data."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], null, "The security procedures in place to protect the misuse of your information."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], null, "How you can correct any inaccuracies in the information.")), __jsx("h3", null, "Information Collection, Use, and Sharing"), __jsx("p", null, "We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone."), __jsx("p", null, "We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order."), __jsx("p", null, "Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy."), __jsx("h3", null, "Your Access to and Control Over Information"), __jsx("p", null, "You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"], {
  flush: true
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], null, "See what data we have about you, if any."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], null, "Change/correct any data we have about you."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], null, "Have us delete any data we have about you."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroupItem"], null, "Express any concern you have about our use of your data.")), __jsx("h3", null, "Security"), __jsx("p", null, "We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline."), __jsx("p", null, "While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment."), __jsx("p", null, "If you feel that we are not abiding by this privacy policy, you should contact us immediately ", __jsx("a", {
  href: "mailto:contact@galacticblue.net"
}, "via our tech support email"), ".")))));

/* harmony default export */ __webpack_exports__["default"] = (Privacy);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });