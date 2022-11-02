import { TwingNode } from "../node";
import { TwingSource } from "../source";
import { TwingCompiler } from "../compiler";
import { TwingNodeType } from "../node-type";
export declare const type: TwingNodeType;
/**
 * Represents a module node that compiles into a JavaScript module.
 */
export declare class TwingNodeModule extends TwingNode {
    source: TwingSource;
    constructor(body: TwingNode, parent: TwingNode, blocks: TwingNode, macros: TwingNode, traits: TwingNode, embeddedTemplates: Array<{}>, source: TwingSource);
    get type(): TwingNodeType;
    setIndex(index: number): void;
    compile(compiler: TwingCompiler): void;
    protected compileTemplate(compiler: TwingCompiler): void;
    protected compileClassHeader(compiler: TwingCompiler): void;
    protected compileConstructor(compiler: TwingCompiler): void;
    protected compileDoGetTraits(compiler: TwingCompiler): void;
    protected compileDoGetParent(compiler: TwingCompiler): void;
    protected compileDoDisplay(compiler: TwingCompiler): void;
    protected compileIsTraitable(compiler: TwingCompiler): void;
    protected compileClassfooter(compiler: TwingCompiler): void;
}
