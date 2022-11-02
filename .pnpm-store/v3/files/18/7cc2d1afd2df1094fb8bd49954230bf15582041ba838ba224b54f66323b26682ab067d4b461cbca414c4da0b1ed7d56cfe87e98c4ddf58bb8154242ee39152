import { TwingLoaderInterface } from "../loader-interface";
import { TwingSource } from "../source";
/**
 * Noop implementation of TwingLoaderInterface.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export declare class TwingLoaderNull implements TwingLoaderInterface {
    exists(name: string, from: TwingSource): Promise<boolean>;
    getCacheKey(name: string, from: TwingSource): Promise<string>;
    getSourceContext(name: string, from: TwingSource): Promise<TwingSource>;
    isFresh(name: string, time: number, from: TwingSource): Promise<boolean>;
    resolve(name: string, from: TwingSource): Promise<string>;
}
