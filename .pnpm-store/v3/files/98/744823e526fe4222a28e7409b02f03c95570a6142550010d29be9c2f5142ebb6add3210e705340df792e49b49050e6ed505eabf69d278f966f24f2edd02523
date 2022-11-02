"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionUnary = void 0;
const expression_1 = require("../expression");
class TwingNodeExpressionUnary extends expression_1.TwingNodeExpression {
    constructor(expr, lineno, columno) {
        let nodes = new Map();
        nodes.set('node', expr);
        super(nodes, new Map(), lineno, columno);
    }
    compile(compiler) {
        this.operator(compiler);
        compiler
            .raw('(')
            .subcompile(this.getNode('node'))
            .raw(')');
    }
    operator(compiler) {
        return compiler;
    }
}
exports.TwingNodeExpressionUnary = TwingNodeExpressionUnary;
