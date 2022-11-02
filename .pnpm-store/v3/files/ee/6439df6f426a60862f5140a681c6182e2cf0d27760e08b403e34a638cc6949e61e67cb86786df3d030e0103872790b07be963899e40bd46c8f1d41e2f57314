import { StateMachine, EventObject, Typestate } from '@xstate/fsm';
export declare function useMachine<TContext extends object, TEvent extends EventObject = EventObject, TState extends Typestate<TContext> = {
    value: any;
    context: TContext;
}>(stateMachine: StateMachine.Machine<TContext, TEvent, TState>, options?: {
    actions?: StateMachine.ActionMap<TContext, TEvent>;
}): [
    StateMachine.State<TContext, TEvent, TState>,
    StateMachine.Service<TContext, TEvent, TState>['send'],
    StateMachine.Service<TContext, TEvent, TState>
];
export declare function useService<TContext extends object, TEvent extends EventObject = EventObject, TState extends Typestate<TContext> = {
    value: any;
    context: TContext;
}>(service: StateMachine.Service<TContext, TEvent, TState>): [
    StateMachine.State<TContext, TEvent, TState>,
    StateMachine.Service<TContext, TEvent, TState>['send'],
    StateMachine.Service<TContext, TEvent, TState>
];
//# sourceMappingURL=fsm.d.ts.map