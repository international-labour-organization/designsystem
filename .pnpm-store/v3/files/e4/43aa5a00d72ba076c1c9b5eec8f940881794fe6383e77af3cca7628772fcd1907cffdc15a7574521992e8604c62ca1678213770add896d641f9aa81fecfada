import { TwingSandboxSecurityError } from "./security-error";
import { TwingSource } from "../source";
/**
 * Exception thrown when a not allowed filter is used in a template.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export declare class TwingSandboxSecurityNotAllowedFilterError extends TwingSandboxSecurityError {
    private readonly filterName;
    constructor(message: string, filterName: string, lineno?: number, source?: TwingSource);
    getFilterName(): string;
}
