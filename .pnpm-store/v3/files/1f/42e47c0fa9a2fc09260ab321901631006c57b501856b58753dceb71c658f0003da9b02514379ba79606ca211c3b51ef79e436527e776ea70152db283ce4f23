import { TwingCallableWrapperOptions, TwingCallableWrapper, TwingCallableArgument, TwingCallable } from "./callable-wrapper";
export declare type TwingFilterOptions = TwingCallableWrapperOptions & {
    pre_escape?: string;
    preserves_safety?: Array<string>;
};
export declare class TwingFilter extends TwingCallableWrapper<any> {
    readonly options: TwingFilterOptions;
    constructor(name: string, callable: TwingCallable<any>, acceptedArguments: TwingCallableArgument[], options?: TwingFilterOptions);
    getPreservesSafety(): string[];
    getPreEscape(): string;
}
