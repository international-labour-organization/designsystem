import { typeToString } from "./TokenType";
export class Token {
    /**
     * @constructor
     * @param {TokenType} type The type of the token
     * @param {*} value The value of the token
     * @param {number} line The line where the token is located in the source
     * @param {number} column The column where the token is located in the source
     */
    constructor(type, value, line, column) {
        this._type = type;
        this._value = value;
        this._line = line;
        this._column = column;
    }
    /**
     * Test the token for a type and/or a content.
     *
     * @param {TokenType} type
     * @param {string|string[]|number} value
     * @returns {boolean}
     */
    test(type, value = null) {
        return (this._type === type) && (value === null || (Array.isArray(value) && value.includes(this._value)) || this._value == value);
    }
    /**
     * Return the line where the token is located in the source.
     *
     * @return {number}
     */
    get line() {
        return this._line;
    }
    /**
     * Return the column where the token is located in the source.
     *
     * @return {number}
     */
    get column() {
        return this._column;
    }
    /**
     * Return the type of the token.
     *
     * @return {TokenType}
     */
    get type() {
        return this._type;
    }
    /**
     * Return the value of the token.
     *
     * @return {*}
     */
    get value() {
        return this._value;
    }
    /**
     * Return the human-readable representation of the token.
     *
     * @return {string}
     */
    toString() {
        return `${typeToString(this.type, true)}(${this.value ? this.value : ''})`;
    }
    /**
     * Serialize the token to a Twig source.
     *
     * @return {string}
     */
    serialize() {
        return this.value;
    }
}
