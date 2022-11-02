import { TwingTokenParser } from "../token-parser";
import { TwingNodeDeprecated } from "../node/deprecated";
import { Token } from "twig-lexer";
/**
 * Deprecates a section of a template.
 *
 * <pre>
 * {% deprecated 'The "base.twig" template is deprecated, use "layout.twig" instead.' %}
 *
 * {% extends 'layout.html.twig' %}
 * </pre>
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export declare class TwingTokenParserDeprecated extends TwingTokenParser {
    parse(token: Token): TwingNodeDeprecated;
    getTag(): string;
}
