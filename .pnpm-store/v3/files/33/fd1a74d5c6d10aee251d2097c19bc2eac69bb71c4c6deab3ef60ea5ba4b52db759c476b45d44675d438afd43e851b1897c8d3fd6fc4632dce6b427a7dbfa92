import { TwingNode } from "../node";
import { TwingNodeType } from "../node-type";
export const type = new TwingNodeType('include');
export class TwingNodeInclude extends TwingNode {
    constructor(expr, variables, only, ignoreMissing, lineno, columnno, tag = null) {
        let nodes = new Map();
        if (expr) {
            nodes.set('expr', expr);
        }
        if (variables !== null) {
            nodes.set('variables', variables);
        }
        super(nodes, new Map([['only', only], ['ignore_missing', ignoreMissing]]), lineno, columnno, tag);
    }
    get type() {
        return type;
    }
    compile(compiler) {
        compiler
            .write('outputBuffer.echo(await this.include(context, outputBuffer, ');
        this.addGetTemplate(compiler);
        compiler.raw(', ');
        if (this.hasNode('variables')) {
            compiler.subcompile(this.getNode('variables'));
        }
        else {
            compiler.repr(undefined);
        }
        compiler
            .raw(', ')
            .repr(!this.getAttribute('only'))
            .raw(', ')
            .repr(this.getAttribute('ignore_missing'))
            .raw(', ')
            .repr(this.getTemplateLine())
            .raw(')')
            .raw(');\n');
    }
    addGetTemplate(compiler) {
        compiler.subcompile(this.getNode('expr'));
    }
}
