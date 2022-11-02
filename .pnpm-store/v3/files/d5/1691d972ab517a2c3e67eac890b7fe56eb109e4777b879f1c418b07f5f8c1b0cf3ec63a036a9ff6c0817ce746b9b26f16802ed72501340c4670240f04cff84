"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeCheckToString = exports.type = void 0;
const node_1 = require("../node");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('check_to_string');
/**
 * Checks if casting an expression to toString() is allowed by the sandbox.
 *
 * For instance, when there is a simple Print statement, like {{ article }},
 * and if the sandbox is enabled, we need to check that the toString()
 * method is allowed if 'article' is an object. The same goes for {{ article|upper }}
 * or {{ random(article) }}.
 */
class TwingNodeCheckToString extends node_1.TwingNode {
    constructor(expression) {
        super(new Map([['expr', expression]]), new Map(), expression.getTemplateLine(), expression.getTemplateColumn());
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .raw('this.environment.ensureToStringAllowed(')
            .subcompile(this.getNode('expr'))
            .raw(')');
    }
}
exports.TwingNodeCheckToString = TwingNodeCheckToString;
