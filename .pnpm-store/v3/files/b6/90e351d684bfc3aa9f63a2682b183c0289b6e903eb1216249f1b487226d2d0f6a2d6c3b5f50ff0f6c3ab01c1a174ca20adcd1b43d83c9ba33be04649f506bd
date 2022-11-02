import { TwingTokenParserInterface } from "./token-parser-interface";
import { TwingFilter } from "./filter";
import { TwingFunction } from "./function";
import { TwingNodeVisitorInterface } from "./node-visitor-interface";
import { TwingExtensionInterface } from "./extension-interface";
import { TwingTest } from "./test";
import { TwingOperator } from "./operator";
import { TwingSourceMapNodeFactory } from "./source-map/node-factory";
export declare class TwingExtensionSet {
    private initialized;
    private runtimeInitialized;
    private visitors;
    private filters;
    private tests;
    private functions;
    private unaryOperators;
    private binaryOperators;
    private tokenParsers;
    private sourceMapNodeFactories;
    readonly extensions: Map<string, TwingExtensionInterface>;
    constructor();
    hasExtension(name: string): boolean;
    getExtension(name: string): TwingExtensionInterface;
    /**
     * Registers somes extensions.
     *
     * @param {Map<string, TwingExtensionInterface>} extensions
     */
    addExtensions(extensions: Map<string, TwingExtensionInterface>): void;
    /**
     * Returns all registered extensions.
     *
     * @return Map<string, TwingExtensionInterface>
     */
    getExtensions(): Map<string, TwingExtensionInterface>;
    getSignature(): string;
    isInitialized(): boolean;
    getNodeVisitors(): TwingNodeVisitorInterface[];
    getTokenParsers(): TwingTokenParserInterface[];
    /**
     * Registers an extension.
     *
     * @param {TwingExtensionInterface} extension A TwingExtensionInterface instance
     * @param {string} name A name the extension will be registered as
     */
    addExtension(extension: TwingExtensionInterface, name: string): void;
    addTokenParser(parser: TwingTokenParserInterface): void;
    /**
     * Gets the registered unary Operators.
     *
     * @return Map<string, TwingOperator> A map of unary operator definitions
     */
    getUnaryOperators(): Map<string, TwingOperator>;
    /**
     * Gets the registered binary Operators.
     *
     * @return Map<string, TwingOperator> A map of binary operators
     */
    getBinaryOperators(): Map<string, TwingOperator>;
    addFunction(twingFunction: TwingFunction): void;
    getFunctions(): Map<string, TwingFunction>;
    /**
     * Get a function by name.
     *
     * @param {string} name         function name
     * @returns {TwingFunction}     A TwingFunction instance or null if the function does not exist
     */
    getFunction(name: string): TwingFunction;
    addFilter(filter: TwingFilter): void;
    getFilters(): Map<string, TwingFilter>;
    /**
     * Get a filter by name.
     *
     * @param {string} name The filter name
     *
     * @return {TwingFilter|false} A TwingFilter instance or false if the filter does not exist
     */
    getFilter(name: string): TwingFilter;
    addNodeVisitor(visitor: TwingNodeVisitorInterface): void;
    addTest(test: TwingTest): void;
    /**
     *
     * @returns {Map<string, TwingTest>}
     */
    getTests(): Map<string, TwingTest>;
    /**
     * Gets a test by name.
     *
     * @param {string} name The test name
     * @returns {TwingTest} A TwingTest instance or null if the test does not exist
     */
    getTest(name: string): TwingTest;
    addOperator(operator: TwingOperator): void;
    addSourceMapNodeFactory(factory: TwingSourceMapNodeFactory): void;
    /**
     * @return Map<TwingNodeType, TwingSourceMapNodeFactory>
     */
    getSourceMapNodeFactories(): Map<string, TwingSourceMapNodeFactory>;
    /**
     * @param nodeType
     *
     * @return TwingSourceMapNodeFactory | null
     */
    getSourceMapNodeFactory(nodeType: string): TwingSourceMapNodeFactory;
    protected initExtensions(): void;
    protected initExtension(extension: TwingExtensionInterface): void;
}
