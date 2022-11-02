import { TwingBaseNodeVisitor } from "../base-node-visitor";
import { TwingEnvironment } from "../environment";
import { TwingNode } from "../node";
export declare class TwingNodeVisitorSandbox extends TwingBaseNodeVisitor {
    private tags;
    private filters;
    private functions;
    private needsToStringWrap;
    constructor();
    protected doEnterNode(node: TwingNode, env: TwingEnvironment): TwingNode;
    protected doLeaveNode(node: TwingNode, env: TwingEnvironment): TwingNode;
    private wrapNode;
    private wrapArrayNode;
    getPriority(): number;
}
