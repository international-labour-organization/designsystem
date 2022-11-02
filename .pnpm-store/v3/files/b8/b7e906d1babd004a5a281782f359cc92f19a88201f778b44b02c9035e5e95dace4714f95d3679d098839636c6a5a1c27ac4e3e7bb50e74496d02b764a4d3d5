"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionTest = exports.type = void 0;
const call_1 = require("./call");
const node_type_1 = require("../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_test');
class TwingNodeExpressionTest extends call_1.TwingNodeExpressionCall {
    constructor(node, name, nodeArguments, lineno, columnno) {
        let nodes = new Map();
        nodes.set('node', node);
        if (nodeArguments !== null) {
            nodes.set('arguments', nodeArguments);
        }
        super(nodes, new Map([['name', name]]), lineno, columnno);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        let name = this.getAttribute('name');
        let test = compiler.getEnvironment().getTest(name);
        this.setAttribute('name', name);
        this.setAttribute('type', 'test');
        this.setAttribute('needs_template', test.needsTemplate());
        this.setAttribute('arguments', test.getArguments());
        this.setAttribute('callable', test.getCallable());
        this.setAttribute('is_variadic', test.isVariadic());
        this.setAttribute('accepted_arguments', test.getAcceptedArgments());
        super.compileCallable(compiler);
    }
}
exports.TwingNodeExpressionTest = TwingNodeExpressionTest;
