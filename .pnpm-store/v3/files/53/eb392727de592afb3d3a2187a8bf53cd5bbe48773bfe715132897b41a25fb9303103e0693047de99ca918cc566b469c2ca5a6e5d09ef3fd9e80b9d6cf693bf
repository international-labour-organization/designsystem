import { TwingSource } from "../source";
import { TwingErrorLoader } from "../error/loader";
import { iteratorToMap } from "../helpers/iterator-to-map";
/**
 * Loads template from the filesystem.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export class TwingLoaderArray {
    constructor(templates) {
        this.templates = iteratorToMap(templates);
    }
    setTemplate(name, template) {
        this.templates.set(name, template);
    }
    getSourceContext(name, from) {
        return this.exists(name, from).then((exists) => {
            if (!exists) {
                throw new TwingErrorLoader(`Template "${name}" is not defined.`, -1, from);
            }
            return new TwingSource(this.templates.get(name), name);
        });
    }
    exists(name, from) {
        return Promise.resolve(this.templates.has(name));
    }
    getCacheKey(name, from) {
        return this.exists(name, from).then((exists) => {
            if (!exists) {
                throw new TwingErrorLoader(`Template "${name}" is not defined.`, -1, from);
            }
            return name + ':' + this.templates.get(name);
        });
    }
    isFresh(name, time, from) {
        return this.exists(name, from).then((exists) => {
            if (!exists) {
                throw new TwingErrorLoader(`Template "${name}" is not defined.`, -1, from);
            }
            return true;
        });
    }
    resolve(name, from) {
        return Promise.resolve(name);
    }
}
