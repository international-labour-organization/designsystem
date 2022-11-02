"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeVisitorSandbox = void 0;
const base_node_visitor_1 = require("../base-node-visitor");
const node_1 = require("../node");
const check_security_1 = require("../node/check-security");
const check_to_string_1 = require("../node/check-to-string");
const module_1 = require("../node/module");
const name_1 = require("../node/expression/name");
const filter_1 = require("../node/expression/filter");
const function_1 = require("../node/expression/function");
const range_1 = require("../node/expression/binary/range");
const concat_1 = require("../node/expression/binary/concat");
const get_attribute_1 = require("../node/expression/get-attribute");
const set_1 = require("../node/set");
const print_1 = require("../node/print");
class TwingNodeVisitorSandbox extends base_node_visitor_1.TwingBaseNodeVisitor {
    constructor() {
        super();
        this.TwingNodeVisitorInterfaceImpl = this;
    }
    doEnterNode(node, env) {
        if (!env.isSandboxed()) {
            return node;
        }
        if (node.is(module_1.type)) {
            this.tags = new Map();
            this.filters = new Map();
            this.functions = new Map();
            return node;
        }
        else {
            // look for tags
            if (node.getNodeTag() && !(this.tags.has(node.getNodeTag()))) {
                this.tags.set(node.getNodeTag(), node);
            }
            // look for filters
            if (node.is(filter_1.type) && !this.filters.has(node.getNode('filter').getAttribute('value'))) {
                this.filters.set(node.getNode('filter').getAttribute('value'), node);
            }
            // look for functions
            if (node.is(function_1.type) && !this.functions.has(node.getAttribute('name'))) {
                this.functions.set(node.getAttribute('name'), node);
            }
            // the .. operator is equivalent to the range() function
            if (node.is(range_1.type) && !(this.functions.has('range'))) {
                this.functions.set('range', node);
            }
            // wrap print to check toString() calls
            if (node.is(print_1.type)) {
                this.needsToStringWrap = true;
                this.wrapNode(node, 'expr');
            }
            if (node.is(set_1.type) && !node.getAttribute('capture')) {
                this.needsToStringWrap = true;
            }
            // wrap outer nodes that can implicitly call toString()
            if (this.needsToStringWrap) {
                if (node.is(concat_1.type)) {
                    this.wrapNode(node, 'left');
                    this.wrapNode(node, 'right');
                }
                if (node.is(filter_1.type)) {
                    this.wrapNode(node, 'node');
                    this.wrapArrayNode(node, 'arguments');
                }
                if (node.is(function_1.type)) {
                    this.wrapArrayNode(node, 'arguments');
                }
            }
        }
        return node;
    }
    doLeaveNode(node, env) {
        if (!env.isSandboxed()) {
            return node;
        }
        if (node.is(module_1.type)) {
            let nodes = new Map();
            let i = 0;
            nodes.set(i++, new check_security_1.TwingNodeCheckSecurity(this.filters, this.tags, this.functions));
            nodes.set(i++, node.getNode('display_start'));
            node.getNode('constructor_end').setNode('_security_check', new node_1.TwingNode(nodes));
        }
        else {
            if (node.is(print_1.type) || node.is(set_1.type)) {
                this.needsToStringWrap = false;
            }
        }
        return node;
    }
    wrapNode(node, name) {
        let expr = node.getNode(name);
        if (expr.is(name_1.type) || expr.is(get_attribute_1.type)) {
            node.setNode(name, new check_to_string_1.TwingNodeCheckToString(expr));
        }
    }
    wrapArrayNode(node, name) {
        let args = node.getNode(name);
        for (let [name] of args.getNodes()) {
            this.wrapNode(args, name);
        }
    }
    getPriority() {
        return 0;
    }
}
exports.TwingNodeVisitorSandbox = TwingNodeVisitorSandbox;
