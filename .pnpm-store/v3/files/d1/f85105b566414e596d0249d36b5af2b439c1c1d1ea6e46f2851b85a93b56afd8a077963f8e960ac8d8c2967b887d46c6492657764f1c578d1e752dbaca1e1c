import { TwingNodeExpressionBinary } from "../binary";
import { TwingNodeType } from "../../../node-type";
export const type = new TwingNodeType('expression_binary_equals');
export class TwingNodeExpressionBinaryEqual extends TwingNodeExpressionBinary {
    get type() {
        return type;
    }
    compile(compiler) {
        compiler
            .raw('this.compare(')
            .subcompile(this.getNode('left'))
            .raw(', ')
            .subcompile(this.getNode('right'))
            .raw(')');
    }
}
