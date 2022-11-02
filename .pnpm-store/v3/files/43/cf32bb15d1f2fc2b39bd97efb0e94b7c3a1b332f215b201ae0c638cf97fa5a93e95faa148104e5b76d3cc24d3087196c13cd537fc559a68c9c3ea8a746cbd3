import { styled } from '@storybook/theming';
import React, { useMemo } from 'react';
import { panelId } from '../selectors';
import { getGroups } from '../tasks/get-groups';
import machine from './machine';
import ServiceContext from './service-context';
import TaskGroupPanel from './task-group';
import Topbar from './top-bar';
import usePanelMachine from './use-panel-machine';
const Container = styled.div `
  --grid: 10px;
  --halfGrid: calc(var(--grid) / 2);

  font-size: 16px;
  line-height: 1.5;
`;
const GroupContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  min-height: 100%;
  padding: 0 var(--halfGrid);
`;
function findResult(group, context) {
    if (!context || !context.results) {
        return null;
    }
    const result = context.results.find((item) => item.groupId === group.groupId);
    return result || null;
}
export default function Panel({ channel, interactions, allowedGroups, }) {
    const { state, service } = usePanelMachine(machine, channel);
    const groups = useMemo(() => getGroups({ allowedGroups, interactions }), [interactions, allowedGroups]);
    return (React.createElement(ServiceContext.Provider, { value: service },
        React.createElement(Container, { id: panelId },
            React.createElement(Topbar, null),
            React.createElement(GroupContainer, null, groups.map((group) => {
                if (state.context.current.results == null) {
                    return null;
                }
                return (React.createElement(TaskGroupPanel, { key: group.groupId, group: group, result: findResult(group, state.context.current), pinned: findResult(group, state.context.pinned) }));
            })))));
}
