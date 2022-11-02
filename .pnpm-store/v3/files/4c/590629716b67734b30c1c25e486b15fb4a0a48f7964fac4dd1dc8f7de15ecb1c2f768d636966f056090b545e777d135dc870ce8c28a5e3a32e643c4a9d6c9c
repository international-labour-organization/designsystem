"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var xstate_1 = require("xstate");
var initial = {
    message: null,
    sizes: [1, 10, 100],
    storyName: 'unknown',
    current: {
        results: null,
        samples: 1,
        copies: 1,
    },
    pinned: null,
};
var machine = xstate_1.Machine({
    id: 'panel',
    initial: 'waiting',
    context: initial,
    states: {
        waiting: {
            entry: xstate_1.assign(function () { return initial; }),
            on: {
                LOADED: {
                    target: 'active',
                    actions: xstate_1.assign(function (context, event) {
                        var message = event.pinned
                            ? "Loaded pinned result for story: " + event.storyName
                            : null;
                        return tslib_1.__assign(tslib_1.__assign({}, context), { message: message, pinned: event.pinned, storyName: event.storyName, current: event.pinned || context.current });
                    }),
                },
            },
        },
        active: {
            id: 'active',
            initial: 'idle',
            on: {
                WAIT: '#panel.waiting',
            },
            states: {
                idle: {
                    exit: 'clearMessage',
                    on: {
                        START_ALL: 'running',
                        START_ONE: 'running',
                        SET_VALUES: {
                            internal: true,
                            target: 'idle',
                            cond: function (context) {
                                return context.pinned == null;
                            },
                            actions: [
                                'clearMessage',
                                xstate_1.assign({
                                    current: function (context, event) {
                                        return {
                                            results: null,
                                            storyName: context.storyName,
                                            samples: event.samples,
                                            copies: event.copies,
                                        };
                                    },
                                }),
                            ],
                        },
                        PIN: {
                            internal: true,
                            target: 'idle',
                            cond: function (context) {
                                return context.current.results != null;
                            },
                            actions: xstate_1.assign(function (context) {
                                return tslib_1.__assign(tslib_1.__assign({}, context), { pinned: context.current, message: 'Result pinned' });
                            }),
                        },
                        SAVE: {
                            internal: true,
                            target: 'idle',
                            cond: function (context) {
                                return context.current.results != null;
                            },
                            actions: xstate_1.assign(function (context) {
                                return tslib_1.__assign(tslib_1.__assign({}, context), { message: 'Result saved' });
                            }),
                        },
                        LOAD_FROM_FILE: {
                            internal: true,
                            target: 'idle',
                            actions: xstate_1.assign(function (context, event) {
                                var message = event.pinned
                                    ? "Loaded pinned result: " + event.storyName
                                    : null;
                                return tslib_1.__assign(tslib_1.__assign({}, context), { message: message, pinned: event.pinned, storyName: event.storyName, current: event.pinned || context.current });
                            }),
                        },
                        UNPIN: {
                            internal: true,
                            target: 'idle',
                            cond: function (context) {
                                return context.pinned != null;
                            },
                            actions: xstate_1.assign(function (context) {
                                return tslib_1.__assign(tslib_1.__assign({}, context), { pinned: null, message: 'Pinned result removed' });
                            }),
                        },
                    },
                },
                running: {
                    on: {
                        FINISH: {
                            target: 'idle',
                            actions: xstate_1.assign({
                                current: function (context, event) {
                                    var current = tslib_1.__assign(tslib_1.__assign({}, context.current), { results: event.results });
                                    return current;
                                },
                            }),
                        },
                    },
                },
            },
        },
    },
}, {
    actions: {
        clearMessage: xstate_1.assign(function (context) {
            return tslib_1.__assign(tslib_1.__assign({}, context), { message: null });
        }),
    },
});
exports.default = machine;
