import { TwingNodeVisitorInterface } from "./node-visitor-interface";
import { TwingNode } from "./node";
import { TwingEnvironment } from "./environment";
export declare abstract class TwingBaseNodeVisitor implements TwingNodeVisitorInterface {
    TwingNodeVisitorInterfaceImpl: TwingNodeVisitorInterface;
    constructor();
    abstract getPriority(): number;
    /**
     * Called before child nodes are visited.
     *
     * @returns {TwingNode} The modified node
     */
    enterNode(node: TwingNode, env: TwingEnvironment): TwingNode;
    /**
     * Called after child nodes are visited.
     *
     * @returns {TwingNode|false} The modified node or null if the node must be removed
     */
    leaveNode(node: TwingNode, env: TwingEnvironment): TwingNode;
    /**
     * Called before child nodes are visited.
     *
     * @returns {TwingNode} The modified node
     */
    protected abstract doEnterNode(node: TwingNode, env: TwingEnvironment): TwingNode;
    /**
     * Called after child nodes are visited.
     *
     * @returns {TwingNode|false} The modified node or null if the node must be removed
     */
    protected abstract doLeaveNode(node: TwingNode, env: TwingEnvironment): TwingNode;
}
