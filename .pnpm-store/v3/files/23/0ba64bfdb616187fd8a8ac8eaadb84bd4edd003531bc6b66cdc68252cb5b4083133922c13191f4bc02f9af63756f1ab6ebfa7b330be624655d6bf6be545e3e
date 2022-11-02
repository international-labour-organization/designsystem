"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var custom_errors_1 = require("./custom-errors");
function getErrorResult(_a) {
    var task = _a.task, error = _a.error;
    if (error instanceof custom_errors_1.UnsupportedError) {
        return {
            type: 'error',
            taskName: task.name,
            reason: 'unsupported',
            message: error.message,
        };
    }
    return {
        type: 'error',
        taskName: task.name,
        reason: 'unhandled',
        message: null,
    };
}
exports.default = getErrorResult;
