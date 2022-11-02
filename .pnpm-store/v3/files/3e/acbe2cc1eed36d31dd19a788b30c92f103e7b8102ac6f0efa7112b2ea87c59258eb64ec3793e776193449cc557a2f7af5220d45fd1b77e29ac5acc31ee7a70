"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printError(_a) {
    var task = _a.task, error = _a.error;
    if (process.env.NODE_ENV === 'test') {
        return;
    }
    console.group("\uD83D\uDE80\u274C Error in task: (" + task.name + ")");
    console.error(error);
    console.groupEnd();
}
exports.default = printError;
