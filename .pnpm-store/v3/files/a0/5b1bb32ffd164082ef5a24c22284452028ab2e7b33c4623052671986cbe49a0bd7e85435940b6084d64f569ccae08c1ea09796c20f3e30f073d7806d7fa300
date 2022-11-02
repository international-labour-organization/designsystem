"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var addons_1 = require("@storybook/addons");
var api_1 = require("@storybook/api");
var components_1 = require("@storybook/components");
var react_1 = tslib_1.__importDefault(require("react"));
var constants = tslib_1.__importStar(require("./addon-constants"));
var panel_1 = tslib_1.__importDefault(require("./panel/panel"));
var allow_all_groups_1 = tslib_1.__importDefault(require("./tasks/allow-all-groups"));
function Env(_a) {
    var children = _a.children;
    var parameters = api_1.useParameter(constants.paramKey, {
        interactions: [],
        allowedGroups: allow_all_groups_1.default,
    });
    var interactions = parameters.interactions || [];
    var allowedGroups = parameters.allowedGroups || allow_all_groups_1.default;
    var channel = addons_1.addons.getChannel();
    return children({ channel: channel, interactions: interactions, allowedGroups: allowedGroups });
}
addons_1.addons.register(constants.addonKey, function () {
    addons_1.addons.add(constants.panelKey, {
        type: addons_1.types.PANEL,
        title: constants.panelTitle,
        render: function (_a) {
            var active = _a.active, key = _a.key;
            return (react_1.default.createElement(components_1.AddonPanel, { active: active, key: key },
                react_1.default.createElement(Env, null, function (_a) {
                    var interactions = _a.interactions, channel = _a.channel, allowedGroups = _a.allowedGroups;
                    return (react_1.default.createElement(panel_1.default, { channel: channel, interactions: interactions, allowedGroups: allowedGroups }));
                })));
        },
        paramKey: constants.paramKey,
    });
});
