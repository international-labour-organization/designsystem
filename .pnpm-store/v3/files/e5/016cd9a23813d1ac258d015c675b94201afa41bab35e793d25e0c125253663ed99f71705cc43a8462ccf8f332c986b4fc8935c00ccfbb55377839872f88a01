import { TwingError } from "../error";
import { TwingSource } from "../source";
export declare class TwingErrorSyntax extends TwingError {
    constructor(message: string, lineno?: number, source?: TwingSource, previous?: Error);
    /**
     * Tweaks the error message to include suggestions.
     *
     * @param {string} name The original name of the item that does not exist
     * @param {Array<string>} items An array of possible items
     */
    addSuggestions(name: string, items: string[]): void;
}
