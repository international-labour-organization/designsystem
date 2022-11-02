"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var mark_1 = tslib_1.__importDefault(require("./mark"));
var with_container_1 = tslib_1.__importDefault(require("./with-container"));
var with_duration_1 = tslib_1.__importDefault(require("./with-duration"));
function runInteractionTask(_a) {
    var task = _a.task, getElement = _a.getElement;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _this = this;
        return tslib_1.__generator(this, function (_b) {
            return [2, with_container_1.default(function (container) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var duration;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                react_dom_1.default.render(getElement(), container);
                                return [4, mark_1.default(task.name, function () {
                                        return with_duration_1.default(function (controls) { return task.run({ controls: controls, container: container }); });
                                    })];
                            case 1:
                                duration = _a.sent();
                                react_dom_1.default.unmountComponentAtNode(container);
                                return [2, duration];
                        }
                    });
                }); })];
        });
    });
}
exports.default = runInteractionTask;
