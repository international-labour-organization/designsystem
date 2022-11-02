import { TwingNodeExpression } from "../expression";
import { TwingCompiler } from "../../compiler";
import { TwingNodeType } from "../../node-type";
export declare const type: TwingNodeType;
export declare class TwingNodeExpressionArray extends TwingNodeExpression {
    private index;
    constructor(elements: Map<string | number, TwingNodeExpression>, lineno: number, columno: number);
    get type(): TwingNodeType;
    getKeyValuePairs(): Array<{
        key: TwingNodeExpression;
        value: TwingNodeExpression;
    }>;
    addElement(value: TwingNodeExpression, key?: TwingNodeExpression): void;
    compile(compiler: TwingCompiler): void;
}
