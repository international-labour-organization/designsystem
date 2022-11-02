"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTest = void 0;
const test_1 = require("./node/expression/test");
const callable_wrapper_1 = require("./callable-wrapper");
class TwingTest extends callable_wrapper_1.TwingCallableWrapper {
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
            return new test_1.TwingNodeExpressionTest(node, name, nodeArguments, lineno, columnno);
        };
        this.options = Object.assign({}, this.options, options);
    }
}
exports.TwingTest = TwingTest;
