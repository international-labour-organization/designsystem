"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserFlush = void 0;
const token_parser_1 = require("../token-parser");
const flush_1 = require("../node/flush");
const twig_lexer_1 = require("twig-lexer");
class TwingTokenParserFlush extends token_parser_1.TwingTokenParser {
    parse(token) {
        this.parser.getStream().expect(twig_lexer_1.TokenType.TAG_END);
        return new flush_1.TwingNodeFlush(token.line, token.column, this.getTag());
    }
    getTag() {
        return 'flush';
    }
}
exports.TwingTokenParserFlush = TwingTokenParserFlush;
