import { TwingNodeExpression } from "../expression";
import { TwingNodeExpressionArray } from "./array";
import { TwingCompiler } from "../../compiler";
import { TwingNodeType } from "../../node-type";
export declare const type: TwingNodeType;
export declare class TwingNodeExpressionMethodCall extends TwingNodeExpression {
    constructor(node: TwingNodeExpression, method: string, methodArguments: TwingNodeExpressionArray, lineno: number, columnno: number);
    get type(): TwingNodeType;
    compile(compiler: TwingCompiler): void;
}
