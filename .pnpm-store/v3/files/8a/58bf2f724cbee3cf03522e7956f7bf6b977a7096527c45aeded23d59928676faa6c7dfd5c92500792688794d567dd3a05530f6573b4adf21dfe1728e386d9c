import { TwingSandboxSecurityError } from "./security-error";
/**
 * Exception thrown when a not allowed filter is used in a template.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export class TwingSandboxSecurityNotAllowedFilterError extends TwingSandboxSecurityError {
    constructor(message, filterName, lineno = -1, source = null) {
        super(message, lineno, source);
        this.filterName = filterName;
        this.name = 'TwingSandboxSecurityNotAllowedFilterError';
    }
    getFilterName() {
        return this.filterName;
    }
}
