"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserFrom = void 0;
const token_parser_1 = require("../token-parser");
const import_1 = require("../node/import");
const assign_name_1 = require("../node/expression/assign-name");
const twig_lexer_1 = require("twig-lexer");
/**
 * Imports macros.
 *
 * <pre>
 *   {% from 'forms.html' import forms %}
 * </pre>
 */
class TwingTokenParserFrom extends token_parser_1.TwingTokenParser {
    parse(token) {
        let macro = this.parser.parseExpression();
        let stream = this.parser.getStream();
        stream.expect(twig_lexer_1.TokenType.NAME, 'import');
        let targets = new Map();
        do {
            let name = stream.expect(twig_lexer_1.TokenType.NAME).value;
            let alias = name;
            if (stream.nextIf(twig_lexer_1.TokenType.NAME, 'as')) {
                alias = stream.expect(twig_lexer_1.TokenType.NAME).value;
            }
            targets.set(name, alias);
            if (!stream.nextIf(twig_lexer_1.TokenType.PUNCTUATION, ',')) {
                break;
            }
        } while (true);
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        let expr = new assign_name_1.TwingNodeExpressionAssignName(this.parser.getVarName(), token.line, token.column);
        let node = new import_1.TwingNodeImport(macro, expr, token.line, token.column, this.getTag());
        for (let [name, alias] of targets) {
            this.parser.addImportedSymbol('function', alias, name, expr);
        }
        return node;
    }
    getTag() {
        return 'from';
    }
}
exports.TwingTokenParserFrom = TwingTokenParserFrom;
