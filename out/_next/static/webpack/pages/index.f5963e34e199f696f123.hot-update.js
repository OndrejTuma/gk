/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/custom/Reference.jsx":
/*!*********************************************!*\
  !*** ./src/components/custom/Reference.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Reference; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/layout/Heading */ \"./src/components/layout/Heading.jsx\");\n/* harmony import */ var _components_custom_RoundImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/custom/RoundImage */ \"./src/components/custom/RoundImage.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/magnum/github/gk/src/components/custom/Reference.jsx\";\n\n\n\nfunction Reference(_ref) {\n  var imgUrl = _ref.imgUrl,\n      name = _ref.name,\n      description = _ref.description;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_custom_RoundImage__WEBPACK_IMPORTED_MODULE_3__.default, {\n      alt: name,\n      size: 204,\n      url: imgUrl\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Heading__WEBPACK_IMPORTED_MODULE_2__.default, {\n      className: 'bg-secondary px-10 py-1 mb-6 -mt-8 relative z-10',\n      level: 3,\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: 'mx-5',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: '-ml-8 text-4xl text-secondary font-secondary inline-block leading-4 align-bottom relative top-9',\n        children: \"\\\"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this), description, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: '-mr-8 text-4xl text-secondary font-secondary inline-block leading-4 align-bottom relative top-5',\n        children: \"\\\"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n_c = Reference;\n\nvar _c;\n\n$RefreshReg$(_c, \"Reference\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY3VzdG9tL1JlZmVyZW5jZS5qc3g/NThjMCJdLCJuYW1lcyI6WyJSZWZlcmVuY2UiLCJpbWdVcmwiLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULE9BQWtEO0FBQUEsTUFBN0JDLE1BQTZCLFFBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxXQUFlLFFBQWZBLFdBQWU7QUFDL0Qsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrRUFBRDtBQUFZLFNBQUcsRUFBRUQsSUFBakI7QUFBdUIsVUFBSSxFQUFFLEdBQTdCO0FBQWtDLFNBQUcsRUFBRUQ7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsK0RBQUQ7QUFBUyxlQUFTLEVBQUUsa0RBQXBCO0FBQXdFLFdBQUssRUFBRSxDQUEvRTtBQUFBLGdCQUFtRkM7QUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBRyxlQUFTLEVBQUUsTUFBZDtBQUFBLDhCQUNFO0FBQU0saUJBQVMsRUFBRSxpR0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHQyxXQUZILGVBR0U7QUFBTSxpQkFBUyxFQUFFLGlHQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7S0FadUJILFMiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b20vUmVmZXJlbmNlLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWRpbmcgZnJvbSAnQGNvbXBvbmVudHMvbGF5b3V0L0hlYWRpbmcnXG5pbXBvcnQgUm91bmRJbWFnZSBmcm9tICdAY29tcG9uZW50cy9jdXN0b20vUm91bmRJbWFnZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVmZXJlbmNlKHsgaW1nVXJsLCBuYW1lLCBkZXNjcmlwdGlvbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxSb3VuZEltYWdlIGFsdD17bmFtZX0gc2l6ZT17MjA0fSB1cmw9e2ltZ1VybH0vPlxuICAgICAgPEhlYWRpbmcgY2xhc3NOYW1lPXsnYmctc2Vjb25kYXJ5IHB4LTEwIHB5LTEgbWItNiAtbXQtOCByZWxhdGl2ZSB6LTEwJ30gbGV2ZWw9ezN9PntuYW1lfTwvSGVhZGluZz5cbiAgICAgIDxwIGNsYXNzTmFtZT17J214LTUnfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnLW1sLTggdGV4dC00eGwgdGV4dC1zZWNvbmRhcnkgZm9udC1zZWNvbmRhcnkgaW5saW5lLWJsb2NrIGxlYWRpbmctNCBhbGlnbi1ib3R0b20gcmVsYXRpdmUgdG9wLTknfT5cIjwvc3Bhbj5cbiAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyctbXItOCB0ZXh0LTR4bCB0ZXh0LXNlY29uZGFyeSBmb250LXNlY29uZGFyeSBpbmxpbmUtYmxvY2sgbGVhZGluZy00IGFsaWduLWJvdHRvbSByZWxhdGl2ZSB0b3AtNSd9PlwiPC9zcGFuPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/custom/Reference.jsx\n");

/***/ })

});