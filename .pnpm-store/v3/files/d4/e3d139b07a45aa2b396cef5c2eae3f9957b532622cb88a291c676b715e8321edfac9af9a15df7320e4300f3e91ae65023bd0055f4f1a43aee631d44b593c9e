import { TwingNode } from "../../node";
import { TwingNodeExpressionConstant } from "./constant";
import { TwingNodeExpressionCall } from "./call";
import { TwingCompiler } from "../../compiler";
import { TwingNodeType } from "../../node-type";
export declare const type: TwingNodeType;
export declare class TwingNodeExpressionFilter extends TwingNodeExpressionCall {
    constructor(node: TwingNode, filterName: TwingNodeExpressionConstant, methodArguments: TwingNode, lineno: number, columnno: number, tag?: string);
    get type(): TwingNodeType;
    compile(compiler: TwingCompiler): void;
}
