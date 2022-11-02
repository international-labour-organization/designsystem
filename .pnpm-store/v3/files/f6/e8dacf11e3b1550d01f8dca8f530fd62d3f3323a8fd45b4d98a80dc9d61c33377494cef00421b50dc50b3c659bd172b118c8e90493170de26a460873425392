"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserLine = void 0;
const token_parser_1 = require("../token-parser");
const twig_lexer_1 = require("twig-lexer");
const line_1 = require("../node/line");
class TwingTokenParserLine extends token_parser_1.TwingTokenParser {
    parse(token) {
        let numberToken = this.parser.getStream().expect(twig_lexer_1.TokenType.NUMBER);
        this.parser.getStream().expect(twig_lexer_1.TokenType.TAG_END);
        return new line_1.TwingNodeLine(Number(numberToken.value), token.line, token.column, this.getTag());
    }
    getTag() {
        return 'line';
    }
}
exports.TwingTokenParserLine = TwingTokenParserLine;
