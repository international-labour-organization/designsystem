"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tiny_invariant_1 = tslib_1.__importDefault(require("tiny-invariant"));
function getDuration(fn) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var start, finish;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    start = performance.now();
                    return [4, fn()];
                case 1:
                    _a.sent();
                    finish = performance.now();
                    return [2, finish - start];
            }
        });
    });
}
function withDuration(fn) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var timedDuration, isControlled, controls, wholeTaskDuration;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    timedDuration = null;
                    isControlled = false;
                    controls = {
                        time: function time(fn) {
                            return tslib_1.__awaiter(this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            tiny_invariant_1.default(!isControlled, 'controls.time has already been used');
                                            isControlled = true;
                                            return [4, getDuration(fn)];
                                        case 1:
                                            timedDuration = _a.sent();
                                            return [2];
                                    }
                                });
                            });
                        },
                    };
                    return [4, getDuration(function () { return fn(controls); })];
                case 1:
                    wholeTaskDuration = _a.sent();
                    if (isControlled) {
                        tiny_invariant_1.default(timedDuration != null, "\n      You have used controls.timed but have not waited for the result to finish\n      Ensure that you wait for the result:\n\n      await controls.time(async () => {});\n\n      You might not be waiting for controls.time\n\n      controls.time(async () => {});\n    ");
                        return [2, timedDuration];
                    }
                    return [2, wholeTaskDuration];
            }
        });
    });
}
exports.default = withDuration;
