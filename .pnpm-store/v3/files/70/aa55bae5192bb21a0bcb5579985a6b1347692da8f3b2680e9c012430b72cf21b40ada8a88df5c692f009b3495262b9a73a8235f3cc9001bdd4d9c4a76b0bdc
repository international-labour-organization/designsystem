import { TwingCompiler } from "./compiler";
import { TwingNodeType } from "./node-type";
export declare class TwingNode {
    protected nodes: Map<number | string, TwingNode>;
    protected attributes: Map<string, any>;
    protected lineno: number;
    protected columnno: number;
    protected tag: string;
    private name;
    /**
     * Constructor.
     *
     * The nodes are automatically made available as properties ($this->node).
     * The attributes are automatically made available as array items ($this['name']).
     *
     * @param nodes Map<string | number, TwingNode>  A map of named nodes
     * @param attributes Map<string, any> A map of attributes (should not be nodes)
     * @param lineno number The line number
     * @param columnno number The column number
     * @param tag string The tag name associated with the Node
     */
    constructor(nodes?: Map<string | number, TwingNode>, attributes?: Map<string, any>, lineno?: number, columnno?: number, tag?: string);
    /**
     * @returns {TwingNode}
     */
    clone(): TwingNode;
    toString(): string;
    get type(): TwingNodeType;
    is(type: TwingNodeType): boolean;
    compile(compiler: TwingCompiler): void;
    getTemplateLine(): number;
    getTemplateColumn(): number;
    getNodeTag(): string;
    /**
     * @returns booleqn
     */
    hasAttribute(name: string): boolean;
    /**
     *
     * @param {string} name
     * @returns any
     */
    getAttribute(name: string): any;
    /**
     * @param {string} name
     * @param {*} value
     */
    setAttribute(name: string, value: any): void;
    removeAttribute(name: string): void;
    /**
     * @return bool
     */
    hasNode(name: any): boolean;
    /**
     * @return TwingNode
     */
    getNode(name: string | number): TwingNode;
    setNode(name: string | number, node: TwingNode): void;
    removeNode(name: string | number): void;
    count(): number;
    setTemplateName(name: string): void;
    getTemplateName(): string;
    getNodes(): Map<string | number, TwingNode>;
}
