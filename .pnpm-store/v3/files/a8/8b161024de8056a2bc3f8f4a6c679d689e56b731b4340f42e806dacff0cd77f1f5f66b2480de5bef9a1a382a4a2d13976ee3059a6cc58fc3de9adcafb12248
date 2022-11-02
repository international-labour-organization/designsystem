import { TwingNodeExpressionBinary } from "../binary";
import { TwingNodeType } from "../../../node-type";
export const type = new TwingNodeType('expression_binary_and');
export class TwingNodeExpressionBinaryAnd extends TwingNodeExpressionBinary {
    get type() {
        return type;
    }
    compile(compiler) {
        compiler
            .raw('!!');
        super.compile(compiler);
    }
    operator(compiler) {
        return compiler.raw('&&');
    }
}
