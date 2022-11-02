"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asort = void 0;
/**
 * Sort a map and maintain index association.
 *
 * @param {Map<*, *>} map
 * @param {Function} handler
 * @returns {Map<* ,*>}
 */
function asort(map, handler = undefined) {
    let sortedMap = new Map();
    let keys = [].fill(null, 0, map.size);
    let sortedValues = [...map.values()].sort(handler);
    for (let [key, value] of map) {
        let index = sortedValues.indexOf(value);
        keys[index] = key;
    }
    for (let key of keys) {
        sortedMap.set(key, map.get(key));
    }
    map.clear();
    for (let [key, value] of sortedMap) {
        map.set(key, value);
    }
}
exports.asort = asort;
