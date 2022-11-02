import { TwingNodeExpressionFunction } from "./node/expression/function";
import { TwingCallableWrapper } from "./callable-wrapper";
export class TwingFunction extends TwingCallableWrapper {
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
            return new TwingNodeExpressionFunction(name, functionArguments, line, columnno);
        };
        this.options = Object.assign({}, this.options, options);
    }
}
