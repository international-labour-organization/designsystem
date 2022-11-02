"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var addons_1 = tslib_1.__importStar(require("@storybook/addons"));
var task_harness_1 = tslib_1.__importDefault(require("./task-harness"));
var constants = tslib_1.__importStar(require("../addon-constants"));
var allow_all_groups_1 = tslib_1.__importDefault(require("../tasks/allow-all-groups"));
exports.default = addons_1.makeDecorator({
    name: constants.decoratorKey,
    parameterName: constants.paramKey,
    skipIfNoParametersOrOptions: false,
    wrapper: function (getStory, context, _a) {
        var parameters = _a.parameters;
        var interactions = (parameters && parameters.interactions) || [];
        var allowedGroups = (parameters && parameters.allowedGroups) || allow_all_groups_1.default;
        return (react_1.default.createElement(task_harness_1.default, { getNode: function () { return getStory(context); }, channel: addons_1.default.getChannel(), interactions: interactions, allowedGroups: allowedGroups }));
    },
});
