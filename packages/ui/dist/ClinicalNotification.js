"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var colorMap = {
    info: '#29C6B1',
    warning: '#FFD580',
    error: '#e57373',
};
var ClinicalNotification = function (_a) {
    var message = _a.message, _b = _a.type, type = _b === void 0 ? 'info' : _b;
    return ((0, jsx_runtime_1.jsx)("div", { style: { background: colorMap[type], color: '#1A1A1A', padding: 12, borderRadius: 8, margin: '8px 0' }, children: message }));
};
exports.default = ClinicalNotification;
