"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeBlock = exports.type = void 0;
const node_1 = require("../node");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('auto_escape');
class TwingNodeBlock extends node_1.TwingNode {
    constructor(name, body, lineno, columnno, tag = null) {
        super(new Map([['body', body]]), new Map([['name', name]]), lineno, columnno, tag);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .raw(`async (context, outputBuffer, blocks = new Map()) => {\n`)
            .indent()
            .write('let aliases = this.aliases.clone();\n');
        compiler
            .subcompile(this.getNode('body'))
            .outdent()
            .write("}");
    }
}
exports.TwingNodeBlock = TwingNodeBlock;
