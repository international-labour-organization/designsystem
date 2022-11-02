"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionFilter = exports.type = void 0;
const call_1 = require("./call");
const node_type_1 = require("../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_filter');
class TwingNodeExpressionFilter extends call_1.TwingNodeExpressionCall {
    constructor(node, filterName, methodArguments, lineno, columnno, tag = null) {
        let nodes = new Map();
        nodes.set('node', node);
        nodes.set('filter', filterName);
        nodes.set('arguments', methodArguments);
        super(nodes, new Map(), lineno, columnno, tag);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        let name = this.getNode('filter').getAttribute('value');
        let filter = compiler.getEnvironment().getFilter(name);
        let callable = filter.getCallable();
        this.setAttribute('name', name);
        this.setAttribute('type', 'filter');
        this.setAttribute('needs_template', filter.needsTemplate());
        this.setAttribute('needs_context', filter.needsContext());
        this.setAttribute('arguments', filter.getArguments());
        this.setAttribute('callable', callable);
        this.setAttribute('is_variadic', filter.isVariadic());
        this.setAttribute('accepted_arguments', filter.getAcceptedArgments());
        this.compileCallable(compiler);
    }
}
exports.TwingNodeExpressionFilter = TwingNodeExpressionFilter;
