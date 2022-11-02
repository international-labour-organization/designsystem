"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultFilter = void 0;
const empty_1 = require("../tests/empty");
function defaultFilter(value, defaultValue = '') {
    return empty_1.empty(value).then((isEmpty) => {
        if (isEmpty) {
            return Promise.resolve(defaultValue);
        }
        else {
            return Promise.resolve(value);
        }
    });
}
exports.defaultFilter = defaultFilter;
