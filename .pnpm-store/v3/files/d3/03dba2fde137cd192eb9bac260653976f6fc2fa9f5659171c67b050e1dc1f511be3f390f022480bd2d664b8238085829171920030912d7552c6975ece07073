"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingLoaderRelativeFilesystem = void 0;
const source_1 = require("../source");
const loader_1 = require("../error/loader");
const path_1 = require("path");
const fs_1 = require("fs");
/**
 * Loads template from the filesystem relatively to the template that initiated the load.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
class TwingLoaderRelativeFilesystem {
    constructor() {
        this.cache = new Map();
        this.errorCache = new Map();
    }
    getSourceContext(name, from) {
        return this.findTemplate(name, true, from).then((path) => {
            return new Promise((resolve) => {
                fs_1.readFile(path, 'UTF-8', (err, data) => {
                    resolve(new source_1.TwingSource(data, name, path));
                });
            });
        });
    }
    getCacheKey(name, from) {
        return this.findTemplate(name, true, from);
    }
    exists(name, from) {
        name = this.normalizeName(this.resolvePath(name, from));
        if (this.cache.has(name)) {
            return Promise.resolve(true);
        }
        return this.findTemplate(name, false, from).then((name) => {
            return name !== null;
        });
    }
    isFresh(name, time, from) {
        return this.findTemplate(name, true, from).then((name) => {
            return new Promise((resolve) => {
                fs_1.stat(name, (err, stat) => {
                    resolve(stat.mtime.getTime() < time);
                });
            });
        });
    }
    /**
     * Checks if the template can be found.
     *
     * @param {string} name  The template name
     * @param {boolean} throw_ Whether to throw an exception when an error occurs
     * @param {TwingSource} from The source that initiated the template loading
     *
     * @returns {Promise<string>} The template name or null
     */
    findTemplate(name, throw_ = true, from = null) {
        let _do = () => {
            name = this.normalizeName(this.resolvePath(name, from));
            if (this.cache.has(name)) {
                return this.cache.get(name);
            }
            if (this.errorCache.has(name)) {
                if (!throw_) {
                    return null;
                }
                throw new loader_1.TwingErrorLoader(this.errorCache.get(name), -1, from);
            }
            try {
                this.validateName(name, from);
            }
            catch (e) {
                if (!throw_) {
                    return null;
                }
                throw e;
            }
            try {
                let stat = fs_1.statSync(name);
                if (stat.isFile()) {
                    this.cache.set(name, path_1.resolve(name));
                    return this.cache.get(name);
                }
            }
            catch (e) {
                // noop, we'll throw later if needed
            }
            this.errorCache.set(name, `Unable to find template "${name}".`);
            if (!throw_) {
                return null;
            }
            throw new loader_1.TwingErrorLoader(this.errorCache.get(name), -1, from);
        };
        return new Promise((resolve, reject) => {
            try {
                resolve(_do());
            }
            catch (e) {
                reject(e);
            }
        });
    }
    normalizeName(name) {
        if (name === null) {
            return '';
        }
        return name.replace(/\\/g, '/').replace(/\/{2,}/g, '/');
    }
    validateName(name, from) {
        if (name.indexOf(`\0`) > -1) {
            throw new loader_1.TwingErrorLoader('A template name cannot contain NUL bytes.', -1, from);
        }
    }
    resolve(name, from, shouldThrow = false) {
        return this.findTemplate(name, shouldThrow, from);
    }
    resolvePath(name, from) {
        if (name && from && !path_1.isAbsolute(name)) {
            name = path_1.join(path_1.dirname(from.getResolvedName()), name);
        }
        return name;
    }
}
exports.TwingLoaderRelativeFilesystem = TwingLoaderRelativeFilesystem;
