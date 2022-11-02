"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var events_1 = tslib_1.__importDefault(require("../events"));
var task_runner_1 = require("../task-runner");
var get_element_1 = tslib_1.__importDefault(require("../task-runner/get-element"));
var bind_channel_events_1 = require("../util/bind-channel-events");
var get_tasks_map_1 = tslib_1.__importDefault(require("../tasks/get-tasks-map"));
var get_groups_1 = require("../tasks/get-groups");
function TaskHarness(_a) {
    var getNode = _a.getNode, channel = _a.channel, interactions = _a.interactions, allowedGroups = _a.allowedGroups;
    var groups = react_1.useMemo(function merge() {
        return get_groups_1.getGroups({
            allowedGroups: allowedGroups,
            interactions: interactions,
        });
    }, [interactions, allowedGroups]);
    var tasks = react_1.useMemo(function () { return get_tasks_map_1.default(groups); }, [groups]);
    react_1.useEffect(function setup() {
        function safeEmit(name, args) {
            if (!safeEmit.isEnabled) {
                return;
            }
            channel.emit(name, args);
        }
        safeEmit.isEnabled = true;
        var unbindAll = bind_channel_events_1.bindAll(channel, [
            {
                eventName: events_1.default.START_ALL,
                fn: function onStartAll(_a) {
                    var copies = _a.copies, samples = _a.samples;
                    return tslib_1.__awaiter(this, void 0, void 0, function () {
                        var results;
                        return tslib_1.__generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4, task_runner_1.runAll({
                                        groups: groups,
                                        getNode: getNode,
                                        samples: samples,
                                        copies: copies,
                                    })];
                                case 1:
                                    results = _b.sent();
                                    safeEmit(events_1.default.FINISH_ALL, { results: results });
                                    return [2];
                            }
                        });
                    });
                },
            },
            {
                eventName: events_1.default.START_ONE,
                fn: function onStartOne(_a) {
                    var taskName = _a.taskName, copies = _a.copies, samples = _a.samples;
                    return tslib_1.__awaiter(this, void 0, void 0, function () {
                        var task, result, result;
                        return tslib_1.__generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    task = tasks[taskName];
                                    if (task == null) {
                                        throw new Error("Could not find task with id: " + taskName);
                                    }
                                    if (!(task.type === 'timed' || task.type === 'interaction')) return [3, 2];
                                    return [4, task_runner_1.runOneTimed({
                                            task: task,
                                            getNode: getNode,
                                            samples: samples,
                                            copies: copies,
                                        })];
                                case 1:
                                    result = _b.sent();
                                    safeEmit(events_1.default.FINISH_ONE, { taskName: taskName, result: result });
                                    return [2];
                                case 2:
                                    if (!(task.type === 'static')) return [3, 4];
                                    return [4, task_runner_1.runOneStatic({
                                            task: task,
                                            getNode: getNode,
                                            copies: copies,
                                        })];
                                case 3:
                                    result = _b.sent();
                                    safeEmit(events_1.default.FINISH_ONE, { taskName: taskName, result: result });
                                    return [2];
                                case 4: return [2];
                            }
                        });
                    });
                },
            },
        ]);
        return function unbind() {
            unbindAll();
            safeEmit.isEnabled = false;
        };
    }, [channel, getNode, interactions, groups, tasks]);
    return get_element_1.default(getNode)();
}
exports.default = TaskHarness;
