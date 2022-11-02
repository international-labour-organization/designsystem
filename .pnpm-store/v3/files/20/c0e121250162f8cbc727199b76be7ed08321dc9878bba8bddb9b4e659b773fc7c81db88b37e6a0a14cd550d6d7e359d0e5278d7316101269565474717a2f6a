"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingCacheNull = void 0;
/**
 * Implements a no-cache strategy.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
class TwingCacheNull {
    generateKey(name, className) {
        return Promise.resolve('');
    }
    write(key, content) {
        return Promise.resolve();
    }
    load(key) {
        return Promise.resolve(() => {
            return new Map();
        });
    }
    getTimestamp(key) {
        return Promise.resolve(0);
    }
}
exports.TwingCacheNull = TwingCacheNull;
