"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionNullCoalesce = exports.type = void 0;
const conditional_1 = require("./conditional");
const defined_1 = require("./test/defined");
const not_1 = require("./unary/not");
const node_1 = require("../../node");
const and_1 = require("./binary/and");
const test_1 = require("./test");
const name_1 = require("./name");
const node_type_1 = require("../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_null_coalesce');
class TwingNodeExpressionNullCoalesce extends conditional_1.TwingNodeExpressionConditional {
    constructor(nodes, lineno, columno) {
        let left = nodes[0];
        let right = nodes[1];
        let test = new and_1.TwingNodeExpressionBinaryAnd([
            new defined_1.TwingNodeExpressionTestDefined(left.clone(), 'defined', new node_1.TwingNode(), left.getTemplateLine(), left.getTemplateColumn()),
            new not_1.TwingNodeExpressionUnaryNot(new test_1.TwingNodeExpressionTest(left, 'null', new node_1.TwingNode(), left.getTemplateLine(), left.getTemplateColumn()), left.getTemplateLine(), left.getTemplateColumn())
        ], left.getTemplateLine(), left.getTemplateColumn());
        super(test, left, right, lineno, columno);
    }
    get type() {
        return exports.type;
    }
    /**
     * null-coallesce node is also a conditional node.
     *
     * @param type
     */
    is(type) {
        return (type === super.type) || super.is(type);
    }
    compile(compiler) {
        if (this.getNode('expr2').is(name_1.type)) {
            this.getNode('expr2').setAttribute('always_defined', true);
        }
        return super.compile(compiler);
    }
}
exports.TwingNodeExpressionNullCoalesce = TwingNodeExpressionNullCoalesce;
