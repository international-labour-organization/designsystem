import { TwingNodeExpression } from "../expression";
import { TwingNode } from "../../node";
import { TwingCompiler } from "../../compiler";
export declare abstract class TwingNodeExpressionBinary extends TwingNodeExpression {
    constructor(nodes: [TwingNode, TwingNode], lineno: number, columno: number);
    compile(compiler: TwingCompiler): void;
    /**
     *
     * @param {TwingCompiler} compiler
     * @returns {TwingCompiler}
     */
    operator(compiler: TwingCompiler): TwingCompiler;
}
