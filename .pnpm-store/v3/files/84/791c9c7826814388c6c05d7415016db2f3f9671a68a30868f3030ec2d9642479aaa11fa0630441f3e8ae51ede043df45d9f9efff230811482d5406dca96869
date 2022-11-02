"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeAutoEscape = exports.type = void 0;
const node_1 = require("../node");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('auto_escape');
/**
 * Represents an autoescape node.
 *
 * The value is the escaping strategy (can be html, js, ...)
 *
 * The true value is equivalent to html.
 *
 * If autoescaping is disabled, then the value is false.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
class TwingNodeAutoEscape extends node_1.TwingNode {
    constructor(value, body, lineno, columnno, tag = 'autoescape') {
        super(new Map([['body', body]]), new Map([['value', value]]), lineno, columnno, tag);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler.subcompile(this.getNode('body'));
    }
}
exports.TwingNodeAutoEscape = TwingNodeAutoEscape;
