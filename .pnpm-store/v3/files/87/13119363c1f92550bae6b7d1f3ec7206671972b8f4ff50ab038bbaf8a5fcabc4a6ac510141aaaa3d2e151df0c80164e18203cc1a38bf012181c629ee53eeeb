"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionBinaryAdd = exports.type = void 0;
const binary_1 = require("../binary");
const node_type_1 = require("../../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_binary_add');
class TwingNodeExpressionBinaryAdd extends binary_1.TwingNodeExpressionBinary {
    operator(compiler) {
        return compiler.raw('+');
    }
    get type() {
        return exports.type;
    }
}
exports.TwingNodeExpressionBinaryAdd = TwingNodeExpressionBinaryAdd;
