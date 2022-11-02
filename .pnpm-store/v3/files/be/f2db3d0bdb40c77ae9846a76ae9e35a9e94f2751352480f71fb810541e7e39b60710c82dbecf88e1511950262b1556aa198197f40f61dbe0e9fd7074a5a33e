"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingLoaderArray = void 0;
const source_1 = require("../source");
const loader_1 = require("../error/loader");
const iterator_to_map_1 = require("../helpers/iterator-to-map");
/**
 * Loads template from the filesystem.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 * @author Eric MORAND <eric.morand@gmail.com>
 */
class TwingLoaderArray {
    constructor(templates) {
        this.templates = iterator_to_map_1.iteratorToMap(templates);
    }
    setTemplate(name, template) {
        this.templates.set(name, template);
    }
    getSourceContext(name, from) {
        return this.exists(name, from).then((exists) => {
            if (!exists) {
                throw new loader_1.TwingErrorLoader(`Template "${name}" is not defined.`, -1, from);
            }
            return new source_1.TwingSource(this.templates.get(name), name);
        });
    }
    exists(name, from) {
        return Promise.resolve(this.templates.has(name));
    }
    getCacheKey(name, from) {
        return this.exists(name, from).then((exists) => {
            if (!exists) {
                throw new loader_1.TwingErrorLoader(`Template "${name}" is not defined.`, -1, from);
            }
            return name + ':' + this.templates.get(name);
        });
    }
    isFresh(name, time, from) {
        return this.exists(name, from).then((exists) => {
            if (!exists) {
                throw new loader_1.TwingErrorLoader(`Template "${name}" is not defined.`, -1, from);
            }
            return true;
        });
    }
    resolve(name, from) {
        return Promise.resolve(name);
    }
}
exports.TwingLoaderArray = TwingLoaderArray;
