"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingTokenParserEmbed = void 0;
const include_1 = require("./include");
const embed_1 = require("../node/embed");
const twig_lexer_1 = require("twig-lexer");
const constant_1 = require("../node/expression/constant");
const name_1 = require("../node/expression/name");
class TwingTokenParserEmbed extends include_1.TwingTokenParserInclude {
    parse(token) {
        let stream = this.parser.getStream();
        let parent = this.parser.parseExpression();
        let embedArguments = this.parseArguments();
        let variables = embedArguments.variables;
        let only = embedArguments.only;
        let ignoreMissing = embedArguments.ignoreMissing;
        let parentToken;
        let fakeParentToken;
        parentToken = fakeParentToken = new twig_lexer_1.Token(twig_lexer_1.TokenType.STRING, '__parent__', token.line, token.column);
        if (parent.is(constant_1.type)) {
            parentToken = new twig_lexer_1.Token(twig_lexer_1.TokenType.STRING, parent.getAttribute('value'), token.line, token.column);
        }
        else if (parent.is(name_1.type)) {
            parentToken = new twig_lexer_1.Token(twig_lexer_1.TokenType.NAME, parent.getAttribute('name'), token.line, token.column);
        }
        // inject a fake parent to make the parent() function work
        stream.injectTokens([
            new twig_lexer_1.Token(twig_lexer_1.TokenType.TAG_START, '', token.line, token.column),
            new twig_lexer_1.Token(twig_lexer_1.TokenType.NAME, 'extends', token.line, token.column),
            parentToken,
            new twig_lexer_1.Token(twig_lexer_1.TokenType.TAG_END, '', token.line, token.column),
        ]);
        let module = this.parser.parse(stream, [this, this.decideBlockEnd], true);
        // override the parent with the correct one
        if (fakeParentToken === parentToken) {
            module.setNode('parent', parent);
        }
        this.parser.embedTemplate(module);
        stream.expect(twig_lexer_1.TokenType.TAG_END);
        return new embed_1.TwingNodeEmbed(module.getTemplateName(), module.getAttribute('index'), variables, only, ignoreMissing, token.line, token.column, this.getTag());
    }
    decideBlockEnd(token) {
        return token.test(twig_lexer_1.TokenType.NAME, 'endembed');
    }
    getTag() {
        return 'embed';
    }
}
exports.TwingTokenParserEmbed = TwingTokenParserEmbed;
