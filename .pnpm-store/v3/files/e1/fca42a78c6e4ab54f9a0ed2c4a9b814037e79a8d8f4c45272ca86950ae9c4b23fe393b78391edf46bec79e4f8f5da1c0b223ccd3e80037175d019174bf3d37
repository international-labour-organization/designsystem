"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionCall = exports.type = void 0;
const expression_1 = require("../expression");
const node_1 = require("../../node");
const syntax_1 = require("../../error/syntax");
const constant_1 = require("./constant");
const array_1 = require("./array");
const node_type_1 = require("../../node-type");
const array_merge = require('locutus/php/array/array_merge');
const snakeCase = require('snake-case');
const capitalize = require('capitalize');
exports.type = new node_type_1.TwingNodeType('expression_call');
class TwingNodeExpressionCall extends expression_1.TwingNodeExpression {
    get type() {
        return exports.type;
    }
    compileCallable(compiler) {
        let callable = this.getAttribute('callable');
        if (typeof callable === 'string') {
            compiler.raw(callable);
        }
        else {
            compiler.raw(`await this.environment.get${capitalize(this.getAttribute('type'))}('${this.getAttribute('name')}').traceableCallable(${this.getTemplateLine()}, this.source)`);
        }
        compiler.raw('(...[');
        this.compileArguments(compiler);
        compiler.raw('])');
    }
    compileArguments(compiler) {
        let first = true;
        if (this.hasAttribute('needs_template') && this.getAttribute('needs_template')) {
            compiler.raw('this');
            first = false;
        }
        if (this.hasAttribute('needs_context') && this.getAttribute('needs_context')) {
            if (!first) {
                compiler.raw(', ');
            }
            compiler.raw('context');
            first = false;
        }
        if (this.hasAttribute('needs_output_buffer') && this.getAttribute('needs_output_buffer')) {
            if (!first) {
                compiler.raw(', ');
            }
            compiler.raw('outputBuffer');
            first = false;
        }
        if (this.hasAttribute('arguments')) {
            for (let argument_ of this.getAttribute('arguments')) {
                if (!first) {
                    compiler.raw(', ');
                }
                compiler.string(argument_);
                first = false;
            }
        }
        if (this.hasNode('node')) {
            if (!first) {
                compiler.raw(', ');
            }
            compiler.subcompile(this.getNode('node'));
            first = false;
        }
        if (this.hasNode('arguments')) {
            let callable = this.getAttribute('callable');
            let arguments_ = this.getArguments(callable, this.getNode('arguments'));
            for (let node of arguments_) {
                if (!first) {
                    compiler.raw(', ');
                }
                compiler.subcompile(node);
                first = false;
            }
        }
    }
    getArguments(callable, argumentsNode) {
        let callType = this.getAttribute('type');
        let callName = this.getAttribute('name');
        let parameters = new Map();
        let named = false;
        for (let [name, node] of argumentsNode.getNodes()) {
            if (typeof name !== 'number') {
                named = true;
                name = this.normalizeName(name);
            }
            else if (named) {
                throw new syntax_1.TwingErrorSyntax(`Positional arguments cannot be used after named arguments for ${callType} "${callName}".`, this.getTemplateLine());
            }
            parameters.set(name, node);
        }
        let isVariadic = this.hasAttribute('is_variadic') && this.getAttribute('is_variadic');
        if (!named && !isVariadic) {
            return [...parameters.values()];
        }
        let message;
        if (!callable) {
            if (named) {
                message = `Named arguments are not supported for ${callType} "${callName}".`;
            }
            else {
                message = `Arbitrary positional arguments are not supported for ${callType} "${callName}".`;
            }
            throw new Error(message);
        }
        let callableParameters = this.hasAttribute('accepted_arguments') ? this.getAttribute('accepted_arguments') : [];
        let arguments_ = [];
        let names = [];
        let optionalArguments = [];
        let pos = 0;
        for (let callableParameter of callableParameters) {
            let name = '' + this.normalizeName(callableParameter.name);
            names.push(name);
            if (parameters.has(name)) {
                if (parameters.has(pos)) {
                    throw new syntax_1.TwingErrorSyntax(`Argument "${name}" is defined twice for ${callType} "${callName}".`, this.getTemplateLine());
                }
                arguments_ = array_merge(arguments_, optionalArguments);
                arguments_.push(parameters.get(name));
                parameters.delete(name);
                optionalArguments = [];
            }
            else if (parameters.has(pos)) {
                arguments_ = array_merge(arguments_, optionalArguments);
                arguments_.push(parameters.get(pos));
                parameters.delete(pos);
                optionalArguments = [];
                ++pos;
            }
            else if (callableParameter.defaultValue !== undefined) {
                optionalArguments.push(new constant_1.TwingNodeExpressionConstant(callableParameter.defaultValue, -1, -1));
            }
            else {
                throw new syntax_1.TwingErrorSyntax(`Value for argument "${name}" is required for ${callType} "${callName}".`, this.getTemplateLine());
            }
        }
        if (isVariadic) {
            let arbitraryArguments = new array_1.TwingNodeExpressionArray(new Map(), -1, -1);
            let resolvedKeys = [];
            for (let [key, value] of parameters) {
                if (Number.isInteger(key)) {
                    arbitraryArguments.addElement(value);
                }
                else {
                    arbitraryArguments.addElement(value, new constant_1.TwingNodeExpressionConstant(key, -1, -1));
                }
                resolvedKeys.push(key);
            }
            for (let key of resolvedKeys) {
                parameters.delete(key);
            }
            if (arbitraryArguments.count()) {
                arguments_ = array_merge(arguments_, optionalArguments);
                arguments_.push(arbitraryArguments);
            }
        }
        if (parameters.size > 0) {
            let unknownParameter = [...parameters.values()].find(function (parameter) {
                // todo: what other type of data can parameter be?
                return parameter instanceof node_1.TwingNode;
            });
            throw new syntax_1.TwingErrorSyntax(`Unknown argument${parameters.size > 1 ? 's' : ''} "${[...parameters.keys()].join('", "')}" for ${callType} "${callName}(${names.join(', ')})".`, unknownParameter ? unknownParameter.getTemplateLine() : this.getTemplateLine());
        }
        return arguments_;
    }
    normalizeName(name) {
        return snakeCase(name).toLowerCase();
    }
}
exports.TwingNodeExpressionCall = TwingNodeExpressionCall;
