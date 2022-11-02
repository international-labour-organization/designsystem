/**
 * Represents an import node.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
import { TwingNode } from "../node";
import { type as nameType } from "./expression/name";
import { TwingNodeType } from "../node-type";
export const type = new TwingNodeType('import');
export class TwingNodeImport extends TwingNode {
    constructor(expr, varName, lineno, columnno, tag = null, global = true) {
        let nodes = new Map();
        nodes.set('expr', expr);
        nodes.set('var', varName);
        let attributes = new Map();
        attributes.set('global', global);
        super(nodes, attributes, lineno, columnno, tag);
    }
    get type() {
        return type;
    }
    compile(compiler) {
        compiler
            .write('aliases.proxy[')
            .repr(this.getNode('var').getAttribute('name'))
            .raw('] = ');
        if (this.getAttribute('global')) {
            compiler
                .raw('this.aliases.proxy[')
                .repr(this.getNode('var').getAttribute('name'))
                .raw('] = ');
        }
        if (this.getNode('expr').is(nameType) && this.getNode('expr').getAttribute('name') === '_self') {
            compiler.raw('this');
        }
        else {
            compiler
                .raw('await this.loadTemplate(')
                .subcompile(this.getNode('expr'))
                .raw(', ')
                .repr(this.getTemplateLine())
                .raw(')');
        }
        compiler.raw(";\n");
    }
}
