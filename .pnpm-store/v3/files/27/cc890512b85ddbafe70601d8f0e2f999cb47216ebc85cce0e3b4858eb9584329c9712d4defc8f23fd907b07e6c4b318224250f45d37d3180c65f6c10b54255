import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { AddonPanel } from '@storybook/components';
import React from 'react';
import * as constants from './addon-constants';
import Panel from './panel/panel';
import allowAllGroups from './tasks/allow-all-groups';
function Env({ children }) {
    const parameters = useParameter(constants.paramKey, {
        interactions: [],
        allowedGroups: allowAllGroups,
    });
    const interactions = parameters.interactions || [];
    const allowedGroups = parameters.allowedGroups || allowAllGroups;
    const channel = addons.getChannel();
    return children({ channel: channel, interactions, allowedGroups });
}
addons.register(constants.addonKey, () => {
    addons.add(constants.panelKey, {
        type: types.PANEL,
        title: constants.panelTitle,
        render: ({ active, key }) => (React.createElement(AddonPanel, { active: active, key: key },
            React.createElement(Env, null, ({ interactions, channel, allowedGroups }) => (React.createElement(Panel, { channel: channel, interactions: interactions, allowedGroups: allowedGroups }))))),
        paramKey: constants.paramKey,
    });
});
