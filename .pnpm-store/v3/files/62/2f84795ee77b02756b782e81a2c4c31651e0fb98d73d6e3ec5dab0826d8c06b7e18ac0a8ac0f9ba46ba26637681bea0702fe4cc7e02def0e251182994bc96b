"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeForLoop = exports.type = void 0;
const node_1 = require("../node");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('for_loop');
class TwingNodeForLoop extends node_1.TwingNode {
    constructor(lineno, columnno, tag = null) {
        let attributes = new Map();
        attributes.set('with_loop', false);
        attributes.set('ifexpr', false);
        attributes.set('else', false);
        super(new Map(), attributes, lineno, columnno, tag);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        if (this.getAttribute('else')) {
            compiler.write("context.set('_iterated',  true);\n");
        }
        if (this.getAttribute('with_loop')) {
            compiler
                .write("(() => {\n")
                .indent()
                .write("let loop = context.get('loop');\n")
                .write("loop.set('index0', loop.get('index0') + 1);\n")
                .write("loop.set('index', loop.get('index') + 1);\n")
                .write("loop.set('first', false);\n");
            if (!this.getAttribute('ifexpr')) {
                compiler
                    .write("if (loop.has('length')) {\n")
                    .indent()
                    .write("loop.set('revindex0', loop.get('revindex0') - 1);\n")
                    .write("loop.set('revindex', loop.get('revindex') - 1);\n")
                    .write("loop.set('last', loop.get('revindex0') === 0);\n")
                    .outdent()
                    .write("}\n");
            }
            compiler
                .outdent()
                .write("})();\n");
        }
    }
}
exports.TwingNodeForLoop = TwingNodeForLoop;
