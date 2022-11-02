import { TwingBaseNodeVisitor } from "../base-node-visitor";
import { TwingNode } from "../node";
import { TwingNodeVisitorSafeAnalysis } from "./safe-analysis";
import { TwingNodeTraverser } from "../node-traverser";
import { TwingNodeExpressionConstant } from "../node/expression/constant";
import { TwingNodeExpressionFilter } from "../node/expression/filter";
import { TwingNodePrint } from "../node/print";
import { TwingNodeDo } from "../node/do";
import { TwingNodeExpressionConditional } from "../node/expression/conditional";
import { TwingNodeInlinePrint } from "../node/inline-print";
import { type as moduleType } from "../node/module";
import { type as autoEscapeType } from "../node/auto-escape";
import { type as blockType } from "../node/block";
import { type as blockReferenceType } from "../node/block-reference";
import { type as importType } from "../node/import";
import { type as printType } from "../node/print";
import { type as filterType } from "../node/expression/filter";
import { type as conditionalType } from "../node/expression/conditional";
export class TwingNodeVisitorEscaper extends TwingBaseNodeVisitor {
    constructor() {
        super();
        this.statusStack = [];
        this.blocks = new Map();
        this.defaultStrategy = false;
        this.safeVars = [];
        this.TwingNodeVisitorInterfaceImpl = this;
        this.safeAnalysis = new TwingNodeVisitorSafeAnalysis();
    }
    doEnterNode(node, env) {
        if (node.is(moduleType)) {
            this.defaultStrategy = env.getCoreExtension().getDefaultStrategy(node.getTemplateName());
            this.safeVars = [];
            this.blocks = new Map();
        }
        else if (node.is(autoEscapeType)) {
            this.statusStack.push(node.getAttribute('value'));
        }
        else if (node.is(blockType)) {
            this.statusStack.push(this.blocks.has(node.getAttribute('name')) ? this.blocks.get(node.getAttribute('name')) : this.needEscaping());
        }
        else if (node.is(importType)) {
            this.safeVars.push(node.getNode('var').getAttribute('name'));
        }
        return node;
    }
    doLeaveNode(node, env) {
        if (node.is(moduleType)) {
            this.defaultStrategy = false;
            this.safeVars = [];
            this.blocks = new Map();
        }
        else if (node.is(filterType)) {
            return this.preEscapeFilterNode(node, env);
        }
        else if (node.is(printType)) {
            let type = this.needEscaping();
            if (type !== false) {
                let expression = node.getNode('expr');
                if ((expression.is(conditionalType)) && this.shouldUnwrapConditional(expression, env, type)) {
                    return new TwingNodeDo(this.unwrapConditional(expression, env, type), expression.getTemplateLine(), expression.getTemplateColumn());
                }
                return this.escapePrintNode(node, env, type);
            }
        }
        if (node.is(autoEscapeType) || node.is(blockType)) {
            this.statusStack.pop();
        }
        else if (node.is(blockReferenceType)) {
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
        if ((expr2.is(conditionalType)) && this.shouldUnwrapConditional(expr2, env, type)) {
            expr2 = this.unwrapConditional(expr2, env, type);
        }
        else {
            expr2 = this.escapeInlinePrintNode(new TwingNodeInlinePrint(expr2, expr2.getTemplateLine(), expr2.getTemplateColumn()), env, type);
        }
        let expr3 = expression.getNode('expr3');
        if ((expr3.is(conditionalType)) && this.shouldUnwrapConditional(expr3, env, type)) {
            expr3 = this.unwrapConditional(expr3, env, type);
        }
        else {
            expr3 = this.escapeInlinePrintNode(new TwingNodeInlinePrint(expr3, expr3.getTemplateLine(), expr3.getTemplateColumn()), env, type);
        }
        return new TwingNodeExpressionConditional(expression.getNode('expr1'), expr2, expr3, expression.getTemplateLine(), expression.getTemplateColumn());
    }
    escapeInlinePrintNode(node, env, type) {
        let expression = node.getNode('node');
        if (this.isSafeFor(type, expression, env)) {
            return node;
        }
        return new TwingNodeInlinePrint(this.getEscaperFilter(type, expression), node.getTemplateLine(), node.getTemplateColumn());
    }
    escapePrintNode(node, env, type) {
        let expression = node.getNode('expr');
        if (this.isSafeFor(type, expression, env)) {
            return node;
        }
        return new TwingNodePrint(this.getEscaperFilter(type, expression), node.getTemplateLine(), node.getTemplateColumn());
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
                this.traverser = new TwingNodeTraverser(env, [this.safeAnalysis]);
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
        let name = new TwingNodeExpressionConstant('escape', line, column);
        nodes.set(0, new TwingNodeExpressionConstant(type, line, column));
        nodes.set(1, new TwingNodeExpressionConstant(null, line, column));
        nodes.set(2, new TwingNodeExpressionConstant(true, line, column));
        let nodeArgs = new TwingNode(nodes);
        return new TwingNodeExpressionFilter(node, name, nodeArgs, line, column);
    }
    getPriority() {
        return 0;
    }
}
