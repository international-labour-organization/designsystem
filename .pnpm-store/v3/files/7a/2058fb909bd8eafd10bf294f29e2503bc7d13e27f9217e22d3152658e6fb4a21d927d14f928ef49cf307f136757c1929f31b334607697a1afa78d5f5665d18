import { TwingNode } from "../node";
import { TwingNodeType } from "../node-type";
export const type = new TwingNodeType('body');
/**
 * Represents a body node.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export class TwingNodeBody extends TwingNode {
    constructor(nodes = new Map(), attributes = new Map(), lineno = 0, columnno = 0, tag = null) {
        super(nodes, attributes, lineno, columnno, tag);
    }
    get type() {
        return type;
    }
}
