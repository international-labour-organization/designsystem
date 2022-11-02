import { TwingExtension } from "../extension";
import { TwingTokenParserFor } from "../token-parser/for";
import { TwingTokenParserExtends } from "../token-parser/extends";
import { TwingTokenParserFrom } from "../token-parser/from";
import { TwingTokenParserMacro } from "../token-parser/macro";
import { TwingTokenParserIf } from "../token-parser/if";
import { TwingTokenParserSet } from "../token-parser/set";
import { TwingTokenParserBlock } from "../token-parser/block";
import { TwingTokenParserInclude } from "../token-parser/include";
import { TwingTokenParserWith } from "../token-parser/with";
import { TwingFunction } from "../function";
import { TwingTokenParserSpaceless } from "../token-parser/spaceless";
import { TwingTokenParserUse } from "../token-parser/use";
import { TwingTokenParserFilter } from "../token-parser/filter";
import { TwingTokenParserImport } from "../token-parser/import";
import { TwingTokenParserDo } from "../token-parser/do";
import { TwingTokenParserFlush } from "../token-parser/flush";
import { TwingTest } from "../test";
import { TwingFilter } from "../filter";
import { TwingTokenParserDeprecated } from "../token-parser/deprecated";
import { TwingTokenParserApply } from "../token-parser/apply";
import { TwingOperator } from "../operator";
import { TwingTokenParserVerbatim } from "../token-parser/verbatim";
import { TwingTokenParserAutoEscape } from "../token-parser/auto-escape";
import { TwingTokenParserSandbox } from "../token-parser/sandbox";
import { TwingBaseNodeVisitor } from "../base-node-visitor";
import { TwingSourceMapNodeFactory } from "../source-map/node-factory";
import { TwingTokenParserLine } from "../token-parser/line";
import { TwingEscapingStrategyResolver } from "../environment";
export declare class TwingExtensionCore extends TwingExtension {
    private dateFormats;
    private numberFormat;
    private timezone;
    private escapers;
    private defaultStrategy;
    /**
     * @param {string | false | TwingEscapingStrategyResolver} defaultStrategy An escaping strategy
     */
    constructor(defaultStrategy?: string | false | TwingEscapingStrategyResolver);
    /**
     * Sets the default strategy to use when not defined by the user.
     *
     * @param {string | false | TwingEscapingStrategyResolver} defaultStrategy An escaping strategy
     */
    setDefaultStrategy(defaultStrategy: string | false | TwingEscapingStrategyResolver): void;
    /**
     * Gets the default escaping strategy.
     *
     * @param {string} name The template name
     *
     * @returns {string | false} The default strategy to use for the template
     */
    getDefaultStrategy(name: string): string | false;
    /**
     * Defines a new escaper to be used via the escape filter.
     *
     * @param {string} strategy     The strategy name that should be used as a strategy in the escape call
     * @param {Function} callable   A valid PHP callable
     */
    setEscaper(strategy: string, callable: Function): void;
    /**
     * Gets all defined escapers.
     *
     * @returns {Map<string, Function>}
     */
    getEscapers(): Map<string, Function>;
    /**
     * Sets the default format to be used by the date filter.
     *
     * @param {string} format The default date format string
     * @param {string} dateIntervalFormat The default date interval format string
     */
    setDateFormat(format?: string, dateIntervalFormat?: string): void;
    /**
     * Gets the default format to be used by the date filter.
     *
     * @return array The default date format string and the default date interval format string
     */
    getDateFormat(): string[];
    /**
     * Sets the default timezone to be used by the date filter.
     *
     * @param {string} timezone The default timezone string or a TwingDateTimeZone object
     */
    setTimezone(timezone: string): void;
    /**
     * Gets the default timezone to be used by the date filter.
     *
     * @returns {string} The default timezone currently in use
     */
    getTimezone(): string;
    /**
     * Sets the default format to be used by the number_format filter.
     *
     * @param {number} decimal the number of decimal places to use
     * @param {string} decimalPoint the character(s) to use for the decimal point
     * @param {string} thousandSep  the character(s) to use for the thousands separator
     */
    setNumberFormat(decimal: number, decimalPoint: string, thousandSep: string): void;
    /**
     * Get the default format used by the number_format filter.
     *
     * @return array The arguments for number_format()
     */
    getNumberFormat(): (string | number)[];
    getTokenParsers(): (TwingTokenParserFor | TwingTokenParserExtends | TwingTokenParserFrom | TwingTokenParserMacro | TwingTokenParserIf | TwingTokenParserSet | TwingTokenParserBlock | TwingTokenParserInclude | TwingTokenParserWith | TwingTokenParserSpaceless | TwingTokenParserUse | TwingTokenParserFilter | TwingTokenParserImport | TwingTokenParserDo | TwingTokenParserFlush | TwingTokenParserDeprecated | TwingTokenParserApply | TwingTokenParserVerbatim | TwingTokenParserAutoEscape | TwingTokenParserSandbox | TwingTokenParserLine)[];
    getSourceMapNodeFactories(): TwingSourceMapNodeFactory[];
    getNodeVisitors(): TwingBaseNodeVisitor[];
    getFilters(): TwingFilter[];
    getFunctions(): TwingFunction[];
    getTests(): Array<TwingTest>;
    getOperators(): TwingOperator[];
    /**
     * @internal
     */
    private escapeFilterIsSafe;
}
