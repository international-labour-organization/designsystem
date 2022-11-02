import { TwingNodeExpression } from "../expression";
import { TwingNodeType } from "../../node-type";
export const type = new TwingNodeType('expression_temp_name');
export class TwingNodeExpressionTempName extends TwingNodeExpression {
    constructor(name, declaration, lineno, columno) {
        let attributes = new Map();
        attributes.set('name', name);
        attributes.set('declaration', declaration);
        super(new Map(), attributes, lineno, columno);
    }
    get type() {
        return type;
    }
    compile(compiler) {
        compiler
            .raw(`${this.getAttribute('declaration') ? 'let ' : ''}$_`)
            .raw(this.getAttribute('name'))
            .raw('_');
    }
}
