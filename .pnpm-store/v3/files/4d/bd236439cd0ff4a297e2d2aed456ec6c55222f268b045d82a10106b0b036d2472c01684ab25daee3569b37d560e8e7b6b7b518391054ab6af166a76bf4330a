import { TwingNodeExpression } from "../expression";
import { TwingCompiler } from "../../compiler";
import { TwingNodeType } from "../../node-type";
export declare const type: TwingNodeType;
export declare class TwingNodeExpressionName extends TwingNodeExpression {
    private specialVars;
    constructor(name: string, lineno: number, columnno: number);
    get type(): TwingNodeType;
    compile(compiler: TwingCompiler): void;
    isSpecial(): boolean;
    isSimple(): boolean;
}
