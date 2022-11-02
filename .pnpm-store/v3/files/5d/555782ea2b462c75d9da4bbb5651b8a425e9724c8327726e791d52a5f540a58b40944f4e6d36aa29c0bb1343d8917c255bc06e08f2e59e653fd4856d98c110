import { Token } from "./Token";
/**
 * The characters pairs recognized as brackets.
 */
export declare const bracketPairs: [string, string][];
/**
 * The regular expression pattern used to identify a double quoted string content.
 */
export declare const doubleQuotedStringContentPattern: string;
/**
 * The regular expression pattern used to identify a double quoted string delimiter.
 */
export declare const doubleQuotedStringDelimiterPattern: string;
/**
 * The characters recognized as line separators.
 */
export declare const lineSeparators: string[];
/**
 * The regular expression pattern used to identify a name.
 */
export declare const namePattern: string;
/**
 * The regular expression pattern used to identify a number.
 */
export declare const numberPattern: string;
/**
 * The regular expression pattern used to identify a punctuation.
 */
export declare const punctuationPattern: string;
/**
 * The regular expression pattern used to identify a string.
 */
export declare const stringPattern: string;
/**
 * The regular expression pattern used to identify a whitespace.
 */
export declare const whitespacePattern: string;
export declare class Lexer {
    private tagEndRegExp;
    private closingBracketRegExp;
    private column;
    private commentEndRegExp;
    private currentVarBlockColumn;
    private currentVarBlockLine;
    private cursor;
    private doubleQuotedStringContentRegExp;
    private doubleQuotedStringDelimiterRegExp;
    private end;
    private endverbatimTagRegExp;
    private interpolationEndRegExp;
    private interpolationStartRegExp;
    private line;
    private lineTrimingModifier;
    private nameRegExp;
    private numberRegExp;
    private openingBracketRegExp;
    private operatorRegExp;
    private punctuationRegExp;
    private scope;
    private scopes;
    private source;
    private state;
    private statementStartRegExp;
    private states;
    private stringRegExp;
    private testOperatorRegExp;
    private arrowOperatorRegExp;
    private tokens;
    private trimmingModifier;
    private variableEndRegExp;
    private verbatimTagRegExp;
    private lineTagRegExp;
    private whitespaceRegExp;
    /**
     * The test operators.
     */
    protected testOperators: [string, string];
    /**
     * The arrow operator.
     */
    protected arrowOperator: [string];
    /**
     * The supported operators.
     */
    protected operators: string[];
    /**
     * The tag delimiters.
     */
    protected tagPair: [string, string];
    /**
     * The comment delimiters.
     */
    protected commentPair: [string, string];
    /**
     * The interpolation delimiters.
     */
    protected interpolationPair: [string, string];
    /**
     * The variable delimiters.
     */
    protected variablePair: [string, string];
    /**
     * @constructor
     */
    constructor();
    /**
     * Tokenize a source into a list of tokens.
     *
     * @param {string} source
     *
     * @return {Token[]}
     */
    tokenize(source: string): Token[];
    private lexExpression;
    private lexTag;
    private lexVariable;
    private lexVerbatim;
    private lexWhitespace;
    private lexComment;
    private lexDoubleQuotedString;
    private lexInterpolation;
    private moveCoordinates;
    private pushToken;
    private pushModifier;
    private pushState;
    private pushScope;
    private popState;
    private popScope;
}
