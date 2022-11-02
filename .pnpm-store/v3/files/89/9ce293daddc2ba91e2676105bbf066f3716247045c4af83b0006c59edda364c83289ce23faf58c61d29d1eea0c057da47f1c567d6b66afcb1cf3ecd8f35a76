"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("xstate/lib/utils");
function getTaskMap(groups) {
    return utils_1.flatten(groups.map(function (group) { return group.tasks; })).reduce(function (acc, task) {
        acc[task.name] = task;
        return acc;
    }, {});
}
exports.default = getTaskMap;
