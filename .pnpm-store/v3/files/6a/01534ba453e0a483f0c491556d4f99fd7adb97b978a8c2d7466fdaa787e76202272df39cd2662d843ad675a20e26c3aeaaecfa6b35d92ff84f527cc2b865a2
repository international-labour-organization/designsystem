import { TwingNodeExpression } from "../expression";
import { TwingNode } from "../../node";
import { TwingCompiler } from "../../compiler";
import { TwingNodeType } from "../../node-type";
export declare const type: TwingNodeType;
export declare class TwingNodeExpressionBlockReference extends TwingNodeExpression {
    constructor(name: TwingNode, template: TwingNode, lineno: number, columnno: number, tag?: string);
    get type(): TwingNodeType;
    compile(compiler: TwingCompiler): void;
    compileTemplateCall(compiler: TwingCompiler, method: string, needsOutputBuffer: boolean): TwingCompiler;
    compileBlockArguments(compiler: TwingCompiler, needsOutputBuffer: boolean): TwingCompiler;
}
