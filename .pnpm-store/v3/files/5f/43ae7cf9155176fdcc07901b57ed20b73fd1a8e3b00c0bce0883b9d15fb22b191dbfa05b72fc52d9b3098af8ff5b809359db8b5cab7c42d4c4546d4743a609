import { TwingNode } from "../node";
import { TwingNodeType } from "../node-type";
export const type = new TwingNodeType('line');
export class TwingNodeLine extends TwingNode {
    constructor(data, lineno, columnno, tag) {
        super(new Map(), new Map([['data', data]]), lineno, columnno, tag);
    }
    get type() {
        return type;
    }
    compile(compiler) {
        // noop
    }
}
