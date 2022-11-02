"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionBinaryEndsWith = exports.type = void 0;
const binary_1 = require("../binary");
const node_type_1 = require("../../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_binary_ends_with');
class TwingNodeExpressionBinaryEndsWith extends binary_1.TwingNodeExpressionBinary {
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .raw('await (async () => {')
            .raw(`let left = `)
            .subcompile(this.getNode('left'))
            .raw('; ')
            .raw(`let right = `)
            .subcompile(this.getNode('right'))
            .raw('; ')
            .raw(`return typeof left === 'string' && typeof right === 'string' && (right.length < 1 || left.endsWith(right));`)
            .raw('})()');
    }
}
exports.TwingNodeExpressionBinaryEndsWith = TwingNodeExpressionBinaryEndsWith;
