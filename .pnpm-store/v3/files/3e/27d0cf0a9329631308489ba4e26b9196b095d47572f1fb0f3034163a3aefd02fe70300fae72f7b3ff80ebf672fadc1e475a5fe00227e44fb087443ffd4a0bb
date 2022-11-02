import { TwingNodeExpression } from "./expression";
import { TwingNodeInclude } from "./include";
import { TwingCompiler } from "../compiler";
import { TwingNodeType } from "../node-type";
export declare const type: TwingNodeType;
export declare class TwingNodeEmbed extends TwingNodeInclude {
    constructor(name: string, index: number, variables: TwingNodeExpression, only: boolean, ignoreMissing: boolean, lineno: number, columnno: number, tag: string);
    get type(): TwingNodeType;
    protected addGetTemplate(compiler: TwingCompiler): void;
}
