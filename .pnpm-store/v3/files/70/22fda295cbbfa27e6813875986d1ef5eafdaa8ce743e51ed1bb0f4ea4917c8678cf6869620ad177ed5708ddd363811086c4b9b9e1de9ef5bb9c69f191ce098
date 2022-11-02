"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionTestConstant = exports.type = void 0;
const test_1 = require("../test");
const node_type_1 = require("../../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_test_constant');
class TwingNodeExpressionTestConstant extends test_1.TwingNodeExpressionTest {
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .raw('(')
            .subcompile(this.getNode('node'))
            .raw(' === this.constant(')
            .subcompile(this.getNode('arguments').getNode(0));
        if (this.getNode('arguments').hasNode(1)) {
            compiler
                .raw(', ')
                .subcompile(this.getNode('arguments').getNode(1));
        }
        compiler.raw('))');
    }
}
exports.TwingNodeExpressionTestConstant = TwingNodeExpressionTestConstant;
