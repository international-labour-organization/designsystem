"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayKeys = void 0;
const util_1 = require("util");
const iterator_to_map_1 = require("../../../helpers/iterator-to-map");
/**
 * Returns the keys for the given array.
 *
 * It is useful when you want to iterate over the keys of an array:
 *
 * <pre>
 *  {% for key in array|keys %}
 *      {# ... #}
 *  {% endfor %}
 * </pre>
 *
 * @param {Array<any>} array An array
 *
 * @returns {Promise<Array<any>>} The keys
 */
function arrayKeys(array) {
    let traversable;
    if (util_1.isNullOrUndefined(array)) {
        traversable = new Map();
    }
    else {
        traversable = iterator_to_map_1.iteratorToMap(array);
    }
    return Promise.resolve([...traversable.keys()]);
}
exports.arrayKeys = arrayKeys;
