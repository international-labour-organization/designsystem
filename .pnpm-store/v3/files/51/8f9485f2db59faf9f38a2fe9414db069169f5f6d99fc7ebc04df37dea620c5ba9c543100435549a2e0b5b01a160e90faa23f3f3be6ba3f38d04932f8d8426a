import { TwingNodeExpression } from "../expression";
import { TwingNodeType } from "../../node-type";
export const type = new TwingNodeType('expression_parent');
export class TwingNodeExpressionParent extends TwingNodeExpression {
    constructor(name, lineno) {
        let attributes = new Map();
        attributes.set('output', false);
        attributes.set('name', name);
        super(new Map(), attributes, lineno);
    }
    get type() {
        return type;
    }
    compile(compiler) {
        let name = this.getAttribute('name');
        compiler
            .raw(`await this.traceableRenderParentBlock(${this.getTemplateLine()}, this.source)(`)
            .string(name)
            .raw(', context, outputBuffer, blocks)');
    }
}
