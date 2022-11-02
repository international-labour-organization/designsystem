import { TwingTokenParser } from "../token-parser";
import { TwingNode } from "../node";
import { Token } from "twig-lexer";
/**
 * Marks a section of a template as being reusable.
 *
 * <pre>
 *  {% block head %}
 *    <link rel="stylesheet" href="style.css" />
 *    <title>{% block title %}{% endblock %} - My Webpage</title>
 *  {% endblock %}
 * </pre>
 */
export declare class TwingTokenParserBlock extends TwingTokenParser {
    parse(token: Token): TwingNode;
    decideBlockEnd(token: Token): boolean;
    getTag(): string;
}
