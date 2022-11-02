"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserSet = void 0;
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
const set_1 = require("../node/set");
const twig_lexer_1 = require("twig-lexer");
class TwingTokenParserSet extends token_parser_1.TwingTokenParser {
    parse(token) {
        let lineno = token.line;
        let columnno = token.column;
        let stream = this.parser.getStream();
        let names = this.parser.parseAssignmentExpression();
        let capture = false;
        let values;
        if (stream.nextIf(twig_lexer_1.TokenType.OPERATOR, '=')) {
            values = this.parser.parseMultitargetExpression();
            stream.expect(twig_lexer_1.TokenType.TAG_END);
            if (names.getNodes().size !== values.getNodes().size) {
                throw new syntax_1.TwingErrorSyntax('When using set, you must have the same number of variables and assignments.', stream.getCurrent().line, stream.getSourceContext());
            }
        }
        else {
            capture = true;
            if (names.getNodes().size > 1) {
                throw new syntax_1.TwingErrorSyntax('When using set with a block, you cannot have a multi-target.', stream.getCurrent().line, stream.getSourceContext());
            }
            stream.expect(twig_lexer_1.TokenType.TAG_END);
            values = this.parser.subparse([this, this.decideBlockEnd], true);
            stream.expect(twig_lexer_1.TokenType.TAG_END);
        }
        return new set_1.TwingNodeSet(capture, names, values, lineno, columnno, this.getTag());
    }
    decideBlockEnd(token) {
        return token.test(twig_lexer_1.TokenType.NAME, 'endset');
    }
    getTag() {
        return 'set';
    }
}
exports.TwingTokenParserSet = TwingTokenParserSet;
