import { ksort } from "./helpers/ksort";
import { push } from "./helpers/push";
export class TwingNodeTraverser {
    /**
     *
     * @param {TwingEnvironment} env
     * @param {Array<TwingNodeVisitorInterface>} visitors
     */
    constructor(env, visitors = []) {
        this.visitors = new Map();
        let self = this;
        this.env = env;
        for (let visitor of visitors) {
            self.addVisitor(visitor);
        }
    }
    addVisitor(visitor) {
        if (!this.visitors.has(visitor.getPriority())) {
            this.visitors.set(visitor.getPriority(), new Map());
        }
        push(this.visitors.get(visitor.getPriority()), visitor);
    }
    /**
     * Traverses a node and calls the registered visitors.
     *
     * @return TwingNode
     */
    traverse(node) {
        let self = this;
        let result = node;
        ksort(this.visitors);
        for (let [index, visitors] of this.visitors) {
            for (let [index, visitor] of visitors) {
                result = self.traverseForVisitor(visitor, node);
            }
        }
        return result;
    }
    traverseForVisitor(visitor, node) {
        let self = this;
        node = visitor.TwingNodeVisitorInterfaceImpl.enterNode(node, this.env);
        for (let [k, n] of node.getNodes()) {
            let m = self.traverseForVisitor(visitor, n);
            if (m) {
                if (m !== n) {
                    node.setNode(k, m);
                }
            }
            else {
                node.removeNode(k);
            }
        }
        return visitor.TwingNodeVisitorInterfaceImpl.leaveNode(node, this.env);
    }
}
