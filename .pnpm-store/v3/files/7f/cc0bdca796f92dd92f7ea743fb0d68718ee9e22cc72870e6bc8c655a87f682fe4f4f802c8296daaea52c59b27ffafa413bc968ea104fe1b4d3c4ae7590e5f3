"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
const util_1 = require("util");
const words = require('capitalize');
/**
 * Returns a capitalized string.
 *
 * @param {TwingEnvironment} env
 * @param {string | TwingMarkup} string A string
 *
 * @returns {Promise<string>} The capitalized string
 */
function capitalize(env, string) {
    if (util_1.isNullOrUndefined(string) || string === '') {
        return Promise.resolve(string);
    }
    return Promise.resolve(words(string.toString()));
}
exports.capitalize = capitalize;
