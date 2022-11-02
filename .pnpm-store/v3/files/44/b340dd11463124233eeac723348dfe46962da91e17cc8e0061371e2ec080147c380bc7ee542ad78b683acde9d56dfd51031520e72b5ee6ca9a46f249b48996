"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
const is_traversable_1 = require("../../../helpers/is-traversable");
const runtime_1 = require("../../../error/runtime");
const iterator_to_map_1 = require("../../../helpers/iterator-to-map");
const asort_1 = require("../../../helpers/asort");
/**
 * Sorts an iterable.
 *
 * @param {Map<any, any>} iterable
 *
 * @returns {Promise<Map<any, any>>}
 */
function sort(iterable) {
    if (!is_traversable_1.isTraversable(iterable)) {
        throw new runtime_1.TwingErrorRuntime(`The sort filter only works with iterables, got "${typeof iterable}".`);
    }
    let map = iterator_to_map_1.iteratorToMap(iterable);
    asort_1.asort(map);
    return Promise.resolve(map);
}
exports.sort = sort;
