"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingEnvironment = exports.VERSION = void 0;
const extension_set_1 = require("./extension-set");
const core_1 = require("./extension/core");
const lexer_1 = require("./lexer");
const parser_1 = require("./parser");
const token_stream_1 = require("./token-stream");
const source_1 = require("./source");
const loader_1 = require("./error/loader");
const syntax_1 = require("./error/syntax");
const template_1 = require("./template");
const error_1 = require("./error");
const compiler_1 = require("./compiler");
const null_1 = require("./cache/null");
const events_1 = require("events");
const security_policy_1 = require("./sandbox/security-policy");
const node_factory_1 = require("./source-map/node-factory");
const path = require('path');
const sha256 = require('crypto-js/sha256');
const hex = require('crypto-js/enc-hex');
exports.VERSION = '5.1.2';
/**
 * @author Eric MORAND <eric.morand@gmail.com>
 */
class TwingEnvironment extends events_1.EventEmitter {
    /**
     * Constructor.
     *
     * @param {TwingLoaderInterface} loader
     * @param {TwingEnvironmentOptions} options
     */
    constructor(loader, options = null) {
        super();
        this.loader = null;
        this.globals = new Map();
        this.loadedTemplates = new Map();
        this.extensionSet = null;
        this.setLoader(loader);
        options = Object.assign({}, {
            debug: false,
            charset: 'UTF-8',
            strict_variables: false,
            autoescape: 'html',
            cache: false,
            auto_reload: null,
            source_map: false,
            sandbox_policy: new security_policy_1.TwingSandboxSecurityPolicy([], [], new Map(), new Map(), []),
            sandboxed: false
        }, options);
        this.debug = options.debug;
        this.setCharset(options.charset);
        this.autoReload = options.auto_reload === null ? this.debug : options.auto_reload;
        this.strictVariables = options.strict_variables;
        this.setCache(options.cache);
        this.extensionSet = new extension_set_1.TwingExtensionSet();
        this.sourceMap = options.source_map;
        this.autoescape = options.autoescape;
        this.sandboxed = options.sandboxed;
        this.sandboxPolicy = options.sandbox_policy;
        this.setCoreExtension(new core_1.TwingExtensionCore(options.autoescape));
    }
    getCoreExtension() {
        return this.coreExtension;
    }
    setCoreExtension(extension) {
        this.addExtension(extension, 'TwingExtensionCore');
        this.coreExtension = extension;
    }
    /**
     * Enables debugging mode.
     */
    enableDebug() {
        this.debug = true;
        this.updateOptionsHash();
    }
    /**
     * Disables debugging mode.
     */
    disableDebug() {
        this.debug = false;
        this.updateOptionsHash();
    }
    /**
     * Checks if debug mode is enabled.
     *
     * @return {boolean} true if debug mode is enabled, false otherwise
     */
    isDebug() {
        return this.debug;
    }
    /**
     * Enables the auto_reload option.
     */
    enableAutoReload() {
        this.autoReload = true;
    }
    /**
     * Disables the auto_reload option.
     */
    disableAutoReload() {
        this.autoReload = false;
    }
    /**
     * Checks if the auto_reload option is enabled.
     *
     * @return {boolean} true if auto_reload is enabled, false otherwise
     */
    isAutoReload() {
        return this.autoReload;
    }
    /**
     * Enables the strict_variables option.
     */
    enableStrictVariables() {
        this.strictVariables = true;
        this.updateOptionsHash();
    }
    /**
     * Disables the strict_variables option.
     */
    disableStrictVariables() {
        this.strictVariables = false;
        this.updateOptionsHash();
    }
    /**
     * Checks if the strict_variables option is enabled.
     *
     * @return {boolean} true if strict_variables is enabled, false otherwise
     */
    isStrictVariables() {
        return this.strictVariables;
    }
    /**
     * Gets the active cache implementation.
     *
     * @param {boolean} original Whether to return the original cache option or the real cache instance
     *
     * @return {TwingCacheInterface|string|false} A TwingCacheInterface implementation, an absolute path to the compiled templates or false to disable cache
     */
    getCache(original = true) {
        return original ? this.originalCache : this.cache;
    }
    /**
     * Sets the active cache implementation.
     *
     * @param {TwingCacheInterface|string|false} cache A TwingCacheInterface implementation, a string or false to disable cache
     */
    setCache(cache) {
        if (typeof cache === 'string') {
            this.originalCache = cache;
            this.cache = this.cacheFromString(cache);
        }
        else if (cache === false) {
            this.originalCache = cache;
            this.cache = new null_1.TwingCacheNull();
        }
        else {
            this.originalCache = this.cache = cache;
        }
    }
    get templateConstructor() {
        return template_1.TwingTemplate;
    }
    /**
     * Gets the template class associated with the given string.
     *
     * The generated template class is based on the following parameters:
     *
     *  * The cache key for the given template;
     *  * The currently enabled extensions;
     *  * Twing version;
     *  * Options with what environment was created.
     *
     * @param {string} name The name for which to calculate the template class name
     * @param {number} index The index of the template
     * @param {TwingSource} from The source that initiated the template loading
     *
     * @return {Promise<string>} The template hash
     */
    getTemplateHash(name, index = 0, from = null) {
        return this.getLoader().getCacheKey(name, from).then((key) => {
            key += this.optionsHash;
            return hex.stringify(sha256(key)) + (index === 0 ? '' : '_' + index);
        });
    }
    /**
     * Checks if the source_map option is enabled.
     *
     * @return {boolean} true if source_map is enabled, false otherwise
     */
    isSourceMap() {
        return this.sourceMap;
    }
    /**
     * Renders a template.
     *
     * @param {string} name The template name
     * @param {{}} context An array of parameters to pass to the template
     * @return {Promise<string>}
     */
    render(name, context = {}) {
        return this.loadTemplate(name).then((template) => template.render(context));
    }
    /**
     * Displays a template.
     *
     * @param {string} name The template name
     * @param {{}} context An array of parameters to pass to the template
     * @return {Promise<void>}
     *
     * @throws TwingErrorLoader  When the template cannot be found
     * @throws TwingErrorSyntax  When an error occurred during compilation
     * @throws TwingErrorRuntime When an error occurred during rendering
     */
    display(name, context = {}) {
        return this.loadTemplate(name).then((template) => template.display(context));
    }
    /**
     * Loads a template.
     *
     * @param {string | TwingTemplate} name The template name
     *
     * @throws {TwingErrorLoader}  When the template cannot be found
     * @throws {TwingErrorRuntime} When a previously generated cache is corrupted
     * @throws {TwingErrorSyntax}  When an error occurred during compilation
     *
     * @return {Promise<TwingTemplate>}
     */
    load(name) {
        if (name instanceof template_1.TwingTemplate) {
            return Promise.resolve(name);
        }
        return this.loadTemplate(name);
    }
    /**
     * Register a template under an arbitrary name.
     *
     * @param {TwingTemplate} template The template to register
     * @param {string} name The name of the template
     */
    registerTemplate(template, name) {
        this.loadedTemplates.set(name, template);
    }
    /**
     * Register a templates module under an arbitrary name.
     *
     * @param {TwingTemplatesModule} module
     * @param {string} name
     */
    registerTemplatesModule(module, name) {
        let templates = module(this.templateConstructor);
        for (let [index, constructor] of templates) {
            let template = new constructor(this);
            this.registerTemplate(template, name + (index !== 0 ? '_' + index : ''));
        }
    }
    /**
     * Loads a template internal representation.
     *
     * @param {string} name The template name
     * @param {number} index The index of the template
     * @param {TwingSource} from The source that initiated the template loading
     *
     * @return {Promise<TwingTemplate>} A template instance representing the given template name
     *
     * @throws {TwingErrorLoader}  When the template cannot be found
     * @throws {TwingErrorRuntime} When a previously generated cache is corrupted
     * @throws {TwingErrorSyntax}  When an error occurred during compilation
     */
    loadTemplate(name, index = 0, from = null) {
        this.emit('template', name, from);
        let cacheKey = name + (index !== 0 ? '_' + index : '');
        if (this.loadedTemplates.has(cacheKey)) {
            return Promise.resolve(this.loadedTemplates.get(cacheKey));
        }
        let hashesPromises = [
            this.getTemplateHash(name, 0, from),
            this.getTemplateHash(name, index, from)
        ];
        return Promise.all(hashesPromises).then(([mainTemplateHash, templateHash]) => {
            if (this.loadedTemplates.has(templateHash)) {
                return Promise.resolve(this.loadedTemplates.get(templateHash));
            }
            else {
                let cache = this.cache;
                return cache.generateKey(name, mainTemplateHash).then((cacheKey) => {
                    return cache.getTimestamp(cacheKey).then((timestamp) => {
                        let templateConstructor = this.templateConstructor;
                        let resolveTemplateConstructorsFromCache = () => {
                            let loadFromCache = () => cache.load(cacheKey).then((templatesModule) => templatesModule(templateConstructor));
                            if (!this.isAutoReload()) {
                                return loadFromCache();
                            }
                            else {
                                return this.getLoader().isFresh(name, timestamp, from).then((fresh) => {
                                    if (fresh) {
                                        return loadFromCache();
                                    }
                                    else {
                                        return Promise.resolve(new Map());
                                    }
                                });
                            }
                        };
                        let resolveMainTemplateFromTemplateConstructors = (templates) => {
                            let mainTemplate;
                            let promises = [];
                            for (let [index, constructor] of templates) {
                                let template = new constructor(this);
                                if (index === 0) {
                                    mainTemplate = template;
                                }
                                promises.push(this.getTemplateHash(name, index, from).then((hash) => {
                                    this.registerTemplate(template, hash);
                                }));
                            }
                            return Promise.all(promises).then(() => Promise.resolve(mainTemplate));
                        };
                        return resolveTemplateConstructorsFromCache().then((templates) => {
                            if (!templates.has(index)) {
                                return this.getLoader().getSourceContext(name, from).then((source) => {
                                    let content = this.compileSource(source);
                                    return cache.write(cacheKey, content).then(() => {
                                        return cache.load(cacheKey).then((templatesModule) => {
                                            templates = templatesModule(templateConstructor);
                                            if (!templates.has(index)) {
                                                let templatesModule = this.getTemplatesModule(content);
                                                templates = templatesModule(templateConstructor);
                                            }
                                            return resolveMainTemplateFromTemplateConstructors(templates);
                                        });
                                    });
                                });
                            }
                            else {
                                return resolveMainTemplateFromTemplateConstructors(templates);
                            }
                        });
                    });
                });
            }
        });
    }
    /**
     * Creates a template from source.
     *
     * This method should not be used as a generic way to load templates.
     *
     * @param {string} template The template name
     * @param {string} name An optional name for the template to be used in error messages
     *
     * @return {Promise<TwingTemplate>} A template instance representing the given template name
     *
     * @throws TwingErrorLoader When the template cannot be found
     * @throws TwingErrorSyntax When an error occurred during compilation
     */
    createTemplate(template, name = null) {
        let hash = hex.stringify(sha256(template));
        if (name !== null) {
            name = `${name} (string template ${hash})`;
        }
        else {
            name = `__string_template__${hash}`;
        }
        let templatesModule = this.getTemplatesModule(this.compileSource(new source_1.TwingSource(template, name)));
        this.registerTemplatesModule(templatesModule, name);
        return this.loadTemplate(name);
    }
    /**
     * Tries to load templates consecutively from an array.
     *
     * Similar to loadTemplate() but it also accepts instances of TwingTemplate and an array of templates where each is tried to be loaded.
     *
     * @param {string|TwingTemplate|Array<string|TwingTemplate>} names A template or an array of templates to try consecutively
     * @param {TwingSource} from The source of the template that initiated the resolving.
     *
     * @return {Promise<TwingTemplate>}
     *
     * @throws {TwingErrorLoader} When none of the templates can be found
     * @throws {TwingErrorSyntax} When an error occurred during compilation
     */
    resolveTemplate(names, from) {
        let namesArray;
        if (!Array.isArray(names)) {
            namesArray = [names];
        }
        else {
            namesArray = names;
        }
        let error = null;
        let loadTemplateAtIndex = (index) => {
            if (index < namesArray.length) {
                let name = namesArray[index];
                if (name instanceof template_1.TwingTemplate) {
                    return Promise.resolve(name);
                }
                else {
                    return this.loadTemplate(name, 0, from).catch((e) => {
                        if (e instanceof loader_1.TwingErrorLoader) {
                            error = e;
                            return loadTemplateAtIndex(index + 1);
                        }
                        else {
                            throw e;
                        }
                    });
                }
            }
            else {
                if (namesArray.length === 1) {
                    throw error;
                }
                else {
                    throw new loader_1.TwingErrorLoader(`Unable to find one of the following templates: "${namesArray.join(', ')}".`, -1, from);
                }
            }
        };
        return loadTemplateAtIndex(0);
    }
    setLexer(lexer) {
        this.lexer = lexer;
    }
    /**
     * Tokenizes a source code.
     *
     * @param {TwingSource} source The source to tokenize
     * @return {TwingTokenStream}
     *
     * @throws {TwingErrorSyntax} When the code is syntactically wrong
     */
    tokenize(source) {
        if (!this.lexer) {
            this.lexer = new lexer_1.TwingLexer(this);
        }
        let stream = this.lexer.tokenizeSource(source);
        return new token_stream_1.TwingTokenStream(stream.toAst(), stream.getSourceContext());
    }
    setParser(parser) {
        this.parser = parser;
    }
    /**
     * Converts a token list to a template.
     *
     * @param {TwingTokenStream} stream
     * @param {TwingParserOptions} options
     * @return {TwingNodeModule}
     *
     * @throws {TwingErrorSyntax} When the token stream is syntactically or semantically wrong
     */
    parse(stream, options) {
        if (!this.parser) {
            this.parser = new parser_1.TwingParser(this, options);
        }
        return this.parser.parse(stream);
    }
    /**
     * Compiles a module node.
     *
     * @return {string}
     */
    compile(node) {
        let compiler = new compiler_1.TwingCompiler(this);
        return compiler.compile(node).getSource();
    }
    /**
     * @param {TwingSource} source
     *
     * @return {Map<number, TwingTemplate> }
     */
    compileSource(source) {
        try {
            return this.compile(this.parse(this.tokenize(source)));
        }
        catch (e) {
            if (e instanceof error_1.TwingError) {
                if (!e.getSourceContext()) {
                    e.setSourceContext(source);
                }
                throw e;
            }
            else {
                throw new syntax_1.TwingErrorSyntax(`An exception has been thrown during the compilation of a template ("${e.message}").`, -1, source);
            }
        }
    }
    /**
     * @return {TwingTemplatesModule}
     */
    getTemplatesModule(content) {
        let resolver = new Function(`let module = {
    exports: undefined
};

${content}

return module.exports;

`);
        return resolver();
    }
    setLoader(loader) {
        this.loader = loader;
    }
    /**
     * Gets the Loader instance.
     *
     * @return TwingLoaderInterface
     */
    getLoader() {
        return this.loader;
    }
    /**
     * Sets the default template charset.
     *
     * @param {string} charset The default charset
     */
    setCharset(charset) {
        this.charset = charset;
    }
    /**
     * Gets the default template charset.
     *
     * @return {string} The default charset
     */
    getCharset() {
        return this.charset;
    }
    /**
     * Returns true if the given extension is registered.
     *
     * @param {string} name
     * @return {boolean}
     */
    hasExtension(name) {
        return this.extensionSet.hasExtension(name);
    }
    /**
     * Gets an extension by name.
     *
     * @param {string} name
     * @return {TwingExtensionInterface}
     */
    getExtension(name) {
        return this.extensionSet.getExtension(name);
    }
    /**
     *
     * @param {TwingExtensionInterface} extension
     * @param {string} name A name the extension will be registered as
     */
    addExtension(extension, name) {
        this.extensionSet.addExtension(extension, name);
        this.updateOptionsHash();
    }
    /**
     * Registers some extensions.
     *
     * @param {Map<string, TwingExtensionInterface>} extensions
     */
    addExtensions(extensions) {
        this.extensionSet.addExtensions(extensions);
        this.updateOptionsHash();
    }
    /**
     * Returns all registered extensions.
     *
     * @return Map<string, TwingExtensionInterface>
     */
    getExtensions() {
        return this.extensionSet.getExtensions();
    }
    addTokenParser(parser) {
        this.extensionSet.addTokenParser(parser);
    }
    /**
     * Gets the registered Token Parsers.
     *
     * @return {Array<TwingTokenParserInterface>}
     *
     * @internal
     */
    getTokenParsers() {
        return this.extensionSet.getTokenParsers();
    }
    /**
     * Gets registered tags.
     *
     * @return Map<string, TwingTokenParserInterface>
     *
     * @internal
     */
    getTags() {
        let tags = new Map();
        this.getTokenParsers().forEach(function (parser) {
            tags.set(parser.getTag(), parser);
        });
        return tags;
    }
    addNodeVisitor(visitor) {
        this.extensionSet.addNodeVisitor(visitor);
    }
    /**
     * Gets the registered Node Visitors.
     *
     * @return {Array<TwingNodeVisitorInterface>}
     *
     * @internal
     */
    getNodeVisitors() {
        return this.extensionSet.getNodeVisitors();
    }
    addFilter(filter) {
        this.extensionSet.addFilter(filter);
    }
    /**
     * Get a filter by name.
     *
     * @param {string} name
     *
     * @return Twig_Filter|false A Twig_Filter instance or null if the filter does not exist
     */
    getFilter(name) {
        return this.extensionSet.getFilter(name);
    }
    /**
     * Gets the registered Filters.
     *
     * Be warned that this method cannot return filters defined with registerUndefinedFilterCallback.
     *
     * @return Twig_Filter[]
     *
     * @see registerUndefinedFilterCallback
     *
     * @internal
     */
    getFilters() {
        return this.extensionSet.getFilters();
    }
    /**
     * Registers a Test.
     *
     * @param {TwingTest} test
     */
    addTest(test) {
        this.extensionSet.addTest(test);
    }
    /**
     * Gets the registered Tests.
     *
     * @return {Map<string, TwingTest>}
     */
    getTests() {
        return this.extensionSet.getTests();
    }
    /**
     * Gets a test by name.
     *
     * @param {string} name The test name
     * @return {TwingTest} A TwingTest instance or null if the test does not exist
     */
    getTest(name) {
        return this.extensionSet.getTest(name);
    }
    addFunction(aFunction) {
        this.extensionSet.addFunction(aFunction);
    }
    /**
     * Get a function by name.
     *
     * Subclasses may override this method and load functions differently;
     * so no list of functions is available.
     *
     * @param {string} name function name
     *
     * @return {TwingFunction} A TwingFunction instance or null if the function does not exist
     *
     * @internal
     */
    getFunction(name) {
        return this.extensionSet.getFunction(name);
    }
    /**
     * Gets registered functions.
     *
     * Be warned that this method cannot return functions defined with registerUndefinedFunctionCallback.
     *
     * @return Twig_Function[]
     *
     * @see registerUndefinedFunctionCallback
     *
     * @internal
     */
    getFunctions() {
        return this.extensionSet.getFunctions();
    }
    /**
     * @param nodeType
     *
     * @return TwingSourceMapNodeFactory
     */
    getSourceMapNodeFactory(nodeType) {
        return this.extensionSet.getSourceMapNodeFactory(nodeType);
    }
    /**
     * @return Map<string, TwingSourceMapNodeFactory>
     */
    getSourceMapNodeFactories() {
        return this.extensionSet.getSourceMapNodeFactories();
    }
    /**
     * Registers a Global.
     *
     * New globals can be added before compiling or rendering a template, but after, you can only update existing globals.
     *
     * @param {string} name The global name
     * @param {*} value The global value
     */
    addGlobal(name, value) {
        if (this.extensionSet.isInitialized() && !this.getGlobals().has(name)) {
            throw new Error(`Unable to add global "${name}" as the extensions have already been initialized.`);
        }
        this.globals.set(name, value);
    }
    /**
     * Gets the registered Globals.
     *
     * @return Map<any, any> A map of globals
     */
    getGlobals() {
        return this.globals;
    }
    /**
     * Merges a context with the defined globals.
     *
     * @param {Map<*, *>} context
     * @return {Map<*, *>}
     */
    mergeGlobals(context) {
        for (let [key, value] of this.getGlobals()) {
            if (!context.has(key)) {
                context.set(key, value);
            }
        }
        return context;
    }
    /**
     * Gets the registered unary Operators.
     *
     * @return Map<string, TwingOperator> A map of unary operators
     *
     * @internal
     */
    getUnaryOperators() {
        return this.extensionSet.getUnaryOperators();
    }
    /**
     * Gets the registered binary Operators.
     *
     * @return Map<string, TwingOperator> An array of binary operators
     *
     * @internal
     */
    getBinaryOperators() {
        return this.extensionSet.getBinaryOperators();
    }
    updateOptionsHash() {
        this.optionsHash = [
            this.extensionSet.getSignature(),
            exports.VERSION,
            this.debug,
            this.strictVariables,
            this.sourceMap,
            typeof this.autoescape === 'function' ? 'function' : this.autoescape
        ].join(':');
    }
    /**
     * @param {number} line 0-based
     * @param {number} column 1-based
     * @param {string} nodeType
     * @param {TwingSource} source
     * @param {TwingOutputBuffer} outputBuffer
     */
    enterSourceMapBlock(line, column, nodeType, source, outputBuffer) {
        outputBuffer.start();
        let sourceName = source.getResolvedName();
        if (path.isAbsolute(sourceName)) {
            sourceName = path.relative('.', sourceName);
        }
        source = new source_1.TwingSource(source.getCode(), sourceName);
        let factory = this.getSourceMapNodeFactory(nodeType);
        if (!factory) {
            factory = new node_factory_1.TwingSourceMapNodeFactory(nodeType);
        }
        let node = factory.create(line, column - 1, source);
        if (this.sourceMapNode) {
            this.sourceMapNode.addChild(node);
        }
        this.sourceMapNode = node;
    }
    /**
     * @param {TwingOutputBuffer} outputBuffer
     */
    leaveSourceMapBlock(outputBuffer) {
        this.sourceMapNode.content = outputBuffer.getAndFlush();
        let parent = this.sourceMapNode.parent;
        if (parent) {
            this.sourceMapNode = parent;
        }
    }
    getSourceMap() {
        let sourceMap = null;
        if (this.isSourceMap() && this.sourceMapNode) {
            let sourceNode = this.sourceMapNode.toSourceNode();
            let codeAndMap = sourceNode.toStringWithSourceMap();
            sourceMap = codeAndMap.map.toString();
        }
        return sourceMap;
    }
    enableSandbox() {
        this.sandboxed = true;
    }
    disableSandbox() {
        this.sandboxed = false;
    }
    isSandboxed() {
        return this.sandboxed;
    }
    checkSecurity(tags, filters, functions) {
        if (this.isSandboxed()) {
            this.sandboxPolicy.checkSecurity(tags, filters, functions);
        }
    }
    checkMethodAllowed(obj, method) {
        if (this.isSandboxed()) {
            this.sandboxPolicy.checkMethodAllowed(obj, method);
        }
    }
    checkPropertyAllowed(obj, property) {
        if (this.isSandboxed()) {
            this.sandboxPolicy.checkPropertyAllowed(obj, property);
        }
    }
    ensureToStringAllowed(obj) {
        if (this.isSandboxed() && typeof obj === 'object') {
            this.sandboxPolicy.checkMethodAllowed(obj, 'toString');
        }
        return obj;
    }
}
exports.TwingEnvironment = TwingEnvironment;
