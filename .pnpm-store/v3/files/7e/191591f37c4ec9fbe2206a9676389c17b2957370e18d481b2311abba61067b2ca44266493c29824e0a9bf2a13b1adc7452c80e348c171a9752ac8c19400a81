import { TwingTokenParser } from "../token-parser";
import { TwingNodeVerbatim } from "../node/verbatim";
import { TokenType } from "twig-lexer";
export class TwingTokenParserVerbatim extends TwingTokenParser {
    /**
     * @param {Token} token
     *
     * @return TwingNodeVerbatim
     */
    parse(token) {
        let stream = this.parser.getStream();
        stream.expect(TokenType.TAG_END);
        /**
         * @type {TwingNodeText}
         */
        let text = this.parser.subparse([this, this.decideBlockEnd], true);
        stream.expect(TokenType.TAG_END);
        return new TwingNodeVerbatim(text.getAttribute('data'), token.line, token.column, this.getTag());
    }
    decideBlockEnd(token) {
        return token.test(TokenType.NAME, 'endverbatim');
    }
    getTag() {
        return 'verbatim';
    }
}
