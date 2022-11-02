import { TwingNodeExpressionConditional } from "./conditional";
import { TwingNode } from "../../node";
import { TwingCompiler } from "../../compiler";
import { TwingNodeType } from "../../node-type";
export declare const type: TwingNodeType;
export declare class TwingNodeExpressionNullCoalesce extends TwingNodeExpressionConditional {
    constructor(nodes: [TwingNode, TwingNode], lineno: number, columno: number);
    get type(): TwingNodeType;
    /**
     * null-coallesce node is also a conditional node.
     *
     * @param type
     */
    is(type: TwingNodeType): boolean;
    compile(compiler: TwingCompiler): void;
}
