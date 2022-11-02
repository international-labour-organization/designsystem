import { TwingTokenParser } from "../token-parser";
import { TwingNode } from "../node";
import { Token } from "twig-lexer";
/**
 * Applies filters on a section of a template.
 *
 *   {% apply upper %}
 *      This text becomes uppercase
 *   {% endapply %}
 */
export declare class TwingTokenParserApply extends TwingTokenParser {
    parse(token: Token): TwingNode;
    decideBlockEnd(token: Token): boolean;
    getTag(): string;
}
