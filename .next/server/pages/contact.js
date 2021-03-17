module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ALdH");


/***/ }),

/***/ "ALdH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "sweetalert"
var external_sweetalert_ = __webpack_require__("HmCi");
var external_sweetalert_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert_);

// CONCATENATED MODULE: ./components/Form.js
var __jsx = external_react_default.a.createElement;




const API_PATH = 'https://therealgamestream.com/api/contact/index.php';

const ContactForm = () => {
  const {
    0: customerName,
    1: setCustomerName
  } = Object(external_react_["useState"])('');
  const {
    0: customerEmail,
    1: setCustomerEmail
  } = Object(external_react_["useState"])('');
  const {
    0: customerPhone,
    1: setCustomerPhone
  } = Object(external_react_["useState"])('');
  const {
    0: contactTime,
    1: setContactTime
  } = Object(external_react_["useState"])('');
  const {
    0: contactMethod,
    1: setContactMethod
  } = Object(external_react_["useState"])('');
  const {
    0: message,
    1: setMessage
  } = Object(external_react_["useState"])('');
  const {
    0: mailSent,
    1: setMailSent
  } = Object(external_react_["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(null);

  const handleContactTime = e => setContactTime(e.target.value);

  const handleContactMethod = e => setContactMethod(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();
    external_axios_default()({
      method: 'post',
      url: `${API_PATH}`,
      headers: {
        'content-type': 'application/json'
      },
      data: {
        customerName,
        customerEmail,
        customerPhone,
        contactTime,
        contactMethod,
        message
      }
    }).then(result => {
      setMailSent(result.data.sent), external_sweetalert_default()("1-UP!", "Thank you for the message. Our response is not in another castle but coming in the next couple days.", "success");
    }).catch(error => external_sweetalert_default()("Uh oh!", "Something went wrong", "error"));
  };

  return __jsx(external_reactstrap_["Form"], {
    className: "form",
    onSubmit: e => handleFormSubmit(e)
  }, __jsx(external_reactstrap_["Row"], null, __jsx(external_reactstrap_["Col"], null, __jsx("h6", {
    className: "text-center"
  }, __jsx("a", {
    href: "mailto:contact@galacticblue.net"
  }, "contact us today!")))), __jsx(external_reactstrap_["Row"], null, __jsx(external_reactstrap_["Col"], {
    md: "6"
  }, __jsx(external_reactstrap_["FormGroup"], null, __jsx(external_reactstrap_["Label"], {
    for: "customerName"
  }, "Name"), __jsx(external_reactstrap_["Input"], {
    type: "text",
    name: "customerName",
    id: "customerName",
    bsSize: "lg",
    placeholder: "Please Enter a Name",
    required: true,
    value: customerName,
    onChange: e => setCustomerName(e.target.value)
  }), __jsx(external_reactstrap_["FormFeedback"], null, "Name is required to submit form"))), __jsx(external_reactstrap_["Col"], {
    md: "6"
  }, __jsx(external_reactstrap_["FormGroup"], null, __jsx(external_reactstrap_["Label"], {
    for: "customerEmail"
  }, "Email"), __jsx(external_reactstrap_["Input"], {
    type: "email",
    name: "customerEmail",
    id: "customerEmail",
    bsSize: "lg",
    placeholder: "Please Enter an Email",
    required: true,
    value: customerEmail,
    onChange: e => setCustomerEmail(e.target.value)
  }), __jsx(external_reactstrap_["FormFeedback"], null, "Please enter a valid email address to submit form")))), __jsx(external_reactstrap_["Row"], null, __jsx(external_reactstrap_["Col"], {
    md: "6"
  }, __jsx(external_reactstrap_["FormGroup"], null, __jsx(external_reactstrap_["Label"], {
    for: "customerPhone"
  }, "Phone"), __jsx(external_reactstrap_["Input"], {
    type: "phone",
    name: "customerPhone",
    id: "customerPhone",
    bsSize: "lg",
    placeholder: "Please Enter a Phone Number",
    value: customerPhone,
    onChange: e => setCustomerPhone(e.target.value)
  })), __jsx("h4", null, "Preferred Time to Contact You?"), __jsx(external_reactstrap_["FormGroup"], {
    check: true
  }, __jsx(external_reactstrap_["Label"], {
    check: true
  }, __jsx(external_reactstrap_["Input"], {
    type: "radio",
    name: "timeRadio",
    value: "day",
    checked: contactTime === 'day',
    onChange: handleContactTime
  }), ' ', "\xA0\xA0", __jsx("span", null, "Day"))), __jsx(external_reactstrap_["FormGroup"], {
    check: true
  }, __jsx(external_reactstrap_["Label"], {
    check: true
  }, __jsx(external_reactstrap_["Input"], {
    type: "radio",
    name: "timeRadio",
    value: "afternoon",
    checked: contactTime === 'afternoon',
    onChange: handleContactTime
  }), ' ', "\xA0\xA0", __jsx("span", null, "Afternoon"))), __jsx(external_reactstrap_["FormGroup"], {
    check: true
  }, __jsx(external_reactstrap_["Label"], {
    check: true
  }, __jsx(external_reactstrap_["Input"], {
    type: "radio",
    name: "timeRadio",
    value: "evening",
    checked: contactTime === 'evening',
    onChange: handleContactTime
  }), ' ', "\xA0\xA0", __jsx("span", null, "Evening"))), __jsx("h4", null, "Which Way Do You Prefer We Contact You?"), __jsx(external_reactstrap_["FormGroup"], {
    check: true
  }, __jsx(external_reactstrap_["Label"], {
    check: true
  }, __jsx(external_reactstrap_["Input"], {
    type: "radio",
    name: "contactRadio",
    value: "email",
    checked: contactMethod === 'email',
    onChange: handleContactMethod
  }), ' ', "\xA0\xA0", __jsx("span", null, "Email"))), __jsx(external_reactstrap_["FormGroup"], {
    check: true
  }, __jsx(external_reactstrap_["Label"], {
    check: true
  }, __jsx(external_reactstrap_["Input"], {
    type: "radio",
    name: "contactRadio",
    value: "phone",
    checked: contactMethod === 'phone',
    onChange: handleContactMethod
  }), ' ', "\xA0\xA0", __jsx("span", null, "Phone")))), __jsx(external_reactstrap_["Col"], {
    md: "6"
  }, __jsx(external_reactstrap_["FormGroup"], null, __jsx(external_reactstrap_["Label"], {
    for: "messageArea"
  }, "Message"), __jsx(external_reactstrap_["Input"], {
    type: "textarea",
    name: "messageArea",
    id: "messageArea",
    bsSize: "lg",
    style: {
      height: '200px'
    },
    placeholder: "Please Leave a Message, a Comment, a Compliment, or a Suggestion",
    value: message,
    onChange: e => setMessage(e.target.value)
  })), __jsx(external_reactstrap_["Button"], {
    color: "primary"
  }, "Submit"), ' ')));
};

/* harmony default export */ var Form = (ContactForm);
// CONCATENATED MODULE: ./pages/contact.js
var contact_jsx = external_react_default.a.createElement;




const Contact = () => contact_jsx("div", null, contact_jsx(external_reactstrap_["Jumbotron"], {
  className: "jumbo-blk"
}, contact_jsx("h1", null, "Contact GAMEstream")), contact_jsx(external_reactstrap_["Container"], null, contact_jsx(external_reactstrap_["Row"], null, contact_jsx(external_reactstrap_["Col"], null, contact_jsx(Form, null)))));

/* harmony default export */ var contact = __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "HmCi":
/***/ (function(module, exports) {

module.exports = require("sweetalert");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });