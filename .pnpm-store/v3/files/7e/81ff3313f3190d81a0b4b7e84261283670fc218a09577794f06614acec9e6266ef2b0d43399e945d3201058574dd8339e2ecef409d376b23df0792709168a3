import { TwingNode } from "../node";
import { TwingCompiler } from "../compiler";
import { TwingNodeType } from "../node-type";
export declare const type: TwingNodeType;
export declare class TwingNodeBlock extends TwingNode {
    constructor(name: string, body: TwingNode, lineno: number, columnno: number, tag?: string);
    get type(): TwingNodeType;
    compile(compiler: TwingCompiler): void;
}
