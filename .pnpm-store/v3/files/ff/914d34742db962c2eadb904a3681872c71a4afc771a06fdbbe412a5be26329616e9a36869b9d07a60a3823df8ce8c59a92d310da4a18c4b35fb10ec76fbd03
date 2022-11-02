import { isMap } from "../../../helpers/is-map";
/**
 * Cycles over a value.
 *
 * @param {Map<any, any> | any} value
 * @param {number} position The cycle position
 *
 * @returns {Promise<any>} The value at position
 */
export function cycle(value, position) {
    if (!isMap(value)) {
        return Promise.resolve(value);
    }
    return Promise.resolve([...value.values()][position % value.size]);
}
