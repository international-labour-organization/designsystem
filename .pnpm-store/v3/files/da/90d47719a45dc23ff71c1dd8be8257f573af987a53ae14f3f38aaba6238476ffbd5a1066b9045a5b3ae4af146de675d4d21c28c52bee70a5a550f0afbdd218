import { TwingSandboxSecurityError } from "./security-error";
export class TwingSandboxSecurityNotAllowedFunctionError extends TwingSandboxSecurityError {
    constructor(message, functionName, lineno = -1, source = null) {
        super(message, lineno, source);
        this.functionName = functionName;
        this.name = 'TwingSandboxSecurityNotAllowedFunctionError';
    }
    getFunctionName() {
        return this.functionName;
    }
}
