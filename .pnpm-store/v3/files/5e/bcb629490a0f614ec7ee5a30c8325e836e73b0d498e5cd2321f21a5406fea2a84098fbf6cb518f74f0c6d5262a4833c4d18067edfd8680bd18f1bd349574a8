"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.length = void 0;
const util_1 = require("util");
/**
 * Returns the length of a thing.
 *
 * @param {TwingEnvironment} env A TwingEnvironment instance
 * @param {any} thing A thing
 *
 * @returns {Promise<number>} The length of the thing
 */
function length(env, thing) {
    let length;
    if (util_1.isNullOrUndefined(thing)) {
        length = 0;
    }
    else if (thing.length !== undefined) {
        length = thing.length;
    }
    else if (thing.size !== undefined) {
        length = thing.size;
    }
    else if (thing.toString && (typeof thing.toString === 'function')) {
        length = thing.toString().length;
    }
    else {
        length = 1;
    }
    return Promise.resolve(length);
}
exports.length = length;
