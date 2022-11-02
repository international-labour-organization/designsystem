"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserWith = void 0;
const token_parser_1 = require("../token-parser");
const with_1 = require("../node/with");
const twig_lexer_1 = require("twig-lexer");
class TwingTokenParserWith extends token_parser_1.TwingTokenParser {
    parse(token) {
        let stream = this.parser.getStream();
        let variables = null;
        let only = false;
        if (!stream.test(twig_lexer_1.TokenType.TAG_END)) {
            variables = this.parser.parseExpression();
            only = stream.nextIf(twig_lexer_1.TokenType.NAME, 'only') !== null;
        }
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        let body = this.parser.subparse([this, this.decideWithEnd], true);
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        return new with_1.TwingNodeWith(body, variables, only, token.line, token.column, this.getTag());
    }
    decideWithEnd(token) {
        return token.test(twig_lexer_1.TokenType.NAME, 'endwith');
    }
    getTag() {
        return 'with';
    }
}
exports.TwingTokenParserWith = TwingTokenParserWith;
