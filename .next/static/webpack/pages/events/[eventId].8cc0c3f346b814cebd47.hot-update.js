webpackHotUpdate_N_E("pages/events/[eventId]",{

/***/ "./pages/events/[eventId].js":
/*!***********************************!*\
  !*** ./pages/events/[eventId].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dummy-data */ \"./dummy-data.js\");\n/* harmony import */ var _components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/event-detail/event-summary */ \"./components/event-detail/event-summary.js\");\n/* harmony import */ var _components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/event-detail/event-logistics */ \"./components/event-detail/event-logistics.js\");\n/* harmony import */ var _components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/event-detail/event-content */ \"./components/event-detail/event-content.js\");\n\n\nvar _jsxFileName = \"/Users/satoshimatsushima/Desktop/tutorial/NextJS/nextjs-project-event-app/pages/events/[eventId].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction EventDetailPage() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var eventId = router.query.eventId;\n  var event = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_3__[\"getEventById\"])(eventId);\n\n  if (!event) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"No Event Found!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(EventSummary, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(EventList, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n\n_s(EventDetailPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = EventDetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventDetailPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"EventDetailPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1tldmVudElkXS5qcz9lNTBkIl0sIm5hbWVzIjpbIkV2ZW50RGV0YWlsUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImV2ZW50SWQiLCJxdWVyeSIsImV2ZW50IiwiZ2V0RXZlbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxHQUEyQjtBQUFBOztBQUN6QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsTUFBTUMsT0FBTyxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUQsT0FBN0I7QUFDQSxNQUFNRSxLQUFLLEdBQUdDLGdFQUFZLENBQUNILE9BQUQsQ0FBMUI7O0FBRUEsTUFBSSxDQUFDRSxLQUFMLEVBQVk7QUFDVix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMsOEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0dBakJRTCxlO1VBQ1FFLHFEOzs7S0FEUkYsZTtBQW1CTUEsOEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvW2V2ZW50SWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCB7IGdldEV2ZW50QnlJZCB9IGZyb20gJy4uLy4uL2R1bW15LWRhdGEnO1xuXG5pbXBvcnQgRWNlbnRTdW1tYXJ5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LXN1bW1hcnknO1xuaW1wb3J0IEVjZW50TG9naXN0aWNzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWxvZ2lzdGljcyc7XG5pbXBvcnQgRWNlbnRDb250ZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWNvbnRlbnQnO1xuaW1wb3J0IEV2ZW50Q29udGVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1jb250ZW50JztcblxuZnVuY3Rpb24gRXZlbnREZXRhaWxQYWdlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBldmVudElkID0gcm91dGVyLnF1ZXJ5LmV2ZW50SWQ7XG4gIGNvbnN0IGV2ZW50ID0gZ2V0RXZlbnRCeUlkKGV2ZW50SWQpO1xuXG4gIGlmICghZXZlbnQpIHtcbiAgICByZXR1cm4gPHA+Tm8gRXZlbnQgRm91bmQhPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEV2ZW50U3VtbWFyeSAvPlxuICAgICAgPEV2ZW50TGlzdCAvPlxuICAgICAgPEV2ZW50Q29udGVudCAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RGV0YWlsUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/[eventId].js\n");

/***/ })

})