"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionName = exports.type = void 0;
const expression_1 = require("../expression");
const node_type_1 = require("../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_name');
class TwingNodeExpressionName extends expression_1.TwingNodeExpression {
    constructor(name, lineno, columnno) {
        let attributes = new Map();
        attributes.set('name', name);
        attributes.set('is_defined_test', false);
        attributes.set('ignore_strict_check', false);
        attributes.set('always_defined', false);
        super(new Map(), attributes, lineno, columnno);
        this.specialVars = new Map([
            ['_self', 'this.templateName'],
            ['_context', 'context'],
            ['_charset', 'this.environment.getCharset()']
        ]);
    }
    get type() {
        return exports.type;
    }
    compile(compiler) {
        let name = this.getAttribute('name');
        if (this.getAttribute('is_defined_test')) {
            if (this.isSpecial()) {
                compiler.repr(true);
            }
            else {
                compiler.raw('(context.has(').repr(name).raw('))');
            }
        }
        else if (this.isSpecial()) {
            compiler.raw(this.specialVars.get(name));
        }
        else if (this.getAttribute('always_defined')) {
            compiler
                .raw('context.get(')
                .string(name)
                .raw(')');
        }
        else {
            if (this.getAttribute('ignore_strict_check') || !compiler.getEnvironment().isStrictVariables()) {
                compiler
                    .raw('(context.has(')
                    .string(name)
                    .raw(') ? context.get(')
                    .string(name)
                    .raw(') : null)');
            }
            else {
                compiler
                    .raw('(context.has(')
                    .string(name)
                    .raw(') ? context.get(')
                    .string(name)
                    .raw(') : (() => { throw new this.RuntimeError(\'Variable ')
                    .string(name)
                    .raw(' does not exist.\', ')
                    .repr(this.lineno)
                    .raw(', this.source); })()')
                    .raw(')');
            }
        }
    }
    isSpecial() {
        return this.specialVars.has(this.getAttribute('name'));
    }
    isSimple() {
        return !this.isSpecial() && !this.getAttribute('is_defined_test');
    }
}
exports.TwingNodeExpressionName = TwingNodeExpressionName;
