"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingExtensionCore = void 0;
const extension_1 = require("../extension");
const for_1 = require("../token-parser/for");
const and_1 = require("../node/expression/binary/and");
const extends_1 = require("../token-parser/extends");
const from_1 = require("../token-parser/from");
const macro_1 = require("../token-parser/macro");
const in_1 = require("../node/expression/binary/in");
const if_1 = require("../token-parser/if");
const set_1 = require("../token-parser/set");
const block_1 = require("../token-parser/block");
const greater_1 = require("../node/expression/binary/greater");
const less_1 = require("../node/expression/binary/less");
const include_1 = require("../token-parser/include");
const with_1 = require("../token-parser/with");
const not_1 = require("../node/expression/unary/not");
const neg_1 = require("../node/expression/unary/neg");
const pos_1 = require("../node/expression/unary/pos");
const function_1 = require("../function");
const spaceless_1 = require("../token-parser/spaceless");
const concat_1 = require("../node/expression/binary/concat");
const mul_1 = require("../node/expression/binary/mul");
const div_1 = require("../node/expression/binary/div");
const floor_div_1 = require("../node/expression/binary/floor-div");
const mod_1 = require("../node/expression/binary/mod");
const sub_1 = require("../node/expression/binary/sub");
const add_1 = require("../node/expression/binary/add");
const use_1 = require("../token-parser/use");
const embed_1 = require("../token-parser/embed");
const filter_1 = require("../token-parser/filter");
const range_1 = require("../node/expression/binary/range");
const import_1 = require("../token-parser/import");
const do_1 = require("../token-parser/do");
const flush_1 = require("../token-parser/flush");
const equal_1 = require("../node/expression/binary/equal");
const not_equal_1 = require("../node/expression/binary/not-equal");
const or_1 = require("../node/expression/binary/or");
const bitwise_or_1 = require("../node/expression/binary/bitwise-or");
const bitwise_xor_1 = require("../node/expression/binary/bitwise-xor");
const bitwise_and_1 = require("../node/expression/binary/bitwise-and");
const greater_equal_1 = require("../node/expression/binary/greater-equal");
const less_equal_1 = require("../node/expression/binary/less-equal");
const not_in_1 = require("../node/expression/binary/not-in");
const null_coalesce_1 = require("../node/expression/null-coalesce");
const power_1 = require("../node/expression/binary/power");
const defined_1 = require("../node/expression/test/defined");
const test_1 = require("../test");
const matches_1 = require("../node/expression/binary/matches");
const starts_with_1 = require("../node/expression/binary/starts-with");
const ends_with_1 = require("../node/expression/binary/ends-with");
const filter_2 = require("../filter");
const luxon_1 = require("luxon");
const constant_1 = require("../node/expression/constant");
const default_1 = require("../node/expression/filter/default");
const deprecated_1 = require("../token-parser/deprecated");
const apply_1 = require("../token-parser/apply");
const operator_1 = require("../operator");
const even_1 = require("./core/tests/even");
const odd_1 = require("./core/tests/odd");
const same_as_1 = require("./core/tests/same-as");
const null_1 = require("./core/tests/null");
const divisible_by_1 = require("./core/tests/divisible-by");
const min_1 = require("./core/functions/min");
const max_1 = require("./core/functions/max");
const verbatim_1 = require("../token-parser/verbatim");
const date_1 = require("./core/filters/date");
const date_modify_1 = require("./core/filters/date-modify");
const format_1 = require("./core/filters/format");
const replace_1 = require("./core/filters/replace");
const number_format_1 = require("./core/filters/number-format");
const abs_1 = require("./core/filters/abs");
const url_encode_1 = require("./core/filters/url-encode");
const json_encode_1 = require("./core/filters/json-encode");
const convert_encoding_1 = require("./core/filters/convert-encoding");
const title_1 = require("./core/filters/title");
const capitalize_1 = require("./core/filters/capitalize");
const upper_1 = require("./core/filters/upper");
const lower_1 = require("./core/filters/lower");
const striptags_1 = require("./core/filters/striptags");
const trim_1 = require("./core/filters/trim");
const nl2br_1 = require("./core/filters/nl2br");
const raw_1 = require("./core/filters/raw");
const join_1 = require("./core/filters/join");
const split_1 = require("./core/filters/split");
const sort_1 = require("./core/filters/sort");
const merge_1 = require("./core/filters/merge");
const batch_1 = require("./core/filters/batch");
const reverse_1 = require("./core/filters/reverse");
const length_1 = require("./core/filters/length");
const slice_1 = require("./core/filters/slice");
const first_1 = require("./core/filters/first");
const last_1 = require("./core/filters/last");
const default_2 = require("./core/filters/default");
const escape_1 = require("./core/filters/escape");
const round_1 = require("./core/filters/round");
const include_2 = require("./core/functions/include");
const array_keys_1 = require("./core/filters/array-keys");
const spaceless_2 = require("./core/filters/spaceless");
const column_1 = require("./core/filters/column");
const filter_3 = require("./core/filters/filter");
const map_1 = require("./core/filters/map");
const reduce_1 = require("./core/filters/reduce");
const auto_escape_1 = require("../token-parser/auto-escape");
const sandbox_1 = require("../token-parser/sandbox");
const escaper_1 = require("../node-visitor/escaper");
const sandbox_2 = require("../node-visitor/sandbox");
const range_2 = require("./core/functions/range");
const constant_2 = require("./core/functions/constant");
const cycle_1 = require("./core/functions/cycle");
const random_1 = require("./core/functions/random");
const source_1 = require("./core/functions/source");
const template_from_string_1 = require("./core/functions/template-from-string");
const dump_1 = require("./core/functions/dump");
const empty_1 = require("./core/tests/empty");
const iterable_1 = require("./core/tests/iterable");
const date_2 = require("./core/functions/date");
const spaceless_3 = require("../source-map/node-factory/spaceless");
const constant_3 = require("../node/expression/test/constant");
const macro_auto_import_1 = require("../node-visitor/macro-auto-import");
const line_1 = require("../token-parser/line");
const path_1 = require("path");
class TwingExtensionCore extends extension_1.TwingExtension {
    /**
     * @param {string | false | TwingEscapingStrategyResolver} defaultStrategy An escaping strategy
     */
    constructor(defaultStrategy = 'html') {
        super();
        this.dateFormats = ['F j, Y H:i', '%d days'];
        this.numberFormat = [0, '.', ','];
        this.timezone = null;
        this.escapers = new Map();
        this.setDefaultStrategy(defaultStrategy);
    }
    /**
     * Sets the default strategy to use when not defined by the user.
     *
     * @param {string | false | TwingEscapingStrategyResolver} defaultStrategy An escaping strategy
     */
    setDefaultStrategy(defaultStrategy) {
        if (defaultStrategy === 'name') {
            defaultStrategy = (name) => {
                let extension = path_1.extname(name);
                if (extension === '.twig') {
                    name = path_1.basename(name, extension);
                    extension = path_1.extname(name);
                }
                switch (extension) {
                    case '.js':
                        return 'js';
                    case '.css':
                        return 'css';
                    case '.txt':
                        return false;
                    default:
                        return 'html';
                }
            };
        }
        this.defaultStrategy = defaultStrategy;
    }
    /**
     * Gets the default escaping strategy.
     *
     * @param {string} name The template name
     *
     * @returns {string | false} The default strategy to use for the template
     */
    getDefaultStrategy(name) {
        if (typeof this.defaultStrategy === 'function') {
            return this.defaultStrategy(name);
        }
        return this.defaultStrategy;
    }
    /**
     * Defines a new escaper to be used via the escape filter.
     *
     * @param {string} strategy     The strategy name that should be used as a strategy in the escape call
     * @param {Function} callable   A valid PHP callable
     */
    setEscaper(strategy, callable) {
        this.escapers.set(strategy, callable);
    }
    /**
     * Gets all defined escapers.
     *
     * @returns {Map<string, Function>}
     */
    getEscapers() {
        return this.escapers;
    }
    /**
     * Sets the default format to be used by the date filter.
     *
     * @param {string} format The default date format string
     * @param {string} dateIntervalFormat The default date interval format string
     */
    setDateFormat(format = null, dateIntervalFormat = null) {
        if (format !== null) {
            this.dateFormats[0] = format;
        }
        if (dateIntervalFormat !== null) {
            this.dateFormats[1] = dateIntervalFormat;
        }
    }
    /**
     * Gets the default format to be used by the date filter.
     *
     * @return array The default date format string and the default date interval format string
     */
    getDateFormat() {
        return this.dateFormats;
    }
    /**
     * Sets the default timezone to be used by the date filter.
     *
     * @param {string} timezone The default timezone string or a TwingDateTimeZone object
     */
    setTimezone(timezone) {
        this.timezone = timezone;
    }
    /**
     * Gets the default timezone to be used by the date filter.
     *
     * @returns {string} The default timezone currently in use
     */
    getTimezone() {
        if (this.timezone === null) {
            this.timezone = luxon_1.Settings.defaultZoneName;
        }
        return this.timezone;
    }
    /**
     * Sets the default format to be used by the number_format filter.
     *
     * @param {number} decimal the number of decimal places to use
     * @param {string} decimalPoint the character(s) to use for the decimal point
     * @param {string} thousandSep  the character(s) to use for the thousands separator
     */
    setNumberFormat(decimal, decimalPoint, thousandSep) {
        this.numberFormat = [decimal, decimalPoint, thousandSep];
    }
    /**
     * Get the default format used by the number_format filter.
     *
     * @return array The arguments for number_format()
     */
    getNumberFormat() {
        return this.numberFormat;
    }
    getTokenParsers() {
        return [
            new apply_1.TwingTokenParserApply(),
            new auto_escape_1.TwingTokenParserAutoEscape(),
            new block_1.TwingTokenParserBlock(),
            new deprecated_1.TwingTokenParserDeprecated(),
            new do_1.TwingTokenParserDo(),
            new embed_1.TwingTokenParserEmbed(),
            new extends_1.TwingTokenParserExtends(),
            new filter_1.TwingTokenParserFilter(),
            new flush_1.TwingTokenParserFlush(),
            new for_1.TwingTokenParserFor(),
            new from_1.TwingTokenParserFrom(),
            new if_1.TwingTokenParserIf(),
            new import_1.TwingTokenParserImport(),
            new include_1.TwingTokenParserInclude(),
            new line_1.TwingTokenParserLine(),
            new macro_1.TwingTokenParserMacro(),
            new sandbox_1.TwingTokenParserSandbox(),
            new set_1.TwingTokenParserSet(),
            new spaceless_1.TwingTokenParserSpaceless(),
            new use_1.TwingTokenParserUse(),
            new verbatim_1.TwingTokenParserVerbatim(),
            new with_1.TwingTokenParserWith(),
        ];
    }
    getSourceMapNodeFactories() {
        return [
            new spaceless_3.TwingSourceMapNodeFactorySpaceless()
        ];
    }
    getNodeVisitors() {
        return [
            new escaper_1.TwingNodeVisitorEscaper(),
            new macro_auto_import_1.TwingNodeVisitorMacroAutoImport(),
            new sandbox_2.TwingNodeVisitorSandbox()
        ];
    }
    getFilters() {
        return [
            new filter_2.TwingFilter('abs', abs_1.abs, []),
            new filter_2.TwingFilter('batch', batch_1.batch, [
                { name: 'size' },
                { name: 'fill', defaultValue: null },
                { name: 'preserve_keys', defaultValue: true }
            ]),
            new filter_2.TwingFilter('capitalize', capitalize_1.capitalize, [], {
                needs_template: true
            }),
            new filter_2.TwingFilter('column', column_1.column, [
                { name: 'name' }
            ]),
            new filter_2.TwingFilter('convert_encoding', convert_encoding_1.convertEncoding, [
                { name: 'to' },
                { name: 'from' }
            ], {
                pre_escape: 'html',
                is_safe: ['html']
            }),
            new filter_2.TwingFilter('date', date_1.date, [
                { name: 'format', defaultValue: null },
                { name: 'timezone', defaultValue: null }
            ], {
                needs_template: true
            }),
            new filter_2.TwingFilter('date_modify', date_modify_1.dateModify, [
                { name: 'modifier' }
            ], {
                needs_template: true
            }),
            new filter_2.TwingFilter('default', default_2.defaultFilter, [
                { name: 'default' }
            ], {
                expression_factory: function (node, filterName, methodArguments, lineno, columnno, tag) {
                    return new default_1.TwingNodeExpressionFilterDefault(node, filterName, methodArguments, lineno, columnno, tag);
                }
            }),
            new filter_2.TwingFilter('e', escape_1.escape, [
                { name: 'strategy' },
                { name: 'charset' }
            ], {
                needs_template: true,
                is_safe_callback: this.escapeFilterIsSafe
            }),
            new filter_2.TwingFilter('escape', escape_1.escape, [
                { name: 'strategy' },
                { name: 'charset' }
            ], {
                needs_template: true,
                is_safe_callback: this.escapeFilterIsSafe
            }),
            new filter_2.TwingFilter('filter', filter_3.filter, [
                { name: 'array' },
                { name: 'arrow' }
            ]),
            new filter_2.TwingFilter('first', first_1.first, []),
            new filter_2.TwingFilter('format', format_1.format, []),
            new filter_2.TwingFilter('join', join_1.join, [
                { name: 'glue', defaultValue: '' },
                { name: 'and', defaultValue: null }
            ]),
            new filter_2.TwingFilter('json_encode', json_encode_1.jsonEncode, [
                { name: 'options', defaultValue: null }
            ]),
            new filter_2.TwingFilter('keys', array_keys_1.arrayKeys, []),
            new filter_2.TwingFilter('last', last_1.last, []),
            new filter_2.TwingFilter('length', length_1.length, [], {
                needs_template: true
            }),
            new filter_2.TwingFilter('lower', lower_1.lower, [], {
                needs_template: true
            }),
            new filter_2.TwingFilter('map', map_1.map, [
                { name: 'arrow' }
            ]),
            new filter_2.TwingFilter('merge', merge_1.merge, []),
            new filter_2.TwingFilter('nl2br', nl2br_1.nl2br, [], {
                pre_escape: 'html',
                is_safe: ['html']
            }),
            new filter_2.TwingFilter('number_format', number_format_1.numberFormat, [
                { name: 'decimal' },
                { name: 'decimal_point' },
                { name: 'thousand_sep' }
            ], {
                needs_template: true
            }),
            new filter_2.TwingFilter('raw', raw_1.raw, [], {
                is_safe: ['all']
            }),
            new filter_2.TwingFilter('reduce', reduce_1.reduce, [
                { name: 'arrow' },
                { name: 'initial', defaultValue: null }
            ]),
            new filter_2.TwingFilter('replace', replace_1.replace, [
                { name: 'from' }
            ]),
            new filter_2.TwingFilter('reverse', reverse_1.reverse, [
                { name: 'preserve_keys', defaultValue: false }
            ]),
            new filter_2.TwingFilter('round', round_1.round, [
                { name: 'precision', defaultValue: 0 },
                { name: 'method', defaultValue: 'common' }
            ]),
            new filter_2.TwingFilter('slice', slice_1.slice, [
                { name: 'start' },
                { name: 'length', defaultValue: null },
                { name: 'preserve_keys', defaultValue: false }
            ]),
            new filter_2.TwingFilter('sort', sort_1.sort, []),
            new filter_2.TwingFilter('spaceless', spaceless_2.spaceless, [], {
                is_safe: ['html']
            }),
            new filter_2.TwingFilter('split', split_1.split, [
                { name: 'delimiter' },
                { name: 'limit' }
            ]),
            new filter_2.TwingFilter('striptags', striptags_1.striptags, [
                { name: 'allowable_tags' }
            ]),
            new filter_2.TwingFilter('title', title_1.title, []),
            new filter_2.TwingFilter('trim', trim_1.trim, [
                { name: 'character_mask', defaultValue: null },
                { name: 'side', defaultValue: 'both' }
            ]),
            new filter_2.TwingFilter('upper', upper_1.upper, []),
            new filter_2.TwingFilter('url_encode', url_encode_1.urlEncode, []),
        ];
    }
    getFunctions() {
        return [
            new function_1.TwingFunction('constant', constant_2.constant, [
                { name: 'name' },
                { name: 'object', defaultValue: null }
            ], {
                needs_template: true
            }),
            new function_1.TwingFunction('cycle', cycle_1.cycle, [
                { name: 'values' },
                { name: 'position' }
            ]),
            new function_1.TwingFunction('date', date_2.date, [
                { name: 'date' },
                { name: 'timezone' }
            ], {
                needs_template: true
            }),
            new function_1.TwingFunction('dump', dump_1.dump, [], {
                is_safe: ['html'],
                needs_context: true
            }),
            new function_1.TwingFunction('include', include_2.include, [
                { name: 'template' },
                { name: 'variables', defaultValue: {} },
                { name: 'with_context', defaultValue: true },
                { name: 'ignore_missing', defaultValue: false },
                { name: 'sandboxed', defaultValue: false }
            ], {
                needs_template: true,
                needs_context: true,
                needs_output_buffer: true,
                is_safe: ['all']
            }),
            new function_1.TwingFunction('max', max_1.max, []),
            new function_1.TwingFunction('min', min_1.min, []),
            new function_1.TwingFunction('random', random_1.random, [
                { name: 'values', defaultValue: null },
                { name: 'max', defaultValue: null }
            ], {
                needs_template: true
            }),
            new function_1.TwingFunction('range', range_2.range, [
                { name: 'low' },
                { name: 'high' },
                { name: 'step' }
            ]),
            new function_1.TwingFunction('source', source_1.source, [
                { name: 'name' },
                { name: 'ignore_missing', defaultValue: false }
            ], {
                needs_template: true,
                is_safe: ['all']
            }),
            new function_1.TwingFunction('template_from_string', template_from_string_1.templateFromString, [
                { name: 'template' },
                { name: 'name', defaultValue: null }
            ], {
                needs_template: true
            })
        ];
    }
    getTests() {
        return [
            new test_1.TwingTest('constant', null, [], {
                expression_factory: function (node, name, nodeArguments, lineno, columnno) {
                    return new constant_3.TwingNodeExpressionTestConstant(node, name, nodeArguments, lineno, columnno);
                }
            }),
            new test_1.TwingTest('divisible by', divisible_by_1.divisibleBy, []),
            new test_1.TwingTest('defined', null, [], {
                expression_factory: function (node, name, nodeArguments, lineno, columnno) {
                    return new defined_1.TwingNodeExpressionTestDefined(node, name, nodeArguments, lineno, columnno);
                }
            }),
            new test_1.TwingTest('empty', empty_1.empty, []),
            new test_1.TwingTest('even', even_1.even, []),
            new test_1.TwingTest('iterable', iterable_1.iterable, []),
            new test_1.TwingTest('none', null_1.nullTest, []),
            new test_1.TwingTest('null', null_1.nullTest, []),
            new test_1.TwingTest('odd', odd_1.odd, []),
            new test_1.TwingTest('same as', same_as_1.sameAs, []),
        ];
    }
    getOperators() {
        return [
            new operator_1.TwingOperator('not', operator_1.TwingOperatorType.UNARY, 50, function (operands, lineno, columnno) {
                return new not_1.TwingNodeExpressionUnaryNot(operands[0], lineno, columnno);
            }),
            new operator_1.TwingOperator('-', operator_1.TwingOperatorType.UNARY, 500, function (operands, lineno, columnno) {
                return new neg_1.TwingNodeExpressionUnaryNeg(operands[0], lineno, columnno);
            }),
            new operator_1.TwingOperator('+', operator_1.TwingOperatorType.UNARY, 500, function (operands, lineno, columnno) {
                return new pos_1.TwingNodeExpressionUnaryPos(operands[0], lineno, columnno);
            }),
            new operator_1.TwingOperator('or', operator_1.TwingOperatorType.BINARY, 10, function (operands, lineno, columnno) {
                return new or_1.TwingNodeExpressionBinaryOr(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('and', operator_1.TwingOperatorType.BINARY, 15, function (operands, lineno, columnno) {
                return new and_1.TwingNodeExpressionBinaryAnd(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('b-or', operator_1.TwingOperatorType.BINARY, 16, function (operands, lineno, columnno) {
                return new bitwise_or_1.TwingNodeExpressionBinaryBitwiseOr(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('b-xor', operator_1.TwingOperatorType.BINARY, 17, function (operands, lineno, columnno) {
                return new bitwise_xor_1.TwingNodeExpressionBinaryBitwiseXor(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('b-and', operator_1.TwingOperatorType.BINARY, 18, function (operands, lineno, columnno) {
                return new bitwise_and_1.TwingNodeExpressionBinaryBitwiseAnd(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('==', operator_1.TwingOperatorType.BINARY, 20, function (operands, lineno, columnno) {
                return new equal_1.TwingNodeExpressionBinaryEqual(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('!=', operator_1.TwingOperatorType.BINARY, 20, function (operands, lineno, columnno) {
                return new not_equal_1.TwingNodeExpressionBinaryNotEqual(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('<', operator_1.TwingOperatorType.BINARY, 20, function (operands, lineno, columnno) {
                return new less_1.TwingNodeExpressionBinaryLess(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('<=', operator_1.TwingOperatorType.BINARY, 20, function (operands, lineno, columnno) {
                return new less_equal_1.TwingNodeExpressionBinaryLessEqual(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('>', operator_1.TwingOperatorType.BINARY, 20, function (operands, lineno, columnno) {
                return new greater_1.TwingNodeExpressionBinaryGreater(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('>=', operator_1.TwingOperatorType.BINARY, 20, function (operands, lineno, columnno) {
                return new greater_equal_1.TwingNodeExpressionBinaryGreaterEqual(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('not in', operator_1.TwingOperatorType.BINARY, 20, function (operands, lineno, columnno) {
                return new not_in_1.TwingNodeExpressionBinaryNotIn(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('in', operator_1.TwingOperatorType.BINARY, 20, function (operands, lineno, columnno) {
                return new in_1.TwingNodeExpressionBinaryIn(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('matches', operator_1.TwingOperatorType.BINARY, 20, function (operands, lineno, columnno) {
                return new matches_1.TwingNodeExpressionBinaryMatches(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('starts with', operator_1.TwingOperatorType.BINARY, 20, function (operands, lineno, columnno) {
                return new starts_with_1.TwingNodeExpressionBinaryStartsWith(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('ends with', operator_1.TwingOperatorType.BINARY, 20, function (operands, lineno, columnno) {
                return new ends_with_1.TwingNodeExpressionBinaryEndsWith(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('..', operator_1.TwingOperatorType.BINARY, 25, function (operands, lineno, columnno) {
                return new range_1.TwingNodeExpressionBinaryRange(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('+', operator_1.TwingOperatorType.BINARY, 30, function (operands, lineno, columnno) {
                return new add_1.TwingNodeExpressionBinaryAdd(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('-', operator_1.TwingOperatorType.BINARY, 30, function (operands, lineno, columnno) {
                return new sub_1.TwingNodeExpressionBinarySub(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('~', operator_1.TwingOperatorType.BINARY, 40, function (operands, lineno, columnno) {
                return new concat_1.TwingNodeExpressionBinaryConcat(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('*', operator_1.TwingOperatorType.BINARY, 60, function (operands, lineno, columnno) {
                return new mul_1.TwingNodeExpressionBinaryMul(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('/', operator_1.TwingOperatorType.BINARY, 60, function (operands, lineno, columnno) {
                return new div_1.TwingNodeExpressionBinaryDiv(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('//', operator_1.TwingOperatorType.BINARY, 60, function (operands, lineno, columnno) {
                return new floor_div_1.TwingNodeExpressionBinaryFloorDiv(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('%', operator_1.TwingOperatorType.BINARY, 60, function (operands, lineno, columnno) {
                return new mod_1.TwingNodeExpressionBinaryMod(operands, lineno, columnno);
            }),
            new operator_1.TwingOperator('is', operator_1.TwingOperatorType.BINARY, 100, null),
            new operator_1.TwingOperator('is not', operator_1.TwingOperatorType.BINARY, 100, null),
            new operator_1.TwingOperator('**', operator_1.TwingOperatorType.BINARY, 200, function (operands, lineno, columnno) {
                return new power_1.TwingNodeExpressionBinaryPower(operands, lineno, columnno);
            }, operator_1.TwingOperatorAssociativity.RIGHT),
            new operator_1.TwingOperator('??', operator_1.TwingOperatorType.BINARY, 300, function (operands, lineno, columnno) {
                return new null_coalesce_1.TwingNodeExpressionNullCoalesce(operands, lineno, columnno);
            }, operator_1.TwingOperatorAssociativity.RIGHT)
        ];
    }
    /**
     * @internal
     */
    escapeFilterIsSafe(filterArgs) {
        if (filterArgs.getNodes().size > 0) {
            let result = [];
            filterArgs.getNodes().forEach(function (arg) {
                if (arg instanceof constant_1.TwingNodeExpressionConstant) {
                    result = [arg.getAttribute('value')];
                }
            });
            return result;
        }
        else {
            return ['html'];
        }
    }
}
exports.TwingExtensionCore = TwingExtensionCore;
