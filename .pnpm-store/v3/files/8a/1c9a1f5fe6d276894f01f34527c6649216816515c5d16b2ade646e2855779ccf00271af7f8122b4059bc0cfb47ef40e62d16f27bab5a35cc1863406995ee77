import { Channel } from '@storybook/channels';
import { TaskGroupResult } from '../types';
import { MachineEvents, MachineType } from './machine';
export default function usePanelMachine(machine: MachineType, channel: Channel): {
    state: import("xstate").State<import("./machine").MachineContext, MachineEvents, any, {
        value: any;
        context: import("./machine").MachineContext;
    }>;
    send: (event: "WAIT" | {
        type: "WAIT";
    } | "LOADED" | {
        type: "LOADED";
        storyName: string;
        pinned: import("../types").Nullable<import("./machine").RunContext>;
    } | "START_ALL" | {
        type: "START_ALL";
    } | "START_ONE" | {
        type: "START_ONE";
        taskName: string;
    } | "FINISH" | {
        type: "FINISH";
        results: TaskGroupResult[];
    } | "PIN" | {
        type: "PIN";
    } | "UNPIN" | {
        type: "UNPIN";
    } | "SAVE" | {
        type: "SAVE";
    } | "LOAD_FROM_FILE" | {
        type: "LOAD_FROM_FILE";
        storyName: string;
        pinned: import("../types").Nullable<import("./machine").RunContext>;
    } | "SET_VALUES" | {
        type: "SET_VALUES";
        copies: number;
        samples: number;
    } | import("xstate").Event<MachineEvents>[] | import("xstate").SCXML.Event<MachineEvents>, payload?: import("xstate").EventData | undefined) => import("xstate").State<import("./machine").MachineContext, MachineEvents, any, {
        value: any;
        context: import("./machine").MachineContext;
    }>;
    service: import("xstate").Interpreter<import("./machine").MachineContext, any, MachineEvents, {
        value: any;
        context: import("./machine").MachineContext;
    }>;
};
