import { TwingNodeExpressionUnary } from "../unary";
import { TwingNodeType } from "../../../node-type";
export const type = new TwingNodeType('expression_unary_neg');
export class TwingNodeExpressionUnaryNeg extends TwingNodeExpressionUnary {
    get type() {
        return type;
    }
    operator(compiler) {
        return compiler.raw('-');
    }
}
