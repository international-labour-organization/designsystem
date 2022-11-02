"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserTrans = void 0;
const token_parser_1 = require("../token-parser");
const twig_lexer_1 = require("twig-lexer");
class TwingTokenParserTrans extends token_parser_1.TwingTokenParser {
    parse(token) {
        let stream = this.parser.getStream();
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        let body = this.parser.subparse([this, this.decideBlockEnd], true);
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        return body;
    }
    decideBlockEnd(token) {
        return token.test(twig_lexer_1.TokenType.NAME, 'endtrans');
    }
    getTag() {
        return 'trans';
    }
}
exports.TwingTokenParserTrans = TwingTokenParserTrans;
