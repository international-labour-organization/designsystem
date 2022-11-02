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
import { TwingTokenStream } from "../token-stream";
import { TwingNodeFor } from "../node/for";
import { Token } from "twig-lexer";
export declare class TwingTokenParserFor extends TwingTokenParser {
    parse(token: Token): TwingNodeFor;
    decideForFork(token: Token): boolean;
    decideForEnd(token: Token): boolean;
    checkLoopUsageCondition(stream: TwingTokenStream, node: TwingNode): void;
    getTag(): string;
    private checkLoopUsageBody;
}
