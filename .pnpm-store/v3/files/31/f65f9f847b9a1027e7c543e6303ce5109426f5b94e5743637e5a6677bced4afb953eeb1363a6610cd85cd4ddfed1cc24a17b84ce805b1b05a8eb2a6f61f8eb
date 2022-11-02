import { TwingNode } from "../node";
import { TwingNodeType } from "../node-type";
export const type = new TwingNodeType('inline_print');
export class TwingNodeInlinePrint extends TwingNode {
    constructor(node, lineno, columnno, tag = null) {
        super(new Map([['node', node]]), new Map(), lineno, columnno, tag);
    }
    get type() {
        return type;
    }
    compile(compiler) {
        compiler
            .raw('outputBuffer.echo(')
            .subcompile(this.getNode('node'))
            .raw(')');
    }
}
