import { TwingNodeExpressionBinary } from "../binary";
import { TwingNodeType } from "../../../node-type";
export const type = new TwingNodeType('expression_binary_add');
export class TwingNodeExpressionBinaryAdd extends TwingNodeExpressionBinary {
    operator(compiler) {
        return compiler.raw('+');
    }
    get type() {
        return type;
    }
}
