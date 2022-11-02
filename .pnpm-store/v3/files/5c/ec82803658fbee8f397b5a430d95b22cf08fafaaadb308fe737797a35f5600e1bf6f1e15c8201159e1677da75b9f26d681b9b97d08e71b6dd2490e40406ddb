import { TwingNodeExpressionTest } from "../test";
import { TwingNode } from "../../../node";
import { TwingNodeExpression } from "../../expression";
import { TwingCompiler } from "../../../compiler";
import { TwingNodeType } from "../../../node-type";
export declare const type: TwingNodeType;
/**
 * Checks if a variable is defined in the active context.
 *
 * <pre>
 * {# defined works with variable names and variable attributes #}
 * {% if foo is defined %}
 *     {# ... #}
 * {% endif %}
 * </pre>
 */
export declare class TwingNodeExpressionTestDefined extends TwingNodeExpressionTest {
    constructor(node: TwingNodeExpression, name: string, nodeArguments: TwingNode, lineno: number, columnno: number);
    get type(): TwingNodeType;
    changeIgnoreStrictCheck(node: TwingNodeExpression): void;
    compile(compiler: TwingCompiler): void;
}
