"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserExtends = void 0;
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
const syntax_1 = require("../error/syntax");
const twig_lexer_1 = require("twig-lexer");
class TwingTokenParserExtends extends token_parser_1.TwingTokenParser {
    parse(token) {
        let stream = this.parser.getStream();
        if (this.parser.peekBlockStack()) {
            throw new syntax_1.TwingErrorSyntax('Cannot use "extend" in a block.', token.line, stream.getSourceContext());
        }
        else if (!this.parser.isMainScope()) {
            throw new syntax_1.TwingErrorSyntax('Cannot use "extend" in a macro.', token.line, stream.getSourceContext());
        }
        if (this.parser.getParent() !== null) {
            throw new syntax_1.TwingErrorSyntax('Multiple extends tags are forbidden.', token.line, stream.getSourceContext());
        }
        this.parser.setParent(this.parser.parseExpression());
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        return null;
    }
    getTag() {
        return 'extends';
    }
}
exports.TwingTokenParserExtends = TwingTokenParserExtends;
