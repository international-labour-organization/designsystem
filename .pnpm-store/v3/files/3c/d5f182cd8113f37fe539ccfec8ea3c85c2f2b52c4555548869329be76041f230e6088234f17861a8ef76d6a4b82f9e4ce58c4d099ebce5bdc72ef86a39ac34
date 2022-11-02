/**
 * Count all elements in an object.
 *
 * @param {*} countable
 * @returns {number}
 */
export function count(countable) {
    if (typeof countable === 'object') {
        if (Reflect.has(countable, 'length')) {
            return countable.length;
        }
        else if (Reflect.has(countable, 'size')) {
            return countable.size;
        }
        else {
            return Object.keys(countable).length;
        }
    }
    return 0;
}
