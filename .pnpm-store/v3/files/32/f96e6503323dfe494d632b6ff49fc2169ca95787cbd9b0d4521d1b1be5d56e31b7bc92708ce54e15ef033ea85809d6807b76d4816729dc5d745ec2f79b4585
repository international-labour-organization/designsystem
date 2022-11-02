import { TokenType } from "./TokenType";
import { Token } from "./Token";
declare type TokenVisitor = (token: Token, stream: TokenStream) => Token;
/**
 * Token visitor that returns an AST token relevant to render a Twig template.
 *
 * @param {Token} token
 * @param {TokenStream} stream
 * @return {Token}
 */
export declare const astVisitor: TokenVisitor;
export declare class TokenStream {
    private _tokens;
    private _current;
    constructor(tokens: Array<Token>);
    /**
     * @return {Token}
     */
    readonly current: Token;
    /**
     * @return {Token[]}
     */
    readonly tokens: Token[];
    toString(): string;
    /**
     * Construct and return a list of tokens relevant to render a Twig template.
     *
     * @return {Token[]}
     */
    toAst(): Token[];
    /**
     * Serialize the stream to a Twig string.
     *
     * @return {string}
     */
    serialize(): string;
    /**
     * Traverse the stream using a visitor.
     *
     * @param {TokenVisitor} visitor
     * @return {Token[]}
     */
    traverse(visitor: TokenVisitor): Token[];
    /**
     * Inject tokens after the current one.
     *
     * @param tokens
     */
    injectTokens(tokens: Token[]): void;
    rewind(): void;
    /**
     * Set the pointer to the next token and returns the previous one.
     *
     * @return {Token}
     */
    next(): Token;
    /**
     * Test the current token, then, if the test is successful, sets the pointer to the next one and returns the tested token.
     *
     * @return {Token} The next token if the condition is true, null otherwise
     */
    nextIf(primary: TokenType, secondary?: Array<string> | string): Token;
    /**
     * Look at the next token.
     *
     * @param {number} number
     *
     * @return {Token}
     */
    look(number?: number): Token;
    /**
     * Test the current token.
     *
     * @param {TokenType} type
     * @param {string|string[]|number} value
     * @returns {boolean}
     */
    test(type: TokenType, value?: string | string[] | number): boolean;
}
export {};
