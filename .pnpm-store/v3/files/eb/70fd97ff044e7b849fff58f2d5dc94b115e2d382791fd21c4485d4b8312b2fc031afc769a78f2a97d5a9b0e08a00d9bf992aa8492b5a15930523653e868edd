import { ErrorResult } from '../types';
import { TimedTask, StaticTask, TimedResult, StaticResult, InteractionTask } from '../types';
import React from 'react';
import { TaskGroup, TaskGroupResult } from '../types';
export declare type RunAllArgs = {
    groups: TaskGroup[];
    getNode: () => React.ReactNode;
    samples: number;
    copies: number;
};
export declare function runAll({ groups, getNode, samples, copies, }: RunAllArgs): Promise<TaskGroupResult[]>;
export declare type RunOneTimedTaskArgs = {
    task: TimedTask | InteractionTask;
    getNode: () => React.ReactNode;
    copies: number;
    samples: number;
};
export declare function runOneTimed({ task, getNode, copies, samples, }: RunOneTimedTaskArgs): Promise<TimedResult | ErrorResult>;
export declare type RunOneStaticTaskArgs = {
    task: StaticTask;
    getNode: () => React.ReactNode;
    copies: number;
};
export declare function runOneStatic({ task, getNode, copies, }: RunOneStaticTaskArgs): Promise<StaticResult | ErrorResult>;
