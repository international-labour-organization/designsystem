import { TwingCacheInterface } from "../cache-interface";
import { TwingTemplatesModule } from "../environment";
/**
 * Implements a cache on the filesystem.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export declare class TwingCacheFilesystem implements TwingCacheInterface {
    private directory;
    /**
     * @param {string} directory The root cache directory
     */
    constructor(directory: string);
    generateKey(name: string, className: string): Promise<string>;
    load(key: string): Promise<TwingTemplatesModule>;
    write(key: string, content: string): Promise<void>;
    getTimestamp(key: string): Promise<number>;
}
