"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroups = void 0;
var tslib_1 = require("tslib");
var client_1 = tslib_1.__importDefault(require("./preset/client"));
var server_1 = tslib_1.__importDefault(require("./preset/server"));
var get_interaction_group_1 = require("./get-interaction-group");
var flatten_1 = tslib_1.__importDefault(require("../util/flatten"));
var tiny_invariant_1 = tslib_1.__importDefault(require("tiny-invariant"));
function getDuplicateTaskNames(groups) {
    var tasks = flatten_1.default(groups.map(function (group) { return group.tasks; }));
    var allNames = tasks.map(function (task) { return task.name; });
    var duplicates = allNames.filter(function (name) {
        return allNames.filter(function (value) { return value === name; }).length > 1;
    });
    return tslib_1.__spread(new Set(duplicates));
}
function getGroups(_a) {
    var allowedGroups = _a.allowedGroups, interactions = _a.interactions;
    var result = [];
    if (allowedGroups.includes('server')) {
        result.push(server_1.default);
    }
    if (allowedGroups.includes('client')) {
        var tasks = allowedGroups.includes('server')
            ? client_1.default.tasks
            : client_1.default.tasks.filter(function (task) { return task.name !== 'Hydrate'; });
        result.push(tslib_1.__assign(tslib_1.__assign({}, client_1.default), { tasks: tasks }));
    }
    result.push(get_interaction_group_1.getInteractionGroup(interactions));
    var duplicateNames = getDuplicateTaskNames(result);
    tiny_invariant_1.default(!duplicateNames.length, "Tasks found with duplicate names: [" + duplicateNames.join(',') + "]");
    return result;
}
exports.getGroups = getGroups;
