"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserBlock = void 0;
const token_parser_1 = require("../token-parser");
const node_1 = require("../node");
const syntax_1 = require("../error/syntax");
const block_1 = require("../node/block");
const print_1 = require("../node/print");
const block_reference_1 = require("../node/block-reference");
const twig_lexer_1 = require("twig-lexer");
/**
 * Marks a section of a template as being reusable.
 *
 * <pre>
 *  {% block head %}
 *    <link rel="stylesheet" href="style.css" />
 *    <title>{% block title %}{% endblock %} - My Webpage</title>
 *  {% endblock %}
 * </pre>
 */
class TwingTokenParserBlock extends token_parser_1.TwingTokenParser {
    parse(token) {
        let lineno = token.line;
        let columnno = token.column;
        let stream = this.parser.getStream();
        let name = stream.expect(twig_lexer_1.TokenType.NAME).value;
        if (this.parser.hasBlock(name)) {
            throw new syntax_1.TwingErrorSyntax(`The block '${name}' has already been defined line ${this.parser.getBlock(name).getTemplateLine()}.`, stream.getCurrent().line, stream.getSourceContext());
        }
        let block = new block_1.TwingNodeBlock(name, new node_1.TwingNode(new Map()), lineno, columnno);
        this.parser.setBlock(name, block);
        this.parser.pushLocalScope();
        this.parser.pushBlockStack(name);
        let body;
        if (stream.nextIf(twig_lexer_1.TokenType.TAG_END)) {
            body = this.parser.subparse([this, this.decideBlockEnd], true);
            let token = stream.nextIf(twig_lexer_1.TokenType.NAME);
            if (token) {
                let value = token.value;
                if (value != name) {
                    throw new syntax_1.TwingErrorSyntax(`Expected endblock for block "${name}" (but "${value}" given).`, stream.getCurrent().line, stream.getSourceContext());
                }
            }
        }
        else {
            let nodes = new Map();
            nodes.set(0, new print_1.TwingNodePrint(this.parser.parseExpression(), lineno, columnno));
            body = new node_1.TwingNode(nodes);
        }
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        block.setNode('body', body);
        this.parser.popBlockStack();
        this.parser.popLocalScope();
        return new block_reference_1.TwingNodeBlockReference(name, lineno, columnno, this.getTag());
    }
    decideBlockEnd(token) {
        return token.test(twig_lexer_1.TokenType.NAME, 'endblock');
    }
    getTag() {
        return 'block';
    }
}
exports.TwingTokenParserBlock = TwingTokenParserBlock;
