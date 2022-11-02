import { TwingTokenParserInterface } from "./token-parser-interface";
import { TwingParser } from "./parser";
import { TwingNode } from "./node";
import { Token } from "twig-lexer";
/**
 * Base class for all token parsers.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export declare abstract class TwingTokenParser implements TwingTokenParserInterface {
    TwingTokenParserInterfaceImpl: TwingTokenParserInterface;
    constructor();
    /**
     * @var TwingParser
     */
    protected parser: TwingParser;
    abstract parse(token: Token): TwingNode;
    abstract getTag(): string;
    setParser(parser: TwingParser): void;
}
