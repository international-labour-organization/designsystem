"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.min = void 0;
const iterator_to_array_1 = require("../../../helpers/iterator-to-array");
const math_1 = require("locutus/php/math");
function min(...values) {
    if (values.length === 1) {
        values = values[0];
    }
    return Promise.resolve(math_1.min(iterator_to_array_1.iteratorToArray(values)));
}
exports.min = min;
