"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeText = exports.type = void 0;
const node_1 = require("../node");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('text');
class TwingNodeText extends node_1.TwingNode {
    constructor(data, lineno, columnno, tag = null) {
        super(new Map(), new Map([['data', data]]), lineno, columnno, tag);
        this.TwingNodeOutputInterfaceImpl = this;
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .addSourceMapEnter(this)
            .write('outputBuffer.echo(')
            .string(this.getAttribute('data'))
            .raw(");\n")
            .addSourceMapLeave();
    }
}
exports.TwingNodeText = TwingNodeText;
