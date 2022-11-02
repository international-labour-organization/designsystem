import { TwingNode } from "../node";
import { TwingNodeExpression } from "./expression";
import { TwingCompiler } from "../compiler";
import { TwingNodeType } from "../node-type";
export declare const type: TwingNodeType;
export declare class TwingNodeInclude extends TwingNode {
    constructor(expr: TwingNodeExpression, variables: TwingNodeExpression, only: boolean, ignoreMissing: boolean, lineno: number, columnno: number, tag?: string);
    get type(): TwingNodeType;
    compile(compiler: TwingCompiler): void;
    protected addGetTemplate(compiler: TwingCompiler): void;
}
