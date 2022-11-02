"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeBlockReference = exports.type = void 0;
const node_1 = require("../node");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('block_reference');
/**
 * Represents a block call node.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
class TwingNodeBlockReference extends node_1.TwingNode {
    constructor(name, lineno, columnno, tag = null) {
        super(new Map(), new Map([['name', name]]), lineno, columnno, tag);
        this.TwingNodeOutputInterfaceImpl = this;
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .write(`outputBuffer.echo(await this.traceableRenderBlock(${this.getTemplateLine()}, this.source)('${this.getAttribute('name')}', context.clone(), outputBuffer, blocks));\n`);
    }
}
exports.TwingNodeBlockReference = TwingNodeBlockReference;
