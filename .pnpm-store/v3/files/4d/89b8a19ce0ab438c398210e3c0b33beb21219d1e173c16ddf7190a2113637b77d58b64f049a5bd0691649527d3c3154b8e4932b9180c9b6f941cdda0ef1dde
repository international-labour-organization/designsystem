import { TwingNode } from "../node";
import { TwingNodeType } from "../node-type";
export const type = new TwingNodeType('text');
export class TwingNodeText extends TwingNode {
    constructor(data, lineno, columnno, tag = null) {
        super(new Map(), new Map([['data', data]]), lineno, columnno, tag);
        this.TwingNodeOutputInterfaceImpl = this;
    }
    get type() {
        return type;
    }
    compile(compiler) {
        compiler
            .addSourceMapEnter(this)
            .write('outputBuffer.echo(')
            .string(this.getAttribute('data'))
            .raw(");\n")
            .addSourceMapLeave();
    }
}
