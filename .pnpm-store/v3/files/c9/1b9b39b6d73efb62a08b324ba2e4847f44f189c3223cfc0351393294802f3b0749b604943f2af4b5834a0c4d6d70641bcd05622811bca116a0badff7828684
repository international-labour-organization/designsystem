"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionFunction = exports.type = void 0;
const call_1 = require("./call");
const node_type_1 = require("../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_function');
class TwingNodeExpressionFunction extends call_1.TwingNodeExpressionCall {
    constructor(name, functionArguments, lineno, columnno) {
        let nodes = new Map([
            ['arguments', functionArguments]
        ]);
        let attributes = new Map();
        attributes.set('name', name);
        attributes.set('is_defined_test', false);
        super(nodes, attributes, lineno, columnno);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        let name = this.getAttribute('name');
        let function_ = compiler.getEnvironment().getFunction(name);
        let callable = function_.getCallable();
        this.setAttribute('name', name);
        this.setAttribute('type', 'function');
        this.setAttribute('needs_template', function_.needsTemplate());
        this.setAttribute('needs_context', function_.needsContext());
        this.setAttribute('needs_output_buffer', function_.needsOutputBuffer());
        this.setAttribute('arguments', function_.getArguments());
        this.setAttribute('callable', callable);
        this.setAttribute('is_variadic', function_.isVariadic());
        this.setAttribute('accepted_arguments', function_.getAcceptedArgments());
        this.compileCallable(compiler);
    }
}
exports.TwingNodeExpressionFunction = TwingNodeExpressionFunction;
