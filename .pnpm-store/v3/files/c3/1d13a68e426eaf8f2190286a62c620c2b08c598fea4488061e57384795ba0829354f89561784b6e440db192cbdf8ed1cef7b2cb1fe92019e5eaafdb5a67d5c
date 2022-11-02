"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingFunction = void 0;
const function_1 = require("./node/expression/function");
const callable_wrapper_1 = require("./callable-wrapper");
class TwingFunction extends callable_wrapper_1.TwingCallableWrapper {
    /**
     * Creates a template function.
     *
     * @param {string} name Name of this function
     * @param {TwingCallable<any>} callable A callable implementing the function. If null, you need to overwrite the "expression_factory" option to customize compilation.
     * @param {TwingCallableArgument[]} acceptedArguments
     * @param {TwingCallableWrapperOptions} options Options
     */
    constructor(name, callable, acceptedArguments, options = {}) {
        super(name, callable, acceptedArguments);
        this.options.expression_factory = function (name, functionArguments, line, columnno) {
            return new function_1.TwingNodeExpressionFunction(name, functionArguments, line, columnno);
        };
        this.options = Object.assign({}, this.options, options);
    }
}
exports.TwingFunction = TwingFunction;
