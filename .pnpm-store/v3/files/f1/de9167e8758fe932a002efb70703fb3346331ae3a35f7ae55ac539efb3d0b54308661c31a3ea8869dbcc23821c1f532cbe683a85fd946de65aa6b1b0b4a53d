"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.max = void 0;
const iterator_to_array_1 = require("../../../helpers/iterator-to-array");
const math_1 = require("locutus/php/math");
function max(...values) {
    if (values.length === 1) {
        values = values[0];
    }
    return Promise.resolve(math_1.max(iterator_to_array_1.iteratorToArray(values)));
}
exports.max = max;
