"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserInclude = void 0;
const token_parser_1 = require("../token-parser");
const include_1 = require("../node/include");
const twig_lexer_1 = require("twig-lexer");
class TwingTokenParserInclude extends token_parser_1.TwingTokenParser {
    parse(token) {
        let expr = this.parser.parseExpression();
        let parsedArguments = this.parseArguments();
        return new include_1.TwingNodeInclude(expr, parsedArguments.variables, parsedArguments.only, parsedArguments.ignoreMissing, token.line, token.column, this.getTag());
    }
    getTag() {
        return 'include';
    }
    /**
     *
     * @returns {{variables: TwingNodeExpression, only: boolean, ignoreMissing: boolean}}
     */
    parseArguments() {
        let stream = this.parser.getStream();
        let ignoreMissing = false;
        if (stream.nextIf(twig_lexer_1.TokenType.NAME, 'ignore')) {
            stream.expect(twig_lexer_1.TokenType.NAME, 'missing');
            ignoreMissing = true;
        }
        let variables = null;
        if (stream.nextIf(twig_lexer_1.TokenType.NAME, 'with')) {
            variables = this.parser.parseExpression();
        }
        let only = false;
        if (stream.nextIf(twig_lexer_1.TokenType.NAME, 'only')) {
            only = true;
        }
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        return {
            variables: variables,
            only: only,
            ignoreMissing: ignoreMissing
        };
    }
}
exports.TwingTokenParserInclude = TwingTokenParserInclude;
