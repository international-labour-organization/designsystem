import { ActionMeta, ActionObject, EventObject, State, StateConfig } from 'xstate';
export declare type Sender<TEvent extends EventObject> = (event: TEvent) => void;
export interface Subscription {
    unsubscribe(): void;
}
export interface Observer<T> {
    next?: (value: T) => void;
    error?: (errorValue: any) => void;
    complete: () => void;
}
export interface Subscribable<T> {
    subscribe(observer: Observer<T>): Subscription;
    subscribe(next: (value: T) => void, error?: (error: any) => void, complete?: () => void): Subscription;
}
export declare type MaybeLazy<T> = T | (() => T);
declare type ExcludeType<A> = {
    [K in Exclude<keyof A, 'type'>]: A[K];
};
declare type ExtractExtraParameters<A, T> = A extends {
    type: T;
} ? ExcludeType<A> : never;
declare type ExtractSimple<A> = A extends any ? {} extends ExcludeType<A> ? A : never : never;
declare type NeverIfEmpty<T> = {} extends T ? never : T;
export interface PayloadSender<TEvent extends EventObject> {
    /**
     * Send an event object or just the event type, if the event has no other payload
     */
    (event: TEvent | ExtractSimple<TEvent>['type']): void;
    /**
     * Send an event type and its payload
     */
    <K extends TEvent['type']>(eventType: K, payload: NeverIfEmpty<ExtractExtraParameters<TEvent, K>>): void;
}
export interface ActorRef<TEvent extends EventObject, TEmitted = any> extends Subscribable<TEmitted> {
    send: Sender<TEvent>;
}
export declare enum ReactEffectType {
    Effect = 1,
    LayoutEffect = 2
}
export interface ReactActionFunction<TContext, TEvent extends EventObject> {
    (context: TContext, event: TEvent, meta: ActionMeta<TContext, TEvent>): () => void;
    __effect: ReactEffectType;
}
export interface ReactActionObject<TContext, TEvent extends EventObject> extends ActionObject<TContext, TEvent> {
    exec: ReactActionFunction<TContext, TEvent>;
}
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
export declare type ActionStateTuple<TContext, TEvent extends EventObject> = [
    ReactActionObject<TContext, TEvent>,
    State<TContext, TEvent>
];
export {};
//# sourceMappingURL=types.d.ts.map