(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = global || self, factory(global.TestRollup = {}, global.React));
}(this, (function (exports, React) { 'use strict';

    React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

    var _jsxFileName = "/Users/gmclean/Desktop/react_npm_prototype/src/lib/test_export.jsx";

    const Test1 = () => {
      return /*#__PURE__*/React.createElement("h1", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5,
          columnNumber: 1
        }
      }, "TEST");
    };

    var _jsxFileName$1 = "/Users/gmclean/Desktop/react_npm_prototype/src/lib/test_export_2.jsx";

    const Test = () => {
      return /*#__PURE__*/React.createElement("h1", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName$1,
          lineNumber: 5,
          columnNumber: 1
        }
      }, "TEST 2");
    };

    var _jsxFileName$2 = "/Users/gmclean/Desktop/react_npm_prototype/src/lib/text_export_3.jsx";

    const Test$1 = () => {
      return /*#__PURE__*/React.createElement("h1", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName$2,
          lineNumber: 5,
          columnNumber: 1
        }
      }, "TEST 3");
    };

    exports.Test1 = Test1;
    exports.Test2 = Test;
    exports.Test3 = Test$1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
