import { TwingErrorRuntime } from "./error/runtime";
import { TwingSource } from "./source";
import { TwingEnvironment } from "./environment";
import { TwingOutputBuffer } from './output-buffer';
import { TwingContext } from "./context";
import { TwingMarkup } from "./markup";
import { TwingSandboxSecurityError } from "./sandbox/security-error";
import { TwingSandboxSecurityNotAllowedFilterError } from "./sandbox/security-not-allowed-filter-error";
import { TwingSandboxSecurityNotAllowedFunctionError } from "./sandbox/security-not-allowed-function-error";
import { TwingSandboxSecurityNotAllowedTagError } from "./sandbox/security-not-allowed-tag-error";
import { IterateCallback } from "./helpers/iterate";
declare type TwingTemplateMacrosMap = Map<string, TwingTemplateMacroHandler>;
declare type TwingTemplateAliasesMap = TwingContext<string, TwingTemplate>;
declare type TwingTemplateTraceableMethod<T> = (...args: Array<any>) => Promise<T>;
export declare type TwingTemplateBlocksMap = Map<string, [TwingTemplate, string]>;
export declare type TwingTemplateBlockHandler = (context: any, outputBuffer: TwingOutputBuffer, blocks: TwingTemplateBlocksMap) => Promise<void>;
export declare type TwingTemplateMacroHandler = (outputBuffer: TwingOutputBuffer, ...args: Array<any>) => Promise<string>;
/**
 * Default base class for compiled templates.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export declare abstract class TwingTemplate {
    static ANY_CALL: string;
    static ARRAY_CALL: string;
    static METHOD_CALL: string;
    private readonly _environment;
    private _source;
    protected parent: TwingTemplate | false;
    protected parents: Map<TwingTemplate | string, TwingTemplate>;
    protected blocks: TwingTemplateBlocksMap;
    protected blockHandlers: Map<string, TwingTemplateBlockHandler>;
    protected macroHandlers: Map<string, TwingTemplateMacroHandler>;
    protected traits: TwingTemplateBlocksMap;
    protected macros: TwingTemplateMacrosMap;
    protected aliases: TwingTemplateAliasesMap;
    constructor(environment: TwingEnvironment);
    get environment(): TwingEnvironment;
    /**
     * @returns {TwingSource}
     */
    get source(): TwingSource;
    /**
     * Returns the template name.
     *
     * @returns {string} The template name
     */
    get templateName(): string;
    get isTraitable(): boolean;
    /**
     * Returns the parent template.
     *
     * @param {any} context
     *
     * @returns {Promise<TwingTemplate|false>} The parent template or false if there is no parent
     */
    getParent(context?: any): Promise<TwingTemplate | false>;
    /**
     * Returns template blocks.
     *
     * @returns {Promise<TwingTemplateBlocksMap>} A map of blocks
     */
    getBlocks(): Promise<TwingTemplateBlocksMap>;
    /**
     * Displays a block.
     *
     * @param {string} name The block name to display
     * @param {any} context The context
     * @param {TwingOutputBuffer} outputBuffer
     * @param {TwingTemplateBlocksMap} blocks The active set of blocks
     * @param {boolean} useBlocks Whether to use the active set of blocks
     *
     * @returns {Promise<void>}
     */
    protected displayBlock(name: string, context: any, outputBuffer: TwingOutputBuffer, blocks: TwingTemplateBlocksMap, useBlocks: boolean): Promise<void>;
    /**
     * Displays a parent block.
     *
     * @param {string} name The block name to display from the parent
     * @param {any} context The context
     * @param {TwingOutputBuffer} outputBuffer
     * @param {TwingTemplateBlocksMap} blocks The active set of blocks
     *
     * @returns {Promise<void>}
     */
    protected displayParentBlock(name: string, context: any, outputBuffer: TwingOutputBuffer, blocks: TwingTemplateBlocksMap): Promise<void>;
    /**
     * Renders a parent block.
     *
     * @param {string} name The block name to display from the parent
     * @param {*} context The context
     * @param {TwingOutputBuffer} outputBuffer
     * @param {TwingTemplateBlocksMap} blocks The active set of blocks
     *
     * @returns {Promise<string>} The rendered block
     */
    protected renderParentBlock(name: string, context: any, outputBuffer: TwingOutputBuffer, blocks: TwingTemplateBlocksMap): Promise<string>;
    /**
     * Renders a block.
     *
     * @param {string} name The block name to display
     * @param {any} context The context
     * @param {TwingOutputBuffer} outputBuffer
     * @param {TwingTemplateBlocksMap} blocks The active set of blocks
     * @param {boolean} useBlocks Whether to use the active set of blocks
     *
     * @return {Promise<string>} The rendered block
     */
    protected renderBlock(name: string, context: any, outputBuffer: TwingOutputBuffer, blocks?: TwingTemplateBlocksMap, useBlocks?: boolean): Promise<string>;
    /**
     * Returns whether a block exists or not in the active context of the template.
     *
     * This method checks blocks defined in the active template or defined in "used" traits or defined in parent templates.
     *
     * @param {string} name The block name
     * @param {any} context The context
     * @param {TwingTemplateBlocksMap} blocks The active set of blocks
     *
     * @return {Promise<boolean>} true if the block exists, false otherwise
     */
    hasBlock(name: string, context: any, blocks?: TwingTemplateBlocksMap): Promise<boolean>;
    /**
     * @param {string} name The name of the macro
     *
     * @return {Promise<boolean>}
     */
    hasMacro(name: string): Promise<boolean>;
    /**
     * @param name The name of the macro
     */
    getMacro(name: string): Promise<TwingTemplateMacroHandler>;
    loadTemplate(templates: TwingTemplate | Map<number, TwingTemplate> | string, line?: number, index?: number): Promise<TwingTemplate>;
    /**
     * Returns template traits.
     *
     * @returns {Promise<TwingTemplateBlocksMap>} A map of traits
     */
    getTraits(): Promise<TwingTemplateBlocksMap>;
    protected doGetTraits(): Promise<TwingTemplateBlocksMap>;
    display(context: any, blocks?: TwingTemplateBlocksMap, outputBuffer?: TwingOutputBuffer): Promise<void>;
    protected displayWithErrorHandling(context: any, outputBuffer: TwingOutputBuffer, blocks?: TwingTemplateBlocksMap): Promise<void>;
    render(context: any, outputBuffer?: TwingOutputBuffer): Promise<string>;
    /**
     * Auto-generated method to display the template with the given context.
     *
     * @param {any} context An array of parameters to pass to the template
     * @param {TwingOutputBuffer} outputBuffer
     * @param {TwingTemplateBlocksMap} blocks
     */
    protected abstract doDisplay(context: any, outputBuffer: TwingOutputBuffer, blocks: TwingTemplateBlocksMap): Promise<void>;
    protected doGetParent(context: any): Promise<TwingTemplate | string | false>;
    protected callMacro(template: TwingTemplate, name: string, outputBuffer: TwingOutputBuffer, args: any[], lineno: number, context: TwingContext<any, any>, source: TwingSource): Promise<string>;
    traceableMethod<T>(method: Function, lineno: number, source: TwingSource): TwingTemplateTraceableMethod<T>;
    traceableRenderBlock(lineno: number, source: TwingSource): TwingTemplateTraceableMethod<string>;
    traceableRenderParentBlock(lineno: number, source: TwingSource): TwingTemplateTraceableMethod<string>;
    traceableHasBlock(lineno: number, source: TwingSource): TwingTemplateTraceableMethod<boolean>;
    protected concatenate(object1: any, object2: any): string;
    protected get cloneMap(): <K, V>(m: Map<K, V>) => Map<K, V>;
    protected get compare(): (a: any, b: any) => boolean;
    protected get constant(): (name: string, object: any) => any;
    protected get convertToMap(): (iterable: any) => Map<any, any>;
    protected get count(): (a: any) => number;
    protected get createRange(): (low: any, high: any, step: number) => Map<number, any>;
    protected get ensureTraversable(): <T>(candidate: T[]) => T[] | [];
    protected get get(): (object: any, property: any) => any;
    protected get getAttribute(): (env: TwingEnvironment, object: any, item: any, _arguments: Map<any, any>, type: string, isDefinedTest: boolean, ignoreStrictCheck: boolean, sandboxed: boolean) => any;
    protected get include(): (context: any, outputBuffer: TwingOutputBuffer, templates: string | Map<number, string | TwingTemplate> | TwingTemplate, variables: any, withContext: boolean, ignoreMissing: boolean, line: number) => Promise<string>;
    protected get isCountable(): (candidate: any) => boolean;
    protected get isIn(): (a: any, b: any) => boolean;
    protected get iterate(): (it: any, cb: IterateCallback) => Promise<void>;
    protected get merge(): <V>(iterable1: Map<any, V>, iterable2: Map<any, V>) => Map<any, V>;
    protected get parseRegExp(): (input: string) => RegExp;
    protected get evaluate(): (a: any) => boolean;
    protected get Context(): typeof TwingContext;
    protected get Markup(): typeof TwingMarkup;
    protected get RuntimeError(): typeof TwingErrorRuntime;
    protected get SandboxSecurityError(): typeof TwingSandboxSecurityError;
    protected get SandboxSecurityNotAllowedFilterError(): typeof TwingSandboxSecurityNotAllowedFilterError;
    protected get SandboxSecurityNotAllowedFunctionError(): typeof TwingSandboxSecurityNotAllowedFunctionError;
    protected get SandboxSecurityNotAllowedTagError(): typeof TwingSandboxSecurityNotAllowedTagError;
    protected get Source(): typeof TwingSource;
}
export {};
