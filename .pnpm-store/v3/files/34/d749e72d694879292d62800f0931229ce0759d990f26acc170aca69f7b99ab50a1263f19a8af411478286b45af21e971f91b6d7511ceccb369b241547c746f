import { empty } from "../tests/empty";
export function defaultFilter(value, defaultValue = '') {
    return empty(value).then((isEmpty) => {
        if (isEmpty) {
            return Promise.resolve(defaultValue);
        }
        else {
            return Promise.resolve(value);
        }
    });
}
