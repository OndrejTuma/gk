/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/custom/RoundImage.jsx":
/*!**********************************************!*\
  !*** ./src/components/custom/RoundImage.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RoundImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/magnum/github/gk/src/components/custom/RoundImage.jsx\";\n\n\n\nfunction RoundImage(_ref) {\n  var alt = _ref.alt,\n      className = _ref.className,\n      url = _ref.url,\n      size = _ref.size,\n      _ref$isWhite = _ref.isWhite,\n      isWhite = _ref$isWhite === void 0 ? false : _ref$isWhite,\n      _ref$isBig = _ref.isBig,\n      isBig = _ref$isBig === void 0 ? false : _ref$isBig;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'relative place-self-start inline-block p-2'),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('absolute w-full h-full left-0 top-0 z-10 bg-contain bg-no-repeat bg-center', {\n        'bg-frameYellow': !isWhite,\n        'bg-frameWhite': isWhite && !isBig,\n        'bg-frameWhiteBig': isWhite && isBig\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rounded-full leading-none', {\n        'bg-secondary': !isWhite,\n        'bg-white': isWhite\n      }),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n        src: url,\n        alt: alt,\n        width: size,\n        height: size,\n        className: 'rounded-full'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n_c = RoundImage;\n\nvar _c;\n\n$RefreshReg$(_c, \"RoundImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY3VzdG9tL1JvdW5kSW1hZ2UuanN4P2IwMTAiXSwibmFtZXMiOlsiUm91bmRJbWFnZSIsImFsdCIsImNsYXNzTmFtZSIsInVybCIsInNpemUiLCJpc1doaXRlIiwiaXNCaWciLCJjbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxPQUFtRjtBQUFBLE1BQTdEQyxHQUE2RCxRQUE3REEsR0FBNkQ7QUFBQSxNQUF4REMsU0FBd0QsUUFBeERBLFNBQXdEO0FBQUEsTUFBN0NDLEdBQTZDLFFBQTdDQSxHQUE2QztBQUFBLE1BQXhDQyxJQUF3QyxRQUF4Q0EsSUFBd0M7QUFBQSwwQkFBbENDLE9BQWtDO0FBQUEsTUFBbENBLE9BQWtDLDZCQUF4QixLQUF3QjtBQUFBLHdCQUFqQkMsS0FBaUI7QUFBQSxNQUFqQkEsS0FBaUIsMkJBQVQsS0FBUztBQUNoRyxzQkFDRTtBQUFRLGFBQVMsRUFBRUMsaURBQUUsQ0FBQ0wsU0FBRCxFQUFZLDRDQUFaLENBQXJCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVLLGlEQUFFLENBQUMsNEVBQUQsRUFBK0U7QUFDL0YsMEJBQWtCLENBQUNGLE9BRDRFO0FBRS9GLHlCQUFpQkEsT0FBTyxJQUFJLENBQUNDLEtBRmtFO0FBRy9GLDRCQUFvQkQsT0FBTyxJQUFJQztBQUhnRSxPQUEvRTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFLLGVBQVMsRUFBRUMsaURBQUUsQ0FBQywyQkFBRCxFQUE4QjtBQUM5Qyx3QkFBZ0IsQ0FBQ0YsT0FENkI7QUFFOUMsb0JBQVlBO0FBRmtDLE9BQTlCLENBQWxCO0FBQUEsNkJBS0UsOERBQUMsbURBQUQ7QUFDRSxXQUFHLEVBQUVGLEdBRFA7QUFFRSxXQUFHLEVBQUVGLEdBRlA7QUFHRSxhQUFLLEVBQUVHLElBSFQ7QUFJRSxjQUFNLEVBQUVBLElBSlY7QUFLRSxpQkFBUyxFQUFFO0FBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNCRDtLQXZCdUJKLFUiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b20vUm91bmRJbWFnZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb3VuZEltYWdlKHsgYWx0LCBjbGFzc05hbWUsIHVybCwgc2l6ZSwgaXNXaGl0ZSA9IGZhbHNlLCBpc0JpZyA9IGZhbHNlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCAncmVsYXRpdmUgcGxhY2Utc2VsZi1zdGFydCBpbmxpbmUtYmxvY2sgcC0yJyl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKCdhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIGxlZnQtMCB0b3AtMCB6LTEwIGJnLWNvbnRhaW4gYmctbm8tcmVwZWF0IGJnLWNlbnRlcicsIHtcbiAgICAgICAgJ2JnLWZyYW1lWWVsbG93JzogIWlzV2hpdGUsXG4gICAgICAgICdiZy1mcmFtZVdoaXRlJzogaXNXaGl0ZSAmJiAhaXNCaWcsXG4gICAgICAgICdiZy1mcmFtZVdoaXRlQmlnJzogaXNXaGl0ZSAmJiBpc0JpZyxcbiAgICAgIH0pfS8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oJ3JvdW5kZWQtZnVsbCBsZWFkaW5nLW5vbmUnLCB7XG4gICAgICAgICdiZy1zZWNvbmRhcnknOiAhaXNXaGl0ZSxcbiAgICAgICAgJ2JnLXdoaXRlJzogaXNXaGl0ZSxcbiAgICAgIH0pfT5cblxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e3VybH1cbiAgICAgICAgICBhbHQ9e2FsdH1cbiAgICAgICAgICB3aWR0aD17c2l6ZX1cbiAgICAgICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICAgICAgY2xhc3NOYW1lPXsncm91bmRlZC1mdWxsJ31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZmlndXJlPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/custom/RoundImage.jsx\n");

/***/ })

});