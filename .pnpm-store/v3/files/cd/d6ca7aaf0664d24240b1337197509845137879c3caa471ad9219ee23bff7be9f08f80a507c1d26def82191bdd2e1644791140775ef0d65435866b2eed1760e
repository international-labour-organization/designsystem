import { TwingSource } from "../source";
import { TwingErrorLoader } from "../error/loader";
import { stat, statSync, readFile } from "fs";
import { relative as relativePath, resolve as resolvePath, join as joinPath, sep as pathSeparator, isAbsolute as isAbsolutePath } from "path";
const rtrim = require('locutus/php/strings/rtrim');
/**
 * Loads template from the filesystem.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export class TwingLoaderFilesystem {
    /**
     * @param {string | Array<string>} paths A path or a map of paths where to look for templates
     * @param {string} rootPath The root path common to all relative paths (null for process.cwd())
     */
    constructor(paths = [], rootPath = null) {
        this.paths = new Map();
        this.cache = new Map();
        this.errorCache = new Map();
        rootPath = (rootPath === null ? process.cwd() : rootPath);
        this.rootPath = resolvePath(rootPath);
        this.setPaths(paths);
    }
    /**
     * Returns the paths to the templates.
     *
     * @param {string} namespace A path namespace
     *
     * @returns Array<string> The array of paths where to look for templates
     */
    getPaths(namespace = TwingLoaderFilesystem.MAIN_NAMESPACE) {
        return this.paths.has(namespace) ? this.paths.get(namespace) : [];
    }
    /**
     * Returns the path namespaces.
     *
     * The main namespace is always defined.
     *
     * @returns Array<string> The array of defined namespaces
     */
    getNamespaces() {
        return [...this.paths.keys()];
    }
    /**
     * Sets the paths where templates are stored.
     *
     * @param {string|Array<string>} paths A path or an array of paths where to look for templates
     * @param {string} namespace A path namespace
     */
    setPaths(paths, namespace = TwingLoaderFilesystem.MAIN_NAMESPACE) {
        if (!Array.isArray(paths)) {
            paths = [paths];
        }
        this.paths.set(namespace, []);
        for (let path of paths) {
            this.addPath(path, namespace);
        }
    }
    /**
     * Adds a path where templates are stored.
     *
     * @param {string} path A path where to look for templates
     * @param {string} namespace A path namespace
     *
     * @throws TwingErrorLoader
     */
    addPath(path, namespace = TwingLoaderFilesystem.MAIN_NAMESPACE) {
        // invalidate the cache
        this.cache = new Map();
        this.errorCache = new Map();
        let checkPath = this.isAbsolutePath(path) ? path : joinPath(this.rootPath, path);
        let stats;
        try {
            stats = statSync(this.normalizeName(checkPath));
        }
        catch (err) {
            // noop, we just want to handle the error
        }
        if (!stats || !stats.isDirectory()) {
            throw new TwingErrorLoader(`The "${path}" directory does not exist ("${checkPath}").`, -1, null);
        }
        if (!this.paths.has(namespace)) {
            this.paths.set(namespace, []);
        }
        this.paths.get(namespace).push(rtrim(path, '\/\\\\'));
    }
    /**
     * Prepends a path where templates are stored.
     *
     * @param {string} path A path where to look for templates
     * @param {string} namespace A path namespace
     *
     * @throws TwingErrorLoader
     */
    prependPath(path, namespace = TwingLoaderFilesystem.MAIN_NAMESPACE) {
        // invalidate the cache
        this.cache = new Map();
        this.errorCache = new Map();
        let checkPath = this.isAbsolutePath(path) ? path : joinPath(this.rootPath, path);
        let stats = statSync(this.normalizeName(checkPath));
        if (!stats.isDirectory()) {
            throw new TwingErrorLoader(`The "${path}" directory does not exist ("${checkPath}").`, -1, null);
        }
        path = rtrim(path, '\/\\\\');
        if (!this.paths.has(namespace)) {
            this.paths.set(namespace, [path]);
        }
        else {
            this.paths.get(namespace).unshift(path);
        }
    }
    getSourceContext(name, from) {
        return this.findTemplate(name, true, from).then((path) => {
            return new Promise((resolve) => {
                readFile(path, 'UTF-8', (err, data) => {
                    resolve(new TwingSource(data, name, path));
                });
            });
        });
    }
    getCacheKey(name, from) {
        return this.findTemplate(name, true, from).then((path) => {
            return relativePath(this.rootPath, path);
        });
    }
    exists(name, from) {
        name = this.normalizeName(name);
        if (this.cache.has(name)) {
            return Promise.resolve(true);
        }
        return this.findTemplate(name, false, from).then((path) => {
            return path !== null;
        });
    }
    isFresh(name, time, from) {
        return this.findTemplate(name, true, from).then((path) => {
            return new Promise((resolve) => {
                stat(path, (err, stats) => {
                    resolve(stats.mtime.getTime() < time);
                });
            });
        });
    }
    findTemplate(name, throw_, from) {
        name = this.normalizeName(name);
        if (this.cache.has(name)) {
            return Promise.resolve(this.cache.get(name));
        }
        if (this.errorCache.has(name)) {
            if (!throw_) {
                return Promise.resolve(null);
            }
            return Promise.reject(new TwingErrorLoader(this.errorCache.get(name), -1, from));
        }
        let namespace;
        let shortname;
        try {
            this.validateName(name);
            [namespace, shortname] = this.parseName(name);
        }
        catch (e) {
            if (!throw_) {
                return Promise.resolve(null);
            }
            return Promise.reject(e);
        }
        if (!this.paths.has(namespace)) {
            this.errorCache.set(name, `There are no registered paths for namespace "${namespace}".`);
            if (!throw_) {
                return Promise.resolve(null);
            }
            return Promise.reject(new TwingErrorLoader(this.errorCache.get(name), -1, from));
        }
        let paths = this.paths.get(namespace);
        let findTemplateInPathAtIndex = (index) => {
            if (index < paths.length) {
                let path = paths[index];
                if (!this.isAbsolutePath(path)) {
                    path = joinPath(this.rootPath, path);
                }
                return new Promise((resolve) => {
                    stat(joinPath(path, shortname), (err, stats) => {
                        if (stats && stats.isFile()) {
                            this.cache.set(name, resolvePath(joinPath(path, shortname)));
                            resolve(this.cache.get(name));
                        }
                        else {
                            // let's continue searching
                            resolve(findTemplateInPathAtIndex(index + 1));
                        }
                    });
                });
            }
            else {
                return Promise.resolve(null);
            }
        };
        return findTemplateInPathAtIndex(0).then((foundName) => {
            if (foundName) {
                return foundName;
            }
            else {
                this.errorCache.set(name, `Unable to find template "${name}" (looked into: ${this.paths.get(namespace)}).`);
                if (!throw_) {
                    return null;
                }
                return Promise.reject(new TwingErrorLoader(this.errorCache.get(name), -1, from));
            }
        });
    }
    normalizeName(name) {
        if (name === null) {
            return '';
        }
        return name.replace(/\\/g, '/').replace(/\/{2,}/g, '/');
    }
    parseName(name, default_ = TwingLoaderFilesystem.MAIN_NAMESPACE) {
        if (name[0] === '@') {
            let pos = name.indexOf('/');
            if (pos < 0) {
                throw new TwingErrorLoader(`Malformed namespaced template name "${name}" (expecting "@namespace/template_name").`, -1, null);
            }
            let namespace = name.substr(1, pos - 1);
            let shortname = name.substr(pos + 1);
            return [namespace, shortname];
        }
        return [default_, name];
    }
    validateName(name) {
        if (name.indexOf(`\0`) > -1) {
            throw new TwingErrorLoader('A template name cannot contain NUL bytes.', -1, null);
        }
        let parts = name.split(pathSeparator);
        let level = 0;
        for (let part of parts) {
            if (part === '..') {
                level--;
            }
            else if (part !== '.') {
                level++;
            }
        }
        if (level < 0) {
            throw new TwingErrorLoader(`Looks like you try to load a template outside configured directories (${name}).`, -1, null);
        }
    }
    isAbsolutePath(file) {
        return isAbsolutePath(file);
    }
    resolve(name, from, shouldThrow = false) {
        return this.findTemplate(name, shouldThrow, from);
    }
}
/** Identifier of the main namespace. */
TwingLoaderFilesystem.MAIN_NAMESPACE = '__main__';
