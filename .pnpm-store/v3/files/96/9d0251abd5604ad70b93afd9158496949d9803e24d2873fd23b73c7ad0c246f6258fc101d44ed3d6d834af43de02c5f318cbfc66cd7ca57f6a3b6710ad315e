"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingSandboxSecurityNotAllowedFunctionError = void 0;
const security_error_1 = require("./security-error");
class TwingSandboxSecurityNotAllowedFunctionError extends security_error_1.TwingSandboxSecurityError {
    constructor(message, functionName, lineno = -1, source = null) {
        super(message, lineno, source);
        this.functionName = functionName;
        this.name = 'TwingSandboxSecurityNotAllowedFunctionError';
    }
    getFunctionName() {
        return this.functionName;
    }
}
exports.TwingSandboxSecurityNotAllowedFunctionError = TwingSandboxSecurityNotAllowedFunctionError;
