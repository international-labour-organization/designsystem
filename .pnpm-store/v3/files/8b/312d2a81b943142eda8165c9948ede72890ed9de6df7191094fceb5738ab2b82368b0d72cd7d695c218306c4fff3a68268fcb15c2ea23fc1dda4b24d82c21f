import { styled } from '@storybook/theming';
import React from 'react';
import { interactionGroupId } from '../tasks/get-interaction-group';
import { Link } from '@storybook/components';
import TaskResult from './task-result';
const Title = styled.h3 `
  font-weight: bold;
  margin-bottom: var(--grid);
`;
const Container = styled.div `
  padding: var(--halfGrid);
`;
function EmptyGroupMessage({ group }) {
    if (group.groupId === interactionGroupId && !group.tasks.length) {
        return (React.createElement("small", null,
            "No",
            ' ',
            React.createElement(Link, { href: "https://github.com/atlassian-labs/storybook-addon-performance#usage-interactions", target: "_blank", rel: "noopener" }, "interactions"),
            ' ',
            "defined."));
    }
    return null;
}
export default React.memo(function TaskGroup({ group, result, pinned }) {
    if (!result) {
        return null;
    }
    return (React.createElement(Container, null,
        React.createElement(Title, null, group.name),
        React.createElement(EmptyGroupMessage, { group: group }),
        group.tasks.map((task) => {
            return (React.createElement(TaskResult, { key: task.name, task: task, result: result.map[task.name] || null, pinned: (pinned === null || pinned === void 0 ? void 0 : pinned.map[task.name]) || null }));
        })));
});
