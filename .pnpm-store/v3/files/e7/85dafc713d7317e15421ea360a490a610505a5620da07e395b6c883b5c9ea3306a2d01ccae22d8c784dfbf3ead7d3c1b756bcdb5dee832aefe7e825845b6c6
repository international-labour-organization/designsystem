import { TwingNodeExpressionTest } from "./node/expression/test";
import { TwingCallableWrapper } from "./callable-wrapper";
export class TwingTest extends TwingCallableWrapper {
    /**
     * Creates a template test.
     *
     * @param {string} name Name of this test
     * @param {TwingCallable<boolean>} callable A callable implementing the test. If null, you need to overwrite the "node_class" option to customize compilation.
     * @param {TwingCallableArgument[]} acceptedArguments
     * @param {TwingCallableWrapperOptions} options Options
     */
    constructor(name, callable, acceptedArguments, options = {}) {
        super(name, callable, acceptedArguments);
        this.options.expression_factory = function (node, name, nodeArguments, lineno, columnno) {
            return new TwingNodeExpressionTest(node, name, nodeArguments, lineno, columnno);
        };
        this.options = Object.assign({}, this.options, options);
    }
}
