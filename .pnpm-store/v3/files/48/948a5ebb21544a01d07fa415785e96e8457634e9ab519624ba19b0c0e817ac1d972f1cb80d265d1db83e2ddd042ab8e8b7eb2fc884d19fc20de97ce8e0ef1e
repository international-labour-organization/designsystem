import { TwingBaseNodeVisitor } from "../base-node-visitor";
import { TwingNode } from "../node";
import { TwingEnvironment } from "../environment";
export declare class TwingNodeVisitorEscaper extends TwingBaseNodeVisitor {
    private statusStack;
    private blocks;
    private safeAnalysis;
    private traverser;
    private defaultStrategy;
    private safeVars;
    constructor();
    protected doEnterNode(node: TwingNode, env: TwingEnvironment): TwingNode;
    protected doLeaveNode(node: TwingNode, env: TwingEnvironment): TwingNode;
    private shouldUnwrapConditional;
    private unwrapConditional;
    private escapeInlinePrintNode;
    private escapePrintNode;
    private preEscapeFilterNode;
    private isSafeFor;
    /**
     * @returns string | Function | false
     */
    private needEscaping;
    private getEscaperFilter;
    getPriority(): number;
}
