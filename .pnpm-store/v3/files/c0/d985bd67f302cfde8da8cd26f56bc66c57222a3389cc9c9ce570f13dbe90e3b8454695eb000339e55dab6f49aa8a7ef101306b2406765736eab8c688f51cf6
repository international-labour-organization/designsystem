"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionUnaryNeg = exports.type = void 0;
const unary_1 = require("../unary");
const node_type_1 = require("../../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_unary_neg');
class TwingNodeExpressionUnaryNeg extends unary_1.TwingNodeExpressionUnary {
    get type() {
        return exports.type;
    }
    operator(compiler) {
        return compiler.raw('-');
    }
}
exports.TwingNodeExpressionUnaryNeg = TwingNodeExpressionUnaryNeg;
