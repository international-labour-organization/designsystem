import { TwingNode } from "../node";
import { TwingNodeType } from "../node-type";
export const type = new TwingNodeType('spaceless');
export class TwingNodeSpaceless extends TwingNode {
    constructor(body, lineno, columnno, tag = 'spaceless') {
        let nodes = new Map();
        nodes.set('body', body);
        super(nodes, new Map(), lineno, columnno, tag);
        this.TwingNodeOutputInterfaceImpl = this;
    }
    get type() {
        return type;
    }
    compile(compiler) {
        compiler
            .addSourceMapEnter(this)
            .write("outputBuffer.start();\n")
            .subcompile(this.getNode('body'))
            .write("outputBuffer.echo(outputBuffer.getAndClean().replace(/>\\s+</g, '><').trim());\n")
            .addSourceMapLeave();
    }
}
