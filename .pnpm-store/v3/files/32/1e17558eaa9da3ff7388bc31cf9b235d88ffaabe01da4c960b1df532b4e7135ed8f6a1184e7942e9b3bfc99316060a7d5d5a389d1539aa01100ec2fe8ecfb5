"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
const iterator_to_map_1 = require("../../../helpers/iterator-to-map");
async function map(map, callback) {
    let result = new Map();
    map = iterator_to_map_1.iteratorToMap(map);
    for (let [k, v] of map) {
        v = await callback(v);
        result.set(k, v);
    }
    return Promise.resolve(result);
}
exports.map = map;
