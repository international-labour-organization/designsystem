"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.column = void 0;
const is_traversable_1 = require("../../../helpers/is-traversable");
const iterator_to_map_1 = require("../../../helpers/iterator-to-map");
const runtime_1 = require("../../../error/runtime");
const is_plain_object_1 = require("../../../helpers/is-plain-object");
/**
 * Return the values from a single column in the input array.
 *
 * <pre>
 *  {% set items = [{ 'fruit' : 'apple'}, {'fruit' : 'orange' }] %}
 *
 *  {% set fruits = items|column('fruit') %}
 *
 *  {# fruits now contains ['apple', 'orange'] #}
 * </pre>
 *
 * @param {*} thing An iterable
 * @param {*} columnKey The column key
 *
 * @return {Promise<Array<any>>} The array of values
 */
function column(thing, columnKey) {
    let map;
    if (!is_traversable_1.isTraversable(thing) || is_plain_object_1.isPlainObject(thing)) {
        throw new runtime_1.TwingErrorRuntime(`The column filter only works with arrays or "Traversable", got "${typeof thing}" as first argument.`);
    }
    else {
        map = iterator_to_map_1.iteratorToMap(thing);
    }
    let result = [];
    for (let value of map.values()) {
        let valueAsMap = iterator_to_map_1.iteratorToMap(value);
        for (let [key, value] of valueAsMap) {
            if (key === columnKey) {
                result.push(value);
            }
        }
    }
    return Promise.resolve(result);
}
exports.column = column;
