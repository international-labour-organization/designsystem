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
import { TwingNodeSet } from "../node/set";
import { Token } from "twig-lexer";
export declare class TwingTokenParserSet extends TwingTokenParser {
    parse(token: Token): TwingNodeSet;
    decideBlockEnd(token: Token): boolean;
    getTag(): string;
}
