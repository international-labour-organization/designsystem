"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runOneStatic = exports.runOneTimed = exports.runAll = void 0;
var tslib_1 = require("tslib");
var to_safe_element_1 = tslib_1.__importDefault(require("./to-safe-element"));
var run_group_1 = tslib_1.__importDefault(require("./run-group"));
var run_static_task_1 = require("./run-static-task");
var run_timed_task_1 = require("./run-timed-task");
function runAll(_a) {
    var groups = _a.groups, getNode = _a.getNode, samples = _a.samples, copies = _a.copies;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var value, groups_1, groups_1_1, group, results, e_1_1;
        var e_1, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    value = [];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 6, 7, 8]);
                    groups_1 = tslib_1.__values(groups), groups_1_1 = groups_1.next();
                    _c.label = 2;
                case 2:
                    if (!!groups_1_1.done) return [3, 5];
                    group = groups_1_1.value;
                    return [4, run_group_1.default({
                            group: group,
                            getElement: function () { return to_safe_element_1.default({ getNode: getNode, copies: copies }); },
                            samples: samples,
                        })];
                case 3:
                    results = _c.sent();
                    value.push(results);
                    _c.label = 4;
                case 4:
                    groups_1_1 = groups_1.next();
                    return [3, 2];
                case 5: return [3, 8];
                case 6:
                    e_1_1 = _c.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 8];
                case 7:
                    try {
                        if (groups_1_1 && !groups_1_1.done && (_b = groups_1.return)) _b.call(groups_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 8: return [2, value];
            }
        });
    });
}
exports.runAll = runAll;
function runOneTimed(_a) {
    var task = _a.task, getNode = _a.getNode, copies = _a.copies, samples = _a.samples;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var result;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, run_timed_task_1.getResultForTimedTask({
                        task: task,
                        getElement: function () { return to_safe_element_1.default({ getNode: getNode, copies: copies }); },
                        samples: samples,
                    })];
                case 1:
                    result = _b.sent();
                    return [2, result];
            }
        });
    });
}
exports.runOneTimed = runOneTimed;
function runOneStatic(_a) {
    var task = _a.task, getNode = _a.getNode, copies = _a.copies;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_b) {
            return [2, run_static_task_1.getResultForStaticTask({
                    task: task,
                    getElement: function () { return to_safe_element_1.default({ getNode: getNode, copies: copies }); },
                })];
        });
    });
}
exports.runOneStatic = runOneStatic;
