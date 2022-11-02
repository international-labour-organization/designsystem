"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replace = void 0;
const is_traversable_1 = require("../../../helpers/is-traversable");
const iterator_to_hash_1 = require("../../../helpers/iterator-to-hash");
const runtime_1 = require("../../../error/runtime");
const strtr = require('locutus/php/strings/strtr');
/**
 * Replaces strings within a string.
 *
 * @param {string} str String to replace in
 * @param {Array<string>|Map<string, string>} from Replace values
 *
 * @returns {Promise<string>}
 */
function replace(str, from) {
    let _do = () => {
        if (is_traversable_1.isTraversable(from)) {
            from = iterator_to_hash_1.iteratorToHash(from);
        }
        else if (typeof from !== 'object') {
            throw new runtime_1.TwingErrorRuntime(`The "replace" filter expects an hash or "Iterable" as replace values, got "${typeof from}".`);
        }
        return strtr(str, from);
    };
    try {
        return Promise.resolve(_do());
    }
    catch (e) {
        return Promise.reject(e);
    }
}
exports.replace = replace;
