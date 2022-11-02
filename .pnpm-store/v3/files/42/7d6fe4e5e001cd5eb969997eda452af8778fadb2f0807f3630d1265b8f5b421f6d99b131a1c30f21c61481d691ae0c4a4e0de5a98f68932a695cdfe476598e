import { TwingNodeExpressionBinaryDiv } from "./div";
import { TwingNodeType } from "../../../node-type";
export const type = new TwingNodeType('expression_binary_floor_div');
export class TwingNodeExpressionBinaryFloorDiv extends TwingNodeExpressionBinaryDiv {
    get type() {
        return type;
    }
    compile(compiler) {
        compiler.raw('Math.floor(');
        super.compile(compiler);
        compiler.raw(')');
    }
    operator(compiler) {
        return compiler.raw('/');
    }
}
