"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionParent = exports.type = void 0;
const expression_1 = require("../expression");
const node_type_1 = require("../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_parent');
class TwingNodeExpressionParent extends expression_1.TwingNodeExpression {
    constructor(name, lineno) {
        let attributes = new Map();
        attributes.set('output', false);
        attributes.set('name', name);
        super(new Map(), attributes, lineno);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        let name = this.getAttribute('name');
        compiler
            .raw(`await this.traceableRenderParentBlock(${this.getTemplateLine()}, this.source)(`)
            .string(name)
            .raw(', context, outputBuffer, blocks)');
    }
}
exports.TwingNodeExpressionParent = TwingNodeExpressionParent;
