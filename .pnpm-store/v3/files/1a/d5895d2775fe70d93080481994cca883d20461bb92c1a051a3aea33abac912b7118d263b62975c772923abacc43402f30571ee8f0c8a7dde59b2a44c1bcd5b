import { TwingNode } from "../node";
import { TwingNodeType } from "../node-type";
export const type = new TwingNodeType('comment');
export class TwingNodeComment extends TwingNode {
    constructor(data, lineno, columnno) {
        super(new Map(), new Map([['data', data]]), lineno, columnno);
    }
    get type() {
        return type;
    }
    compile(compiler) {
        // noop
    }
}
