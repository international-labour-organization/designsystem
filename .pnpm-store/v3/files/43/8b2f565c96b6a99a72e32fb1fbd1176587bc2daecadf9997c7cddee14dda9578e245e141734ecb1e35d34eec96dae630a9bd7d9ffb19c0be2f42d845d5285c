"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionConstant = exports.type = void 0;
const expression_1 = require("../expression");
const node_type_1 = require("../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_constant');
class TwingNodeExpressionConstant extends expression_1.TwingNodeExpression {
    constructor(value, lineno, columnno) {
        super(new Map(), new Map([['value', value]]), lineno, columnno);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler.repr(this.getAttribute('value'));
    }
}
exports.TwingNodeExpressionConstant = TwingNodeExpressionConstant;
