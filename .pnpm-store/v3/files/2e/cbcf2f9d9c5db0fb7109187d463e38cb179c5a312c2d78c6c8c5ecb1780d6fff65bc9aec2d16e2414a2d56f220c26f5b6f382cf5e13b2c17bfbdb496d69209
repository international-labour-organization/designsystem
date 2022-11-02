import { TwingSource } from "./source";
import { TwingErrorSyntax } from "./error/syntax";
import { Token, TokenStream, TokenType, astVisitor } from "twig-lexer";
import { typeToEnglish } from "./lexer";
export class TwingTokenStream {
    constructor(tokens, source = null) {
        this._stream = new TokenStream(tokens);
        this._source = source ? source : new TwingSource('', '');
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
            throw new TwingErrorSyntax(`${message ? message + '. ' : ''}Unexpected token "${typeToEnglish(token.type)}" of value "${token.value}" ("${typeToEnglish(type)}" expected${value ? ` with value "${value}"` : ''}).`, line, this._source);
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
        return this.stream.current.type === TokenType.EOF;
    }
    toAst() {
        return this.stream.traverse((token, stream) => {
            token = astVisitor(token, stream);
            if (token && token.test(TokenType.TEST_OPERATOR)) {
                token = new Token(TokenType.OPERATOR, token.value, token.line, token.column);
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
