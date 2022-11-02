import * as coreEvents from '@storybook/core-events';
import { useMachine } from '@xstate/react';
import { useEffect } from 'react';
import eventNames from '../events';
import { bindAll } from '../util/bind-channel-events';
import { saveFile } from './file-system';
import { clearPinned, getPinned, savePinned } from './pinned-storage';
function mergeWithResults({ existing, result }) {
    return existing.map((groupResult) => {
        return {
            ...groupResult,
            map: {
                ...groupResult.map,
                [result.taskName]: result,
            },
        };
    });
}
export default function usePanelMachine(machine, channel) {
    const [state, send, service] = useMachine(machine);
    useEffect(function bindChannelEvents() {
        const unsubscribe = bindAll(channel, [
            {
                eventName: coreEvents.STORY_RENDERED,
                fn: (storyName) => {
                    service.send('LOADED', { storyName, pinned: getPinned(storyName) });
                },
            },
            {
                eventName: coreEvents.STORY_CHANGED,
                fn: () => service.send('WAIT'),
            },
        ]);
        return unsubscribe;
    }, [service, channel]);
    useEffect(() => {
        function finishAll({ results }) {
            service.send('FINISH', { results });
        }
        function finishOne({ result }) {
            const results = mergeWithResults({
                existing: service.state.context.current.results,
                result,
            });
            service.send('FINISH', { results });
        }
        const unbindChannel = bindAll(channel, [
            { eventName: eventNames.FINISH_ALL, fn: finishAll },
            { eventName: eventNames.FINISH_ONE, fn: finishOne },
        ]);
        const unsubscribable = service.subscribe(function next(state, event) {
            if (!state.changed) {
                return;
            }
            if (!event) {
                return;
            }
            const { current, storyName } = state.context;
            if (event.type === 'SAVE') {
                saveFile(storyName, current);
                return;
            }
            if (event.type === 'PIN') {
                savePinned(storyName, current);
                return;
            }
            if (event.type === 'UNPIN') {
                clearPinned(storyName);
                return;
            }
            const { samples, copies } = current;
            if (state.matches('active.running')) {
                if (event.type === 'START_ALL') {
                    channel.emit(eventNames.START_ALL, {
                        samples,
                        copies,
                    });
                    return;
                }
                if (event.type === 'START_ONE') {
                    channel.emit(eventNames.START_ONE, {
                        taskName: event.taskName,
                        samples,
                        copies,
                    });
                }
            }
        });
        return function unsubscribe() {
            unbindChannel();
            unsubscribable.unsubscribe();
        };
    }, [service, channel]);
    return { state, send, service };
}
