import { TwingErrorRuntime } from "./error/runtime";
import { TwingSource } from "./source";
import { TwingError } from "./error";
import { TwingOutputBuffer } from './output-buffer';
import { iteratorToMap } from "./helpers/iterator-to-map";
import { merge } from "./helpers/merge";
import { TwingContext } from "./context";
import { isMap } from "./helpers/is-map";
import { TwingMarkup } from "./markup";
import { TwingSandboxSecurityError } from "./sandbox/security-error";
import { TwingSandboxSecurityNotAllowedFilterError } from "./sandbox/security-not-allowed-filter-error";
import { TwingSandboxSecurityNotAllowedFunctionError } from "./sandbox/security-not-allowed-function-error";
import { TwingSandboxSecurityNotAllowedTagError } from "./sandbox/security-not-allowed-tag-error";
import { compare } from "./helpers/compare";
import { count } from "./helpers/count";
import { isCountable } from "./helpers/is-countable";
import { isPlainObject } from "./helpers/is-plain-object";
import { iterate } from "./helpers/iterate";
import { isIn } from "./helpers/is-in";
import { ensureTraversable } from "./helpers/ensure-traversable";
import { getAttribute } from "./helpers/get-attribute";
import { createRange } from "./helpers/create-range";
import { cloneMap } from "./helpers/clone-map";
import { parseRegex } from "./helpers/parse-regex";
import { constant } from "./helpers/constant";
import { get } from "./helpers/get";
import { include } from "./extension/core/functions/include";
import { isNullOrUndefined } from "util";
import { evaluate } from "./helpers/evaluate";
/**
 * Default base class for compiled templates.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export class TwingTemplate {
    constructor(environment) {
        this._environment = environment;
        this.parents = new Map();
        this.aliases = new TwingContext();
        this.blockHandlers = new Map();
        this.macroHandlers = new Map();
    }
    get environment() {
        return this._environment;
    }
    /**
     * @returns {TwingSource}
     */
    get source() {
        return this._source;
    }
    /**
     * Returns the template name.
     *
     * @returns {string} The template name
     */
    get templateName() {
        return this.source.getName();
    }
    get isTraitable() {
        return true;
    }
    /**
     * Returns the parent template.
     *
     * @param {any} context
     *
     * @returns {Promise<TwingTemplate|false>} The parent template or false if there is no parent
     */
    getParent(context = {}) {
        if (this.parent) {
            return Promise.resolve(this.parent);
        }
        return this.doGetParent(context)
            .then((parent) => {
            if (parent === false || parent instanceof TwingTemplate) {
                if (parent instanceof TwingTemplate) {
                    this.parents.set(parent.source.getName(), parent);
                }
                return parent;
            }
            // parent is a string
            if (!this.parents.has(parent)) {
                return this.loadTemplate(parent)
                    .then((template) => {
                    this.parents.set(parent, template);
                    return template;
                });
            }
            else {
                return this.parents.get(parent);
            }
        });
    }
    /**
     * Returns template blocks.
     *
     * @returns {Promise<TwingTemplateBlocksMap>} A map of blocks
     */
    getBlocks() {
        if (this.blocks) {
            return Promise.resolve(this.blocks);
        }
        else {
            return this.getTraits().then((traits) => {
                this.blocks = merge(traits, new Map([...this.blockHandlers.keys()].map((key) => [key, [this, key]])));
                return this.blocks;
            });
        }
    }
    /**
     * Displays a block.
     *
     * @param {string} name The block name to display
     * @param {any} context The context
     * @param {TwingOutputBuffer} outputBuffer
     * @param {TwingTemplateBlocksMap} blocks The active set of blocks
     * @param {boolean} useBlocks Whether to use the active set of blocks
     *
     * @returns {Promise<void>}
     */
    displayBlock(name, context, outputBuffer, blocks, useBlocks) {
        return this.getBlocks().then((ownBlocks) => {
            let blockHandler;
            if (useBlocks && blocks.has(name)) {
                blockHandler = blocks.get(name)[0].blockHandlers.get(blocks.get(name)[1]);
            }
            else if (ownBlocks.has(name)) {
                blockHandler = ownBlocks.get(name)[0].blockHandlers.get(ownBlocks.get(name)[1]);
            }
            if (blockHandler) {
                return blockHandler(context, outputBuffer, blocks);
            }
            else {
                return this.getParent(context).then((parent) => {
                    if (parent) {
                        return parent.displayBlock(name, context, outputBuffer, merge(ownBlocks, blocks), false);
                    }
                    else if (blocks.has(name)) {
                        throw new TwingErrorRuntime(`Block "${name}" should not call parent() in "${blocks.get(name)[0].templateName}" as the block does not exist in the parent template "${this.templateName}".`, -1, blocks.get(name)[0].source);
                    }
                    else {
                        throw new TwingErrorRuntime(`Block "${name}" on template "${this.templateName}" does not exist.`, -1, this.source);
                    }
                });
            }
        });
    }
    /**
     * Displays a parent block.
     *
     * @param {string} name The block name to display from the parent
     * @param {any} context The context
     * @param {TwingOutputBuffer} outputBuffer
     * @param {TwingTemplateBlocksMap} blocks The active set of blocks
     *
     * @returns {Promise<void>}
     */
    displayParentBlock(name, context, outputBuffer, blocks) {
        return this.getTraits().then((traits) => {
            if (traits.has(name)) {
                return traits.get(name)[0].displayBlock(traits.get(name)[1], context, outputBuffer, blocks, false);
            }
            else {
                return this.getParent(context).then((template) => {
                    if (template !== false) {
                        return template.displayBlock(name, context, outputBuffer, blocks, false);
                    }
                    else {
                        throw new TwingErrorRuntime(`The template has no parent and no traits defining the "${name}" block.`, -1, this.source);
                    }
                });
            }
        });
    }
    /**
     * Renders a parent block.
     *
     * @param {string} name The block name to display from the parent
     * @param {*} context The context
     * @param {TwingOutputBuffer} outputBuffer
     * @param {TwingTemplateBlocksMap} blocks The active set of blocks
     *
     * @returns {Promise<string>} The rendered block
     */
    renderParentBlock(name, context, outputBuffer, blocks) {
        outputBuffer.start();
        return this.getBlocks().then((blocks) => {
            return this.displayParentBlock(name, context, outputBuffer, blocks).then(() => {
                return outputBuffer.getAndClean();
            });
        });
    }
    /**
     * Renders a block.
     *
     * @param {string} name The block name to display
     * @param {any} context The context
     * @param {TwingOutputBuffer} outputBuffer
     * @param {TwingTemplateBlocksMap} blocks The active set of blocks
     * @param {boolean} useBlocks Whether to use the active set of blocks
     *
     * @return {Promise<string>} The rendered block
     */
    renderBlock(name, context, outputBuffer, blocks = new Map(), useBlocks = true) {
        outputBuffer.start();
        return this.displayBlock(name, context, outputBuffer, blocks, useBlocks).then(() => {
            return outputBuffer.getAndClean();
        });
    }
    /**
     * Returns whether a block exists or not in the active context of the template.
     *
     * This method checks blocks defined in the active template or defined in "used" traits or defined in parent templates.
     *
     * @param {string} name The block name
     * @param {any} context The context
     * @param {TwingTemplateBlocksMap} blocks The active set of blocks
     *
     * @return {Promise<boolean>} true if the block exists, false otherwise
     */
    hasBlock(name, context, blocks = new Map()) {
        if (blocks.has(name)) {
            return Promise.resolve(true);
        }
        else {
            return this.getBlocks().then((blocks) => {
                if (blocks.has(name)) {
                    return Promise.resolve(true);
                }
                else {
                    return this.getParent(context).then((parent) => {
                        if (parent) {
                            return parent.hasBlock(name, context);
                        }
                        else {
                            return false;
                        }
                    });
                }
            });
        }
    }
    /**
     * @param {string} name The name of the macro
     *
     * @return {Promise<boolean>}
     */
    hasMacro(name) {
        // @see https://github.com/twigphp/Twig/issues/3174 as to why we don't check macro existence in parents
        return Promise.resolve(this.macroHandlers.has(name));
    }
    /**
     * @param name The name of the macro
     */
    getMacro(name) {
        return this.hasMacro(name).then((hasMacro) => {
            if (hasMacro) {
                return this.macroHandlers.get(name);
            }
            else {
                return null;
            }
        });
    }
    loadTemplate(templates, line = null, index = 0) {
        let promise;
        if (typeof templates === 'string') {
            promise = this.environment.loadTemplate(templates, index, this.source);
        }
        else if (templates instanceof TwingTemplate) {
            promise = Promise.resolve(templates);
        }
        else {
            promise = this.environment.resolveTemplate([...templates.values()], this.source);
        }
        return promise.catch((e) => {
            if (e.getTemplateLine() !== -1) {
                throw e;
            }
            if (line) {
                e.setTemplateLine(line);
            }
            throw e;
        });
    }
    /**
     * Returns template traits.
     *
     * @returns {Promise<TwingTemplateBlocksMap>} A map of traits
     */
    getTraits() {
        if (this.traits) {
            return Promise.resolve(this.traits);
        }
        else {
            return this.doGetTraits().then((traits) => {
                this.traits = traits;
                return traits;
            });
        }
    }
    doGetTraits() {
        return Promise.resolve(new Map());
    }
    display(context, blocks = new Map(), outputBuffer) {
        if (!outputBuffer) {
            outputBuffer = new TwingOutputBuffer();
        }
        if (context === null) {
            throw new TypeError('Argument 1 passed to TwingTemplate::display() must be an iterator, null given');
        }
        if (!isMap(context)) {
            context = iteratorToMap(context);
        }
        context = new TwingContext(this.environment.mergeGlobals(context));
        return this.getBlocks().then((ownBlocks) => this.displayWithErrorHandling(context, outputBuffer, merge(ownBlocks, blocks)));
    }
    displayWithErrorHandling(context, outputBuffer, blocks = new Map()) {
        return this.doDisplay(context, outputBuffer, blocks).catch((e) => {
            if (e instanceof TwingError) {
                if (!e.getSourceContext()) {
                    e.setSourceContext(this.source);
                }
            }
            else {
                e = new TwingErrorRuntime(`An exception has been thrown during the rendering of a template ("${e.message}").`, -1, this.source, e);
            }
            throw e;
        });
    }
    render(context, outputBuffer) {
        if (!outputBuffer) {
            outputBuffer = new TwingOutputBuffer();
        }
        let level = outputBuffer.getLevel();
        outputBuffer.start();
        return this.display(context, undefined, outputBuffer)
            .then(() => {
            return outputBuffer.getAndClean();
        })
            .catch((e) => {
            while (outputBuffer.getLevel() > level) {
                outputBuffer.endAndClean();
            }
            throw e;
        });
    }
    doGetParent(context) {
        return Promise.resolve(false);
    }
    callMacro(template, name, outputBuffer, args, lineno, context, source) {
        let getHandler = (template) => {
            if (template.macroHandlers.has(name)) {
                return Promise.resolve(template.macroHandlers.get(name));
            }
            else {
                return template.getParent(context).then((parent) => {
                    if (parent) {
                        return getHandler(parent);
                    }
                    else {
                        return null;
                    }
                });
            }
        };
        return getHandler(template).then((handler) => {
            if (handler) {
                return handler(outputBuffer, ...args);
            }
            else {
                throw new TwingErrorRuntime(`Macro "${name}" is not defined in template "${template.templateName}".`, lineno, source);
            }
        });
    }
    traceableMethod(method, lineno, source) {
        return function () {
            return method.apply(null, arguments).catch((e) => {
                if (e instanceof TwingError) {
                    if (e.getTemplateLine() === -1) {
                        e.setTemplateLine(lineno);
                        e.setSourceContext(source);
                    }
                }
                else {
                    throw new TwingErrorRuntime(`An exception has been thrown during the rendering of a template ("${e.message}").`, lineno, source, e);
                }
                throw e;
            });
        };
    }
    traceableRenderBlock(lineno, source) {
        return this.traceableMethod(this.renderBlock.bind(this), lineno, source);
    }
    traceableRenderParentBlock(lineno, source) {
        return this.traceableMethod(this.renderParentBlock.bind(this), lineno, source);
    }
    traceableHasBlock(lineno, source) {
        return this.traceableMethod(this.hasBlock.bind(this), lineno, source);
    }
    concatenate(object1, object2) {
        if (isNullOrUndefined(object1)) {
            object1 = '';
        }
        if (isNullOrUndefined(object2)) {
            object2 = '';
        }
        return String(object1) + String(object2);
    }
    get cloneMap() {
        return cloneMap;
    }
    get compare() {
        return compare;
    }
    get constant() {
        return (name, object) => {
            return constant(this, name, object);
        };
    }
    get convertToMap() {
        return iteratorToMap;
    }
    get count() {
        return count;
    }
    get createRange() {
        return createRange;
    }
    get ensureTraversable() {
        return ensureTraversable;
    }
    get get() {
        return (object, property) => {
            if (isMap(object) || isPlainObject(object)) {
                return get(object, property);
            }
        };
    }
    get getAttribute() {
        return getAttribute;
    }
    get include() {
        return (context, outputBuffer, templates, variables, withContext, ignoreMissing, line) => {
            return include(this, context, outputBuffer, templates, variables, withContext, ignoreMissing).catch((e) => {
                if (e.getTemplateLine() === -1) {
                    e.setTemplateLine(line);
                }
                throw e;
            });
        };
    }
    get isCountable() {
        return isCountable;
    }
    get isIn() {
        return isIn;
    }
    get iterate() {
        return iterate;
    }
    get merge() {
        return merge;
    }
    get parseRegExp() {
        return parseRegex;
    }
    get evaluate() {
        return evaluate;
    }
    get Context() {
        return TwingContext;
    }
    get Markup() {
        return TwingMarkup;
    }
    get RuntimeError() {
        return TwingErrorRuntime;
    }
    get SandboxSecurityError() {
        return TwingSandboxSecurityError;
    }
    get SandboxSecurityNotAllowedFilterError() {
        return TwingSandboxSecurityNotAllowedFilterError;
    }
    get SandboxSecurityNotAllowedFunctionError() {
        return TwingSandboxSecurityNotAllowedFunctionError;
    }
    get SandboxSecurityNotAllowedTagError() {
        return TwingSandboxSecurityNotAllowedTagError;
    }
    get Source() {
        return TwingSource;
    }
}
TwingTemplate.ANY_CALL = 'any';
TwingTemplate.ARRAY_CALL = 'array';
TwingTemplate.METHOD_CALL = 'method';
