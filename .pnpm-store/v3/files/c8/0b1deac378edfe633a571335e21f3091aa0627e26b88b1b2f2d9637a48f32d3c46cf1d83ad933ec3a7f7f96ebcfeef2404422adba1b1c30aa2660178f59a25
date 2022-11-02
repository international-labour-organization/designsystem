"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var theming_1 = require("@storybook/theming");
var react_1 = tslib_1.__importStar(require("react"));
var selectors_1 = require("../selectors");
var get_groups_1 = require("../tasks/get-groups");
var machine_1 = tslib_1.__importDefault(require("./machine"));
var service_context_1 = tslib_1.__importDefault(require("./service-context"));
var task_group_1 = tslib_1.__importDefault(require("./task-group"));
var top_bar_1 = tslib_1.__importDefault(require("./top-bar"));
var use_panel_machine_1 = tslib_1.__importDefault(require("./use-panel-machine"));
var Container = theming_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  --grid: 10px;\n  --halfGrid: calc(var(--grid) / 2);\n\n  font-size: 16px;\n  line-height: 1.5;\n"], ["\n  --grid: 10px;\n  --halfGrid: calc(var(--grid) / 2);\n\n  font-size: 16px;\n  line-height: 1.5;\n"])));
var GroupContainer = theming_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  min-height: 100%;\n  padding: 0 var(--halfGrid);\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  min-height: 100%;\n  padding: 0 var(--halfGrid);\n"])));
function findResult(group, context) {
    if (!context || !context.results) {
        return null;
    }
    var result = context.results.find(function (item) { return item.groupId === group.groupId; });
    return result || null;
}
function Panel(_a) {
    var channel = _a.channel, interactions = _a.interactions, allowedGroups = _a.allowedGroups;
    var _b = use_panel_machine_1.default(machine_1.default, channel), state = _b.state, service = _b.service;
    var groups = react_1.useMemo(function () { return get_groups_1.getGroups({ allowedGroups: allowedGroups, interactions: interactions }); }, [interactions, allowedGroups]);
    return (react_1.default.createElement(service_context_1.default.Provider, { value: service },
        react_1.default.createElement(Container, { id: selectors_1.panelId },
            react_1.default.createElement(top_bar_1.default, null),
            react_1.default.createElement(GroupContainer, null, groups.map(function (group) {
                if (state.context.current.results == null) {
                    return null;
                }
                return (react_1.default.createElement(task_group_1.default, { key: group.groupId, group: group, result: findResult(group, state.context.current), pinned: findResult(group, state.context.pinned) }));
            })))));
}
exports.default = Panel;
var templateObject_1, templateObject_2;
