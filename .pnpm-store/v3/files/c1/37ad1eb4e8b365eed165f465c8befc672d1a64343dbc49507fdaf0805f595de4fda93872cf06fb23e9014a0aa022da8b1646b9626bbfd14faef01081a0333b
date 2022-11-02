"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingErrorLoader = void 0;
const error_1 = require("../error");
/**
 * Exception thrown when an error occurs during template loading.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
class TwingErrorLoader extends error_1.TwingError {
    constructor(message, lineno, source) {
        super('', lineno, source);
        this.appendMessage(message);
        this.name = 'TwingErrorLoader';
    }
}
exports.TwingErrorLoader = TwingErrorLoader;
