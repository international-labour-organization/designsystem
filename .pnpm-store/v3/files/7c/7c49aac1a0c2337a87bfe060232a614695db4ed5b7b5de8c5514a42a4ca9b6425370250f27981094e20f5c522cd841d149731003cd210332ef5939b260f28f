"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeFlush = exports.type = void 0;
const node_1 = require("../node");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('flush');
class TwingNodeFlush extends node_1.TwingNode {
    constructor(lineno, columnno, tag) {
        super(new Map(), new Map(), lineno, columnno, tag);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .write("outputBuffer.flush();\n");
    }
}
exports.TwingNodeFlush = TwingNodeFlush;
