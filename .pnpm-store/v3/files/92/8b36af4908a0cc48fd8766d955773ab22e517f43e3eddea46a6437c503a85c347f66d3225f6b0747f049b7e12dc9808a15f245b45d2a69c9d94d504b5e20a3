import { TwingSource } from "./source";
/**
 * Twing base error.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export declare class TwingError extends Error {
    private lineno;
    private rawMessage;
    private source;
    private previous;
    protected type: string;
    constructor(message: string, lineno?: number, source?: TwingSource, previous?: Error);
    getMessage(): string;
    /**
     * Gets the raw message.
     *
     * @return string The raw message
     */
    getRawMessage(): string;
    /**
     * Gets the template line where the error occurred.
     *
     * @return int The template line
     */
    getTemplateLine(): number | boolean;
    /**
     * Sets the template line where the error occurred.
     *
     * @param {number} lineno The template line
     */
    setTemplateLine(lineno: number | boolean): void;
    /**
     * Gets the source context of the Twig template where the error occurred.
     *
     * @return {TwingSource}
     */
    getSourceContext(): TwingSource;
    /**
     * Sets the source context of the Twig template where the error occurred.
     */
    setSourceContext(source: TwingSource): void;
    appendMessage(rawMessage: string): void;
    private updateRepr;
}
