"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingCacheFilesystem = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
let { tmpName } = require('tmp');
const sha256 = require('crypto-js/sha256');
const hex = require('crypto-js/enc-hex');
/**
 * Implements a cache on the filesystem.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
class TwingCacheFilesystem {
    /**
     * @param {string} directory The root cache directory
     */
    constructor(directory) {
        this.directory = directory;
    }
    generateKey(name, className) {
        let hash = hex.stringify(sha256(className));
        return Promise.resolve(path_1.join(this.directory, hash[0] + hash[1], hash + '.js'));
    }
    load(key) {
        let modulePath = path_1.resolve(key);
        return new Promise((resolve) => {
            fs_1.stat(modulePath, (err) => {
                if (err) {
                    resolve(() => new Map);
                }
                else {
                    let cache = require.cache;
                    delete cache[modulePath];
                    resolve(require(modulePath));
                }
            });
        });
    }
    write(key, content) {
        let directory = path_1.dirname(key);
        return fs_extra_1.ensureDir(directory).then(() => {
            return new Promise((resolve, reject) => {
                tmpName({
                    dir: directory,
                    postfix: path_1.extname(key)
                }, (err, tmpFile) => {
                    fs_1.writeFile(tmpFile, content, (err) => {
                        let error = new Error(`Failed to write cache file "${key}".`);
                        if (err) {
                            reject(error);
                        }
                        else {
                            fs_1.rename(tmpFile, key, (err) => {
                                if (err) {
                                    fs_1.unlink(tmpFile, () => {
                                        reject(error);
                                    });
                                }
                                else {
                                    resolve();
                                }
                            });
                        }
                    });
                });
            });
        });
    }
    getTimestamp(key) {
        return new Promise((resolve) => {
            fs_1.stat(key, (err, stats) => {
                if (err) {
                    resolve(0);
                }
                else {
                    resolve(stats.mtimeMs);
                }
            });
        });
    }
}
exports.TwingCacheFilesystem = TwingCacheFilesystem;
