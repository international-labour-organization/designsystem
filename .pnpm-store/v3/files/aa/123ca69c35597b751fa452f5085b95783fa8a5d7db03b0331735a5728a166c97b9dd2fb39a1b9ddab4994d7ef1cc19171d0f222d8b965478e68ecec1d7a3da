"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var get_result_map_1 = tslib_1.__importDefault(require("../util/get-result-map"));
var async_1 = require("./async");
var run_static_task_1 = require("./run-static-task");
var run_timed_task_1 = require("./run-timed-task");
function runGroup(_a) {
    var group = _a.group, getElement = _a.getElement, samples = _a.samples;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var staticResults, timedResults, interactionResults, results;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, async_1.asyncMap({
                        source: group.tasks.filter(function (task) { return task.type === 'static'; }),
                        map: function map(task) {
                            return tslib_1.__awaiter(this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    return [2, run_static_task_1.getResultForStaticTask({
                                            task: task,
                                            getElement: getElement,
                                        })];
                                });
                            });
                        },
                    })];
                case 1:
                    staticResults = _b.sent();
                    return [4, async_1.asyncMap({
                            source: group.tasks.filter(function (task) { return task.type === 'timed'; }),
                            map: function map(task) {
                                return tslib_1.__awaiter(this, void 0, void 0, function () {
                                    return tslib_1.__generator(this, function (_a) {
                                        return [2, run_timed_task_1.getResultForTimedTask({
                                                task: task,
                                                getElement: getElement,
                                                samples: samples,
                                            })];
                                    });
                                });
                            },
                        })];
                case 2:
                    timedResults = _b.sent();
                    return [4, async_1.asyncMap({
                            source: group.tasks.filter(function (task) { return task.type === 'interaction'; }),
                            map: function map(task) {
                                return tslib_1.__awaiter(this, void 0, void 0, function () {
                                    return tslib_1.__generator(this, function (_a) {
                                        return [2, run_timed_task_1.getResultForTimedTask({
                                                task: task,
                                                getElement: getElement,
                                                samples: samples,
                                            })];
                                    });
                                });
                            },
                        })];
                case 3:
                    interactionResults = _b.sent();
                    results = {
                        groupId: group.groupId,
                        map: get_result_map_1.default(tslib_1.__spread(timedResults, staticResults, interactionResults)),
                    };
                    return [2, results];
            }
        });
    });
}
exports.default = runGroup;
