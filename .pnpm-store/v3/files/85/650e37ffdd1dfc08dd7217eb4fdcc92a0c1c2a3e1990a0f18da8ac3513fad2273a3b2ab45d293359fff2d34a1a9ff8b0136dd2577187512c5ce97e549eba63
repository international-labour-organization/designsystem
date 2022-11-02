"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeLine = exports.type = void 0;
const node_1 = require("../node");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('line');
class TwingNodeLine extends node_1.TwingNode {
    constructor(data, lineno, columnno, tag) {
        super(new Map(), new Map([['data', data]]), lineno, columnno, tag);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        // noop
    }
}
exports.TwingNodeLine = TwingNodeLine;
