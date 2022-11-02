"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionTempName = exports.type = void 0;
const expression_1 = require("../expression");
const node_type_1 = require("../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_temp_name');
class TwingNodeExpressionTempName extends expression_1.TwingNodeExpression {
    constructor(name, declaration, lineno, columno) {
        let attributes = new Map();
        attributes.set('name', name);
        attributes.set('declaration', declaration);
        super(new Map(), attributes, lineno, columno);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .raw(`${this.getAttribute('declaration') ? 'let ' : ''}$_`)
            .raw(this.getAttribute('name'))
            .raw('_');
    }
}
exports.TwingNodeExpressionTempName = TwingNodeExpressionTempName;
