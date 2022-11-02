import { TwingTokenParser } from "../token-parser";
import { TwingNodeDo } from "../node/do";
import { TokenType } from "twig-lexer";
export class TwingTokenParserDo extends TwingTokenParser {
    parse(token) {
        let expr = this.parser.parseExpression();
        this.parser.getStream().expect(TokenType.TAG_END);
        return new TwingNodeDo(expr, token.line, token.column, this.getTag());
    }
    getTag() {
        return 'do';
    }
}
