"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var coreEvents = tslib_1.__importStar(require("@storybook/core-events"));
var react_1 = require("@xstate/react");
var react_2 = require("react");
var events_1 = tslib_1.__importDefault(require("../events"));
var bind_channel_events_1 = require("../util/bind-channel-events");
var file_system_1 = require("./file-system");
var pinned_storage_1 = require("./pinned-storage");
function mergeWithResults(_a) {
    var existing = _a.existing, result = _a.result;
    return existing.map(function (groupResult) {
        var _a;
        return tslib_1.__assign(tslib_1.__assign({}, groupResult), { map: tslib_1.__assign(tslib_1.__assign({}, groupResult.map), (_a = {}, _a[result.taskName] = result, _a)) });
    });
}
function usePanelMachine(machine, channel) {
    var _a = tslib_1.__read(react_1.useMachine(machine), 3), state = _a[0], send = _a[1], service = _a[2];
    react_2.useEffect(function bindChannelEvents() {
        var unsubscribe = bind_channel_events_1.bindAll(channel, [
            {
                eventName: coreEvents.STORY_RENDERED,
                fn: function (storyName) {
                    service.send('LOADED', { storyName: storyName, pinned: pinned_storage_1.getPinned(storyName) });
                },
            },
            {
                eventName: coreEvents.STORY_CHANGED,
                fn: function () { return service.send('WAIT'); },
            },
        ]);
        return unsubscribe;
    }, [service, channel]);
    react_2.useEffect(function () {
        function finishAll(_a) {
            var results = _a.results;
            service.send('FINISH', { results: results });
        }
        function finishOne(_a) {
            var result = _a.result;
            var results = mergeWithResults({
                existing: service.state.context.current.results,
                result: result,
            });
            service.send('FINISH', { results: results });
        }
        var unbindChannel = bind_channel_events_1.bindAll(channel, [
            { eventName: events_1.default.FINISH_ALL, fn: finishAll },
            { eventName: events_1.default.FINISH_ONE, fn: finishOne },
        ]);
        var unsubscribable = service.subscribe(function next(state, event) {
            if (!state.changed) {
                return;
            }
            if (!event) {
                return;
            }
            var _a = state.context, current = _a.current, storyName = _a.storyName;
            if (event.type === 'SAVE') {
                file_system_1.saveFile(storyName, current);
                return;
            }
            if (event.type === 'PIN') {
                pinned_storage_1.savePinned(storyName, current);
                return;
            }
            if (event.type === 'UNPIN') {
                pinned_storage_1.clearPinned(storyName);
                return;
            }
            var samples = current.samples, copies = current.copies;
            if (state.matches('active.running')) {
                if (event.type === 'START_ALL') {
                    channel.emit(events_1.default.START_ALL, {
                        samples: samples,
                        copies: copies,
                    });
                    return;
                }
                if (event.type === 'START_ONE') {
                    channel.emit(events_1.default.START_ONE, {
                        taskName: event.taskName,
                        samples: samples,
                        copies: copies,
                    });
                }
            }
        });
        return function unsubscribe() {
            unbindChannel();
            unsubscribable.unsubscribe();
        };
    }, [service, channel]);
    return { state: state, send: send, service: service };
}
exports.default = usePanelMachine;
