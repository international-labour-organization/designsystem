import { TwingBaseNodeVisitor } from "../base-node-visitor";
import { TwingNodeImport } from "../node/import";
import { TwingNodeExpressionName, type as nameType } from "../node/expression/name";
import { TwingNodeExpressionAssignName } from "../node/expression/assign-name";
import { TwingNodeExpressionMethodCall } from "../node/expression/method-call";
import { type as moduleType } from "../node/module";
import { type as getAttrType } from "../node/expression/get-attribute";
import { type as constantType } from "../node/expression/constant";
export class TwingNodeVisitorMacroAutoImport extends TwingBaseNodeVisitor {
    constructor() {
        super(...arguments);
        this.hasMacroCalls = false;
    }
    doEnterNode(node, env) {
        if (node.type == moduleType) {
            this.hasMacroCalls = false;
        }
        return node;
    }
    doLeaveNode(node, env) {
        if (node.type == moduleType) {
            if (this.hasMacroCalls) {
                node.getNode('constructor_end').setNode('_auto_macro_import', new TwingNodeImport(new TwingNodeExpressionName('_self', 0, 0), new TwingNodeExpressionAssignName('_self', 0, 0), 0, 0, 'import', true));
            }
        }
        else {
            if ((node.type == getAttrType) && (node.getNode('node').is(nameType)) && (node.getNode('node').getAttribute('name') === '_self') && (node.getNode('attribute').is(constantType))) {
                this.hasMacroCalls = true;
                let name = node.getNode('attribute').getAttribute('value');
                node = new TwingNodeExpressionMethodCall(node.getNode('node'), name, node.getNode('arguments'), node.getTemplateLine(), node.getTemplateColumn());
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
