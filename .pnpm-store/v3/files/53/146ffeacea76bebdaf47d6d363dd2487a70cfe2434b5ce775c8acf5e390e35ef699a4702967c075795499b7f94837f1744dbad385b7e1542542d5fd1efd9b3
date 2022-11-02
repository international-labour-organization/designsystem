"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingLexer = exports.typeToEnglish = void 0;
/**
 * Lexes a template string.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
const twig_lexer_1 = require("twig-lexer");
const token_stream_1 = require("./token-stream");
const syntax_1 = require("./error/syntax");
exports.typeToEnglish = (type) => {
    switch (type) {
        case twig_lexer_1.TokenType.EOF:
            return 'end of template';
        case twig_lexer_1.TokenType.TEXT:
            return 'text';
        case twig_lexer_1.TokenType.TAG_START:
            return 'begin of statement block';
        case twig_lexer_1.TokenType.VARIABLE_START:
            return 'begin of print statement';
        case twig_lexer_1.TokenType.TAG_END:
            return 'end of statement block';
        case twig_lexer_1.TokenType.VARIABLE_END:
            return 'end of print statement';
        case twig_lexer_1.TokenType.NAME:
            return 'name';
        case twig_lexer_1.TokenType.NUMBER:
            return 'number';
        case twig_lexer_1.TokenType.STRING:
            return 'string';
        case twig_lexer_1.TokenType.OPERATOR:
            return 'operator';
        case twig_lexer_1.TokenType.PUNCTUATION:
            return 'punctuation';
        case twig_lexer_1.TokenType.INTERPOLATION_START:
            return 'begin of string interpolation';
        case twig_lexer_1.TokenType.INTERPOLATION_END:
            return 'end of string interpolation';
        case twig_lexer_1.TokenType.COMMENT_START:
            return 'begin of comment statement';
        case twig_lexer_1.TokenType.COMMENT_END:
            return 'end of comment statement';
        case twig_lexer_1.TokenType.ARROW:
            return 'arrow function';
        default:
            throw new Error(`Token of type "${type}" does not exist.`);
    }
};
class TwingLexer extends twig_lexer_1.Lexer {
    constructor(env, options = {}) {
        super();
        this.env = env;
        if (options.interpolation_pair) {
            this.interpolationPair = options.interpolation_pair;
        }
        if (options.comment_pair) {
            this.commentPair = options.comment_pair;
        }
        if (options.tag_pair) {
            this.tagPair = options.tag_pair;
        }
        if (options.variable_pair) {
            this.variablePair = options.variable_pair;
        }
        // custom operators
        for (let operators of [env.getBinaryOperators(), env.getUnaryOperators()]) {
            for (let [key, operator] of operators) {
                if (!this.operators.includes(key)) {
                    this.operators.push(key);
                }
            }
        }
    }
    tokenizeSource(source) {
        try {
            let tokens = this.tokenize(source.getCode());
            return new token_stream_1.TwingTokenStream(tokens, source);
        }
        catch (e) {
            throw new syntax_1.TwingErrorSyntax(e.message, e.line, source, e);
        }
    }
}
exports.TwingLexer = TwingLexer;
