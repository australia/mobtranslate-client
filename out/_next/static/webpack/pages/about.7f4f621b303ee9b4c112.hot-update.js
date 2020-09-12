webpackHotUpdate_N_E("pages/about",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/ajax/repos/australia/mobtranslate-client/pages/about.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar About = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(About, _Component);\n\n  var _super = _createSuper(About);\n\n  function About(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, About);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"onTextChange\", function (ev) {\n      var value = ev.target.value; // this.debouncedTextChange.cancel();\n\n      console.log(\"trying to translate\", value);\n\n      _this.setState({\n        text: value\n      }, function () {\n        _this.fetchWordData();\n      }); // this.debouncedTextChange = _.debounce(this.fetchWordData, 1000);\n      // axios request\n      // update state\n\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"fetchWordData\", function () {\n      var text = _this.state.text;\n      console.log(\"fetching translation data\", text); // Make a request for a user with a given ID\n\n      var that = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this);\n\n      axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(\"http://localhost:4000/translate\", {\n        text: text\n      }).then(function (response) {\n        // handle success\n        // this.debouncedTextChange.cancel();\n        console.log(response);\n        that.setState({\n          translatedText: response.data.translatedText\n        });\n      })[\"catch\"](function (error) {\n        // handle error\n        console.log(\" no idea\", error);\n      });\n    });\n\n    _this.state = {\n      text: \"\",\n      translatedText: \"\"\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(About, [{\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          text = _this$state.text,\n          translatedText = _this$state.translatedText;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 7\n        }\n      }, __jsx(\"h3\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 9\n        }\n      }, \"How you speak\"), __jsx(\"textarea\", {\n        onChange: this.onTextChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 9\n        }\n      }, text), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }\n      }), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 9\n        }\n      }), __jsx(\"h3\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 9\n        }\n      }, \"Translated\"), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 9\n        }\n      }), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 9\n        }\n      }, translatedText));\n    }\n  }]);\n\n  return About;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanM/MjZlYyJdLCJuYW1lcyI6WyJBYm91dCIsInByb3BzIiwiZXYiLCJ2YWx1ZSIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInRleHQiLCJmZXRjaFdvcmREYXRhIiwic3RhdGUiLCJ0aGF0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwidHJhbnNsYXRlZFRleHQiLCJkYXRhIiwiZXJyb3IiLCJvblRleHRDaGFuZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBQ01BLEs7Ozs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLHVOQVFKLFVBQUNDLEVBQUQsRUFBUTtBQUFBLFVBQ2JDLEtBRGEsR0FDSEQsRUFBRSxDQUFDRSxNQURBLENBQ2JELEtBRGEsRUFFckI7O0FBQ0FFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DSCxLQUFuQzs7QUFDQSxZQUFLSSxRQUFMLENBQWM7QUFBRUMsWUFBSSxFQUFFTDtBQUFSLE9BQWQsRUFBK0IsWUFBTTtBQUNuQyxjQUFLTSxhQUFMO0FBQ0QsT0FGRCxFQUpxQixDQU9yQjtBQUNBO0FBQ0E7O0FBQ0QsS0FsQmtCOztBQUFBLHdOQW9CSCxZQUFNO0FBQUEsVUFDWkQsSUFEWSxHQUNILE1BQUtFLEtBREYsQ0FDWkYsSUFEWTtBQUVwQkgsYUFBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNFLElBQXpDLEVBRm9CLENBR3BCOztBQUNBLFVBQU1HLElBQUksR0FBRyx1R0FBYjs7QUFDQUMsa0RBQUssQ0FDRkMsSUFESCxvQ0FDMkM7QUFBRUwsWUFBSSxFQUFKQTtBQUFGLE9BRDNDLEVBRUdNLElBRkgsQ0FFUSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3hCO0FBRUE7QUFFQVYsZUFBTyxDQUFDQyxHQUFSLENBQVlTLFFBQVo7QUFDQUosWUFBSSxDQUFDSixRQUFMLENBQWM7QUFBRVMsd0JBQWMsRUFBRUQsUUFBUSxDQUFDRSxJQUFULENBQWNEO0FBQWhDLFNBQWQ7QUFDRCxPQVRILFdBVVMsVUFBVUUsS0FBVixFQUFpQjtBQUN0QjtBQUNBYixlQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCWSxLQUF4QjtBQUNELE9BYkg7QUFjRCxLQXZDa0I7O0FBRWpCLFVBQUtSLEtBQUwsR0FBYTtBQUNYRixVQUFJLEVBQUUsRUFESztBQUVYUSxvQkFBYyxFQUFFO0FBRkwsS0FBYjtBQUZpQjtBQU1sQjs7Ozs2QkFtQ1E7QUFBQSx3QkFDMEIsS0FBS04sS0FEL0I7QUFBQSxVQUNDRixJQURELGVBQ0NBLElBREQ7QUFBQSxVQUNPUSxjQURQLGVBQ09BLGNBRFA7QUFFUCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBVSxnQkFBUSxFQUFFLEtBQUtHLFlBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBd0NYLElBQXhDLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJUSxjQUFKLENBUEYsQ0FERjtBQVdEOzs7O0VBdkRpQkksK0M7O0FBMERMcEIsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmNsYXNzIEFib3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6IFwiXCIsXG4gICAgICB0cmFuc2xhdGVkVGV4dDogXCJcIixcbiAgICB9O1xuICB9XG5cbiAgb25UZXh0Q2hhbmdlID0gKGV2KSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZXYudGFyZ2V0O1xuICAgIC8vIHRoaXMuZGVib3VuY2VkVGV4dENoYW5nZS5jYW5jZWwoKTtcbiAgICBjb25zb2xlLmxvZyhcInRyeWluZyB0byB0cmFuc2xhdGVcIiwgdmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiB2YWx1ZSB9LCAoKSA9PiB7XG4gICAgICB0aGlzLmZldGNoV29yZERhdGEoKTtcbiAgICB9KTtcbiAgICAvLyB0aGlzLmRlYm91bmNlZFRleHRDaGFuZ2UgPSBfLmRlYm91bmNlKHRoaXMuZmV0Y2hXb3JkRGF0YSwgMTAwMCk7XG4gICAgLy8gYXhpb3MgcmVxdWVzdFxuICAgIC8vIHVwZGF0ZSBzdGF0ZVxuICB9O1xuXG4gIGZldGNoV29yZERhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hpbmcgdHJhbnNsYXRpb24gZGF0YVwiLCB0ZXh0KTtcbiAgICAvLyBNYWtlIGEgcmVxdWVzdCBmb3IgYSB1c2VyIHdpdGggYSBnaXZlbiBJRFxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3RyYW5zbGF0ZWAsIHsgdGV4dCB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vIGhhbmRsZSBzdWNjZXNzXG5cbiAgICAgICAgLy8gdGhpcy5kZWJvdW5jZWRUZXh0Q2hhbmdlLmNhbmNlbCgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgdGhhdC5zZXRTdGF0ZSh7IHRyYW5zbGF0ZWRUZXh0OiByZXNwb25zZS5kYXRhLnRyYW5zbGF0ZWRUZXh0IH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIG5vIGlkZWFcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGV4dCwgdHJhbnNsYXRlZFRleHQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5Ib3cgeW91IHNwZWFrPC9oMz5cbiAgICAgICAgPHRleHRhcmVhIG9uQ2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZX0+e3RleHR9PC90ZXh0YXJlYT5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aDM+VHJhbnNsYXRlZDwvaDM+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cD57dHJhbnNsYXRlZFRleHR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ })

})