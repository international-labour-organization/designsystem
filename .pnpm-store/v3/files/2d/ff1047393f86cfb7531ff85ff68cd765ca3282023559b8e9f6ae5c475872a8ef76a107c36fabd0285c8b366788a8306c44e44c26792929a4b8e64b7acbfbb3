"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingSandboxSecurityNotAllowedTagError = void 0;
const security_error_1 = require("./security-error");
class TwingSandboxSecurityNotAllowedTagError extends security_error_1.TwingSandboxSecurityError {
    constructor(message, tagName, lineno = -1, source = null) {
        super(message, lineno, source);
        this.tagName = tagName;
        this.name = 'TwingSandboxSecurityNotAllowedTagError';
    }
    getTagName() {
        return this.tagName;
    }
}
exports.TwingSandboxSecurityNotAllowedTagError = TwingSandboxSecurityNotAllowedTagError;
