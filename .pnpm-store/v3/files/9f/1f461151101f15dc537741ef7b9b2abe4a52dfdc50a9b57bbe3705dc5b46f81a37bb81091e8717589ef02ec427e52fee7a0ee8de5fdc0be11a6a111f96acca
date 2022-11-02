"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeSandbox = exports.type = void 0;
const node_1 = require("../node");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('sandbox');
class TwingNodeSandbox extends node_1.TwingNode {
    constructor(body, lineno, columnno, tag = null) {
        super(new Map([['body', body]]), new Map(), lineno, columnno, tag);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .write('await (async () => {\n')
            .indent()
            .write('let alreadySandboxed = this.environment.isSandboxed();\n')
            .write("if (!alreadySandboxed) {\n")
            .indent()
            .write("this.environment.enableSandbox();\n")
            .outdent()
            .write("}\n")
            .subcompile(this.getNode('body'))
            .write("if (!alreadySandboxed) {\n")
            .indent()
            .write("this.environment.disableSandbox();\n")
            .outdent()
            .write("}\n")
            .outdent()
            .write("})();\n");
    }
}
exports.TwingNodeSandbox = TwingNodeSandbox;
