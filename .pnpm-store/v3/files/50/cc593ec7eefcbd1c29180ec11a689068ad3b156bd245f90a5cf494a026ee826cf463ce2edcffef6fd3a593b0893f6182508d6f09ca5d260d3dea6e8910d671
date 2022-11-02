"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionHash = exports.type = void 0;
const array_1 = require("./array");
const node_type_1 = require("../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_hash');
class TwingNodeExpressionHash extends array_1.TwingNodeExpressionArray {
    get type() {
        return exports.type;
    }
    /**
     * hash node is also an array node.
     *
     * @param type
     */
    is(type) {
        return (type === super.type) || super.is(type);
    }
    compile(compiler) {
        compiler
            .raw('new Map([');
        let first = true;
        for (let pair of this.getKeyValuePairs()) {
            if (!first) {
                compiler.raw(', ');
            }
            first = false;
            compiler
                .raw('[')
                .subcompile(pair.key)
                .raw(', ')
                .subcompile(pair.value)
                .raw(']');
        }
        compiler.raw('])');
    }
}
exports.TwingNodeExpressionHash = TwingNodeExpressionHash;
