"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeDeprecated = exports.type = void 0;
/**
 * Represents a deprecated node.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
const node_1 = require("../node");
const constant_1 = require("./expression/constant");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('deprecated');
class TwingNodeDeprecated extends node_1.TwingNode {
    constructor(expr, lineno, columnno, tag = null) {
        super(new Map([['expr', expr]]), new Map(), lineno, columnno, tag);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        let expr = this.getNode('expr');
        compiler
            .write('{\n')
            .indent();
        if (expr.is(constant_1.type)) {
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
exports.TwingNodeDeprecated = TwingNodeDeprecated;
