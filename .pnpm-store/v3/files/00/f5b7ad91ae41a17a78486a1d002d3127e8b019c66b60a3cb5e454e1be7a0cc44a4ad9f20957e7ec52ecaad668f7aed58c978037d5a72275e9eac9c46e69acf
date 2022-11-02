"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodePrint = exports.type = void 0;
const node_1 = require("../node");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('print');
class TwingNodePrint extends node_1.TwingNode {
    constructor(expr, lineno, columnno, tag = null) {
        let nodes = new Map();
        nodes.set('expr', expr);
        super(nodes, new Map(), lineno, columnno, tag);
        this.TwingNodeOutputInterfaceImpl = this;
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .addSourceMapEnter(this)
            .write('outputBuffer.echo(')
            .subcompile(this.getNode('expr'))
            .raw(');\n')
            .addSourceMapLeave();
    }
}
exports.TwingNodePrint = TwingNodePrint;
