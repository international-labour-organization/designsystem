"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserDeprecated = void 0;
const token_parser_1 = require("../token-parser");
const deprecated_1 = require("../node/deprecated");
const twig_lexer_1 = require("twig-lexer");
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
class TwingTokenParserDeprecated extends token_parser_1.TwingTokenParser {
    parse(token) {
        let expr = this.parser.parseExpression();
        this.parser.getStream().expect(twig_lexer_1.TokenType.TAG_END);
        return new deprecated_1.TwingNodeDeprecated(expr, token.line, token.column, this.getTag());
    }
    getTag() {
        return 'deprecated';
    }
}
exports.TwingTokenParserDeprecated = TwingTokenParserDeprecated;
