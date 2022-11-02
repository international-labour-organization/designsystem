"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserFilter = void 0;
const token_parser_1 = require("../token-parser");
const block_reference_1 = require("../node/expression/block-reference");
const constant_1 = require("../node/expression/constant");
const block_1 = require("../node/block");
const print_1 = require("../node/print");
const twig_lexer_1 = require("twig-lexer");
/**
 * Filters a section of a template by applying filters.
 *
 * <pre>
 * {% filter upper %}
 *  This text becomes uppercase
 * {% endfilter %}
 * </pre>
 */
class TwingTokenParserFilter extends token_parser_1.TwingTokenParser {
    parse(token) {
        let stream = this.parser.getStream();
        let line = token.line;
        let column = token.column;
        console.warn(`The "filter" tag in "${stream.getSourceContext().getName()}" at line ${line} is deprecated since Twig 2.9, use the "apply" tag instead.`);
        let name = this.parser.getVarName();
        let ref = new block_reference_1.TwingNodeExpressionBlockReference(new constant_1.TwingNodeExpressionConstant(name, line, column), null, line, column, this.getTag());
        let filter = this.parser.parseFilterExpressionRaw(ref, this.getTag());
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        let body = this.parser.subparse([this, this.decideBlockEnd], true);
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        let block = new block_1.TwingNodeBlock(name, body, line, column);
        this.parser.setBlock(name, block);
        return new print_1.TwingNodePrint(filter, line, column, this.getTag());
    }
    decideBlockEnd(token) {
        return token.test(twig_lexer_1.TokenType.NAME, 'endfilter');
    }
    getTag() {
        return 'filter';
    }
}
exports.TwingTokenParserFilter = TwingTokenParserFilter;
