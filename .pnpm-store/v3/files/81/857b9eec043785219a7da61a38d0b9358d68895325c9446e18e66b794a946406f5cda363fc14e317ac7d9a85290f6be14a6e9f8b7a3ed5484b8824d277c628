import { TwingNode } from "../node";
import { TwingCompiler } from "../compiler";
import { TwingNodeOutputInterface } from "../node-output-interface";
import { TwingNodeType } from "../node-type";
export declare const type: TwingNodeType;
export declare class TwingNodeText extends TwingNode implements TwingNodeOutputInterface {
    TwingNodeOutputInterfaceImpl: TwingNodeOutputInterface;
    constructor(data: string, lineno: number, columnno: number, tag?: string);
    get type(): TwingNodeType;
    compile(compiler: TwingCompiler): void;
}
