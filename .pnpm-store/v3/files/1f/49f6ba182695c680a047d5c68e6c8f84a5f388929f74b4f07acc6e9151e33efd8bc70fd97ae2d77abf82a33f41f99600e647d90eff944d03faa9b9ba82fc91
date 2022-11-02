/**
 * Defines a macro.
 *
 * <pre>
 * {% macro input(name, value, type, size) %}
 *    <input type="{{ type|default('text') }}" name="{{ name }}" value="{{ value|e }}" size="{{ size|default(20) }}" />
 * {% endmacro %}
 * </pre>
 */
import { TwingTokenParser } from "../token-parser";
import { TwingNode } from "../node";
import { Token } from "twig-lexer";
export declare class TwingTokenParserMacro extends TwingTokenParser {
    parse(token: Token): TwingNode;
    decideBlockEnd(token: Token): boolean;
    getTag(): string;
}
