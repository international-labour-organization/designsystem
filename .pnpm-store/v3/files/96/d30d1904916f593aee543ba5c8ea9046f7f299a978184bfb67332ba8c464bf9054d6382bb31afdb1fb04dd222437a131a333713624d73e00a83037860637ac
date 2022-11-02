/// <reference types="react" />
export declare type Nullable<T> = T | null;
export declare type Combine<First, Second> = Omit<First, keyof Second> & Second;
declare type BaseTask = {
    name: string;
    description: string;
};
interface Container extends HTMLElement {
    _reactRootContainer?: any;
}
export declare type RunStaticTaskArgs = {
    getElement: () => React.ReactElement;
    container: HTMLElement;
};
export declare type RunStaticTaskArgsWithReactRoot = {
    getElement: () => React.ReactElement;
    container: Container;
};
export declare type StaticTask = BaseTask & {
    scale?: string;
    type: 'static';
    run: (args: RunStaticTaskArgs) => Promise<string>;
};
export declare type TimedControls = {
    time: (fn: () => Promise<void>) => Promise<void>;
};
export declare type RunTimedTaskArgs = {
    getElement: () => React.ReactElement;
    controls: TimedControls;
    container: HTMLElement;
};
export declare type TimedTask = BaseTask & {
    type: 'timed';
    run: (args: RunTimedTaskArgs) => Promise<void>;
};
export declare type InteractionTaskArgs = {
    controls: TimedControls;
    container: HTMLElement;
};
export declare type InteractionTask = BaseTask & {
    type: 'interaction';
    run: (args: InteractionTaskArgs) => Promise<void>;
};
export declare type PublicInteractionTask = Omit<InteractionTask, 'description' | 'type'> & {
    description?: string;
};
export declare type Task = TimedTask | StaticTask | InteractionTask;
export declare type TaskGroup = {
    groupId: string;
    name: string;
    tasks: Task[];
};
export declare type Variance = {
    standardDeviation: number;
    upperPercentage: number;
    lowerPercentage: number;
};
export declare type TimedResult = {
    type: 'timed';
    taskName: string;
    averageMs: number;
    samples: number;
    variance: Variance;
};
export declare type StaticResult = {
    type: 'static';
    taskName: string;
    value: string;
};
export declare type ErrorResult = {
    type: 'error';
    taskName: string;
    reason: 'unsupported' | 'unhandled';
    message: Nullable<string>;
};
export declare type Result = TimedResult | StaticResult | ErrorResult;
export declare type ResultMap = {
    [taskName: string]: Result;
};
export declare type TaskMap = {
    [taskName: string]: Task;
};
export declare type TaskGroupResult = {
    groupId: string;
    map: ResultMap;
};
export declare type AllowedGroup = 'client' | 'server';
export {};
