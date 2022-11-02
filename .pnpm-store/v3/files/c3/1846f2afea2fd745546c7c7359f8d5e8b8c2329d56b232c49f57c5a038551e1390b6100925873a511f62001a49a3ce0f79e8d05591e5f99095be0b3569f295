"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingParser = void 0;
const syntax_1 = require("./error/syntax");
const node_1 = require("./node");
const text_1 = require("./node/text");
const print_1 = require("./node/print");
const body_1 = require("./node/body");
const module_1 = require("./node/module");
const node_traverser_1 = require("./node-traverser");
const token_parser_1 = require("./token-parser");
const first_1 = require("./helpers/first");
const push_1 = require("./helpers/push");
const comment_1 = require("./node/comment");
const ctype_space_1 = require("./helpers/ctype-space");
const constant_1 = require("./node/expression/constant");
const concat_1 = require("./node/expression/binary/concat");
const assign_name_1 = require("./node/expression/assign-name");
const arrow_function_1 = require("./node/expression/arrow-function");
const name_1 = require("./node/expression/name");
const parent_1 = require("./node/expression/parent");
const block_reference_1 = require("./node/expression/block-reference");
const get_attribute_1 = require("./node/expression/get-attribute");
const template_1 = require("./template");
const array_1 = require("./node/expression/array");
const method_call_1 = require("./node/expression/method-call");
const hash_1 = require("./node/expression/hash");
const test_1 = require("./test");
const not_1 = require("./node/expression/unary/not");
const neg_1 = require("./node/expression/unary/neg");
const pos_1 = require("./node/expression/unary/pos");
const spaceless_1 = require("./node/spaceless");
const block_reference_2 = require("./node/block-reference");
const conditional_1 = require("./node/expression/conditional");
const operator_1 = require("./operator");
const twig_lexer_1 = require("twig-lexer");
const lexer_1 = require("./lexer");
const function_1 = require("./node/expression/function");
const filter_1 = require("./node/expression/filter");
const sha256 = require('crypto-js/sha256');
const hex = require('crypto-js/enc-hex');
class TwingParserStackEntry {
    constructor(stream, parent = null, blocks, blockStack, macros, importedSymbols, traits, embeddedTemplates) {
        this.stream = stream;
        this.parent = parent;
        this.blocks = blocks;
        this.blockStack = blockStack;
        this.macros = macros;
        this.importedSymbols = importedSymbols;
        this.traits = traits;
        this.embeddedTemplates = embeddedTemplates;
    }
}
const nameRegExp = new RegExp(twig_lexer_1.namePattern);
class TwingParser {
    constructor(env, options) {
        this.stack = [];
        this.handlers = null;
        this.embeddedTemplates = [];
        this.varNameSalt = 0;
        this.embeddedTemplateIndex = 1;
        this.env = env;
        this.unaryOperators = env.getUnaryOperators();
        this.binaryOperators = env.getBinaryOperators();
        this.options = Object.assign({}, {
            strict: true
        }, options);
    }
    getVarName(prefix = '__internal_') {
        return `${prefix}${hex.stringify(sha256('TwingParser::getVarName' + this.stream.getSourceContext().getCode() + this.varNameSalt++))}`;
    }
    parse(stream, test = null, dropNeedle = false) {
        this.stack.push(new TwingParserStackEntry(this.stream, this.parent, this.blocks, this.blockStack, this.macros, this.importedSymbols, this.traits, this.embeddedTemplates));
        // tag handlers
        if (this.handlers === null) {
            this.handlers = new Map();
            for (let handler of this.env.getTokenParsers()) {
                handler.setParser(this);
                this.handlers.set(handler.getTag(), handler);
            }
        }
        // node visitors
        if (!this.visitors) {
            this.visitors = this.env.getNodeVisitors();
        }
        this.stream = stream;
        this.parent = null;
        this.blocks = new Map();
        this.macros = new Map();
        this.traits = new Map();
        this.blockStack = [];
        this.importedSymbols = [new Map()];
        this.embeddedTemplates = [];
        this.varNameSalt = 0;
        let body;
        try {
            body = this.subparse(test, dropNeedle);
            if (this.parent !== null && (body = this.filterBodyNodes(body)) === null) {
                body = new node_1.TwingNode();
            }
        }
        catch (e) {
            if (e instanceof syntax_1.TwingErrorSyntax) {
                if (!e.getSourceContext()) {
                    e.setSourceContext(this.stream.getSourceContext());
                }
            }
            throw e;
        }
        let nodes = new Map();
        nodes.set(0, body);
        let node = new module_1.TwingNodeModule(new body_1.TwingNodeBody(nodes), this.parent, new node_1.TwingNode(this.blocks), new node_1.TwingNode(this.macros), new node_1.TwingNode(this.traits), this.embeddedTemplates, stream.getSourceContext());
        let traverser = new node_traverser_1.TwingNodeTraverser(this.env, this.visitors);
        node = traverser.traverse(node);
        // restore previous stack so previous parse() call can resume working
        let key;
        let stack = this.stack.pop();
        this.stream = stack.stream;
        this.parent = stack.parent;
        this.blocks = stack.blocks;
        this.blockStack = stack.blockStack;
        this.macros = stack.macros;
        this.importedSymbols = stack.importedSymbols;
        this.traits = stack.traits;
        this.embeddedTemplates = stack.embeddedTemplates;
        return node;
    }
    getParent() {
        return this.parent;
    }
    setParent(parent) {
        this.parent = parent;
    }
    subparse(test, dropNeedle = false) {
        let lineno = this.getCurrentToken().line;
        let rv = new Map();
        let i = 0;
        let token;
        while (!this.stream.isEOF()) {
            switch (this.getCurrentToken().type) {
                case twig_lexer_1.TokenType.TEXT:
                    token = this.stream.next();
                    rv.set(i++, new text_1.TwingNodeText(token.value, token.line, token.column, null));
                    break;
                case twig_lexer_1.TokenType.VARIABLE_START:
                    token = this.stream.next();
                    let expression = this.parseExpression();
                    this.stream.expect(twig_lexer_1.TokenType.VARIABLE_END);
                    rv.set(i++, new print_1.TwingNodePrint(expression, token.line, token.column));
                    break;
                case twig_lexer_1.TokenType.TAG_START:
                    this.stream.next();
                    token = this.getCurrentToken();
                    if (token.type !== twig_lexer_1.TokenType.NAME) {
                        throw new syntax_1.TwingErrorSyntax('A block must start with a tag name.', token.line, this.stream.getSourceContext());
                    }
                    if (test !== null && test[1](token)) {
                        if (dropNeedle) {
                            this.stream.next();
                        }
                        if (rv.size === 1) {
                            return first_1.first(rv);
                        }
                        return new node_1.TwingNode(rv, new Map(), lineno);
                    }
                    if (!this.handlers.has(token.value)) {
                        let e;
                        if (test !== null) {
                            e = new syntax_1.TwingErrorSyntax(`Unexpected "${token.value}" tag`, token.line, this.stream.getSourceContext());
                            if (Array.isArray(test) && (test.length > 1) && (test[0] instanceof token_parser_1.TwingTokenParser)) {
                                e.appendMessage(` (expecting closing tag for the "${test[0].getTag()}" tag defined near line ${lineno}).`);
                            }
                        }
                        else {
                            e = new syntax_1.TwingErrorSyntax(`Unknown "${token.value}" tag.`, token.line, this.stream.getSourceContext());
                            e.addSuggestions(token.value, Array.from(this.env.getTags().keys()));
                        }
                        throw e;
                    }
                    this.stream.next();
                    let subparser = this.handlers.get(token.value);
                    let node = subparser.parse(token);
                    if (node !== null) {
                        rv.set(i++, node);
                    }
                    break;
                case twig_lexer_1.TokenType.COMMENT_START:
                    this.stream.next();
                    token = this.stream.expect(twig_lexer_1.TokenType.TEXT);
                    this.stream.expect(twig_lexer_1.TokenType.COMMENT_END);
                    rv.set(i++, new comment_1.TwingNodeComment(token.value, token.line, token.column));
                    break;
                default:
                    throw new syntax_1.TwingErrorSyntax('Lexer or parser ended up in unsupported state.', this.getCurrentToken().line, this.stream.getSourceContext());
            }
        }
        if (rv.size === 1) {
            return first_1.first(rv);
        }
        return new node_1.TwingNode(rv, new Map(), lineno);
    }
    getBlockStack() {
        return this.blockStack;
    }
    peekBlockStack() {
        return this.blockStack[this.blockStack.length - 1];
    }
    popBlockStack() {
        this.blockStack.pop();
    }
    pushBlockStack(name) {
        this.blockStack.push(name);
    }
    hasBlock(name) {
        return this.blocks.has(name);
    }
    getBlock(name) {
        return this.blocks.get(name);
    }
    setBlock(name, value) {
        let bodyNodes = new Map();
        bodyNodes.set(0, value);
        this.blocks.set(name, new body_1.TwingNodeBody(bodyNodes, new Map(), value.getTemplateLine()));
    }
    addTrait(trait) {
        push_1.push(this.traits, trait);
    }
    hasTraits() {
        return this.traits.size > 0;
    }
    embedTemplate(template) {
        template.setIndex(this.embeddedTemplateIndex++);
        this.embeddedTemplates.push(template);
    }
    /**
     * @return {Token}
     */
    getCurrentToken() {
        return this.stream.getCurrent();
    }
    /**
     *
     * @return {TwingTokenStream}
     */
    getStream() {
        return this.stream;
    }
    addImportedSymbol(type, alias, name = null, node = null) {
        let localScope = this.importedSymbols[0];
        if (!localScope.has(type)) {
            localScope.set(type, new Map());
        }
        let localScopeType = localScope.get(type);
        localScopeType.set(alias, { name: name, node: node });
    }
    getImportedSymbol(type, alias) {
        let result = null;
        let testImportedSymbol = (importedSymbol) => {
            if (importedSymbol.has(type)) {
                let importedSymbolType = importedSymbol.get(type);
                if (importedSymbolType.has(alias)) {
                    return importedSymbolType.get(alias);
                }
            }
            return null;
        };
        result = testImportedSymbol(this.importedSymbols[0]);
        // if the symbol does not exist in the current scope (0), try in the main/global scope (last index)
        let length = this.importedSymbols.length;
        if (!result && (length > 1)) {
            result = testImportedSymbol(this.importedSymbols[length - 1]);
        }
        return result;
    }
    hasMacro(name) {
        return this.macros.has(name);
    }
    setMacro(name, node) {
        this.macros.set(name, node);
    }
    isMainScope() {
        return this.importedSymbols.length === 1;
    }
    pushLocalScope() {
        this.importedSymbols.unshift(new Map());
    }
    popLocalScope() {
        this.importedSymbols.shift();
    }
    /**
     *
     * @param node
     * @param nested {boolean}
     * @returns {TwingNode}
     */
    filterBodyNodes(node, nested = false) {
        // check that the body does not contain non-empty output nodes
        if ((node.is(text_1.type) && !ctype_space_1.ctypeSpace(node.getAttribute('data'))) ||
            (!node.is(text_1.type) && !node.is(block_reference_2.type) && (node.TwingNodeOutputInterfaceImpl) && !node.is(spaceless_1.type))) {
            if (node.toString().indexOf(String.fromCharCode(0xEF, 0xBB, 0xBF)) > -1) {
                let nodeData = node.getAttribute('data');
                let trailingData = nodeData.substring(3);
                if (trailingData === '' || ctype_space_1.ctypeSpace(trailingData)) {
                    // bypass empty nodes starting with a BOM
                    return null;
                }
            }
            throw new syntax_1.TwingErrorSyntax(`A template that extends another one cannot include content outside Twig blocks. Did you forget to put the content inside a {% block %} tag?`, node.getTemplateLine(), this.stream.getSourceContext());
        }
        // bypass nodes that "capture" the output
        if (node.TwingNodeCaptureInterfaceImpl) {
            // a "block" tag in such a node will serve as a block definition AND be displayed in place as well
            return node;
        }
        // to be removed completely in Twig 3.0
        if (!nested && (node.is(spaceless_1.type))) {
            console.warn(`Using the spaceless tag at the root level of a child template in "${this.stream.getSourceContext().getName()}" at line ${node.getTemplateLine()} is deprecated since Twig 2.5.0 and will become a syntax error in Twig 3.0.`);
        }
        // "block" tags that are not captured (see above) are only used for defining
        // the content of the block. In such a case, nesting it does not work as
        // expected as the definition is not part of the default template code flow.
        if (nested && (node.is(block_reference_2.type))) {
            console.warn(`Nesting a block definition under a non-capturing node in "${this.stream.getSourceContext().getName()}" at line ${node.getTemplateLine()} is deprecated since Twig 2.5.0 and will become a syntax error in Twig 3.0.`);
            return null;
        }
        if (node.TwingNodeOutputInterfaceImpl && (node.type !== spaceless_1.type)) {
            return null;
        }
        // here, nested means "being at the root level of a child template"
        // we need to discard the wrapping "TwingNode" for the "body" node
        nested = nested || (node.type !== null);
        for (let [k, n] of node.getNodes()) {
            if (n !== null && (this.filterBodyNodes(n, nested) === null)) {
                node.removeNode(k);
            }
        }
        return node;
    }
    parseStringExpression() {
        let stream = this.getStream();
        let nodes = [];
        // a string cannot be followed by another string in a single expression
        let nextCanBeString = true;
        let token;
        while (true) {
            if (nextCanBeString && (token = stream.nextIf(twig_lexer_1.TokenType.STRING))) {
                nodes.push(new constant_1.TwingNodeExpressionConstant(token.value, token.line, token.column));
                nextCanBeString = false;
            }
            else if (stream.nextIf(twig_lexer_1.TokenType.INTERPOLATION_START)) {
                nodes.push(this.parseExpression());
                stream.expect(twig_lexer_1.TokenType.INTERPOLATION_END);
                nextCanBeString = true;
            }
            else {
                break;
            }
        }
        let expr = nodes.shift();
        for (let node of nodes) {
            expr = new concat_1.TwingNodeExpressionBinaryConcat([expr, node], node.getTemplateLine(), node.getTemplateColumn());
        }
        return expr;
    }
    // expressions
    parseExpression(precedence = 0, allowArrow = false) {
        if (allowArrow) {
            let arrow = this.parseArrow();
            if (arrow) {
                return arrow;
            }
        }
        let expr = this.getPrimary();
        let token = this.getCurrentToken();
        while (this.isBinary(token) && this.binaryOperators.get(token.value).getPrecedence() >= precedence) {
            let operator = this.binaryOperators.get(token.value);
            this.getStream().next();
            if (token.value === 'is not') {
                expr = this.parseNotTestExpression(expr);
            }
            else if (token.value === 'is') {
                expr = this.parseTestExpression(expr);
            }
            else {
                let expr1 = this.parseExpression(operator.getAssociativity() === operator_1.TwingOperatorAssociativity.LEFT ? operator.getPrecedence() + 1 : operator.getPrecedence());
                let expressionFactory = operator.getExpressionFactory();
                expr = expressionFactory([expr, expr1], token.line, token.column);
            }
            token = this.getCurrentToken();
        }
        if (precedence === 0) {
            return this.parseConditionalExpression(expr);
        }
        return expr;
    }
    /**
     * @return TwingNodeExpressionArrowFunction|null
     */
    parseArrow() {
        let stream = this.getStream();
        let token;
        let line;
        let column;
        let names;
        // short array syntax (one argument, no parentheses)?
        if (stream.look(1).test(twig_lexer_1.TokenType.ARROW)) {
            line = stream.getCurrent().line;
            column = stream.getCurrent().column;
            token = stream.expect(twig_lexer_1.TokenType.NAME);
            names = new Map([[0, new assign_name_1.TwingNodeExpressionAssignName(token.value, token.line, token.column)]]);
            stream.expect(twig_lexer_1.TokenType.ARROW);
            return new arrow_function_1.TwingNodeExpressionArrowFunction(this.parseExpression(0), new node_1.TwingNode(names), line, column);
        }
        // first, determine if we are parsing an arrow function by finding => (long form)
        let i = 0;
        if (!stream.look(i).test(twig_lexer_1.TokenType.PUNCTUATION, '(')) {
            return null;
        }
        ++i;
        while (true) {
            // variable name
            ++i;
            if (!stream.look(i).test(twig_lexer_1.TokenType.PUNCTUATION, ',')) {
                break;
            }
            ++i;
        }
        if (!stream.look(i).test(twig_lexer_1.TokenType.PUNCTUATION, ')')) {
            return null;
        }
        ++i;
        if (!stream.look(i).test(twig_lexer_1.TokenType.ARROW)) {
            return null;
        }
        // yes, let's parse it properly
        token = stream.expect(twig_lexer_1.TokenType.PUNCTUATION, '(');
        line = token.line;
        column = token.column;
        names = new Map();
        i = 0;
        while (true) {
            token = this.getCurrentToken();
            if (!token.test(twig_lexer_1.TokenType.NAME)) {
                throw new syntax_1.TwingErrorSyntax(`Unexpected token "${lexer_1.typeToEnglish(token.type)}" of value "${token.value}".`, token.line, stream.getSourceContext());
            }
            names.set(i++, new assign_name_1.TwingNodeExpressionAssignName(token.value, token.line, token.column));
            stream.next();
            if (!stream.nextIf(twig_lexer_1.TokenType.PUNCTUATION, ',')) {
                break;
            }
        }
        stream.expect(twig_lexer_1.TokenType.PUNCTUATION, ')');
        stream.expect(twig_lexer_1.TokenType.ARROW);
        return new arrow_function_1.TwingNodeExpressionArrowFunction(this.parseExpression(0), new node_1.TwingNode(names), line, column);
    }
    getPrimary() {
        let token = this.getCurrentToken();
        if (this.isUnary(token)) {
            let operator = this.unaryOperators.get(token.value);
            this.getStream().next();
            let expr = this.parseExpression(operator.getPrecedence());
            return this.parsePostfixExpression(operator.getExpressionFactory()([expr, null], token.line, token.column));
        }
        else if (token.test(twig_lexer_1.TokenType.PUNCTUATION, '(')) {
            this.getStream().next();
            let expr = this.parseExpression();
            this.getStream().expect(twig_lexer_1.TokenType.PUNCTUATION, ')', 'An opened parenthesis is not properly closed');
            return this.parsePostfixExpression(expr);
        }
        return this.parsePrimaryExpression();
    }
    parsePrimaryExpression() {
        let token = this.getCurrentToken();
        let node;
        switch (token.type) {
            case twig_lexer_1.TokenType.NAME:
                this.getStream().next();
                switch (token.value) {
                    case 'true':
                    case 'TRUE':
                        node = new constant_1.TwingNodeExpressionConstant(true, token.line, token.column);
                        break;
                    case 'false':
                    case 'FALSE':
                        node = new constant_1.TwingNodeExpressionConstant(false, token.line, token.column);
                        break;
                    case 'none':
                    case 'NONE':
                    case 'null':
                    case 'NULL':
                        node = new constant_1.TwingNodeExpressionConstant(null, token.line, token.column);
                        break;
                    default:
                        if ('(' === this.getCurrentToken().value) {
                            node = this.getFunctionNode(token.value, token.line, token.column);
                        }
                        else {
                            node = new name_1.TwingNodeExpressionName(token.value, token.line, token.column);
                        }
                }
                break;
            case twig_lexer_1.TokenType.NUMBER:
                this.getStream().next();
                node = new constant_1.TwingNodeExpressionConstant(token.value, token.line, token.column);
                break;
            case twig_lexer_1.TokenType.STRING:
            case twig_lexer_1.TokenType.INTERPOLATION_START:
                node = this.parseStringExpression();
                break;
            case twig_lexer_1.TokenType.OPERATOR:
                let match = nameRegExp.exec(token.value);
                if (match !== null && match[0] === token.value) {
                    // in this context, string operators are variable names
                    this.getStream().next();
                    node = new name_1.TwingNodeExpressionName(token.value, token.line, token.column);
                    break;
                }
                else if (this.unaryOperators.has(token.value)) {
                    let operator = this.unaryOperators.get(token.value);
                    this.getStream().next();
                    let expr = this.parsePrimaryExpression();
                    node = operator.getExpressionFactory()([expr, null], token.line, token.column);
                    break;
                }
            default:
                if (token.test(twig_lexer_1.TokenType.PUNCTUATION, '[')) {
                    node = this.parseArrayExpression();
                }
                else if (token.test(twig_lexer_1.TokenType.PUNCTUATION, '{')) {
                    node = this.parseHashExpression();
                }
                else if (token.test(twig_lexer_1.TokenType.OPERATOR, '=') && (this.getStream().look(-1).value === '==' || this.getStream().look(-1).value === '!=')) {
                    throw new syntax_1.TwingErrorSyntax(`Unexpected operator of value "${token.value}". Did you try to use "===" or "!==" for strict comparison? Use "is same as(value)" instead.`, token.line, this.getStream().getSourceContext());
                }
                else {
                    throw new syntax_1.TwingErrorSyntax(`Unexpected token "${lexer_1.typeToEnglish(token.type)}" of value "${token.value}".`, token.line, this.getStream().getSourceContext());
                }
        }
        return this.parsePostfixExpression(node);
    }
    getFunctionNode(name, line, column) {
        switch (name) {
            case 'parent':
                this.parseArguments();
                if (!this.getBlockStack().length) {
                    throw new syntax_1.TwingErrorSyntax('Calling "parent" outside a block is forbidden.', line, this.getStream().getSourceContext());
                }
                if (!this.getParent() && !this.hasTraits()) {
                    throw new syntax_1.TwingErrorSyntax('Calling "parent" on a template that does not extend nor "use" another template is forbidden.', line, this.getStream().getSourceContext());
                }
                return new parent_1.TwingNodeExpressionParent(this.peekBlockStack(), line);
            case 'block':
                let blockArgs = this.parseArguments();
                if (blockArgs.getNodes().size < 1) {
                    throw new syntax_1.TwingErrorSyntax('The "block" function takes one argument (the block name).', line, this.getStream().getSourceContext());
                }
                return new block_reference_1.TwingNodeExpressionBlockReference(blockArgs.getNode(0), blockArgs.getNodes().size > 1 ? blockArgs.getNode(1) : null, line, column);
            case 'attribute':
                let attributeArgs = this.parseArguments();
                if (attributeArgs.getNodes().size < 2) {
                    throw new syntax_1.TwingErrorSyntax('The "attribute" function takes at least two arguments (the variable and the attributes).', line, this.getStream().getSourceContext());
                }
                return new get_attribute_1.TwingNodeExpressionGetAttribute(attributeArgs.getNode(0), attributeArgs.getNode(1), attributeArgs.getNodes().size > 2 ? attributeArgs.getNode(2) : null, template_1.TwingTemplate.ANY_CALL, line, column);
            default:
                let alias = this.getImportedSymbol('function', name);
                if (alias) {
                    let functionArguments = new array_1.TwingNodeExpressionArray(new Map(), line, column);
                    this.parseArguments().getNodes().forEach(function (n, name) {
                        functionArguments.addElement(n);
                    });
                    let node = new method_call_1.TwingNodeExpressionMethodCall(alias.node, alias.name, functionArguments, line, column);
                    node.setAttribute('safe', true);
                    return node;
                }
                let aliasArguments = this.parseArguments(true);
                let aliasFactory = this.getFunctionExpressionFactory(name, line, column);
                return aliasFactory(name, aliasArguments, line, column);
        }
    }
    parseArrayExpression() {
        let stream = this.getStream();
        stream.expect(twig_lexer_1.TokenType.PUNCTUATION, '[', 'An array element was expected');
        let node = new array_1.TwingNodeExpressionArray(new Map(), stream.getCurrent().line, stream.getCurrent().column);
        let first = true;
        while (!stream.test(twig_lexer_1.TokenType.PUNCTUATION, ']')) {
            if (!first) {
                stream.expect(twig_lexer_1.TokenType.PUNCTUATION, ',', 'An array element must be followed by a comma');
                // trailing ,?
                if (stream.test(twig_lexer_1.TokenType.PUNCTUATION, ']')) {
                    break;
                }
            }
            first = false;
            node.addElement(this.parseExpression());
        }
        stream.expect(twig_lexer_1.TokenType.PUNCTUATION, ']', 'An opened array is not properly closed');
        return node;
    }
    parseHashExpression() {
        let stream = this.getStream();
        stream.expect(twig_lexer_1.TokenType.PUNCTUATION, '{', 'A hash element was expected');
        let node = new hash_1.TwingNodeExpressionHash(new Map(), stream.getCurrent().line, stream.getCurrent().column);
        let first = true;
        while (!stream.test(twig_lexer_1.TokenType.PUNCTUATION, '}')) {
            if (!first) {
                stream.expect(twig_lexer_1.TokenType.PUNCTUATION, ',', 'A hash value must be followed by a comma');
                // trailing ,?
                if (stream.test(twig_lexer_1.TokenType.PUNCTUATION, '}')) {
                    break;
                }
            }
            first = false;
            // a hash key can be:
            //
            //  * a number -- 12
            //  * a string -- 'a'
            //  * a name, which is equivalent to a string -- a
            //  * an expression, which must be enclosed in parentheses -- (1 + 2)
            let token;
            let key;
            if ((token = stream.nextIf(twig_lexer_1.TokenType.STRING)) || (token = stream.nextIf(twig_lexer_1.TokenType.NAME)) || (token = stream.nextIf(twig_lexer_1.TokenType.NUMBER))) {
                key = new constant_1.TwingNodeExpressionConstant(token.value, token.line, token.column);
            }
            else if (stream.test(twig_lexer_1.TokenType.PUNCTUATION, '(')) {
                key = this.parseExpression();
            }
            else {
                let current = stream.getCurrent();
                throw new syntax_1.TwingErrorSyntax(`A hash key must be a quoted string, a number, a name, or an expression enclosed in parentheses (unexpected token "${lexer_1.typeToEnglish(current.type)}" of value "${current.value}".`, current.line, stream.getSourceContext());
            }
            stream.expect(twig_lexer_1.TokenType.PUNCTUATION, ':', 'A hash key must be followed by a colon (:)');
            let value = this.parseExpression();
            node.addElement(value, key);
        }
        stream.expect(twig_lexer_1.TokenType.PUNCTUATION, '}', 'An opened hash is not properly closed');
        return node;
    }
    parseSubscriptExpression(node) {
        let stream = this.getStream();
        let token = stream.next();
        let lineno = token.line;
        let columnno = token.column;
        let arguments_ = new array_1.TwingNodeExpressionArray(new Map(), lineno, columnno);
        let arg;
        let type = template_1.TwingTemplate.ANY_CALL;
        if (token.value === '.') {
            token = stream.next();
            let match = nameRegExp.exec(token.value);
            if ((token.type === twig_lexer_1.TokenType.NAME) || (token.type === twig_lexer_1.TokenType.NUMBER) || (token.type === twig_lexer_1.TokenType.OPERATOR && (match !== null))) {
                arg = new constant_1.TwingNodeExpressionConstant(token.value, lineno, columnno);
                if (stream.test(twig_lexer_1.TokenType.PUNCTUATION, '(')) {
                    type = template_1.TwingTemplate.METHOD_CALL;
                    let node = this.parseArguments();
                    node.getNodes().forEach(function (n, k) {
                        arguments_.addElement(n);
                    });
                }
            }
            else {
                throw new syntax_1.TwingErrorSyntax('Expected name or number.', lineno, stream.getSourceContext());
            }
            if ((node.is(name_1.type)) && this.getImportedSymbol('template', node.getAttribute('name'))) {
                let name = arg.getAttribute('value');
                node = new method_call_1.TwingNodeExpressionMethodCall(node, name, arguments_, lineno, columnno);
                node.setAttribute('safe', true);
                return node;
            }
        }
        else {
            type = template_1.TwingTemplate.ARRAY_CALL;
            // slice?
            let slice = false;
            if (stream.test(twig_lexer_1.TokenType.PUNCTUATION, ':')) {
                slice = true;
                arg = new constant_1.TwingNodeExpressionConstant(0, token.line, token.column);
            }
            else {
                arg = this.parseExpression();
            }
            if (stream.nextIf(twig_lexer_1.TokenType.PUNCTUATION, ':')) {
                slice = true;
            }
            if (slice) {
                let length;
                if (stream.test(twig_lexer_1.TokenType.PUNCTUATION, ']')) {
                    length = new constant_1.TwingNodeExpressionConstant(null, token.line, token.column);
                }
                else {
                    length = this.parseExpression();
                }
                let factory = this.getFilterExpressionFactory('slice', token.line, token.column);
                let filterArguments = new node_1.TwingNode(new Map([[0, arg], [1, length]]));
                let filter = factory.call(this, node, new constant_1.TwingNodeExpressionConstant('slice', token.line, token.column), filterArguments, token.line, token.column);
                stream.expect(twig_lexer_1.TokenType.PUNCTUATION, ']');
                return filter;
            }
            stream.expect(twig_lexer_1.TokenType.PUNCTUATION, ']');
        }
        return new get_attribute_1.TwingNodeExpressionGetAttribute(node, arg, arguments_, type, lineno, columnno);
    }
    parsePostfixExpression(node) {
        while (true) {
            let token = this.getCurrentToken();
            if (token.type === twig_lexer_1.TokenType.PUNCTUATION) {
                if ('.' == token.value || '[' == token.value) {
                    node = this.parseSubscriptExpression(node);
                }
                else if ('|' == token.value) {
                    node = this.parseFilterExpression(node);
                }
                else {
                    break;
                }
            }
            else {
                break;
            }
        }
        return node;
    }
    parseTestExpression(node) {
        let stream = this.getStream();
        let name;
        let test;
        [name, test] = this.getTest(node.getTemplateLine());
        let expressionFactory = test.getExpressionFactory();
        let testArguments = null;
        if (stream.test(twig_lexer_1.TokenType.PUNCTUATION, '(')) {
            testArguments = this.parseArguments(true);
        }
        if ((name === 'defined') && node.is(name_1.type)) {
            let alias = this.getImportedSymbol('function', node.getAttribute('name'));
            if (alias !== null) {
                node = new method_call_1.TwingNodeExpressionMethodCall(alias.node, alias.name, new array_1.TwingNodeExpressionArray(new Map(), node.getTemplateLine(), node.getTemplateColumn()), node.getTemplateLine(), node.getTemplateColumn());
                node.setAttribute('safe', true);
            }
        }
        return expressionFactory.call(this, node, name, testArguments, this.getCurrentToken().line);
    }
    parseNotTestExpression(node) {
        return new not_1.TwingNodeExpressionUnaryNot(this.parseTestExpression(node), this.getCurrentToken().line, this.getCurrentToken().column);
    }
    parseConditionalExpression(expr) {
        let expr2;
        let expr3;
        while (this.getStream().nextIf(twig_lexer_1.TokenType.PUNCTUATION, '?')) {
            if (!this.getStream().nextIf(twig_lexer_1.TokenType.PUNCTUATION, ':')) {
                expr2 = this.parseExpression();
                if (this.getStream().nextIf(twig_lexer_1.TokenType.PUNCTUATION, ':')) {
                    expr3 = this.parseExpression();
                }
                else {
                    expr3 = new constant_1.TwingNodeExpressionConstant('', this.getCurrentToken().line, this.getCurrentToken().column);
                }
            }
            else {
                expr2 = expr;
                expr3 = this.parseExpression();
            }
            expr = new conditional_1.TwingNodeExpressionConditional(expr, expr2, expr3, this.getCurrentToken().line, this.getCurrentToken().column);
        }
        return expr;
    }
    parseFilterExpression(node) {
        this.getStream().next();
        return this.parseFilterExpressionRaw(node);
    }
    parseFilterExpressionRaw(node, tag = null) {
        while (true) {
            let token = this.getStream().expect(twig_lexer_1.TokenType.NAME);
            let name = new constant_1.TwingNodeExpressionConstant(token.value, token.line, token.column);
            let methodArguments;
            if (!this.getStream().test(twig_lexer_1.TokenType.PUNCTUATION, '(')) {
                methodArguments = new node_1.TwingNode();
            }
            else {
                methodArguments = this.parseArguments(true, false, true);
            }
            let factory = this.getFilterExpressionFactory('' + name.getAttribute('value'), token.line, token.column);
            node = factory.call(this, node, name, methodArguments, token.line, tag);
            if (!this.getStream().test(twig_lexer_1.TokenType.PUNCTUATION, '|')) {
                break;
            }
            this.getStream().next();
        }
        return node;
    }
    /**
     * Parses arguments.
     *
     * @param namedArguments {boolean} Whether to allow named arguments or not
     * @param definition {boolean} Whether we are parsing arguments for a function definition
     * @param allowArrow {boolean}
     *
     * @return TwingNode
     *
     * @throws TwingErrorSyntax
     */
    parseArguments(namedArguments = false, definition = false, allowArrow = false) {
        let parsedArguments = new Map();
        let stream = this.getStream();
        let value;
        let token;
        stream.expect(twig_lexer_1.TokenType.PUNCTUATION, '(', 'A list of arguments must begin with an opening parenthesis');
        while (!stream.test(twig_lexer_1.TokenType.PUNCTUATION, ')')) {
            if (parsedArguments.size > 0) {
                stream.expect(twig_lexer_1.TokenType.PUNCTUATION, ',', 'Arguments must be separated by a comma');
            }
            if (definition) {
                token = stream.expect(twig_lexer_1.TokenType.NAME, null, 'An argument must be a name');
                value = new name_1.TwingNodeExpressionName(token.value, this.getCurrentToken().line, this.getCurrentToken().column);
            }
            else {
                value = this.parseExpression(0, allowArrow);
            }
            let name = null;
            if (namedArguments && (token = stream.nextIf(twig_lexer_1.TokenType.OPERATOR, '='))) {
                if (value.type !== name_1.type) {
                    throw new syntax_1.TwingErrorSyntax(`A parameter name must be a string, "${value.constructor.name}" given.`, token.line, stream.getSourceContext());
                }
                name = value.getAttribute('name');
                if (definition) {
                    value = this.parsePrimaryExpression();
                    if (!this.checkConstantExpression(value)) {
                        throw new syntax_1.TwingErrorSyntax(`A default value for an argument must be a constant (a boolean, a string, a number, or an array).`, token.line, stream.getSourceContext());
                    }
                }
                else {
                    value = this.parseExpression(0, allowArrow);
                }
            }
            if (definition) {
                if (null === name) {
                    name = value.getAttribute('name');
                    value = new constant_1.TwingNodeExpressionConstant(null, this.getCurrentToken().line, this.getCurrentToken().column);
                }
                parsedArguments.set(name, value);
            }
            else {
                if (null === name) {
                    push_1.push(parsedArguments, value);
                }
                else {
                    parsedArguments.set(name, value);
                }
            }
        }
        stream.expect(twig_lexer_1.TokenType.PUNCTUATION, ')', 'A list of arguments must be closed by a parenthesis');
        return new node_1.TwingNode(parsedArguments);
    }
    parseAssignmentExpression() {
        let stream = this.getStream();
        let targets = new Map();
        while (true) {
            let token = this.getCurrentToken();
            if (stream.test(twig_lexer_1.TokenType.OPERATOR) && nameRegExp.exec(token.value)) {
                // in this context, string operators are variable names
                this.getStream().next();
            }
            else {
                stream.expect(twig_lexer_1.TokenType.NAME, null, 'Only variables can be assigned to');
            }
            let value = token.value;
            if (['true', 'false', 'none', 'null'].indexOf(value.toLowerCase()) > -1) {
                throw new syntax_1.TwingErrorSyntax(`You cannot assign a value to "${value}".`, token.line, stream.getSourceContext());
            }
            push_1.push(targets, new assign_name_1.TwingNodeExpressionAssignName(value, token.line, token.column));
            if (!stream.nextIf(twig_lexer_1.TokenType.PUNCTUATION, ',')) {
                break;
            }
        }
        return new node_1.TwingNode(targets);
    }
    parseMultitargetExpression() {
        let targets = new Map();
        while (true) {
            push_1.push(targets, this.parseExpression());
            if (!this.getStream().nextIf(twig_lexer_1.TokenType.PUNCTUATION, ',')) {
                break;
            }
        }
        return new node_1.TwingNode(targets);
    }
    // checks that the node only contains "constant" elements
    checkConstantExpression(node) {
        if (!(node.is(constant_1.type) || node.is(array_1.type) || node.is(neg_1.type) || node.is(pos_1.type))) {
            return false;
        }
        for (let [k, n] of node.getNodes()) {
            if (!this.checkConstantExpression(n)) {
                return false;
            }
        }
        return true;
    }
    isUnary(token) {
        return token.test(twig_lexer_1.TokenType.OPERATOR) && this.unaryOperators.has(token.value);
    }
    isBinary(token) {
        return token.test(twig_lexer_1.TokenType.OPERATOR) && this.binaryOperators.has(token.value);
    }
    getTest(line) {
        const { strict } = this.options;
        let stream = this.getStream();
        let name = stream.expect(twig_lexer_1.TokenType.NAME).value;
        let test = this.env.getTest(name);
        if (test) {
            return [name, test];
        }
        if (stream.test(twig_lexer_1.TokenType.NAME)) {
            // try 2-words tests
            name = name + ' ' + this.getCurrentToken().value;
            let test = this.env.getTest(name);
            if (test) {
                stream.next();
                return [name, test];
            }
            else {
                // non-existing two-words test
                if (!strict) {
                    stream.next();
                    return [name, new test_1.TwingTest(name, null, [])];
                }
            }
        }
        else {
            // non-existing one-word test
            if (!strict) {
                return [name, new test_1.TwingTest(name, null, [])];
            }
        }
        let e = new syntax_1.TwingErrorSyntax(`Unknown "${name}" test.`, line, stream.getSourceContext());
        e.addSuggestions(name, [...this.env.getTests().keys()]);
        throw e;
    }
    getFunctionExpressionFactory(name, line, column) {
        const { strict } = this.options;
        let function_ = this.env.getFunction(name);
        if (function_) {
            if (function_.isDeprecated()) {
                let message = `Twing Function "${function_.getName()}" is deprecated`;
                if (function_.getDeprecatedVersion() !== true) {
                    message += ` since version ${function_.getDeprecatedVersion()}`;
                }
                if (function_.getAlternative()) {
                    message += `. Use "${function_.getAlternative()}" instead`;
                }
                let src = this.getStream().getSourceContext();
                message += ` in "${src.getName()}" at line ${line}.`;
                process.stdout.write(message);
            }
            return function_.getExpressionFactory();
        }
        else {
            if (strict) {
                let e = new syntax_1.TwingErrorSyntax(`Unknown "${name}" function.`, line, this.getStream().getSourceContext());
                e.addSuggestions(name, Array.from(this.env.getFunctions().keys()));
                throw e;
            }
            return (name, functionArguments, line, columnno) => {
                return new function_1.TwingNodeExpressionFunction(name, functionArguments, line, columnno);
            };
        }
    }
    getFilterExpressionFactory(name, line, column) {
        const { strict } = this.options;
        let filter = this.env.getFilter(name);
        if (filter) {
            if (filter.isDeprecated()) {
                let message = `Twing Filter "${filter.getName()}" is deprecated`;
                if (filter.getDeprecatedVersion() !== true) {
                    message += ` since version ${filter.getDeprecatedVersion()}`;
                }
                if (filter.getAlternative()) {
                    message += `. Use "${filter.getAlternative()}" instead`;
                }
                let src = this.getStream().getSourceContext();
                message += ` in "${src.getName()}" at line ${line}.`;
                process.stdout.write(message);
            }
            return filter.getExpressionFactory();
        }
        else {
            if (strict) {
                let e = new syntax_1.TwingErrorSyntax(`Unknown "${name}" filter.`, line, this.getStream().getSourceContext());
                e.addSuggestions(name, Array.from(this.env.getFilters().keys()));
                throw e;
            }
            return (node, filterName, filterArguments, line, column, tag = null) => {
                return new filter_1.TwingNodeExpressionFilter(node, filterName, filterArguments, line, column, tag);
            };
        }
    }
}
exports.TwingParser = TwingParser;
