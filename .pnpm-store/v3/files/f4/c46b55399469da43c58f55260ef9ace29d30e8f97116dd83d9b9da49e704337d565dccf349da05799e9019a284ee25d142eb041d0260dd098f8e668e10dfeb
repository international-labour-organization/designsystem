"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
function Host(_a) {
    var children = _a.children;
    return react_1.default.createElement(react_1.default.Fragment, null, children());
}
function toSafeElement(_a) {
    var getNode = _a.getNode, copies = _a.copies;
    var nodes = Array.from({ length: copies }, function (_, key) { return (react_1.default.createElement(Host, { key: key }, getNode)); });
    return react_1.default.createElement(react_1.default.Fragment, null, nodes);
}
exports.default = toSafeElement;
