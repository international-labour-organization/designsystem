/**
 * In Twig, a hash is considered a pure array, i.e. a non-keyed array, if its keys form a (xn = n) sequence -i.e. 0,1,2,3,4...
 *
 * @param map
 */
export function isPureArray(map) {
    let result = true;
    let keys = Array.from(map.keys());
    let i = 0;
    while (result && (i < keys.length)) {
        let key = keys[i];
        result = (Number(key) === i);
        i++;
    }
    return result;
}
