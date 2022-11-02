"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserIf = void 0;
/**
 * Tests a condition.
 *
 * <pre>
 * {% if users %}
 *  <ul>
 *    {% for user in users %}
 *      <li>{{ user.username|e }}</li>
 *    {% endfor %}
 *  </ul>
 * {% endif %}
 * </pre>
 */
const token_parser_1 = require("../token-parser");
const node_1 = require("../node");
const if_1 = require("../node/if");
const twig_lexer_1 = require("twig-lexer");
class TwingTokenParserIf extends token_parser_1.TwingTokenParser {
    parse(token) {
        let lineno = token.line;
        let columnno = token.column;
        let expr = this.parser.parseExpression();
        let stream = this.parser.getStream();
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        let index = 0;
        let body = this.parser.subparse([this, this.decideIfFork]);
        let tests = new Map([
            [index++, expr],
            [index++, body]
        ]);
        let elseNode = null;
        let end = false;
        while (!end) {
            switch (stream.next().value) {
                case 'else':
                    stream.expect(twig_lexer_1.TokenType.TAG_END);
                    elseNode = this.parser.subparse([this, this.decideIfEnd]);
                    break;
                case 'elseif':
                    expr = this.parser.parseExpression();
                    stream.expect(twig_lexer_1.TokenType.TAG_END);
                    body = this.parser.subparse([this, this.decideIfFork]);
                    tests.set(index++, expr);
                    tests.set(index++, body);
                    break;
                case 'endif':
                    end = true;
                    break;
            }
        }
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        return new if_1.TwingNodeIf(new node_1.TwingNode(tests), elseNode, lineno, columnno, this.getTag());
    }
    decideIfFork(token) {
        return token.test(twig_lexer_1.TokenType.NAME, ['elseif', 'else', 'endif']);
    }
    decideIfEnd(token) {
        return token.test(twig_lexer_1.TokenType.NAME, 'endif');
    }
    getTag() {
        return 'if';
    }
}
exports.TwingTokenParserIf = TwingTokenParserIf;
