import { TimedResult, StaticResult } from './types';
declare const _default: {
    START_ALL: string;
    START_ONE: string;
    FINISH_ALL: string;
    FINISH_ONE: string;
    PUBLISH_INTERACTIONS: string;
};
export default _default;
export declare type RunOne = {
    Params: {
        taskName: string;
        copies: number;
        samples: number;
    };
    Result: {
        taskName: string;
        result: TimedResult | StaticResult;
    };
};
export declare type RunAll = {
    Params: {
        copies: number;
        samples: number;
    };
    Results: {
        results: [];
    };
};
