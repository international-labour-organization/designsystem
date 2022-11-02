import { Machine, assign } from 'xstate';
const initial = {
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
const machine = Machine({
    id: 'panel',
    initial: 'waiting',
    context: initial,
    states: {
        waiting: {
            entry: assign(() => initial),
            on: {
                LOADED: {
                    target: 'active',
                    actions: assign((context, event) => {
                        const message = event.pinned
                            ? `Loaded pinned result for story: ${event.storyName}`
                            : null;
                        return {
                            ...context,
                            message,
                            pinned: event.pinned,
                            storyName: event.storyName,
                            current: event.pinned || context.current,
                        };
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
                            cond: (context) => {
                                return context.pinned == null;
                            },
                            actions: [
                                'clearMessage',
                                assign({
                                    current: (context, event) => {
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
                            cond: (context) => {
                                return context.current.results != null;
                            },
                            actions: assign((context) => {
                                return {
                                    ...context,
                                    pinned: context.current,
                                    message: 'Result pinned',
                                };
                            }),
                        },
                        SAVE: {
                            internal: true,
                            target: 'idle',
                            cond: (context) => {
                                return context.current.results != null;
                            },
                            actions: assign((context) => {
                                return {
                                    ...context,
                                    message: 'Result saved',
                                };
                            }),
                        },
                        LOAD_FROM_FILE: {
                            internal: true,
                            target: 'idle',
                            actions: assign((context, event) => {
                                const message = event.pinned
                                    ? `Loaded pinned result: ${event.storyName}`
                                    : null;
                                return {
                                    ...context,
                                    message,
                                    pinned: event.pinned,
                                    storyName: event.storyName,
                                    current: event.pinned || context.current,
                                };
                            }),
                        },
                        UNPIN: {
                            internal: true,
                            target: 'idle',
                            cond: (context) => {
                                return context.pinned != null;
                            },
                            actions: assign((context) => {
                                return {
                                    ...context,
                                    pinned: null,
                                    message: 'Pinned result removed',
                                };
                            }),
                        },
                    },
                },
                running: {
                    on: {
                        FINISH: {
                            target: 'idle',
                            actions: assign({
                                current: (context, event) => {
                                    const current = {
                                        ...context.current,
                                        results: event.results,
                                    };
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
        clearMessage: assign((context) => {
            return {
                ...context,
                message: null,
            };
        }),
    },
});
export default machine;
