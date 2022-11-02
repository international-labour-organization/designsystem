"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIn = void 0;
const compare_1 = require("./compare");
const is_traversable_1 = require("./is-traversable");
const iterator_to_array_1 = require("./iterator-to-array");
const markup_1 = require("../markup");
const is_map_1 = require("./is-map");
function isIn(value, compare) {
    let result = false;
    if (value instanceof markup_1.TwingMarkup) {
        value = value.toString();
    }
    if (compare instanceof markup_1.TwingMarkup) {
        compare = compare.toString();
    }
    if (is_map_1.isMap(compare)) {
        for (let [key, item] of compare) {
            if (compare_1.compare(item, value)) {
                result = true;
                break;
            }
        }
    }
    else if (typeof compare === 'string' && (typeof value === 'string' || typeof value === 'number')) {
        result = (value === '' || compare.includes('' + value));
    }
    else if (is_traversable_1.isTraversable(compare)) {
        for (let item of iterator_to_array_1.iteratorToArray(compare)) {
            if (compare_1.compare(item, value)) {
                result = true;
                break;
            }
        }
    }
    else if (typeof compare === 'object') {
        for (let key in compare) {
            if (compare_1.compare(compare[key], value)) {
                result = true;
                break;
            }
        }
    }
    return result;
}
exports.isIn = isIn;
