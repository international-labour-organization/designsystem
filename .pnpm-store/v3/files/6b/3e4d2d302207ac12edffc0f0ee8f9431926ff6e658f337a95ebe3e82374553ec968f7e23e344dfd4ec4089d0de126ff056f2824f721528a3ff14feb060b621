"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
const merge_1 = require("../../../helpers/merge");
const util_1 = require("util");
const is_traversable_1 = require("../../../helpers/is-traversable");
const runtime_1 = require("../../../error/runtime");
const iterator_to_map_1 = require("../../../helpers/iterator-to-map");
/**
 * Merges an array with another one.
 *
 * <pre>
 *  {% set items = { 'apple': 'fruit', 'orange': 'fruit' } %}
 *
 *  {% set items = items|merge({ 'peugeot': 'car' }) %}
 *
 *  {# items now contains { 'apple': 'fruit', 'orange': 'fruit', 'peugeot': 'car' } #}
 * </pre>
 *
 * @param {any} iterable1 An iterable
 * @param {any} iterable2 An iterable
 *
 * @return {Promise<Map<any, any>>} The merged map
 */
function merge(iterable1, iterable2) {
    if (util_1.isNullOrUndefined(iterable1) || (!is_traversable_1.isTraversable(iterable1) && (typeof iterable1 !== 'object'))) {
        throw new runtime_1.TwingErrorRuntime(`The merge filter only works with arrays or "Traversable", got "${!util_1.isNullOrUndefined(iterable1) ? typeof iterable1 : iterable1}" as first argument.`);
    }
    if (util_1.isNullOrUndefined(iterable2) || (!is_traversable_1.isTraversable(iterable2) && (typeof iterable2 !== 'object'))) {
        throw new runtime_1.TwingErrorRuntime(`The merge filter only works with arrays or "Traversable", got "${!util_1.isNullOrUndefined(iterable2) ? typeof iterable2 : iterable2}" as second argument.`);
    }
    return Promise.resolve(merge_1.merge(iterator_to_map_1.iteratorToMap(iterable1), iterator_to_map_1.iteratorToMap(iterable2)));
}
exports.merge = merge;
