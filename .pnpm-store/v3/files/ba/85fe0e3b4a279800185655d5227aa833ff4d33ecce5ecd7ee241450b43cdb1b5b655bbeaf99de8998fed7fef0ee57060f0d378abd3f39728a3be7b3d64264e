"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncFor = exports.asyncMap = void 0;
var tslib_1 = require("tslib");
function waitForFrame() {
    return new Promise(function (resolve) {
        requestAnimationFrame(function () { return resolve(); });
    });
}
function asyncMap(_a) {
    var source = _a.source, map = _a.map;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var results, i, value;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    results = [];
                    i = 0;
                    _b.label = 1;
                case 1:
                    if (!(i < source.length)) return [3, 5];
                    return [4, waitForFrame()];
                case 2:
                    _b.sent();
                    return [4, map(source[i], i, source)];
                case 3:
                    value = _b.sent();
                    results.push(value);
                    _b.label = 4;
                case 4:
                    i++;
                    return [3, 1];
                case 5: return [2, results];
            }
        });
    });
}
exports.asyncMap = asyncMap;
function asyncFor(_a) {
    var count = _a.count, fn = _a.fn;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var i;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    i = 0;
                    _b.label = 1;
                case 1:
                    if (!(i < count)) return [3, 5];
                    return [4, waitForFrame()];
                case 2:
                    _b.sent();
                    return [4, fn(i)];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    i++;
                    return [3, 1];
                case 5: return [2];
            }
        });
    });
}
exports.asyncFor = asyncFor;
