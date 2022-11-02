"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionBinarySub = exports.type = void 0;
const binary_1 = require("../binary");
const node_type_1 = require("../../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_binary_sub');
class TwingNodeExpressionBinarySub extends binary_1.TwingNodeExpressionBinary {
    get type() {
        return exports.type;
    }
    operator(compiler) {
        return compiler.raw('-');
    }
}
exports.TwingNodeExpressionBinarySub = TwingNodeExpressionBinarySub;
