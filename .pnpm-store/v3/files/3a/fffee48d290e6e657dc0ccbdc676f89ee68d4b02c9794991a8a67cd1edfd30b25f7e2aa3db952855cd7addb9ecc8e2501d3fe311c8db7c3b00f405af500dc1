"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingLoaderNull = void 0;
const loader_1 = require("../error/loader");
/**
 * Noop implementation of TwingLoaderInterface.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
class TwingLoaderNull {
    exists(name, from) {
        return Promise.resolve(false);
    }
    getCacheKey(name, from) {
        return Promise.resolve(name);
    }
    getSourceContext(name, from) {
        throw new loader_1.TwingErrorLoader(`Template "${name}" is not defined.`, -1, from);
    }
    isFresh(name, time, from) {
        return Promise.resolve(true);
    }
    resolve(name, from) {
        return Promise.resolve(name);
    }
}
exports.TwingLoaderNull = TwingLoaderNull;
