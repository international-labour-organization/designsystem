import React from 'react';
import addons, { makeDecorator } from '@storybook/addons';
import TaskHarness from './task-harness';
import * as constants from '../addon-constants';
import allowAllGroups from '../tasks/allow-all-groups';
export default makeDecorator({
    name: constants.decoratorKey,
    parameterName: constants.paramKey,
    skipIfNoParametersOrOptions: false,
    wrapper: (getStory, context, { parameters }) => {
        const interactions = (parameters && parameters.interactions) || [];
        const allowedGroups = (parameters && parameters.allowedGroups) || allowAllGroups;
        return (React.createElement(TaskHarness, { getNode: () => getStory(context), channel: addons.getChannel(), interactions: interactions, allowedGroups: allowedGroups }));
    },
});
