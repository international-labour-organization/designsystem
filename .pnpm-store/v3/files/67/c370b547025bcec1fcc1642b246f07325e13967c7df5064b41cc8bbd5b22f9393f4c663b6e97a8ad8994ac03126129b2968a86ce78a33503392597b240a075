"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterable = void 0;
/**
 * Checks if a variable is traversable.
 *
 * <pre>
 * {# evaluates to true if the foo variable is an array or a traversable object #}
 * {% if foo is iterable %}
 *     {# ... #}
 * {% endif %}
 * </pre>
 *
 * @param value A variable
 *
 * @return {Promise<boolean>} true if the value is traversable
 */
function iterable(value) {
    let _do = () => {
        // for Twig, a string is not traversable
        if (typeof value === 'string') {
            return false;
        }
        if (typeof value[Symbol.iterator] === 'function') {
            return true;
        }
        // in PHP objects are not iterable so we have to ensure that the test reflects that
        return false;
    };
    return Promise.resolve(_do());
}
exports.iterable = iterable;
