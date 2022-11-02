"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TokenType_1 = require("./TokenType");
const Token_1 = require("./Token");
const safeCChars = ['b', 'f', 'n', 'r', 't', 'v', '0', '\'', '"', '\\'];
const stripcslashes = function (string) {
    return string.replace(/\\(.)/g, function (match, char) {
        if (safeCChars.includes(char)) {
            return new Function('return "' + match + '"')();
        }
        else {
            return char;
        }
    });
};
/**
 * Token visitor that returns an AST token relevant to render a Twig template.
 *
 * @param {Token} token
 * @param {TokenStream} stream
 * @return {Token}
 */
exports.astVisitor = (token, stream) => {
    if (!token.test(TokenType_1.TokenType.WHITESPACE) &&
        !token.test(TokenType_1.TokenType.TRIMMING_MODIFIER) &&
        !token.test(TokenType_1.TokenType.LINE_TRIMMING_MODIFIER)) {
        let tokenValue = token.value;
        let tokenLine = token.line;
        let tokenColumn = token.column;
        if (token.test(TokenType_1.TokenType.EOF)) {
            return token;
        }
        if (token.test(TokenType_1.TokenType.NUMBER)) {
            return new Token_1.Token(token.type, Number(token.value), token.line, token.column);
        }
        if (token.test(TokenType_1.TokenType.OPENING_QUOTE)) {
            let candidate = stream.look(1);
            if (candidate.test(TokenType_1.TokenType.CLOSING_QUOTE)) {
                return new Token_1.Token(TokenType_1.TokenType.STRING, '', token.line, token.column);
            }
        }
        if (token.test(TokenType_1.TokenType.STRING)) {
            let candidate = stream.look(-1);
            if (candidate && candidate.test(TokenType_1.TokenType.OPENING_QUOTE)) {
                tokenLine = candidate.line;
                tokenColumn = candidate.column;
            }
        }
        if (!token.test(TokenType_1.TokenType.OPENING_QUOTE) && !token.test(TokenType_1.TokenType.CLOSING_QUOTE)) {
            if (token.test(TokenType_1.TokenType.TEXT) || token.test(TokenType_1.TokenType.STRING)) {
                // streamline line separators
                tokenValue = tokenValue.replace(/\r\n|\r/g, '\n');
            }
            else if (token.test(TokenType_1.TokenType.OPERATOR)) {
                // remove unnecessary operator spaces
                tokenValue = tokenValue.replace(/\s+/, ' ');
            }
            if (token.test(TokenType_1.TokenType.STRING)) {
                // strip C slashes
                tokenValue = stripcslashes(tokenValue);
            }
            // handle whitespace control modifiers
            let wstCandidate;
            wstCandidate = stream.look(2);
            if (wstCandidate) {
                if (wstCandidate.type === TokenType_1.TokenType.TRIMMING_MODIFIER) {
                    tokenValue = tokenValue.replace(/\s*$/, '');
                }
                if (wstCandidate.type === TokenType_1.TokenType.LINE_TRIMMING_MODIFIER) {
                    tokenValue = tokenValue.replace(/[ \t\0\x0B]*$/, '');
                }
            }
            wstCandidate = stream.look(-2);
            if (wstCandidate) {
                if (wstCandidate.type === TokenType_1.TokenType.TRIMMING_MODIFIER) {
                    tokenValue = tokenValue.replace(/^\s*/, '');
                }
                if (wstCandidate.type === TokenType_1.TokenType.LINE_TRIMMING_MODIFIER) {
                    tokenValue = tokenValue.replace(/^[ \t\0\x0B]*/, '');
                }
            }
            // don't push empty TEXT tokens
            if (!token.test(TokenType_1.TokenType.TEXT) || (tokenValue.length > 0)) {
                return new Token_1.Token(token.type, tokenValue, tokenLine, tokenColumn);
            }
        }
    }
};
class TokenStream {
    constructor(tokens) {
        this._current = 0;
        this._tokens = tokens;
    }
    /**
     * @return {Token}
     */
    get current() {
        return this._tokens[this._current];
    }
    /**
     * @return {Token[]}
     */
    get tokens() {
        return this._tokens;
    }
    toString() {
        return this.tokens.map(function (token) {
            return token.toString();
        }).join('\n');
    }
    /**
     * Construct and return a list of tokens relevant to render a Twig template.
     *
     * @return {Token[]}
     */
    toAst() {
        return this.traverse(exports.astVisitor);
    }
    /**
     * Serialize the stream to a Twig string.
     *
     * @return {string}
     */
    serialize() {
        return this.tokens.map(function (token) {
            return token.serialize();
        }).join('');
    }
    /**
     * Traverse the stream using a visitor.
     *
     * @param {TokenVisitor} visitor
     * @return {Token[]}
     */
    traverse(visitor) {
        let tokens = [];
        do {
            let token = visitor(this.current, this);
            if (token) {
                tokens.push(token);
            }
        } while (this.next());
        return tokens;
    }
    /**
     * Inject tokens after the current one.
     *
     * @param tokens
     */
    injectTokens(tokens) {
        this._tokens.splice(this._current, 0, ...tokens);
    }
    rewind() {
        this._current = 0;
    }
    /**
     * Set the pointer to the next token and returns the previous one.
     *
     * @return {Token}
     */
    next() {
        let token = this.current;
        this._current++;
        if (this._current >= this.tokens.length) {
            return null;
        }
        return token;
    }
    /**
     * Test the current token, then, if the test is successful, sets the pointer to the next one and returns the tested token.
     *
     * @return {Token} The next token if the condition is true, null otherwise
     */
    nextIf(primary, secondary = null) {
        if (this.current.test(primary, secondary)) {
            return this.next();
        }
        return null;
    }
    /**
     * Look at the next token.
     *
     * @param {number} number
     *
     * @return {Token}
     */
    look(number = 1) {
        let index = this._current + number;
        if ((index >= this.tokens.length) || (index < 0)) {
            return null;
        }
        return this.tokens[index];
    }
    /**
     * Test the current token.
     *
     * @param {TokenType} type
     * @param {string|string[]|number} value
     * @returns {boolean}
     */
    test(type, value = null) {
        return this.current.test(type, value);
    }
}
exports.TokenStream = TokenStream;
