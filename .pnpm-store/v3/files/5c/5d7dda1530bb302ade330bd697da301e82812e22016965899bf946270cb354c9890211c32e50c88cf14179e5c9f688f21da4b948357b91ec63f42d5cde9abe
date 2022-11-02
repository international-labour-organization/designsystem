"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeInlinePrint = exports.type = void 0;
const node_1 = require("../node");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('inline_print');
class TwingNodeInlinePrint extends node_1.TwingNode {
    constructor(node, lineno, columnno, tag = null) {
        super(new Map([['node', node]]), new Map(), lineno, columnno, tag);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .raw('outputBuffer.echo(')
            .subcompile(this.getNode('node'))
            .raw(')');
    }
}
exports.TwingNodeInlinePrint = TwingNodeInlinePrint;
