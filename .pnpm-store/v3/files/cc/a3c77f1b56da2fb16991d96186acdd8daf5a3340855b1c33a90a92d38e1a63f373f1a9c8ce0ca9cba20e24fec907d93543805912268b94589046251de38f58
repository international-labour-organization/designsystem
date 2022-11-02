import { TwingNodeExpression } from "../expression";
import { TwingNodeType } from "../../node-type";
export const type = new TwingNodeType('expression_constant');
export class TwingNodeExpressionConstant extends TwingNodeExpression {
    constructor(value, lineno, columnno) {
        super(new Map(), new Map([['value', value]]), lineno, columnno);
    }
    get type() {
        return type;
    }
    compile(compiler) {
        compiler.repr(this.getAttribute('value'));
    }
}
