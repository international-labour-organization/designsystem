"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slice = void 0;
const is_traversable_1 = require("../../../helpers/is-traversable");
const iterator_to_map_1 = require("../../../helpers/iterator-to-map");
const slice_1 = require("../../../helpers/slice");
/**
 * Slices a variable.
 *
 * @param item A variable
 * @param {number} start Start of the slice
 * @param {number} length Size of the slice
 * @param {boolean} preserveKeys Whether to preserve key or not (when the input is an object)
 *
 * @returns {Promise<string | Map<any, any>>} The sliced variable
 */
function slice(item, start, length = null, preserveKeys = false) {
    if (is_traversable_1.isTraversable(item)) {
        let iterableItem = iterator_to_map_1.iteratorToMap(item);
        if (length === null) {
            length = iterableItem.size - start;
        }
        return Promise.resolve(slice_1.slice(iterableItem, start, length, preserveKeys));
    }
    item = '' + (item ? item : '');
    if (length === null) {
        length = item.length - start;
    }
    return Promise.resolve(item.substr(start, length));
}
exports.slice = slice;
