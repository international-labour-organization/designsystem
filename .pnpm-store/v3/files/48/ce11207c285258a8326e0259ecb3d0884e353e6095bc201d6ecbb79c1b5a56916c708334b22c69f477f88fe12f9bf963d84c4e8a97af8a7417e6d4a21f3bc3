import { TwingError } from "../error";
/**
 * Exception thrown when an error occurs during template loading.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export class TwingErrorLoader extends TwingError {
    constructor(message, lineno, source) {
        super('', lineno, source);
        this.appendMessage(message);
        this.name = 'TwingErrorLoader';
    }
}
