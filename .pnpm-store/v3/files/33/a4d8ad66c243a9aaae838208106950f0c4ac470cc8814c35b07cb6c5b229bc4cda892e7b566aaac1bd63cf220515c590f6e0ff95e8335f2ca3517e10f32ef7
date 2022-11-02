"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeSandboxedPrint = exports.type = void 0;
const print_1 = require("./print");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('sandboxed_print');
class TwingNodeSandboxedPrint extends print_1.TwingNodePrint {
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .write('outputBuffer.echo(this.environment.ensureToStringAllowed(')
            .subcompile(this.getNode('expr'))
            .raw("));\n");
    }
}
exports.TwingNodeSandboxedPrint = TwingNodeSandboxedPrint;
