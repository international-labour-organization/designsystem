"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluate = void 0;
const is_map_1 = require("./is-map");
exports.evaluate = (value) => {
    if (value === '0' || (is_map_1.isMap(value) && value.size === 0)) {
        return false;
    }
    else if (Number.isNaN(value)) {
        return true;
    }
    else {
        return value;
    }
};
