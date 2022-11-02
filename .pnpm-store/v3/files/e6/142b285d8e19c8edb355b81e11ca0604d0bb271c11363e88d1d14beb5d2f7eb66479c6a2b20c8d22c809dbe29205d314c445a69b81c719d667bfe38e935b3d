"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constant = void 0;
function constant(template, name, object = null) {
    let candidate;
    if (object) {
        candidate = object;
    }
    else {
        candidate = template.environment;
    }
    return candidate.constructor[name];
}
exports.constant = constant;
