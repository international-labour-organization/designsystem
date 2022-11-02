"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunk = void 0;
const iterate_1 = require("./iterate");
/**
 * Split an hash into chunks.
 *
 * @param {*} hash
 * @param {number} size
 * @param {boolean} preserveKeys
 * @returns {Promise<Array<Map<any, any>>>}
 */
async function chunk(hash, size, preserveKeys = false) {
    let result = [];
    let count = 0;
    let currentMap;
    await iterate_1.iterate(hash, (key, value) => {
        if (!currentMap) {
            currentMap = new Map();
            result.push(currentMap);
        }
        currentMap.set(preserveKeys ? key : count, value);
        count++;
        if (count >= size) {
            count = 0;
            currentMap = null;
        }
        return Promise.resolve();
    });
    return result;
}
exports.chunk = chunk;
