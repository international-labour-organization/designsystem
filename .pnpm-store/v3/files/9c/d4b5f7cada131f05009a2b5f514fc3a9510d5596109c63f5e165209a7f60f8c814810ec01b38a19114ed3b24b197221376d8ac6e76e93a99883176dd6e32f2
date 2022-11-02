"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionBlockReference = exports.type = void 0;
const expression_1 = require("../expression");
const node_type_1 = require("../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_block_reference');
class TwingNodeExpressionBlockReference extends expression_1.TwingNodeExpression {
    constructor(name, template, lineno, columnno, tag = null) {
        let nodes = new Map();
        nodes.set('name', name);
        if (template) {
            nodes.set('template', template);
        }
        let attributes = new Map([
            ['is_defined_test', false],
            ['output', false]
        ]);
        super(nodes, attributes, lineno, columnno, tag);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        if (this.getAttribute('is_defined_test')) {
            this.compileTemplateCall(compiler, 'traceableHasBlock', false);
        }
        else {
            this.compileTemplateCall(compiler, 'traceableRenderBlock', true);
        }
    }
    compileTemplateCall(compiler, method, needsOutputBuffer) {
        compiler.write('await ');
        if (!this.hasNode('template')) {
            compiler.raw('this');
        }
        else {
            compiler
                .raw('(await this.loadTemplate(')
                .subcompile(this.getNode('template'))
                .raw(', ')
                .repr(this.getTemplateLine())
                .raw('))');
        }
        compiler.raw(`.${method}(${this.getTemplateLine()}, this.source)`);
        this.compileBlockArguments(compiler, needsOutputBuffer);
        return compiler;
    }
    compileBlockArguments(compiler, needsOutputBuffer) {
        compiler
            .raw('(')
            .subcompile(this.getNode('name'))
            .raw(', context.clone()');
        if (needsOutputBuffer) {
            compiler.raw(', outputBuffer');
        }
        if (!this.hasNode('template')) {
            compiler.raw(', blocks');
        }
        return compiler.raw(')');
    }
}
exports.TwingNodeExpressionBlockReference = TwingNodeExpressionBlockReference;
