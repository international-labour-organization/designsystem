"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionBinaryDiv = exports.type = void 0;
const binary_1 = require("../binary");
const node_type_1 = require("../../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_binary_div');
class TwingNodeExpressionBinaryDiv extends binary_1.TwingNodeExpressionBinary {
    operator(compiler) {
        return compiler.raw('/');
    }
    get type() {
        return exports.type;
    }
}
exports.TwingNodeExpressionBinaryDiv = TwingNodeExpressionBinaryDiv;
