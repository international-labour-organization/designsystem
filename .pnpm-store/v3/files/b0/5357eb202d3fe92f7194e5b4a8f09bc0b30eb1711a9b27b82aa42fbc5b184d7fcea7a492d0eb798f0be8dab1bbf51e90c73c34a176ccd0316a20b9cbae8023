import { TwingCacheInterface } from "../cache-interface";
import { TwingTemplatesModule } from "../environment";
/**
 * Implements a no-cache strategy.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export declare class TwingCacheNull implements TwingCacheInterface {
    generateKey(name: string, className: string): Promise<string>;
    write(key: string, content: string): Promise<void>;
    load(key: string): Promise<TwingTemplatesModule>;
    getTimestamp(key: string): Promise<number>;
}
