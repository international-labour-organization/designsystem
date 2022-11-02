"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const iterator_to_map_1 = require("./iterator-to-map");
const is_map_1 = require("./is-map");
/**
 * Return the value of a property of an object, providing array to Map conversion.
 *
 * @param {any} object
 * @param {any} property
 */
function get(object, property) {
    let result;
    if (is_map_1.isMap(object) && object.has(property)) {
        result = object.get(property);
    }
    else {
        result = object[property];
    }
    if (Array.isArray(result)) {
        result = iterator_to_map_1.iteratorToMap(result);
    }
    return result;
}
exports.get = get;
