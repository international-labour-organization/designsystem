import { TwingLoaderInterface } from "../loader-interface";
import { TwingSource } from "../source";
/**
 * Loads template from the filesystem.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export declare class TwingLoaderArray implements TwingLoaderInterface {
    private templates;
    constructor(templates: any);
    setTemplate(name: string, template: string): void;
    getSourceContext(name: string, from: TwingSource): Promise<TwingSource>;
    exists(name: string, from: TwingSource): Promise<boolean>;
    getCacheKey(name: string, from: TwingSource): Promise<string>;
    isFresh(name: string, time: number, from: TwingSource): Promise<boolean>;
    resolve(name: string, from: TwingSource): Promise<string>;
}
