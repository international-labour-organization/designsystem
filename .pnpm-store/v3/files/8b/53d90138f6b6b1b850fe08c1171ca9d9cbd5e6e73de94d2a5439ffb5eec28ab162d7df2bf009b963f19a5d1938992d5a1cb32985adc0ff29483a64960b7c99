"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionArray = exports.type = void 0;
const expression_1 = require("../expression");
const constant_1 = require("./constant");
const push_1 = require("../../helpers/push");
const ctype_digit_1 = require("../../helpers/ctype-digit");
const node_type_1 = require("../../node-type");
let array_chunk = require('locutus/php/array/array_chunk');
exports.type = new node_type_1.TwingNodeType('expression_array');
class TwingNodeExpressionArray extends expression_1.TwingNodeExpression {
    constructor(elements, lineno, columno) {
        super(elements, new Map(), lineno, columno);
        this.index = -1;
        for (let pair of this.getKeyValuePairs()) {
            let expression = pair.key;
            if ((expression.is(constant_1.type)) && (ctype_digit_1.ctypeDigit('' + expression.getAttribute('value'))) && (expression.getAttribute('value') > this.index)) {
                this.index = expression.getAttribute('value');
            }
        }
    }
    get type() {
        return exports.type;
    }
    getKeyValuePairs() {
        let pairs = [];
        array_chunk(Array.from(this.nodes.values()), 2).forEach(function (pair) {
            pairs.push({
                key: pair[0],
                value: pair[1]
            });
        });
        return pairs;
    }
    addElement(value, key = null) {
        if (key === null) {
            this.index++;
            key = new constant_1.TwingNodeExpressionConstant(this.index, value.getTemplateLine(), value.getTemplateColumn());
        }
        push_1.push(this.nodes, key);
        push_1.push(this.nodes, value);
    }
    compile(compiler) {
        compiler.raw('new Map([');
        let first = true;
        for (let pair of this.getKeyValuePairs()) {
            if (!first) {
                compiler.raw(', ');
            }
            first = false;
            compiler
                .raw('[')
                .subcompile(pair.key)
                .raw(', ')
                .subcompile(pair.value)
                .raw(']');
        }
        compiler.raw('])');
    }
}
exports.TwingNodeExpressionArray = TwingNodeExpressionArray;
