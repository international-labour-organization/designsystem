"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionFilterDefault = exports.type = void 0;
const filter_1 = require("../filter");
const node_1 = require("../../../node");
const constant_1 = require("../constant");
const defined_1 = require("../test/defined");
const conditional_1 = require("../conditional");
const name_1 = require("../name");
const get_attribute_1 = require("../get-attribute");
const node_type_1 = require("../../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_filter');
class TwingNodeExpressionFilterDefault extends filter_1.TwingNodeExpressionFilter {
    constructor(node, filterName, methodArguments, lineno, columnno, tag = null) {
        let defaultNode = new filter_1.TwingNodeExpressionFilter(node, new constant_1.TwingNodeExpressionConstant('default', node.getTemplateLine(), node.getTemplateColumn()), methodArguments, node.getTemplateLine(), node.getTemplateColumn());
        if (filterName.getAttribute('value') === 'default' && (node.is(name_1.type) || node.is(get_attribute_1.type))) {
            let test = new defined_1.TwingNodeExpressionTestDefined(node.clone(), 'defined', new node_1.TwingNode(), node.getTemplateLine(), node.getTemplateColumn());
            let falseNode = methodArguments.getNodes().size ? methodArguments.getNode(0) : new constant_1.TwingNodeExpressionConstant('', node.getTemplateLine(), node.getTemplateColumn());
            node = new conditional_1.TwingNodeExpressionConditional(test, defaultNode, falseNode, node.getTemplateLine(), node.getTemplateColumn());
        }
        else {
            node = defaultNode;
        }
        super(node, filterName, methodArguments, lineno, columnno, tag);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler.subcompile(this.getNode('node'));
    }
}
exports.TwingNodeExpressionFilterDefault = TwingNodeExpressionFilterDefault;
