import { TwingSource } from "../source";
import { TwingLoaderInterface } from "../loader-interface";
/**
 * Loads template from the filesystem relatively to the template that initiated the load.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export declare class TwingLoaderRelativeFilesystem implements TwingLoaderInterface {
    protected cache: Map<string, string>;
    protected errorCache: Map<string, string>;
    getSourceContext(name: string, from: TwingSource): Promise<TwingSource>;
    getCacheKey(name: string, from: TwingSource): Promise<string>;
    exists(name: string, from: TwingSource): Promise<boolean>;
    isFresh(name: string, time: number, from: TwingSource): Promise<boolean>;
    /**
     * Checks if the template can be found.
     *
     * @param {string} name  The template name
     * @param {boolean} throw_ Whether to throw an exception when an error occurs
     * @param {TwingSource} from The source that initiated the template loading
     *
     * @returns {Promise<string>} The template name or null
     */
    protected findTemplate(name: string, throw_?: boolean, from?: TwingSource): Promise<string>;
    protected normalizeName(name: string): string;
    protected validateName(name: string, from: TwingSource): void;
    resolve(name: string, from: TwingSource, shouldThrow?: boolean): Promise<string>;
    private resolvePath;
}
