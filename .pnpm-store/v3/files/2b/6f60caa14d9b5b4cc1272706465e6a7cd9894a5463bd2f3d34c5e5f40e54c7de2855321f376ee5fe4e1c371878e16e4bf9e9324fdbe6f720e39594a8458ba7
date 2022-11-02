"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ksort = void 0;
/**
 * Sort a map by key
 *
 * @param {Map<*, *>} map
 * @param {Function} handler
 */
function ksort(map, handler = undefined) {
    let sortedMap = new Map();
    let sortedKeys = [...map.keys()].sort(handler);
    for (let key of sortedKeys) {
        sortedMap.set(key, map.get(key));
    }
    map.clear();
    for (let [key, value] of sortedMap) {
        map.set(key, value);
    }
}
exports.ksort = ksort;
