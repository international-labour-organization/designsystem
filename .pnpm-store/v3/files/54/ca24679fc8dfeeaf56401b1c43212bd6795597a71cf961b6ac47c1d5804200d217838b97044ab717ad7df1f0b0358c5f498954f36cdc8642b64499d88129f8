/**
 * Marks a section of a template to be escaped or not.
 */
import { TwingTokenParser } from "../token-parser";
import { TwingErrorSyntax } from "../error/syntax";
import { TwingNodeAutoEscape } from "../node/auto-escape";
import { TokenType } from "twig-lexer";
import { type as constantType } from "../node/expression/constant";
export class TwingTokenParserAutoEscape extends TwingTokenParser {
    parse(token) {
        let lineno = token.line;
        let columnno = token.column;
        let stream = this.parser.getStream();
        let value;
        if (stream.test(TokenType.TAG_END)) {
            value = 'html';
        }
        else {
            let expr = this.parser.parseExpression();
            if (expr.type !== constantType) {
                throw new TwingErrorSyntax('An escaping strategy must be a string or false.', stream.getCurrent().line, stream.getSourceContext());
            }
            value = expr.getAttribute('value');
        }
        stream.expect(TokenType.TAG_END);
        let body = this.parser.subparse([this, this.decideBlockEnd], true);
        stream.expect(TokenType.TAG_END);
        return new TwingNodeAutoEscape(value, body, lineno, columnno, this.getTag());
    }
    decideBlockEnd(token) {
        return token.test(TokenType.NAME, 'endautoescape');
    }
    getTag() {
        return 'autoescape';
    }
}
