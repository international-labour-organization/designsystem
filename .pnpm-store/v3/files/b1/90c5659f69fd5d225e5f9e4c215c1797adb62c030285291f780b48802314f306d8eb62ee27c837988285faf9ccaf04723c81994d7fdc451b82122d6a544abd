"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.last = void 0;
const first_1 = require("../../../helpers/first");
const slice_1 = require("./slice");
/**
 * Returns the last element of the item.
 *
 * @param item A variable
 *
 * @returns The last element of the item
 */
function last(item) {
    return slice_1.slice(item, -1, 1, false).then((elements) => {
        return typeof elements === 'string' ? elements : first_1.first(elements);
    });
}
exports.last = last;
