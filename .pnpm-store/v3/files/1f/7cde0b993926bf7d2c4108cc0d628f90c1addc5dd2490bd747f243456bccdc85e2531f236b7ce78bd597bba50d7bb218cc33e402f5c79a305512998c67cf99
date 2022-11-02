/// <reference types="node" />
import { TwingTokenParserInterface } from "./token-parser-interface";
import { TwingNodeVisitorInterface } from "./node-visitor-interface";
import { TwingExtensionCore } from "./extension/core";
import { TwingExtensionInterface } from "./extension-interface";
import { TwingFilter } from "./filter";
import { TwingLexer } from "./lexer";
import { TwingParser, TwingParserOptions } from "./parser";
import { TwingTokenStream } from "./token-stream";
import { TwingSource } from "./source";
import { TwingLoaderInterface } from "./loader-interface";
import { TwingTest } from "./test";
import { TwingFunction } from "./function";
import { TwingTemplate } from "./template";
import { TwingCacheInterface } from "./cache-interface";
import { TwingNodeModule } from "./node/module";
import { EventEmitter } from 'events';
import { TwingOutputBuffer } from "./output-buffer";
import { TwingOperator } from "./operator";
import { TwingEnvironmentOptions } from "./environment-options";
import { TwingSourceMapNodeFactory } from "./source-map/node-factory";
export declare type TwingTemplateConstructor = new (e: TwingEnvironment) => TwingTemplate;
export declare type TwingTemplatesModule = (T: typeof TwingTemplate) => Map<number, TwingTemplateConstructor>;
export declare type TwingEscapingStrategyResolver = (name: string) => string | false;
export declare const VERSION: string;
/**
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export declare abstract class TwingEnvironment extends EventEmitter {
    private charset;
    private loader;
    private debug;
    private autoReload;
    private cache;
    private lexer;
    private parser;
    private globals;
    private loadedTemplates;
    private strictVariables;
    private originalCache;
    private extensionSet;
    private optionsHash;
    private sourceMapNode;
    private sourceMap;
    private autoescape;
    private coreExtension;
    private sandboxed;
    private sandboxPolicy;
    /**
     * Constructor.
     *
     * @param {TwingLoaderInterface} loader
     * @param {TwingEnvironmentOptions} options
     */
    constructor(loader: TwingLoaderInterface, options?: TwingEnvironmentOptions);
    getCoreExtension(): TwingExtensionCore;
    setCoreExtension(extension: TwingExtensionCore): void;
    /**
     * Enables debugging mode.
     */
    enableDebug(): void;
    /**
     * Disables debugging mode.
     */
    disableDebug(): void;
    /**
     * Checks if debug mode is enabled.
     *
     * @return {boolean} true if debug mode is enabled, false otherwise
     */
    isDebug(): boolean;
    /**
     * Enables the auto_reload option.
     */
    enableAutoReload(): void;
    /**
     * Disables the auto_reload option.
     */
    disableAutoReload(): void;
    /**
     * Checks if the auto_reload option is enabled.
     *
     * @return {boolean} true if auto_reload is enabled, false otherwise
     */
    isAutoReload(): boolean;
    /**
     * Enables the strict_variables option.
     */
    enableStrictVariables(): void;
    /**
     * Disables the strict_variables option.
     */
    disableStrictVariables(): void;
    /**
     * Checks if the strict_variables option is enabled.
     *
     * @return {boolean} true if strict_variables is enabled, false otherwise
     */
    isStrictVariables(): boolean;
    /**
     * Gets the active cache implementation.
     *
     * @param {boolean} original Whether to return the original cache option or the real cache instance
     *
     * @return {TwingCacheInterface|string|false} A TwingCacheInterface implementation, an absolute path to the compiled templates or false to disable cache
     */
    getCache(original?: boolean): TwingCacheInterface | string | false;
    /**
     * Sets the active cache implementation.
     *
     * @param {TwingCacheInterface|string|false} cache A TwingCacheInterface implementation, a string or false to disable cache
     */
    setCache(cache: TwingCacheInterface | string | false): void;
    protected abstract cacheFromString(cache: string): TwingCacheInterface;
    protected get templateConstructor(): typeof TwingTemplate;
    /**
     * Gets the template class associated with the given string.
     *
     * The generated template class is based on the following parameters:
     *
     *  * The cache key for the given template;
     *  * The currently enabled extensions;
     *  * Twing version;
     *  * Options with what environment was created.
     *
     * @param {string} name The name for which to calculate the template class name
     * @param {number} index The index of the template
     * @param {TwingSource} from The source that initiated the template loading
     *
     * @return {Promise<string>} The template hash
     */
    getTemplateHash(name: string, index?: number, from?: TwingSource): Promise<string>;
    /**
     * Checks if the source_map option is enabled.
     *
     * @return {boolean} true if source_map is enabled, false otherwise
     */
    isSourceMap(): boolean;
    /**
     * Renders a template.
     *
     * @param {string} name The template name
     * @param {{}} context An array of parameters to pass to the template
     * @return {Promise<string>}
     */
    render(name: string, context?: any): Promise<string>;
    /**
     * Displays a template.
     *
     * @param {string} name The template name
     * @param {{}} context An array of parameters to pass to the template
     * @return {Promise<void>}
     *
     * @throws TwingErrorLoader  When the template cannot be found
     * @throws TwingErrorSyntax  When an error occurred during compilation
     * @throws TwingErrorRuntime When an error occurred during rendering
     */
    display(name: string, context?: any): Promise<void>;
    /**
     * Loads a template.
     *
     * @param {string | TwingTemplate} name The template name
     *
     * @throws {TwingErrorLoader}  When the template cannot be found
     * @throws {TwingErrorRuntime} When a previously generated cache is corrupted
     * @throws {TwingErrorSyntax}  When an error occurred during compilation
     *
     * @return {Promise<TwingTemplate>}
     */
    load(name: string | TwingTemplate): Promise<TwingTemplate>;
    /**
     * Register a template under an arbitrary name.
     *
     * @param {TwingTemplate} template The template to register
     * @param {string} name The name of the template
     */
    protected registerTemplate(template: TwingTemplate, name: string): void;
    /**
     * Register a templates module under an arbitrary name.
     *
     * @param {TwingTemplatesModule} module
     * @param {string} name
     */
    registerTemplatesModule(module: TwingTemplatesModule, name: string): void;
    /**
     * Loads a template internal representation.
     *
     * @param {string} name The template name
     * @param {number} index The index of the template
     * @param {TwingSource} from The source that initiated the template loading
     *
     * @return {Promise<TwingTemplate>} A template instance representing the given template name
     *
     * @throws {TwingErrorLoader}  When the template cannot be found
     * @throws {TwingErrorRuntime} When a previously generated cache is corrupted
     * @throws {TwingErrorSyntax}  When an error occurred during compilation
     */
    loadTemplate(name: string, index?: number, from?: TwingSource): Promise<TwingTemplate>;
    /**
     * Creates a template from source.
     *
     * This method should not be used as a generic way to load templates.
     *
     * @param {string} template The template name
     * @param {string} name An optional name for the template to be used in error messages
     *
     * @return {Promise<TwingTemplate>} A template instance representing the given template name
     *
     * @throws TwingErrorLoader When the template cannot be found
     * @throws TwingErrorSyntax When an error occurred during compilation
     */
    createTemplate(template: string, name?: string): Promise<TwingTemplate>;
    /**
     * Tries to load templates consecutively from an array.
     *
     * Similar to loadTemplate() but it also accepts instances of TwingTemplate and an array of templates where each is tried to be loaded.
     *
     * @param {string|TwingTemplate|Array<string|TwingTemplate>} names A template or an array of templates to try consecutively
     * @param {TwingSource} from The source of the template that initiated the resolving.
     *
     * @return {Promise<TwingTemplate>}
     *
     * @throws {TwingErrorLoader} When none of the templates can be found
     * @throws {TwingErrorSyntax} When an error occurred during compilation
     */
    resolveTemplate(names: string | TwingTemplate | Array<string | TwingTemplate>, from: TwingSource): Promise<TwingTemplate>;
    setLexer(lexer: TwingLexer): void;
    /**
     * Tokenizes a source code.
     *
     * @param {TwingSource} source The source to tokenize
     * @return {TwingTokenStream}
     *
     * @throws {TwingErrorSyntax} When the code is syntactically wrong
     */
    tokenize(source: TwingSource): TwingTokenStream;
    setParser(parser: TwingParser): void;
    /**
     * Converts a token list to a template.
     *
     * @param {TwingTokenStream} stream
     * @param {TwingParserOptions} options
     * @return {TwingNodeModule}
     *
     * @throws {TwingErrorSyntax} When the token stream is syntactically or semantically wrong
     */
    parse(stream: TwingTokenStream, options?: TwingParserOptions): TwingNodeModule;
    /**
     * Compiles a module node.
     *
     * @return {string}
     */
    compile(node: TwingNodeModule): string;
    /**
     * @param {TwingSource} source
     *
     * @return {Map<number, TwingTemplate> }
     */
    compileSource(source: TwingSource): string;
    /**
     * @return {TwingTemplatesModule}
     */
    private getTemplatesModule;
    setLoader(loader: TwingLoaderInterface): void;
    /**
     * Gets the Loader instance.
     *
     * @return TwingLoaderInterface
     */
    getLoader(): TwingLoaderInterface;
    /**
     * Sets the default template charset.
     *
     * @param {string} charset The default charset
     */
    setCharset(charset: string): void;
    /**
     * Gets the default template charset.
     *
     * @return {string} The default charset
     */
    getCharset(): string;
    /**
     * Returns true if the given extension is registered.
     *
     * @param {string} name
     * @return {boolean}
     */
    hasExtension(name: string): boolean;
    /**
     * Gets an extension by name.
     *
     * @param {string} name
     * @return {TwingExtensionInterface}
     */
    getExtension(name: string): TwingExtensionInterface;
    /**
     *
     * @param {TwingExtensionInterface} extension
     * @param {string} name A name the extension will be registered as
     */
    addExtension(extension: TwingExtensionInterface, name: string): void;
    /**
     * Registers some extensions.
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
    addTokenParser(parser: TwingTokenParserInterface): void;
    /**
     * Gets the registered Token Parsers.
     *
     * @return {Array<TwingTokenParserInterface>}
     *
     * @internal
     */
    getTokenParsers(): TwingTokenParserInterface[];
    /**
     * Gets registered tags.
     *
     * @return Map<string, TwingTokenParserInterface>
     *
     * @internal
     */
    getTags(): Map<string, TwingTokenParserInterface>;
    addNodeVisitor(visitor: TwingNodeVisitorInterface): void;
    /**
     * Gets the registered Node Visitors.
     *
     * @return {Array<TwingNodeVisitorInterface>}
     *
     * @internal
     */
    getNodeVisitors(): TwingNodeVisitorInterface[];
    addFilter(filter: TwingFilter): void;
    /**
     * Get a filter by name.
     *
     * @param {string} name
     *
     * @return Twig_Filter|false A Twig_Filter instance or null if the filter does not exist
     */
    getFilter(name: string): TwingFilter;
    /**
     * Gets the registered Filters.
     *
     * Be warned that this method cannot return filters defined with registerUndefinedFilterCallback.
     *
     * @return Twig_Filter[]
     *
     * @see registerUndefinedFilterCallback
     *
     * @internal
     */
    getFilters(): Map<string, TwingFilter>;
    /**
     * Registers a Test.
     *
     * @param {TwingTest} test
     */
    addTest(test: TwingTest): void;
    /**
     * Gets the registered Tests.
     *
     * @return {Map<string, TwingTest>}
     */
    getTests(): Map<string, TwingTest>;
    /**
     * Gets a test by name.
     *
     * @param {string} name The test name
     * @return {TwingTest} A TwingTest instance or null if the test does not exist
     */
    getTest(name: string): TwingTest;
    addFunction(aFunction: TwingFunction): void;
    /**
     * Get a function by name.
     *
     * Subclasses may override this method and load functions differently;
     * so no list of functions is available.
     *
     * @param {string} name function name
     *
     * @return {TwingFunction} A TwingFunction instance or null if the function does not exist
     *
     * @internal
     */
    getFunction(name: string): TwingFunction;
    /**
     * Gets registered functions.
     *
     * Be warned that this method cannot return functions defined with registerUndefinedFunctionCallback.
     *
     * @return Twig_Function[]
     *
     * @see registerUndefinedFunctionCallback
     *
     * @internal
     */
    getFunctions(): Map<string, TwingFunction>;
    /**
     * @param nodeType
     *
     * @return TwingSourceMapNodeFactory
     */
    getSourceMapNodeFactory(nodeType: string): TwingSourceMapNodeFactory;
    /**
     * @return Map<string, TwingSourceMapNodeFactory>
     */
    getSourceMapNodeFactories(): Map<string, TwingSourceMapNodeFactory>;
    /**
     * Registers a Global.
     *
     * New globals can be added before compiling or rendering a template, but after, you can only update existing globals.
     *
     * @param {string} name The global name
     * @param {*} value The global value
     */
    addGlobal(name: string, value: any): void;
    /**
     * Gets the registered Globals.
     *
     * @return Map<any, any> A map of globals
     */
    getGlobals(): Map<any, any>;
    /**
     * Merges a context with the defined globals.
     *
     * @param {Map<*, *>} context
     * @return {Map<*, *>}
     */
    mergeGlobals(context: Map<any, any>): Map<any, any>;
    /**
     * Gets the registered unary Operators.
     *
     * @return Map<string, TwingOperator> A map of unary operators
     *
     * @internal
     */
    getUnaryOperators(): Map<string, TwingOperator>;
    /**
     * Gets the registered binary Operators.
     *
     * @return Map<string, TwingOperator> An array of binary operators
     *
     * @internal
     */
    getBinaryOperators(): Map<string, TwingOperator>;
    updateOptionsHash(): void;
    /**
     * @param {number} line 0-based
     * @param {number} column 1-based
     * @param {string} nodeType
     * @param {TwingSource} source
     * @param {TwingOutputBuffer} outputBuffer
     */
    enterSourceMapBlock(line: number, column: number, nodeType: string, source: TwingSource, outputBuffer: TwingOutputBuffer): void;
    /**
     * @param {TwingOutputBuffer} outputBuffer
     */
    leaveSourceMapBlock(outputBuffer: TwingOutputBuffer): void;
    getSourceMap(): string;
    enableSandbox(): void;
    disableSandbox(): void;
    isSandboxed(): boolean;
    checkSecurity(tags: string[], filters: string[], functions: string[]): void;
    checkMethodAllowed(obj: any, method: string): void;
    checkPropertyAllowed(obj: any, property: string): void;
    ensureToStringAllowed(obj: any): any;
}
