import { TwingSource } from "./source";
import { TwingNode } from "./node";
export declare type TwingCallable<T> = (...args: any[]) => Promise<T>;
export declare type TwingCallableArgument = {
    name: string;
    defaultValue?: any;
};
export declare type TwingCallableWrapperOptions = {
    needs_template?: boolean;
    needs_context?: boolean;
    needs_output_buffer?: boolean;
    is_variadic?: boolean;
    is_safe?: Array<any>;
    is_safe_callback?: Function;
    deprecated?: boolean | string;
    alternative?: string;
    expression_factory?: Function;
};
export declare abstract class TwingCallableWrapper<T> {
    readonly name: string;
    readonly callable: TwingCallable<T>;
    readonly acceptedArguments: TwingCallableArgument[];
    readonly options: TwingCallableWrapperOptions;
    private arguments;
    protected constructor(name: string, callable: TwingCallable<any>, acceptedArguments: TwingCallableArgument[], options?: TwingCallableWrapperOptions);
    getName(): string;
    /**
     * @returns {Function}
     */
    getCallable(): TwingCallable<T>;
    /**
     * @return TwingCallableArgument[]
     */
    getAcceptedArgments(): TwingCallableArgument[];
    /**
     * Returns the traceable callable.
     *
     * @param {number} lineno
     * @param {TwingSource} source
     *
     * @return {TwingCallable<T>}
     */
    traceableCallable(lineno: number, source: TwingSource): TwingCallable<T>;
    isVariadic(): boolean;
    isDeprecated(): boolean;
    needsTemplate(): boolean;
    needsContext(): boolean;
    needsOutputBuffer(): boolean;
    getSafe(functionArgs: TwingNode): any[];
    getDeprecatedVersion(): string | boolean;
    getAlternative(): string;
    setArguments(arguments_: Array<any>): void;
    getArguments(): any[];
    getExpressionFactory(): Function;
}
