"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionBinaryConcat = exports.type = void 0;
const binary_1 = require("../binary");
const node_type_1 = require("../../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_binary_concat');
class TwingNodeExpressionBinaryConcat extends binary_1.TwingNodeExpressionBinary {
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .raw('(this.concatenate(')
            .subcompile(this.getNode('left'))
            .raw(', ')
            .subcompile(this.getNode('right'))
            .raw('))');
    }
}
exports.TwingNodeExpressionBinaryConcat = TwingNodeExpressionBinaryConcat;
