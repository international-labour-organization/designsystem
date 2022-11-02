import { useMemo, useEffect } from 'react';
import eventNames from '../events';
import { runAll, runOneStatic, runOneTimed } from '../task-runner';
import getElement from '../task-runner/get-element';
import { bindAll } from '../util/bind-channel-events';
import getTaskMap from '../tasks/get-tasks-map';
import { getGroups } from '../tasks/get-groups';
export default function TaskHarness({ getNode, channel, interactions, allowedGroups }) {
    const groups = useMemo(function merge() {
        return getGroups({
            allowedGroups,
            interactions: interactions,
        });
    }, [interactions, allowedGroups]);
    const tasks = useMemo(() => getTaskMap(groups), [groups]);
    useEffect(function setup() {
        function safeEmit(name, args) {
            if (!safeEmit.isEnabled) {
                return;
            }
            channel.emit(name, args);
        }
        safeEmit.isEnabled = true;
        const unbindAll = bindAll(channel, [
            {
                eventName: eventNames.START_ALL,
                fn: async function onStartAll({ copies, samples }) {
                    const results = await runAll({
                        groups,
                        getNode,
                        samples,
                        copies,
                    });
                    safeEmit(eventNames.FINISH_ALL, { results });
                },
            },
            {
                eventName: eventNames.START_ONE,
                fn: async function onStartOne({ taskName, copies, samples }) {
                    const task = tasks[taskName];
                    if (task == null) {
                        throw new Error(`Could not find task with id: ${taskName}`);
                    }
                    if (task.type === 'timed' || task.type === 'interaction') {
                        const result = await runOneTimed({
                            task,
                            getNode,
                            samples,
                            copies,
                        });
                        safeEmit(eventNames.FINISH_ONE, { taskName, result });
                        return;
                    }
                    if (task.type === 'static') {
                        const result = await runOneStatic({
                            task,
                            getNode,
                            copies,
                        });
                        safeEmit(eventNames.FINISH_ONE, { taskName, result });
                        return;
                    }
                },
            },
        ]);
        return function unbind() {
            unbindAll();
            safeEmit.isEnabled = false;
        };
    }, [channel, getNode, interactions, groups, tasks]);
    return getElement(getNode)();
}
