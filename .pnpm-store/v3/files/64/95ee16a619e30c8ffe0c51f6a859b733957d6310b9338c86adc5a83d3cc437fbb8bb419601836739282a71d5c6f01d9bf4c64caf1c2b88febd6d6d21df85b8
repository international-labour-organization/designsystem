import { isTraversable } from "./is-traversable";
import { isPlainObject } from "./is-plain-object";
export function ensureTraversable(seq) {
    if (isTraversable(seq) || isPlainObject(seq)) {
        return seq;
    }
    return [];
}
