import { EventObject, StateMachine, State, Interpreter, InterpreterOptions, MachineOptions, StateConfig, Typestate, ActionFunction } from 'xstate';
import { MaybeLazy, ReactActionFunction } from './types';
export declare function asEffect<TContext, TEvent extends EventObject>(exec: ActionFunction<TContext, TEvent>): ReactActionFunction<TContext, TEvent>;
export declare function asLayoutEffect<TContext, TEvent extends EventObject>(exec: ActionFunction<TContext, TEvent>): ReactActionFunction<TContext, TEvent>;
export interface UseMachineOptions<TContext, TEvent extends EventObject> {
    /**
     * If provided, will be merged with machine's `context`.
     */
    context?: Partial<TContext>;
    /**
     * The state to rehydrate the machine to. The machine will
     * start at this state instead of its `initialState`.
     */
    state?: StateConfig<TContext, TEvent>;
}
export declare function useMachine<TContext, TEvent extends EventObject, TTypestate extends Typestate<TContext> = {
    value: any;
    context: TContext;
}>(getMachine: MaybeLazy<StateMachine<TContext, any, TEvent, TTypestate>>, options?: Partial<InterpreterOptions> & Partial<UseMachineOptions<TContext, TEvent>> & Partial<MachineOptions<TContext, TEvent>>): [
    State<TContext, TEvent, any, TTypestate>,
    Interpreter<TContext, any, TEvent, TTypestate>['send'],
    Interpreter<TContext, any, TEvent, TTypestate>
];
//# sourceMappingURL=useMachine.d.ts.map