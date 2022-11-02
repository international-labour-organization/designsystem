import { TwingLoaderInterface } from "../loader-interface";
import { TwingSource } from "../source";
/**
 * Loads template from the filesystem.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export declare class TwingLoaderFilesystem implements TwingLoaderInterface {
    /** Identifier of the main namespace. */
    static MAIN_NAMESPACE: string;
    protected paths: Map<string, Array<string>>;
    protected cache: Map<string, string>;
    protected errorCache: Map<string, string>;
    private readonly rootPath;
    /**
     * @param {string | Array<string>} paths A path or a map of paths where to look for templates
     * @param {string} rootPath The root path common to all relative paths (null for process.cwd())
     */
    constructor(paths?: string | Array<string>, rootPath?: string);
    /**
     * Returns the paths to the templates.
     *
     * @param {string} namespace A path namespace
     *
     * @returns Array<string> The array of paths where to look for templates
     */
    getPaths(namespace?: string): Array<string>;
    /**
     * Returns the path namespaces.
     *
     * The main namespace is always defined.
     *
     * @returns Array<string> The array of defined namespaces
     */
    getNamespaces(): Array<string>;
    /**
     * Sets the paths where templates are stored.
     *
     * @param {string|Array<string>} paths A path or an array of paths where to look for templates
     * @param {string} namespace A path namespace
     */
    setPaths(paths: string | Array<string>, namespace?: string): void;
    /**
     * Adds a path where templates are stored.
     *
     * @param {string} path A path where to look for templates
     * @param {string} namespace A path namespace
     *
     * @throws TwingErrorLoader
     */
    addPath(path: string, namespace?: string): void;
    /**
     * Prepends a path where templates are stored.
     *
     * @param {string} path A path where to look for templates
     * @param {string} namespace A path namespace
     *
     * @throws TwingErrorLoader
     */
    prependPath(path: string, namespace?: string): void;
    getSourceContext(name: string, from: TwingSource): Promise<TwingSource>;
    getCacheKey(name: string, from: TwingSource): Promise<string>;
    exists(name: string, from: TwingSource): Promise<boolean>;
    isFresh(name: string, time: number, from: TwingSource): Promise<boolean>;
    protected findTemplate(name: string, throw_: boolean, from: TwingSource): Promise<string>;
    protected normalizeName(name: string): string;
    protected parseName(name: string, default_?: string): string[];
    protected validateName(name: string): void;
    protected isAbsolutePath(file: string): boolean;
    resolve(name: string, from: TwingSource, shouldThrow?: boolean): Promise<string>;
}
