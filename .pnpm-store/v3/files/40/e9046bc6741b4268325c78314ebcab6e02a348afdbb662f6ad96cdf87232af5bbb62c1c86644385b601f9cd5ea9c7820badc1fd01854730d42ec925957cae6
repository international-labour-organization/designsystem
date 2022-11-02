import { EventObject, State, Interpreter, Typestate } from 'xstate';
import { PayloadSender } from './types';
export declare function getServiceSnapshot<TService extends Interpreter<any, any, any, any>>(service: TService): TService['state'];
/**
 * @deprecated Use `useActor` instead.
 *
 * @param service The interpreted machine
 * @returns A tuple of the current `state` of the service and the service's `send(event)` method
 */
export declare function useService<TContext, TEvent extends EventObject, TTypestate extends Typestate<TContext> = {
    value: any;
    context: TContext;
}>(service: Interpreter<TContext, any, TEvent, TTypestate>): [State<TContext, TEvent, any, TTypestate>, PayloadSender<TEvent>];
//# sourceMappingURL=useService.d.ts.map