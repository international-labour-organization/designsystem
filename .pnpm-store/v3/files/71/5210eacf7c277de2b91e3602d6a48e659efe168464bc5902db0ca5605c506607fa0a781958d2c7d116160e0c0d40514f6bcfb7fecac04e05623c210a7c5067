"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserDo = void 0;
const token_parser_1 = require("../token-parser");
const do_1 = require("../node/do");
const twig_lexer_1 = require("twig-lexer");
class TwingTokenParserDo extends token_parser_1.TwingTokenParser {
    parse(token) {
        let expr = this.parser.parseExpression();
        this.parser.getStream().expect(twig_lexer_1.TokenType.TAG_END);
        return new do_1.TwingNodeDo(expr, token.line, token.column, this.getTag());
    }
    getTag() {
        return 'do';
    }
}
exports.TwingTokenParserDo = TwingTokenParserDo;
