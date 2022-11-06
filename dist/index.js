'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var CustomCounter = function (_a) {
    var initialValue = _a.initialValue;
    var _b = react.useState(initialValue || 0), value = _b[0], setValue = _b[1];
    var increment = function () { return setValue(function (prevValue) { return prevValue + 1; }); };
    var decrement = function () { return setValue(function (prevValue) { return prevValue - 1; }); };
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("button", __assign({ onClick: decrement }, { children: "-" })), value, jsxRuntime.jsx("button", __assign({ onClick: increment }, { children: "+" }))] }));
};

var Button = function (_a) {
    var onClick = _a.onClick, text = _a.text;
    return jsxRuntime.jsx("button", __assign({ onClick: onClick }, { children: text }));
};

exports.Button = Button;
exports.CustomCounter = CustomCounter;
//# sourceMappingURL=index.js.map
