"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var theming_1 = require("@storybook/theming");
var react_1 = tslib_1.__importDefault(require("react"));
var get_interaction_group_1 = require("../tasks/get-interaction-group");
var components_1 = require("@storybook/components");
var task_result_1 = tslib_1.__importDefault(require("./task-result"));
var Title = theming_1.styled.h3(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  font-weight: bold;\n  margin-bottom: var(--grid);\n"], ["\n  font-weight: bold;\n  margin-bottom: var(--grid);\n"])));
var Container = theming_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  padding: var(--halfGrid);\n"], ["\n  padding: var(--halfGrid);\n"])));
function EmptyGroupMessage(_a) {
    var group = _a.group;
    if (group.groupId === get_interaction_group_1.interactionGroupId && !group.tasks.length) {
        return (react_1.default.createElement("small", null,
            "No",
            ' ',
            react_1.default.createElement(components_1.Link, { href: "https://github.com/atlassian-labs/storybook-addon-performance#usage-interactions", target: "_blank", rel: "noopener" }, "interactions"),
            ' ',
            "defined."));
    }
    return null;
}
exports.default = react_1.default.memo(function TaskGroup(_a) {
    var group = _a.group, result = _a.result, pinned = _a.pinned;
    if (!result) {
        return null;
    }
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(Title, null, group.name),
        react_1.default.createElement(EmptyGroupMessage, { group: group }),
        group.tasks.map(function (task) {
            return (react_1.default.createElement(task_result_1.default, { key: task.name, task: task, result: result.map[task.name] || null, pinned: (pinned === null || pinned === void 0 ? void 0 : pinned.map[task.name]) || null }));
        })));
});
var templateObject_1, templateObject_2;
