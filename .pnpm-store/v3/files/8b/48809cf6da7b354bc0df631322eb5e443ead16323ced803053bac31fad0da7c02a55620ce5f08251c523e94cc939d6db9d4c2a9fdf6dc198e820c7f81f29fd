import { TwingNode } from "../node";
import { TwingCompiler } from "../compiler";
import { TwingNodeType } from "../node-type";
export declare const type: TwingNodeType;
export declare class TwingNodeCheckSecurity extends TwingNode {
    private usedFilters;
    private usedTags;
    private usedFunctions;
    constructor(usedFilters: Map<string, TwingNode | string>, usedTags: Map<string, TwingNode | string>, usedFunctions: Map<string, TwingNode | string>);
    get type(): TwingNodeType;
    compile(compiler: TwingCompiler): void;
}
