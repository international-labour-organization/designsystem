"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingSandboxSecurityNotAllowedFilterError = void 0;
const security_error_1 = require("./security-error");
/**
 * Exception thrown when a not allowed filter is used in a template.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
class TwingSandboxSecurityNotAllowedFilterError extends security_error_1.TwingSandboxSecurityError {
    constructor(message, filterName, lineno = -1, source = null) {
        super(message, lineno, source);
        this.filterName = filterName;
        this.name = 'TwingSandboxSecurityNotAllowedFilterError';
    }
    getFilterName() {
        return this.filterName;
    }
}
exports.TwingSandboxSecurityNotAllowedFilterError = TwingSandboxSecurityNotAllowedFilterError;
