/**
 * Converts input to Map.
 *
 * @param {*} thing
 * @returns {Map<any, any>}
 */
export function iteratorToMap(thing) {
    if (thing.entries) {
        return new Map(thing.entries());
    }
    else {
        let result = new Map();
        if (typeof thing[Symbol.iterator] === 'function') {
            let i = 0;
            for (let value of thing) {
                result.set(i++, value);
            }
        }
        else if (typeof thing['next'] === 'function') {
            let i = 0;
            let next;
            while ((next = thing.next()) && !next.done) {
                result.set(i++, next.value);
            }
        }
        else {
            for (let k in thing) {
                result.set(k, thing[k]);
            }
        }
        return result;
    }
}
