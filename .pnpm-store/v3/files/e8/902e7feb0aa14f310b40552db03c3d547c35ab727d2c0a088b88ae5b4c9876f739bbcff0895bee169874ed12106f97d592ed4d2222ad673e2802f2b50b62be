import { iteratorToArray } from "../../../helpers/iterator-to-array";
import { min as phpMin } from "locutus/php/math";
export function min(...values) {
    if (values.length === 1) {
        values = values[0];
    }
    return Promise.resolve(phpMin(iteratorToArray(values)));
}
