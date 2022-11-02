import { TwingCallableWrapperOptions, TwingCallableWrapper, TwingCallableArgument, TwingCallable } from "./callable-wrapper";
export declare class TwingFunction extends TwingCallableWrapper<any> {
    readonly options: TwingCallableWrapperOptions;
    /**
     * Creates a template function.
     *
     * @param {string} name Name of this function
     * @param {TwingCallable<any>} callable A callable implementing the function. If null, you need to overwrite the "expression_factory" option to customize compilation.
     * @param {TwingCallableArgument[]} acceptedArguments
     * @param {TwingCallableWrapperOptions} options Options
     */
    constructor(name: string, callable: TwingCallable<any>, acceptedArguments: TwingCallableArgument[], options?: TwingCallableWrapperOptions);
}
