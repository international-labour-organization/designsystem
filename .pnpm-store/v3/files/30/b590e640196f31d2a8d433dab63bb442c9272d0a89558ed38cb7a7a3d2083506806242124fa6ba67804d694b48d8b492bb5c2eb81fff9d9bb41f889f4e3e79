import { TwingTokenParser } from "../token-parser";
import { TwingNodeFlush } from "../node/flush";
import { TokenType } from "twig-lexer";
export class TwingTokenParserFlush extends TwingTokenParser {
    parse(token) {
        this.parser.getStream().expect(TokenType.TAG_END);
        return new TwingNodeFlush(token.line, token.column, this.getTag());
    }
    getTag() {
        return 'flush';
    }
}
