export class TwingBaseNodeVisitor {
    constructor() {
        this.TwingNodeVisitorInterfaceImpl = this;
    }
    /**
     * Called before child nodes are visited.
     *
     * @returns {TwingNode} The modified node
     */
    enterNode(node, env) {
        return this.doEnterNode(node, env);
    }
    /**
     * Called after child nodes are visited.
     *
     * @returns {TwingNode|false} The modified node or null if the node must be removed
     */
    leaveNode(node, env) {
        return this.doLeaveNode(node, env);
    }
}
