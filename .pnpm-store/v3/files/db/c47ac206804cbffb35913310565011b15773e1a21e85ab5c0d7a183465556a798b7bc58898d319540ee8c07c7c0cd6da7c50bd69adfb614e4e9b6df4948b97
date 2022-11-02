"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionTestDefined = exports.type = void 0;
const test_1 = require("../test");
const constant_1 = require("../constant");
const name_1 = require("../name");
const get_attribute_1 = require("../get-attribute");
const block_reference_1 = require("../block-reference");
const function_1 = require("../function");
const array_1 = require("../array");
const method_call_1 = require("../method-call");
const syntax_1 = require("../../../error/syntax");
const node_type_1 = require("../../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_test_defined');
/**
 * Checks if a variable is defined in the active context.
 *
 * <pre>
 * {# defined works with variable names and variable attributes #}
 * {% if foo is defined %}
 *     {# ... #}
 * {% endif %}
 * </pre>
 */
class TwingNodeExpressionTestDefined extends test_1.TwingNodeExpressionTest {
    constructor(node, name, nodeArguments, lineno, columnno) {
        let changeIgnoreStrictCheck = false;
        let error = null;
        if (node.is(name_1.type)) {
            node.setAttribute('is_defined_test', true);
        }
        else if (node.is(get_attribute_1.type)) {
            node.setAttribute('is_defined_test', true);
            changeIgnoreStrictCheck = true;
        }
        else if (node.is(block_reference_1.type)) {
            node.setAttribute('is_defined_test', true);
        }
        else if (node.is(function_1.type) && (node.getAttribute('name') === 'constant')) {
            node.setAttribute('is_defined_test', true);
        }
        else if (node.is(constant_1.type) || node.is(array_1.type)) {
            node = new constant_1.TwingNodeExpressionConstant(true, node.getTemplateLine(), node.getTemplateColumn());
        }
        else if (node.is(method_call_1.type)) {
            node.setAttribute('is_defined_test', true);
        }
        else {
            error = 'The "defined" test only works with simple variables.';
        }
        super(node, name, nodeArguments, lineno, columnno);
        if (changeIgnoreStrictCheck) {
            this.changeIgnoreStrictCheck(node);
        }
        if (error) {
            throw new syntax_1.TwingErrorSyntax(error, this.getTemplateLine());
        }
    }
    get type() {
        return exports.type;
    }
    changeIgnoreStrictCheck(node) {
        node.setAttribute('optimizable', false);
        node.setAttribute('ignore_strict_check', true);
        let exprNode = node.getNode('node');
        if (exprNode.is(get_attribute_1.type)) {
            this.changeIgnoreStrictCheck(exprNode);
        }
    }
    compile(compiler) {
        compiler.subcompile(this.getNode('node'));
    }
}
exports.TwingNodeExpressionTestDefined = TwingNodeExpressionTestDefined;
