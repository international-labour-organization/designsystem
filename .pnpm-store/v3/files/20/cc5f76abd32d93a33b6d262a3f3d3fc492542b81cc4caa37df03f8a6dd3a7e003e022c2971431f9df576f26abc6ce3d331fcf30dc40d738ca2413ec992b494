import { TwingTokenParser } from "../token-parser";
import { TwingNodeInclude } from "../node/include";
import { TwingNodeExpression } from "../node/expression";
import { Token } from "twig-lexer";
export declare class TwingTokenParserInclude extends TwingTokenParser {
    parse(token: Token): TwingNodeInclude;
    getTag(): string;
    /**
     *
     * @returns {{variables: TwingNodeExpression, only: boolean, ignoreMissing: boolean}}
     */
    protected parseArguments(): {
        variables: TwingNodeExpression;
        only: boolean;
        ignoreMissing: boolean;
    };
}
