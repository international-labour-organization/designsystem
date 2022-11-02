import { TwingNode } from "../node";
import { TwingNodeType } from "../node-type";
export const type = new TwingNodeType('block_reference');
/**
 * Represents a block call node.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export class TwingNodeBlockReference extends TwingNode {
    constructor(name, lineno, columnno, tag = null) {
        super(new Map(), new Map([['name', name]]), lineno, columnno, tag);
        this.TwingNodeOutputInterfaceImpl = this;
    }
    get type() {
        return type;
    }
    compile(compiler) {
        compiler
            .write(`outputBuffer.echo(await this.traceableRenderBlock(${this.getTemplateLine()}, this.source)('${this.getAttribute('name')}', context.clone(), outputBuffer, blocks));\n`);
    }
}
