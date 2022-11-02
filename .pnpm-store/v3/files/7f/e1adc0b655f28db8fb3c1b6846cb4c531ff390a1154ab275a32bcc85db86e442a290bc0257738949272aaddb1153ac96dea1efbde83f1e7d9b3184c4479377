import { iterate } from "./iterate";
/**
 * Split an hash into chunks.
 *
 * @param {*} hash
 * @param {number} size
 * @param {boolean} preserveKeys
 * @returns {Promise<Array<Map<any, any>>>}
 */
export async function chunk(hash, size, preserveKeys = false) {
    let result = [];
    let count = 0;
    let currentMap;
    await iterate(hash, (key, value) => {
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
