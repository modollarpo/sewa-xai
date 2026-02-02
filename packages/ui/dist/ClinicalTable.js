"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ClinicalTable = function (_a) {
    var columns = _a.columns, data = _a.data;
    return ((0, jsx_runtime_1.jsxs)("table", { style: { width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px 0 rgba(41, 198, 177, 0.08)' }, children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: columns.map(function (col) { return ((0, jsx_runtime_1.jsx)("th", { style: { textAlign: 'left', padding: 12, fontWeight: 700, background: '#FEF6ED', color: '#0D4F3D' }, children: col }, col)); }) }) }), (0, jsx_runtime_1.jsx)("tbody", { children: data.map(function (row, i) { return ((0, jsx_runtime_1.jsx)("tr", { style: { borderBottom: '1px solid #eee' }, children: columns.map(function (col) { return ((0, jsx_runtime_1.jsx)("td", { style: { padding: 12 }, children: row[col] }, col)); }) }, i)); }) })] }));
};
exports.default = ClinicalTable;
