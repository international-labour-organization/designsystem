export var TokenType;
(function (TokenType) {
    TokenType["CLOSING_QUOTE"] = "CLOSING_QUOTE";
    TokenType["COMMENT_END"] = "COMMENT_END";
    TokenType["COMMENT_START"] = "COMMENT_START";
    TokenType["EOF"] = "EOF";
    TokenType["INTERPOLATION_START"] = "INTERPOLATION_START";
    TokenType["INTERPOLATION_END"] = "INTERPOLATION_END";
    TokenType["LINE_TRIMMING_MODIFIER"] = "LINE_TRIMMING_MODIFIER";
    TokenType["NAME"] = "NAME";
    TokenType["NUMBER"] = "NUMBER";
    TokenType["OPENING_QUOTE"] = "OPENING_QUOTE";
    TokenType["OPERATOR"] = "OPERATOR";
    TokenType["PUNCTUATION"] = "PUNCTUATION";
    TokenType["STRING"] = "STRING";
    TokenType["TAG_END"] = "TAG_END";
    TokenType["TAG_START"] = "TAG_START";
    TokenType["TEST_OPERATOR"] = "TEST_OPERATOR";
    TokenType["TEXT"] = "TEXT";
    TokenType["TRIMMING_MODIFIER"] = "TRIMMING_MODIFIER";
    TokenType["VARIABLE_END"] = "VARIABLE_END";
    TokenType["VARIABLE_START"] = "VARIABLE_START";
    TokenType["WHITESPACE"] = "WHITESPACE";
    TokenType["ARROW"] = "ARROW";
})(TokenType || (TokenType = {}));
/**
 * Returns the human representation of a token type.
 *
 * @param {TokenType} type The token type
 * @param {boolean} short Whether to return a short representation or not
 *
 * @returns {string} The string representation
 */
export function typeToString(type, short = false) {
    if (type in TokenType) {
        return short ? type : 'TokenType.' + type;
    }
    else {
        throw new Error(`Token type "${type}" does not exist.`);
    }
}
