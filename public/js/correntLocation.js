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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/react/correntLocation.js":
/*!***********************************************!*\
  !*** ./resources/js/react/correntLocation.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\wamp\\www\\souladvisor\\work\\resources\\js\\react\\correntLocation.js: Unexpected token (40:15)\n\n\u001b[0m \u001b[90m 38 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 39 | \u001b[39m    render () {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 40 | \u001b[39m        \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mbutton\u001b[39m onClick\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgetLocation}\u001b[33m>\u001b[39m\u001b[33mClick\u001b[39m \u001b[33mMe\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mbutton\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 41 | \u001b[39m    }\u001b[0m\n\u001b[0m \u001b[90m 42 | \u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m 43 | \u001b[39m\u001b[0m\n    at Parser._raise (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:723:17)\n    at Parser.raiseWithData (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:716:17)\n    at Parser.raise (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:710:17)\n    at Parser.unexpected (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:8606:16)\n    at Parser.parseExprAtom (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:9865:20)\n    at Parser.parseExprSubscripts (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:9451:23)\n    at Parser.parseMaybeUnary (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:9431:21)\n    at Parser.parseExprOps (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:9301:23)\n    at Parser.parseMaybeConditional (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:9274:23)\n    at Parser.parseMaybeAssign (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:9229:21)\n    at Parser.parseExpression (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:9181:23)\n    at Parser.parseReturnStatement (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:11249:28)\n    at Parser.parseStatementContent (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:10930:21)\n    at Parser.parseStatement (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:10882:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:11456:25)\n    at Parser.parseBlockBody (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:11443:10)\n    at Parser.parseBlock (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:11427:10)\n    at Parser.parseFunctionBody (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:10435:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:10418:10)\n    at Parser.parseMethod (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:10380:10)\n    at Parser.pushClassMethod (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:11869:30)\n    at Parser.parseClassMemberWithIsStatic (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:11786:12)\n    at Parser.parseClassMember (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:11728:10)\n    at withTopicForbiddingContext (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:11683:14)\n    at Parser.withTopicForbiddingContext (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:10757:14)\n    at Parser.parseClassBody (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:11660:10)\n    at Parser.parseClass (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:11634:22)\n    at Parser.parseStatementContent (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:10924:21)\n    at Parser.parseStatement (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:10882:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:11456:25)\n    at Parser.parseBlockBody (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:11443:10)\n    at Parser.parseTopLevel (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:10813:10)\n    at Parser.parse (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:12425:10)\n    at parse (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\parser\\lib\\index.js:12476:38)\n    at parser (C:\\wamp\\www\\souladvisor\\work\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)");

/***/ }),

/***/ 1:
/*!*****************************************************!*\
  !*** multi ./resources/js/react/correntLocation.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp\www\souladvisor\work\resources\js\react\correntLocation.js */"./resources/js/react/correntLocation.js");


/***/ })

/******/ });