import { TwingNode } from "../node";
import { TwingNodeOutputInterface } from "../node-output-interface";
import { TwingNodeExpression } from "./expression";
import { TwingCompiler } from "../compiler";
import { TwingNodeType } from "../node-type";
export declare const type: TwingNodeType;
export declare class TwingNodePrint extends TwingNode implements TwingNodeOutputInterface {
    TwingNodeOutputInterfaceImpl: TwingNodeOutputInterface;
    constructor(expr: TwingNodeExpression, lineno: number, columnno: number, tag?: string);
    get type(): TwingNodeType;
    compile(compiler: TwingCompiler): void;
}
