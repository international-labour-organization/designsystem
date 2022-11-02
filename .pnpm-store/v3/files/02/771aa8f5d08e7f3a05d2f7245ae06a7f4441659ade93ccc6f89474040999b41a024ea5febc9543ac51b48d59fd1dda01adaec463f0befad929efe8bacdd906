"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserUse = void 0;
const token_parser_1 = require("../token-parser");
const syntax_1 = require("../error/syntax");
const constant_1 = require("../node/expression/constant");
const node_1 = require("../node");
const twig_lexer_1 = require("twig-lexer");
class TwingTokenParserUse extends token_parser_1.TwingTokenParser {
    parse(token) {
        let template = this.parser.parseExpression();
        let stream = this.parser.getStream();
        if (template.type !== constant_1.type) {
            throw new syntax_1.TwingErrorSyntax('The template references in a "use" statement must be a string.', stream.getCurrent().line, stream.getSourceContext());
        }
        let targets = new Map();
        if (stream.nextIf(twig_lexer_1.TokenType.NAME, 'with')) {
            do {
                let name = stream.expect(twig_lexer_1.TokenType.NAME).value;
                let alias = name;
                if (stream.nextIf(twig_lexer_1.TokenType.NAME, 'as')) {
                    alias = stream.expect(twig_lexer_1.TokenType.NAME).value;
                }
                targets.set(name, new constant_1.TwingNodeExpressionConstant(alias, token.line, token.column));
                if (!stream.nextIf(twig_lexer_1.TokenType.PUNCTUATION, ',')) {
                    break;
                }
            } while (true);
        }
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        this.parser.addTrait(new node_1.TwingNode(new Map([['template', template], ['targets', new node_1.TwingNode(targets)]])));
        return new node_1.TwingNode();
    }
    getTag() {
        return 'use';
    }
}
exports.TwingTokenParserUse = TwingTokenParserUse;
