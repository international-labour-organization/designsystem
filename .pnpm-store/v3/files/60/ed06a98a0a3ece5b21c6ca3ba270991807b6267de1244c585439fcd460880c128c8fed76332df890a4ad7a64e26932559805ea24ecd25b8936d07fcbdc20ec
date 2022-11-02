"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cycle = void 0;
const is_map_1 = require("../../../helpers/is-map");
/**
 * Cycles over a value.
 *
 * @param {Map<any, any> | any} value
 * @param {number} position The cycle position
 *
 * @returns {Promise<any>} The value at position
 */
function cycle(value, position) {
    if (!is_map_1.isMap(value)) {
        return Promise.resolve(value);
    }
    return Promise.resolve([...value.values()][position % value.size]);
}
exports.cycle = cycle;
