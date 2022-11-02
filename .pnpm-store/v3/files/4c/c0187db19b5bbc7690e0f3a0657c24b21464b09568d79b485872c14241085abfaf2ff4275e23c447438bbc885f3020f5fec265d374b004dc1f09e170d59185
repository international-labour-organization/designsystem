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
import { TwingNode } from "../node";
import { Token } from "twig-lexer";
export declare class TwingTokenParserSpaceless extends TwingTokenParser {
    parse(token: Token): TwingNode;
    decideSpacelessEnd(token: Token): boolean;
    getTag(): string;
}
