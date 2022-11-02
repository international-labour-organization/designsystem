"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonEncode = void 0;
const iterator_to_hash_1 = require("../../../helpers/iterator-to-hash");
const is_map_1 = require("../../../helpers/is-map");
const is_pure_array_1 = require("../../../helpers/is-pure-array");
const iterator_to_array_1 = require("../../../helpers/iterator-to-array");
const is_plain_object_1 = require("../../../helpers/is-plain-object");
const iterator_to_map_1 = require("../../../helpers/iterator-to-map");
const is_traversable_1 = require("../../../helpers/is-traversable");
function jsonEncode(value) {
    const _sanitize = (value) => {
        if (is_traversable_1.isTraversable(value) || is_plain_object_1.isPlainObject(value)) {
            value = iterator_to_map_1.iteratorToMap(value);
        }
        if (is_map_1.isMap(value)) {
            let sanitizedValue;
            if (is_pure_array_1.isPureArray(value)) {
                value = iterator_to_array_1.iteratorToArray(value);
                sanitizedValue = [];
                for (let key in value) {
                    sanitizedValue.push(_sanitize(value[key]));
                }
            }
            else {
                value = iterator_to_hash_1.iteratorToHash(value);
                sanitizedValue = {};
                for (let key in value) {
                    sanitizedValue[key] = _sanitize(value[key]);
                }
            }
            value = sanitizedValue;
        }
        return value;
    };
    return Promise.resolve(JSON.stringify(_sanitize(value)));
}
exports.jsonEncode = jsonEncode;
