import { TwingNode } from "../node";
import { TwingNodeType } from "../node-type";
export const type = new TwingNodeType('print');
export class TwingNodePrint extends TwingNode {
    constructor(expr, lineno, columnno, tag = null) {
        let nodes = new Map();
        nodes.set('expr', expr);
        super(nodes, new Map(), lineno, columnno, tag);
        this.TwingNodeOutputInterfaceImpl = this;
    }
    get type() {
        return type;
    }
    compile(compiler) {
        compiler
            .addSourceMapEnter(this)
            .write('outputBuffer.echo(')
            .subcompile(this.getNode('expr'))
            .raw(');\n')
            .addSourceMapLeave();
    }
}
