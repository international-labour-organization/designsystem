"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenStream = void 0;
const source_1 = require("./source");
const syntax_1 = require("./error/syntax");
const twig_lexer_1 = require("twig-lexer");
const lexer_1 = require("./lexer");
class TwingTokenStream {
    constructor(tokens, source = null) {
        this._stream = new twig_lexer_1.TokenStream(tokens);
        this._source = source ? source : new source_1.TwingSource('', '');
    }
    get stream() {
        return this._stream;
    }
    get tokens() {
        return this.stream.tokens;
    }
    toString() {
        return this.tokens.map(function (token) {
            return token.toString();
        }).join('\n');
    }
    injectTokens(tokens) {
        this.stream.injectTokens(tokens);
    }
    next() {
        return this.stream.next();
    }
    nextIf(primary, secondary = null) {
        return this.stream.nextIf(primary, secondary);
    }
    /**
     * Tests a token and returns it or throws a syntax error.
     *
     * @return {Token}
     */
    expect(type, value = null, message = null) {
        let token = this.getCurrent();
        if (!token.test(type, value)) {
            let line = token.line;
            throw new syntax_1.TwingErrorSyntax(`${message ? message + '. ' : ''}Unexpected token "${lexer_1.typeToEnglish(token.type)}" of value "${token.value}" ("${lexer_1.typeToEnglish(type)}" expected${value ? ` with value "${value}"` : ''}).`, line, this._source);
        }
        this.next();
        return token;
    }
    look(number) {
        return this.stream.look(number);
    }
    test(type, value = null) {
        return this.stream.test(type, value);
    }
    /**
     * Checks if end of stream was reached.
     *
     * @return boolean
     */
    isEOF() {
        return this.stream.current.type === twig_lexer_1.TokenType.EOF;
    }
    toAst() {
        return this.stream.traverse((token, stream) => {
            token = twig_lexer_1.astVisitor(token, stream);
            if (token && token.test(twig_lexer_1.TokenType.TEST_OPERATOR)) {
                token = new twig_lexer_1.Token(twig_lexer_1.TokenType.OPERATOR, token.value, token.line, token.column);
            }
            return token;
        });
    }
    getCurrent() {
        return this.stream.current;
    }
    /**
     * Gets the source associated with this stream.
     *
     * @return TwingSource
     */
    getSourceContext() {
        return this._source;
    }
}
exports.TwingTokenStream = TwingTokenStream;
