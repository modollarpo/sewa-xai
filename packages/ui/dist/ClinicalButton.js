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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var variantStyles = {
    primary: {
        background: 'linear-gradient(90deg, #0D4F3D 0%, #29C6B1 100%)',
        color: '#fff',
        border: 'none',
    },
    warning: {
        background: '#FFD580',
        color: '#1A1A1A',
        border: 'none',
    },
    default: {
        background: '#fff',
        color: '#0D4F3D',
        border: '1px solid #0D4F3D',
    },
};
var ClinicalButton = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, style = _a.style, props = __rest(_a, ["variant", "style"]);
    return ((0, jsx_runtime_1.jsx)("button", __assign({ style: __assign(__assign({ borderRadius: 12, padding: '8px 20px', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 16, cursor: 'pointer' }, variantStyles[variant]), style) }, props)));
};
exports.default = ClinicalButton;
