"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var tiny_invariant_1 = tslib_1.__importDefault(require("tiny-invariant"));
function useRequiredContext(Context) {
    var value = react_1.useContext(Context);
    tiny_invariant_1.default(value, 'Could not find context value');
    return value;
}
exports.default = useRequiredContext;
