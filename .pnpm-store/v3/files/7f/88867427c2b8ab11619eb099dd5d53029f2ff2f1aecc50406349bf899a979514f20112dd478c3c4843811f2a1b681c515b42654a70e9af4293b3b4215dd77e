"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeDo = exports.type = void 0;
const node_1 = require("../node");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('do');
/**
 * Represents a do node.
 *
 * The do tag works exactly like the regular variable expression ({{ ... }}) just that it doesn't print anything:
 * {% do 1 + 2 %}
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 * @author Eric Morand <eric.morand@gmail.com>
 */
class TwingNodeDo extends node_1.TwingNode {
    constructor(expr, lineno, columnno, tag = null) {
        super(new Map([['expr', expr]]), new Map(), lineno, columnno, tag);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .subcompile(this.getNode('expr'), true)
            .raw(";\n");
    }
}
exports.TwingNodeDo = TwingNodeDo;
