"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserImport = void 0;
const token_parser_1 = require("../token-parser");
const assign_name_1 = require("../node/expression/assign-name");
const import_1 = require("../node/import");
const twig_lexer_1 = require("twig-lexer");
class TwingTokenParserImport extends token_parser_1.TwingTokenParser {
    parse(token) {
        let macro = this.parser.parseExpression();
        this.parser.getStream().expect(twig_lexer_1.TokenType.NAME, 'as');
        // template alias
        let var_ = new assign_name_1.TwingNodeExpressionAssignName(this.parser.getStream().expect(twig_lexer_1.TokenType.NAME).value, token.line, token.column);
        this.parser.getStream().expect(twig_lexer_1.TokenType.TAG_END);
        this.parser.addImportedSymbol('template', var_.getAttribute('name'));
        return new import_1.TwingNodeImport(macro, var_, token.line, token.column, this.getTag(), this.parser.isMainScope());
    }
    getTag() {
        return 'import';
    }
}
exports.TwingTokenParserImport = TwingTokenParserImport;
