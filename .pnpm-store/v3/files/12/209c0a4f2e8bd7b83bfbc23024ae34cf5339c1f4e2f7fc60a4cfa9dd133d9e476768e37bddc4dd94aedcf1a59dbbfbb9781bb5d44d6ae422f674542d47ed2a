import { TwingNode } from "../node";
import { TwingNodeType } from "../node-type";
export const type = new TwingNodeType('flush');
export class TwingNodeFlush extends TwingNode {
    constructor(lineno, columnno, tag) {
        super(new Map(), new Map(), lineno, columnno, tag);
    }
    get type() {
        return type;
    }
    compile(compiler) {
        compiler
            .write("outputBuffer.flush();\n");
    }
}
