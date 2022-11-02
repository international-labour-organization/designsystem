/**
 * Represents a deprecated node.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
import { TwingNode } from "../node";
import { type as constantType } from "./expression/constant";
import { TwingNodeType } from "../node-type";
export const type = new TwingNodeType('deprecated');
export class TwingNodeDeprecated extends TwingNode {
    constructor(expr, lineno, columnno, tag = null) {
        super(new Map([['expr', expr]]), new Map(), lineno, columnno, tag);
    }
    get type() {
        return type;
    }
    compile(compiler) {
        let expr = this.getNode('expr');
        compiler
            .write('{\n')
            .indent();
        if (expr.is(constantType)) {
            compiler
                .write('console.warn(')
                .subcompile(expr);
        }
        else {
            compiler.write(`let message = `)
                .subcompile(expr)
                .raw(';\n')
                .write(`console.warn(message`);
        }
        compiler
            .raw(' + ')
            .string(` ("${this.getTemplateName()}" at line ${this.getTemplateLine()})`)
            .raw(');\n')
            .outdent()
            .write('}\n');
    }
}
