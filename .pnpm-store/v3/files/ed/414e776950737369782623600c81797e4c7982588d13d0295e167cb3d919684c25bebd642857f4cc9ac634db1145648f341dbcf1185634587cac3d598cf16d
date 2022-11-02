"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResultForTimedTask = void 0;
var tslib_1 = require("tslib");
var async_1 = require("./async");
var get_error_result_1 = tslib_1.__importDefault(require("./get-error-result"));
var mark_1 = tslib_1.__importDefault(require("./mark"));
var print_error_1 = tslib_1.__importDefault(require("./print-error"));
var run_interaction_task_1 = tslib_1.__importDefault(require("./run-interaction-task"));
var with_container_1 = tslib_1.__importDefault(require("./with-container"));
var with_duration_1 = tslib_1.__importDefault(require("./with-duration"));
function getAverage(values) {
    return values.reduce(function (total, current) { return total + current; }, 0) / values.length;
}
function getStandardDeviation(average, values) {
    var squaredDifferences = values.map(function (value) { return Math.pow((value - average), 2); });
    var squareDifferenceAverage = getAverage(squaredDifferences);
    return Math.sqrt(squareDifferenceAverage);
}
function getDifferenceFrom(relativeTo, target) {
    var diff = Math.abs(target - relativeTo);
    return (diff / relativeTo) * 100;
}
function getUpperAndLower(average, values) {
    var ordered = tslib_1.__spread(values).sort(function (a, b) { return a - b; });
    var lowest = ordered[0];
    var highest = ordered[ordered.length - 1];
    return {
        lowerPercentage: getDifferenceFrom(average, lowest),
        upperPercentage: getDifferenceFrom(average, highest),
    };
}
function runTimedTask(_a) {
    var task = _a.task, getElement = _a.getElement;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_b) {
            return [2, with_container_1.default(function (container) {
                    return mark_1.default(task.name, function () {
                        return with_duration_1.default(function (controls) { return task.run({ controls: controls, container: container, getElement: getElement }); });
                    });
                })];
        });
    });
}
function getResultForTimedTask(_a) {
    var task = _a.task, getElement = _a.getElement, samples = _a.samples;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var durations, average, _b, upperPercentage, lowerPercentage, standardDeviation, result, error_1;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4, async_1.asyncMap({
                            source: Array.from({ length: samples }),
                            map: function map() {
                                return tslib_1.__awaiter(this, void 0, void 0, function () {
                                    return tslib_1.__generator(this, function (_a) {
                                        if (task.type === 'timed') {
                                            return [2, runTimedTask({
                                                    task: task,
                                                    getElement: getElement,
                                                })];
                                        }
                                        return [2, run_interaction_task_1.default({
                                                task: task,
                                                getElement: getElement,
                                            })];
                                    });
                                });
                            },
                        })];
                case 1:
                    durations = _c.sent();
                    average = getAverage(durations);
                    _b = getUpperAndLower(average, durations), upperPercentage = _b.upperPercentage, lowerPercentage = _b.lowerPercentage;
                    standardDeviation = getStandardDeviation(average, durations);
                    result = {
                        type: 'timed',
                        taskName: task.name,
                        averageMs: average,
                        samples: samples,
                        variance: {
                            upperPercentage: upperPercentage,
                            lowerPercentage: lowerPercentage,
                            standardDeviation: standardDeviation,
                        },
                    };
                    return [2, result];
                case 2:
                    error_1 = _c.sent();
                    print_error_1.default({ task: task, error: error_1 });
                    return [2, get_error_result_1.default({ task: task, error: error_1 })];
                case 3: return [2];
            }
        });
    });
}
exports.getResultForTimedTask = getResultForTimedTask;
