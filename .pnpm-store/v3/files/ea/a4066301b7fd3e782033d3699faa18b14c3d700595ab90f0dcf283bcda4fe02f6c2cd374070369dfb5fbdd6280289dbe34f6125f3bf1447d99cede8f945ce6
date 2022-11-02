import { TwingErrorLoader } from "../error/loader";
/**
 * Loads templates from other loaders.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export class TwingLoaderChain {
    /**
     * @param {Array<TwingLoaderInterface>} loaders
     */
    constructor(loaders = []) {
        this.hasSourceCache = new Map();
        this.loaders = [];
        for (let loader of loaders) {
            this.addLoader(loader);
        }
    }
    addLoader(loader) {
        this.loaders.push(loader);
        this.hasSourceCache = new Map();
    }
    /**
     * @return TwingLoaderInterface[]
     */
    getLoaders() {
        return this.loaders;
    }
    getSourceContext(name, from) {
        let exceptions = [];
        let getSourceContextAtIndex = (index) => {
            if (index < this.loaders.length) {
                let loader = this.loaders[index];
                return loader.exists(name, from).then((exists) => {
                    if (!exists) {
                        return getSourceContextAtIndex(index + 1);
                    }
                    else {
                        return loader.getSourceContext(name, from)
                            .catch((e) => {
                            if (e instanceof TwingErrorLoader) {
                                exceptions.push(e.message);
                            }
                            return getSourceContextAtIndex(index + 1);
                        });
                    }
                });
            }
            else {
                return Promise.resolve(null);
            }
        };
        return getSourceContextAtIndex(0).then((source) => {
            if (source) {
                return source;
            }
            else {
                throw new TwingErrorLoader(`Template "${name}" is not defined${exceptions.length ? ' (' + exceptions.join(', ') + ')' : ''}.`, -1, from);
            }
        });
    }
    exists(name, from) {
        if (this.hasSourceCache.has(name)) {
            return Promise.resolve(this.hasSourceCache.get(name));
        }
        let existsAtIndex = (index) => {
            if (index < this.loaders.length) {
                let loader = this.loaders[index];
                return loader.exists(name, from).then((exists) => {
                    this.hasSourceCache.set(name, exists);
                    if (!exists) {
                        return existsAtIndex(index + 1);
                    }
                    else {
                        return true;
                    }
                });
            }
            else {
                return Promise.resolve(null);
            }
        };
        return existsAtIndex(0).then((exists) => {
            this.hasSourceCache.set(name, exists);
            return exists;
        });
    }
    getCacheKey(name, from) {
        let exceptions = [];
        let getCacheKeyAtIndex = (index) => {
            if (index < this.loaders.length) {
                let loader = this.loaders[index];
                return loader.exists(name, from).then((exists) => {
                    if (!exists) {
                        return getCacheKeyAtIndex(index + 1);
                    }
                    else {
                        return loader.getCacheKey(name, from)
                            .catch((e) => {
                            if (e instanceof TwingErrorLoader) {
                                exceptions.push(loader.constructor.name + ': ' + e.message);
                            }
                            return getCacheKeyAtIndex(index + 1);
                        });
                    }
                });
            }
            else {
                return Promise.resolve(null);
            }
        };
        return getCacheKeyAtIndex(0).then((key) => {
            if (key) {
                return key;
            }
            else {
                throw new TwingErrorLoader(`Template "${name}" is not defined${exceptions.length ? ' (' + exceptions.join(', ') + ')' : ''}.`, -1, from);
            }
        });
    }
    isFresh(name, time, from) {
        let exceptions = [];
        let isFreshAtIndex = (index) => {
            if (index < this.loaders.length) {
                let loader = this.loaders[index];
                return loader.exists(name, from).then((exists) => {
                    if (!exists) {
                        return isFreshAtIndex(index + 1);
                    }
                    else {
                        return loader.isFresh(name, time, from)
                            .catch((e) => {
                            if (e instanceof TwingErrorLoader) {
                                exceptions.push(loader.constructor.name + ': ' + e.message);
                            }
                            return isFreshAtIndex(index + 1);
                        });
                    }
                });
            }
            else {
                return Promise.resolve(null);
            }
        };
        return isFreshAtIndex(0).then((fresh) => {
            if (fresh !== null) {
                return fresh;
            }
            else {
                throw new TwingErrorLoader(`Template "${name}" is not defined${exceptions.length ? ' (' + exceptions.join(', ') + ')' : ''}.`, -1, from);
            }
        });
    }
    resolve(name, from, shouldThrow = true) {
        let exceptions = [];
        let resolveAtIndex = (index) => {
            if (index < this.loaders.length) {
                let loader = this.loaders[index];
                return loader.resolve(name, from, true).catch((e) => {
                    if (e instanceof TwingErrorLoader) {
                        exceptions.push(loader.constructor.name + ': ' + e.message);
                    }
                    return resolveAtIndex(index + 1);
                });
            }
            else {
                return Promise.resolve(null);
            }
        };
        return resolveAtIndex(0).then((resolvedName) => {
            if (resolvedName) {
                return resolvedName;
            }
            else {
                if (shouldThrow) {
                    throw new TwingErrorLoader(`Template "${name}" is not defined${exceptions.length ? ' (' + exceptions.join(', ') + ')' : ''}.`, -1, from);
                }
                else {
                    return null;
                }
            }
        });
    }
}
