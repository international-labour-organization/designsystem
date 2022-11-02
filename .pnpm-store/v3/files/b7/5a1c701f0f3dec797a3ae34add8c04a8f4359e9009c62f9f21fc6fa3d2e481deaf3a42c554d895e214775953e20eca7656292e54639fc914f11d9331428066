import { TwingEnvironment } from "./environment";
import { TwingTokenStream } from "./token-stream";
import { TwingNodeBlock } from "./node/block";
import { TwingNode } from "./node";
import { TwingNodeExpression } from "./node/expression";
import { TwingNodeBody } from "./node/body";
import { TwingNodeModule } from "./node/module";
import { TwingNodeMacro } from "./node/macro";
import { TwingNodeExpressionArrowFunction } from "./node/expression/arrow-function";
import { Token } from "twig-lexer";
declare type TwingParserImportedSymbolAlias = {
    name: string;
    node: TwingNodeExpression;
};
export declare type TwingParserOptions = {
    strict: boolean;
};
export declare class TwingParser {
    private stack;
    private stream;
    private parent;
    private handlers;
    private visitors;
    private blocks;
    private blockStack;
    private macros;
    private readonly env;
    private importedSymbols;
    private traits;
    private embeddedTemplates;
    private varNameSalt;
    private embeddedTemplateIndex;
    private unaryOperators;
    private binaryOperators;
    protected readonly options: TwingParserOptions;
    constructor(env: TwingEnvironment, options?: TwingParserOptions);
    getVarName(prefix?: string): string;
    parse(stream: TwingTokenStream, test?: Array<any>, dropNeedle?: boolean): TwingNodeModule;
    getParent(): TwingNode;
    setParent(parent: TwingNode): void;
    subparse(test: Array<any>, dropNeedle?: boolean): TwingNode;
    getBlockStack(): string[];
    peekBlockStack(): string;
    popBlockStack(): void;
    pushBlockStack(name: string): void;
    hasBlock(name: string): boolean;
    getBlock(name: string): TwingNodeBody;
    setBlock(name: string, value: TwingNodeBlock): void;
    addTrait(trait: TwingNode): void;
    hasTraits(): boolean;
    embedTemplate(template: TwingNodeModule): void;
    /**
     * @return {Token}
     */
    getCurrentToken(): Token;
    /**
     *
     * @return {TwingTokenStream}
     */
    getStream(): TwingTokenStream;
    addImportedSymbol(type: string, alias: string, name?: string, node?: TwingNodeExpression): void;
    getImportedSymbol(type: string, alias: string): TwingParserImportedSymbolAlias;
    hasMacro(name: string): boolean;
    setMacro(name: string, node: TwingNodeMacro): void;
    isMainScope(): boolean;
    pushLocalScope(): void;
    popLocalScope(): void;
    /**
     *
     * @param node
     * @param nested {boolean}
     * @returns {TwingNode}
     */
    filterBodyNodes(node: TwingNode, nested?: boolean): TwingNode;
    parseStringExpression(): TwingNodeExpression;
    parseExpression(precedence?: number, allowArrow?: boolean): TwingNodeExpression;
    /**
     * @return TwingNodeExpressionArrowFunction|null
     */
    protected parseArrow(): TwingNodeExpressionArrowFunction;
    getPrimary(): TwingNodeExpression;
    parsePrimaryExpression(): TwingNodeExpression;
    getFunctionNode(name: string, line: number, column: number): TwingNodeExpression;
    parseArrayExpression(): TwingNodeExpression;
    parseHashExpression(): TwingNodeExpression;
    parseSubscriptExpression(node: TwingNodeExpression): any;
    parsePostfixExpression(node: TwingNodeExpression): TwingNodeExpression;
    parseTestExpression(node: TwingNodeExpression): TwingNodeExpression;
    parseNotTestExpression(node: TwingNodeExpression): TwingNodeExpression;
    parseConditionalExpression(expr: TwingNodeExpression): TwingNodeExpression;
    parseFilterExpression(node: TwingNodeExpression): TwingNodeExpression;
    parseFilterExpressionRaw(node: TwingNodeExpression, tag?: string): TwingNodeExpression;
    /**
     * Parses arguments.
     *
     * @param namedArguments {boolean} Whether to allow named arguments or not
     * @param definition {boolean} Whether we are parsing arguments for a function definition
     * @param allowArrow {boolean}
     *
     * @return TwingNode
     *
     * @throws TwingErrorSyntax
     */
    parseArguments(namedArguments?: boolean, definition?: boolean, allowArrow?: boolean): TwingNode;
    parseAssignmentExpression(): TwingNode;
    parseMultitargetExpression(): TwingNode;
    checkConstantExpression(node: TwingNode): boolean;
    private isUnary;
    private isBinary;
    private getTest;
    private getFunctionExpressionFactory;
    private getFilterExpressionFactory;
}
export {};
