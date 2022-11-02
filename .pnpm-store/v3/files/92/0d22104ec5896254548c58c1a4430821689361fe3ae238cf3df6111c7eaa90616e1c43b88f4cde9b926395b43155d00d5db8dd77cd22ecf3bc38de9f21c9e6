import { TwingErrorLoader } from "../error/loader";
/**
 * Noop implementation of TwingLoaderInterface.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export class TwingLoaderNull {
    exists(name, from) {
        return Promise.resolve(false);
    }
    getCacheKey(name, from) {
        return Promise.resolve(name);
    }
    getSourceContext(name, from) {
        throw new TwingErrorLoader(`Template "${name}" is not defined.`, -1, from);
    }
    isFresh(name, time, from) {
        return Promise.resolve(true);
    }
    resolve(name, from) {
        return Promise.resolve(name);
    }
}
