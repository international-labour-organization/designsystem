"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.join = void 0;
const util_1 = require("util");
const is_traversable_1 = require("../../../helpers/is-traversable");
const iterator_to_array_1 = require("../../../helpers/iterator-to-array");
/**
 * Joins the values to a string.
 *
 * The separator between elements is an empty string per default, you can define it with the optional parameter.
 *
 * <pre>
 *  {{ [1, 2, 3]|join('|') }}
 *  {# returns 1|2|3 #}
 *
 *  {{ [1, 2, 3]|join }}
 *  {# returns 123 #}
 * </pre>
 *
 * @param {any} value A value
 * @param {string} glue The separator
 * @param {string | null} and The separator for the last pair
 *
 * @returns {Promise<string>} The concatenated string
 */
function join(value, glue = '', and = null) {
    let _do = () => {
        if (util_1.isNullOrUndefined(value)) {
            return '';
        }
        if (is_traversable_1.isTraversable(value)) {
            value = iterator_to_array_1.iteratorToArray(value);
            // this is ugly but we have to ensure that each element of the array is rendered as PHP would render it
            // this is mainly useful for booleans that are not rendered the same way in PHP and JavaScript
            let safeValue = value.map(function (item) {
                if (typeof item === 'boolean') {
                    return (item === true) ? '1' : '';
                }
                return item;
            });
            if (and === null || and === glue) {
                return safeValue.join(glue);
            }
            if (safeValue.length === 1) {
                return safeValue[0];
            }
            return safeValue.slice(0, -1).join(glue) + and + safeValue[safeValue.length - 1];
        }
        return '';
    };
    return Promise.resolve(_do());
}
exports.join = join;
