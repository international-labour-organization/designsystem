"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeVisitorSafeAnalysis = void 0;
const base_node_visitor_1 = require("../base-node-visitor");
const name_1 = require("../node/expression/name");
const filter_1 = require("../node/expression/filter");
const function_1 = require("../node/expression/function");
const constant_1 = require("../node/expression/constant");
const block_reference_1 = require("../node/expression/block-reference");
const parent_1 = require("../node/expression/parent");
const conditional_1 = require("../node/expression/conditional");
const get_attribute_1 = require("../node/expression/get-attribute");
const method_call_1 = require("../node/expression/method-call");
const objectHash = require('object-hash');
class TwingNodeVisitorSafeAnalysis extends base_node_visitor_1.TwingBaseNodeVisitor {
    constructor() {
        super();
        this.data = new Map();
        this.safeVars = [];
        this.TwingNodeVisitorInterfaceImpl = this;
    }
    setSafeVars(safeVars) {
        this.safeVars = safeVars;
    }
    /**
     *
     * @param {TwingNode} node
     * @returns {Array<string>}
     */
    getSafe(node) {
        let hash = objectHash(node);
        if (!this.data.has(hash)) {
            return;
        }
        let bucket = this.data.get(hash).find(function (bucket) {
            if (bucket.key === node) {
                if (bucket.value.includes('html_attr')) {
                    bucket.value.push('html');
                }
                return true;
            }
        });
        return bucket ? bucket.value : null;
    }
    setSafe(node, safe) {
        let hash = objectHash(node);
        let bucket = null;
        if (this.data.has(hash)) {
            bucket = this.data.get(hash).find(function (bucket) {
                if (bucket.key === node) {
                    bucket.value = safe;
                    return true;
                }
            });
        }
        if (!bucket) {
            if (!this.data.has(hash)) {
                this.data.set(hash, []);
            }
            this.data.get(hash).push({
                key: node,
                value: safe
            });
        }
    }
    doEnterNode(node, env) {
        return node;
    }
    doLeaveNode(node, env) {
        if (node.is(constant_1.type)) {
            // constants are marked safe for all
            this.setSafe(node, ['all']);
        }
        else if (node.is(block_reference_1.type)) {
            // blocks are safe by definition
            this.setSafe(node, ['all']);
        }
        else if (node.is(parent_1.type)) {
            // parent block is safe by definition
            this.setSafe(node, ['all']);
        }
        else if (node.is(conditional_1.type)) {
            // intersect safeness of both operands
            let safe = this.intersectSafe(this.getSafe(node.getNode('expr2')), this.getSafe(node.getNode('expr3')));
            this.setSafe(node, safe);
        }
        else if (node.is(filter_1.type)) {
            // filter expression is safe when the filter is safe
            let name = node.getNode('filter').getAttribute('value');
            let filterArgs = node.getNode('arguments');
            let filter = env.getFilter(name);
            if (filter) {
                let safe = filter.getSafe(filterArgs);
                if (safe.length < 1) {
                    safe = this.intersectSafe(this.getSafe(node.getNode('node')), filter.getPreservesSafety());
                }
                this.setSafe(node, safe);
            }
            else {
                this.setSafe(node, []);
            }
        }
        else if (node.is(function_1.type)) {
            // function expression is safe when the function is safe
            let name = node.getAttribute('name');
            let functionArgs = node.getNode('arguments');
            let functionNode = env.getFunction(name);
            if (functionNode) {
                this.setSafe(node, functionNode.getSafe(functionArgs));
            }
            else {
                this.setSafe(node, []);
            }
        }
        else if (node.is(method_call_1.type)) {
            if (node.getAttribute('safe')) {
                this.setSafe(node, ['all']);
            }
            else {
                this.setSafe(node, []);
            }
        }
        else if (node.is(get_attribute_1.type) && node.getNode('node').is(name_1.type)) {
            let name = node.getNode('node').getAttribute('name');
            if (this.safeVars.includes(name)) {
                this.setSafe(node, ['all']);
            }
            else {
                this.setSafe(node, []);
            }
        }
        else {
            this.setSafe(node, []);
        }
        return node;
    }
    intersectSafe(a, b) {
        if (a === null || b === null) {
            return [];
        }
        if (a.includes('all')) {
            return b;
        }
        if (b.includes('all')) {
            return a;
        }
        // array_intersect
        return a.filter(function (n) {
            return b.includes(n);
        });
    }
    getPriority() {
        return 0;
    }
}
exports.TwingNodeVisitorSafeAnalysis = TwingNodeVisitorSafeAnalysis;
