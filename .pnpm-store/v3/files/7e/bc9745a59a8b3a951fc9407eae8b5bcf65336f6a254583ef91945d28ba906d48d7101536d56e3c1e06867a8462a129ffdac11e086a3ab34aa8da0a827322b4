import { TwingNode } from "../node";
import { TwingNodeExpression } from "./expression";
import { TwingNodeExpressionAssignName } from "./expression/assign-name";
import { TwingCompiler } from "../compiler";
import { TwingNodeType } from "../node-type";
export declare const type: TwingNodeType;
export declare class TwingNodeFor extends TwingNode {
    private loop;
    constructor(keyTarget: TwingNodeExpressionAssignName, valueTarget: TwingNodeExpressionAssignName, seq: TwingNodeExpression, ifexpr: TwingNodeExpression, body: TwingNode, elseNode: TwingNode, lineno: number, columnno: number, tag?: string);
    get type(): TwingNodeType;
    compile(compiler: TwingCompiler): void;
}
