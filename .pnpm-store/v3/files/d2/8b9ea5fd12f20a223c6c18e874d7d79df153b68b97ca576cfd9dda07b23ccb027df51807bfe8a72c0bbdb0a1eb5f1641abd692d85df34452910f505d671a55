import { TwingNodeExpressionConditional } from "./conditional";
import { TwingNodeExpressionTestDefined } from "./test/defined";
import { TwingNodeExpressionUnaryNot } from "./unary/not";
import { TwingNode } from "../../node";
import { TwingNodeExpressionBinaryAnd } from "./binary/and";
import { TwingNodeExpressionTest } from "./test";
import { type as nameType } from "./name";
import { TwingNodeType } from "../../node-type";
export const type = new TwingNodeType('expression_null_coalesce');
export class TwingNodeExpressionNullCoalesce extends TwingNodeExpressionConditional {
    constructor(nodes, lineno, columno) {
        let left = nodes[0];
        let right = nodes[1];
        let test = new TwingNodeExpressionBinaryAnd([
            new TwingNodeExpressionTestDefined(left.clone(), 'defined', new TwingNode(), left.getTemplateLine(), left.getTemplateColumn()),
            new TwingNodeExpressionUnaryNot(new TwingNodeExpressionTest(left, 'null', new TwingNode(), left.getTemplateLine(), left.getTemplateColumn()), left.getTemplateLine(), left.getTemplateColumn())
        ], left.getTemplateLine(), left.getTemplateColumn());
        super(test, left, right, lineno, columno);
    }
    get type() {
        return type;
    }
    /**
     * null-coallesce node is also a conditional node.
     *
     * @param type
     */
    is(type) {
        return (type === super.type) || super.is(type);
    }
    compile(compiler) {
        if (this.getNode('expr2').is(nameType)) {
            this.getNode('expr2').setAttribute('always_defined', true);
        }
        return super.compile(compiler);
    }
}
