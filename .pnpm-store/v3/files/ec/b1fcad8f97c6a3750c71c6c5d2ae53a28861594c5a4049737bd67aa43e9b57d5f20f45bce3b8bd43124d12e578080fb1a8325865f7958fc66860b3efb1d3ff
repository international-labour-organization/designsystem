import { TwingNodeExpressionFilter } from "./node/expression/filter";
import { TwingCallableWrapper } from "./callable-wrapper";
export class TwingFilter extends TwingCallableWrapper {
    constructor(name, callable, acceptedArguments, options = {}) {
        super(name, callable, acceptedArguments);
        this.options.pre_escape = null;
        this.options.preserves_safety = null;
        this.options.expression_factory = function (node, filterName, methodArguments, lineno, columnno, tag = null) {
            return new TwingNodeExpressionFilter(node, filterName, methodArguments, lineno, columnno, tag);
        };
        this.options = Object.assign({}, this.options, options);
    }
    getPreservesSafety() {
        return this.options.preserves_safety;
    }
    getPreEscape() {
        return this.options.pre_escape;
    }
}
