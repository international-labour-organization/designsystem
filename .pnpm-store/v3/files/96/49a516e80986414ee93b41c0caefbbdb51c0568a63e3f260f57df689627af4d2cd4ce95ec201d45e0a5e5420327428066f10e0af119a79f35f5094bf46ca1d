"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeImport = exports.type = void 0;
/**
 * Represents an import node.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
const node_1 = require("../node");
const name_1 = require("./expression/name");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('import');
class TwingNodeImport extends node_1.TwingNode {
    constructor(expr, varName, lineno, columnno, tag = null, global = true) {
        let nodes = new Map();
        nodes.set('expr', expr);
        nodes.set('var', varName);
        let attributes = new Map();
        attributes.set('global', global);
        super(nodes, attributes, lineno, columnno, tag);
    }
    get type() {
        return exports.type;
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
        if (this.getNode('expr').is(name_1.type) && this.getNode('expr').getAttribute('name') === '_self') {
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
exports.TwingNodeImport = TwingNodeImport;
