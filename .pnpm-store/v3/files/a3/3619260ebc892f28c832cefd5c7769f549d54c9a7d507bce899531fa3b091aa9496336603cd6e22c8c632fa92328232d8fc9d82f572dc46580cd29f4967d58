"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionBinaryMatches = exports.type = void 0;
const binary_1 = require("../binary");
const node_type_1 = require("../../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_binary_matches');
class TwingNodeExpressionBinaryMatches extends binary_1.TwingNodeExpressionBinary {
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .raw('this.parseRegExp(')
            .subcompile(this.getNode('right'))
            .raw(').test(')
            .subcompile(this.getNode('left'))
            .raw(')');
    }
}
exports.TwingNodeExpressionBinaryMatches = TwingNodeExpressionBinaryMatches;
