import { TwingNodeExpression } from "../expression";
export class TwingNodeExpressionBinary extends TwingNodeExpression {
    constructor(nodes, lineno, columno) {
        super(new Map([
            ['left', nodes[0]],
            ['right', nodes[1]]
        ]), new Map(), lineno, columno);
    }
    compile(compiler) {
        compiler
            .raw('(')
            .subcompile(this.getNode('left'))
            .raw(' ');
        this.operator(compiler);
        compiler
            .raw(' ')
            .subcompile(this.getNode('right'))
            .raw(')');
    }
    /**
     *
     * @param {TwingCompiler} compiler
     * @returns {TwingCompiler}
     */
    operator(compiler) {
        return compiler;
    }
}
