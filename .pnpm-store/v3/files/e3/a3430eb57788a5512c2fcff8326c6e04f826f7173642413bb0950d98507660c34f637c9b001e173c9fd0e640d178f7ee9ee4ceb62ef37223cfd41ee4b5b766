"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeVisitorEscaper = void 0;
const base_node_visitor_1 = require("../base-node-visitor");
const node_1 = require("../node");
const safe_analysis_1 = require("./safe-analysis");
const node_traverser_1 = require("../node-traverser");
const constant_1 = require("../node/expression/constant");
const filter_1 = require("../node/expression/filter");
const print_1 = require("../node/print");
const do_1 = require("../node/do");
const conditional_1 = require("../node/expression/conditional");
const inline_print_1 = require("../node/inline-print");
const module_1 = require("../node/module");
const auto_escape_1 = require("../node/auto-escape");
const block_1 = require("../node/block");
const block_reference_1 = require("../node/block-reference");
const import_1 = require("../node/import");
const print_2 = require("../node/print");
const filter_2 = require("../node/expression/filter");
const conditional_2 = require("../node/expression/conditional");
class TwingNodeVisitorEscaper extends base_node_visitor_1.TwingBaseNodeVisitor {
    constructor() {
        super();
        this.statusStack = [];
        this.blocks = new Map();
        this.defaultStrategy = false;
        this.safeVars = [];
        this.TwingNodeVisitorInterfaceImpl = this;
        this.safeAnalysis = new safe_analysis_1.TwingNodeVisitorSafeAnalysis();
    }
    doEnterNode(node, env) {
        if (node.is(module_1.type)) {
            this.defaultStrategy = env.getCoreExtension().getDefaultStrategy(node.getTemplateName());
            this.safeVars = [];
            this.blocks = new Map();
        }
        else if (node.is(auto_escape_1.type)) {
            this.statusStack.push(node.getAttribute('value'));
        }
        else if (node.is(block_1.type)) {
            this.statusStack.push(this.blocks.has(node.getAttribute('name')) ? this.blocks.get(node.getAttribute('name')) : this.needEscaping());
        }
        else if (node.is(import_1.type)) {
            this.safeVars.push(node.getNode('var').getAttribute('name'));
        }
        return node;
    }
    doLeaveNode(node, env) {
        if (node.is(module_1.type)) {
            this.defaultStrategy = false;
            this.safeVars = [];
            this.blocks = new Map();
        }
        else if (node.is(filter_2.type)) {
            return this.preEscapeFilterNode(node, env);
        }
        else if (node.is(print_2.type)) {
            let type = this.needEscaping();
            if (type !== false) {
                let expression = node.getNode('expr');
                if ((expression.is(conditional_2.type)) && this.shouldUnwrapConditional(expression, env, type)) {
                    return new do_1.TwingNodeDo(this.unwrapConditional(expression, env, type), expression.getTemplateLine(), expression.getTemplateColumn());
                }
                return this.escapePrintNode(node, env, type);
            }
        }
        if (node.is(auto_escape_1.type) || node.is(block_1.type)) {
            this.statusStack.pop();
        }
        else if (node.is(block_reference_1.type)) {
            this.blocks.set(node.getAttribute('name'), this.needEscaping());
        }
        return node;
    }
    shouldUnwrapConditional(expression, env, type) {
        let expr2Safe = this.isSafeFor(type, expression.getNode('expr2'), env);
        let expr3Safe = this.isSafeFor(type, expression.getNode('expr3'), env);
        return expr2Safe !== expr3Safe;
    }
    unwrapConditional(expression, env, type) {
        // convert "echo a ? b : c" to "a ? echo b : echo c" recursively
        let expr2 = expression.getNode('expr2');
        if ((expr2.is(conditional_2.type)) && this.shouldUnwrapConditional(expr2, env, type)) {
            expr2 = this.unwrapConditional(expr2, env, type);
        }
        else {
            expr2 = this.escapeInlinePrintNode(new inline_print_1.TwingNodeInlinePrint(expr2, expr2.getTemplateLine(), expr2.getTemplateColumn()), env, type);
        }
        let expr3 = expression.getNode('expr3');
        if ((expr3.is(conditional_2.type)) && this.shouldUnwrapConditional(expr3, env, type)) {
            expr3 = this.unwrapConditional(expr3, env, type);
        }
        else {
            expr3 = this.escapeInlinePrintNode(new inline_print_1.TwingNodeInlinePrint(expr3, expr3.getTemplateLine(), expr3.getTemplateColumn()), env, type);
        }
        return new conditional_1.TwingNodeExpressionConditional(expression.getNode('expr1'), expr2, expr3, expression.getTemplateLine(), expression.getTemplateColumn());
    }
    escapeInlinePrintNode(node, env, type) {
        let expression = node.getNode('node');
        if (this.isSafeFor(type, expression, env)) {
            return node;
        }
        return new inline_print_1.TwingNodeInlinePrint(this.getEscaperFilter(type, expression), node.getTemplateLine(), node.getTemplateColumn());
    }
    escapePrintNode(node, env, type) {
        let expression = node.getNode('expr');
        if (this.isSafeFor(type, expression, env)) {
            return node;
        }
        return new print_1.TwingNodePrint(this.getEscaperFilter(type, expression), node.getTemplateLine(), node.getTemplateColumn());
    }
    preEscapeFilterNode(filterNode, env) {
        let name = filterNode.getNode('filter').getAttribute('value');
        const filter = env.getFilter(name);
        if (!filter) {
            return filterNode;
        }
        let type = env.getFilter(name).getPreEscape();
        if (type === null) {
            return filterNode;
        }
        let node = filterNode.getNode('node');
        if (this.isSafeFor(type, node, env)) {
            return filterNode;
        }
        filterNode.setNode('node', this.getEscaperFilter(type, node));
        return filterNode;
    }
    isSafeFor(type, expression, env) {
        let safe = this.safeAnalysis.getSafe(expression);
        if (!safe) {
            if (!this.traverser) {
                this.traverser = new node_traverser_1.TwingNodeTraverser(env, [this.safeAnalysis]);
            }
            this.safeAnalysis.setSafeVars(this.safeVars);
            this.traverser.traverse(expression);
            safe = this.safeAnalysis.getSafe(expression);
        }
        return (safe.includes(type)) || (safe.includes('all'));
    }
    /**
     * @returns string | Function | false
     */
    needEscaping() {
        if (this.statusStack.length) {
            return this.statusStack[this.statusStack.length - 1];
        }
        return this.defaultStrategy ? this.defaultStrategy : false;
    }
    getEscaperFilter(type, node) {
        let line = node.getTemplateLine();
        let column = node.getTemplateColumn();
        let nodes = new Map();
        let name = new constant_1.TwingNodeExpressionConstant('escape', line, column);
        nodes.set(0, new constant_1.TwingNodeExpressionConstant(type, line, column));
        nodes.set(1, new constant_1.TwingNodeExpressionConstant(null, line, column));
        nodes.set(2, new constant_1.TwingNodeExpressionConstant(true, line, column));
        let nodeArgs = new node_1.TwingNode(nodes);
        return new filter_1.TwingNodeExpressionFilter(node, name, nodeArgs, line, column);
    }
    getPriority() {
        return 0;
    }
}
exports.TwingNodeVisitorEscaper = TwingNodeVisitorEscaper;
