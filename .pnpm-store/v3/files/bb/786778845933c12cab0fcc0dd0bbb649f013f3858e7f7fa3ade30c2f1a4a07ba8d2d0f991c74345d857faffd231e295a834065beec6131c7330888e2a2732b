"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionBinaryFloorDiv = exports.type = void 0;
const div_1 = require("./div");
const node_type_1 = require("../../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_binary_floor_div');
class TwingNodeExpressionBinaryFloorDiv extends div_1.TwingNodeExpressionBinaryDiv {
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler.raw('Math.floor(');
        super.compile(compiler);
        compiler.raw(')');
    }
    operator(compiler) {
        return compiler.raw('/');
    }
}
exports.TwingNodeExpressionBinaryFloorDiv = TwingNodeExpressionBinaryFloorDiv;
