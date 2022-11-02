"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionArrowFunction = exports.type = void 0;
const expression_1 = require("../expression");
const node_type_1 = require("../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_arrow_function');
/**
 * Represents an arrow function.
 */
class TwingNodeExpressionArrowFunction extends expression_1.TwingNodeExpression {
    constructor(expr, names, lineno, columnno, tag = null) {
        let nodes = new Map([
            ['expr', expr],
            ['names', names]
        ]);
        super(nodes, new Map(), lineno, columnno, tag);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler.raw('async (');
        let i = 0;
        for (let [k, name] of this.getNode('names').getNodes()) {
            if (i > 0) {
                compiler.raw(', ');
            }
            compiler
                .raw('$__')
                .raw(name.getAttribute('name'))
                .raw('__');
            i++;
        }
        compiler
            .raw(') => {');
        for (let [k, name] of this.getNode('names').getNodes()) {
            compiler
                .raw('context.proxy[\'')
                .raw(name.getAttribute('name'))
                .raw('\'] = $__')
                .raw(name.getAttribute('name'))
                .raw('__; ');
        }
        compiler
            .raw('return ')
            .subcompile(this.getNode('expr'))
            .raw(';}');
    }
}
exports.TwingNodeExpressionArrowFunction = TwingNodeExpressionArrowFunction;
