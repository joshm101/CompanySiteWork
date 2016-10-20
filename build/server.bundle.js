/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// All JavaScript in here will be loaded server-side
	// Expose components globally so ReactJS.NET can use them
	var Components = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Components"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  // All the components you'd like to render server-side
	  DummyComponent: __webpack_require__(3),
	  Core: __webpack_require__(5)
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(4);

	var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){DummyComponent[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;DummyComponent.prototype=Object.create(____SuperProtoOf____Class0);DummyComponent.prototype.constructor=DummyComponent;DummyComponent.__superConstructor__=____Class0;function DummyComponent(){"use strict";if(____Class0!==null){____Class0.apply(this,arguments);}}
	  Object.defineProperty(DummyComponent.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
	    return (
	      React.createElement("div", {className: "dummyComponent"}, 
	        "Hello, world! I am a DummyComponent."
	      )
	    );
	  }});


	module.exports = DummyComponent;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(4);
	var DummyComponent = __webpack_require__(3)

	var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){Core[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;Core.prototype=Object.create(____SuperProtoOf____Class1);Core.prototype.constructor=Core;Core.__superConstructor__=____Class1;function Core(){"use strict";if(____Class1!==null){____Class1.apply(this,arguments);}}
	  Object.defineProperty(Core.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
	    return (
	      React.createElement("div", {className: "core"}, 
	        React.createElement(DummyComponent, null)
	      )
	    );
	  }});


	module.exports = Core;


/***/ }
/******/ ]);