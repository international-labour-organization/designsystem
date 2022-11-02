import { SourceNode } from "source-map";
import { TwingSource } from "../source";
export declare class TwingSourceMapNode {
    protected _name: string;
    protected _source: TwingSource;
    protected _line: number;
    protected _column: number;
    protected _parent: TwingSourceMapNode;
    protected _children: TwingSourceMapNode[];
    protected _content: string;
    /**
     * TwingSourceMapNode constructor
     *
     * @param {number} line 0-based
     * @param {number} column 0-based
     * @param {TwingSource} source
     * @param {string} name
     */
    constructor(line: number, column: number, source: TwingSource, name: string);
    get name(): string;
    get source(): TwingSource;
    get line(): number;
    get column(): number;
    get content(): string;
    get parent(): TwingSourceMapNode;
    get children(): TwingSourceMapNode[];
    set content(content: string);
    addChild(child: TwingSourceMapNode): void;
    toSourceNode(): SourceNode;
}
