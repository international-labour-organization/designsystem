import { TwingNode } from "./node";
import { TwingEnvironment } from "./environment";
export declare class TwingCompiler {
    private readonly environment;
    private lastLine;
    private source;
    private indentation;
    private varNameSalt;
    constructor(environment: TwingEnvironment);
    /**
     * Returns the environment instance related to this compiler.
     *
     * @returns TwingEnvironment
     */
    getEnvironment(): TwingEnvironment;
    getSource(): string;
    compile(node: TwingNode, indentation?: number): TwingCompiler;
    subcompile(node: TwingNode, raw?: boolean): TwingCompiler;
    /**
     *
     * @param string
     * @returns
     */
    raw(string: any): TwingCompiler;
    /**
     * Writes a string to the compiled code by adding indentation.
     *
     * @returns {TwingCompiler}
     */
    write(...strings: Array<string>): TwingCompiler;
    /**
     * Adds a quoted string to the compiled code.
     *
     * @param {string} value The string
     *
     * @returns {TwingCompiler}
     */
    string(value: string): TwingCompiler;
    repr(value: any): any;
    /**
     * Adds source-map enter call.
     *
     * @returns TwingCompiler
     */
    addSourceMapEnter(node: TwingNode): this;
    /**
     * Adds source-map leave call.
     *
     * @returns TwingCompiler
     */
    addSourceMapLeave(): this;
    /**
     * Indents the generated code.
     *
     * @param {number} step The number of indentation to add
     *
     * @returns TwingCompiler
     */
    indent(step?: number): this;
    /**
     * Outdents the generated code.
     *
     * @param {number} step The number of indentation to remove
     *
     * @return TwingCompiler
     *
     * @throws Error When trying to outdent too much so the indentation would become negative
     */
    outdent(step?: number): this;
}
