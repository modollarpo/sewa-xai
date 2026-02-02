"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ClinicalModal = function (_a) {
    var open = _a.open, onClose = _a.onClose, children = _a.children;
    if (!open)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", { style: { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.2)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }, children: (0, jsx_runtime_1.jsxs)("div", { style: { background: '#fff', borderRadius: 24, padding: 32, minWidth: 320, boxShadow: '0 8px 32px 0 rgba(13, 79, 61, 0.12)' }, children: [(0, jsx_runtime_1.jsx)("button", { onClick: onClose, style: { float: 'right', background: 'none', border: 'none', fontSize: 20, cursor: 'pointer' }, children: "\u00D7" }), (0, jsx_runtime_1.jsx)("div", { style: { clear: 'both' } }), children] }) }));
};
exports.default = ClinicalModal;
