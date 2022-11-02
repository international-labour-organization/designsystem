import { TokenType } from "./TokenType";
export declare class Token {
    private readonly _type;
    private readonly _value;
    private readonly _line;
    private readonly _column;
    /**
     * @constructor
     * @param {TokenType} type The type of the token
     * @param {*} value The value of the token
     * @param {number} line The line where the token is located in the source
     * @param {number} column The column where the token is located in the source
     */
    constructor(type: TokenType, value: any, line: number, column: number);
    /**
     * Test the token for a type and/or a content.
     *
     * @param {TokenType} type
     * @param {string|string[]|number} value
     * @returns {boolean}
     */
    test(type: TokenType, value?: string | string[] | number): boolean;
    /**
     * Return the line where the token is located in the source.
     *
     * @return {number}
     */
    readonly line: number;
    /**
     * Return the column where the token is located in the source.
     *
     * @return {number}
     */
    readonly column: number;
    /**
     * Return the type of the token.
     *
     * @return {TokenType}
     */
    readonly type: TokenType;
    /**
     * Return the value of the token.
     *
     * @return {*}
     */
    readonly value: any;
    /**
     * Return the human-readable representation of the token.
     *
     * @return {string}
     */
    toString(): string;
    /**
     * Serialize the token to a Twig source.
     *
     * @return {string}
     */
    serialize(): string;
}
