/**
 * Lexes a template string.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
import { Lexer, TokenType } from "twig-lexer";
import { TwingEnvironment } from "./environment";
import { TwingSource } from "./source";
import { TwingTokenStream } from "./token-stream";
export declare const typeToEnglish: (type: TokenType) => string;
declare type TwingLexerOptions = {
    interpolation_pair?: [string, string];
    comment_pair?: [string, string];
    tag_pair?: [string, string];
    variable_pair?: [string, string];
};
export declare class TwingLexer extends Lexer {
    private env;
    constructor(env: TwingEnvironment, options?: TwingLexerOptions);
    tokenizeSource(source: TwingSource): TwingTokenStream;
}
export {};
