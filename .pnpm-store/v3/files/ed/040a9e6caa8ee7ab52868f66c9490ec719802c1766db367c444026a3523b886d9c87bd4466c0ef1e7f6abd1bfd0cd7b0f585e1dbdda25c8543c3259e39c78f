"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserSpaceless = void 0;
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
const token_parser_1 = require("../token-parser");
const spaceless_1 = require("../node/spaceless");
const twig_lexer_1 = require("twig-lexer");
class TwingTokenParserSpaceless extends token_parser_1.TwingTokenParser {
    parse(token) {
        let line = token.line;
        let column = token.column;
        let stream = this.parser.getStream();
        console.warn(`The "spaceless" tag in "${stream.getSourceContext().getName()}" at line ${line} is deprecated since Twig 2.7, use the "spaceless" filter instead.`);
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        let body = this.parser.subparse([this, this.decideSpacelessEnd], true);
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        return new spaceless_1.TwingNodeSpaceless(body, line, column, this.getTag());
    }
    decideSpacelessEnd(token) {
        return token.test(twig_lexer_1.TokenType.NAME, 'endspaceless');
    }
    getTag() {
        return 'spaceless';
    }
}
exports.TwingTokenParserSpaceless = TwingTokenParserSpaceless;
