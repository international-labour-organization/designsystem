"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserFor = void 0;
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
const assign_name_1 = require("../node/expression/assign-name");
const for_1 = require("../node/for");
const twig_lexer_1 = require("twig-lexer");
const name_1 = require("../node/expression/name");
const get_attribute_1 = require("../node/expression/get-attribute");
const constant_1 = require("../node/expression/constant");
class TwingTokenParserFor extends token_parser_1.TwingTokenParser {
    parse(token) {
        let line = token.line;
        let column = token.column;
        let stream = this.parser.getStream();
        let targets = this.parser.parseAssignmentExpression();
        stream.expect(twig_lexer_1.TokenType.OPERATOR, 'in');
        let seq = this.parser.parseExpression();
        let ifExpr = null;
        if (stream.nextIf(twig_lexer_1.TokenType.NAME, 'if')) {
            console.warn(`Using an "if" condition on "for" tag in "${stream.getSourceContext().getName()}" at line ${line} is deprecated since Twig 2.10.0, use a "filter" filter or an "if" condition inside the "for" body instead (if your condition depends on a variable updated inside the loop).`);
            ifExpr = this.parser.parseExpression();
        }
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        let body = this.parser.subparse([this, this.decideForFork]);
        let elseToken;
        if (stream.next().value == 'else') {
            stream.expect(twig_lexer_1.TokenType.TAG_END);
            elseToken = this.parser.subparse([this, this.decideForEnd], true);
        }
        else {
            elseToken = null;
        }
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        let keyTarget;
        let valueTarget;
        if ((targets.getNodes().size) > 1) {
            keyTarget = targets.getNode(0);
            keyTarget = new assign_name_1.TwingNodeExpressionAssignName(keyTarget.getAttribute('name'), keyTarget.getTemplateLine(), keyTarget.getTemplateColumn());
            valueTarget = targets.getNode(1);
            valueTarget = new assign_name_1.TwingNodeExpressionAssignName(valueTarget.getAttribute('name'), valueTarget.getTemplateLine(), valueTarget.getTemplateColumn());
        }
        else {
            keyTarget = new assign_name_1.TwingNodeExpressionAssignName('_key', line, column);
            valueTarget = targets.getNode(0);
            valueTarget = new assign_name_1.TwingNodeExpressionAssignName(valueTarget.getAttribute('name'), valueTarget.getTemplateLine(), valueTarget.getTemplateColumn());
        }
        if (ifExpr) {
            this.checkLoopUsageCondition(stream, ifExpr);
            this.checkLoopUsageBody(stream, body);
        }
        return new for_1.TwingNodeFor(keyTarget, valueTarget, seq, ifExpr, body, elseToken, line, column, this.getTag());
    }
    decideForFork(token) {
        return token.test(twig_lexer_1.TokenType.NAME, ['else', 'endfor']);
    }
    decideForEnd(token) {
        return token.test(twig_lexer_1.TokenType.NAME, 'endfor');
    }
    // the loop variable cannot be used in the condition
    checkLoopUsageCondition(stream, node) {
        let self = this;
        if ((node.is(get_attribute_1.type)) && (node.getNode('node').is(name_1.type)) && (node.getNode('node').getAttribute('name') === 'loop')) {
            throw new syntax_1.TwingErrorSyntax('The "loop" variable cannot be used in a looping condition.', node.getTemplateLine(), stream.getSourceContext());
        }
        node.getNodes().forEach(function (n) {
            self.checkLoopUsageCondition(stream, n);
        });
    }
    // check usage of non-defined loop-items
    getTag() {
        return 'for';
    }
    // it does not catch all problems (for instance when a for is included into another or when the variable is used in an include)
    checkLoopUsageBody(stream, node) {
        if ((node.is(get_attribute_1.type)) && (node.getNode('node').is(name_1.type)) && (node.getNode('node').getAttribute('name') === 'loop')) {
            let attribute = node.getNode('attribute');
            if ((attribute.is(constant_1.type)) && (['length', 'revindex0', 'revindex', 'last'].indexOf(attribute.getAttribute('value')) > -1)) {
                throw new syntax_1.TwingErrorSyntax(`The "loop.${attribute.getAttribute('value')}" variable is not defined when looping with a condition.`, node.getTemplateLine(), stream.getSourceContext());
            }
        }
        // should check for parent.loop.XXX usage
        if (node.is(for_1.type)) {
            return;
        }
        for (let [k, n] of node.getNodes()) {
            this.checkLoopUsageBody(stream, n);
        }
    }
}
exports.TwingTokenParserFor = TwingTokenParserFor;
