import { isNullOrUndefined } from "util";
import { chunk } from "../../../helpers/chunk";
import { fill as fillHelper } from "../../../helpers/fill";
/**
 * Batches item.
 *
 * @param {any[]} items An array of items
 * @param {number} size  The size of the batch
 * @param {any} fill A value used to fill missing items
 * @param {boolean} preserveKeys
 *
 * @returns Promise<Map<any, any>[]>
 */
export function batch(items, size, fill = null, preserveKeys = true) {
    if (isNullOrUndefined(items)) {
        return Promise.resolve([]);
    }
    return chunk(items, size, preserveKeys).then((chunks) => {
        if (fill !== null && chunks.length) {
            let last = chunks.length - 1;
            let lastChunk = chunks[last];
            fillHelper(lastChunk, size, fill);
        }
        return chunks;
    });
}
