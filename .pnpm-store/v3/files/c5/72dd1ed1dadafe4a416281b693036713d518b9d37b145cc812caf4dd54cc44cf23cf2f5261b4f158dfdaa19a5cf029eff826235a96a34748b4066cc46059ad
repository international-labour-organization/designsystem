"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeVisitorMacroAutoImport = void 0;
const base_node_visitor_1 = require("../base-node-visitor");
const import_1 = require("../node/import");
const name_1 = require("../node/expression/name");
const assign_name_1 = require("../node/expression/assign-name");
const method_call_1 = require("../node/expression/method-call");
const module_1 = require("../node/module");
const get_attribute_1 = require("../node/expression/get-attribute");
const constant_1 = require("../node/expression/constant");
class TwingNodeVisitorMacroAutoImport extends base_node_visitor_1.TwingBaseNodeVisitor {
    constructor() {
        super(...arguments);
        this.hasMacroCalls = false;
    }
    doEnterNode(node, env) {
        if (node.type == module_1.type) {
            this.hasMacroCalls = false;
        }
        return node;
    }
    doLeaveNode(node, env) {
        if (node.type == module_1.type) {
            if (this.hasMacroCalls) {
                node.getNode('constructor_end').setNode('_auto_macro_import', new import_1.TwingNodeImport(new name_1.TwingNodeExpressionName('_self', 0, 0), new assign_name_1.TwingNodeExpressionAssignName('_self', 0, 0), 0, 0, 'import', true));
            }
        }
        else {
            if ((node.type == get_attribute_1.type) && (node.getNode('node').is(name_1.type)) && (node.getNode('node').getAttribute('name') === '_self') && (node.getNode('attribute').is(constant_1.type))) {
                this.hasMacroCalls = true;
                let name = node.getNode('attribute').getAttribute('value');
                node = new method_call_1.TwingNodeExpressionMethodCall(node.getNode('node'), name, node.getNode('arguments'), node.getTemplateLine(), node.getTemplateColumn());
                node.setAttribute('safe', true);
            }
        }
        return node;
    }
    getPriority() {
        // we must run before auto-escaping
        return -10;
    }
}
exports.TwingNodeVisitorMacroAutoImport = TwingNodeVisitorMacroAutoImport;
