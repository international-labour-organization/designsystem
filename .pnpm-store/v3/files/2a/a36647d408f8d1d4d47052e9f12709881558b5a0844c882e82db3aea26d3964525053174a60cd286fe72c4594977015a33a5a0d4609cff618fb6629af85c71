import { TwingNodeExpressionName } from "./name";
import { TwingNodeType } from "../../node-type";
export const type = new TwingNodeType('expression_assign_name');
export class TwingNodeExpressionAssignName extends TwingNodeExpressionName {
    get type() {
        return type;
    }
    compile(compiler) {
        compiler
            .raw('context.proxy[')
            .string(this.getAttribute('name'))
            .raw(']');
    }
}
