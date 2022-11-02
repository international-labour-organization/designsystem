"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserVerbatim = void 0;
const token_parser_1 = require("../token-parser");
const verbatim_1 = require("../node/verbatim");
const twig_lexer_1 = require("twig-lexer");
class TwingTokenParserVerbatim extends token_parser_1.TwingTokenParser {
    /**
     * @param {Token} token
     *
     * @return TwingNodeVerbatim
     */
    parse(token) {
        let stream = this.parser.getStream();
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        /**
         * @type {TwingNodeText}
         */
        let text = this.parser.subparse([this, this.decideBlockEnd], true);
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        return new verbatim_1.TwingNodeVerbatim(text.getAttribute('data'), token.line, token.column, this.getTag());
    }
    decideBlockEnd(token) {
        return token.test(twig_lexer_1.TokenType.NAME, 'endverbatim');
    }
    getTag() {
        return 'verbatim';
    }
}
exports.TwingTokenParserVerbatim = TwingTokenParserVerbatim;
