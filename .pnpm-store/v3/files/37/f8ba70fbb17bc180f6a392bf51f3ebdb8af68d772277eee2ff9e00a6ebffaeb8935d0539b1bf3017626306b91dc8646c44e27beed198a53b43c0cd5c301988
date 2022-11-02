"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionMethodCall = exports.type = void 0;
const expression_1 = require("../expression");
const node_type_1 = require("../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_method_call');
class TwingNodeExpressionMethodCall extends expression_1.TwingNodeExpression {
    constructor(node, method, methodArguments, lineno, columnno) {
        let nodes = new Map();
        nodes.set('node', node);
        nodes.set('arguments', methodArguments);
        let attributes = new Map();
        attributes.set('method', method);
        attributes.set('safe', false);
        attributes.set('is_defined_test', false);
        super(nodes, attributes, lineno, columnno);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        if (this.getAttribute('is_defined_test')) {
            compiler
                .raw('(await aliases.proxy[')
                .repr(this.getNode('node').getAttribute('name'))
                .raw('].hasMacro(')
                .repr(this.getAttribute('method'))
                .raw('))');
        }
        else {
            compiler
                .raw('await this.callMacro(aliases.proxy[')
                .repr(this.getNode('node').getAttribute('name'))
                .raw('], ')
                .repr(this.getAttribute('method'))
                .raw(', outputBuffer')
                .raw(', [');
            let first = true;
            let argumentsNode = this.getNode('arguments');
            for (let pair of argumentsNode.getKeyValuePairs()) {
                if (!first) {
                    compiler.raw(', ');
                }
                first = false;
                compiler.subcompile(pair['value']);
            }
            compiler
                .raw('], ')
                .repr(this.getTemplateLine())
                .raw(', context, this.source)');
        }
    }
}
exports.TwingNodeExpressionMethodCall = TwingNodeExpressionMethodCall;
