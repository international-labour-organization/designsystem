"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeComment = exports.type = void 0;
const node_1 = require("../node");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('comment');
class TwingNodeComment extends node_1.TwingNode {
    constructor(data, lineno, columnno) {
        super(new Map(), new Map([['data', data]]), lineno, columnno);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        // noop
    }
}
exports.TwingNodeComment = TwingNodeComment;
