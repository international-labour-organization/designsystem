"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionConditional = exports.type = void 0;
const expression_1 = require("../expression");
const node_type_1 = require("../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_conditional');
class TwingNodeExpressionConditional extends expression_1.TwingNodeExpression {
    constructor(expr1, expr2, expr3, lineno, columnno) {
        let nodes = new Map();
        nodes.set('expr1', expr1);
        nodes.set('expr2', expr2);
        nodes.set('expr3', expr3);
        super(nodes, new Map(), lineno, columnno);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .raw('((')
            .subcompile(this.getNode('expr1'))
            .raw(') ? (')
            .subcompile(this.getNode('expr2'))
            .raw(') : (')
            .subcompile(this.getNode('expr3'))
            .raw('))');
    }
}
exports.TwingNodeExpressionConditional = TwingNodeExpressionConditional;
