import { iteratorToMap } from "../../../helpers/iterator-to-map";
export async function map(map, callback) {
    let result = new Map();
    map = iteratorToMap(map);
    for (let [k, v] of map) {
        v = await callback(v);
        result.set(k, v);
    }
    return Promise.resolve(result);
}
