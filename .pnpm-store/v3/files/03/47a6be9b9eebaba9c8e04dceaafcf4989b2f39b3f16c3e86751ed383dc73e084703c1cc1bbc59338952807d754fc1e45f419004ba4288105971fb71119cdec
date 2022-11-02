import { TwingTokenParser } from "../token-parser";
import { TwingNode } from "../node";
import { Token } from "twig-lexer";
/**
 * Filters a section of a template by applying filters.
 *
 * <pre>
 * {% filter upper %}
 *  This text becomes uppercase
 * {% endfilter %}
 * </pre>
 */
export declare class TwingTokenParserFilter extends TwingTokenParser {
    parse(token: Token): TwingNode;
    decideBlockEnd(token: Token): boolean;
    getTag(): string;
}
