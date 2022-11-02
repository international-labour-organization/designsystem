/**
 * TwingNodeTraverser is a node traverser.
 *
 * It visits all nodes and their children and calls the given visitor for each.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
import { TwingEnvironment } from "./environment";
import { TwingNodeVisitorInterface } from "./node-visitor-interface";
import { TwingNode } from "./node";
export declare class TwingNodeTraverser {
    private env;
    private visitors;
    /**
     *
     * @param {TwingEnvironment} env
     * @param {Array<TwingNodeVisitorInterface>} visitors
     */
    constructor(env: TwingEnvironment, visitors?: Array<TwingNodeVisitorInterface>);
    addVisitor(visitor: TwingNodeVisitorInterface): void;
    /**
     * Traverses a node and calls the registered visitors.
     *
     * @return TwingNode
     */
    traverse(node: TwingNode): TwingNode;
    traverseForVisitor(visitor: TwingNodeVisitorInterface, node: TwingNode): TwingNode;
}
