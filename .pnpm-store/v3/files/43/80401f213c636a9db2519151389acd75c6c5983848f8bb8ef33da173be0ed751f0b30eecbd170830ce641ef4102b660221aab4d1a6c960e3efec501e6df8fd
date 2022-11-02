"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResultForStaticTask = void 0;
var tslib_1 = require("tslib");
var get_error_result_1 = tslib_1.__importDefault(require("./get-error-result"));
var print_error_1 = tslib_1.__importDefault(require("./print-error"));
var mark_1 = tslib_1.__importDefault(require("./mark"));
var with_container_1 = tslib_1.__importDefault(require("./with-container"));
function runStaticTask(_a) {
    var task = _a.task, getElement = _a.getElement;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _this = this;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, with_container_1.default(function (container) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, mark_1.default(task.name, function () { return task.run({ getElement: getElement, container: container }); })];
                                case 1: return [2, _a.sent()];
                            }
                        });
                    }); })];
                case 1: return [2, _b.sent()];
            }
        });
    });
}
function getResultForStaticTask(_a) {
    var task = _a.task, getElement = _a.getElement;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var value, result, error_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4, runStaticTask({ task: task, getElement: getElement })];
                case 1:
                    value = _b.sent();
                    result = {
                        type: 'static',
                        taskName: task.name,
                        value: value,
                    };
                    return [2, result];
                case 2:
                    error_1 = _b.sent();
                    print_error_1.default({ task: task, error: error_1 });
                    return [2, get_error_result_1.default({ task: task, error: error_1 })];
                case 3: return [2];
            }
        });
    });
}
exports.getResultForStaticTask = getResultForStaticTask;
