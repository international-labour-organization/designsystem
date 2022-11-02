"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = void 0;
/**
 * Reverse a map
 *
 * @param {Map<* ,*>} map
 * @param {boolean} preserveKeys
 *
 * @returns Map
 */
function reverse(map, preserveKeys) {
    let result = new Map();
    let keys = [...map.keys()];
    let index = 0;
    for (let i = (keys.length - 1); i >= 0; i--) {
        let key = keys[i];
        result.set(preserveKeys ? key : index, map.get(key));
        index++;
    }
    return result;
}
exports.reverse = reverse;
