import { TwingSandboxSecurityError } from "./security-error";
export class TwingSandboxSecurityNotAllowedTagError extends TwingSandboxSecurityError {
    constructor(message, tagName, lineno = -1, source = null) {
        super(message, lineno, source);
        this.tagName = tagName;
        this.name = 'TwingSandboxSecurityNotAllowedTagError';
    }
    getTagName() {
        return this.tagName;
    }
}
