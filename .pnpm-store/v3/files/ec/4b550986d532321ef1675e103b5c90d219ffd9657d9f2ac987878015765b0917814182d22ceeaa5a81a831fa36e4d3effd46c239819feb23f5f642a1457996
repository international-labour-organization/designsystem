"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.first = void 0;
const first_1 = require("../../../helpers/first");
const slice_1 = require("./slice");
/**
 * Returns the first element of the item.
 *
 * @param {any} item
 *
 * @returns {Promise<any>} The first element of the item
 */
function first(item) {
    return slice_1.slice(item, 0, 1, false).then((elements) => {
        return typeof elements === 'string' ? elements : first_1.first(elements);
    });
}
exports.first = first;
