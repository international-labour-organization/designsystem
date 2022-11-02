import { iteratorToArray } from "../../../helpers/iterator-to-array";
import { max as phpMax } from "locutus/php/math";
export function max(...values) {
    if (values.length === 1) {
        values = values[0];
    }
    return Promise.resolve(phpMax(iteratorToArray(values)));
}
