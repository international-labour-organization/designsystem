import { TwingNode } from "../node";
import { TwingCompiler } from "../compiler";
import { TwingNodeCaptureInterface } from "../node-capture-interface";
import { TwingNodeType } from "../node-type";
export declare const type: TwingNodeType;
export declare class TwingNodeSet extends TwingNode implements TwingNodeCaptureInterface {
    TwingNodeCaptureInterfaceImpl: TwingNodeCaptureInterface;
    constructor(capture: boolean, names: TwingNode, values: TwingNode, lineno: number, columnno: number, tag?: string);
    get type(): TwingNodeType;
    compile(compiler: TwingCompiler): void;
}
