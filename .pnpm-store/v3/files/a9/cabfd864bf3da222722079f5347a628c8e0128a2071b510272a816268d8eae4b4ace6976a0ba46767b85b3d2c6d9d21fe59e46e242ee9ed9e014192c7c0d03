"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var tiny_invariant_1 = tslib_1.__importDefault(require("tiny-invariant"));
var error_result_1 = tslib_1.__importDefault(require("./error-result"));
var static_result_1 = tslib_1.__importDefault(require("./static-result"));
var timed_result_1 = tslib_1.__importDefault(require("./timed-result"));
function TaskResult(_a) {
    var task = _a.task, result = _a.result, pinned = _a.pinned;
    if (result == null) {
        return null;
    }
    if (result.type === 'error') {
        return react_1.default.createElement(error_result_1.default, { key: task.name, task: task, result: result });
    }
    if (result.type === 'static') {
        tiny_invariant_1.default(task.type === 'static', "Unexpected task type: " + task.type);
        var pin = pinned && pinned.type === 'static' ? pinned : null;
        return react_1.default.createElement(static_result_1.default, { key: task.name, task: task, result: result, pinned: pin });
    }
    if (result.type === 'timed') {
        tiny_invariant_1.default(task.type === 'timed' || task.type === 'interaction', "Unexpected task type: " + task.type);
        var pin = pinned && pinned.type === 'timed' ? pinned : null;
        return react_1.default.createElement(timed_result_1.default, { key: task.name, task: task, result: result, pinned: pin });
    }
    console.error('Incorrect data passed to TaskResult', { result: result, task: task, pinned: pinned });
    return null;
}
exports.default = TaskResult;
