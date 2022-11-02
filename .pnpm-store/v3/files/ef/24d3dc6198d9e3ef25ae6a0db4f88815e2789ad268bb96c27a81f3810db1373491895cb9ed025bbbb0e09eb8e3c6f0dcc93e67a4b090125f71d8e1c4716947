import { TwingNodeExpression } from "../expression";
import { TwingNodeExpressionConstant, type as constantType } from "./constant";
import { push } from "../../helpers/push";
import { ctypeDigit } from "../../helpers/ctype-digit";
import { TwingNodeType } from "../../node-type";
let array_chunk = require('locutus/php/array/array_chunk');
export const type = new TwingNodeType('expression_array');
export class TwingNodeExpressionArray extends TwingNodeExpression {
    constructor(elements, lineno, columno) {
        super(elements, new Map(), lineno, columno);
        this.index = -1;
        for (let pair of this.getKeyValuePairs()) {
            let expression = pair.key;
            if ((expression.is(constantType)) && (ctypeDigit('' + expression.getAttribute('value'))) && (expression.getAttribute('value') > this.index)) {
                this.index = expression.getAttribute('value');
            }
        }
    }
    get type() {
        return type;
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
            key = new TwingNodeExpressionConstant(this.index, value.getTemplateLine(), value.getTemplateColumn());
        }
        push(this.nodes, key);
        push(this.nodes, value);
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
