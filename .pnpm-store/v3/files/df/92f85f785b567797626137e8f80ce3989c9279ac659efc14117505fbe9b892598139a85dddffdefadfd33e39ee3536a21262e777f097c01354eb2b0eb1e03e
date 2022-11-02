import { TwingLoaderInterface } from "../loader-interface";
import { TwingSource } from "../source";
/**
 * Loads templates from other loaders.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export declare class TwingLoaderChain implements TwingLoaderInterface {
    private hasSourceCache;
    private loaders;
    /**
     * @param {Array<TwingLoaderInterface>} loaders
     */
    constructor(loaders?: Array<TwingLoaderInterface>);
    addLoader(loader: TwingLoaderInterface): void;
    /**
     * @return TwingLoaderInterface[]
     */
    getLoaders(): TwingLoaderInterface[];
    getSourceContext(name: string, from: TwingSource): Promise<TwingSource>;
    exists(name: string, from: TwingSource): Promise<boolean>;
    getCacheKey(name: string, from: TwingSource): Promise<string>;
    isFresh(name: string, time: number, from: TwingSource): Promise<boolean>;
    resolve(name: string, from: TwingSource, shouldThrow?: boolean): Promise<string>;
}
