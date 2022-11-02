"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeSpaceless = exports.type = void 0;
const node_1 = require("../node");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('spaceless');
class TwingNodeSpaceless extends node_1.TwingNode {
    constructor(body, lineno, columnno, tag = 'spaceless') {
        let nodes = new Map();
        nodes.set('body', body);
        super(nodes, new Map(), lineno, columnno, tag);
        this.TwingNodeOutputInterfaceImpl = this;
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .addSourceMapEnter(this)
            .write("outputBuffer.start();\n")
            .subcompile(this.getNode('body'))
            .write("outputBuffer.echo(outputBuffer.getAndClean().replace(/>\\s+</g, '><').trim());\n")
            .addSourceMapLeave();
    }
}
exports.TwingNodeSpaceless = TwingNodeSpaceless;
