"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionBinaryLessEqual = exports.type = void 0;
const binary_1 = require("../binary");
const node_type_1 = require("../../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_binary_less_equal');
class TwingNodeExpressionBinaryLessEqual extends binary_1.TwingNodeExpressionBinary {
    get type() {
        return exports.type;
    }
    operator(compiler) {
        return compiler.raw('<=');
    }
}
exports.TwingNodeExpressionBinaryLessEqual = TwingNodeExpressionBinaryLessEqual;
