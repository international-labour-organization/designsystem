import { iteratorToMap } from "../../../helpers/iterator-to-map";
export function reduce(map, callback, initial = null) {
    map = iteratorToMap(map);
    let values = [...map.values()];
    return Promise.resolve(values.reduce((previousValue, currentValue) => {
        return (async () => callback(await previousValue, currentValue))();
    }, initial));
}
