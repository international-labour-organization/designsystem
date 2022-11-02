"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingFilter = void 0;
const filter_1 = require("./node/expression/filter");
const callable_wrapper_1 = require("./callable-wrapper");
class TwingFilter extends callable_wrapper_1.TwingCallableWrapper {
    constructor(name, callable, acceptedArguments, options = {}) {
        super(name, callable, acceptedArguments);
        this.options.pre_escape = null;
        this.options.preserves_safety = null;
        this.options.expression_factory = function (node, filterName, methodArguments, lineno, columnno, tag = null) {
            return new filter_1.TwingNodeExpressionFilter(node, filterName, methodArguments, lineno, columnno, tag);
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
exports.TwingFilter = TwingFilter;
