import { TwingSource } from "./source";
import { Token, TokenType } from "twig-lexer";
export declare class TwingTokenStream {
    private readonly _stream;
    private readonly _source;
    constructor(tokens: Token[], source?: TwingSource);
    private get stream();
    get tokens(): Token[];
    toString(): string;
    injectTokens(tokens: Array<Token>): void;
    next(): Token;
    nextIf(primary: TokenType, secondary?: string[] | string): Token;
    /**
     * Tests a token and returns it or throws a syntax error.
     *
     * @return {Token}
     */
    expect(type: TokenType, value?: string[] | string | number, message?: string): Token;
    look(number: number): Token;
    test(type: TokenType, value?: string | number | string[]): boolean;
    /**
     * Checks if end of stream was reached.
     *
     * @return boolean
     */
    isEOF(): boolean;
    toAst(): Token[];
    getCurrent(): Token;
    /**
     * Gets the source associated with this stream.
     *
     * @return TwingSource
     */
    getSourceContext(): TwingSource;
}
