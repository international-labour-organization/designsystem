"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batch = void 0;
const util_1 = require("util");
const chunk_1 = require("../../../helpers/chunk");
const fill_1 = require("../../../helpers/fill");
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
function batch(items, size, fill = null, preserveKeys = true) {
    if (util_1.isNullOrUndefined(items)) {
        return Promise.resolve([]);
    }
    return chunk_1.chunk(items, size, preserveKeys).then((chunks) => {
        if (fill !== null && chunks.length) {
            let last = chunks.length - 1;
            let lastChunk = chunks[last];
            fill_1.fill(lastChunk, size, fill);
        }
        return chunks;
    });
}
exports.batch = batch;
