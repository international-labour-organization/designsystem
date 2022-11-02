/**
 * Tests a condition.
 *
 * <pre>
 * {% if users %}
 *  <ul>
 *    {% for user in users %}
 *      <li>{{ user.username|e }}</li>
 *    {% endfor %}
 *  </ul>
 * {% endif %}
 * </pre>
 */
import { TwingTokenParser } from "../token-parser";
import { TwingNodeIf } from "../node/if";
import { Token } from "twig-lexer";
export declare class TwingTokenParserIf extends TwingTokenParser {
    parse(token: Token): TwingNodeIf;
    decideIfFork(token: Token): boolean;
    decideIfEnd(token: Token): boolean;
    getTag(): string;
}
