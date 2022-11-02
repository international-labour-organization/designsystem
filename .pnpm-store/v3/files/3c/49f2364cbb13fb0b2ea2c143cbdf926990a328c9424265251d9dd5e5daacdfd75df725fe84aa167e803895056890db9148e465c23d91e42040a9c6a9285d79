/**
 * Loops over each item of a sequence.
 *
 * <pre>
 * <ul>
 *  {% for user in users %}
 *    <li>{{ user.username|e }}</li>
 *  {% endfor %}
 * </ul>
 * </pre>
 */
import { TwingTokenParser } from "../token-parser";
import { TwingNodeSpaceless } from "../node/spaceless";
import { TokenType } from "twig-lexer";
export class TwingTokenParserSpaceless extends TwingTokenParser {
    parse(token) {
        let line = token.line;
        let column = token.column;
        let stream = this.parser.getStream();
        console.warn(`The "spaceless" tag in "${stream.getSourceContext().getName()}" at line ${line} is deprecated since Twig 2.7, use the "spaceless" filter instead.`);
        stream.expect(TokenType.TAG_END);
        let body = this.parser.subparse([this, this.decideSpacelessEnd], true);
        stream.expect(TokenType.TAG_END);
        return new TwingNodeSpaceless(body, line, column, this.getTag());
    }
    decideSpacelessEnd(token) {
        return token.test(TokenType.NAME, 'endspaceless');
    }
    getTag() {
        return 'spaceless';
    }
}
