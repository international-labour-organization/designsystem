import { TwingNodeExpression } from "../expression";
export class TwingNodeExpressionUnary extends TwingNodeExpression {
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
