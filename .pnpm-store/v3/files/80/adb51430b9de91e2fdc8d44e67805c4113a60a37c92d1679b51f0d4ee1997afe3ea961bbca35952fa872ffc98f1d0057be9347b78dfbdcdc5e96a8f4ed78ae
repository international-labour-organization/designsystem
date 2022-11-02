"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var addon_constants_1 = require("./../addon-constants");
var startMark = addon_constants_1.packageName + "-start";
var endMark = addon_constants_1.packageName + "-end";
function mark(taskName, fn) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var result, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    performance.mark(startMark);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, fn()];
                case 2:
                    result = _a.sent();
                    performance.mark(endMark);
                    performance.measure("\uD83D\uDE80 (Task: " + taskName + ")", startMark, endMark);
                    return [2, result];
                case 3:
                    e_1 = _a.sent();
                    performance.mark(endMark);
                    performance.measure("\uD83D\uDE80\u274C (Task: " + taskName + ")", startMark, endMark);
                    throw e_1;
                case 4: return [2];
            }
        });
    });
}
exports.default = mark;
