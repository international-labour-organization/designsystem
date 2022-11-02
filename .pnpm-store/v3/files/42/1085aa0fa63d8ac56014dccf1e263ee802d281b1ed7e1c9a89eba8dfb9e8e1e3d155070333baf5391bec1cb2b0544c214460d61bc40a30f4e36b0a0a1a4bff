import { iteratorToMap } from "./iterator-to-map";
const locutusRange = require('locutus/php/array/range');
export function createRange(low, high, step) {
    let range = locutusRange(low, high, step);
    return iteratorToMap(range);
}
