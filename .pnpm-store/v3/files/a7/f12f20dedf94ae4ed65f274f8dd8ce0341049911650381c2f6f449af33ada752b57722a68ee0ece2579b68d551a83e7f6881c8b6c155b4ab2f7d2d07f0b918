import { TwingBaseNodeVisitor } from "../base-node-visitor";
import { TwingNode } from "../node";
import { TwingEnvironment } from "../environment";
export declare class TwingNodeVisitorSafeAnalysis extends TwingBaseNodeVisitor {
    private data;
    private safeVars;
    constructor();
    setSafeVars(safeVars: Array<any>): void;
    /**
     *
     * @param {TwingNode} node
     * @returns {Array<string>}
     */
    getSafe(node: TwingNode): Array<TwingNode | string | false>;
    private setSafe;
    protected doEnterNode(node: TwingNode, env: TwingEnvironment): TwingNode;
    protected doLeaveNode(node: TwingNode, env: TwingEnvironment): TwingNode;
    private intersectSafe;
    getPriority(): number;
}
