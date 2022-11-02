"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeWith = exports.type = void 0;
const node_1 = require("../node");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('with');
class TwingNodeWith extends node_1.TwingNode {
    constructor(body, variables, only, lineno, columnno, tag = null) {
        let nodes = new Map();
        nodes.set('body', body);
        if (variables) {
            nodes.set('variables', variables);
        }
        super(nodes, new Map([['only', only]]), lineno, columnno, tag);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        if (this.hasNode('variables')) {
            compiler
                .write('{\n')
                .indent()
                .write(`let tmp = `)
                .subcompile(this.getNode('variables'))
                .raw(";\n")
                .write(`if (typeof (tmp) !== 'object') {\n`)
                .indent()
                .write('throw new this.RuntimeError(\'Variables passed to the "with" tag must be a hash.\', ')
                .repr(this.getTemplateLine())
                .raw(", this.source);\n")
                .outdent()
                .write("}\n");
            if (this.getAttribute('only')) {
                compiler.write("context = new Map([['_parent', context]]);\n");
            }
            else {
                compiler.write("context.set('_parent', context.clone());\n");
            }
            compiler
                .write(`context = new this.Context(this.environment.mergeGlobals(this.merge(context, this.convertToMap(tmp))));\n`)
                .outdent()
                .write('}\n\n');
        }
        else {
            compiler.write("context.set('_parent', context.clone());\n");
        }
        compiler
            .subcompile(this.getNode('body'))
            .write("context = context.get('_parent');\n");
    }
}
exports.TwingNodeWith = TwingNodeWith;
