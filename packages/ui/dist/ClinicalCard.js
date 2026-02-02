"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ClinicalCard = function (_a) {
    var children = _a.children, style = _a.style;
    return ((0, jsx_runtime_1.jsx)("div", { style: __assign({ background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px 0 rgba(41, 198, 177, 0.08)', padding: 24 }, style), children: children }));
};
exports.default = ClinicalCard;
