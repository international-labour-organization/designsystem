"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserMacro = void 0;
/**
 * Defines a macro.
 *
 * <pre>
 * {% macro input(name, value, type, size) %}
 *    <input type="{{ type|default('text') }}" name="{{ name }}" value="{{ value|e }}" size="{{ size|default(20) }}" />
 * {% endmacro %}
 * </pre>
 */
const token_parser_1 = require("../token-parser");
const syntax_1 = require("../error/syntax");
const body_1 = require("../node/body");
const macro_1 = require("../node/macro");
const twig_lexer_1 = require("twig-lexer");
class TwingTokenParserMacro extends token_parser_1.TwingTokenParser {
    parse(token) {
        let lineno = token.line;
        let columnno = token.column;
        let stream = this.parser.getStream();
        let name = stream.expect(twig_lexer_1.TokenType.NAME).value;
        let macroArguments = this.parser.parseArguments(true, true);
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        this.parser.pushLocalScope();
        let body = this.parser.subparse([this, this.decideBlockEnd], true);
        let nextToken = stream.nextIf(twig_lexer_1.TokenType.NAME);
        if (nextToken) {
            let value = nextToken.value;
            if (value != name) {
                throw new syntax_1.TwingErrorSyntax(`Expected endmacro for macro "${name}" (but "${value}" given).`, stream.getCurrent().line, stream.getSourceContext());
            }
        }
        this.parser.popLocalScope();
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        let nodes = new Map([
            [0, body]
        ]);
        this.parser.setMacro(name, new macro_1.TwingNodeMacro(name, new body_1.TwingNodeBody(nodes), macroArguments, lineno, columnno, this.getTag()));
        return null;
    }
    decideBlockEnd(token) {
        return token.test(twig_lexer_1.TokenType.NAME, 'endmacro');
    }
    getTag() {
        return 'macro';
    }
}
exports.TwingTokenParserMacro = TwingTokenParserMacro;
