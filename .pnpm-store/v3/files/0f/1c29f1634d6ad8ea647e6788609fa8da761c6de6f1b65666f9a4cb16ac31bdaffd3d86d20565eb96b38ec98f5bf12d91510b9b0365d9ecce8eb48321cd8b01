"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserApply = void 0;
const token_parser_1 = require("../token-parser");
const node_1 = require("../node");
const print_1 = require("../node/print");
const set_1 = require("../node/set");
const temp_name_1 = require("../node/expression/temp-name");
const twig_lexer_1 = require("twig-lexer");
/**
 * Applies filters on a section of a template.
 *
 *   {% apply upper %}
 *      This text becomes uppercase
 *   {% endapply %}
 */
class TwingTokenParserApply extends token_parser_1.TwingTokenParser {
    parse(token) {
        let lineno = token.line;
        let columno = token.column;
        let name = this.parser.getVarName();
        let ref;
        ref = new temp_name_1.TwingNodeExpressionTempName(name, false, lineno, columno);
        ref.setAttribute('always_defined', true);
        let filter = this.parser.parseFilterExpressionRaw(ref, this.getTag());
        this.parser.getStream().expect(twig_lexer_1.TokenType.TAG_END);
        let body = this.parser.subparse([this, this.decideBlockEnd], true);
        this.parser.getStream().expect(twig_lexer_1.TokenType.TAG_END);
        let nodes = new Map();
        ref = new temp_name_1.TwingNodeExpressionTempName(name, true, lineno, columno);
        nodes.set(0, new set_1.TwingNodeSet(true, ref, body, lineno, columno, this.getTag()));
        nodes.set(1, new print_1.TwingNodePrint(filter, lineno, columno, this.getTag()));
        return new node_1.TwingNode(nodes);
    }
    decideBlockEnd(token) {
        return token.test(twig_lexer_1.TokenType.NAME, 'endapply');
    }
    getTag() {
        return 'apply';
    }
}
exports.TwingTokenParserApply = TwingTokenParserApply;
