import { Interpreter, StateMachine, State } from 'xstate';
import { Nullable, TaskGroupResult } from './../types';
export declare type MachineEvents = {
    type: 'WAIT';
} | {
    type: 'LOADED';
    storyName: string;
    pinned: Nullable<RunContext>;
} | {
    type: 'START_ALL';
} | {
    type: 'START_ONE';
    taskName: string;
} | {
    type: 'FINISH';
    results: TaskGroupResult[];
} | {
    type: 'PIN';
} | {
    type: 'UNPIN';
} | {
    type: 'SAVE';
} | {
    type: 'LOAD_FROM_FILE';
    storyName: string;
    pinned: Nullable<RunContext>;
} | {
    type: 'SET_VALUES';
    copies: number;
    samples: number;
};
export declare type RunContext = {
    results: Nullable<TaskGroupResult[]>;
    samples: number;
    copies: number;
};
export declare type MachineContext = {
    message: Nullable<string>;
    sizes: number[];
    current: RunContext;
    storyName: string;
    pinned: Nullable<RunContext>;
};
export declare type MachineSchema = {
    states: {
        waiting: Record<string, any>;
        active: {
            states: {
                idle: Record<string, any>;
                running: Record<string, any>;
            };
        };
    };
};
export declare type StateType = State<MachineContext, MachineEvents, MachineSchema>;
export declare type ServiceType = Interpreter<MachineContext, MachineSchema, MachineEvents>;
export declare type MachineType = StateMachine<MachineContext, MachineSchema, MachineEvents>;
declare const machine: MachineType;
export default machine;
