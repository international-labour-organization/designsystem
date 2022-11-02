import { TwingNodeExpressionBinary } from "../binary";
import { TwingNodeType } from "../../../node-type";
export const type = new TwingNodeType('expression_binary_mod');
export class TwingNodeExpressionBinaryMod extends TwingNodeExpressionBinary {
    get type() {
        return type;
    }
    operator(compiler) {
        return compiler.raw('%');
    }
}
