import { TwingNode } from "../../node";
import { TwingNodeExpressionCall } from "./call";
import { TwingCompiler } from "../../compiler";
import { TwingNodeType } from "../../node-type";
export declare const type: TwingNodeType;
export declare class TwingNodeExpressionFunction extends TwingNodeExpressionCall {
    constructor(name: string, functionArguments: TwingNode, lineno: number, columnno: number);
    get type(): TwingNodeType;
    compile(compiler: TwingCompiler): void;
}
