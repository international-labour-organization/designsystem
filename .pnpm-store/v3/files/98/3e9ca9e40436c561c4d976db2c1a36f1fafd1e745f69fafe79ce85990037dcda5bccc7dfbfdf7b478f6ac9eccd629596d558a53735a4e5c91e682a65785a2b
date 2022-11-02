import { Token } from "./Token";
import { TokenType } from "./TokenType";
import { SyntaxError } from "./SyntaxError";
var LexerState;
(function (LexerState) {
    LexerState["COMMENT"] = "COMMENT";
    LexerState["DATA"] = "DATA";
    LexerState["DOUBLE_QUOTED_STRING"] = "DOUBLE_QUOTED_STRING";
    LexerState["INTERPOLATION"] = "INTERPOLATION";
    LexerState["TAG"] = "BLOCK";
    LexerState["VARIABLE"] = "VARIABLE";
    LexerState["VERBATIM"] = "VERBATIM";
})(LexerState || (LexerState = {}));
const escapeRegularExpressionPattern = (pattern) => {
    return pattern.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
};
/**
 * The characters pairs recognized as brackets.
 */
export const bracketPairs = [['(', ')'], ['{', '}'], ['[', ']']];
/**
 * The regular expression pattern used to identify a double quoted string content.
 */
export const doubleQuotedStringContentPattern = '[^#"\\\\]*(?:(?:\\\\.|#(?!{))[^#"\\\\]*)*';
/**
 * The regular expression pattern used to identify a double quoted string delimiter.
 */
export const doubleQuotedStringDelimiterPattern = '"';
/**
 * The characters recognized as line separators.
 */
export const lineSeparators = ['\\r\\n', '\\r', '\\n'];
/**
 * The regular expression pattern used to identify a name.
 */
export const namePattern = '[a-zA-Z_\\x7f-\\xff][a-zA-Z0-9_\\x7f-\\xff]*';
/**
 * The regular expression pattern used to identify a number.
 */
export const numberPattern = '[0-9]+(?:\\.[0-9]+)?';
/**
 * The regular expression pattern used to identify a punctuation.
 */
export const punctuationPattern = '[?:.,|]';
/**
 * The regular expression pattern used to identify a string.
 */
export const stringPattern = '(")([^#"\\\\]*(?:\\\\.[^#"\\\\]*)*)(")|^(\')([^\'\\\\]*(?:\\\\.[^\'\\\\]*)*)(\')';
/**
 * The regular expression pattern used to identify a whitespace.
 */
export const whitespacePattern = '[ \\r\\n\\t\\f\\v]+';
let openingBrackets = [];
let closingBrackets = [];
for (let [openingBracket, closingBracket] of bracketPairs) {
    openingBrackets.push(escapeRegularExpressionPattern(openingBracket));
    closingBrackets.push(escapeRegularExpressionPattern(closingBracket));
}
const closingBracketPattern = '[' + closingBrackets.join('') + ']';
const openingBracketPattern = '[' + openingBrackets.join('') + ']';
export class Lexer {
    /**
     * @constructor
     */
    constructor() {
        this.lineTrimingModifier = '~';
        this.trimmingModifier = '-';
        this.operators = [
            '=',
            'or',
            'and',
            'b-or',
            'b-xor',
            'b-and',
            '==',
            '!=',
            '<',
            '<=',
            '>',
            '>=',
            'not',
            'in',
            'not in',
            'matches',
            'starts with',
            'ends with',
            '..',
            '+',
            '-',
            '~',
            '*',
            '/',
            '//',
            '%',
            '**',
            '??'
        ];
        this.tagPair = ['{%', '%}'];
        this.commentPair = ['{#', '#}'];
        this.interpolationPair = ['#{', '}'];
        this.variablePair = ['{{', '}}'];
        this.testOperators = ['is', 'is not'];
        this.arrowOperator = ['=>'];
    }
    /**
     * Tokenize a source into a list of tokens.
     *
     * @param {string} source
     *
     * @return {Token[]}
     */
    tokenize(source) {
        this.source = source;
        this.cursor = 0;
        this.end = this.source.length;
        this.line = 1;
        this.column = 1;
        this.tokens = [];
        this.state = LexerState.DATA; // see https://github.com/Microsoft/TypeScript/issues/29204
        this.states = [];
        this.scope = null;
        this.scopes = [];
        let createOperatorRegExp = (operators) => {
            let patterns = [];
            operators.sort(function (a, b) {
                return a.length > b.length ? -1 : 1;
            });
            for (let operator of operators) {
                let length = operator.length;
                let pattern = escapeRegularExpressionPattern(operator);
                // an operator that ends with a character must be followed by a whitespace or an opening parenthesis
                if (new RegExp('[A-Za-z]').test(operator[length - 1])) {
                    pattern += '(?=[\\s(])';
                }
                // a space within an operator can be any amount of whitespaces
                pattern = pattern.replace(/\s+/, '\\s+');
                patterns.push(pattern);
            }
            let pattern = `^(${patterns.join('|')})`;
            return new RegExp(pattern);
        };
        // init regular expressions
        this.testOperatorRegExp = createOperatorRegExp(this.testOperators);
        this.operatorRegExp = createOperatorRegExp(this.operators);
        this.arrowOperatorRegExp = createOperatorRegExp(this.arrowOperator);
        this.tagEndRegExp = new RegExp('^(' + this.trimmingModifier + '?)(' + this.tagPair[1] + '(?:' + lineSeparators.join('|') + ')?)' +
            '|' +
            '^(' + this.lineTrimingModifier + ')(' + this.tagPair[1] + ')');
        this.commentEndRegExp = new RegExp('(\\s*)(' + this.trimmingModifier + '?)(' + this.commentPair[1] + '(?:' + lineSeparators.join('|') + ')?)' +
            '|' +
            '(\\s*)(' + this.lineTrimingModifier + ')(' + this.commentPair[1] + ')');
        this.variableEndRegExp = new RegExp('^(' + this.trimmingModifier + '|' + this.lineTrimingModifier + '?)(' + this.variablePair[1] + ')');
        this.verbatimTagRegExp = new RegExp('^(' + this.tagPair[0] + ')(' + this.trimmingModifier + '|' + this.lineTrimingModifier + '?)' +
            '(\\s*)(verbatim)(\\s*)' +
            '(' + this.trimmingModifier + '|' + this.lineTrimingModifier + '?)(' + this.tagPair[1] + ')');
        this.lineTagRegExp = new RegExp('^(' + this.tagPair[0] + ')(\\s*)(line)(\\s+)(\\d+)(\\s*)(' + this.tagPair[1] + ')');
        this.endverbatimTagRegExp = new RegExp('(' + this.tagPair[0] + ')(' + this.trimmingModifier + '|' + this.lineTrimingModifier + '?)' +
            '(\\s*)(endverbatim)(\\s*)' +
            '(' + this.trimmingModifier + '|' + this.lineTrimingModifier + '?)(' + this.tagPair[1] + ')');
        this.statementStartRegExp = new RegExp('(' + [this.variablePair[0], this.tagPair[0], this.commentPair[0]].join('|') + ')' +
            '(' + this.trimmingModifier + '|' + this.lineTrimingModifier + ')?');
        this.interpolationStartRegExp = new RegExp('^(' + this.interpolationPair[0] + ')(\\s*)');
        this.interpolationEndRegExp = new RegExp('^(\\s*)(' + this.interpolationPair[1] + ')');
        this.closingBracketRegExp = new RegExp(closingBracketPattern);
        this.doubleQuotedStringContentRegExp = new RegExp('^' + doubleQuotedStringContentPattern);
        this.doubleQuotedStringDelimiterRegExp = new RegExp('^' + doubleQuotedStringDelimiterPattern);
        this.nameRegExp = new RegExp('^' + namePattern);
        this.numberRegExp = new RegExp('^' + numberPattern);
        this.openingBracketRegExp = new RegExp(openingBracketPattern);
        this.punctuationRegExp = new RegExp(punctuationPattern);
        this.stringRegExp = new RegExp('^' + stringPattern);
        this.whitespaceRegExp = new RegExp('^' + whitespacePattern);
        while (this.cursor < this.end) {
            // dispatch to the lexing functions depending on the current state
            switch (this.state) {
                case LexerState.TAG:
                    this.lexTag();
                    break;
                case LexerState.COMMENT:
                    this.lexComment();
                    break;
                case LexerState.DOUBLE_QUOTED_STRING:
                    this.lexDoubleQuotedString();
                    break;
                case LexerState.INTERPOLATION:
                    this.lexInterpolation();
                    break;
                case LexerState.VARIABLE:
                    this.lexVariable();
                    break;
                case LexerState.VERBATIM:
                    this.lexVerbatim();
                    break;
                default:
                    let data = this.source.substring(this.cursor);
                    // look for the next statement
                    let match = this.statementStartRegExp.exec(data);
                    // push the text
                    this.pushToken(TokenType.TEXT, match ? data.substr(0, match.index) : data);
                    if (match) {
                        let tag = match[1];
                        let modifier = match[2];
                        switch (tag) {
                            case this.commentPair[0]:
                                this.currentVarBlockLine = this.line;
                                this.currentVarBlockColumn = this.column;
                                this.pushToken(TokenType.COMMENT_START, tag);
                                this.pushModifier(modifier);
                                this.pushState(LexerState.COMMENT);
                                break;
                            case this.tagPair[0]:
                                if ((match = this.verbatimTagRegExp.exec(this.source.substring(this.cursor))) !== null) {
                                    this.currentVarBlockLine = this.line;
                                    this.currentVarBlockColumn = this.column;
                                    this.pushToken(TokenType.TAG_START, match[1]);
                                    this.pushModifier(match[2]);
                                    this.pushToken(TokenType.WHITESPACE, match[3]);
                                    this.pushToken(TokenType.NAME, match[4]); // verbatim itself
                                    this.pushToken(TokenType.WHITESPACE, match[5]);
                                    this.pushModifier(match[6]);
                                    this.pushToken(TokenType.TAG_END, match[7]);
                                    this.pushState(LexerState.VERBATIM);
                                }
                                else if ((match = this.lineTagRegExp.exec(this.source.substring(this.cursor))) !== null) {
                                    this.pushToken(TokenType.TAG_START, match[1]);
                                    if (match[2].length > 0) {
                                        this.pushToken(TokenType.WHITESPACE, match[2]);
                                    }
                                    this.pushToken(TokenType.NAME, match[3]); // line itself
                                    this.pushToken(TokenType.WHITESPACE, match[4]);
                                    this.pushToken(TokenType.NUMBER, match[5]);
                                    if (match[6].length > 0) {
                                        this.pushToken(TokenType.WHITESPACE, match[6]);
                                    }
                                    this.pushToken(TokenType.TAG_END, match[7]);
                                    this.line = Number(match[5]);
                                    this.column = 0;
                                }
                                else {
                                    this.currentVarBlockLine = this.line;
                                    this.currentVarBlockColumn = this.column;
                                    this.pushToken(TokenType.TAG_START, tag);
                                    this.pushModifier(modifier);
                                    this.pushState(LexerState.TAG);
                                }
                                break;
                            case this.variablePair[0]:
                                this.currentVarBlockLine = this.line;
                                this.currentVarBlockColumn = this.column;
                                this.pushToken(TokenType.VARIABLE_START, tag);
                                this.pushModifier(modifier);
                                this.pushState(LexerState.VARIABLE);
                                break;
                        }
                    }
            }
        }
        this.pushToken(TokenType.EOF, null);
        if (this.state == LexerState.VARIABLE) {
            throw new SyntaxError(`Unclosed variable opened at {${this.currentVarBlockLine}:${this.currentVarBlockColumn}}.`, this.line, this.column);
        }
        else if (this.state == LexerState.TAG) {
            throw new SyntaxError(`Unclosed tag opened at {${this.currentVarBlockLine}:${this.currentVarBlockColumn}}.`, this.line, this.column);
        }
        else if (this.scope) {
            throw new SyntaxError(`Unclosed "${this.scope.value}" opened at {${this.scope.line}:${this.scope.column}}.`, this.line, this.column);
        }
        return this.tokens;
    }
    lexExpression() {
        this.lexWhitespace();
        let match;
        let candidate = this.source.substring(this.cursor);
        let singleCharacterCandidate = candidate.substr(0, 1);
        // test operator
        if ((match = this.testOperatorRegExp.exec(candidate)) !== null) {
            this.pushToken(TokenType.TEST_OPERATOR, match[0]);
        }
        // arrow
        else if ((match = this.arrowOperatorRegExp.exec(candidate)) !== null) {
            this.pushToken(TokenType.ARROW, match[0]);
        }
        // operator
        else if ((match = this.operatorRegExp.exec(candidate)) !== null) {
            this.pushToken(TokenType.OPERATOR, match[0]);
        }
        // name
        else if ((match = this.nameRegExp.exec(candidate)) !== null) {
            this.pushToken(TokenType.NAME, match[0]);
        }
        // number
        else if ((match = this.numberRegExp.exec(candidate)) !== null) {
            this.pushToken(TokenType.NUMBER, match[0]);
        }
        // opening bracket
        else if (this.openingBracketRegExp.test(singleCharacterCandidate)) {
            this.pushScope(singleCharacterCandidate);
            this.pushToken(TokenType.PUNCTUATION, singleCharacterCandidate);
        }
        // closing bracket
        else if (this.closingBracketRegExp.test(singleCharacterCandidate)) {
            if (!this.scope) {
                throw new SyntaxError(`Unexpected "${singleCharacterCandidate}".`, this.line, this.column);
            }
            if (singleCharacterCandidate !== this.scope.expected) {
                throw new SyntaxError(`Unclosed bracket "${this.scope.value}" opened at {${this.scope.line}:${this.scope.column}}.`, this.line, this.column);
            }
            this.pushToken(TokenType.PUNCTUATION, singleCharacterCandidate);
            this.popScope();
        }
        // punctuation
        else if (this.punctuationRegExp.test(singleCharacterCandidate)) {
            this.pushToken(TokenType.PUNCTUATION, singleCharacterCandidate);
        }
        // string
        else if ((match = this.stringRegExp.exec(candidate)) !== null) {
            let openingBracket = match[1] || match[4];
            let value = match[2] || match[5];
            let closingBracket = match[3] || match[6];
            this.pushToken(TokenType.OPENING_QUOTE, openingBracket);
            if (value !== undefined) {
                this.pushToken(TokenType.STRING, value);
            }
            this.pushToken(TokenType.CLOSING_QUOTE, closingBracket);
        }
        // double quoted string
        else if ((match = this.doubleQuotedStringDelimiterRegExp.exec(candidate)) !== null) {
            let value = match[0];
            this.pushScope(value, value);
            this.pushToken(TokenType.OPENING_QUOTE, value);
            this.pushState(LexerState.DOUBLE_QUOTED_STRING);
        }
        // unlexable
        else if (this.cursor < this.end) {
            throw new SyntaxError(`Unexpected character "${candidate}".`, this.line, this.column);
        }
    }
    lexTag() {
        this.lexWhitespace();
        let code = this.source.substring(this.cursor);
        let match;
        if (!this.scope && ((match = this.tagEndRegExp.exec(code)) !== null)) {
            let tag = match[2] || match[4];
            let modifier = match[1] || match[3];
            this.pushModifier(modifier);
            this.pushToken(TokenType.TAG_END, tag);
            this.popState();
        }
        else {
            this.lexExpression();
        }
    }
    lexVariable() {
        this.lexWhitespace();
        let match;
        if (!this.scope && ((match = this.variableEndRegExp.exec(this.source.substring(this.cursor))) !== null)) {
            this.pushModifier(match[1]);
            this.pushToken(TokenType.VARIABLE_END, match[2]);
            this.popState();
        }
        else {
            this.lexExpression();
        }
    }
    lexVerbatim() {
        let candidate = this.source.substring(this.cursor);
        let match = this.endverbatimTagRegExp.exec(candidate);
        if (!match) {
            this.moveCoordinates(candidate);
            throw new SyntaxError(`Unclosed verbatim opened at {${this.currentVarBlockLine}:${this.currentVarBlockColumn}}.`, this.line, this.column);
        }
        let text = this.source.substr(this.cursor, match.index);
        this.pushToken(TokenType.TEXT, text);
        this.pushToken(TokenType.TAG_START, match[1]);
        this.pushModifier(match[2]);
        this.pushToken(TokenType.WHITESPACE, match[3]);
        this.pushToken(TokenType.NAME, match[4]); // endverbatim itself
        this.pushToken(TokenType.WHITESPACE, match[5]);
        this.pushModifier(match[6]);
        this.pushToken(TokenType.TAG_END, match[7]);
        this.popState();
    }
    lexWhitespace() {
        let match;
        let candidate = this.source.substring(this.cursor);
        if ((match = this.whitespaceRegExp.exec(candidate)) !== null) {
            this.pushToken(TokenType.WHITESPACE, match[0]);
        }
    }
    lexComment() {
        this.lexWhitespace();
        let candidate = this.source.substring(this.cursor);
        let match = this.commentEndRegExp.exec(candidate);
        if (!match) {
            this.moveCoordinates(candidate);
            throw new SyntaxError(`Unclosed comment opened at {${this.currentVarBlockLine}:${this.currentVarBlockColumn}}.`, this.line, this.column);
        }
        let text = this.source.substr(this.cursor, match.index);
        let modifier = match[2] || match[5];
        let value = match[3] || match[6];
        this.pushToken(TokenType.TEXT, text);
        this.lexWhitespace();
        this.pushModifier(modifier);
        this.pushToken(TokenType.COMMENT_END, value);
        this.popState();
    }
    lexDoubleQuotedString() {
        let match;
        if ((match = this.interpolationStartRegExp.exec(this.source.substring(this.cursor))) !== null) {
            let tag = match[1];
            this.pushToken(TokenType.INTERPOLATION_START, tag);
            this.pushToken(TokenType.WHITESPACE, match[2]);
            this.pushScope(tag, this.interpolationPair[1]);
            this.pushState(LexerState.INTERPOLATION);
        }
        else if (((match = this.doubleQuotedStringContentRegExp.exec(this.source.substring(this.cursor))) !== null) && (match[0].length > 0)) {
            this.pushToken(TokenType.STRING, match[0]);
        }
        else {
            this.pushToken(TokenType.CLOSING_QUOTE, this.scope.value);
            this.popScope();
            this.popState();
        }
    }
    lexInterpolation() {
        let match;
        if (this.scope.value === this.interpolationPair[0] && (match = this.interpolationEndRegExp.exec(this.source.substring(this.cursor))) !== null) {
            let tag = match[2];
            let whitespace = match[1] || '';
            this.pushToken(TokenType.WHITESPACE, whitespace);
            this.pushToken(TokenType.INTERPOLATION_END, tag);
            this.popScope();
            this.popState();
        }
        else {
            this.lexExpression();
        }
    }
    moveCoordinates(text) {
        this.cursor += text.length;
        this.column += text.length;
        let lines = text.split(/\r\n|\r|\n/);
        let lineCount = lines.length - 1;
        if (lineCount > 0) {
            this.line += lineCount;
            this.column = 1 + lines[lineCount].length;
        }
    }
    pushToken(type, value) {
        if ((type === TokenType.TEXT || type === TokenType.WHITESPACE) && (value.length < 1)) {
            return;
        }
        let token = new Token(type, value, this.line, this.column);
        this.tokens.push(token);
        if (value) {
            this.moveCoordinates(value);
        }
    }
    pushModifier(modifier) {
        if (modifier) {
            this.pushToken(modifier === this.trimmingModifier ? TokenType.TRIMMING_MODIFIER : TokenType.LINE_TRIMMING_MODIFIER, modifier);
        }
    }
    pushState(state) {
        this.states.push(this.state);
        this.state = state;
    }
    pushScope(value, expected) {
        if (!expected) {
            let bracketPair = bracketPairs.find((bracketPair) => {
                return bracketPair[0] === value;
            });
            expected = bracketPair[1];
        }
        this.scopes.push(this.scope);
        this.scope = {
            value: value,
            expected: expected,
            line: this.line,
            column: this.column
        };
    }
    popState() {
        this.state = this.states.pop();
    }
    popScope() {
        this.scope = this.scopes.pop();
    }
}
